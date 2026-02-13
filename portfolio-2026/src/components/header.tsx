"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import { Github, Linkedin, FolderOpen, Mail, ChevronDown, Menu, X } from "lucide-react";
import { LINKS, EMAIL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const links = [
  {
    label: "Projects",
    icon: FolderOpen,
    href: LINKS.projects,
    external: false,
  },
  { label: "GitHub", icon: Github, href: LINKS.github, external: true },
  { label: "LinkedIn", icon: Linkedin, href: LINKS.linkedin, external: true },
  { label: "Contact", icon: Mail, href: `mailto:${EMAIL}`, external: true },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpen(true);
  }, []);

  const handleLeave = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 z-20 p-3 sm:p-5">
      {/* Mobile menu button */}
      <div className="sm:hidden relative">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="rounded-xl bg-white/80 backdrop-blur-sm shadow-sm hover:bg-white"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>

        {mobileOpen && (
          <div className="absolute top-full left-0 mt-1 w-48 rounded-xl border border-border bg-white p-1 shadow-md">
            {links.map(({ label, icon: Icon, href, external }) => (
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
            ))}
          </div>
        )}
      </div>

      {/* Desktop header */}
      <div
        ref={containerRef}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="relative hidden sm:block"
      >
        <Link
          href="/"
          className="flex w-full items-center gap-2 rounded-xl bg-white/80 px-4 py-2.5 shadow-sm backdrop-blur-sm outline-none transition-colors hover:bg-white"
        >
          <span className="text-xl font-bold tracking-tight text-foreground">
            Jared Watson
          </span>
          <span className="text-xl text-orange-500 font-semibold">/</span>
          <span className="text-lg text-muted-foreground font-medium">
            software engineer
          </span>
          <ChevronDown
            className={cn(
              "size-4 text-muted-foreground transition-transform duration-200",
              open && "rotate-180",
            )}
          />
        </Link>

        {open && (
          <div className="absolute top-full left-0 right-0 mt-1 rounded-xl border border-border bg-white p-1 shadow-md">
            {links.map(({ label, icon: Icon, href, external }) => (
              <a
                key={label}
                href={href}
                {...(external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-foreground transition-colors hover:bg-accent"
              >
                <Icon className="size-4 text-muted-foreground" />
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
