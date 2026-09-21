import Image from "next/image";
import Link from "next/link";
import { Band } from "@/components/sheet";
import { FEATURED_PROJECTS, PROJECTS } from "@/lib/projects";

export function SelectedWork() {
  return (
    <Band
      id="work"
      title="Selected work"
      more={{ label: `All ${PROJECTS.length} projects →`, href: "/projects" }}
    >
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
        {FEATURED_PROJECTS.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/projects?project=${project.slug}`}
              className="plate plate-lift flex h-full flex-col"
            >
              {project.thumb && (
                <Image
                  src={project.thumb.src}
                  width={project.thumb.width}
                  height={project.thumb.height}
                  alt={project.thumb.alt}
                  sizes="(min-width: 1080px) 320px, (min-width: 640px) 50vw, 100vw"
                  className="aspect-[4/3] h-auto w-full border-b border-border object-cover object-left-top"
                />
              )}
              <div className="flex items-center justify-between gap-3 px-3.5 py-2.5">
                <div>
                  <h3 className="text-[13.5px] leading-[1.35] font-medium">{project.title}</h3>
                  <span className="label mt-px block text-[10px]">{project.kind}</span>
                </div>
                <span className="label">{project.year}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Band>
  );
}
