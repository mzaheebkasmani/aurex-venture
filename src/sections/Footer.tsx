import React from "react";
import { Logo } from "@/components/Logo";
import { ArrowUpRight, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="bg-brand pt-20 pb-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-white/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-16">
            <div>
              <a href="#hero" className="inline-block mb-12 hover:opacity-90 transition-opacity">
                <Logo variant="white" />
              </a>
              
              <div className="flex flex-wrap gap-4 text-white">
                <motion.a whileHover={{ y: -5 }} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand transition-colors" aria-label="Facebook">
                  <Facebook size={18} />
                </motion.a>
                <motion.a whileHover={{ y: -5 }} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand transition-colors" aria-label="Instagram">
                  <Instagram size={18} />
                </motion.a>
                <motion.a whileHover={{ y: -5 }} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand transition-colors" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </motion.a>
                <motion.a whileHover={{ y: -5 }} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand transition-colors" aria-label="Twitter">
                  <Twitter size={18} />
                </motion.a>
                <motion.a whileHover={{ y: -5 }} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand transition-colors" aria-label="YouTube">
                  <Youtube size={18} />
                </motion.a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold text-2xl mb-6">Book a meeting</h3>
              <form className="flex items-center border-b border-white/30 pb-2 max-w-sm" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  required
                  placeholder="enter your email" 
                  className="bg-transparent border-none text-white placeholder:text-white/70 focus:outline-none flex-grow"
                />
                <button type="submit" className="text-white hover:text-white/80 transition-transform hover:translate-x-1 hover:-translate-y-1">
                  <ArrowUpRight size={24} />
                </button>
              </form>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-2"></div>

          {/* Right Columns */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            <div className="space-y-4">
              <h4 className="text-white font-bold mb-6">Quick links</h4>
              <ul className="space-y-4 text-white/90 text-sm">
                <li><a href="#about" className="hover:text-white hover:underline transition-all">About us</a></li>
                <li><a href="#services" className="hover:text-white hover:underline transition-all">Services</a></li>
                <li><a href="#testimonials" className="hover:text-white hover:underline transition-all">Testimonials</a></li>
                <li><a href="#team" className="hover:text-white hover:underline transition-all">Team</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <ul className="space-y-4 text-white/90 text-sm pt-11">
                <li><a href="#faq" className="hover:text-white hover:underline transition-all">FAQ</a></li>
                <li><a href="#contact" className="hover:text-white hover:underline transition-all">Contact Us</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <ul className="space-y-4 text-white/90 text-sm pt-11">
                <li><a href="#" className="hover:text-white hover:underline transition-all">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white hover:underline transition-all">Terms of Service</a></li>
              </ul>
            </div>

          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-center items-center gap-4 text-white/70 text-sm">
          <p>&copy; {new Date().getFullYear()} Aurex Ventures. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
