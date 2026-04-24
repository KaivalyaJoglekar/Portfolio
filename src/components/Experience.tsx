'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

const experiences = [
  {
    id: '01',
    period: '2024 — PRESENT',
    role: 'Senior Executive — Technical and Research Cell',
    company: 'NMIMS University',
    location: 'Mumbai, India',
    description: 'Contributing to technical and research-oriented college initiatives through planning, coordination, and execution.',
    achievements: [
      'Planned and coordinated technical and research-focused initiatives.',
      'Supported end-to-end execution across initiative workflows and activities.',
      'Collaborated with peers to align planning and implementation.',
      'Maintained structured coordination across responsibilities.',
    ],
    tech: ['Planning', 'Coordination', 'Research Initiatives', 'Execution'],
  },
  {
    id: '02',
    period: '2024 — PRESENT',
    role: 'Artist & Guest Management — Taqneeq Tech Fest',
    company: 'NMIMS University',
    location: 'Mumbai, India',
    description: 'Handled coordination and execution responsibilities as part of the Artist and Guest Management team.',
    achievements: [
      'Coordinated artist and guest management processes for event operations.',
      'Supported on-ground execution to ensure smooth event flow.',
      'Worked with teams to manage schedules and communication points.',
      'Contributed to organized and timely execution during the fest.',
    ],
    tech: ['Coordination', 'Operations', 'Execution', 'Team Collaboration'],
  },
  {
    id: '03',
    period: '2025 — PRESENT',
    role: 'Hackathons',
    company: 'Various',
    location: 'India',
    description: 'Built functional prototypes under time constraints while collaborating with teammates.',
    achievements: [
      'Collaborated in teams to deliver working prototypes within short development cycles.',
      'Focused on practical implementation and scope prioritization.',
      'Converted ideas into functional demos under tight timelines.',
      'Strengthened rapid problem-solving and communication in high-pressure sprints.',
    ],
    tech: ['Rapid Prototyping', 'Teamwork', 'Problem Solving', 'Execution'],
  },
];

export const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeExp, setActiveExp] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="experience" className="py-32 px-6 md:px-12 relative" ref={containerRef}>
      {/* Giant Background Number */}
      <motion.div 
        className="absolute top-1/2 -translate-y-1/2 right-0 pointer-events-none overflow-hidden"
        style={{ x: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
      >
        <AnimatePresence mode="wait">
          <motion.span 
            key={activeExp}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 0.03, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="text-[50vw] font-black leading-none text-white"
          >
            {experiences[activeExp].id}
          </motion.span>
        </AnimatePresence>
      </motion.div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-xs text-neutral-500 tracking-[0.3em] uppercase block mb-4">/07</span>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase">
            Experience
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left - Timeline Navigation */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32 space-y-1">
              {experiences.map((exp, i) => (
                <motion.button
                  key={exp.id}
                  onClick={() => setActiveExp(i)}
                  className={`w-full text-left p-6 border-l-2 transition-all duration-300 ${
                    activeExp === i 
                      ? 'border-[#d4a574]' 
                      : 'border-neutral-900 hover:border-neutral-700'
                  }`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className={`text-xs tracking-wider block mb-2 ${
                    activeExp === i ? 'text-[#d4a574]' : 'text-neutral-600'
                  }`}>
                    {exp.period}
                  </span>
                  <h3 className={`text-xl font-bold tracking-tight transition-colors ${
                    activeExp === i ? 'text-white' : 'text-neutral-500'
                  }`}>
                    {exp.role}
                  </h3>
                  <p className={`text-sm mt-1 transition-colors ${
                    activeExp === i ? 'text-neutral-400' : 'text-neutral-700'
                  }`}>
                    {exp.company}
                  </p>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right - Experience Details */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExp}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                className="border border-neutral-900 p-8 md:p-12"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8 pb-8 border-b border-neutral-900">
                  <div>
                    <span className="text-[#d4a574] text-sm tracking-wider">{experiences[activeExp].period}</span>
                    <h3 className="text-3xl md:text-4xl font-black mt-2">{experiences[activeExp].role}</h3>
                    <p className="text-neutral-500 mt-1">{experiences[activeExp].company} • {experiences[activeExp].location}</p>
                  </div>
                  <span className="text-6xl font-black text-stroke">{experiences[activeExp].id}</span>
                </div>

                {/* Description */}
                <p className="text-lg text-neutral-400 leading-relaxed mb-8">
                  {experiences[activeExp].description}
                </p>

                {/* Achievements */}
                <div className="mb-8">
                  <h4 className="text-xs text-[#d4a574] tracking-[0.3em] uppercase mb-4">KEY CONTRIBUTIONS</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {experiences[activeExp].achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3 group"
                      >
                        <span className="text-[#d4a574] mt-1">◆</span>
                        <span className="text-neutral-300 group-hover:text-white transition-colors">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-xs text-neutral-600 tracking-[0.3em] uppercase mb-4">FOCUS AREAS</h4>
                  <div className="flex flex-wrap gap-2">
                    {experiences[activeExp].tech.map((t, i) => (
                      <motion.span
                        key={t}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="px-4 py-2 bg-neutral-900 text-neutral-400 text-sm tracking-wider hover:bg-[#d4a574] hover:text-black transition-all cursor-default"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
