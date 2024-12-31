"use client";

import HeroSection from "./components/ui/HeroSection";
import SkillsSection from "./components/ui/SkillsSection";
import ProjectsSection from "./components/ui/ProjectSection";
import CureAIShowcase from "./components/ui/CureAIShowcase";
import WildfireShowcase from "./components/ui/WildfireShowcase";
import Particles from "./components/ui/particles";

export default function App() {
  return (
    <main
      className="
        relative
        min-h-screen
        w-full
        overflow-x-hidden
      "
    >
      {/* Particle effect */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={120 * 3.5} // Increased quantity by 3.5x (420 particles)
        size={0.6} // Slightly larger particles
        ease={70} // Smooth animations
        color="#00B8A9" // Primary color
        refresh={true}
        staticity={30} // Adds slight motion
        vx={0.2} // Horizontal motion
        vy={0.2} // Vertical motion
      />
      <Particles
        className="absolute inset-0 z-0"
        quantity={80 * 3.5} // Increased quantity by 3.5x (280 particles)
        size={0.5}
        ease={60}
        color="#F6416C" // Secondary color
        refresh={true}
        staticity={40}
        vx={-0.1}
        vy={0.1}
      />
      <Particles
        className="absolute inset-0 z-0"
        quantity={50 * 3.5} // Increased quantity by 3.5x (175 particles)
        size={0.7}
        ease={50}
        color="#FFDE7D" // Accent color
        refresh={false}
        staticity={20}
        vx={0}
        vy={0.3}
      />

      {/* Sections with extra spacing */}
      <div className="relative z-10 space-y-24 md:space-y-32 lg:space-y-40">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <CureAIShowcase />
        <WildfireShowcase />
      </div>
    </main>
  );
}
