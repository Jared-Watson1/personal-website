import React, { useEffect, useRef } from "react";
import {
  CodeBracketIcon,
  UserGroupIcon,
  PuzzlePieceIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "@heroicons/react/20/solid";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaPython } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const DodgeShowcase = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // GSAP animations
    gsap.fromTo(
      videoRef.current,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="relative isolate overflow-hidden  px-6 py-8 sm:py-12 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:gap-y-10 lg:items-center">
        <div className="lg:pr-4">
          <div className="lg:max-w-lg">
            <p className="text-base font-semibold leading-7 text-indigo-600">
              Independent Game Development
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-100 sm:text-5xl animate-glow-on-hover">
              <span className="bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent">
                Dodge
              </span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-300">
              <strong>
                A solo-developed project showcasing advanced object-oriented
                programming and AI techniques.
              </strong>
            </p>
            <ul className="mt-8 space-y-8 text-gray-400">
              <li className="flex gap-x-3">
                <PuzzlePieceIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-100">
                    Object-Oriented Programming:
                  </strong>
                  <p className="inline">
                    {" "}
                    Developed various classes for enemies, players, power-ups,
                    and GUI.
                  </p>
                </span>
              </li>
              <li className="flex gap-x-3">
                <ShieldCheckIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-100">
                    Custom AI:
                  </strong>
                  <p className="inline">
                    {" "}
                    Engineered AI to calculate velocities for enemy collision
                    with the player.
                  </p>
                </span>
              </li>
              <li className="flex gap-x-3">
                <CodeBracketIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-100">
                    Physics-Based Collision Detection:
                  </strong>
                  <p className="inline">
                    {" "}
                    Implemented collision detection between 2D squares and
                    bullets.
                  </p>
                </span>
              </li>
              <li className="flex gap-x-3">
                <UserGroupIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-100">
                    Pygame Graphics:
                  </strong>
                  <p className="inline">
                    {" "}
                    Utilized Pygame library for graphics within Python.
                  </p>
                </span>
              </li>
              <li className="flex gap-x-3">
                <SparklesIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-100">
                    Particle System:
                  </strong>
                  <p className="inline">
                    {" "}
                    Created a custom particle system triggered after collision
                    detection.
                  </p>
                </span>
              </li>
            </ul>
            <div className="mt-10">
              <a
                href="https://github.com/Jared-Watson1/Dodge"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-indigo-600 to-pink-600 group-hover:from-indigo-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-indigo-700"
              >
                <span className="relative px-6 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0 flex items-center">
                  <FaGithub className="w-5 h-5 mr-2" />
                  View on GitHub
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:col-start-2 lg:row-start-1 lg:flex lg:flex-col lg:items-center lg:justify-center lg:space-y-10 lg:pr-8">
          <div ref={videoRef} className="w-full max-w-lg">
            <video
              src={`${process.env.PUBLIC_URL}/dodge-demo.mp4`}
              controls
              className="block w-full rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
              style={{ width: "100%", maxWidth: "50rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DodgeShowcase;
