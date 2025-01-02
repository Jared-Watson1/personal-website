"use client";

import ShinyButton from "./shiny-button";
import {
  UserGroupIcon,
  CurrencyDollarIcon,
  ClipboardDocumentListIcon,
  CodeBracketIcon,
  ServerStackIcon,
} from "@heroicons/react/20/solid";
import { FaGithub } from "react-icons/fa";

// ===================== MAIN COMPONENT =====================
export default function DooleyShowcase() {
  const features = [
    {
      Icon: UserGroupIcon,
      title: "Connecting Students",
      description:
        "DooleyAFavor connects Emory students to help each other complete tasks and earn money.",
    },
    {
      Icon: CurrencyDollarIcon,
      title: "Earn Money",
      description:
        "Students can earn money by assisting others with various tasks on the platform.",
    },
    {
      Icon: ClipboardDocumentListIcon,
      title: "Task Management",
      description:
        "Efficiently manage and track tasks through our user-friendly interface.",
    },
    {
      Icon: CodeBracketIcon,
      title: "Tech Stack",
      description:
        "Built with Python, Flask, and Node.js, and hosted securely on Heroku.",
    },
    {
      Icon: ServerStackIcon,
      title: "Database Security",
      description:
        "All data is securely stored using PostgreSQL on ElephantSQL databases.",
    },
  ];

  return (
    <section
      id="dooley-showcase"
      className="relative min-h-screen w-full px-6 py-12 md:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* LEFT SECTION - Features */}
        <div className="lg:w-3/5 space-y-8">
          <h2 className="text-5xl font-extrabold text-[#474853] bg-clip-text md:text-6xl">
            DooleyAFavor
          </h2>
          <p className="text-xl text-[#474853] md:text-2xl">
            A peer-to-peer platform connecting students to complete tasks
            efficiently.
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
              href="https://github.com/Jared-Watson1/DooleyAFavor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ShinyButton className="bg-[#00A5E3] hover:bg-[#8DD7BF] text-white hover:text-black">
                <FaGithub className="w-5 h-5" />
              </ShinyButton>
            </a>
          </div>
        </div>

        {/* RIGHT SECTION - Images */}
        <div className="lg:w-2/5 grid grid-cols-1 gap-6">
          <div className="overflow-hidden rounded-xl shadow-xl">
            <img
              src="/dooley-ss1.png"
              alt="DooleyAFavor Screenshot 1"
              className="w-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-xl">
            <img
              src="/dooley-ss2.png"
              alt="DooleyAFavor Screenshot 2"
              className="w-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
