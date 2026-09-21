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

const SIZES = "(min-width: 760px) 280px, 100vw";

function ProjectMedia({ project, priority }: { project: Project; priority: boolean }) {
  const [loaded, setLoaded] = useState(false);
  const markLoaded = useCallback(() => setLoaded(true), []);
  const videoRef = useCallback(
    (video: HTMLVideoElement | null) => {
      if (video && video.readyState >= 3) markLoaded();
    },
    [markLoaded],
  );

  const { thumb, heroAsset: hero } = project;
  const media = "absolute inset-0 h-full w-full object-cover object-left-top";

  if (thumb) {
    return (
      <>
        <Image
          src={thumb.src}
          alt={thumb.alt}
          fill
          sizes={SIZES}
          priority={priority}
          className={cn(media, thumb.srcDark && "dark:hidden")}
        />
        {thumb.srcDark && (
          <Image
            src={thumb.srcDark}
            alt={thumb.alt}
            fill
            sizes={SIZES}
            priority={priority}
            className={cn(media, "hidden dark:block")}
          />
        )}
      </>
    );
  }

  if (!hero) {
    return (
      <div className="dotted-grid absolute inset-0 flex items-center justify-center">
        <span className="label">No preview</span>
      </div>
    );
  }

  return (
    <>
      {!loaded && <Skeleton className="absolute inset-0 z-10 h-full w-full" />}
      {hero.type === "image" ? (
        <Image
          src={hero.src}
          alt={hero.alt}
          fill
          sizes={SIZES}
          priority={priority}
          className={cn(media, !loaded && "opacity-0")}
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
          className={cn(media, !loaded && "opacity-0")}
        />
      )}
    </>
  );
}

export function ProjectCard({
  project,
  activeSkill,
  dimmed,
  onToggleSkill,
  onOpen,
  priority = false,
}: ProjectCardProps) {
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
        "group grid cursor-pointer gap-x-7 gap-y-4 border-b border-border py-6 text-left transition-opacity duration-[220ms] ease-out min-[760px]:grid-cols-[280px_minmax(0,1fr)]",
        dimmed && "opacity-35",
      )}
    >
      <div className="plate relative aspect-[16/10] self-start overflow-hidden">
        <ProjectMedia project={project} priority={priority} />
      </div>

      <div className="flex min-w-0 flex-col">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <h3 className="text-[17px] font-semibold tracking-[-0.012em] transition-colors duration-150 group-hover:text-brand-ink">
            {project.title}
          </h3>
          {project.productHuntUrl && <ProductHuntBadge compact />}
        </div>
        <p className="label mt-0.5 text-[10.5px]">
          {project.category.replace(" / ", ", ")}, {project.year}
        </p>

        <p className="mt-2 max-w-[62ch] text-sm text-secondary-foreground">{project.description}</p>

        <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Skills">
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
          <div className="mt-3 flex gap-3.5 text-[12.5px] text-muted-foreground">
            {project.websiteUrl && (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="inline-flex items-center gap-1 transition-colors hover:text-brand-ink"
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
                className="inline-flex items-center gap-1 transition-colors hover:text-brand-ink"
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
