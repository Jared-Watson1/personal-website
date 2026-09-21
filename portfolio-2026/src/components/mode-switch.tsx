"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { applyMode, MODE_KEY, readMode, type Mode } from "@/lib/mode";
import { cn } from "@/lib/utils";

/** The <html> element is the source of truth; the head script sets it before paint. */
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class", "data-mode"],
  });
  return () => observer.disconnect();
}

const getServerSnapshot = () => null;

const OPTIONS: { mode: Mode; label: string }[] = [
  { mode: "light", label: "Light" },
  { mode: "dark", label: "Dark" },
  { mode: "md", label: "Markdown" },
];

export function ModeSwitch() {
  const current = useSyncExternalStore(subscribe, readMode, getServerSnapshot);

  const select = (mode: Mode) => {
    applyMode(mode);
    try {
      localStorage.setItem(MODE_KEY, mode);
    } catch {}
  };

  return (
    <div role="group" aria-label="Display mode" className="inline-flex shrink-0 border border-border">
      {OPTIONS.map(({ mode, label }) => {
        const pressed = current === mode;
        return (
          <button
            key={mode}
            type="button"
            aria-label={label}
            aria-pressed={pressed}
            onClick={() => select(mode)}
            className={cn(
              "inline-flex h-[30px] w-[34px] cursor-pointer items-center justify-center border-l border-border font-mono text-[11px] font-medium transition-colors duration-150 first:border-l-0",
              pressed
                ? "bg-brand-soft text-brand-ink"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {mode === "light" && <Sun className="size-3.5" aria-hidden="true" />}
            {mode === "dark" && <Moon className="size-3.5" aria-hidden="true" />}
            {mode === "md" && ".md"}
          </button>
        );
      })}
    </div>
  );
}
