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
  "inline-flex h-[22px] items-center gap-1.5 border px-2 text-[11.5px] whitespace-nowrap";

export function SkillChip({ skill, active, onToggle, className }: SkillChipProps) {
  const stateClass = active
    ? "border-foreground bg-foreground text-background"
    : "border-border bg-background text-secondary-foreground";
  const logo = (
    <SkillLogo
      skill={skill}
      className={cn("size-[11px] shrink-0", active ? "text-background" : "text-muted-foreground")}
    />
  );

  if (!onToggle) {
    return (
      <span className={cn(base, stateClass, className)}>
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
        "cursor-pointer transition-[background-color,border-color,color,transform] duration-150 ease-out active:scale-[.97]",
        !active && "hover:border-line-strong",
        stateClass,
        className,
      )}
    >
      {logo}
      {skill.name}
    </button>
  );
}
