import React from "react";
import { Button } from "@/components/Button";
import { motion } from "motion/react";
import { TypewriterText } from "@/components/TypewriterText";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { MagneticButton } from "@/components/MagneticButton";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-32 pb-12 overflow-hidden bg-transparent">
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block py-1.5 px-4 rounded-full border border-brand/50 text-white text-sm font-medium mb-8 bg-brand/10 backdrop-blur-sm"
            >
              Empowering Modern Businesses
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-4">
              Your Partner in <br />
              <span className="text-brand">
                <TypewriterText text="Digital Growth" delay={0.5} />
              </span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-lg text-slate-300 max-w-lg mb-10 leading-relaxed"
            >
              We help businesses grow with AI automation, modern web development, branding, and digital marketing—designed to deliver measurable results.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <MagneticButton className="w-full sm:w-auto">
                <Button size="lg" variant="white" className="w-full font-semibold relative overflow-hidden group" asChild>
                  <a href="#services">
                    <span className="relative z-10">Explore Services</span>
                    <div className="absolute inset-0 h-full w-full bg-slate-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                  </a>
                </Button>
              </MagneticButton>
              
              <MagneticButton className="w-full sm:w-auto">
                <Button size="lg" className="w-full font-semibold relative overflow-hidden group" asChild>
                  <a href="#contact">
                    <span className="relative z-10">Book a Meeting</span>
                    <div className="absolute inset-0 h-full w-full bg-brand-light transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                  </a>
                </Button>
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Right Image Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full aspect-square md:aspect-video lg:aspect-square flex items-center justify-center group"
          >
             <div className="absolute inset-0 bg-brand/20 blur-[100px] rounded-full scale-50 group-hover:scale-100 transition-transform duration-700" />
             <div className="w-full h-full border border-white/10 border-dashed rounded-2xl flex flex-col items-center justify-center text-slate-500 relative z-10 overflow-hidden bg-surface-900/30">
                <p>Hero Asset Placeholder</p>
                <div className="absolute inset-0 bg-gradient-to-tr from-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-20 w-full mt-20"
      >
        <div className="absolute inset-0 bg-brand/30 blur-[100px] -z-10 h-[150%]" />
        <div className="bg-gradient-to-r from-brand/80 via-brand to-brand/80 py-16 backdrop-blur-md border-y border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 sm:gap-8 text-center divide-y divide-black/10 sm:divide-y-0 md:divide-x">
              <div className="flex flex-col gap-2 pt-6 sm:pt-0">
                <span className="text-4xl md:text-5xl font-bold text-black tracking-tight"><AnimatedCounter value={100} suffix="+" /></span>
                <span className="text-black font-semibold text-lg">Projects Delivered</span>
              </div>
              <div className="flex flex-col gap-2 pt-6 sm:pt-0 border-t border-black/10 sm:border-0 md:border-l">
                <span className="text-4xl md:text-5xl font-bold text-black tracking-tight"><AnimatedCounter value={70} suffix="+" /></span>
                <span className="text-black font-semibold text-lg">Client Satisfaction</span>
              </div>
              <div className="flex flex-col gap-2 pt-6 sm:pt-0 border-t border-black/10 sm:border-0 md:border-l">
                <span className="text-4xl md:text-5xl font-bold text-black tracking-tight"><AnimatedCounter value={50} suffix="+" /></span>
                <span className="text-black font-semibold text-lg">Websites Launched</span>
              </div>
              <div className="flex flex-col gap-2 pt-6 sm:pt-0 border-t border-black/10 sm:border-0 md:border-l md:border-r-0">
                <span className="text-4xl md:text-5xl font-bold text-black tracking-tight">24/7</span>
                <span className="text-black font-semibold text-lg">Support Available</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
