'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { BackToWorkLink } from '@/components/BackToWorkLink';

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

export const ProjectsPageContent = ({ projects }: { projects: Project[] }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="min-h-screen bg-black text-[var(--foreground)] px-6 md:px-12 py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(212,165,116,0.28) 1px, transparent 1px), linear-gradient(90deg, rgba(212,165,116,0.28) 1px, transparent 1px)',
            backgroundSize: '96px 96px',
          }}
        />
      </div>

      <motion.div
        className="absolute top-20 right-[-10vw] pointer-events-none"
        initial={{ opacity: 0, rotate: -8, scale: 0.92 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="text-[22vw] font-black text-stroke opacity-[0.05]">WORK</span>
      </motion.div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-xs text-neutral-500 tracking-[0.3em] uppercase block mb-4">/PROJECTS</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase max-w-4xl">
            Project Archive
          </h1>
          <p className="text-neutral-500 mt-5 max-w-2xl leading-relaxed">
            A cleaner overview of product builds, research work, and systems experiments.
          </p>

          <BackToWorkLink />
        </motion.div>

        <div className="mt-14 space-y-4">
          {projects.map((project, index) => (
            <motion.article
              id={project.slug}
              key={project.slug}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.65, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="scroll-mt-28 border border-neutral-900/80 bg-black/35 rounded-xl p-6 md:p-8 transition-colors hover:border-neutral-700"
            >
              <div className="grid gap-8 lg:grid-cols-[180px_minmax(0,1fr)]">
                <div className="flex flex-row lg:flex-col items-start justify-between gap-4">
                  <div>
                    <p className="text-xs tracking-[0.22em] uppercase text-neutral-600">{project.num}</p>
                    <p className="mt-2 text-sm uppercase tracking-[0.16em]" style={{ color: project.color }}>
                      {project.period ?? project.year}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 lg:gap-1 lg:flex-col">
                    {project.viewHref ? (
                      <a
                        href={project.viewHref.replaceAll(' ', '%20')}
                        target={project.viewHref.startsWith('http') ? '_blank' : undefined}
                        rel={project.viewHref.startsWith('http') ? 'noreferrer' : undefined}
                        className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-800 text-[11px] tracking-[0.16em] uppercase text-neutral-300 hover:border-[#d4a574] hover:text-[#d4a574] transition-colors"
                      >
                        {project.viewLabel ?? 'Open'}
                        <span>↗</span>
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-900 text-[11px] tracking-[0.16em] uppercase text-neutral-600">
                        {project.viewLabel ?? 'Private'}
                        <span>•</span>
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div>
                      <h2 className="text-2xl md:text-4xl font-black tracking-tight" style={{ color: project.color }}>
                        {project.title}
                      </h2>
                      <p className="text-neutral-500 mt-2 text-sm md:text-base">{project.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-neutral-300 mt-6 leading-relaxed max-w-3xl">{project.description}</p>

                  {project.keyFeatures && project.keyFeatures.length > 0 && (
                    <div className="mt-7">
                      <h3 className="text-[11px] text-neutral-500 tracking-[0.22em] uppercase mb-4">Highlights</h3>
                      <div className="grid gap-3 md:grid-cols-2">
                        {project.keyFeatures.map((feature) => (
                          <div key={feature} className="flex items-start gap-3">
                            <span className="mt-1 text-[10px]" style={{ color: project.color }}>
                              ◆
                            </span>
                            <p className="text-sm text-neutral-300 leading-relaxed">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {(project.techStack || project.impact) && (
                    <div className="mt-7 grid gap-4 md:grid-cols-2">
                      {project.techStack && (
                        <div className="border border-neutral-900/80 rounded-lg p-4">
                          <h3 className="text-[11px] text-neutral-500 tracking-[0.22em] uppercase mb-3">Tech Stack</h3>
                          <p className="text-sm text-neutral-300 leading-relaxed">{project.techStack}</p>
                        </div>
                      )}

                      {project.impact && (
                        <div className="border border-neutral-900/80 rounded-lg p-4">
                          <h3 className="text-[11px] text-neutral-500 tracking-[0.22em] uppercase mb-3">Impact</h3>
                          <p className="text-sm text-neutral-300 leading-relaxed">{project.impact}</p>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-[11px] border border-neutral-800 uppercase tracking-[0.16em]"
                        style={{ color: project.color, backgroundColor: 'rgba(255,255,240,0.02)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
};
