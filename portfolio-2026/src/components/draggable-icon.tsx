"use client";

import { GalaxyIcon } from "@/components/icons/galaxy-icon";
import { useParticleEffect } from "@/hooks/use-particle-effect";
import { useCallback, useEffect, useRef, useState } from "react";

interface DraggableIconProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const CANVAS_SIZE = 160;
const CANVAS_CENTER = CANVAS_SIZE / 2;

export function DraggableIcon({ containerRef }: DraggableIconProps) {
  const iconRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const currentX = useRef(0);
  const targetX = useRef(0);
  const animFrameRef = useRef<number | null>(null);
  const tracking = useRef(false);
  const [hovered, setHovered] = useState(false);

  useParticleEffect({
    canvasRef,
    active: hovered,
    originX: CANVAS_CENTER,
    originY: CANVAS_CENTER,
  });

  const getMaxOffset = useCallback(() => {
    if (!containerRef.current || !iconRef.current) return 0;
    const containerWidth = containerRef.current.offsetWidth;
    const iconWidth = iconRef.current.offsetWidth;
    return containerWidth - iconWidth - 16;
  }, [containerRef]);

  const animate = useCallback(() => {
    const lerp = 0.06;
    const diff = targetX.current - currentX.current;

    if (Math.abs(diff) < 0.3) {
      currentX.current = targetX.current;
    } else {
      currentX.current += diff * lerp;
    }

    if (iconRef.current) {
      iconRef.current.style.transform = `translateX(${currentX.current}px)`;
    }

    animFrameRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    animFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [animate]);

  const onDocumentMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!tracking.current || !containerRef.current || !iconRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const iconWidth = iconRef.current.offsetWidth;
      const relativeX = e.clientX - containerRect.left - iconWidth / 2;
      const max = getMaxOffset();
      targetX.current = Math.max(0, Math.min(max, relativeX));

      const iconRect = iconRef.current.getBoundingClientRect();
      const iconCenterX = iconRect.left + iconRect.width / 2;
      const iconCenterY = iconRect.top + iconRect.height / 2;
      const distX = Math.abs(e.clientX - iconCenterX);
      const distY = Math.abs(e.clientY - iconCenterY);

      if (distX > 120 || distY > 100) {
        tracking.current = false;
        setHovered(false);
        targetX.current = 0;
      }
    },
    [containerRef, getMaxOffset]
  );

  useEffect(() => {
    document.addEventListener("mousemove", onDocumentMouseMove);
    return () => {
      document.removeEventListener("mousemove", onDocumentMouseMove);
    };
  }, [onDocumentMouseMove]);

  const onIconMouseEnter = useCallback(() => {
    tracking.current = true;
    setHovered(true);
  }, []);

  const onIconMouseLeave = useCallback(() => {
    tracking.current = false;
    setHovered(false);
    targetX.current = 0;
  }, []);

  return (
    <div
      ref={iconRef}
      className="absolute -top-14 left-2 select-none"
      style={{ perspective: "400px" }}
    >
      <canvas
        ref={canvasRef}
        width={CANVAS_SIZE}
        height={CANVAS_SIZE}
        className="pointer-events-none absolute"
        style={{
          left: `calc(50% - ${CANVAS_CENTER}px)`,
          top: `calc(50% - ${CANVAS_CENTER}px)`,
        }}
      />
      <div
        onMouseEnter={onIconMouseEnter}
        onMouseLeave={onIconMouseLeave}
        className="cursor-pointer p-1"
      >
        <div
          className={hovered ? "animate-spin-3d" : ""}
          style={{ transformStyle: "preserve-3d" }}
        >
          <GalaxyIcon className="size-12 text-orange-500 drop-shadow-md" />
        </div>
      </div>
    </div>
  );
}
