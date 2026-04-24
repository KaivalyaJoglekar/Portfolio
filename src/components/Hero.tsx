'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section 
      id="home"
      ref={containerRef}
      className="relative min-h-[120vh] flex items-center justify-center overflow-hidden pt-28 md:pt-32"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }} />
      </div>

      {/* Giant Outline Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.span 
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="text-[35vw] font-bold tracking-tighter select-none text-stroke"
        >
          DEV
        </motion.span>
      </div>

      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12"
      >
        {/* Main Typography - Stacked & Mixed */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1 className="text-[clamp(2.6rem,12vw,9rem)] font-black leading-[0.85] tracking-[-0.04em] uppercase">
              <span className="block text-white">Practical AI</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex items-center gap-4 md:gap-8"
          >
            <h1 className="text-[clamp(2.6rem,12vw,9rem)] font-black leading-[0.85] tracking-[-0.04em] uppercase text-stroke-accent">
              Full-Stack Systems
            </h1>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="hidden md:flex w-24 h-24 border border-[#d4a574] rounded-full items-center justify-center"
            >
              <span className="text-xs tracking-[0.2em] text-[#d4a574]">2026</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1 className="text-[clamp(1.8rem,8vw,6rem)] font-signature italic text-[#d4a574] leading-[1]">
              for Real-World Use
            </h1>
          </motion.div>
        </div>

      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border border-neutral-700 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1 h-2 bg-[#d4a574] rounded-full" />
        </motion.div>
      </motion.div>

      {/* Corner Elements */}
      <div className="absolute top-28 right-8 hidden md:block">
        <div className="text-right">
          <div className="text-xs tracking-[0.3em] text-neutral-600 mb-2">PORTFOLIO</div>
          <div className="text-2xl font-signature italic text-[#d4a574]">Kaivalya</div>
        </div>
      </div>

      <div className="absolute bottom-8 left-8 hidden md:block text-xs tracking-[0.2em] text-neutral-600">
        SCROLL TO EXPLORE
      </div>
    </section>
  );
};
