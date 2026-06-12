'use client';

import { motion, useReducedMotion } from 'framer-motion';

const capabilities = [
  {
    name: 'Languages',
    accent: '#d4a574',
    tags: ['JAVA', 'PYTHON', 'JAVASCRIPT', 'TYPESCRIPT', 'SQL', 'C++'],
  },
  {
    name: 'Frontend',
    accent: '#8fb8ff',
    tags: ['REACT.JS', 'NEXT.JS', 'TAILWIND CSS', 'FLUTTER'],
  },
  {
    name: 'Backend',
    accent: '#b49cff',
    tags: ['FASTAPI', 'EXPRESS.JS', 'NODE.JS', 'REST APIS', 'WEBSOCKETS'],
  },
  {
    name: 'AI / ML',
    accent: '#7fc9a4',
    tags: [
      'SCIKIT-LEARN',
      'LANGGRAPH',
      'GEMINI API',
      'ISOLATION FOREST',
      'RANDOM FOREST',
      'GRADIENT BOOSTING',
      'SVM',
      'AGENTIC AI',
    ],
  },
  {
    name: 'Databases & Cloud',
    accent: '#e05a78',
    tags: ['FIREBASE', 'FIRESTORE', 'SUPABASE'],
  },
  {
    name: 'Tools',
    accent: '#ff5c39',
    tags: ['GIT', 'GITHUB', 'POSTMAN', 'VERCEL', 'RENDER'],
  },
];

export const TechStack = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="relative scroll-mt-28 overflow-hidden px-6 py-28 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid gap-6 border-b border-white/10 pb-8 md:grid-cols-[1fr_0.7fr] md:items-end">
          <div>
            <span className="mb-4 block font-mono text-[10px] uppercase tracking-[0.24em] text-[#d4a574]">
              / 04
            </span>
            <h2 className="max-w-3xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] md:text-7xl">
              Skills
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-neutral-400 md:justify-self-end">
            Languages, frameworks, infrastructure, and tools used across production projects and applied research.
          </p>
        </div>

        <div className="group/stack border-t border-white/10">
          {capabilities.map((capability, index) => (
            <motion.article
              key={capability.name}
              className="group/row relative isolate overflow-hidden border-b border-white/10 py-7 transition-[opacity] duration-300 group-hover/stack:opacity-45 hover:!opacity-100 md:py-9"
              initial={reduceMotion ? false : { opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: reduceMotion ? 0 : 0.55, delay: index * 0.06, ease: [0.23, 1, 0.32, 1] }}
              style={{ '--skill-accent': capability.accent } as React.CSSProperties}
            >
              <div className="absolute inset-0 -z-10 origin-left scale-x-0 bg-[color:var(--skill-accent)] opacity-[0.055] transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/row:scale-x-100" />

              <div className="grid gap-6 md:grid-cols-[minmax(260px,0.75fr)_minmax(420px,1.7fr)] md:items-center">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[10px] text-[color:var(--skill-accent)]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-3xl font-black uppercase tracking-[-0.035em] text-neutral-100 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/row:translate-x-2 md:text-4xl">
                    {capability.name}
                  </h3>
                </div>

                <div>
                  <ul className="flex flex-wrap gap-2.5">
                    {capability.tags.map((tag) => (
                      <li
                        key={tag}
                        className="border border-white/15 bg-black/60 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.06em] text-neutral-300 transition-colors duration-300 group-hover/row:border-[color:var(--skill-accent)] group-hover/row:text-white"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
