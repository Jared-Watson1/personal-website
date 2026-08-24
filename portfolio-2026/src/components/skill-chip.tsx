"use client";

import type { MouseEvent } from "react";
import { cn } from "@/lib/utils";
import type { Skill } from "@/lib/skills";
import { SkillLogo } from "@/components/skill-logo";

interface SkillChipProps {
  skill: Skill;
  active?: boolean;
  /** When provided the chip is a button that toggles the filter. */
  onToggle?: (id: string) => void;
  className?: string;
}

const base =
  "inline-flex h-6 items-center gap-1.5 rounded-md border border-border bg-white px-2 text-[11.5px] font-medium text-neutral-700 whitespace-nowrap";

export function SkillChip({ skill, active, onToggle, className }: SkillChipProps) {
  const activeClass = active && "border-orange-500 bg-orange-50 text-orange-900";
  const logo = (
    <SkillLogo
      skill={skill}
      className={cn("size-[11px] shrink-0", active ? "text-orange-500" : "text-neutral-500")}
    />
  );

  if (!onToggle) {
    return (
      <span className={cn(base, activeClass, className)}>
        {logo}
        {skill.name}
      </span>
    );
  }

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onToggle(skill.id);
  };

  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={handleClick}
      className={cn(
        base,
        "cursor-pointer transition-[background-color,border-color,color,transform] duration-150 ease-out hover:bg-neutral-50 active:scale-[.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500",
        activeClass,
        className,
      )}
    >
      {logo}
      {skill.name}
    </button>
  );
}
