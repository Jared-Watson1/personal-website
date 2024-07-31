import React from "react";
import "./App.css";
import HeroSection from "./HeroSection";
import Skills from "./Skills";
import CureShowcase from "./CureShowcase";
import ProjectSection from "./ProjectSection";
import Divider from "./Divider";

function App() {
  return (
    <div className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 min-h-screen">
      <div className="py-8">
        <HeroSection />
      </div>
      <Divider />
      <div className="py-8">
        <Skills />
      </div>
      <Divider />
      <div className="py-8">
        <ProjectSection />
      </div>
      <div>
        <CureShowcase />
      </div>
    </div>
  );
}

export default App;
