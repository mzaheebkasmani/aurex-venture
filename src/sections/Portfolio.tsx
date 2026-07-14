import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

// Placeholder data for portfolio companies
const portfolioItems = [
  { id: 1, category: "Fintech", name: "Project Alpha" },
  { id: 2, category: "AI / ML", name: "Project Beta" },
  { id: 3, category: "SaaS", name: "Project Gamma" },
  { id: 4, category: "Web3", name: "Project Delta" },
  { id: 5, category: "Healthtech", name: "Project Epsilon" },
  { id: 6, category: "E-commerce", name: "Project Zeta" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-surface-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold text-brand tracking-wide uppercase mb-3">Our Portfolio</h2>
            <p className="text-3xl md:text-4xl font-bold text-white">
              Companies defining the future
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-brand font-medium hover:text-brand-light transition-colors">
            View all companies <ArrowUpRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className="w-full aspect-[4/3] rounded-2xl bg-surface-900 mb-6 overflow-hidden relative border border-white/10 border-dashed flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(155,81,224,0.2)]">
                 <div className="absolute inset-0 bg-gradient-to-t from-surface-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                 
                 <div className="text-slate-500 flex flex-col items-center gap-2">
                    <svg className="w-8 h-8 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm font-medium">Asset Missing</span>
                 </div>
              </div>
              
              <div>
                <p className="text-sm font-medium text-brand mb-2">{item.category}</p>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-light transition-colors">{item.name}</h3>
                  <div className="w-8 h-8 rounded-full bg-surface-900 border border-white/10 flex items-center justify-center text-slate-400 group-hover:bg-brand group-hover:text-white group-hover:border-brand transition-all">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <button className="mt-12 w-full md:hidden flex items-center justify-center gap-2 text-brand font-medium hover:text-brand-dark transition-colors py-4 rounded-xl bg-brand/5 border border-brand/10">
          View all companies <ArrowUpRight size={20} />
        </button>
      </div>
    </section>
  );
}
