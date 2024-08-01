import React, { useEffect, useRef } from "react";
import {
  ChatBubbleLeftEllipsisIcon,
  ShieldCheckIcon,
  BookOpenIcon,
  LightBulbIcon,
  ArrowRightOnRectangleIcon,
  ChartBarIcon,
} from "@heroicons/react/20/solid";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CureShowcase = () => {
  const imgRefs = useRef([]);

  useEffect(() => {
    // GSAP animations
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
    <div className="relative isolate overflow-hidden bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 px-6 py-8 sm:py-12 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:gap-y-10 lg:items-center">
        <div className="lg:pr-4">
          <div className="lg:max-w-lg">
            <p className="text-base font-semibold leading-7 text-indigo-600">
              AI Driven Platform
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-100 sm:text-5xl">
              <span className="bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent">
                Cure AI
              </span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-300">
              <strong>
                Revolutionizing medical research with AI-driven solutions.
              </strong>
            </p>
            <ul className="mt-8 space-y-8 text-gray-400">
              <li className="flex gap-x-3">
                <ChatBubbleLeftEllipsisIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-100">
                    AI-Powered Chatbot:
                  </strong>
                  <p className="inline">
                    {" "}
                    Provides quick and reliable answers to clinical questions
                    through a user-friendly interface.
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
                    Patented Technology:
                  </strong>
                  <p className="inline">
                    {" "}
                    Ensures the reliability and accuracy of AI responses, backed
                    by cutting-edge research.
                  </p>
                </span>
              </li>
              <li className="flex gap-x-3">
                <BookOpenIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-100">
                    Extensive Literature Database:
                  </strong>
                  <p className="inline">
                    {" "}
                    Access over 26 million pieces of primary literature and
                    clinical guidelines.
                  </p>
                </span>
              </li>
              <li className="flex gap-x-3">
                <LightBulbIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-100">
                    Intuitive Design:
                  </strong>
                  <p className="inline">
                    {" "}
                    Transforms complex searches into simple questions, enhancing
                    user experience.
                  </p>
                </span>
              </li>
              <li className="flex gap-x-3">
                <ArrowRightOnRectangleIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-100">
                    Streamlined Retrieval:
                  </strong>
                  <p className="inline">
                    {" "}
                    Provides precise answers with quick links, previews, and
                    citations.
                  </p>
                </span>
              </li>
              <li className="flex gap-x-3">
                <ChartBarIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-100">
                    Enhanced Productivity:
                  </strong>
                  <p className="inline">
                    {" "}
                    Reduces research time, allowing healthcare professionals to
                    focus more on patient care.
                  </p>
                </span>
              </li>
            </ul>
            <p className="mt-8 text-gray-300">
              <em>
                Cure AI leverages LLMs to provide accurate and timely medical
                information, improving clinical workflows and patient outcomes.
              </em>
            </p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-100">
              Simplifying Complex Medical Research
            </h2>
            <p className="mt-6 text-gray-300">
              <em>
                Cure AI transforms the way healthcare professionals conduct
                research by providing intuitive and reliable AI-driven
                solutions.
              </em>
              <br />
              <strong>
                Experience a streamlined process with access to extensive
                databases and precise answers, enhancing productivity and
                patient care.
              </strong>
            </p>
            <div className="mt-10">
              <a
                href="https://www.askcureai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-indigo-400 to-pink-600 group-hover:from-indigo-400 group-hover:to-pink-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-indigo-800"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Learn More
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:col-start-2 lg:row-start-1 lg:flex lg:flex-col lg:items-center lg:justify-center lg:space-y-10 lg:pr-8">
          <div
            ref={(el) => (imgRefs.current[0] = el)}
            className="w-full max-w-lg"
          >
            <img
              src={`${process.env.PUBLIC_URL}/cure_ss_6:9:24.png`}
              alt="Cure AI screenshot 1"
              className="block w-full rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
              style={{ width: "80%", maxWidth: "40rem" }}
            />
          </div>
          <div
            ref={(el) => (imgRefs.current[1] = el)}
            className="w-full max-w-lg"
          >
            <img
              src={`${process.env.PUBLIC_URL}/cure-ss.png`}
              alt="Cure AI screenshot 2"
              className="block w-full rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
              style={{ width: "80%", maxWidth: "40rem" }}
            />
          </div>
          <div
            ref={(el) => (imgRefs.current[2] = el)}
            className="w-full max-w-lg"
          >
            <img
              src={`${process.env.PUBLIC_URL}/cure_ss_sourcepopup-7:9:24.png`}
              alt="Cure AI screenshot 3"
              className="block w-full rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
              style={{ width: "80%", maxWidth: "40rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CureShowcase;
