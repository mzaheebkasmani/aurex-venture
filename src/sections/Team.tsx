import React from "react";
import { motion } from "motion/react";
import { Linkedin } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";

const team = [
  {
    name: "AHMED ALI",
    role: "Founder and CEO",
  },
  {
    name: "Ali khan",
    role: "Graphic & UI/UX designer",
  },
  {
    name: "Waleed khan",
    role: "AI Automation Engineer",
  },
  {
    name: "Mubashir",
    role: "Full Stack Developer",
  }
];

export function Team() {
  return (
    <section id="team" className="py-24 bg-surface-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight"
            >
              THE PEOPLES <br />
              <span className="text-brand">Behind Aurex</span>
            </motion.h2>
          </div>
          <MagneticButton>
            <button className="text-white font-medium flex items-center gap-2 hover:text-brand transition-colors text-sm group">
              View full portfolio <span aria-hidden="true" className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
            </button>
          </MagneticButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col group cursor-pointer"
            >
              <div className="w-full aspect-[3/4] bg-slate-900 border border-slate-800 rounded-t-lg relative overflow-hidden flex items-center justify-center mb-0">
                 {/* Radial gradient background like in the screenshot */}
                 <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand/20 via-surface-950 to-surface-950 opacity-80 group-hover:scale-110 transition-transform duration-700" />
                 
                 {/* Placeholder for real image with lazy loading */}
                 <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-white" />
                 
                 <p className="text-slate-600 relative z-10 text-sm group-hover:text-brand transition-colors">Photo Asset</p>
              </div>
              <div className="bg-brand p-4 rounded-b-lg flex items-center justify-between relative overflow-hidden">
                 <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
                 <div className="relative z-10">
                   <h3 className="text-white font-bold text-lg leading-tight uppercase">{member.name}</h3>
                   <p className="text-white/80 text-xs mt-1">{member.role}</p>
                 </div>
                 <a 
                   href="#" 
                   className="relative z-10 w-8 h-8 flex items-center justify-center bg-[#0077b5] text-white rounded-sm hover:opacity-90 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-[#0077b5]/20" 
                   aria-label={`LinkedIn profile for ${member.name}`}
                 >
                   <Linkedin size={16} fill="currentColor" />
                 </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
