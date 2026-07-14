import React from "react";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";

const whyFeatures = [
  {
    title: "Innovative Solutions",
    description: "We create modern, scalable digital solutions tailored to your business goals"
  },
  {
    title: "Expert Team",
    description: "Our experienced designers, developers, and strategists deliver high-quality results"
  },
  {
    title: "Client-First Approach",
    description: "We prioritize clear communication, transparency, and long-term partnerships"
  },
  {
    title: "Reliable Support",
    description: "From planning to post-launch, we provide continuous support for lasting success"
  }
];

const processes = [
  {
    num: "01",
    title: "Discovery",
    description: "We understand your business, goals, and project requirements."
  },
  {
    num: "02",
    title: "Strategy",
    description: "We create a clear roadmap and define the best solution."
  },
  {
    num: "03",
    title: "Design",
    description: "We craft intuitive, modern, and user-focused designs."
  },
  {
    num: "04",
    title: "Help & support",
    description: "We launch your project and provide ongoing maintenance and support."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-surface-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        
        {/* Why Choose Us */}
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-brand rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden mb-24 group"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight uppercase relative z-10">
              WHY CHOOSE US
            </h2>
            <p className="text-white/90 max-w-3xl mx-auto text-lg relative z-10">
              We combine creativity, strategy, and cutting-edge technology to build digital solutions that help businesses grow, scale, and stand out in today's competitive market.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-36 px-4 md:px-8 relative z-10">
            {whyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-surface-950 p-8 rounded-2xl border border-brand/20 shadow-xl hover:border-brand/60 hover:-translate-y-2 transition-all duration-300 group"
              >
                <CheckCircle2 className="text-brand mb-4 group-hover:scale-110 transition-transform" size={24} />
                <h3 className="text-brand-light font-medium mb-4 text-lg">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Book Meeting Banner */}
        <div>
          <motion.a 
            href="#contact"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-brand rounded-full p-2 pl-8 flex items-center justify-between cursor-pointer group shadow-2xl shadow-brand/20 block"
          >
             <span className="text-white font-bold text-xl md:text-2xl">Book your free meeting</span>
             <span className="bg-white text-slate-900 rounded-full px-8 py-4 font-bold text-sm flex items-center gap-2 group-hover:bg-slate-100 transition-colors uppercase tracking-wide">
               STARTS NOW <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
             </span>
          </motion.a>
        </div>

      </div>
    </section>
  );
}
