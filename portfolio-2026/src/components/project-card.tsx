import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/projects";
import { ProductHuntBadge } from "@/components/product-hunt-badge";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const hasHeroImage =
    project.heroAsset && project.heroAsset.type === "image";
  const hasHeroVideo =
    project.heroAsset && project.heroAsset.type === "video";

  return (
    <button
      onClick={onClick}
      className="group w-full cursor-pointer overflow-hidden rounded-xl border border-border bg-white/80 text-left shadow-sm backdrop-blur-sm transition-colors hover:bg-white"
    >
      {project.heroAsset && (
        <div className="relative aspect-video overflow-hidden">
          {hasHeroImage && (
            <Image
              src={project.heroAsset!.src}
              alt={project.heroAsset!.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          )}
          {hasHeroVideo && (
            <video
              src={project.heroAsset!.src}
              muted
              loop
              playsInline
              autoPlay
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          )}
        </div>
      )}

      <div className="space-y-1.5 px-5 py-4">
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">
            {project.category}
            <span className="mx-1.5 text-orange-500">/</span>
            {project.year}
          </span>
          {project.productHuntUrl && <ProductHuntBadge compact />}
        </div>
        <h3 className="text-lg font-semibold text-foreground">
          {project.title}
        </h3>
        <p className={cn("text-sm text-muted-foreground line-clamp-2")}>
          {project.description}
        </p>
      </div>
    </button>
  );
}
