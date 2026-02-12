import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ProductHuntBadge } from "@/components/product-hunt-badge";
import type { Project, ProjectAsset } from "@/lib/projects";

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function AssetRenderer({ asset }: { asset: ProjectAsset }) {
  if (asset.type === "video") {
    return (
      <video
        src={asset.src}
        controls
        playsInline
        muted
        className="w-full rounded-lg"
      >
        <track kind="captions" />
      </video>
    );
  }

  return (
    <div className="relative aspect-video overflow-hidden rounded-lg">
      <Image
        src={asset.src}
        alt={asset.alt}
        fill
        className="object-cover"
      />
    </div>
  );
}

export function ProjectModal({
  project,
  open,
  onOpenChange,
}: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto p-0 sm:max-w-3xl">
        {project.heroAsset && (
          <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
            {project.heroAsset.type === "image" ? (
              <Image
                src={project.heroAsset.src}
                alt={project.heroAsset.alt}
                fill
                className="object-cover"
              />
            ) : (
              <video
                src={project.heroAsset.src}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              >
                <track kind="captions" />
              </video>
            )}
          </div>
        )}

        <div className="space-y-6 px-6 pb-6 pt-4">
          <div>
            <p className="mb-2 text-xs text-muted-foreground">
              {project.category}
              <span className="mx-1.5 text-orange-500">/</span>
              {project.year}
            </p>
            <DialogTitle className="text-xl">
              {project.title}
            </DialogTitle>
            <DialogDescription className="sr-only">
              {project.description}
            </DialogDescription>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {project.websiteUrl && (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                <ExternalLink className="size-3.5" />
                Website
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                <Github className="size-3.5" />
                GitHub
              </a>
            )}
            {project.productHuntUrl && <ProductHuntBadge />}
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground">
            {project.overview}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>

          {project.assets.length > 0 && (
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-foreground">
                Gallery
              </h4>
              <div className="space-y-4">
                {project.assets.map((asset) => (
                  <AssetRenderer key={asset.src} asset={asset} />
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
