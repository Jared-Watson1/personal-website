"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import { Logo } from "@/components/logo";
import { ModeSwitch } from "@/components/mode-switch";

function isActive(pathname: string, href: string, external: boolean) {
  if (external) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

function linkProps(href: string, external: boolean) {
  return external && href.startsWith("http")
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/88 backdrop-blur-sm">
      <div className="mx-auto flex h-(--header-h) max-w-[1080px] items-center justify-between gap-6 px-(--pad)">
        <Link
          href="/"
          aria-label="Jared Watson, home"
          className="logo-link inline-flex items-center py-1.5"
        >
          <Logo />
        </Link>

        <div className="flex items-center gap-[26px]">
          <nav aria-label="Primary" className="hidden items-center gap-6 min-[820px]:flex">
            {NAV_LINKS.map(({ label, href, external }) => {
              const active = isActive(pathname, href, external);
              const className =
                "nav-link text-[13.5px] font-medium text-muted-foreground";
              if (external) {
                return (
                  <a key={label} href={href} className={className} {...linkProps(href, external)}>
                    {label}
                    {href.startsWith("http") && (
                      <span aria-hidden="true" className="ml-0.5 text-[0.8em] text-muted-foreground">
                        ↗
                      </span>
                    )}
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

          <ModeSwitch />

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="label inline-flex h-8 cursor-pointer items-center border border-border px-[11px] min-[820px]:hidden"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-border bg-background px-(--pad) pt-1 pb-3 min-[820px]:hidden"
        >
          {NAV_LINKS.map(({ label, href, external }) => {
            const active = isActive(pathname, href, external);
            const className =
              "block border-t border-border py-2.5 text-sm font-medium first:border-t-0";
            const text = external && href.startsWith("http") ? `${label} ↗` : label;
            if (external) {
              return (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={className}
                  {...linkProps(href, external)}
                >
                  {text}
                </a>
              );
            }
            return (
              <Link
                key={label}
                href={href}
                aria-current={active ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
                className={className}
              >
                {text}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
