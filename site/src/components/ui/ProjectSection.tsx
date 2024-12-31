"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import InteractiveHoverButton from "./interactive-hover-button";
import TypingAnimation from "./typing-animation";
import AnimatedGridPattern from "./animated-grid-pattern";
import AnimatedGradientText from "./animated-gradient-text";
import { MagicCard } from "./magic-card";

// ===================== SCROLL FUNCTIONS =====================
function scrollToCure() {
  const target = document.getElementById("cure-showcase");
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}

function scrollToWildfire() {
  const target = document.getElementById("wildfire-showcase");
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}

// ===================== PROJECT CARD COMPONENT =====================
interface ProjectCardProps {
  badge: string;
  title: string;
  hoverTitle: string;
  summary: string;
  onClick: () => void; // Use onClick for scroll-to behavior
}

// Individual Project Card with Magic Card effect
function ProjectCard({
  badge,
  title,
  hoverTitle,
  summary,
  onClick,
}: ProjectCardProps) {
  const { theme } = useTheme();

  return (
    // Magic Card wrapper for project cards
    <MagicCard
      gradientSize={400} // Larger gradient
      gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      gradientOpacity={1} // Fully visible gradient
      gradientFrom="#F6416C" // Brighter pink
      gradientTo="#FFDE7D" // Bright yellow
      className="cursor-pointer flex flex-col gap-3 p-6 shadow-2xl rounded-xl"
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

      {/* Title vs Hover Title */}
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

      {/* View Button */}
      <InteractiveHoverButton
        text="View"
        onClick={onClick} // Use provided scroll-to function
      />
    </MagicCard>
  );
}

// ===================== MAIN PROJECTS COMPONENT =====================
export default function ProjectsSection() {
  const { resolvedTheme } = useTheme();
  const [gridOpacity, setGridOpacity] = useState(0.15); // Dynamic opacity based on theme

  useEffect(() => {
    setGridOpacity(resolvedTheme === "dark" ? 0.25 : 0.15); // Adjust opacity for light/dark modes
  }, [resolvedTheme]);

  return (
    <section className="relative w-screen min-h-screen overflow-x-hidden">
      {/* Animated Grid Pattern Background */}
      <AnimatedGridPattern
        className="absolute inset-0 z-0"
        numSquares={100}
        maxOpacity={gridOpacity}
        duration={3.5}
        repeatDelay={0.8}
        width={60}
        height={60}
        strokeDasharray={2}
      />

      {/* Optional translucent overlay */}
      <div className="absolute inset-0 bg-white/50 z-10" />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-start min-h-screen px-4 pt-10">
        {/* Heading & Subheading */}
        <div className="mb-8 text-center">
          {/* Heading */}
          <h2 className="mb-4 text-5xl font-extrabold text-black md:text-6xl">
            <TypingAnimation
              duration={40}
              className="mb-4 text-5xl font-extrabold text-black md:text-6xl"
            >
              Project Showcase
            </TypingAnimation>
          </h2>

          {/* Animated Gradient Subheading */}
          <div className="z-10 flex items-center justify-center text-center">
            <AnimatedGradientText>
              💡 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />
              <span
                className={cn(
                  `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] 
                   bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-3xl font-bold`
                )}
              >
                Explore My Programming & Design Skills
              </span>
            </AnimatedGradientText>
          </div>
        </div>

        {/* Project Cards */}
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
            onClick={scrollToWildfire}
          />

          {/* Additional Projects */}
          <ProjectCard
            badge="ML Project"
            title="Loan Default Prediction"
            hoverTitle="Bias Evaluation"
            summary="Used KNN, Decision Trees, & Logistic Regression on Lending Club data to assess fairness."
            onClick={() => alert("Demo Placeholder")}
          />

          <ProjectCard
            badge="DooleyAFavor"
            title="Student Task Platform"
            hoverTitle="Peer Assistance"
            summary="Connects Emory students for peer-based help & side jobs."
            onClick={() => alert("Demo Placeholder")}
          />

          <ProjectCard
            badge="Dodge"
            title="Game Development"
            hoverTitle="Arcade Action"
            summary="A pygame demonstrating OOP, event handling, and basic physics."
            onClick={() => alert("Demo Placeholder")}
          />
        </div>
      </div>
    </section>
  );
}
