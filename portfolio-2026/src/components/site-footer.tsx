import { LINKS, EMAIL } from "@/lib/constants";

const FOOTER_LINKS = [
  { label: "Projects", href: LINKS.projects },
  { label: "Blog", href: LINKS.blog },
  { label: "GitHub", href: LINKS.github, external: true },
  { label: "LinkedIn", href: LINKS.linkedin, external: true },
  { label: EMAIL, href: `mailto:${EMAIL}` },
];

export function SiteFooter() {
  return (
    <footer className="mx-auto flex max-w-[1240px] flex-col items-start gap-3 border-t border-border px-6 pt-6 pb-8 text-[13px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16 lg:pt-7 lg:pb-9">
      <span>© 2026 Jared Watson</span>
      <nav aria-label="Footer" className="flex flex-wrap gap-x-[18px] gap-y-1.5">
        {FOOTER_LINKS.map(({ label, href, external }) => (
          <a
            key={label}
            href={href}
            {...(external && { target: "_blank", rel: "noopener noreferrer" })}
            className="transition-colors hover:text-foreground"
          >
            {label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
