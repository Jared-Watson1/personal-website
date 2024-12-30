"use client";

import React from "react";
import { cn } from "@/lib/utils";
import InteractiveHoverButton from "./interactive-hover-button";
import TypingAnimation from "./typing-animation";

interface ProjectCardProps {
  badge: string;
  title: string;
  hoverTitle: string;
  summary: string;
  onClick?: () => void;
}

function scrollToCure() {
  const target = document.getElementById("cure-showcase");
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}
function ProjectCard({
  badge,
  title,
  hoverTitle,
  summary,
  onClick,
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-xl border border-gray-200",
        "bg-white text-black shadow-sm hover:shadow-md",
        "transition-all duration-300 ease-in-out p-5"
      )}
    >
      {/* Badge */}
      <div
        className="
          mb-3 w-fit rounded-full px-3 py-1 text-sm font-semibold
          bg-[#f8f0d9] text-black
          transition-colors duration-300 ease-in-out
          hover:bg-[#ffd95c]
        "
      >
        {badge}
      </div>

      {/* Title vs. Hover Title */}
      <span
        className="
          block
          text-lg
          font-semibold
          text-black
          group-hover:hidden
          mb-1
          transition-all
          duration-300
          ease-in-out
        "
      >
        {title}
      </span>
      <span
        className="
          hidden
          text-lg
          font-semibold
          text-black
          group-hover:inline-block
          mb-1
          transition-all
          duration-300
          ease-in-out
        "
      >
        {hoverTitle}
      </span>

      {/* Summary */}
      <p className="text-sm text-gray-600 mb-4">{summary}</p>

      {/* Button */}
      <InteractiveHoverButton
        text="View"
        onClick={onClick || (() => alert(`Placeholder for ${title} project!`))}
        // onClick={() => alert(`Placeholder for ${title} project!`)}
      />
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section className="relative w-screen min-h-screen overflow-x-hidden">
      {/* Optional translucent overlay, if desired */}
      <div className="absolute inset-0 bg-white/50 z-10" />

      <div className="relative z-20 flex flex-col items-center justify-start min-h-screen px-4 pt-10">
        {/* Heading & subheading with different typing speeds */}
        <div className="mb-8 text-center">
          {/* Heading: slower typing */}
          <h2 className="mb-2 text-5xl font-extrabold text-black md:text-6xl">
            <TypingAnimation
              duration={40}
              className="mb-2 text-5xl font-extrabold text-black md:text-6xl"
            >
              Project Showcase
            </TypingAnimation>
          </h2>

          {/* Subheading: a bit faster typing */}
          <p className="text-xl text-gray-700 md:text-2xl">
            Check out some of my projects showcasing various programming &amp;
            design skills.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          className="
            grid
            gap-6
            w-full
            px-2
            sm:grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            max-w-6xl
            mx-auto
          "
        >
          {/* Cure AI */}
          <ProjectCard
            badge="Cure AI"
            title="Scientific Research Engine"
            hoverTitle="AI Powered Insights"
            summary="Access and efficiently navigate over 26 million PubMed articles with a fleet of AI tools to optimize scientific research."
            onClick={scrollToCure}
          />

          {/* U.S. Wildfire Analysis */}
          <ProjectCard
            badge="Wildfire Data"
            title="U.S. Wildfire Analysis"
            hoverTitle="Spatial, temporal, & regressional analysis"
            summary="Analyzed 1.88M+ fire records, examining spatial and temporal trends, and predicting days to containment."
          />

          {/* Loan Default Prediction */}
          <ProjectCard
            badge="ML Project"
            title="Loan Default Prediction"
            hoverTitle="Bias Evaluation"
            summary="Used KNN, Decision Trees, & Logistic Regression on Lending Club data to assess fairness."
          />

          {/* DooleyAFavor */}
          <ProjectCard
            badge="DooleyAFavor"
            title="Student Task Platform"
            hoverTitle="Peer Assistance"
            summary="Connects Emory students for peer-based help & side jobs."
          />

          {/* Dodge */}
          <ProjectCard
            badge="Dodge"
            title="Game Development"
            hoverTitle="Arcade Action"
            summary="A pygame demonstrating OOP, event handling, and basic physics."
          />
        </div>
      </div>
    </section>
  );
}
