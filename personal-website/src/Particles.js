import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Particles = () => {
  const [particles, setParticles] = useState([]);

  // Generate random colors for particles
  const getRandomColor = () => {
    const colors = ["#FF007F", "#FF00FF", "#C084FC", "#7DD3FC", "#60A5FA"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Update mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e; // Mouse position relative to viewport

      // Generate multiple particles per mouse move for firework effect
      const newParticles = Array.from({ length: 6 }).map(() => ({
        id: Math.random(),
        x: clientX,
        y: clientY,
        color: getRandomColor(), // Assign random color
      }));

      setParticles((prev) => [...prev, ...newParticles]);

      // Remove particles after 800ms
      setTimeout(() => {
        setParticles((prev) =>
          prev.filter((p) => !newParticles.find((np) => np.id === p.id))
        );
      }, 800);
    };

    // Listen for mouse movement
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove); // Cleanup listener
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            x: particle.x, // Start at mouse position
            y: particle.y,
            opacity: [1, 0.8, 0.6, 0],
            scale: 0.5,
          }}
          animate={{
            x: particle.x + Math.random() * 50 - 25, // Shoot outwards
            y: particle.y + Math.random() * 50 - 25,
            opacity: [1, 0.8, 0.6, 0],
            scale: [1, 1.5, 0], // Expand and disappear
          }}
          transition={{
            duration: 0.6, // Slightly faster explosions
            ease: "easeOut",
          }}
          style={{
            position: "absolute",
            width: "8px", // Larger particle size for fireworks
            height: "8px",
            background: `radial-gradient(circle, ${particle.color}, transparent)`,
            borderRadius: "50%",
            pointerEvents: "none",
            filter: "blur(6px)", // Add a stronger glow effect
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
