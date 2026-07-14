import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What services does Aurex Ventures offer?",
    answer: "We offer a comprehensive suite of digital services including custom web development, AI automation, UI/UX design, branding, and data-driven digital marketing strategies tailored to your business needs."
  },
  {
    question: "How long does a project take?",
    answer: "Project timelines vary depending on the scope and complexity. A typical web development project might take 4-8 weeks, while complex AI integrations could take longer. We provide detailed timelines during the discovery phase."
  },
  {
    question: "How do we get started?",
    answer: "Simply book a free meeting using the form below or the button in the navigation. We'll discuss your goals, analyze your current setup, and propose a tailored strategy to move forward."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-surface-950 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6"
          >
            FAQ<span className="text-brand">s</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Find quick answers to the most common questions about our services, process, pricing, and project timelines.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-brand rounded-[2rem] overflow-hidden group shadow-lg hover:shadow-brand/20 transition-shadow duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                aria-expanded={openIndex === index}
              >
                <span className="text-white font-medium pr-8">{faq.question}</span>
                <div className="w-8 h-8 rounded-full border border-white/50 flex items-center justify-center text-white flex-shrink-0 group-hover:bg-white/10 transition-colors">
                  {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-8 pb-6 text-white/90 leading-relaxed border-t border-white/10 pt-4 mt-2 mx-8">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
