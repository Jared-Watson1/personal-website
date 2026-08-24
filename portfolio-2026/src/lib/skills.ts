import { PROJECTS } from "@/lib/projects";

export interface Skill {
  /** Slug used in `?skill=` */
  id: string;
  name: string;
  /** simple-icons slug; omit when the brand has no icon in the set */
  icon?: string;
  /** Hex used for the hover color; defaults to the icon's brand hex */
  brand?: string;
  /** Appears in the landing Stack panel */
  wall?: boolean;
}

export const SKILLS: Skill[] = [
  { id: "python", name: "Python", icon: "python", wall: true },
  { id: "rust", name: "Rust", icon: "rust", wall: true },
  { id: "react", name: "React", icon: "react", wall: true },
  { id: "tailwind", name: "Tailwind CSS", icon: "tailwindcss", wall: true },
  { id: "fastapi", name: "FastAPI", icon: "fastapi", wall: true },
  { id: "flask", name: "Flask", icon: "flask", wall: true },
  { id: "node", name: "Node.js", icon: "nodedotjs", wall: true },
  { id: "postgres", name: "PostgreSQL", icon: "postgresql", wall: true },
  { id: "sqlite", name: "SQLite", icon: "sqlite", wall: true },
  { id: "pinecone", name: "Pinecone", brand: "#1C17FF", wall: true },
  { id: "openai", name: "OpenAI API", brand: "#000000", wall: true },
  { id: "sklearn", name: "scikit-learn", icon: "scikitlearn", wall: true },
  { id: "pandas", name: "pandas", icon: "pandas", wall: true },
  { id: "numpy", name: "NumPy", icon: "numpy", wall: true },
  { id: "stripe", name: "Stripe", icon: "stripe", wall: true },
  { id: "vercel", name: "Vercel", icon: "vercel", wall: true },
  { id: "floem", name: "Floem" },
  { id: "wgpu", name: "wgpu", icon: "webgpu" },
  { id: "tokio", name: "tokio", icon: "tokio" },
  { id: "plaid", name: "Plaid API" },
  { id: "tantivy", name: "Tantivy" },
  { id: "neon", name: "Neon", icon: "neon" },
  { id: "heroku", name: "Heroku" },
  { id: "pygame", name: "Pygame" },
  { id: "matplotlib", name: "Matplotlib" },
];

const SKILL_BY_ID = new Map(SKILLS.map((skill) => [skill.id, skill]));

export function getSkill(id: string): Skill {
  const skill = SKILL_BY_ID.get(id);
  if (!skill) throw new Error(`Unknown skill id: ${id}`);
  return skill;
}

export function findSkill(id: string | null | undefined): Skill | null {
  if (!id) return null;
  return SKILL_BY_ID.get(id) ?? null;
}

export const WALL_SKILLS = SKILLS.filter((skill) => skill.wall);

/** Number of projects using each skill id, derived from PROJECTS. */
export const SKILL_USAGE: Record<string, number> = PROJECTS.reduce(
  (usage, project) => {
    for (const id of project.skills) usage[id] = (usage[id] ?? 0) + 1;
    return usage;
  },
  {} as Record<string, number>,
);

export function projectCount(id: string): number {
  return SKILL_USAGE[id] ?? 0;
}

export function pluralProjects(n: number): string {
  return `${n} project${n === 1 ? "" : "s"}`;
}
