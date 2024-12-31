"use client";

import { useEffect, useState } from "react";
import AnimatedCircularProgressBar from "./animated-circular-progress-bar";
import TypingAnimation from "./typing-animation";

export function Loader() {
  const [value, setValue] = useState(0);

  // Simulate loading progress
  useEffect(() => {
    const incrementValue = () =>
      setValue((prev) => (prev >= 100 ? 100 : prev + 10));
    const interval = setInterval(incrementValue, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-white">
      {/* Typing Animation */}
      <TypingAnimation
        className="text-3xl font-bold text-gray-800 mb-6"
        duration={40}
      >
        Website Loading...
      </TypingAnimation>

      {/* Circular Progress Bar */}
      <AnimatedCircularProgressBar
        max={100}
        min={0}
        value={value}
        gaugePrimaryColor="rgb(79 70 229)" /* Purple accent */
        gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
      />
    </div>
  );
}
