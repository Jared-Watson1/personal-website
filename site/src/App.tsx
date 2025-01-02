"use client";

import HeroSection from "./components/ui/HeroSection";
import SkillsSection from "./components/ui/SkillsSection";
import ProjectsSection from "./components/ui/ProjectSection";
import CureAIShowcase from "./components/ui/CureAIShowcase";
import WildfireShowcase from "./components/ui/WildfireShowcase";
import LoanPredictionShowcase from "./components/ui/LoanPredictionShowcase";
import DooleyShowcase from "./components/ui/DooleyShowcase";
import DodgeShowcase from "./components/ui/DodgeShowcase";
import Footer from "./components/ui/Footer";
// import Particles from "./components/ui/particles";

export default function App() {
  return (
    <main
      className="
        relative
        min-h-screen
        w-full
        overflow-x-hidden
        bg-gradient-to-b from-[#00A5E3] via-[#8DD7BF] to-[#FFBF65]
      "
    >
      {/* Particle effect */}

      {/* Sections with extra spacing */}

      <div className="relative z-10 space-y-24 md:space-y-32 lg:space-y-40">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <CureAIShowcase />
        <WildfireShowcase />
        <LoanPredictionShowcase />
        <DooleyShowcase />
        <DodgeShowcase />
        <Footer />
      </div>
    </main>
  );
}
