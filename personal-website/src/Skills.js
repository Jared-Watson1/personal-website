import React from "react";
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
  return (
    <div className="flex justify-center items-center py-8">
      <div className="mx-auto flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-200 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">
              <span className="bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-gray-500 dark:text-slate-400">
            Here are some of the technical skills I have acquired over the
            years, ranging from programming languages to cloud services and
            system design.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="w-36 h-36 p-4 bg-gradient-to-br from-indigo-400 to-pink-600 rounded-lg shadow-md flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105"
              >
                <div className="text-white mb-2 text-2xl">{skill.icon}</div>
                <h3 className="text-lg font-bold text-white text-center">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
