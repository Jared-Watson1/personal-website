import React, { useState } from "react";
import {
  FaPython,
  FaDatabase,
  FaJava,
  FaReact,
  FaAws,
  FaDocker,
  FaSitemap,
  FaRobot,
  FaBrain,
} from "react-icons/fa";

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

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const calculateForceClass = (index, hoveredIndex) => {
    if (hoveredIndex === null || hoveredIndex === index) return "";

    const columns = 3; // Number of columns in the grid
    const rowHovered = Math.floor(hoveredIndex / columns);
    const colHovered = hoveredIndex % columns;
    const rowCurrent = Math.floor(index / columns);
    const colCurrent = index % columns;

    const rowDifference = rowCurrent - rowHovered;
    const colDifference = colCurrent - colHovered;

    // Determine the translation based on the direction
    let forceClass = "";
    if (rowDifference === 0) {
      // Same row
      forceClass = colDifference > 0 ? "translate-x-3" : "translate-x--3";
    } else if (colDifference === 0) {
      // Same column
      forceClass = rowDifference > 0 ? "translate-y-3" : "translate-y--3";
    } else {
      // Diagonal
      if (rowDifference > 0 && colDifference > 0) {
        forceClass = "translate-x-2 translate-y-2";
      } else if (rowDifference > 0 && colDifference < 0) {
        forceClass = "translate-x--2 translate-y-2";
      } else if (rowDifference < 0 && colDifference > 0) {
        forceClass = "translate-x-2 translate-y--2";
      } else {
        forceClass = "translate-x--2 translate-y--2";
      }
    }

    return forceClass;
  };

  return (
    <div className="flex justify-center items-center py-8">
      <div className="mx-auto flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-200 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">
              <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base sm:text-lg md:text-xl text-gray-300 sm:mt-5 md:mt-5 drop-shadow-md">
            Here are some of the technical skills I have acquired over the
            years, ranging from programming languages to cloud services and
            system design.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`relative group w-24 h-24 p-4 bg-gradient-to-br from-indigo-400 to-pink-600 rounded-lg shadow-md flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 ${calculateForceClass(
                  index,
                  hoveredIndex
                )}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Glowing Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Skill Content */}
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <div className="text-white mb-2 text-2xl">{skill.icon}</div>
                  <h3 className="text-sm font-bold text-white text-center">
                    {skill.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
