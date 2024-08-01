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
    <div className="relative isolate overflow-hidden bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 px-6 py-8 sm:py-12 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:gap-y-10 lg:items-center">
        <div className="lg:pr-4">
          <div className="lg:max-w-lg">
            <p className="text-base font-semibold leading-7 text-indigo-600">
              Independent Game Development
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-100 sm:text-5xl">
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
                    Developed various classes for enemies, players, and
                    power-ups.
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
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-gray-800 to-gray-600 group-hover:from-gray-700 group-hover:to-gray-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-gray-800"
                href="https://github.com/Jared-Watson1/Dodge"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" />
                  </svg>
                  GitHub
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
