'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useState, useRef } from 'react';

const services = [
  {
    num: '01',
    title: 'Classification of Celestial Bodies using Support Vector Machines',
    shortTitle: 'PUB',
    description: 'Peer-reviewed research on classifying galaxies, stars, and quasars from SDSS FITS imagery through a complete machine learning pipeline.',
    features: ['ICICC 2026 · Springer', 'Authors: Kanish Jain, Kaivalya Joglekar, Joel Jacob, Supriya Agrawal', 'Pipeline: preprocessing, segmentation, feature extraction, selection, training, evaluation', 'CTA: Read Research'],
  },
  {
    num: '02',
    title: 'B.Tech in Computer Engineering',
    shortTitle: 'EDU',
    description: 'NMIMS MPSTME, Mumbai, India · 2023 — Currently Pursuing.',
    features: ['Current Focus: software engineering, AI/ML, backend systems', 'Status: Currently Pursuing', 'Academic Track: Computer Engineering', 'Location: Mumbai, India'],
  },
  {
    num: '03',
    title: 'Higher Secondary Education — 12th',
    shortTitle: 'EDU',
    description: 'R.N. Podar School, Mumbai, India · Completed.',
    features: ['Strong foundation in analytical and quantitative problem solving', 'Built early interest in technical problem-solving', 'Academic progression toward engineering track', 'Location: Mumbai, India'],
  },
  {
    num: '04',
    title: 'Secondary Education — 10th',
    shortTitle: 'EDU',
    description: 'R.N. Podar School, Mumbai, India · Completed.',
    features: ['Core academic foundation in science and mathematics', 'Consistent progression into higher technical studies', 'Early orientation toward engineering and technology', 'Location: Mumbai, India'],
  },
];

const ServiceItem = ({ service, index, isActive, onHover }: { 
  service: typeof services[0], 
  index: number, 
  isActive: boolean,
  onHover: (i: number | null) => void 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.1, 0, 1] }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      className="group border-t border-neutral-900 cursor-pointer relative overflow-hidden"
    >
      {/* Hover accent line */}
      <motion.div 
        className="absolute left-0 top-0 bottom-0 w-1 bg-[#d4a574]"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isActive ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0, 1] }}
        style={{ originY: 0 }}
      />
      
      <div className="py-10 md:py-14 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-8 md:gap-16">
          <motion.span 
            className="text-neutral-700 font-mono text-sm"
            animate={{ color: isActive ? '#d4a574' : '#404040' }}
          >
            {service.num}
          </motion.span>
          <div className="flex items-center gap-6">
            <motion.span 
              className="text-5xl md:text-7xl font-black text-[#d4a574] hidden md:block"
              animate={{ 
                opacity: isActive ? 0.6 : 0.15,
                x: isActive ? 10 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              {service.shortTitle}
            </motion.span>
            <div className="overflow-hidden">
              <motion.h3 
                className="text-2xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight transition-colors"
                animate={{ 
                  color: isActive ? '#d4a574' : '#ffffff',
                  x: isActive ? 20 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {service.title}
              </motion.h3>
            </div>
          </div>
        </div>
        
        <motion.div 
          animate={{ 
            rotate: isActive ? 135 : 0,
            scale: isActive ? 1.2 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="text-3xl text-neutral-700 group-hover:text-[#d4a574] transition-colors"
        >
          +
        </motion.div>
      </div>
      
      {/* Expanded Content with Stagger */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isActive ? 'auto' : 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0, 1] }}
        className="overflow-hidden relative z-10"
      >
        <div className="pb-10 md:pb-14 ml-16 md:ml-40">
          <motion.p 
            className="text-neutral-400 max-w-xl mb-8 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {service.description}
          </motion.p>
          <div className="flex flex-wrap gap-3">
            {service.features.map((feature, j) => (
              <motion.span 
                key={j} 
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ 
                  opacity: isActive ? 1 : 0, 
                  y: isActive ? 0 : 10,
                  scale: isActive ? 1 : 0.9,
                }}
                transition={{ duration: 0.3, delay: 0.15 + j * 0.05 }}
                className="px-5 py-3 text-xs border border-neutral-800 text-[#d4a574] uppercase tracking-wider hover:bg-[#d4a574] hover:text-black transition-colors"
              >
                {feature}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Services = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.15, 0.15, 0]);

  return (
    <section id="publications" ref={sectionRef} className="py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Animated Background Number */}
      <motion.div 
        className="absolute top-20 right-0 text-[50vw] font-black text-stroke leading-none pointer-events-none"
        style={{ y: backgroundY, opacity: backgroundOpacity }}
      >
        <motion.span
          key={activeIndex}
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          {String(activeIndex !== null ? activeIndex + 1 : 0).padStart(2, '0')}
        </motion.span>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with Reveal */}
        <div ref={headerRef} className="mb-20">
          <motion.span 
            className="text-xs text-neutral-500 tracking-[0.3em] uppercase block mb-4"
            initial={{ opacity: 0, x: -30 }}
            animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            /03
          </motion.span>
          <div className="overflow-hidden">
            <motion.h2 
              className="text-6xl md:text-8xl font-black uppercase tracking-tight"
              initial={{ y: 100 }}
              animate={isHeaderInView ? { y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
            >
              Publications & Education
            </motion.h2>
          </div>
          <motion.p
            className="text-neutral-600 mt-4 max-w-md"
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Research contribution and academic background.
          </motion.p>
        </div>

        {/* Services Accordion */}
        <div className="space-y-0">
          {services.map((service, i) => (
            <ServiceItem
              key={i}
              service={service}
              index={i}
              isActive={activeIndex === i}
              onHover={setActiveIndex}
            />
          ))}
          <motion.div 
            className="border-t border-neutral-900"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ transformOrigin: 'left' }}
          />
        </div>
        <div id="education" />
      </div>
    </section>
  );
};
