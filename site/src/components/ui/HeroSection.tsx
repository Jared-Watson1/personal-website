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
        bg-gradient-to-b
        from-[#00B8A9] // Top gradient color (Teal)
        via-[#F8F3D4] // Middle gradient color (Cream)
        to-[#FFDE7D] // Bottom gradient color (Yellow)
      "
    >
      {/* Retro Grid behind hero content */}
      <RetroGrid
        className=""
        angle={65} // Or whichever angle you like
        cellSize={60} // Size of each grid cell
        opacity={0.5} // How faint or bold the lines
        lightLineColor="#F8F3D4" // Light Cream
        darkLineColor="#F6416C" // Pink
      />

      {/* Foreground hero content */}
      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        <SparklesText
          text="Jared Watson: Software Engineer & Founder of Cure AI"
          className="mb-6 text-6xl font-extrabold leading-tight text-[#F6416C] md:text-7xl"
        />
        <p className="mb-8 max-w-2xl text-lg text-[#333333] md:text-xl">
          Welcome to my world of software development and innovation. Explore my
          projects and skills!
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/Jared-Watson1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ShinyButton className="bg-[#F6416C] hover:bg-[#FFDE7D] text-white hover:text-black">
              GITHUB
            </ShinyButton>
          </a>
          <a
            href="https://www.linkedin.com/in/jared-watson-b7b5b6220/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ShinyButton className="bg-[#00B8A9] hover:bg-[#F8F3D4] text-white hover:text-black">
              LINKEDIN
            </ShinyButton>
          </a>
        </div>
      </div>
    </section>
  );
}
