import React, { useEffect, useRef, useState } from "react";
import {
  ChatBubbleBottomCenterTextIcon,
  CheckCircleIcon,
  BookOpenIcon,
  DocumentDuplicateIcon,
  DocumentMagnifyingGlassIcon,
  StarIcon,
  ShieldCheckIcon,
} from "@heroicons/react/20/solid";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CurePopup from "./CurePopup";

gsap.registerPlugin(ScrollTrigger);

const CureShowcase = () => {
  const videoRef = useRef(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // GSAP animation for the video
    if (videoRef.current) {
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
    }
  }, []);

  return (
    <div className="relative isolate overflow-hidden  px-6 py-8 sm:py-12 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:gap-y-10 lg:items-center">
        {/* Left Section: Features */}
        <div className="lg:pr-4">
          <div className="lg:max-w-lg">
            <p className="text-base font-semibold leading-7 text-indigo-600">
              AI Driven Platform
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-100 sm:text-5xl animate-glow-on-hover">
              <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                Cure AI
              </span>
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-base sm:text-lg md:text-xl text-gray-300 sm:mt-5 md:mt-5 drop-shadow-md">
              <strong>
                Streamlining scientific research with AI-driven evidence based
                insights.
              </strong>
            </p>
            <ul className="mt-8 space-y-8 text-gray-400">
              <FeatureItem
                icon={<ShieldCheckIcon className="h-6 w-6 text-indigo-600" />}
                title="Patented Technology"
                description="Cutting-edge patented technology ensures reliable, accurate AI responses for critical use cases."
              />
              <FeatureItem
                icon={
                  <ChatBubbleBottomCenterTextIcon className="h-6 w-6 text-indigo-600" />
                }
                title="Natural Language Queries"
                description="Transform complex searches into simple questions. Cure AI interprets your intent for seamless query processing."
              />
              <FeatureItem
                icon={<CheckCircleIcon className="h-6 w-6 text-indigo-600" />}
                title="Verified Responses"
                description="Rigorous literature-backed responses ensure credibility and factual accuracy for your research."
              />
              <FeatureItem
                icon={<BookOpenIcon className="h-6 w-6 text-indigo-600" />}
                title="Seamless Literature Navigation"
                description="Access curated studies and publications with detailed information for a smooth research experience."
              />
              <FeatureItem
                icon={
                  <DocumentDuplicateIcon className="h-6 w-6 text-indigo-600" />
                }
                title="Quick Citation"
                description="Easily copy or share citations, streamlining your documentation process."
              />
              <FeatureItem
                icon={
                  <DocumentMagnifyingGlassIcon className="h-6 w-6 text-indigo-600" />
                }
                title="Advanced Search Parameters"
                description="Search with precision by specifying journals, dates, and more to find exactly what you need."
              />
              <FeatureItem
                icon={<StarIcon className="h-6 w-6 text-indigo-600" />}
                title="Reputable Source Prioritization"
                description="Results are ranked by journal quality (h5-index), citation count, publication type, and relevance to query ensuring authoritative sources."
              />
            </ul>
            <div className="mt-10 flex space-x-4">
              <button
                onClick={() => setIsPopupOpen(true)}
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-indigo-400 to-pink-600 group-hover:from-indigo-500 group-hover:to-pink-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-indigo-800"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  View Tech Stack
                </span>
              </button>
              <a
                href="https://www.askcureai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-indigo-400 to-pink-600 group-hover:from-indigo-500 group-hover:to-pink-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-indigo-800"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Learn More
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Section: Video */}
        <div
          className="lg:col-start-2 lg:row-start-1 flex justify-center lg:justify-end"
          ref={videoRef}
        >
          <video
            src="cure-demo-vid.mp4"
            controls
            className="block w-full max-w-4xl rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
          ></video>
        </div>
      </div>
      <CurePopup isOpen={isPopupOpen} setIsOpen={setIsPopupOpen} />
    </div>
  );
};

const FeatureItem = ({ icon, title, description }) => (
  <li className="flex gap-x-3">
    <div className="flex-shrink-0">{icon}</div>
    <div>
      <strong className="font-semibold text-gray-100">{title}</strong>
      <p className="mt-1 text-gray-300">{description}</p>
    </div>
  </li>
);

export default CureShowcase;
