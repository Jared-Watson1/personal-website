"use client";

import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const NAME = "Jared Watson";
const STAGGER_MS = 60;
const HOLD_MS = 400;
const FADE_MS = 500;

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const letterCount = NAME.replace(" ", "").length;
    const animationEnd = letterCount * STAGGER_MS + 400;

    const holdTimer = setTimeout(() => {
      setFadingOut(true);
    }, animationEnd + HOLD_MS);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, animationEnd + HOLD_MS + FADE_MS);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  let letterIndex = 0;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background ${fadingOut ? "loading-fade-out" : ""}`}
    >
      <h1 className="flex text-4xl font-bold tracking-tight sm:text-5xl">
        {NAME.split("").map((char, i) => {
          if (char === " ") {
            return <span key={i} className="w-3" />;
          }
          const delay = letterIndex * STAGGER_MS;
          letterIndex++;
          return (
            <span
              key={i}
              className="animate-letter-rise"
              style={{ animationDelay: `${delay}ms` }}
            >
              {char}
            </span>
          );
        })}
      </h1>
    </div>
  );
}
