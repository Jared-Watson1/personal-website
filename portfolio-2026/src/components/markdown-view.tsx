import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

/** Markdown routes point at their HTML page so the in-page view stays in the site. */
function pageHref(url: string): string {
  const match = url.match(/^\/([\w-]*)\.md(?:#(.+))?$/);
  if (!match) return url;
  const [, page, hash] = match;
  if (page === "index") return "/";
  if (page === "projects" && hash) return `/projects?project=${hash}`;
  return `/${page}`;
}

function renderInline(text: string, key: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(LINK)) {
    const [raw, , url] = match;
    const start = match.index ?? 0;
    if (start > last) out.push(text.slice(last, start));
    const external = /^https?:/.test(url);
    out.push(
      <a
        key={`${key}-${start}`}
        href={pageHref(url)}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        className="text-foreground underline decoration-line-strong underline-offset-[3px] transition-colors duration-150 hover:text-brand-ink"
      >
        {raw}
      </a>,
    );
    last = start + raw.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function renderLine(line: string, index: number): ReactNode {
  const key = String(index);
  const heading = line.match(/^(#{1,6}) (.*)$/);
  if (heading) {
    return (
      <span key={key} className="font-medium text-foreground">
        <span className="text-brand">{heading[1]}</span> {renderInline(heading[2], key)}
      </span>
    );
  }
  if (/^<!--.*-->$/.test(line) || line === "---") {
    return (
      <span key={key} className="text-muted-foreground">
        {line}
      </span>
    );
  }
  return <span key={key}>{renderInline(line, key)}</span>;
}

interface MarkdownViewProps {
  source: string;
  /** Name shown on the scroll ruler */
  rail: string;
  className?: string;
}

export function MarkdownView({ source, rail, className }: MarkdownViewProps) {
  const lines = source.split("\n");
  return (
    <div
      data-rail={rail}
      className={cn(
        "md-only bg-background px-(--pad) pt-12 pb-18 font-mono text-[13px] leading-[1.8] wrap-anywhere whitespace-pre-wrap text-secondary-foreground",
        className,
      )}
    >
      {lines.map((line, i) => (
        <span key={i}>
          {renderLine(line, i)}
          {i < lines.length - 1 && "\n"}
        </span>
      ))}
    </div>
  );
}
