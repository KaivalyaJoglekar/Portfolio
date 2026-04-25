'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';

const technologies = [
  { name: 'Frontend', category: 'Building responsive interfaces and data-driven user experiences.', level: 100 },
  { name: 'Backend', category: 'Designing APIs, service layers, and scalable data workflows.', level: 100 },
  { name: 'AI/ML', category: 'Developing applied ML pipelines and LLM-powered workflows.', level: 100 },
  { name: 'Cloud & Tools', category: 'Deploying and maintaining systems with modern engineering tooling.', level: 100 },
];

const TechItem = ({ tech, index }: { tech: typeof technologies[0], index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.05, ease: [0.25, 0.1, 0, 1] }}
      className="group relative"
    >
      <div className="flex items-center justify-between py-6 border-b border-neutral-900 hover:border-[#d4a574] transition-colors cursor-pointer">
        {/* Left side */}
        <div className="flex items-center gap-6">
          <motion.span 
            className="text-5xl md:text-7xl font-black text-stroke opacity-30 group-hover:opacity-100 transition-opacity"
            whileHover={{ scale: 1.1 }}
          >
            {String(index + 1).padStart(2, '0')}
          </motion.span>
          <div>
            <motion.h3 
              className="text-2xl md:text-4xl font-black tracking-tight group-hover:text-[#d4a574] transition-colors"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.2 }}
            >
              {tech.name}
            </motion.h3>
            <span className="text-xs text-neutral-600 tracking-wider uppercase">{tech.category}</span>
          </div>
        </div>
        
        {/* Right side - Progress */}
        <div className="flex items-center gap-6">
          <div className="hidden md:block w-48 h-1 bg-neutral-900 overflow-hidden">
            <motion.div
              className="h-full bg-[#d4a574]"
              initial={{ width: 0 }}
              animate={isInView ? { width: `${tech.level}%` } : {}}
              transition={{ duration: 1.2, delay: index * 0.05 + 0.3, ease: [0.25, 0.1, 0, 1] }}
            />
          </div>
          <span className="text-2xl md:text-3xl font-black text-neutral-700 group-hover:text-[#d4a574] transition-colors">
            CORE
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export const TechStack = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);
  const textX = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);

  return (
    <section id="skills" className="scroll-mt-28 py-32 px-6 md:px-12 relative overflow-hidden" ref={containerRef}>
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        {/* Floating Circles */}
        <motion.div 
          className="absolute top-20 right-20 w-96 h-96 border border-neutral-900 rounded-full"
          style={{ scale: backgroundScale }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-40 left-10 w-64 h-64 border border-neutral-900 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Scrolling Background Text */}
      <motion.div 
        className="absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap pointer-events-none overflow-hidden"
        style={{ x: textX }}
      >
        <span className="text-[20vw] font-black text-stroke opacity-5 tracking-tighter">
          TECHNOLOGIES • STACK • SKILLS •
        </span>
      </motion.div>
      
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header with Scroll Animation */}
        <motion.div 
          ref={headerRef}
          className="mb-20"
          initial={{ opacity: 0, y: 100 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.1, 0, 1] }}
        >
          <motion.span 
            className="text-xs text-neutral-500 tracking-[0.3em] uppercase block mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            /04
          </motion.span>
          <div className="overflow-hidden">
            <motion.h2 
              className="text-6xl md:text-8xl font-black tracking-tighter uppercase"
              initial={{ y: 100 }}
              animate={isHeaderInView ? { y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0, 1] }}
            >
              Technical Capabilities
            </motion.h2>
          </div>
          <motion.p 
            className="text-neutral-600 mt-4 max-w-md"
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Production-minded skills across full-stack engineering, AI/ML workflows, and cloud-native development.
          </motion.p>
        </motion.div>

        {/* Tech List */}
        <div className="space-y-0">
          {technologies.map((tech, i) => (
            <TechItem key={tech.name} tech={tech} index={i} />
          ))}
        </div>

        <motion.div
          className="mt-16 pt-10 border-t border-neutral-900"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-neutral-500 max-w-3xl leading-relaxed">
            I pick technologies based on product constraints, scalability goals, and delivery speed.
            If you are exploring a build, I can share a practical architecture approach.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
