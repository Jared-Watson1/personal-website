"use client";

import { useCallback, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/projects";
import { getSkill } from "@/lib/skills";
import { ProductHuntBadge } from "@/components/product-hunt-badge";
import { SkillChip } from "@/components/skill-chip";
import { Skeleton } from "@/components/ui/skeleton";

interface ProjectCardProps {
  project: Project;
  activeSkill: string | null;
  dimmed: boolean;
  onToggleSkill: (id: string) => void;
  onOpen: () => void;
  /** Eager-load the media for the first row, which is the LCP element */
  priority?: boolean;
}

export function ProjectCard({
  project,
  activeSkill,
  dimmed,
  onToggleSkill,
  onOpen,
  priority = false,
}: ProjectCardProps) {
  const [loaded, setLoaded] = useState(false);
  const hero = project.heroAsset;

  const markLoaded = useCallback(() => setLoaded(true), []);
  const videoRef = useCallback(
    (video: HTMLVideoElement | null) => {
      if (video && video.readyState >= 3) markLoaded();
    },
    [markLoaded],
  );

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.target !== event.currentTarget) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onOpen();
    }
  };

  return (
    <article
      role="button"
      tabIndex={0}
      aria-label={`Open ${project.title}`}
      onClick={onOpen}
      onKeyDown={handleKeyDown}
      className={cn(
        "group grid cursor-pointer overflow-hidden rounded-[14px] border border-border bg-white/80 text-left shadow-sm backdrop-blur-sm transition-[opacity,background-color] duration-[220ms] ease-out hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]",
        dimmed && "opacity-35",
      )}
    >
      <div className="relative aspect-video overflow-hidden border-b border-border bg-neutral-100 md:aspect-auto md:min-h-[236px] md:border-b-0 md:border-r">
        {hero ? (
          <>
            {!loaded && (
              <Skeleton className="absolute inset-0 z-10 h-full w-full rounded-none" />
            )}
            {hero.type === "image" ? (
              <Image
                src={hero.src}
                alt={hero.alt}
                fill
                sizes="(min-width: 768px) 420px, 100vw"
                priority={priority}
                className={cn(
                  "object-cover object-left-top transition-transform duration-300 ease-out-strong group-hover:scale-[1.02]",
                  !loaded && "opacity-0",
                )}
                onLoad={markLoaded}
              />
            ) : (
              <video
                ref={videoRef}
                src={hero.src}
                onCanPlay={markLoaded}
                muted
                loop
                playsInline
                autoPlay
                aria-label={hero.alt}
                className={cn(
                  "absolute inset-0 h-full w-full object-cover object-left-top transition-transform duration-300 ease-out-strong group-hover:scale-[1.02]",
                  !loaded && "opacity-0",
                )}
              />
            )}
          </>
        ) : (
          <div className="dotted-grid absolute inset-0 flex items-center justify-center font-mono text-xs text-muted-foreground">
            No preview
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2.5 px-4 py-4 sm:px-6 sm:py-5">
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <span>
            {project.category}
            <span aria-hidden="true" className="mx-1.5 text-orange-500">
              /
            </span>
            {project.year}
          </span>
          {project.productHuntUrl && <ProductHuntBadge compact />}
        </div>

        <h3 className="text-[19px] font-semibold tracking-[-0.015em] text-foreground">
          {project.title}
        </h3>

        <p className="text-[14.5px] leading-[1.55] text-neutral-700">
          {project.description}
        </p>

        <ul className="mt-auto flex flex-wrap gap-1.5 pt-1.5" aria-label="Skills">
          {project.skills.map((id) => (
            <li key={id}>
              <SkillChip
                skill={getSkill(id)}
                active={activeSkill === id}
                onToggle={onToggleSkill}
              />
            </li>
          ))}
        </ul>

        {(project.websiteUrl || project.githubUrl) && (
          <div className="flex gap-3.5 text-[12.5px] text-muted-foreground">
            {project.websiteUrl && (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
              >
                Website
                <ArrowUpRight className="size-3" aria-hidden="true" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
              >
                <Github className="size-3" aria-hidden="true" />
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
