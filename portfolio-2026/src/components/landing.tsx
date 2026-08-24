"use client";

import { useCallback, useState, useSyncExternalStore, type ReactNode } from "react";
import { LoadingScreen } from "@/components/loading-screen";
import { HeroSection } from "@/components/hero-section";

type SitePhase = "loading" | "idle";

const SESSION_KEY = "jw-loaded";

const subscribe = () => () => {};
const getSeenSnapshot = () => sessionStorage.getItem(SESSION_KEY) !== null;
const getServerSnapshot = () => null;

interface LandingProps {
  /** Sections rendered below the hero; server components are passed through. */
  children: ReactNode;
}

export function Landing({ children }: LandingProps) {
  const seenThisSession = useSyncExternalStore(
    subscribe,
    getSeenSnapshot,
    getServerSnapshot,
  );
  const [introDone, setIntroDone] = useState(false);

  const handleLoadingComplete = useCallback(() => {
    sessionStorage.setItem(SESSION_KEY, "1");
    setIntroDone(true);
  }, []);

  let phase: SitePhase | null = null;
  if (seenThisSession !== null) {
    phase = seenThisSession || introDone ? "idle" : "loading";
  }

  return (
    <>
      {phase === "loading" && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}

      <main data-ready={phase === "idle"} className="relative z-10">
        <HeroSection />
        {children}
      </main>
    </>
  );
}
