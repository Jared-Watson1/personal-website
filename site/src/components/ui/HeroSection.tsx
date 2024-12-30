// src/components/ui/HeroSection.tsx
"use client";

import RetroGrid from "./retro-grid";
import SparklesText from "./sparkles-text";
import ShinyButton from "./shiny-button";

export default function HeroSection() {
  return (
    <section
      className="
        relative
        flex
        min-h-screen
        w-full
        flex-col
        items-center
        justify-center
        overflow-hidden
        // No background, so main's gradient is visible
      "
    >
      {/* Retro Grid behind hero content */}
      <RetroGrid
        className=""
        angle={65} // Or whichever angle you like
        cellSize={60} // Size of each grid cell
        opacity={0.5} // How faint or bold the lines
        lightLineColor="gray"
        darkLineColor="gray"
      />

      {/* Foreground hero content */}
      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        <SparklesText
          text="Jared Watson: Software Engineer & Founder of Cure AI"
          className="mb-6 text-6xl font-extrabold leading-tight text-black md:text-7xl"
        />
        <p className="mb-8 max-w-2xl text-lg text-gray-700 md:text-xl">
          Welcome to my world of software development and innovation. Explore my
          projects and skills!
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/Jared-Watson1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ShinyButton>GITHUB</ShinyButton>
          </a>
          <a
            href="https://www.linkedin.com/in/jared-watson-b7b5b6220/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ShinyButton>LINKEDIN</ShinyButton>
          </a>
        </div>
      </div>
    </section>
  );
}
