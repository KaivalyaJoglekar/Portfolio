'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Update time
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-4 bg-black/80 backdrop-blur-xl' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-4">
          <div className="w-10 h-10 border border-[#d4a574] flex items-center justify-center group-hover:bg-[#d4a574] transition-colors">
            <span className="text-lg font-black text-[#d4a574] group-hover:text-black transition-colors">K</span>
          </div>
          <div className="hidden md:block">
            <div className="text-sm font-extrabold tracking-[0.18em] text-white uppercase">Kaivalya J</div>
            <div className="text-xs text-neutral-700 font-mono">{time} IST</div>
          </div>
        </a>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {[
            { label: 'Home', href: '#home' },
            { label: 'About', href: '#about' },
            { label: 'Work', href: '#work' },
            { label: 'Skills', href: '#skills' },
            { label: 'Publications', href: '#publications' },
            { label: 'Experience', href: '#experience' },
            { label: 'Education', href: '#education' },
          ].map((item, i) => (
            <a 
              key={i}
              href={item.href}
              className="relative px-4 py-2 text-sm text-neutral-400 hover:text-white transition-colors tracking-wider uppercase group"
            >
              <span className="text-[#d4a574] opacity-0 group-hover:opacity-100 transition-opacity mr-1">/</span>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Primary action */}
        <div className="flex items-center">
          <a
            href="#contact"
            className="group inline-flex min-h-11 items-center gap-2 bg-[#d4a574] px-3 text-xs font-bold uppercase tracking-wider text-black transition-[background-color,transform] duration-150 hover:bg-white active:scale-[0.98] sm:px-4"
          >
            <span>Contact</span>
            <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </motion.header>
  );
};
