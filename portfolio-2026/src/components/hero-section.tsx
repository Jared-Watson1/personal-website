"use client";

import { useRef } from "react";
import Link from "next/link";
import { DraggableIcon } from "@/components/draggable-icon";
import { StackPanel } from "@/components/stack-panel";
import { EMAIL } from "@/lib/constants";
import { HERO } from "@/lib/copy";
import { CURRENT_PROJECT } from "@/lib/projects";

export function HeroSection() {
  const ctaRef = useRef<HTMLDivElement>(null);

  return (
    <section
      data-rail="intro"
      className="grid items-end gap-x-14 gap-y-12 bg-background px-(--pad) pt-18 pb-16 max-[720px]:pt-13 max-[720px]:pb-11 min-[1000px]:grid-cols-[minmax(0,1fr)_296px]"
    >
      <div className="min-w-0">
        <p className="rise label delay-[40ms]">{HERO.greeting}</p>

        <h1 className="rise mt-[18px] max-w-[13em] text-[clamp(34px,4.7vw,54px)] leading-[1.07] font-semibold tracking-[-0.032em] text-balance delay-[100ms]">
          {HERO.headline}{" "}
          <span className="text-brand-ink">{HERO.headlineAccent}</span>.
        </h1>

        <p className="rise mt-[22px] max-w-[54ch] text-[17px] leading-[1.6] text-pretty text-muted-foreground delay-[160ms] max-[720px]:text-base">
          Currently an AI engineer at{" "}
          <a href="#experience" className="link">
            SMART
          </a>
          . Before that I founded{" "}
          <Link href="/projects?project=cure-ai" className="link">
            Cure AI
          </Link>
          , a research assistant with a patented retrieval method. On the side
          I’m building{" "}
          <a href={CURRENT_PROJECT.url} target="_blank" rel="noopener noreferrer" className="link">
            Pyx
          </a>
          , a local-first portfolio tracker.
        </p>

        <div ref={ctaRef} className="rise relative mt-16 flex flex-wrap gap-2.5 delay-[250ms]">
          <DraggableIcon containerRef={ctaRef} />
          <Link href="/projects" className="btn btn-ink">
            View projects{" "}
            <span aria-hidden="true" className="btn-slash">
              /
            </span>
          </Link>
          <a href={`mailto:${EMAIL}`} className="btn">
            Get in touch
          </a>
        </div>
      </div>

      <StackPanel className="rise delay-[260ms]" />
    </section>
  );
}
