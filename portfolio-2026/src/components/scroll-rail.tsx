"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const IDLE_MS = 900;

/**
 * Left edge ruler that starts below the sticky header. Every update is
 * written straight to the DOM from the event handler so the marker never
 * lags the native scrollbar.
 */
export function ScrollRail() {
  const pathname = usePathname();
  const railRef = useRef<HTMLDivElement>(null);
  const markerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const rail = railRef.current;
    const marker = markerRef.current;
    const cursor = cursorRef.current;
    const label = labelRef.current;
    if (!rail || !marker || !cursor || !label) return;

    let idleTimer: ReturnType<typeof setTimeout> | undefined;

    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      marker.style.transform = `translateY(${Math.round(progress * (rail.clientHeight - 2))}px)`;

      // The last visible section whose top has passed 35% of the viewport
      const probe = window.innerHeight * 0.35;
      let name = "";
      document.querySelectorAll<HTMLElement>("[data-rail]").forEach((section) => {
        if (section.getClientRects().length === 0) return;
        if (!name || section.getBoundingClientRect().top <= probe) {
          name = section.dataset.rail ?? name;
        }
      });
      label.textContent = name;
    };

    const onScroll = () => {
      update();
      rail.dataset.active = "true";
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        rail.dataset.active = "false";
      }, IDLE_MS);
    };

    const onPointerMove = (event: PointerEvent) => {
      const y = event.clientY - rail.getBoundingClientRect().top;
      cursor.style.transform = `translateY(${y}px)`;
      cursor.style.opacity = y >= 0 ? "1" : "0";
    };

    const onPointerLeave = () => {
      cursor.style.opacity = "0";
    };

    // The label depends on which tree is visible, so recheck when the mode changes
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-mode"],
    });

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    return () => {
      clearTimeout(idleTimer);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [pathname]);

  return (
    <div
      ref={railRef}
      aria-hidden="true"
      data-active="false"
      className="group/rail pointer-events-none fixed top-(--header-h) bottom-0 left-0 z-30 hidden w-[18px] sm:block"
    >
      <div className="rail-ticks absolute inset-y-0 left-0 w-[9px] opacity-50" />
      <div
        ref={cursorRef}
        className="absolute top-0 left-0 h-px w-[11px] bg-line-strong opacity-0 transition-opacity duration-200 will-change-transform"
      />
      <div ref={markerRef} className="absolute top-0 left-0 h-0.5 w-3.5 bg-brand will-change-transform">
        <span
          ref={labelRef}
          className="label absolute -top-[7px] left-5 hidden -translate-x-1 bg-background px-[5px] text-[10px] leading-4 tracking-[0.08em] whitespace-nowrap opacity-0 transition-[opacity,translate] duration-200 ease-out-strong group-data-[active=true]/rail:translate-x-0 group-data-[active=true]/rail:opacity-100 min-[1240px]:block"
        />
      </div>
    </div>
  );
}
