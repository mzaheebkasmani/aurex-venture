import React, { useState, useEffect } from "react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { MagneticButton } from "@/components/MagneticButton";

const links = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Active section highlight logic
      const sections = links.map(l => l.href.substring(1)).filter(id => id);
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
            current = section;
          }
        }
      }
      if (current) {
        setActiveSection(current);
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-surface-950/90 shadow-md py-4 border-b border-white/10" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#hero" className="flex-shrink-0 z-50" onClick={() => setIsMobileMenuOpen(false)}>
          <Logo variant="white" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-12">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[15px] font-medium transition-colors relative py-2 ${
                activeSection === link.href.substring(1) 
                  ? "text-brand" 
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center gap-2 lg:gap-6">
          <MagneticButton>
            <Button variant="default" size="default" asChild>
              <a href="#contact">Book a Meeting</a>
            </Button>
          </MagneticButton>
        </div>

        {/* Mobile Toggle Group */}
        <div className="md:hidden flex items-center gap-4 z-50">
          {/* Mobile Menu Toggle */}
          <button
            className="p-2 rounded-full backdrop-blur-md transition-colors bg-white/5 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 left-0 w-full h-screen backdrop-blur-xl pt-24 px-6 flex flex-col gap-6 md:hidden z-40 border-b bg-surface-950/95 border-white/10"
            >
              <div className="flex flex-col gap-6 mt-8">
                {links.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`text-3xl font-semibold transition-colors ${
                      activeSection === link.href.substring(1) 
                        ? "text-brand" 
                        : "text-white"
                    }`}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-8 mt-auto mb-12 border-t border-white/10"
              >
                <Button className="w-full" size="lg" asChild>
                  <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Book a Meeting</a>
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
