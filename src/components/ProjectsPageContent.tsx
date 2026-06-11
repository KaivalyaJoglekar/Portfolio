'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/projects';

type ProjectMeta = {
  domain: string;
  status: 'Deployed' | 'Repository' | 'In progress';
  category: 'AI' | 'Research' | 'Web' | 'Security' | 'Automation';
  stack: string;
  signal: string;
};

const PROJECT_META: Record<string, ProjectMeta> = {
  'internship-fair-technical-research-cell': {
    domain: 'Event platform',
    status: 'Deployed',
    category: 'Web',
    stack: 'Responsive UI · Registration · Vercel',
    signal: 'Official event platform',
  },
  'bombay-research-summit': {
    domain: 'Research event web',
    status: 'Deployed',
    category: 'Research',
    stack: 'Responsive UI · Event content · Netlify',
    signal: 'Official summit presence',
  },
  'route-sense': {
    domain: 'Agentic logistics',
    status: 'Repository',
    category: 'Automation',
    stack: 'Next.js · FastAPI · LangGraph · PostGIS',
    signal: '60+ simulated cities',
  },
  'elevate-ai': {
    domain: 'Career intelligence',
    status: 'Deployed',
    category: 'AI',
    stack: 'React · FastAPI · Gemini · Recharts',
    signal: 'Resume-to-role workflow',
  },
  'celestial-body-classification': {
    domain: 'Astronomical ML',
    status: 'Repository',
    category: 'Research',
    stack: 'Python · SVM · Astropy · OpenCV',
    signal: '74.63% test accuracy',
  },
  momento: {
    domain: 'Mobile productivity',
    status: 'Repository',
    category: 'Web',
    stack: 'Flutter · Dart · Firebase',
    signal: 'Four connected workflows',
  },
  'neuro-stream': {
    domain: 'Video microservices',
    status: 'In progress',
    category: 'Automation',
    stack: 'Node.js · PostgreSQL · Redis · Next.js',
    signal: 'Microservice architecture',
  },
  biosentinel: {
    domain: 'Behavioral biometrics',
    status: 'Repository',
    category: 'Security',
    stack: 'React · FastAPI · WebSockets · scikit-learn',
    signal: '34 behavioral features',
  },
};

const CATEGORY_COLORS: Record<ProjectMeta['category'], string> = {
  AI: '#9b87d4',
  Research: '#d6a84b',
  Web: '#8396ad',
  Security: '#d36b67',
  Automation: '#67a97a',
};

const STATUS_COLORS: Record<ProjectMeta['status'], string> = {
  Deployed: '#67a97a',
  Repository: '#8a94a6',
  'In progress': '#d6a84b',
};

const PROJECT_ORDER = [
  'elevate-ai',
  'route-sense',
  'celestial-body-classification',
  'momento',
  'neuro-stream',
  'biosentinel',
  'internship-fair-technical-research-cell',
  'bombay-research-summit',
];

const ProjectBrief = ({ project, index }: { project: Project; index: number }) => {
  const meta = PROJECT_META[project.slug];

  return (
    <article
      className="group relative isolate overflow-hidden border border-white/12 bg-white/[0.015] transition-[border-color,background-color] duration-200 hover:border-white/30 hover:bg-white/[0.025] md:h-[20.5rem]"
      style={{ '--project-accent': project.color } as React.CSSProperties}
    >
      <div className="relative z-10 grid gap-5 p-5 md:h-full md:grid-cols-[minmax(13rem,0.34fr)_minmax(0,1fr)] md:gap-8 md:p-6">
        <Link
          href={`/projects/${project.slug}`}
          className="relative h-36 overflow-hidden border border-white/10 bg-neutral-950 active:scale-[0.99] md:h-full md:min-h-52"
          aria-label={`Open ${project.title} case study`}
        >
          <Image
            src={project.image}
            alt={`${project.title} interface`}
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, 28vw"
            className={`${project.imageClassName ?? 'object-cover'} opacity-72 grayscale-[12%] transition-[opacity,filter] duration-200 group-hover:opacity-92 group-hover:grayscale-0`}
          />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-black/75 px-3 py-2 font-mono text-[9px] text-neutral-400">
            <span>{project.tags.slice(0, 2).join(' · ')}</span>
            <span style={{ color: project.color }}>{project.num}</span>
          </div>
        </Link>

        <div className="flex min-w-0 flex-col justify-between">
          <div>
            <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
              <span className="font-mono text-[10px]" style={{ color: CATEGORY_COLORS[meta.category] }}>{String(index + 1).padStart(2, '0')}</span>
              <span style={{ color: CATEGORY_COLORS[meta.category] }}>{meta.domain}</span>
              <span className="inline-flex items-center gap-2 text-neutral-400">
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: STATUS_COLORS[meta.status] }} />
                {meta.status}
              </span>
              <span className="ml-auto font-mono text-[10px] text-neutral-600">{project.year}</span>
            </div>

          <Link href={`/projects/${project.slug}`} className="inline-block active:scale-[0.99]">
              <h2
                className="font-geist max-w-[30ch] text-wrap-balance text-[clamp(1.45rem,2vw,2.15rem)] font-semibold uppercase leading-[1] tracking-[-0.03em] transition-[color,opacity] duration-200 group-hover:opacity-90"
                style={{ color: project.color }}
              >
              {project.title}
            </h2>
          </Link>
          <p className="mt-2 text-xs font-medium text-neutral-500">{project.subtitle}</p>
          <p className="mt-4 max-w-[65ch] text-sm leading-6 text-neutral-400 md:line-clamp-4">{project.description}</p>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/10 pt-4">
            <strong className="text-xs font-medium text-neutral-200">{meta.signal}</strong>
            <span className="text-xs text-neutral-600">{meta.stack}</span>
            <Link href={`/projects/${project.slug}`} className="ml-auto inline-flex items-center gap-3 border border-white/15 px-3 py-2 text-xs text-neutral-300 transition-[border-color,color] duration-150 hover:border-white/50 hover:text-white">
              Case study <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export const ProjectsPageContent = ({ projects }: { projects: Project[] }) => {
  const orderedProjects = PROJECT_ORDER
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter(Boolean) as Project[];
  const deployedCount = projects.filter((project) => PROJECT_META[project.slug].status === 'Deployed').length;
  const categories = Object.keys(CATEGORY_COLORS) as ProjectMeta['category'][];

  return (
    <main className="min-h-screen bg-black text-[var(--foreground)]">
      <div className="mx-auto max-w-[110rem] px-5 pb-16 pt-5 md:px-10">
        <nav className="flex items-center justify-between border-b border-white/15 pb-4">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center gap-3 border border-white/20 px-5 font-sans text-sm font-medium text-neutral-200 transition-[background-color,border-color,color] duration-150 hover:border-white/60 hover:bg-white/5 hover:text-white"
          >
            <span aria-hidden="true">←</span> Back to home
          </Link>
          <span className="font-mono text-[10px] text-neutral-500">Engineering work · {projects.length} projects</span>
        </nav>

        <header className="grid gap-6 border-b border-white/15 py-8 lg:grid-cols-[minmax(0,1fr)_minmax(19rem,0.5fr)] lg:items-end">
          <div>
            <h1 className="text-[clamp(3rem,6vw,5.8rem)] font-semibold uppercase leading-[0.9] tracking-[-0.04em]">Projects</h1>
            <p className="mt-4 max-w-xl text-sm leading-6 text-neutral-400">
              Eight engineering case studies across applied AI, research, web systems, security, and automation.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-3 lg:justify-end">
            <span className="text-xs text-neutral-500">{projects.length} documented</span>
            <span className="text-xs text-neutral-500">{deployedCount} deployed</span>
            {categories.map((category) => (
              <span key={category} className="inline-flex items-center gap-2 text-xs text-neutral-500">
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: CATEGORY_COLORS[category] }} />
                {category}
              </span>
            ))}
          </div>
        </header>

        <section className="grid gap-3 pt-3" aria-label="Project case studies">
          {orderedProjects.map((project, index) => <ProjectBrief key={project.slug} project={project} index={index} />)}
        </section>

        <footer className="mt-8 flex items-center justify-between border-t border-white/15 pt-5 text-xs text-neutral-600">
          <Link href="/" className="transition-colors hover:text-[#d4a574]">← Main portfolio</Link>
          <span>Every project opens into a technical case study</span>
        </footer>
      </div>
    </main>
  );
};
