import { LINKS, EMAIL } from "@/lib/constants";

const FOOTER_LINKS = [
  { label: "GitHub ↗", href: LINKS.github, external: true },
  { label: "LinkedIn ↗", href: LINKS.linkedin, external: true },
  { label: "Email ↗", href: `mailto:${EMAIL}` },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="label mx-auto flex min-h-[52px] max-w-[1080px] flex-wrap items-center justify-between gap-x-5 gap-y-1 px-(--pad) max-[720px]:py-3.5">
        <span>© 2026 Jared Watson</span>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-1">
          {FOOTER_LINKS.map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              {...(external && { target: "_blank", rel: "noopener noreferrer" })}
              className="transition-colors duration-150 hover:text-brand-ink"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
