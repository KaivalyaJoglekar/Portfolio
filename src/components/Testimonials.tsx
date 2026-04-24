'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    quote: "DELIVERED BEYOND EXPECTATIONS. THE ATTENTION TO DETAIL AND CREATIVE PROBLEM-SOLVING MADE OUR PROJECT STAND OUT.",
    author: "SARAH CHEN",
    role: "CEO",
    company: "TECHFLOW",
    index: '01',
  },
  {
    quote: "A GAME-CHANGER FOR OUR STARTUP. THE WEBSITE HELPED US SECURE OUR SERIES A FUNDING.",
    author: "MARCUS RODRIGUEZ",
    role: "FOUNDER",
    company: "NEXUS LABS",
    index: '02',
  },
  {
    quote: "EXCEPTIONAL TECHNICAL SKILLS COMBINED WITH A KEEN EYE FOR DESIGN. CONVERSION RATE INCREASED BY 40%.",
    author: "EMILY WATSON",
    role: "MARKETING DIRECTOR",
    company: "STYLEHUB",
    index: '03',
  },
  {
    quote: "THE 3D EXPERIENCES CREATED FOR OUR PRODUCT LAUNCH WERE UNLIKE ANYTHING WE'D SEEN. TRULY INNOVATIVE.",
    author: "DAVID PARK",
    role: "PRODUCT LEAD",
    company: "INNOVATE CO",
    index: '04',
  },
];

export const Testimonials = () => {
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 px-6 md:px-12 relative overflow-hidden" ref={containerRef}>
      {/* Giant Background Number */}
      <motion.div 
        className="absolute top-1/2 right-0 -translate-y-1/2 pointer-events-none"
        style={{ x: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
      >
        <AnimatePresence mode="wait">
          <motion.span 
            key={active}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 0.05, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="text-[40vw] font-black leading-none text-white"
          >
            {testimonials[active].index}
          </motion.span>
        </AnimatePresence>
      </motion.div>
      
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-xs text-neutral-500 tracking-[0.3em] uppercase block mb-4">/05</span>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase">
            Testimonials
          </h2>
        </motion.div>

        {/* Testimonial Display */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Quote */}
          <div className="md:col-span-8 relative min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {/* Quote Mark */}
                <span className="text-8xl md:text-9xl font-black text-stroke leading-none absolute -top-8 -left-4 opacity-50">
                  &quot;
                </span>
                
                <p className="text-2xl md:text-4xl font-bold leading-tight pt-12">
                  {testimonials[active].quote}
                </p>
                
                {/* Author */}
                <div className="mt-12 flex items-center gap-6">
                  <div className="w-16 h-px bg-[#d4a574]" />
                  <div>
                    <p className="text-xl font-black text-[#d4a574]">
                      {testimonials[active].author}
                    </p>
                    <p className="text-neutral-600 text-sm mt-1 tracking-wider">
                      {testimonials[active].role} @ {testimonials[active].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation */}
          <div className="md:col-span-4 flex flex-row md:flex-col gap-4 justify-start md:justify-center md:items-end">
            {testimonials.map((t, i) => (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                className={`group flex items-center gap-3 transition-all ${
                  active === i ? 'opacity-100' : 'opacity-30 hover:opacity-60'
                }`}
                whileHover={{ x: -5 }}
              >
                <span className={`text-xs tracking-wider transition-colors ${
                  active === i ? 'text-[#d4a574]' : 'text-neutral-600'
                }`}>
                  {t.index}
                </span>
                <div className={`w-8 h-px transition-all ${
                  active === i ? 'bg-[#d4a574] w-12' : 'bg-neutral-800'
                }`} />
                <span className="text-xs tracking-wider hidden md:block">
                  {t.company}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-16 h-px bg-neutral-900 overflow-hidden">
          <motion.div
            key={active}
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            transition={{ duration: 5, ease: 'linear' }}
            className="h-full bg-[#d4a574]"
          />
        </div>
      </div>
    </section>
  );
};
