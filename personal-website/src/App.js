import React, { useRef } from "react";
import "./App.css";
import HeroSection from "./HeroSection";
import Skills from "./Skills";
import CureShowcase from "./CureShowcase";
import ProjectSection from "./ProjectSection";
import Divider from "./Divider";

function App() {
  const projectRef = useRef(null);
  const cureRef = useRef(null);

  const scrollToProjects = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCureShowcase = () => {
    cureRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 min-h-screen">
      <HeroSection scrollToProjects={scrollToProjects} />
      <Divider />
      <Skills />
      <Divider />
      <div ref={projectRef}>
        <ProjectSection scrollToCureShowcase={scrollToCureShowcase} />
      </div>
      <Divider />
      <div ref={cureRef}>
        <CureShowcase />
      </div>
    </div>
  );
}

export default App;
