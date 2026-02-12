"use client";

import { useEffect, useState } from "react";

interface HeroSectionProps {
  visible: boolean;
  dismissing: boolean;
}

export function HeroSection({ visible, dismissing }: HeroSectionProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      setMounted(true);
    });
  }, []);

  const show = visible && mounted && !dismissing;

  return (
    <div
      className={`text-center transition-all duration-500 ease-out ${
        dismissing
          ? "opacity-0 -translate-y-12 pointer-events-none"
          : show
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      <h1 className="text-6xl sm:text-6xl font-bold tracking-tight text-foreground">
        Full stack software engineer <br className="hidden sm:block" />
        specializing in <span className="text-orange-500">AI applications</span>
        .
      </h1>
      <p className="mt-5 text-lg text-foreground/80">
        Explore what I have been building and learning.
      </p>
      <p className="mt-1.5 text-base text-muted-foreground">
        Ask a question below or pick a link to get started.
      </p>
    </div>
  );
}
