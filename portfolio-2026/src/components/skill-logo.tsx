import {
  siFastapi,
  siFlask,
  siNeon,
  siNodedotjs,
  siNumpy,
  siPandas,
  siPostgresql,
  siPython,
  siReact,
  siRust,
  siScikitlearn,
  siSqlite,
  siStripe,
  siTailwindcss,
  siTokio,
  siVercel,
  siWebgpu,
} from "simple-icons";
import type { Skill } from "@/lib/skills";

interface IconData {
  path: string;
  hex: string;
}

const ICONS: Record<string, IconData> = {
  python: siPython,
  rust: siRust,
  react: siReact,
  tailwindcss: siTailwindcss,
  fastapi: siFastapi,
  flask: siFlask,
  nodedotjs: siNodedotjs,
  postgresql: siPostgresql,
  sqlite: siSqlite,
  scikitlearn: siScikitlearn,
  pandas: siPandas,
  numpy: siNumpy,
  stripe: siStripe,
  vercel: siVercel,
  webgpu: siWebgpu,
  tokio: siTokio,
  neon: siNeon,
};

export function hasLogo(skill: Skill): boolean {
  return Boolean(skill.icon && ICONS[skill.icon]);
}

export function brandColor(skill: Skill): string {
  if (skill.brand) return skill.brand;
  const icon = skill.icon ? ICONS[skill.icon] : undefined;
  return icon ? `#${icon.hex}` : "#525252";
}

function luminance(hex: string): number {
  const channels = [1, 3, 5].map((i) => {
    const v = parseInt(hex.slice(i, i + 2), 16) / 255;
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

/**
 * Hover colors per theme. Brand hexes that would vanish into the ground
 * (black marks in dark mode, pale marks in light mode) fall back to ink.
 */
export function hoverColors(skill: Skill): { light: string; dark: string } {
  const hex = brandColor(skill);
  const l = luminance(hex);
  return {
    light: l > 0.55 ? "var(--foreground)" : hex,
    dark: l < 0.05 ? "var(--foreground)" : hex,
  };
}

interface SkillLogoProps {
  skill: Skill;
  className?: string;
}

/** Inline brand mark; renders nothing when the skill has no icon. */
export function SkillLogo({ skill, className }: SkillLogoProps) {
  const icon = skill.icon ? ICONS[skill.icon] : undefined;
  if (!icon) return null;
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path fill="currentColor" d={icon.path} />
    </svg>
  );
}
