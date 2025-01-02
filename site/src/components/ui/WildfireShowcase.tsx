"use client";

import React, { useState } from "react";
import { BentoGrid, BentoCard } from "./bento-grid";
// import AnimatedGridPattern from "./animated-grid-pattern";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChartBarIcon,
  MapIcon,
  CogIcon,
  StarIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/20/solid";

// ===================== IMAGE ACCORDION =====================
const article = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

type ItemType = {
  id: number;
  url: string;
  title: string;
  description: string;
};

interface GalleryProps {
  items: ItemType[];
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

function Gallery({ items, index, setIndex }: GalleryProps) {
  return (
    <div id="wildfire-showcase" className="w-fit mx-auto flex gap-1">
      {items.map((item, i) => (
        <motion.div
          key={item.id}
          whileTap={{ scale: 0.95 }}
          className={`rounded-xl relative ${
            index === i ? "w-[400px]" : "w-[50px]"
          } h-[350px] flex-shrink-0 transition-[width] ease-in-linear duration-500 origin-center`}
          onClick={() => setIndex(i)}
          onMouseEnter={() => setIndex(i)}
        >
          <motion.img
            src={item.url}
            alt={item.title}
            className={`${
              index === i ? "cursor-default" : "cursor-pointer"
            } w-full rounded-xl h-full object-cover`}
          />
          <AnimatePresence mode="wait">
            {index === i && (
              <motion.article
                variants={article}
                initial="hidden"
                animate="show"
                className="absolute flex flex-col justify-end h-full top-0 p-3 space-y-2 overflow-hidden 
                           rounded-xl bg-gradient-to-t 
                           dark:from-gray-900/60 from-gray-100/60 from-20% to-transparent to-80%"
              >
                <motion.h1
                  variants={article}
                  className="text-2xl font-semibold"
                >
                  {item.title}
                </motion.h1>
                <motion.p variants={article} className="leading-[120%]">
                  {item.description}
                </motion.p>
              </motion.article>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

// ===================== MAIN COMPONENT =====================
export default function WildfireShowcase() {
  const [index, setIndex] = useState<number>(0);

  // Image accordion data
  const items: ItemType[] = [
    {
      id: 0,
      url: "./largest-fires.png",
      title: "Largest Fires",
      description:
        "10,000 Largest Fires (1992–2015). Larger and more intense fires are concentrated in the western US and Alaska.",
    },
    {
      id: 1,
      url: "./counties.png",
      title: "Wildfire by County",
      description:
        "Occurrences by county, with color intensities representing wildfire frequency. High frequency areas in yellow.",
    },
    {
      id: 2,
      url: "./temporal-density.png",
      title: "Temporal Statistics",
      description:
        "Scatter plot: Discovery Day vs. Containment Days. Larger marker = bigger fire. Shows distribution trends.",
    },
  ];

  // ===================== BENTO CARD CONTENT =====================
  const bentoItems = [
    {
      Icon: MapIcon,
      name: "Spatial Analysis",
      description:
        "Mapped wildfire distribution across the U.S. highlighting concentration zones and trends.",
      href: "https://github.com/Jared-Watson1/CS470",
      cta: "Learn more",
      background: <div className="hidden" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: ChartBarIcon,
      name: "Temporal Patterns",
      description:
        "Analyzed seasonality, containment times, and peak wildfire discovery periods.",
      href: "https://github.com/Jared-Watson1/CS470",
      cta: "Learn more",
      background: <div className="hidden" />,
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: DocumentMagnifyingGlassIcon,
      name: "Predictive Modeling",
      description:
        "Trained regression models to predict wildfire containment times using scikit-learn.",
      href: "https://github.com/Jared-Watson1/CS470",
      cta: "Learn more",
      background: <div className="hidden" />,
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: CogIcon,
      name: "Data Processing",
      description:
        "Cleaned, scaled, and encoded data for analysis using pandas and NumPy.",
      href: "https://github.com/Jared-Watson1/CS470",
      cta: "Learn more",
      background: <div className="hidden" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3",
    },
    {
      Icon: StarIcon,
      name: "Model Evaluation",
      description:
        "Evaluated models using RMSE, MAE, and R² for performance analysis.",
      href: "https://github.com/Jared-Watson1/CS470",
      cta: "Learn more",
      background: <div className="hidden" />,
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
    },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Animated Grid Pattern */}
      {/* <AnimatedGridPattern
        className="absolute inset-0 z-0"
        numSquares={100}
        maxOpacity={0.2}
        duration={3.5}
        repeatDelay={0.8}
        width={60}
        height={60}
        strokeDasharray={2}
      /> */}

      {/* Foreground Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="mb-2 text-5xl font-extrabold text-[#474853] md:text-6xl">
            U.S. Wildfire Analysis
          </h2>
          <p className="text-xl text-gray-700 md:text-2xl">
            Analyzing spatial and temporal patterns to predict wildfire
            behavior.
          </p>
        </div>

        {/* Bento Grid */}
        <BentoGrid className="lg:grid-cols-3 lg:grid-rows-2 gap-4">
          {bentoItems.map((item, idx) => (
            <BentoCard key={idx} {...item} />
          ))}
        </BentoGrid>

        {/* Sticky Image Gallery */}
        <div className="mt-10 flex justify-center">
          <Gallery items={items} index={index} setIndex={setIndex} />
        </div>
      </div>
    </section>
  );
}
