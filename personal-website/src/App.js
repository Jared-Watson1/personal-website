import React, { useRef, useEffect } from "react";
import "./App.css";
import HeroSection from "./HeroSection";
import Skills from "./Skills";
import CureShowcase from "./CureShowcase";
import ProjectSection from "./ProjectSection";
import Divider from "./Divider";
import MachineLearningShowcase from "./MachineLearningShowcase";
import DooleyShowcase from "./DooleyShowcase";
import DodgeShowcase from "./DodgeShowcase";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  const projectRef = useRef(null);
  const cureRef = useRef(null);
  const mlRef = useRef(null);
  const dodgeRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToProjects = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToWorkExperience = () => {
    // Update this function to scroll to your Work Experience section
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCureShowcase = () => {
    cureRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToMLShowcase = () => {
    mlRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToDooleyShowcase = () => {
    mlRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToDodgeShowcase = () => {
    dodgeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        document.body.classList.add("scrolled");
      } else {
        document.body.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 min-h-screen">
      <Header
        scrollToProjects={scrollToProjects}
        scrollToWorkExperience={scrollToWorkExperience}
        scrollToContact={scrollToContact}
      />
      <HeroSection scrollToProjects={scrollToProjects} />
      <Divider />
      <Skills />
      <Divider />
      <div ref={projectRef}>
        <ProjectSection
          scrollToCureShowcase={scrollToCureShowcase}
          scrollToMLShowcase={scrollToMLShowcase}
          scrollToDooleyShowcase={scrollToDooleyShowcase}
          scrollToDodgeShowcase={scrollToDodgeShowcase}
        />
      </div>
      <Divider />
      <div ref={cureRef}>
        <CureShowcase />
      </div>
      <Divider />
      <div ref={mlRef}>
        <MachineLearningShowcase />
      </div>
      <Divider />
      <div>
        <DooleyShowcase />
      </div>
      <Divider />
      <div ref={dodgeRef}>
        <DodgeShowcase />
      </div>
      <Divider />
      <div ref={contactRef}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
