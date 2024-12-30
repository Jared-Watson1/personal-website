"use client";

import React from "react";
import { useTheme } from "next-themes";

// Magic UI
import { WarpBackground } from "./warp-background";
import { VelocityScroll } from "./scroll-based-velocity";
import { MagicCard } from "./magic-card";
import WordFadeIn from "./word-fade-in";

// Icons
import {
  FaPython,
  FaDatabase,
  FaJava,
  FaReact,
  FaAws,
  FaDocker,
  FaSitemap,
  FaBrain,
  FaRobot,
} from "react-icons/fa";

const SCROLL_SPEED = 2;
const skills = [
  { name: "Python", icon: <FaPython /> },
  { name: "SQL", icon: <FaDatabase /> },
  { name: "Java", icon: <FaJava /> },
  { name: "React", icon: <FaReact /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "System Design", icon: <FaSitemap /> },
  { name: "Machine Learning", icon: <FaBrain /> },
  { name: "ChatBots", icon: <FaRobot /> },
];

export default function SkillsSection() {
  const { theme } = useTheme();

  return (
    // Wrap everything in WarpBackground, at full screen width
    <WarpBackground
      gridColor="transparent"
      beamsPerSide={3}
      perspective={100}
      beamSize={5}
      beamDelayMax={3}
      beamDelayMin={0}
      beamDuration={3}
      className="relative w-screen min-h-screen overflow-x-hidden bg-white/50"
    >
      {/* Semi-transparent white overlay: covers entire width/height */}
      <div className="absolute inset-0 z-10 " />

      {/* Main content is above the overlay (z-20) */}
      <section className="relative z-20 flex min-h-screen w-full flex-col items-center justify-start pt-10 ">
        {/* Heading & subheading, centered text */}
        <div className="w-screen overflow-hidden mb-10">
          <VelocityScroll
            defaultVelocity={SCROLL_SPEED}
            numRows={1}
            className="whitespace-wrap text-3xl font-semibold text-black"
          >
            {skills.map((skill) => skill.name).join("  •  ")}
          </VelocityScroll>
        </div>
        <div className="text-center px-4 pt-10">
          <WordFadeIn
            words="Technical Skills"
            className="mb-4 text-5xl font-extrabold text-black md:text-6xl"
          />
          <p className="mb-8 text-xl text-gray-700 md:text-2xl">
            A quick overview of some core skills I’ve picked up along the way.
          </p>
        </div>

        {/* Full-width marquee. Use w-screen so it spans entire left-to-right. */}

        {/* Cards container: also full width, but we center the grid itself */}
        <div className="w-full flex justify-center px-4 pb-16">
          {/* 
            A grid up to 3 columns, but not restricted horizontally. 
            We wrap it in a container so the cards aren’t fully left-justified. 
          */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {skills.map((skill) => (
              <MagicCard
                key={skill.name}
                gradientSize={350}
                gradientColor={theme === "dark" ? "#262626" : "#00b8b455"}
                gradientOpacity={1}
                gradientFrom="#ff4e6a"
                gradientTo="#ffd95c"
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-2
                  cursor-pointer
                  text-black
                  p-6
                  text-xl
                  font-bold
                  shadow-2xl
                  text-center
                "
              >
                {/* Icon on top, centered text below */}
                <span className="text-5xl">{skill.icon}</span>
                <span>{skill.name}</span>
              </MagicCard>
            ))}
          </div>
        </div>
      </section>
    </WarpBackground>
  );
}
