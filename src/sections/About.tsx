import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";

export function About() {
  return (
    <section id="about" className="py-24 bg-surface-950 border-t border-slate-900/50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/4"
          >
            <h2 className="text-xl font-bold text-white tracking-wide uppercase flex items-center gap-4">
              ABOUT US
              <span className="h-px bg-brand/50 flex-grow" />
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-3/4"
          >
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium">
              At <span className="text-brand">Aurex Ventures</span>, we help businesses transform ideas into powerful digital experiences. From AI automation and custom web development to branding, UI/UX design, and digital marketing, we create innovative solutions that help businesses grow, scale, and succeed in a rapidly evolving digital world.
            </p>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                Company core <span className="text-brand">mission</span>
                <ArrowUpRight size={20} className="text-brand opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all" />
              </h3>
              <p className="text-slate-400 leading-relaxed text-base group-hover:text-slate-300 transition-colors">
                Our mission is to help businesses grow through innovative technology, AI-powered automation, modern web development, and impactful digital strategies. We are committed to delivering solutions that create measurable results, lasting value, and sustainable success.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group"
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                Company <span className="text-brand">vision & goal</span>
                <ArrowUpRight size={20} className="text-brand opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all" />
              </h3>
              <p className="text-slate-400 leading-relaxed text-base group-hover:text-slate-300 transition-colors">
                Our vision is to become a trusted global technology partner, helping businesses embrace innovation with confidence. We aim to build scalable digital solutions, foster long-term partnerships, and empower brands to achieve sustainable growth in the digital era.
              </p>
            </motion.div>

          </div>

          {/* Right Image Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-surface-900 border border-white/10 border-dashed relative flex items-center justify-center group cursor-pointer"
          >
             <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="text-slate-500 flex flex-col items-center relative z-10 group-hover:scale-110 transition-transform duration-700">
                <p>Image Placeholder</p>
             </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
