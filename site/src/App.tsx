// src/App.tsx

import HeroSection from "./components/ui/HeroSection";
import SkillsSection from "./components/ui/SkillsSection";
import ProjectsSection from "./components/ui/ProjectSection";
import CureAIShowcase from "./components/ui/CureAIShowcase";

export default function App() {
  return (
    <main
      className="
        min-h-screen
        w-full
        overflow-x-hidden
        // Entire site uses the same 4-color diagonal gradient
        bg-[linear-gradient(135deg,_#00b8b4_0%,_#f8f0d9_25%,_#ff4e6a_60%,_#ffd95c_100%)]
      "
    >
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <CureAIShowcase />
      {/* ...other sections... */}
    </main>
  );
}
