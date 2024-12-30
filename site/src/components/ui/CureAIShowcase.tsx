"use client";

import { BentoGrid, BentoCard } from "./bento-grid";
import HeroVideoDialog from "./hero-video-dialog";

// Heroicons (20/solid)
import {
  ShieldCheckIcon,
  ChatBubbleBottomCenterTextIcon,
  CheckCircleIcon,
  BookOpenIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/20/solid";

export default function CureAIShowcase() {
  // Five features for Cure AI, with specific layout classes
  const cureFeatures = [
    {
      Icon: ShieldCheckIcon,
      name: "Patented Technology",
      description:
        "Ensures reliable, accurate AI responses for critical use cases.",
      href: "https://www.askcureai.com/",
      cta: "Learn more",
      // This card is top-left (Row 1, Col 1).
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2",
      background: <div className="hidden" />, // minimal background
    },
    {
      Icon: ChatBubbleBottomCenterTextIcon,
      name: "Natural Language Queries",
      description:
        "Transform complex searches into simple questions. Cure AI interprets your intent seamlessly.",
      href: "https://www.askcureai.com/",
      cta: "Learn more",
      // Top-middle (Row 1, Col 2).
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
      background: <div className="hidden" />,
    },
    {
      Icon: CheckCircleIcon,
      name: "Verified Responses",
      description:
        "Literature-backed answers ensure credibility and accuracy for research.",
      href: "https://www.askcureai.com/",
      cta: "Learn more",
      // Bottom-left (Row 2, Col 1).
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3",
      background: <div className="hidden" />,
    },
    {
      Icon: BookOpenIcon,
      name: "Seamless Literature Navigation",
      description:
        "Access curated studies with detailed info for a smooth research experience.",
      href: "https://www.askcureai.com/",
      cta: "Learn more",
      // Bottom-middle (Row 2, Col 2).
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
      background: <div className="hidden" />,
    },
    {
      Icon: DocumentMagnifyingGlassIcon,
      name: "Advanced Search Parameters",
      description:
        "Specify journals, dates, and more to find exactly what you need.",
      href: "https://www.askcureai.com/",
      cta: "Learn more",
      // Spans top + bottom row on the right side (Row 1->2, Col 3).
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3",
      background: <div className="hidden" />,
    },
  ];

  return (
    <section
      id="cure-showcase"
      className="relative w-full min-h-screen py-6 px-4 overflow-x-hidden"
    >
      {/* Semi‐transparent white overlay */}
      <div className="absolute inset-0 bg-white/50 z-10" />

      {/* Foreground container */}
      <div className="relative z-20 max-w-5xl mx-auto text-center">
        {/* Heading & Subheading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-3">
          Cure AI
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Streamlining scientific research with AI-driven evidence-based
          insights.
        </p>

        {/* Video with thumbnail */}
        <div className="my-4 flex justify-center">
          <HeroVideoDialog
            className=""
            animationStyle="top-in-bottom-out"
            videoSrc="https://www.youtube.com/embed/BpYfmDMErgM"
            thumbnailSrc="https://www.askcureai.com/cure-ss-advanced-search.jpeg"
            thumbnailAlt="Cure AI Demo"
          />
        </div>

        {/* BentoGrid with 2 rows x 3 columns at lg breakpoints */}
        <div className="mt-6">
          <BentoGrid className="lg:grid-cols-3 lg:grid-rows-2 gap-2">
            {cureFeatures.map((feature, idx) => (
              <BentoCard key={idx} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  );
}
