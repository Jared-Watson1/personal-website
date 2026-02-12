"use client";

import { useState } from "react";
import type { Project } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";
import { ProjectModal } from "@/components/project-modal";

interface ProjectsListProps {
  projects: Project[];
}

export function ProjectsList({ projects }: ProjectsListProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div className="space-y-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            onClick={() => setSelectedProject(project)}
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
