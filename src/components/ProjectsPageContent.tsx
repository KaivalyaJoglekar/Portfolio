'use client';

import { useEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { BackToWorkLink } from '@/components/BackToWorkLink';
import { RingScene } from '@/components/3d/RingScene';

type Project = {
  slug: string;
  num: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  year: string;
  color: string;
  period?: string;
  keyFeatures?: string[];
  techStack?: string;
  impact?: string;
  viewHref?: string;
  viewLabel?: string;
};

function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

/* ─── Tag ──────────────────────────────────────────────────────────────── */
const Tag = ({ children, color }: { children: string; color: string }) => (
  <span
    className="px-3 py-1.5 text-[10px] border uppercase tracking-[0.18em] transition-all duration-300 hover:scale-105"
    style={{
      borderColor: `rgba(${hexToRgb(color)},0.4)`,
      color,
      backgroundColor: `rgba(${hexToRgb(color)},0.07)`,
    }}
  >
    {children}
  </span>
);

/* ─── Project Card ─────────────────────────────────────────────────────── */
const StackCard = ({ project }: { project: Project }) => {
  const [hovered, setHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const isLive =
    project.viewHref?.startsWith('http') &&
    project.viewLabel !== 'View Repository' &&
    project.viewLabel !== 'Currently Working';
  const isWIP = project.viewLabel === 'Currently Working';
  const rgb = hexToRgb(project.color);

  return (
    <motion.article
      id={project.slug}
      className="relative scroll-mt-28 mb-8 md:mb-10"
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 48, filter: 'blur(12px)' }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="relative group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={shouldReduceMotion ? undefined : { y: -6 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="absolute -inset-px pointer-events-none z-10"
          animate={{
            boxShadow: hovered
              ? `0 0 0 1px rgba(${rgb},0.55), 0 0 50px rgba(${rgb},0.12), inset 0 0 70px rgba(${rgb},0.04)`
              : `0 0 0 1px rgba(255,255,255,0.04)`,
          }}
          transition={{ duration: 0.35 }}
        />

        <div className="relative bg-black/90 backdrop-blur-md border border-neutral-900 overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 right-0 h-[3px] origin-left"
            style={{ background: `linear-gradient(90deg, ${project.color} 0%, transparent 75%)` }}
            initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          />

          <motion.span
            style={{
              fontSize: 'clamp(5.5rem, 11vw, 9rem)',
              color: project.color,
            }}
            className="pointer-events-none absolute right-3 top-5 font-black leading-none select-none"
            animate={{
              opacity: hovered ? 0.13 : 0.06,
              x: hovered && !shouldReduceMotion ? -8 : 0,
            }}
            transition={{ duration: 0.35 }}
          >
            {project.num}
          </motion.span>

          <div className="relative p-7 md:p-10 lg:p-12">
            <div className="flex items-start justify-between gap-4 mb-5">
              <div className="flex items-center gap-3">
                <span
                  className="text-[10px] tracking-[0.3em] border px-3 py-1.5 uppercase font-bold"
                  style={{
                    borderColor: `rgba(${rgb},0.45)`,
                    color: project.color,
                    backgroundColor: `rgba(${rgb},0.07)`,
                  }}
                >
                  {project.num}
                </span>
                <span className="text-[10px] font-mono text-neutral-600">
                  {project.period ?? project.year}
                </span>
              </div>

              <AnimatePresence mode="wait">
                {isLive && (
                  <motion.span
                    key="live"
                    initial={{ opacity: 0, scale: 0.75 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase border border-emerald-900/50 text-emerald-400 bg-emerald-950/30"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live
                  </motion.span>
                )}
                {isWIP && (
                  <motion.span
                    key="wip"
                    initial={{ opacity: 0, scale: 0.75 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase border border-amber-900/50 text-amber-400 bg-amber-950/30"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    In Progress
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            <div className="overflow-hidden mb-1 pr-10 md:pr-16">
              <h2
                className="font-black tracking-tight leading-[0.96] uppercase max-w-[10ch] md:max-w-[12ch]"
                style={{
                  color: project.color,
                  fontSize: 'clamp(2.15rem, 4.2vw, 4.6rem)',
                  textShadow: `0 0 36px rgba(${rgb},0.2)`,
                }}
              >
                {project.title}
              </h2>
            </div>

            <p className="text-neutral-500 text-sm mb-5">{project.subtitle}</p>

            <div
              className="h-px mb-6"
              style={{ background: `linear-gradient(90deg, rgba(${rgb},0.55), transparent)` }}
            />

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-neutral-300 leading-relaxed text-sm">{project.description}</p>
              </div>

              {project.keyFeatures && project.keyFeatures.length > 0 && (
                <div>
                  <p
                    className="text-[9px] tracking-[0.3em] uppercase mb-3 font-semibold"
                    style={{ color: `rgba(${rgb},0.75)` }}
                  >
                    Highlights
                  </p>
                  <div className="space-y-2">
                    {project.keyFeatures.slice(0, 3).map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5">
                        <span className="mt-1.5 text-[7px] flex-shrink-0" style={{ color: project.color }}>
                          ◆
                        </span>
                        <p className="text-xs text-neutral-400 leading-relaxed">{feat}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {(project.techStack || project.impact) && (
              <div className="grid gap-3 md:grid-cols-2 mb-6">
                {project.techStack && (
                  <div
                    className="p-3.5 border"
                    style={{ borderColor: `rgba(${rgb},0.18)`, background: `rgba(${rgb},0.04)` }}
                  >
                    <p
                      className="text-[9px] tracking-[0.26em] uppercase mb-2 font-semibold"
                      style={{ color: `rgba(${rgb},0.65)` }}
                    >
                      Tech Stack
                    </p>
                    <p className="text-xs text-neutral-400 leading-relaxed">{project.techStack}</p>
                  </div>
                )}
                {project.impact && (
                  <div
                    className="p-3.5 border"
                    style={{ borderColor: `rgba(${rgb},0.18)`, background: `rgba(${rgb},0.04)` }}
                  >
                    <p
                      className="text-[9px] tracking-[0.26em] uppercase mb-2 font-semibold"
                      style={{ color: `rgba(${rgb},0.65)` }}
                    >
                      Impact
                    </p>
                    <p className="text-xs text-neutral-400 leading-relaxed">{project.impact}</p>
                  </div>
                )}
              </div>
            )}

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 border-t border-neutral-900/70">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Tag key={tag} color={project.color}>
                    {tag}
                  </Tag>
                ))}
              </div>

              {project.viewHref ? (
                <motion.a
                  href={project.viewHref.replaceAll(' ', '%20')}
                  target={project.viewHref.startsWith('http') ? '_blank' : undefined}
                  rel={project.viewHref.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex-shrink-0 inline-flex items-center gap-3 px-7 py-3 text-[11px] tracking-[0.22em] uppercase font-bold border transition-all duration-300"
                  style={{ borderColor: project.color, color: project.color }}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : { backgroundColor: project.color, color: '#000', gap: '20px' }
                  }
                >
                  {project.viewLabel ?? 'Open'} <span className="text-base">↗</span>
                </motion.a>
              ) : (
                <span className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3 border border-neutral-900 text-[11px] tracking-[0.18em] uppercase text-neutral-700">
                  {project.viewLabel ?? 'Private'} <span>•</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
};

/* ─── Page ─────────────────────────────────────────────────────────────── */
export const ProjectsPageContent = ({ projects }: { projects: Project[] }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(heroScroll, [0, 1], [0, 80]);
  const heroOpacity = useTransform(heroScroll, [0, 0.6], [1, 0]);

  return (
    <main className="min-h-screen bg-black text-[var(--foreground)] relative">
      <RingScene />

      <div className="fixed inset-0 opacity-[0.022] pointer-events-none z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(212,165,116,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,165,116,0.5) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div ref={heroRef} className="relative z-10 px-6 md:px-12 pt-24 pb-10 overflow-hidden">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="max-w-6xl mx-auto">
          <motion.span
            className="text-xs text-neutral-500 tracking-[0.36em] uppercase block mb-5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            / Projects
          </motion.span>

          <div className="overflow-hidden mb-1">
            <motion.p
              className="font-black tracking-tight uppercase leading-none"
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.75rem)',
                color: 'var(--foreground)',
              }}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
            >
              Project
            </motion.p>
          </div>
          <div className="overflow-hidden mb-4">
            <motion.h1
              className="font-black tracking-tight uppercase leading-none"
              style={{
                fontSize: 'clamp(2.9rem, 6.3vw, 5.8rem)',
                color: 'var(--foreground)',
              }}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              Archive
            </motion.h1>
          </div>

          <motion.div
            className="h-[2px] mb-6"
            style={{
              background: 'linear-gradient(90deg,#d4a574,rgba(212,165,116,0.06))',
              maxWidth: '18rem',
            }}
            initial={{ scaleX: 0, transformOrigin: 'left' }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          />

          <motion.p
            className="text-neutral-400 max-w-lg leading-relaxed mb-6 text-sm"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42 }}
          >
            A curated index of product builds, research systems, and engineering experiments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.54 }}
          >
            <BackToWorkLink />
          </motion.div>
        </motion.div>
      </div>

      <div className="relative z-10 px-6 md:px-12 pb-28">
        <div className="max-w-6xl mx-auto">
          {projects.map((project) => (
            <StackCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      </div>
    </main>
  );
};
