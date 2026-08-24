"use client";

import { useCallback, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/projects";
import { getSkill, pluralProjects, type Skill } from "@/lib/skills";
import { ProjectCard } from "@/components/project-card";
import { ProjectModal } from "@/components/project-modal";
import { SkillLogo } from "@/components/skill-logo";

interface ProjectsListProps {
  projects: Project[];
  initialSkill: string | null;
}

interface FilterChipProps {
  label: string;
  skill?: Skill;
  count?: number;
  pressed: boolean;
  onClick: () => void;
}

function FilterChip({ label, skill, count, pressed, onClick }: FilterChipProps) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={cn(
        "inline-flex h-[30px] cursor-pointer items-center gap-1.5 rounded-full border px-3 text-[12.5px] font-medium transition-[background-color,border-color,color,transform] duration-150 ease-out active:scale-[.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500",
        pressed
          ? "border-foreground bg-foreground text-background"
          : "border-border bg-white text-neutral-700 hover:bg-neutral-50",
      )}
    >
      {skill && (
        <SkillLogo
          skill={skill}
          className={cn("size-[13px]", pressed ? "text-background" : "text-neutral-500")}
        />
      )}
      {label}
      {count !== undefined && (
        <span
          className={cn(
            "font-mono text-[11px]",
            pressed ? "text-background/60" : "text-neutral-400",
          )}
        >
          {count}
        </span>
      )}
    </button>
  );
}

export function ProjectsList({ projects, initialSkill }: ProjectsListProps) {
  const router = useRouter();
  const [filter, setFilterState] = useState<string | null>(initialSkill);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const usage = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const project of projects) {
      for (const id of project.skills) counts[id] = (counts[id] ?? 0) + 1;
    }
    return counts;
  }, [projects]);

  const chipSkills = useMemo(() => {
    return Object.keys(usage)
      .filter((id) => usage[id] >= 2 || id === filter)
      .sort(
        (a, b) =>
          usage[b] - usage[a] || getSkill(a).name.localeCompare(getSkill(b).name),
      )
      .map(getSkill);
  }, [usage, filter]);

  const setFilter = useCallback(
    (next: string | null) => {
      setFilterState(next);
      router.replace(next ? `/projects?skill=${next}` : "/projects", {
        scroll: false,
      });
    },
    [router],
  );

  const toggleSkill = useCallback(
    (id: string) => setFilter(filter === id ? null : id),
    [filter, setFilter],
  );

  const activeSkill = filter ? getSkill(filter) : null;
  const matching = activeSkill
    ? projects.filter((project) => project.skills.includes(activeSkill.id)).length
    : projects.length;

  return (
    <>
      <div
        role="group"
        aria-label="Filter by technology"
        className="mt-5 flex flex-wrap items-center gap-1.5"
      >
        <FilterChip label="All" pressed={filter === null} onClick={() => setFilter(null)} />
        {chipSkills.map((skill) => (
          <FilterChip
            key={skill.id}
            label={skill.name}
            skill={skill}
            count={usage[skill.id]}
            pressed={filter === skill.id}
            onClick={() => toggleSkill(skill.id)}
          />
        ))}
      </div>

      <p aria-live="polite" className="mt-3.5 min-h-5 text-[13px] text-muted-foreground">
        {activeSkill ? (
          <>
            Showing {pluralProjects(matching)} using{" "}
            <b className="font-medium text-foreground">{activeSkill.name}</b>
            <span aria-hidden="true"> · </span>
            <button
              type="button"
              onClick={() => setFilter(null)}
              className="cursor-pointer text-foreground underline underline-offset-[3px] transition-colors hover:text-orange-600"
            >
              Clear
            </button>
          </>
        ) : (
          `${projects.length} projects, newest first`
        )}
      </p>

      <div className="mt-6 grid gap-3.5">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            priority={index === 0}
            activeSkill={filter}
            dimmed={activeSkill !== null && !project.skills.includes(activeSkill.id)}
            onToggleSkill={toggleSkill}
            onOpen={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        open={selectedProject !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedProject(null);
        }}
      />
    </>
  );
}
