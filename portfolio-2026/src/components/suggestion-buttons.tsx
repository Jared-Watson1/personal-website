"use client";

import { Github, Linkedin, FolderOpen, Mail } from "lucide-react";
import { LINKS, EMAIL } from "@/lib/constants";

const suggestions = [
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
    label: "Projects",
    icon: FolderOpen,
    href: LINKS.projects,
    external: false,
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-50",
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
    <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
      {suggestions.map(({ label, icon: Icon, href, external, iconColor, iconBg }) => (
        <a
          key={label}
          href={href}
          {...(external && { target: "_blank", rel: "noopener noreferrer" })}
          className="flex items-center gap-2.5 rounded-xl border border-border bg-white px-3.5 py-3 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-accent"
        >
          <span className={`flex size-7 items-center justify-center rounded-lg ${iconBg}`}>
            <Icon className={`size-4 ${iconColor}`} />
          </span>
          {label}
        </a>
      ))}
    </div>
  );
}
