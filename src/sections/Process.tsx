import React from "react";
import { motion } from "motion/react";
import { Lightbulb, Code2, Rocket } from "lucide-react";

const processSteps = [
  {
    icon: Lightbulb,
    title: "Discovery & Strategy",
    description: "We dive deep into your business goals, target audience, and market landscape to build a roadmap for success.",
  },
  {
    icon: Code2,
    title: "Design & Development",
    description: "Our experts craft beautiful, user-centric designs and build robust, scalable solutions using cutting-edge tech.",
  },
  {
    icon: Rocket,
    title: "Launch & Scale",
    description: "We ensure a smooth deployment, monitor performance, and iterate to scale your product in the market.",
  },
];

export function Process() {
  return (
    <section className="py-24 bg-surface-950 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white uppercase leading-tight mb-6"
          >
            OUR <span className="text-brand">PROCESS</span>
          </motion.h2>
          
          <p className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 text-balance mx-auto">
            How we turn ideas into reality
          </p>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            A proven methodology that ensures quality, transparency, and timely delivery at every stage of the project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-brand/20 via-brand/50 to-brand/20" />
          
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-surface-900 border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:border-brand/50 group-hover:shadow-[0_0_30px_rgba(var(--brand-rgb),0.2)] transition-all duration-300">
                <step.icon size={32} className="text-brand" />
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand text-white text-sm font-bold flex items-center justify-center border-4 border-surface-950">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
