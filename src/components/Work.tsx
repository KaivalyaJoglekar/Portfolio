'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const projects = [
  {
    slug: 'route-sense',
    num: '01',
    title: 'RouteSense',
    subtitle: 'Autonomous Logistics AI Agent',
    description: 'Monitors shipments, predicts delay risk, reasons through root causes, and recommends next actions in an agentic logistics workflow.',
    tags: ['FastAPI', 'LangGraph', 'Gemini', 'Scikit-learn', 'SimPy', 'PostGIS', 'Next.js'],
    year: '2025',
    color: '#0d9488',
  },
  {
    slug: 'elevate-ai',
    num: '02',
    title: 'Elevate AI',
    subtitle: 'Resume Analysis & Career Roadmap Platform',
    description: 'Analyzes resumes, maps skills against role requirements, identifies gaps, and provides targeted roadmap recommendations with visual insights.',
    tags: ['Next.js', 'Tailwind CSS', 'FastAPI', 'Gemini/OpenAI', 'JSearch API', 'Recharts'],
    year: '2025',
    color: '#74a5d4',
  },
  {
    slug: 'celestial-body-classification',
    num: '03',
    title: 'Celestial Body Classification',
    subtitle: 'Machine Learning Research Project',
    description: 'Research-focused ML pipeline for classifying galaxies, stars, and quasars from SDSS FITS imagery using Support Vector Machines.',
    tags: ['Python', 'Scikit-learn', 'NumPy', 'OpenCV', 'FITS Processing', 'SVM'],
    year: '2026',
    color: '#a5d474',
  },
  {
    slug: 'momento',
    num: '04',
    title: 'Momento',
    subtitle: 'Productivity & Journaling App',
    description: 'Flutter application combining tasks, Pomodoro tracking, mood journaling, streaks, analytics, and Firebase cloud sync.',
    tags: ['Flutter', 'Dart', 'Firebase Auth', 'Firebase Realtime Database'],
    year: '2025',
    color: '#d474a5',
  },
  {
    slug: 'neuro-stream',
    num: '05',
    title: 'NeuroStream',
    subtitle: 'AI Video Platform Microservice System',
    description: 'Microservice-based AI video platform for upload, processing, search, and analytics with a focus on workflow orchestration and frontend-backend integration.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'S3-Compatible Storage', 'Next.js', 'Render', 'Vercel'],
    year: '2026',
    color: '#7c6fd1',
  },
  {
    slug: 'biosentinel',
    num: '06',
    title: 'BioSentinel',
    subtitle: 'Continuous Behavioral Biometrics Authentication',
    description: 'Continuous, invisible second-factor authentication system designed to monitor session integrity using real-time behavioral biometrics and anomaly detection.',
    tags: ['React', 'FastAPI', 'WebSockets', 'scikit-learn', 'Python'],
    year: '2025',
    color: '#d4a574',
  },
];

const ProjectCard = ({
  project,
  index,
  supportsHover,
}: {
  project: typeof projects[0];
  index: number;
  supportsHover: boolean;
}) => {
  const ref = useRef(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const showDetails = supportsHover ? isHovered : isPinned;

  const handleMouseEnter = () => {
    if (!supportsHover) return;
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (!supportsHover) return;
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 120);
  };

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const x = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.1, 0, 1] }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        if (!supportsHover) {
          setIsPinned((prev) => !prev);
        }
      }}
      className="group relative border-b border-neutral-900 cursor-pointer"
    >
      <div className="py-10 md:py-16 flex items-center justify-between gap-8 relative">
        {/* Number with Parallax */}
        <motion.span 
          style={{
            x,
            WebkitTextStroke: `1.5px ${showDetails ? project.color : 'rgba(255,255,240,0.28)'}`,
            color: 'transparent',
          }}
          animate={{ opacity: showDetails ? 0.42 : 0.2 }}
          className="pointer-events-none text-[8rem] md:text-[14rem] font-black absolute -left-8 md:-left-4 transition-opacity duration-500"
        >
          {project.num}
        </motion.span>
        
        {/* Content */}
        <div className="relative z-10 ml-20 md:ml-40 flex-1">
          <div className="flex items-start md:items-center justify-between gap-4 flex-col md:flex-row">
            <div>
              <motion.div
                initial={{ y: 60 }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2, ease: [0.25, 0.1, 0, 1] }}
              >
                <motion.h3 
                  animate={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight transition-colors duration-300"
                  style={{ color: showDetails ? project.color : '#FFFFF0' }}
                >
                  {project.title}
                </motion.h3>
              </motion.div>
              <motion.p 
                className="text-neutral-400 text-sm md:text-base mt-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
              >
                {project.subtitle}
              </motion.p>
            </div>
            
            <div className="flex items-center gap-6">
              <motion.span 
                className="text-neutral-400 text-sm font-mono"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
              >
                {project.year}
              </motion.span>
              <motion.div 
                animate={{ 
                  rotate: showDetails ? 45 : 0, 
                  scale: showDetails ? 1.2 : 1,
                  borderColor: showDetails ? project.color : '#262626',
                  backgroundColor: showDetails ? project.color : 'transparent',
                }}
                transition={{ duration: 0.3 }}
                className="relative w-14 h-14 border flex items-center justify-center"
              >
                <Link
                  href={`/projects#${project.slug}`}
                  onClick={(event) => event.stopPropagation()}
                  className="absolute inset-0 z-10"
                  aria-label={`Open ${project.title} on projects page`}
                >
                  <span className="sr-only">Open project page</span>
                </Link>
                <motion.span 
                  animate={{ color: showDetails ? '#000' : '#FFFFF0' }}
                  className="text-lg"
                >
                  ↗
                </motion.span>
              </motion.div>
            </div>
          </div>
          
          {/* Tags - Reveal on hover with stagger */}
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: showDetails ? 'auto' : 0, opacity: showDetails ? 1 : 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0, 1] }}
            className="overflow-hidden"
          >
            <div className="flex flex-wrap items-start gap-3 mt-6 pt-6 border-t border-neutral-900/40">
              {project.tags.map((tag, i) => (
                <motion.span 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: showDetails ? 1 : 0, y: showDetails ? 0 : 10 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="px-4 py-2 text-xs border border-neutral-800 uppercase tracking-wider whitespace-nowrap"
                  style={{
                    color: project.color,
                    backgroundColor: showDetails ? 'rgba(255,255,240,0.03)' : 'transparent',
                  }}
                >
                  {tag}
                </motion.span>
              ))}
              <motion.p 
                className="text-neutral-500 text-sm leading-relaxed basis-full md:basis-auto md:ml-2 md:flex-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: showDetails ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                — {project.description}
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export const Work = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const [supportsHover, setSupportsHover] = useState(() => {
    if (typeof window === 'undefined') return true;
    return window.matchMedia('(hover: hover)').matches;
  });
  const isHeaderInView = useInView(headerRef, { once: true });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover)');
    const handleChange = (event: MediaQueryListEvent) => {
      setSupportsHover(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundX = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);

  return (
    <section id="work" ref={sectionRef} className="scroll-mt-28 py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Scrolling Background Text */}
      <motion.div 
        className="absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap pointer-events-none"
        style={{ x: backgroundX }}
      >
        <span className="text-[15vw] font-black text-stroke opacity-[0.03] tracking-tighter">
          WORK • PROJECTS • PORTFOLIO • WORK • PROJECTS •
        </span>
      </motion.div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header with Reveal Animation */}
        <div ref={headerRef} className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.span 
              className="text-xs text-neutral-500 tracking-[0.3em] uppercase block mb-4"
              initial={{ opacity: 0, x: -30 }}
              animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              /02
            </motion.span>
            <div className="overflow-hidden">
              <motion.h2 
                className="text-5xl md:text-7xl font-black uppercase tracking-tight"
                initial={{ y: 100 }}
                animate={isHeaderInView ? { y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
              >
                Selected Work
              </motion.h2>
            </div>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-neutral-400 max-w-xs text-right text-sm flex items-center gap-2 justify-end"
          >
            <span className="w-8 h-px bg-neutral-500" />
            {supportsHover ? 'HOVER TO EXPLORE' : 'TAP TO EXPAND'}
          </motion.p>
        </div>

        {/* Projects List */}
        <div>
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} supportsHover={supportsHover} />
          ))}
        </div>
        
        {/* View All Button */}
        <motion.div 
          className="mt-20 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-4 px-10 py-5 border border-neutral-800 text-sm tracking-[0.2em] uppercase text-neutral-300 hover:border-[#d4a574] hover:text-[#d4a574] transition-colors"
          >
            <span>View All Projects</span>
            <span className="text-[#d4a574] transition-colors group-hover:text-[#d4a574]">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
