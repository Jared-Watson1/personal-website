import React from "react";
import "./App.css";
import HeroSection from "./HeroSection";
import Skills from "./Skills";
import CureShowcase from "./CureShowcase";

function App() {
  return (
    <div className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 min-h-screen">
      <HeroSection />
      <Skills />
      <CureShowcase />
    </div>
  );
}

export default App;
