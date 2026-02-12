"use client";

import { useCallback, useEffect, useRef } from "react";

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  speed: number;
  trail: { x: number; y: number; alpha: number }[];
  size: number;
}

interface UseParticleEffectOptions {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  active: boolean;
  originX: number;
  originY: number;
}

export function useParticleEffect({
  canvasRef,
  active,
  originX,
  originY,
}: UseParticleEffectOptions) {
  const starsRef = useRef<ShootingStar[]>([]);
  const rafRef = useRef<number | null>(null);
  const activeRef = useRef(active);
  activeRef.current = active;

  const tick = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (activeRef.current && Math.random() < 0.3) {
      const angle = Math.random() * Math.PI * 2;
      const spawnRadius = 8 + Math.random() * 10;
      const speed = 1.5 + Math.random() * 2;

      starsRef.current.push({
        x: originX + Math.cos(angle) * spawnRadius,
        y: originY + Math.sin(angle) * spawnRadius,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        speed,
        trail: [],
        size: 1.2 + Math.random() * 1,
      });
    }

    for (let i = starsRef.current.length - 1; i >= 0; i--) {
      const s = starsRef.current[i];

      s.trail.push({ x: s.x, y: s.y, alpha: s.life * 0.5 });
      if (s.trail.length > 6) s.trail.shift();

      s.x += s.vx;
      s.y += s.vy;
      s.life -= 0.018;

      if (s.life <= 0) {
        starsRef.current.splice(i, 1);
        continue;
      }

      for (let t = 0; t < s.trail.length; t++) {
        const point = s.trail[t];
        const trailAlpha = point.alpha * (t / s.trail.length) * 0.6;
        const trailSize = s.size * (t / s.trail.length) * 0.7;
        ctx.beginPath();
        ctx.arc(point.x, point.y, trailSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(249, 115, 22, ${trailAlpha})`;
        ctx.fill();
      }

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 180, 100, ${s.life})`;
      ctx.shadowColor = "rgba(249, 115, 22, 0.5)";
      ctx.shadowBlur = 3;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    if (activeRef.current || starsRef.current.length > 0) {
      rafRef.current = requestAnimationFrame(tick);
    } else {
      rafRef.current = null;
    }
  }, [canvasRef, originX, originY]);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    if (active && rafRef.current === null) {
      rafRef.current = requestAnimationFrame(tick);
    }
  }, [active, tick]);
}
