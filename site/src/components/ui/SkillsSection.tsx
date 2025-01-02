"use client";

import { useTheme } from "next-themes";

// Magic UI
// import { VelocityScroll } from "./scroll-based-velocity";
import { MagicCard } from "./magic-card";
import WordFadeIn from "./word-fade-in";
// import Particles from "./particles";
// Icons
import {
  FaPython,
  FaDatabase,
  FaJava,
  FaReact,
  FaAws,
  FaDocker,
  FaSitemap,
  FaBrain,
  FaRobot,
} from "react-icons/fa";

// const SCROLL_SPEED = 2;
const skills = [
  { name: "Python", icon: <FaPython /> },
  { name: "SQL", icon: <FaDatabase /> },
  { name: "Java", icon: <FaJava /> },
  { name: "React", icon: <FaReact /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "System Design", icon: <FaSitemap /> },
  { name: "Machine Learning", icon: <FaBrain /> },
  { name: "ChatBots", icon: <FaRobot /> },
];

export default function SkillsSection() {
  const { theme } = useTheme();

  return (
    <section className="relative w-screen min-h-screen overflow-x-hidden">
      {/* Main content */}
      {/* <Particles
        className="absolute inset-0 z-0"
        quantity={150} // Increased density
        size={3.2}
        ease={70}
        color="#FF96C5" // Pink particles
        refresh={true}
        staticity={90}
        vx={0.2}
        vy={0.2}
      />
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        size={1.8}
        ease={60}
        color="#FF5768" // Red particles
        refresh={true}
        staticity={40}
        vx={-0.1}
        vy={0.1}
      />
      <Particles
        className="absolute inset-0 z-0"
        quantity={50}
        size={1.0}
        ease={50}
        color="#00A5E3" // Blue particles
        refresh={false}
        staticity={20}
        vx={0}
        vy={0.3}
      /> */}
      <section className="relative z-20 flex min-h-screen w-full flex-col items-center justify-start pt-10">
        {/* Scrolling Skill Names */}
        {/* <div className="w-screen overflow-hidden mb-10">
          <VelocityScroll
            defaultVelocity={SCROLL_SPEED}
            numRows={1}
            className="whitespace-nowrap text-3xl font-semibold text-[#8DD7BF]"
          >
            {skills.map((skill) => skill.name).join("  •  ")}
          </VelocityScroll>
        </div> */}

        {/* Heading */}
        <div className="text-center px-4 pt-10">
          <WordFadeIn
            words="Technical Skills"
            className="mb-4 text-5xl font-extrabold text-[#474853] bg-clip-text"
          />
          <p className="mb-8 text-xl text-[#474853] md:text-2xl">
            A quick overview of some core skills I’ve picked up along the way.
          </p>
        </div>

        {/* Skills Cards */}
        <div className="w-full flex justify-center px-4 pb-16">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {skills.map((skill) => (
              <MagicCard
                key={skill.name}
                gradientSize={150}
                gradientColor={theme === "dark" ? "#262626" : "#8DD7BF"}
                gradientOpacity={1}
                gradientFrom="#FF96C5"
                gradientTo="#FFBF65"
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  p-6
                  cursor-pointer
                  shadow-lg
                  hover:scale-105
                  transition-transform
                "
              >
                {/* Icon and Text Wrapper */}
                <div className="flex flex-col items-center justify-center gap-4">
                  <span className="text-5xl text-[#00A5E3]">{skill.icon}</span>
                  <span className="text-xl font-bold text-[#474853]">
                    {skill.name}
                  </span>
                </div>
              </MagicCard>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
