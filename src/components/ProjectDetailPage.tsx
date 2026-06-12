'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import type { Project } from '@/lib/projects';

type CaseStudy = {
  domain: string;
  problem: string;
  approach: string;
  metrics: [string, string][];
  architecture: [string, string][];
  decisions: [string, string][];
  challenges: string[];
};

const CASE_STUDIES: Record<string, CaseStudy> = {
  'celestial-body-classification': {
    domain: 'Machine Learning · Astronomy',
    problem: 'Classify galaxies, quasars, and stars from Sloan Digital Sky Survey FITS imagery while preserving generalization across imbalanced astronomical datasets.',
    approach: 'A reproducible SVM pipeline transforms raw FITS observations into engineered morphological and texture features, selects the strongest signals, then evaluates class-level performance.',
    metrics: [['74.63%', 'Test accuracy'], ['0.01ms', 'Inference / sample'], ['61', 'Engineered features'], ['50', 'Selected features']],
    architecture: [['SDSS FITS images', 'Raw astronomical observations'], ['Feature extraction', 'Morphology, Hu moments, LBP texture'], ['Feature selection', 'Mutual Information Classification'], ['Training', 'Balanced RBF-kernel SVM'], ['Evaluation', 'Accuracy, PR curves, confusion matrices']],
    decisions: [['Engineered features over raw pixels', 'Made the classifier interpretable and computationally efficient for a limited dataset.'], ['Balanced class weights', 'Reduced bias toward dominant celestial classes without duplicating samples.'], ['Mutual information selection', 'Kept the strongest 50 signals while limiting noise and overfitting.']],
    challenges: ['Working with class imbalance across stars, galaxies, and quasars.', 'Extracting robust visual signals from FITS imagery.', 'Maintaining nearly identical training and test performance.'],
  },
  'route-sense': {
    domain: 'Agentic AI · Logistics',
    problem: 'Detect supply-chain disruption risk early enough to recommend interventions before a shipment breaches its SLA.',
    approach: 'A continuous agent loop combines predictive risk scoring, discrete-event simulation, geospatial context, and Gemini reasoning inside a human-approved operations workflow.',
    metrics: [['60+', 'Simulated cities'], ['05', 'Agent loop stages'], ['03', 'Risk signal families'], ['01', 'Operations command center']],
    architecture: [['Observe', 'Shipment, traffic, weather, carrier data'], ['Detect', 'Gradient boosting delay prediction'], ['Reason', 'Root-cause and tradeoff analysis'], ['Act', 'Intervention recommendation'], ['Learn', 'Outcome feedback into future decisions']],
    decisions: [['LangGraph orchestration', 'Made agent state and decision transitions explicit and auditable.'], ['Simulation before intervention', 'Allowed proposed actions to be evaluated before affecting operations.'], ['Human-in-the-loop approvals', 'Kept high-impact logistics actions reviewable.']],
    challenges: ['Combining live and simulated signals into one risk model.', 'Explaining agent decisions to operations users.', 'Maintaining geospatial and workflow state across services.'],
  },
  'elevate-ai': {
    domain: 'Applied AI · Career Technology',
    problem: 'Turn an uploaded resume into specific, useful feedback and relevant job discovery instead of a generic score.',
    approach: 'The system extracts structured candidate signals, evaluates ATS readiness, compares skills against target roles, and surfaces matched opportunities with prioritized recommendations.',
    metrics: [['01', 'Resume-to-role flow'], ['05', 'Analysis modules'], ['02', 'AI + jobs integrations'], ['100%', 'Actionable output']],
    architecture: [['Upload', 'Resume document'], ['Parse', 'Skills, experience, education'], ['Evaluate', 'ATS and gap analysis'], ['Match', 'Relevant job opportunities'], ['Recommend', 'Prioritized next steps']],
    decisions: [['Structured extraction first', 'Converted free-form resumes into signals reusable across scoring and matching.'], ['Visual skill-gap analysis', 'Made recommendations easier to prioritize than prose-only feedback.'], ['One connected workflow', 'Kept analysis, discovery, and recommendations in context.']],
    challenges: ['Extracting consistent structure from varied resume formats.', 'Keeping recommendations specific rather than generic.', 'Balancing resume quality with role relevance.'],
  },
  biosentinel: {
    domain: 'Security · Machine Learning',
    problem: 'Detect account takeover after login by identifying behavioral drift during an active session.',
    approach: 'A real-time telemetry pipeline batches interaction behavior into five-second windows, scores anomalies against enrolled profiles, and triggers re-authentication when risk crosses a threshold.',
    metrics: [['34', 'Behavioral features'], ['05s', 'Scoring windows'], ['02', 'Model families'], ['24/7', 'Session monitoring']],
    architecture: [['Capture', 'Keyboard, mouse, scroll telemetry'], ['Window', 'Five-second event batches'], ['Score', 'Isolation Forest + Random Forest'], ['Decide', 'Risk threshold evaluation'], ['Respond', 'Force re-authentication']],
    decisions: [['Per-user models', 'Behavior is personal, so global baselines would create avoidable false positives.'], ['Continuous scoring', 'Protected the session after the initial login event.'], ['Clean-session adaptation', 'Allowed profiles to evolve while blocking model-poisoning attempts.']],
    challenges: ['Distinguishing normal behavioral variation from takeover.', 'Streaming telemetry without disrupting the user.', 'Updating profiles without learning from anomalous sessions.'],
  },
};

const fallbackCaseStudy = (project: Project): CaseStudy => ({
  domain: project.subtitle,
  problem: project.description,
  approach: project.impact ?? 'The system was designed as a focused engineering response to the core user and operational requirements.',
  metrics: [['01', 'End-to-end system'], [String(project.tags.length).padStart(2, '0'), 'Core technologies'], [project.year, 'Build year'], [project.viewLabel === 'Currently Working' ? 'WIP' : 'Live', 'Current state']],
  architecture: (project.keyFeatures ?? ['System design: Architecture is being documented.']).slice(0, 5).map((feature) => {
    const [title, ...detail] = feature.split(':');
    return [title, detail.join(':').trim() || 'Core implementation layer'];
  }),
  decisions: (project.keyFeatures ?? [
    'Service boundaries: Separate responsibilities so individual workflows can evolve independently.',
    'End-to-end integration: Keep the product experience connected across frontend, backend, and data layers.',
    'Incremental delivery: Build the core workflow first, then expand capability without destabilizing it.',
  ]).slice(0, 3).map((feature) => {
    const [title, ...detail] = feature.split(':');
    return [title, detail.join(':').trim() || 'Selected to support the core product workflow.'];
  }),
  challenges: ['Translating product requirements into a reliable technical workflow.', 'Balancing implementation scope with clarity and maintainability.', 'Delivering a cohesive end-to-end experience.'],
});

export const ProjectDetailPage = ({ project, nextProject }: { project: Project; nextProject: Project }) => {
  const ref = useRef<HTMLElement>(null);
  const accent = project.color;
  const study = CASE_STUDIES[project.slug] ?? fallbackCaseStudy(project);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.35 });

  return (
    <main ref={ref} className="min-h-screen bg-black text-[var(--foreground)]" style={{ '--project-accent': accent } as React.CSSProperties}>
      <motion.div className="fixed left-0 top-0 z-50 h-0.5 w-full origin-left" style={{ scaleX: progress, backgroundColor: accent }} />

      <div className="mx-auto max-w-[100rem] px-5 pb-20 pt-6 md:px-10">
        <nav className="flex items-center justify-between border-b border-white/15 pb-4">
          <Link
            href="/projects"
            className="inline-flex min-h-11 items-center gap-3 border border-white/20 px-5 font-sans text-sm font-medium text-neutral-200 transition-[background-color,border-color,color] duration-150 hover:border-white/60 hover:bg-white/5 hover:text-white"
          >
            <span aria-hidden="true">←</span> Back to projects
          </Link>
          <span className="font-mono text-[10px] text-neutral-500">{project.num} / 08 · {project.year}</span>
        </nav>

        <header className="grid gap-10 border-b border-white/15 py-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(16rem,0.55fr)] lg:items-end">
          <div>
            <p className="text-sm" style={{ color: accent }}>{study.domain}</p>
            <h1 className="font-geist mt-5 max-w-[24ch] text-wrap-balance text-[clamp(2.6rem,5.5vw,5.5rem)] font-semibold uppercase leading-[0.9] tracking-[-0.04em]">
              {project.title}
            </h1>
            <p className="mt-7 max-w-[65ch] text-pretty text-[clamp(1.05rem,1.7vw,1.4rem)] leading-8 text-neutral-300">{study.problem}</p>
            {project.viewHref && (
              <a href={project.viewHref} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-3 border-b pb-2 text-sm transition-colors hover:text-white" style={{ borderColor: accent, color: accent }}>
                {project.viewLabel ?? 'Open project'} ↗
              </a>
            )}
          </div>
          <div className="relative h-48 overflow-hidden border border-white/12 bg-neutral-950 lg:h-64">
            <Image src={project.image} alt={`${project.title} interface`} fill priority unoptimized sizes="(max-width: 1024px) 100vw, 32vw" className={`${project.imageClassName ?? 'object-cover'} opacity-75`} />
          </div>
        </header>

        <section className="grid gap-px border-b border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {study.metrics.map(([value, label]) => (
            <div key={label} className="bg-black px-4 py-6">
              <strong className="block text-[clamp(1.8rem,3vw,3rem)] font-semibold tracking-[-0.03em]" style={{ color: accent }}>{value}</strong>
              <span className="mt-2 block text-xs text-neutral-500">{label}</span>
            </div>
          ))}
        </section>

        <section className="grid gap-6 border-b border-white/15 py-8 md:grid-cols-[13rem_minmax(0,1fr)] md:items-start">
          <div>
            <h2 className="text-lg font-semibold uppercase tracking-[-0.02em]">Technologies used</h2>
            <p className="mt-2 text-xs leading-5 text-neutral-600">{project.tags.length} core tools and platforms</p>
          </div>
          <ul className="flex flex-wrap gap-2">
            {project.tags.map((technology) => (
              <li
                key={technology}
                className="border border-white/15 bg-white/[0.025] px-3 py-2 text-xs text-neutral-300"
                style={{ borderColor: `${accent}55` }}
              >
                {technology}
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-10 border-b border-white/15 py-14 lg:grid-cols-[minmax(14rem,0.5fr)_minmax(0,1.5fr)] lg:py-20">
          <div>
            <h2 className="text-3xl font-semibold uppercase tracking-[-0.03em]">System architecture</h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-neutral-500">{study.approach}</p>
          </div>
          <ol className="grid border-l border-t border-white/12 sm:grid-cols-2">
            {study.architecture.map(([stage, description], index) => (
              <li key={stage} className="border-b border-r border-white/12 p-5">
                <span className="font-mono text-[10px]" style={{ color: accent }}>{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-8 text-lg font-medium text-neutral-100">{stage}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-500">{description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="border-b border-white/15 py-14 lg:py-20">
          <h2 className="text-3xl font-semibold uppercase tracking-[-0.03em]">Engineering decisions</h2>
          <div className="mt-8 border-t border-white/12">
            {study.decisions.map(([decision, reason], index) => (
              <article key={decision} className="grid gap-3 border-b border-white/12 py-6 md:grid-cols-[3rem_minmax(14rem,0.55fr)_minmax(0,1fr)] md:gap-6">
                <span className="font-mono text-[10px]" style={{ color: accent }}>{String(index + 1).padStart(2, '0')}</span>
                <h3 className="text-lg font-medium text-neutral-100">{decision}</h3>
                <p className="max-w-[70ch] text-sm leading-6 text-neutral-400">{reason}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-10 border-b border-white/15 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <h2 className="text-3xl font-semibold uppercase tracking-[-0.03em]">Challenges</h2>
            <ul className="mt-7 border-t border-white/12">
              {study.challenges.map((challenge) => <li key={challenge} className="border-b border-white/12 py-4 text-sm leading-6 text-neutral-400">{challenge}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-semibold uppercase tracking-[-0.03em]">Result</h2>
            <p className="mt-7 max-w-[65ch] text-pretty text-lg leading-8 text-neutral-300">{project.impact ?? 'The system is currently being developed and evaluated.'}</p>
            <p className="mt-8 border-t border-white/12 pt-5 text-xs leading-6 text-neutral-500">{project.techStack ?? project.tags.join(' · ')}</p>
          </div>
        </section>

        <Link
          href={`/projects/${nextProject.slug}`}
          className="group mt-12 flex min-h-72 flex-col justify-between gap-10 border border-black/20 p-6 text-black transition-[filter,transform] duration-200 hover:brightness-105 active:scale-[0.995] md:min-h-80 md:p-10"
          style={{ backgroundColor: nextProject.color }}
        >
          <div className="flex items-center justify-between gap-5">
            <p className="text-xs font-medium text-black/65">Next case study</p>
            <span className="inline-flex min-h-10 items-center gap-3 border border-black/30 px-4 text-xs font-medium text-black transition-colors group-hover:border-black/70">
              Open project <span aria-hidden="true">→</span>
            </span>
          </div>
          <div className="flex items-end justify-between gap-8">
            <h2 className="font-geist mt-3 max-w-[24ch] text-[clamp(1.8rem,4vw,3.8rem)] font-semibold uppercase leading-[0.95] tracking-[-0.035em]">{nextProject.title}</h2>
            <span className="hidden text-5xl text-black/45 transition-transform group-hover:translate-x-2 md:block" aria-hidden="true">→</span>
          </div>
        </Link>
      </div>
    </main>
  );
};
