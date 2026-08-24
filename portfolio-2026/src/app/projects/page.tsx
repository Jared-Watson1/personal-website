import { DottedBackground } from "@/components/dotted-background";
import { Header } from "@/components/header";
import { ProjectsList } from "@/components/projects-list";
import { SiteFooter } from "@/components/site-footer";
import { PROJECTS } from "@/lib/projects";
import { findSkill } from "@/lib/skills";

interface ProjectsPageProps {
  searchParams: Promise<{ skill?: string | string[] }>;
}

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const { skill } = await searchParams;
  const initialSkill = findSkill(Array.isArray(skill) ? skill[0] : skill);

  return (
    <>
      <DottedBackground />
      <Header />
      <main className="relative z-10 mx-auto max-w-[1040px] px-5 pt-24 pb-12 sm:px-10 lg:px-16 lg:pt-28 lg:pb-18">
        <h1 className="text-2xl font-bold tracking-[-0.02em] text-foreground">
          Projects
          <span aria-hidden="true" className="mx-2 text-orange-500">
            /
          </span>
          <span className="text-lg font-medium text-muted-foreground">
            selected work
          </span>
        </h1>
        <ProjectsList projects={PROJECTS} initialSkill={initialSkill?.id ?? null} />
      </main>
      <div className="relative z-10">
        <SiteFooter />
      </div>
    </>
  );
}
