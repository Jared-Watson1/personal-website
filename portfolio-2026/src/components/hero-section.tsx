"use client";

import { useRef } from "react";
import { DraggableIcon } from "@/components/draggable-icon";
import { SuggestionButtons } from "@/components/suggestion-buttons";
import { StackPanel } from "@/components/stack-panel";

function Dot() {
  return (
    <span aria-hidden="true" className="mx-1.5 text-orange-500">
      ·
    </span>
  );
}

export function HeroSection() {
  const linksRef = useRef<HTMLDivElement>(null);

  return (
    <section className="mx-auto grid max-w-[1240px] items-center gap-9 px-6 pt-24 pb-12 sm:px-10 lg:min-h-dvh lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-14 lg:px-16 lg:pt-20 lg:pb-24">
      <div className="min-w-0">
        <p className="rise delay-[40ms] mb-5 font-mono text-xs uppercase tracking-[.06em] text-muted-foreground">
          <span className="whitespace-nowrap">AI Engineer at SMART</span>
          <Dot />
          <span className="whitespace-nowrap">Emory CS ’25</span>
          <Dot />
          <span className="whitespace-nowrap">Tampa, FL</span>
        </p>

        <h1 className="rise delay-[100ms] text-balance text-[clamp(34px,4.6vw,58px)] leading-[1.02] font-bold tracking-[-0.035em] text-foreground">
          Full stack software engineer specializing in{" "}
          <span className="text-orange-500">AI applications</span>.
        </h1>

        <p className="rise delay-[160ms] mt-6 max-w-[38ch] text-base leading-normal text-foreground/80 sm:text-lg">
          I design and build AI products end to end, from retrieval and model
          infrastructure to the user-facing interface.
        </p>
        <p className="rise delay-[200ms] mt-1.5 max-w-[42ch] text-[15px] text-muted-foreground">
          Currently an AI Engineer at SMART. Previously the founder of Cure AI,
          with a patent in AI query processing.
        </p>

        <div ref={linksRef} className="rise delay-[250ms] relative mt-[76px]">
          <DraggableIcon containerRef={linksRef} />
          <SuggestionButtons />
        </div>
      </div>

      <StackPanel className="rise delay-[260ms]" />
    </section>
  );
}
