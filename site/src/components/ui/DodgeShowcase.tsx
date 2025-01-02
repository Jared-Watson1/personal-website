"use client";

import ShinyButton from "./shiny-button";
import { FaGithub } from "react-icons/fa";
import {
  CodeBracketIcon,
  UserGroupIcon,
  PuzzlePieceIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "@heroicons/react/20/solid";

// ===================== MAIN COMPONENT =====================
export default function DodgeShowcase() {
  const features = [
    {
      Icon: PuzzlePieceIcon,
      title: "Object-Oriented Programming",
      description:
        "Developed modular classes for enemies, players, power-ups, and GUI components.",
    },
    {
      Icon: ShieldCheckIcon,
      title: "Custom AI",
      description:
        "Engineered AI to dynamically calculate velocities for enemy collision with the player.",
    },
    {
      Icon: CodeBracketIcon,
      title: "Physics-Based Collision Detection",
      description:
        "Implemented accurate collision detection between 2D objects and bullets.",
    },
    {
      Icon: UserGroupIcon,
      title: "Pygame Graphics",
      description:
        "Utilized Python's Pygame library for rendering game graphics and animations.",
    },
    {
      Icon: SparklesIcon,
      title: "Particle System",
      description:
        "Designed a custom particle system that triggers visually dynamic effects upon collisions.",
    },
  ];

  return (
    <section
      id="dodge-showcase"
      className="relative min-h-screen w-full px-6 py-12 md:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* LEFT SECTION - Features */}
        <div className="lg:w-3/5 space-y-8">
          <h2 className="text-5xl font-extrabold bg-clip-text text-[#474853] md:text-6xl">
            Dodge
          </h2>
          <p className="text-xl text-[#474853] md:text-2xl">
            A solo-developed 2D game showcasing advanced AI techniques,
            physics-based collision detection, and custom particle systems.
          </p>

          {/* Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white shadow-lg rounded-xl border border-gray-200 hover:scale-105 transition-transform"
              >
                <feature.Icon className="h-10 w-10 text-[#00A5E3]" />
                <div>
                  <h3 className="text-xl font-semibold text-[#474853]">
                    {feature.title}
                  </h3>
                  <p className="text-md text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub Button */}
          <div className="mt-10">
            <a
              href="https://github.com/Jared-Watson1/Dodge"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ShinyButton className="bg-[#00A5E3] hover:bg-[#8DD7BF] text-white hover:text-black">
                <FaGithub className="w-5 h-5" />
              </ShinyButton>
            </a>
          </div>
        </div>

        {/* RIGHT SECTION - Video */}
        <div className="lg:w-2/5 flex justify-center">
          <div className="overflow-hidden rounded-xl shadow-xl w-full max-w-lg">
            <video
              src="/dodge-demo.mp4"
              controls
              className="w-full rounded-xl object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
