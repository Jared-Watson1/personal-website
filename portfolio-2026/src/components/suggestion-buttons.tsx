import { Github, Linkedin, FolderOpen, Mail, BookOpen } from "lucide-react";
import { LINKS, EMAIL } from "@/lib/constants";

const suggestions = [
  {
    label: "Projects",
    icon: FolderOpen,
    href: LINKS.projects,
    external: false,
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-50",
  },
  {
    label: "Blog",
    icon: BookOpen,
    href: LINKS.blog,
    external: false,
    iconColor: "text-amber-500",
    iconBg: "bg-amber-50",
  },
  {
    label: "GitHub",
    icon: Github,
    href: LINKS.github,
    external: true,
    iconColor: "text-violet-500",
    iconBg: "bg-violet-50",
  },
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: LINKS.linkedin,
    external: true,
    iconColor: "text-blue-500",
    iconBg: "bg-blue-50",
  },
  {
    label: "Contact",
    icon: Mail,
    href: `mailto:${EMAIL}`,
    external: true,
    iconColor: "text-orange-500",
    iconBg: "bg-orange-50",
  },
] as const;

export function SuggestionButtons() {
  return (
    <nav aria-label="Quick links" className="grid grid-cols-2 gap-2 md:grid-cols-5">
      {suggestions.map(
        ({ label, icon: Icon, href, external, iconColor, iconBg }) => (
          <a
            key={label}
            href={href}
            {...(external && { target: "_blank", rel: "noopener noreferrer" })}
            className="flex items-center gap-2.5 rounded-xl border border-border bg-white px-3.5 py-3 text-sm font-medium text-foreground shadow-sm transition-[background-color,transform] duration-150 ease-out last:col-span-2 hover:bg-accent active:scale-[.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 md:last:col-span-1"
          >
            <span
              className={`flex size-7 shrink-0 items-center justify-center rounded-lg ${iconBg}`}
            >
              <Icon className={`size-4 ${iconColor}`} />
            </span>
            {label}
          </a>
        ),
      )}
    </nav>
  );
}
