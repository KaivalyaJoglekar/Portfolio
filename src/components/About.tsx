'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const facts = [
  { label: 'PROJECTS', value: ['5+'], icon: '◆', valueClassName: 'text-[1.8rem] md:text-[2.1rem]' },
  { label: 'PUBLICATION', value: ['1'], icon: '◆', valueClassName: 'text-[1.8rem] md:text-[2.1rem]' },
  { label: 'LOCATION', value: ['Mumbai'], icon: '◆', valueClassName: 'text-[1.55rem] md:text-[1.8rem]' },
  { label: 'FOCUS', value: ['AI/ML', 'Full Stack'], icon: '◆', valueClassName: 'text-[1.35rem] md:text-[1.6rem]' },
];

export const About = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section id="about" ref={containerRef} className="scroll-mt-28 py-32 px-6 md:px-12 relative overflow-hidden min-h-screen">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#d4a574 1px, transparent 1px), linear-gradient(90deg, #d4a574 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }} />
      </div>
      
      {/* Giant Scrolling Text */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute -left-20 top-1/2 -translate-y-1/2 pointer-events-none"
      >
        <span className="text-[30vw] font-black text-stroke opacity-20 -rotate-90 whitespace-nowrap block">
          ABOUT
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-xs text-neutral-500 tracking-[0.3em] uppercase block mb-4">/01</span>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight">
            About Me
          </h2>
        </motion.div>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left - Profile Image */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative group mx-auto w-full max-w-[340px] md:max-w-[380px]">
              <div className="absolute -inset-2 rounded-2xl border border-neutral-800 pointer-events-none" />
              <div className="relative overflow-hidden rounded-2xl border border-neutral-900 bg-neutral-950 aspect-[3/4]">
                <Image
                  src="/kaivalya.jpeg"
                  alt="Kaivalya Joglekar"
                  width={900}
                  height={1200}
                  priority
                  sizes="(max-width: 768px) 78vw, (max-width: 1200px) 42vw, 26vw"
                  className="w-full h-full object-cover object-[50%_20%] transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute left-6 bottom-6">
                  <p className="text-sm tracking-[0.2em] uppercase text-neutral-300">Kaivalya Joglekar</p>
                  <p className="text-xs text-neutral-500 mt-1">Computer Engineering • NMIMS MPSTME</p>
                </div>
              </div>
            </div>
            
            {/* Location Tag */}
            <motion.div 
              className="mt-12 flex items-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-3 h-3 bg-[#d4a574] rounded-full animate-pulse" />
              <span className="text-neutral-500 text-sm tracking-wider">MUMBAI, INDIA • OPEN TO TECHNICAL OPPORTUNITIES</span>
            </motion.div>
          </motion.div>

          {/* Right - Bio & Stats */}
          <motion.div 
            className="lg:col-span-7 lg:pl-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {/* Bio Text */}
            <div className="border-l-2 border-[#d4a574] pl-8 mb-16">
              <p className="text-2xl md:text-3xl font-light text-neutral-300 leading-relaxed">
                I am currently pursuing a <span className="text-white font-bold">B.Tech in Computer Engineering</span> at NMIMS MPSTME,
                with a strong focus on <span className="text-[#d4a574]">full-stack development, AI/ML, backend systems</span>, and applied research.
              </p>
              <p className="text-lg text-neutral-500 mt-6 leading-relaxed">
                I build practical products that solve real problems, from resume analysis and autonomous logistics AI agents
                to productivity applications and microservice-based systems.
              </p>
              <p className="text-lg text-neutral-500 mt-6 leading-relaxed">
                My work combines clean implementation with research-backed thinking, including machine learning projects
                such as celestial body classification using Support Vector Machines.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl">
              {facts.map((fact, i) => (
                <motion.div
                  key={fact.label}
                  className="group relative min-h-[124px] min-w-0 border border-neutral-900 px-4 py-4 md:px-5 md:py-5 hover:border-[#d4a574] transition-all duration-300 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Hover Background */}
                  <div className="absolute inset-0 bg-[#d4a574] translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
                  
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <span className="text-[#d4a574] group-hover:text-black text-[10px] mb-2 block transition-colors">{fact.icon}</span>
                    <div className={`font-black text-white group-hover:text-black transition-colors leading-[0.95] tracking-tight ${fact.valueClassName}`}>
                      {fact.value.map((line) => (
                        <span key={line} className="block whitespace-nowrap">
                          {line}
                        </span>
                      ))}
                    </div>
                    <span className="text-[10px] text-neutral-600 group-hover:text-black/60 mt-2 block tracking-[0.22em] transition-colors">
                      {fact.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div 
              className="mt-12 flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <a 
                href="#contact"
                className="group inline-flex items-center gap-4 px-8 py-4 bg-[#d4a574] text-black font-bold tracking-wider text-sm hover:bg-white transition-colors"
              >
                <span>CONTACT ME</span>
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </a>
              <a 
                href="#work"
                className="inline-flex items-center gap-4 px-8 py-4 border border-neutral-800 text-neutral-400 tracking-wider text-sm hover:border-white hover:text-white transition-colors"
              >
                <span>RESUME</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
