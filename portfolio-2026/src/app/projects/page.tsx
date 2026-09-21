import type { Metadata } from "next";
import { MarkdownView } from "@/components/markdown-view";
import { ProjectsList } from "@/components/projects-list";
import { PageBody, PageHead, Sheet } from "@/components/sheet";
import { PROJECTS_PAGE } from "@/lib/copy";
import { projectsMarkdown } from "@/lib/markdown";
import { PROJECTS } from "@/lib/projects";
import { findSkill } from "@/lib/skills";

export const metadata: Metadata = {
  title: "Projects | Jared Watson",
  alternates: { types: { "text/markdown": "/projects.md" } },
};

interface ProjectsPageProps {
  searchParams: Promise<{ skill?: string | string[]; project?: string | string[] }>;
}

function first(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const { skill, project } = await searchParams;
  const initialSkill = findSkill(first(skill));
  const initialProject = PROJECTS.find((p) => p.slug === first(project));

  return (
    <Sheet>
      <div className="md-hide">
        <PageHead title={PROJECTS_PAGE.title} subtitle={PROJECTS_PAGE.subtitle}>
          <p className="mt-2 max-w-[56ch] text-muted-foreground">{PROJECTS_PAGE.sentence}</p>
        </PageHead>
        <PageBody rail="projects">
          <ProjectsList
            projects={PROJECTS}
            initialSkill={initialSkill?.id ?? null}
            initialProject={initialProject?.slug ?? null}
          />
        </PageBody>
      </div>
      <MarkdownView source={projectsMarkdown()} rail="projects.md" />
    </Sheet>
  );
}
