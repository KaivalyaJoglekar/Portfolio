'use client';

import { motion, useScroll, useTransform, useInView, useSpring } from 'framer-motion';
import { useRef, useState } from 'react';

const technologies = [
  {
    name: 'Frontend',
    category: 'Responsive interfaces, data-driven UX, component systems.',
    level: 95,
    tools: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    icon: '⬡',
  },
  {
    name: 'Backend',
    category: 'APIs, service layers, databases, and scalable data workflows.',
    level: 90,
    tools: ['Node.js', 'FastAPI', 'PostgreSQL', 'Redis'],
    icon: '⬡',
  },
  {
    name: 'AI / ML',
    category: 'Applied ML pipelines, LLM workflows, and NLP systems.',
    level: 88,
    tools: ['PyTorch', 'LangChain', 'scikit-learn', 'Gemini'],
    icon: '⬡',
  },
  {
    name: 'Cloud & Tools',
    category: 'Deploying and maintaining systems with modern engineering tooling.',
    level: 85,
    tools: ['Docker', 'Vercel', 'MinIO', 'GitHub Actions'],
    icon: '⬡',
  },
];

/* ─── Progress bar ─────────────────────────────────────────────────────── */
const ProgressBar = ({ level, color, inView }: { level: number; color: string; inView: boolean }) => {
  const spring = useSpring(0, { stiffness: 40, damping: 16 });
  if (inView) spring.set(level);

  return (
    <div className="relative w-full h-[2px] bg-neutral-900 overflow-hidden">
      <motion.div
        className="absolute left-0 top-0 h-full"
        style={{ background: color, width: `${level}%` }}
        initial={{ scaleX: 0, transformOrigin: 'left' }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
};

/* ─── Tech Row ─────────────────────────────────────────────────────────── */
const TechItem = ({ tech, index }: { tech: typeof technologies[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -70 : 70 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="relative group cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Hover side glow */}
      <motion.div
        className="absolute -left-3 top-0 bottom-0 w-[2px] rounded-full"
        style={{ background: '#d4a574' }}
        animate={{ opacity: hovered ? 1 : 0, scaleY: hovered ? 1 : 0.3 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="py-8 border-b border-neutral-900 group-hover:border-[#d4a574]/30 transition-colors duration-400">
        <div className="flex items-start justify-between gap-6">
          {/* Left */}
          <div className="flex items-start gap-5 flex-1 min-w-0">
            {/* Index */}
            <div className="flex-shrink-0 pt-1">
              <motion.span
                className="text-4xl md:text-6xl font-black leading-none text-stroke opacity-25 group-hover:opacity-70 tabular-nums"
                style={{ color: '#d4a574' }}
                animate={{ opacity: hovered ? 0.7 : 0.25 }}
                transition={{ duration: 0.3 }}
              >
                {String(index + 1).padStart(2, '0')}
              </motion.span>
            </div>

            {/* Text block */}
            <div className="flex-1 min-w-0">
              <motion.h3
                className="text-2xl md:text-4xl font-black tracking-tight mb-1 group-hover:text-[#d4a574] transition-colors duration-300"
                animate={{ x: hovered ? 8 : 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {tech.name}
              </motion.h3>

              <p className="text-xs text-neutral-600 tracking-wide leading-relaxed mb-4 max-w-sm">
                {tech.category}
              </p>

              {/* Tool pills */}
              <div className="flex flex-wrap gap-2">
                {tech.tools.map((t, ti) => (
                  <motion.span
                    key={t}
                    className="px-2.5 py-1 text-[9px] tracking-[0.18em] uppercase border border-neutral-800 text-neutral-500 group-hover:border-[#d4a574]/30 group-hover:text-[#d4a574]/70 transition-colors duration-300"
                    initial={{ opacity: 0, y: 6 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.35, delay: 0.4 + index * 0.08 + ti * 0.055 }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — bar + label */}
          <div className="flex-shrink-0 flex flex-col items-end gap-3 pt-1 w-36 md:w-52">
            <motion.span
              className="text-xl md:text-2xl font-black text-neutral-800 group-hover:text-[#d4a574] transition-colors duration-300 tracking-tight"
              animate={{ opacity: hovered ? 1 : 0.5 }}
              transition={{ duration: 0.3 }}
            >
              CORE
            </motion.span>
            <div className="w-full">
              <ProgressBar level={tech.level} color="#d4a574" inView={isInView} />
            </div>
            <span
              className="text-[9px] tracking-[0.26em] uppercase font-semibold transition-colors duration-300"
              style={{ color: hovered ? '#d4a574' : '#404040' }}
            >
              {tech.level}% Proficiency
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Section ──────────────────────────────────────────────────────────── */
export const TechStack = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-60px' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const bgX = useTransform(scrollYProgress, [0, 1], ['0%', '-18%']);

  return (
    <section
      id="skills"
      className="scroll-mt-28 py-32 px-6 md:px-12 relative overflow-hidden"
      ref={containerRef}
    >
      {/* Scrolling watermark */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap pointer-events-none select-none"
        style={{ x: bgX }}
      >
        <span className="text-[16vw] font-black text-stroke opacity-[0.035] tracking-tighter">
          SKILLS • STACK • ENGINEERING •
        </span>
      </motion.div>

      {/* Rotating ring accent */}
      <motion.div
        className="absolute top-12 right-12 w-80 h-80 border border-neutral-900 rounded-full pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-20 -left-16 w-56 h-56 border border-neutral-900 rounded-full pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
      />

      <div className="max-w-6xl mx-auto relative">
        {/* ── Header ── */}
        <div ref={headerRef} className="mb-20">
          <motion.span
            className="text-xs text-neutral-500 tracking-[0.34em] uppercase block mb-5"
            initial={{ opacity: 0, x: -28 }}
            animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            /04
          </motion.span>

          <div className="overflow-hidden">
            <motion.h2
              className="text-5xl md:text-7xl font-black tracking-tighter uppercase"
              initial={{ y: 90 }}
              animate={isHeaderInView ? { y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              Technical
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-neutral-700"
              initial={{ y: 90 }}
              animate={isHeaderInView ? { y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              Capabilities
            </motion.h2>
          </div>

          {/* Gold underline */}
          <motion.div
            className="h-[2px] mt-4 mb-5"
            style={{ background: 'linear-gradient(90deg,#d4a574,rgba(212,165,116,0.06))', maxWidth: '18rem' }}
            initial={{ scaleX: 0, transformOrigin: 'left' }}
            animate={isHeaderInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          />

          <motion.p
            className="text-neutral-600 max-w-md leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            Production-minded skills across full-stack engineering, AI/ML workflows, and cloud-native development.
          </motion.p>
        </div>

        {/* ── Rows ── */}
        <div className="space-y-0">
          {technologies.map((tech, i) => (
            <TechItem key={tech.name} tech={tech} index={i} />
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          className="mt-16 pt-10 border-t border-neutral-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-neutral-600 max-w-3xl leading-relaxed text-sm">
            I pick technologies based on product constraints, scalability goals, and delivery speed.
            If you are exploring a build, I can share a practical architecture approach.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
