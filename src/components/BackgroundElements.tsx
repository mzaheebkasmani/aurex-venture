import React from "react";
import { motion } from "motion/react";

export function BackgroundElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Blue Dot */}
      <motion.div
        className="absolute w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#7caaf7]"
        style={{ top: "15%", left: "10%" }}
        animate={{
          y: [0, -15, 0],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Small Purple Dot */}
      <motion.div
        className="absolute w-4 h-4 rounded-full bg-brand"
        style={{ bottom: "25%", left: "20%" }}
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
