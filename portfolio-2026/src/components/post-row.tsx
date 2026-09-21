import type { ReactNode } from "react";
import Link from "next/link";
import { formatPostDate, type Post } from "@/lib/blog";

const rowClass =
  "group grid items-baseline gap-x-7 gap-y-1 border-b border-border px-4 py-[18px] transition-colors duration-150 hover:bg-raised md:grid-cols-[96px_minmax(0,1fr)_auto]";

export function PostRow({ post }: { post: Post }) {
  const { slug, frontmatter } = post;
  const { title, description, date, externalUrl, source } = frontmatter;

  const content = (
    <>
      <time dateTime={date} className="label">
        {formatPostDate(date)}
      </time>
      <div>
        <h3 className="text-[15px] leading-[1.4] font-semibold tracking-[-0.005em] text-balance">
          {title}
        </h3>
        <p className="mt-[3px] max-w-[70ch] text-[13.5px] leading-[1.55] text-muted-foreground">
          {description}
        </p>
      </div>
      <span className="label whitespace-nowrap transition-colors duration-150 group-hover:text-brand-ink">
        {externalUrl && `${source ?? new URL(externalUrl).hostname} ↗`}
      </span>
    </>
  );

  if (externalUrl) {
    return (
      <li>
        <a href={externalUrl} target="_blank" rel="noopener noreferrer" className={rowClass}>
          {content}
        </a>
      </li>
    );
  }

  return (
    <li>
      <Link href={`/blog/${slug}`} className={rowClass}>
        {content}
      </Link>
    </li>
  );
}

export function PostList({ children }: { children: ReactNode }) {
  return <ul className="-mx-4 border-t border-border">{children}</ul>;
}
