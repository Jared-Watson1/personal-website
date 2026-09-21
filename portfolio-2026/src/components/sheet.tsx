import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/** The 1080px column between two hairlines. It has no background of its own. */
export function Sheet({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-[1080px] border-x border-border max-[1081px]:border-x-0">
      <main>{children}</main>
    </div>
  );
}

interface BandLink {
  label: string;
  href: string;
  external?: boolean;
}

interface BandProps {
  id: string;
  title: string;
  /** Section name shown on the scroll ruler */
  rail?: string;
  more?: BandLink;
  className?: string;
  children: ReactNode;
}

const moreClass = "whitespace-nowrap transition-colors duration-150 hover:text-brand-ink";

export function Band({ id, title, rail, more, className, children }: BandProps) {
  const headingId = `${id}-title`;
  return (
    <section
      id={id}
      data-rail={rail ?? id}
      aria-labelledby={headingId}
      className={cn(
        "border-t border-border bg-veil px-(--pad) py-14 max-[720px]:py-11",
        className,
      )}
    >
      <div className="label mb-7 flex items-center gap-4">
        <h2 id={headingId} className="whitespace-nowrap text-foreground">
          <span aria-hidden="true" className="text-brand">
            /
          </span>{" "}
          {title}
        </h2>
        <span aria-hidden="true" className="h-px flex-1 bg-border" />
        {more &&
          (more.external ? (
            <a href={more.href} target="_blank" rel="noopener noreferrer" className={moreClass}>
              {more.label}
            </a>
          ) : (
            <Link href={more.href} className={moreClass}>
              {more.label}
            </Link>
          ))}
      </div>
      {children}
    </section>
  );
}

interface PageHeadProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

/** Solid title block at the top of Projects, Blog, and posts. */
export function PageHead({ title, subtitle, children }: PageHeadProps) {
  return (
    <div className="border-b border-border bg-background px-(--pad) pt-16 pb-9">
      <h1 className="text-[26px] leading-tight font-semibold tracking-[-0.025em] text-balance">
        {title}
        {subtitle && (
          <>
            {" "}
            <span aria-hidden="true" className="text-brand">
              /
            </span>{" "}
            <span className="text-[17px] font-medium tracking-[-0.01em] text-muted-foreground">
              {subtitle}
            </span>
          </>
        )}
      </h1>
      {children}
    </div>
  );
}

export function PageBody({ children, rail }: { children: ReactNode; rail: string }) {
  return (
    <div data-rail={rail} className="bg-veil px-(--pad) pt-9 pb-18">
      {children}
    </div>
  );
}
