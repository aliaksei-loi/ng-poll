"use client";

import { motion } from "motion/react";
import React, { useEffect, useState } from "react";

interface Star {
  id: number;
  left: string;
  delay: number;
  duration: number;
  size: number;
}

export const FallingStars = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const starCount = 30;
    const newStars = Array.from({ length: starCount }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 7,
      size: Math.random() * 4 + 1,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          initial={{ y: -20, opacity: 0, scale: 0 }}
          animate={{
            y: "110vh",
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            left: star.left,
            width: star.size,
            height: star.size,
            backgroundColor: "#ffd700",
            borderRadius: "50%",
            filter: "blur(1px)",
            boxShadow: "0 0 10px #ffd700, 0 0 20px #ffd700",
          }}
        />
      ))}
    </div>
  );
};
