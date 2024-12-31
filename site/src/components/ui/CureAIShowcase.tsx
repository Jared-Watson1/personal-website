"use client";

import React from "react";
import { BentoGrid, BentoCard } from "./bento-grid";
import HeroVideoDialog from "./hero-video-dialog";
import AnimatedGridPattern from "./animated-grid-pattern";
import {
  ShieldCheckIcon,
  ChatBubbleBottomCenterTextIcon,
  BookOpenIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/20/solid";

// ===================== MAIN COMPONENT =====================
export default function CureAIShowcase() {
  const items = [
    {
      // Feature #1: Top-Left
      type: "feature",
      Icon: ShieldCheckIcon,
      name: "Patented Technology",
      description:
        "Ensures reliable, accurate AI responses for critical use cases.",
      href: "#",
      cta: "Learn more",
      background: <div className="hidden" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2",
    },
    {
      // Video: Center
      type: "video",
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
      Icon: () => null,
      name: "",
      description: "",
      href: "",
      cta: "",
      background: <div className="hidden" />,
    },
    {
      // Feature #3: Right-Side (Spanning Two Rows)
      type: "feature",
      Icon: DocumentMagnifyingGlassIcon,
      name: "Advanced Search Parameters",
      description:
        "Specify journals, dates, and more for precise query results.",
      href: "#",
      cta: "Learn more",
      background: <div className="hidden" />,
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3",
    },
    {
      // Feature #2: Bottom-Left
      type: "feature",
      Icon: ChatBubbleBottomCenterTextIcon,
      name: "Natural Language Queries",
      description:
        "Transform complex searches into simple questions. Cure AI interprets your intent seamlessly.",
      href: "#",
      cta: "Learn more",
      background: <div className="hidden" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3",
    },
    {
      // Feature #4: Bottom-Middle
      type: "feature",
      Icon: BookOpenIcon,
      name: "Seamless Literature Navigation",
      description:
        "Access curated studies with detailed info for smooth research.",
      href: "#",
      cta: "Learn more",
      background: <div className="hidden" />,
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
    },
  ];

  return (
    <section
      id="cure-showcase"
      className="relative w-full min-h-screen py-6 px-4 overflow-x-hidden"
    >
      {/* Animated Grid Pattern Background */}
      <AnimatedGridPattern
        className="absolute inset-0 z-0"
        numSquares={100}
        maxOpacity={0.2}
        duration={3.5}
        repeatDelay={0.8}
        width={60}
        height={60}
        strokeDasharray={2}
      />

      {/* Optional translucent overlay */}
      <div className="absolute inset-0 bg-white/50 z-10" />

      {/* Foreground Container */}
      <div className="relative z-20 max-w-7xl mx-auto">
        {/* Heading & Subheading */}
        <div className="text-center mb-6">
          <h2 className="mb-2 text-5xl font-extrabold text-black md:text-6xl">
            Cure AI
          </h2>
          <p className="text-xl text-gray-700 md:text-2xl">
            Streamlining scientific research with AI-driven evidence-based
            insights.
          </p>
        </div>

        {/* BentoGrid Layout */}
        <BentoGrid className="lg:grid-cols-3 lg:grid-rows-2 gap-4">
          {items.map((item, idx) =>
            item.type === "video" ? (
              // Render Video Component
              <div
                key={idx}
                className={`relative group rounded-xl border border-gray-200 bg-white text-black shadow-sm hover:shadow-md p-4 ${item.className}`}
              >
                <HeroVideoDialog
                  className=""
                  animationStyle="top-in-bottom-out"
                  videoSrc="https://www.youtube.com/embed/BpYfmDMErgM"
                  thumbnailSrc="https://www.askcureai.com/cure-ss-advanced-search.jpeg"
                  thumbnailAlt="Cure AI Demo"
                />
              </div>
            ) : (
              // Render Feature Cards
              <BentoCard key={idx} {...item} />
            )
          )}
        </BentoGrid>
      </div>
    </section>
  );
}
