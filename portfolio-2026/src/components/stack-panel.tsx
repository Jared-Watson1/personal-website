"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  WALL_SKILLS,
  findSkill,
  pluralProjects,
  projectCount,
} from "@/lib/skills";
import { SkillLogo, hasLogo, hoverColors } from "@/components/skill-logo";

interface StackPanelProps {
  className?: string;
}

export function StackPanel({ className }: StackPanelProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = findSkill(activeId);

  return (
    <aside aria-labelledby="stack-title" className={cn("min-w-0", className)}>
      <div className="label mb-2.5 flex items-baseline justify-between gap-3">
        <h2 id="stack-title" className="text-foreground">
          Stack
        </h2>
        <span>{WALL_SKILLS.length} tools</span>
      </div>

      <ul className="grid grid-cols-4 gap-px border border-border bg-border min-[640px]:max-[999px]:grid-cols-8">
        {WALL_SKILLS.map((skill) => {
          const colors = hoverColors(skill);
          return (
            <li key={skill.id} className="min-w-0">
              <Link
                href={`/projects?skill=${skill.id}`}
                aria-label={skill.name}
                style={
                  {
                    "--skill-light": colors.light,
                    "--skill-dark": colors.dark,
                  } as React.CSSProperties
                }
                onMouseEnter={() => setActiveId(skill.id)}
                onMouseLeave={() => setActiveId(null)}
                onFocus={() => setActiveId(skill.id)}
                onBlur={() => setActiveId(null)}
                className="group flex aspect-square flex-col items-center justify-center gap-1 bg-background text-muted-foreground transition-colors duration-150 hover:bg-raised hover:text-(--skill-light) focus-visible:bg-raised focus-visible:text-(--skill-light) focus-visible:-outline-offset-2 dark:hover:text-(--skill-dark) dark:focus-visible:text-(--skill-dark)"
              >
                {hasLogo(skill) ? (
                  <SkillLogo
                    skill={skill}
                    className="size-[22px] transition-transform duration-200 ease-out-strong group-hover:-translate-y-px"
                  />
                ) : (
                  <span className="font-mono text-[10px] font-medium transition-transform duration-200 ease-out-strong group-hover:-translate-y-px">
                    {skill.name.replace(" API", "")}
                  </span>
                )}
                <span className="hidden max-w-full truncate px-1 font-mono text-[9px] text-muted-foreground pointer-coarse:block">
                  {skill.name}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      <p
        aria-live="polite"
        className="label mt-2.5 min-h-[17px] tracking-[0.02em] normal-case"
      >
        {active ? (
          <>
            <b className="font-medium text-foreground">{active.name}</b>,{" "}
            {pluralProjects(projectCount(active.id))}
          </>
        ) : (
          "Pick one to see its projects"
        )}
      </p>
    </aside>
  );
}
