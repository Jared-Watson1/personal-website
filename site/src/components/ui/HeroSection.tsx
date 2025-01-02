"use client";

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
        "
    >
      {/* Enhanced Retro Grid Background */}
      {/* <RetroGrid
        className="absolute inset-0 z-0" // No blur effect for sharpness
        angle={60} // Maintains smooth diagonal look
        cellSize={50} // Larger cells for prominence
        opacity={0.6} // Increased visibility
        lightLineColor="#8DD7BF" // Mint Green for light lines
        darkLineColor="#00A5E3" // Blue for dark lines
      /> */}

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        {/* Sparkles Text with Gradient */}
        <div className="mb-6 text-6xl font-extrabold leading-tight md:text-7xl bg-gradient-to-r from-[#00A5E3] via-[#8DD7BF] to-[#FFBF65] bg-clip-text ">
          <SparklesText
            text="Jared Watson: Software Engineer & Founder of Cure AI"
            sparklesCount={30}
            colors={{ first: "#FF96C5", second: "#FF5768" }} // Sparkles colors
          />
        </div>

        {/* Readable Paragraph */}
        <p className="mb-8 max-w-2xl text-lg text-[#474853] md:text-xl">
          Welcome to my world of software development and innovation. Explore my
          projects and skills!
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <a
            href="https://github.com/Jared-Watson1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ShinyButton className="bg-[#00A5E3] hover:bg-[#8DD7BF] text-white hover:text-black">
              GITHUB
            </ShinyButton>
          </a>
          <a
            href="https://www.linkedin.com/in/jared-watson-b7b5b6220/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ShinyButton className="bg-[#00A5E3] hover:bg-[#8DD7BF] text-white hover:text-black">
              LINKEDIN
            </ShinyButton>
          </a>
          <a href="mailto:jared@askcure.ai">
            <ShinyButton className="bg-[#00A5E3] hover:bg-[#8DD7BF] text-white hover:text-black">
              CONTACT ME
            </ShinyButton>
          </a>
        </div>
      </div>
    </section>
  );
}
