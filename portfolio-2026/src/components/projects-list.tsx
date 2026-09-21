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
  /** Slug from `?project=`, opened in the modal on mount */
  initialProject: string | null;
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
        "inline-flex h-[26px] cursor-pointer items-center gap-1.5 border px-2.5 text-[12.5px] transition-[background-color,border-color,color,transform] duration-150 ease-out active:scale-[.97]",
        pressed
          ? "border-foreground bg-foreground text-background"
          : "border-border bg-background text-secondary-foreground hover:border-line-strong",
      )}
    >
      {skill && (
        <SkillLogo
          skill={skill}
          className={cn("size-[13px]", pressed ? "text-background" : "text-muted-foreground")}
        />
      )}
      {label}
      {count !== undefined && (
        <span
          className={cn(
            "font-mono text-[11px]",
            pressed ? "text-background/60" : "text-muted-foreground",
          )}
        >
          {count}
        </span>
      )}
    </button>
  );
}

export function ProjectsList({ projects, initialSkill, initialProject }: ProjectsListProps) {
  const router = useRouter();
  const [filter, setFilterState] = useState<string | null>(initialSkill);
  const [selectedProject, setSelectedProject] = useState<Project | null>(
    () => projects.find((project) => project.slug === initialProject) ?? null,
  );

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

  const closeProject = useCallback(() => {
    setSelectedProject(null);
    if (initialProject) {
      router.replace(filter ? `/projects?skill=${filter}` : "/projects", {
        scroll: false,
      });
    }
  }, [filter, initialProject, router]);

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
        className="flex flex-wrap items-center gap-1.5"
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
              className="link cursor-pointer"
            >
              Clear
            </button>
          </>
        ) : (
          `${projects.length} projects, newest first`
        )}
      </p>

      <div className="mt-4 border-t border-border">
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
          if (!open) closeProject();
        }}
      />
    </>
  );
}
