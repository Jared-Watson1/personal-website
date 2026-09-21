"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

interface LoadingScreenProps {
  onComplete: () => void;
}

const NAME = "Jared Watson";
const LETTERS_START_MS = 520;
const STAGGER_MS = 38;
const FADE_AT_MS = 1800;
const REDUCED_FADE_AT_MS = 600;
const FADE_MS = 420;

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fadeAt = reduce ? REDUCED_FADE_AT_MS : FADE_AT_MS;

    const fadeTimer = setTimeout(() => setFadingOut(true), fadeAt);
    const completeTimer = setTimeout(onComplete, fadeAt + FADE_MS);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={cn(
        "intro fixed inset-0 z-100 flex items-center justify-center gap-[18px] bg-background transition-opacity duration-[420ms] ease-in",
        fadingOut && "opacity-0",
      )}
    >
      <Logo className="h-[34px] max-[520px]:h-7" />
      <p
        aria-label={NAME}
        className="flex text-[26px] font-semibold tracking-[-0.025em] max-[520px]:text-[21px]"
      >
        {NAME.split("").map((char, i) =>
          char === " " ? (
            <span key={i} aria-hidden="true" className="w-[0.28em]" />
          ) : (
            <span
              key={i}
              aria-hidden="true"
              className="animate-letter-rise"
              style={{ animationDelay: `${LETTERS_START_MS + i * STAGGER_MS}ms` }}
            >
              {char}
            </span>
          ),
        )}
      </p>
    </div>
  );
}
