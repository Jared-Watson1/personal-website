"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { PROJECTS } from "@/lib/projects";
import {
  WALL_SKILLS,
  findSkill,
  pluralProjects,
  projectCount,
} from "@/lib/skills";
import { SkillLogo, brandColor, hasLogo } from "@/components/skill-logo";

interface StackPanelProps {
  className?: string;
}

export function StackPanel({ className }: StackPanelProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = findSkill(activeId);

  return (
    <aside
      aria-labelledby="stack-title"
      className={cn(
        "rounded-2xl border border-border bg-white/80 p-5 shadow-sm backdrop-blur-sm",
        className,
      )}
    >
      <div className="mb-3.5 flex items-baseline justify-between gap-4">
        <h2
          id="stack-title"
          className="font-mono text-xs font-medium uppercase tracking-[.06em] text-muted-foreground"
        >
          Stack
        </h2>
        <span className="text-right text-xs text-neutral-400">
          select a technology to view related projects
        </span>
      </div>

      <ul className="grid grid-cols-4 gap-2 sm:grid-cols-8 lg:grid-cols-4">
        {WALL_SKILLS.map((skill) => (
          <li key={skill.id} className="min-w-0">
            <Link
              href={`/projects?skill=${skill.id}`}
              aria-label={skill.name}
              style={{ "--brand": brandColor(skill) } as React.CSSProperties}
              onMouseEnter={() => setActiveId(skill.id)}
              onMouseLeave={() => setActiveId(null)}
              onFocus={() => setActiveId(skill.id)}
              onBlur={() => setActiveId(null)}
              className="group flex aspect-square flex-col items-center justify-center gap-1 rounded-xl border border-transparent bg-white text-neutral-600 transition-[border-color,box-shadow,transform] duration-150 ease-out hover:border-border hover:shadow-sm hover:text-(--brand) active:scale-[.96] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
            >
              {hasLogo(skill) ? (
                <SkillLogo
                  skill={skill}
                  className="size-[30px] transition-transform duration-200 ease-out-strong group-hover:-translate-y-px pointer-coarse:size-6"
                />
              ) : (
                <span className="font-mono text-[11px] font-medium tracking-[-0.01em] transition-transform duration-200 ease-out-strong group-hover:-translate-y-px">
                  {skill.name.replace(" API", "")}
                </span>
              )}
              <span className="hidden max-w-full truncate px-1 font-mono text-[10px] text-neutral-500 pointer-coarse:block">
                {skill.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-3.5 flex min-h-8 items-center justify-between gap-4 border-t border-border pt-3 text-[12.5px] text-muted-foreground">
        <span aria-live="polite" className="pointer-coarse:hidden">
          {active ? (
            <>
              <b className="font-medium text-foreground">{active.name}</b> ·{" "}
              {pluralProjects(projectCount(active.id))}
            </>
          ) : (
            "Hover over a technology"
          )}
        </span>
        <span className="font-mono text-xs">
          {WALL_SKILLS.length} technologies · {PROJECTS.length} projects
        </span>
      </div>
    </aside>
  );
}
