import { useCallback, useState } from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProductHuntBadge } from "@/components/product-hunt-badge";
import { Skeleton } from "@/components/ui/skeleton";
import type { Project, ProjectAsset } from "@/lib/projects";
import { getSkill } from "@/lib/skills";
import { SkillChip } from "@/components/skill-chip";

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function AssetSlide({ asset }: { asset: ProjectAsset }) {
  const [loaded, setLoaded] = useState(false);

  const markLoaded = useCallback(() => setLoaded(true), []);
  const videoRef = useCallback(
    (video: HTMLVideoElement | null) => {
      if (video && video.readyState >= 3) markLoaded();
    },
    [markLoaded],
  );

  return (
    <div>
      <div className="relative aspect-video w-full overflow-hidden">
        {!loaded && (
          <Skeleton className="absolute inset-0 z-10 h-full w-full rounded-none" />
        )}
        {asset.type === "video" ? (
          <video
            ref={videoRef}
            src={asset.src}
            onCanPlay={markLoaded}
            autoPlay
            muted
            loop
            playsInline
            controls
            className={cn(
              "aspect-video w-full object-cover",
              !loaded && "opacity-0"
            )}
          >
            <track kind="captions" />
          </video>
        ) : (
          <Image
            src={asset.src}
            alt={asset.alt}
            fill
            sizes="(min-width: 640px) 672px, 100vw"
            className={cn("object-cover", !loaded && "opacity-0")}
            onLoad={markLoaded}
          />
        )}
      </div>
      {asset.caption && (
        <p className="px-6 pt-3 pb-1 text-xs leading-relaxed text-muted-foreground">
          {asset.caption}
        </p>
      )}
    </div>
  );
}

export function ProjectModal({
  project,
  open,
  onOpenChange,
}: ProjectModalProps) {
  if (!project) return null;

  const allAssets: ProjectAsset[] = [
    ...(project.heroAsset ? [project.heroAsset] : []),
    ...project.assets,
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] gap-0 overflow-y-auto p-0 sm:max-w-2xl">
        {allAssets.length > 0 && (
          <div className="w-full overflow-hidden rounded-t-lg bg-muted/30">
            {allAssets.length === 1 ? (
              <AssetSlide asset={allAssets[0]} />
            ) : (
              <Carousel className="w-full">
                <CarouselContent>
                  {allAssets.map((asset) => (
                    <CarouselItem key={asset.src}>
                      <AssetSlide asset={asset} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-3" />
                <CarouselNext className="right-3" />
              </Carousel>
            )}
          </div>
        )}

        <div className="p-6">
          <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {project.category} &middot; {project.year}
          </p>

          <DialogTitle className="text-2xl font-semibold tracking-tight">
            {project.title}
          </DialogTitle>

          <DialogDescription className="sr-only">
            {project.description}
          </DialogDescription>

          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {project.overview}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            {project.websiteUrl && (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-3.5 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                <ExternalLink className="size-3.5" />
                Visit Website
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-border px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                <Github className="size-3.5" />
                View on GitHub
              </a>
            )}
            {project.productHuntUrl && <ProductHuntBadge />}
          </div>

          <Separator className="my-4" />

          <div>
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Skills
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.skills.map((id) => (
                <SkillChip key={id} skill={getSkill(id)} />
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
