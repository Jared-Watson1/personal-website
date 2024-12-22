import React, { useEffect, useRef } from "react";
import {
  UserGroupIcon,
  CurrencyDollarIcon,
  ClipboardDocumentListIcon,
  CodeBracketIcon,
  ServerStackIcon,
  CloudArrowUpIcon,
} from "@heroicons/react/20/solid";
import { FaGithub, FaPython } from "react-icons/fa";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DooleyShowcase = () => {
  const imgRefs = useRef([]);

  useEffect(() => {
    imgRefs.current.forEach((imgRef) => {
      gsap.fromTo(
        imgRef,
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: imgRef,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="relative isolate overflow-hidden  px-6 py-8 sm:py-12 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:gap-y-10 lg:items-center">
        <div className="lg:pr-4">
          <div className="lg:max-w-lg">
            <p className="text-base font-semibold leading-7 text-indigo-600">
              Team Project
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-100 sm:text-5xl animate-glow-on-hover">
              <span className="bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent">
                DooleyAFavor
              </span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-300">
              <strong>Connecting Emory students for peer support.</strong>
            </p>
            <p className="mx-auto mt-3 max-w-xl text-base sm:text-lg md:text-xl text-gray-300 sm:mt-5 md:mt-5 drop-shadow-md">
              DooleyAFavor helps Emory students manage tasks and earn money by
              assisting peers. I led the project, overseeing system design,
              sprint planning, communication with teammates, and weekly progress
              updates. Specifically, I developed the backend, including task and
              user management APIs.
            </p>
            <ul className="mt-8 space-y-8 text-gray-400">
              <li className="flex gap-x-3">
                <UserGroupIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-100">
                    Connecting Students:
                  </strong>
                  <p className="inline">
                    {" "}
                    DooleyAFavor connects Emory students who need help with
                    tasks to those who can assist.
                  </p>
                </span>
              </li>
              <li className="flex gap-x-3">
                <CurrencyDollarIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-100">
                    Earn Money:
                  </strong>
                  <p className="inline">
                    {" "}
                    Students can earn money by helping out their peers with
                    various tasks.
                  </p>
                </span>
              </li>
              <li className="flex gap-x-3">
                <ClipboardDocumentListIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-100">
                    Task Management:
                  </strong>
                  <p className="inline">
                    {" "}
                    Manage and post tasks efficiently through our intuitive
                    platform.
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
                    Tech Stack:
                  </strong>
                  <p className="inline">
                    {" "}
                    Frontend powered by Node.js and backend running on Python
                    and Flask, hosted on Heroku.
                  </p>
                </span>
              </li>
              <li className="flex gap-x-3">
                <ServerStackIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-100">
                    Secure Database:
                  </strong>
                  <p className="inline">
                    {" "}
                    All data is securely stored in ElephantSQL Database using
                    PostgreSQL.
                  </p>
                </span>
              </li>
            </ul>

            <div className="mt-10">
              <div className="rounded-md shadow">
                <a
                  href="https://github.com/Jared-Watson1/DooleyAFavor"
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
        </div>
        <div className="lg:col-start-2 lg:row-start-1 lg:flex lg:flex-col lg:items-center lg:justify-center lg:space-y-10 lg:pr-8">
          <div
            ref={(el) => (imgRefs.current[0] = el)}
            className="w-full max-w-lg"
          >
            <img
              src={`${process.env.PUBLIC_URL}/dooley-ss1.png`}
              alt="DooleyAFavor screenshot 1"
              className="block w-full rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
              style={{ width: "100%", maxWidth: "50rem" }}
            />
          </div>
          <div
            ref={(el) => (imgRefs.current[1] = el)}
            className="w-full max-w-lg"
          >
            <img
              src={`${process.env.PUBLIC_URL}/dooley-ss2.png`}
              alt="DooleyAFavor screenshot 2"
              className="block w-full rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
              style={{ width: "100%", maxWidth: "50rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DooleyShowcase;
