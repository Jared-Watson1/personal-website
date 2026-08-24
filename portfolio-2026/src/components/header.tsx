"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin, FolderOpen, Mail, Menu, X, BookOpen } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const ICONS = {
  Projects: FolderOpen,
  Blog: BookOpen,
  GitHub: Github,
  LinkedIn: Linkedin,
  Contact: Mail,
} as const;

function isActive(pathname: string, href: string, external: boolean) {
  if (external) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-20 flex items-start justify-between p-3 sm:p-5">
      {/* Mobile menu button */}
      <div className="pointer-events-auto relative sm:hidden">
        <Button
          variant="outline"
          size="icon"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
          className="rounded-xl bg-white/80 backdrop-blur-sm shadow-sm hover:bg-white"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>

        {mobileOpen && (
          <div className="absolute top-full left-0 mt-1 w-48 rounded-xl border border-border bg-white p-1 shadow-md">
            {NAV_LINKS.map(({ label, href, external }) => {
              const Icon = ICONS[label];
              return (
                <a
                  key={label}
                  href={href}
                  {...(external && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-foreground transition-colors hover:bg-accent"
                >
                  <Icon className="size-4 text-muted-foreground" />
                  {label}
                </a>
              );
            })}
          </div>
        )}
      </div>

      {/* Brand pill */}
      <Link
        href="/"
        className="pointer-events-auto hidden items-center gap-2 rounded-xl border border-border bg-white/80 px-4 py-2.5 shadow-sm backdrop-blur-sm transition-[background-color,transform] duration-150 ease-out hover:bg-white active:scale-[.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 sm:flex"
      >
        <span className="text-xl font-bold tracking-tight text-foreground">
          Jared Watson
        </span>
        <span className="text-xl font-semibold text-orange-500">/</span>
        <span className="text-lg font-medium text-muted-foreground">
          software engineer
        </span>
      </Link>

      {/* Inline nav pill */}
      <nav
        aria-label="Primary"
        className="pointer-events-auto hidden items-center gap-0.5 rounded-xl border border-border bg-white/80 p-1.5 shadow-sm backdrop-blur-sm sm:flex"
      >
        {NAV_LINKS.map(({ label, href, external }) => {
          const active = isActive(pathname, href, external);
          const className = cn(
            "rounded-lg px-3 py-1.5 text-sm font-medium transition-[background-color,transform] duration-150 ease-out active:scale-[.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500",
            active
              ? "bg-foreground text-background"
              : "text-foreground hover:bg-neutral-100",
          );
          if (external) {
            return (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {label}
                <span aria-hidden="true" className="ml-1 text-[11px] text-muted-foreground">
                  ↗
                </span>
              </a>
            );
          }
          return (
            <Link
              key={label}
              href={href}
              aria-current={active ? "page" : undefined}
              className={className}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
