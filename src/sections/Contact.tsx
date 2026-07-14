import React, { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/Button";
import { MagneticButton } from "@/components/MagneticButton";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent successfully! We'll get back to you soon.");
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-surface-950 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-1/3 h-[40rem] bg-brand/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 uppercase"
          >
            CONTACT <span className="text-brand">US</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 text-lg"
          >
            Let's build something great together
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-brand/50 transition-colors group">
              <div className="w-12 h-12 bg-brand/20 rounded-full flex items-center justify-center text-brand mb-4 group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Email Us</h3>
              <a href="mailto:hello@aurex.com" className="text-slate-300 hover:text-brand transition-colors">hello@aurex.com</a>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-brand/50 transition-colors group">
              <div className="w-12 h-12 bg-brand/20 rounded-full flex items-center justify-center text-brand mb-4 group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Call Us</h3>
              <a href="tel:+1234567890" className="text-slate-300 hover:text-brand transition-colors">+1 (234) 567-890</a>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-brand/50 transition-colors group">
              <div className="w-12 h-12 bg-brand/20 rounded-full flex items-center justify-center text-brand mb-4 group-hover:scale-110 transition-transform">
                <MapPin size={24} />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Location</h3>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-brand transition-colors">
                123 Innovation Drive,<br/>Tech City, TC 90210
              </a>
            </div>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 lg:col-span-2 bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-slate-300 ml-4">Full Name</label>
                <input
                  id="name"
                  required
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-white/5 rounded-full px-6 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand border border-white/10 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-slate-300 ml-4">Email Address</label>
                <input
                  id="email"
                  required
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-white/5 rounded-full px-6 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand border border-white/10 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm text-slate-300 ml-4">Company Name</label>
                <input
                  id="company"
                  type="text"
                  placeholder="Your Company"
                  className="w-full bg-white/5 rounded-full px-6 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand border border-white/10 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="service" className="text-sm text-slate-300 ml-4">Service Needed</label>
                <select
                  id="service"
                  required
                  defaultValue=""
                  className="w-full bg-white/5 rounded-full px-6 py-4 text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand border border-white/10 transition-all appearance-none"
                >
                  <option value="" disabled>Select a service</option>
                  <option value="web">Web Development</option>
                  <option value="design">UI/UX Design</option>
                  <option value="ai">AI Automation</option>
                  <option value="marketing">Digital Marketing</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm text-slate-300 ml-4">Message</label>
              <textarea
                id="message"
                required
                placeholder="Tell us about your project..."
                rows={5}
                className="w-full bg-white/5 rounded-3xl px-6 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand border border-white/10 resize-none transition-all"
              />
            </div>

            <div className="flex justify-end pt-4">
              <MagneticButton>
                <Button size="lg" className="rounded-full relative overflow-hidden group" disabled={isSubmitting}>
                  <span className="relative z-10">{isSubmitting ? "Sending..." : "Send Message"}</span>
                  <div className="absolute inset-0 h-full w-full bg-brand-light transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                </Button>
              </MagneticButton>
            </div>
          </motion.form>

        </div>
      </div>
    </section>
  );
}
