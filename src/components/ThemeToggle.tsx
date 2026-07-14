import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check if dark mode is preferred or previously saved
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      setIsDark(false);
      document.documentElement.classList.add("light");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[100]">
      <motion.button
        onClick={toggleTheme}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        className="bg-surface-900 border border-white/10 border-r-0 rounded-l-2xl p-3 shadow-[0_0_15px_rgba(0,0,0,0.5)] flex items-center justify-center text-slate-400 hover:text-brand hover:border-brand/50 hover:shadow-[-4px_0_20px_rgba(155,81,224,0.4)] transition-all duration-300 relative overflow-hidden group"
        aria-label="Toggle theme"
      >
        <div className="absolute inset-0 bg-brand/20 opacity-0 group-hover:opacity-100 transition-opacity blur-md"></div>
        <AnimatePresence mode="wait">
          <motion.div
            key={isDark ? "dark" : "light"}
            initial={{ y: -20, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 20, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
            className="relative z-10"
          >
            {isDark ? <Sun size={24} /> : <Moon size={24} />}
          </motion.div>
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
