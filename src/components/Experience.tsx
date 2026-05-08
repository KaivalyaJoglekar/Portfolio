'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

type LiveLink = { label: string; sublabel: string; href: string; tag: string };

const experiences = [
  {
    id: '01',
    liveLinks: undefined as LiveLink[] | undefined,
    company: 'TAQNEEQ TECH FEST',
    location: 'Mumbai, Maharashtra, India',
    description: 'Artist and guest operations across major fest activities with structured execution and cross-team alignment.',
    timeline: [
      {
        role: 'Crew',
        period: 'Oct 2025 — Mar 2026',
        meta: 'On-site',
        highlights: [
          'Supported coordinated execution across high-volume event operations.',
          'Contributed to rapid issue handling and smooth activity flow during live windows.',
        ],
      },
      {
        role: 'Sub-Head — Artist and Guest Management',
        period: 'Oct 2024 — Jun 2025 · 9 mos',
        meta: 'Full-time · On-site',
        highlights: [
          'Led a 12+ member team across artist logistics, movement, and stage readiness.',
          'Built dynamic schedules with real-time updates to avoid delays.',
          'Aligned hospitality, operations, and technical teams through unified workflows.',
        ],
      },
      {
        role: 'Executive',
        period: 'Nov 2023 — Oct 2024 · 1 yr',
        meta: 'Full-time · On-site',
        highlights: [
          'Managed guest relations and onboarding for event judges.',
          'Coordinated schedules and on-ground logistics across event activities.',
          'Delivered smooth experiences for guests and participants during execution.',
        ],
      },
    ],
    focus: ['Team Leadership', 'Public Relations', 'Artist Logistics', 'Operations Coordination'],
  },
  {
    id: '02',
    company: 'Technical and Research Cell',
    location: 'Mumbai, Maharashtra, India',
    description: 'Web and execution support for flagship initiatives including the Bombay Research Summit and Internship Fair.',
    timeline: [
      {
        role: 'Crew',
        period: 'Oct 2025 — Mar 2026',
        meta: 'On-site',
        highlights: [
          'Supported event execution and coordination across key initiative workflows.',
          'Collaborated with core teams to maintain smooth delivery during active timelines.',
        ],
      },
      {
        role: 'Senior Executive',
        period: 'Aug 2024 — Jun 2025 · 11 mos',
        meta: 'Full-time',
        highlights: [
          'Co-developed and deployed official event websites for the Bombay Research Summit and Internship Fair.',
          'Built responsive interfaces and registration-ready workflows for student participation.',
          'Delivered iterative updates for reliability before and during live events.',
        ],
      },
      {
        role: 'Executive',
        period: 'Aug 2023 — Jun 2025 · 1 yr 11 mos',
        meta: 'Full-time',
        highlights: [
          'Facilitated end-to-end coordination and guest relations for flagship events.',
          'Worked across industry judges, corporate partners, and student participants.',
          'Maintained structured communication and dependable operational flow.',
        ],
      },
    ],
    focus: ['Web Development', 'Management', 'Deployment', 'Coordination'],
    liveLinks: [
      {
        label: 'TRC Internship Fair',
        sublabel: 'Student portal · Event registration · Live slots',
        href: 'https://trc-internshipfair.vercel.app/',
        tag: 'Vercel',
      },
      {
        label: 'Bombay Research Summit',
        sublabel: 'Event showcase · Photography · Research summit',
        href: 'https://bombayresearchsummit.netlify.app/',
        tag: 'Netlify',
      },
    ],
  },
];

export const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeExp, setActiveExp] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const timelineItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="experience" className="scroll-mt-28 py-32 px-6 md:px-12 relative" ref={containerRef}>
      {/* Giant Background Number */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="sticky top-0 h-screen w-full flex items-center justify-end overflow-hidden">
          <motion.div style={{ x: useTransform(scrollYProgress, [0, 1], [0, -100]) }}>
            <AnimatePresence mode="wait">
              <motion.span 
                key={activeExp}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 0.03, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                className="text-[50vw] font-black leading-none text-[var(--foreground)]"
              >
                {experiences[activeExp]?.id}
              </motion.span>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-xs text-neutral-500 tracking-[0.3em] uppercase block mb-4">/07</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
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
                  onClick={() => {
                    document.getElementById(`experience-${exp.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
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
                    {exp.timeline[0].period}
                  </span>
                  <h3 className={`text-xl font-bold tracking-tight transition-colors ${
                    activeExp === i ? 'text-white' : 'text-neutral-500'
                  }`}>
                    {exp.company}
                  </h3>
                  <p className={`text-sm mt-1 transition-colors ${
                    activeExp === i ? 'text-neutral-400' : 'text-neutral-700'
                  }`}>
                    {exp.timeline[0].role}
                  </p>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right - Experience Details */}
          <div className="lg:col-span-8 space-y-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                id={`experience-${exp.id}`}
                initial={{ opacity: 0, x: i % 2 !== 0 ? 50 : 0, y: i % 2 === 0 ? 30 : 0 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="border border-neutral-900 p-8 md:p-12 scroll-mt-32 relative"
              >
                {/* Scroll Spy Sensor */}
                <motion.div 
                  className="absolute inset-y-0 left-0 w-px pointer-events-none"
                  onViewportEnter={() => setActiveExp(i)}
                  viewport={{ margin: "-40% 0px -40% 0px" }}
                />
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8 pb-8 border-b border-neutral-900">
                  <div>
                    <span className="text-[#d4a574] text-sm tracking-wider">TIMELINE</span>
                    <h3 className="text-3xl md:text-4xl font-black mt-2">{exp.company}</h3>
                    <p className="text-neutral-500 mt-1">{exp.location}</p>
                  </div>
                  <span className="text-6xl font-black text-stroke">{exp.id}</span>
                </div>

                {/* Description */}
                <p className="text-lg text-neutral-400 leading-relaxed mb-8">
                  {exp.description}
                </p>

                {/* Internal Timeline */}
                <div className="mb-8">
                  <h4 className="text-xs text-[#d4a574] tracking-[0.3em] uppercase mb-4">ROLES & TIMELINE</h4>
                  <div className="relative pl-8">
                    <motion.div
                      className="absolute left-2 top-2 bottom-2 w-px bg-neutral-900"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      style={{ originY: 0 }}
                    />
                    <motion.div
                      className="space-y-7"
                      variants={timelineVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {exp.timeline.map((item, i) => (
                        <motion.div
                          key={`${item.role}-${item.period}`}
                          variants={timelineItemVariants}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="relative"
                        >
                          <motion.span
                            className="absolute -left-[1.85rem] top-2 h-3.5 w-3.5 rounded-full border border-[#d4a574] bg-black"
                            initial={{ scale: 0.6, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 + 0.08, duration: 0.3 }}
                          />
                          <p className="text-xs text-neutral-500 tracking-[0.18em] uppercase">{item.period}</p>
                          <h5 className="text-xl md:text-2xl font-bold text-[var(--foreground)] mt-2">{item.role}</h5>
                          <p className="text-xs text-neutral-600 tracking-[0.18em] uppercase mt-2">{item.meta}</p>
                          <div className="mt-3 space-y-2">
                            {item.highlights.map((point, j) => (
                              <p key={j} className="text-neutral-300 leading-relaxed">{point}</p>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>

                {/* Focus Areas */}
                <div>
                  <h4 className="text-xs text-neutral-600 tracking-[0.3em] uppercase mb-4">FOCUS AREAS</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.focus.map((t, i) => (
                      <motion.span
                        key={t}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="px-4 py-2 bg-neutral-900 text-neutral-400 text-sm tracking-wider hover:bg-[#d4a574] hover:text-black transition-all cursor-default"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Live Projects — deployed work showcase */}
                {exp.liveLinks && exp.liveLinks.length > 0 && (
                  <motion.div
                    className="mt-8 pt-8 border-t border-neutral-900"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: 0.12 }}
                  >
                    {/* Section label */}
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-[10px] text-[#d4a574] tracking-[0.34em] uppercase font-semibold">
                        Deployed Work
                      </span>
                      <span className="flex-1 h-px bg-gradient-to-r from-[#d4a574]/30 to-transparent" />
                    </div>

                    <div className="space-y-3">
                      {exp.liveLinks.map((link, li) => (
                        <motion.a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer noopener"
                          initial={{ opacity: 0, y: 14 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: li * 0.12 + 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                          className="group relative flex items-center justify-between gap-4 px-5 py-4 border border-neutral-900 bg-neutral-950/60 hover:bg-neutral-900/80 hover:border-[#d4a574]/40 transition-all duration-300 overflow-hidden"
                        >
                          {/* Sweep glow on hover */}
                          <span className="absolute inset-0 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out bg-gradient-to-r from-[#d4a574]/06 to-transparent pointer-events-none" />

                          {/* Left: live dot + label + url */}
                          <div className="flex items-center gap-4 min-w-0">
                            {/* Animated live indicator */}
                            <span className="relative flex-shrink-0 flex items-center justify-center w-8 h-8 border border-neutral-800 group-hover:border-[#d4a574]/50 transition-colors duration-300">
                              <span className="w-2 h-2 rounded-full bg-emerald-500" />
                              <span className="absolute w-2 h-2 rounded-full bg-emerald-500 animate-ping opacity-60" />
                            </span>

                            <div className="min-w-0">
                              <p className="text-sm font-bold text-[var(--foreground)] group-hover:text-[#d4a574] transition-colors duration-300 truncate">
                                {link.label}
                              </p>
                              <p className="text-[11px] text-neutral-600 truncate mt-0.5">
                                {link.href.replace('https://', '')}
                              </p>
                            </div>
                          </div>

                          {/* Right: platform badge + arrow */}
                          <div className="flex items-center gap-3 flex-shrink-0">
                            <span className="hidden sm:inline-flex px-2.5 py-1 text-[9px] tracking-[0.2em] uppercase border border-neutral-800 text-neutral-500 group-hover:border-[#d4a574]/30 group-hover:text-[#d4a574]/70 transition-colors duration-300">
                              {link.tag}
                            </span>
                            <motion.span
                              className="w-8 h-8 flex items-center justify-center text-neutral-600 group-hover:text-[#d4a574] transition-colors duration-300"
                              whileHover={{ rotate: 45 }}
                              transition={{ type: 'spring', stiffness: 300 }}
                            >
                              ↗
                            </motion.span>
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
