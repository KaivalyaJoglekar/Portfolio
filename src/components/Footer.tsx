'use client';

import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-neutral-900 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 border border-[#d4a574] flex items-center justify-center">
              <span className="text-xl font-black text-[#d4a574]">K</span>
            </div>
            <div>
              <p className="text-sm text-neutral-500">© {new Date().getFullYear()} Kaivalya</p>
              <p className="text-xs text-neutral-700">All rights reserved</p>
            </div>
          </div>

          {/* Center - Marquee-style text */}
          <div className="hidden md:block text-center">
            <p className="text-xs tracking-[0.3em] text-neutral-600 uppercase">
              Crafted with precision & passion
            </p>
          </div>
          
          {/* Back to Top */}
          <motion.a 
            href="#"
            className="group flex items-center gap-3 text-sm text-neutral-500 hover:text-[#d4a574] transition-colors"
            whileHover={{ y: -3 }}
          >
            <span className="tracking-wider uppercase">Back to Top</span>
            <span className="w-10 h-10 border border-neutral-800 flex items-center justify-center group-hover:border-[#d4a574] group-hover:bg-[#d4a574] group-hover:text-black transition-all">
              ↑
            </span>
          </motion.a>
        </div>
      </div>
    </footer>
  );
};
