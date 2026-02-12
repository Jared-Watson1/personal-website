import { DottedBackground } from "@/components/dotted-background";
import { Header } from "@/components/header";
import { ProjectsList } from "@/components/projects-list";
import { PROJECTS } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <>
      <DottedBackground />
      <Header />
      <main className="mx-auto max-w-2xl px-4 pt-24 pb-16">
        <div className="mb-10">
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            Projects
            <span className="mx-2 text-orange-500">/</span>
            <span className="text-lg font-medium text-muted-foreground">
              selected work
            </span>
          </h1>
        </div>
        <ProjectsList projects={PROJECTS} />
      </main>
    </>
  );
}
