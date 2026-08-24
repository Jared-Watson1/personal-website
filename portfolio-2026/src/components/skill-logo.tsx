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
