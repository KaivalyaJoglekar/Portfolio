import Link from 'next/link';

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

const projects: Project[] = [
  {
    slug: 'route-sense',
    num: '01',
    title: 'RouteSense',
    subtitle: 'Autonomous Logistics AI Agent',
    description:
      'RouteSense is an autonomous AI agent and end-to-end logistics monitoring platform designed to continuously monitor global supply chains, detect risks before they cascade, and autonomously intervene to prevent SLA breaches.',
    tags: ['Next.js 14', 'React', 'Tailwind CSS', 'FastAPI', 'PostgreSQL', 'PostGIS', 'LangGraph', 'Scikit-learn', 'SimPy', 'Google Gemini API', 'Docker'],
    year: '2026',
    period: 'Mar 2026 — Mar 2026',
    keyFeatures: [
      'Autonomous AI Pipeline: Engineered a continuous observe-detect-reason-decide-act-learn loop using LangGraph to dynamically manage and secure logistics networks.',
      'Predictive Risk Modeling: Developed a custom Gradient Boosting ML model with scikit-learn to predict shipment delays based on live traffic, weather, and carrier reliability.',
      'Generative AI Reasoning: Integrated Google Gemini 2.0 Flash to generate human-readable root cause analysis, evaluate decision tradeoffs, and provide intelligent tiebreakers.',
      'Discrete-Event Simulation: Built a robust SimPy-based simulation engine to model complex global logistics scenarios across 60+ cities with random disruptions and capacity shifts.',
      'Geospatial Full-Stack Dashboard: Created an interactive Next.js command center with PostGIS mapping, predictive KPIs, and human-in-the-loop approvals via a FastAPI backend.',
    ],
    techStack:
      'Next.js 14, React, Tailwind CSS, FastAPI, PostgreSQL, PostGIS, LangGraph, scikit-learn, SimPy, Google Gemini API, Docker.',
    impact:
      'RouteSense demonstrates how agentic AI and predictive machine learning can transform reactive logistics into proactive, resilient operations.',
    viewHref: 'https://github.com/kanishjn8/CC2 0',
    viewLabel: 'View Repository',
    color: '#d4a574',
  },
  {
    slug: 'elevate-ai',
    num: '02',
    title: 'Elevate AI',
    subtitle: 'Resume Analysis & Career Roadmap Platform',
    description:
      'Elevate AI is an intelligent career analysis platform that uses Google Gemini to provide personalized insights and recommendations. It acts as a smart career co-pilot by analyzing uploaded resumes and generating actionable feedback on career paths, skill gaps, and resume quality.',
    tags: ['React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Recharts', 'FastAPI', 'Google Gemini API'],
    year: '2025',
    period: 'Jul 2025 — Aug 2025',
    keyFeatures: [
      'AI-Powered Resume Parsing: Uses Gemini to extract and evaluate skills, experience, and education from uploaded resumes.',
      'Career Path Matching: Identifies relevant opportunities and computes match percentages using extracted technical and soft-skill signals.',
      'ATS Optimization & Scoring: Evaluates resume compatibility and provides clear score-driven feedback for structure and content improvement.',
      'Interactive Skill Gap Analysis: Uses radar and bar charts to compare current skill levels against target role requirements.',
      'Actionable Recommendations: Generates personalized upskilling suggestions, resources, and focused next-step guidance.',
    ],
    techStack:
      'React 18, TypeScript, Tailwind CSS, Framer Motion, Recharts, Python (FastAPI), Google Gemini API.',
    impact:
      'Elevate AI shows the practical value of generative AI in professional development by combining LLM reasoning with interactive data visualization.',
    viewHref: 'https://elevate-ai-psi.vercel.app/',
    viewLabel: 'View Live App',
    color: '#74a5d4',
  },
  {
    slug: 'celestial-body-classification',
    num: '03',
    title: 'SDSS Astronomical Object Classification',
    subtitle: 'End-to-End Celestial Body Classification Pipeline',
    description:
      'An end-to-end machine learning pipeline designed to accurately classify celestial bodies, including galaxies, quasars, and stars, from Sloan Digital Sky Survey FITS images using a Support Vector Machine.',
    tags: ['Python', 'scikit-learn', 'NumPy', 'SciPy', 'Matplotlib', 'OpenCV', 'Astropy', 'Seaborn'],
    year: '2026',
    keyFeatures: [
      'Advanced Feature Engineering: Extracted and engineered 61 complex features, including morphological descriptors, Hu moments, and LBP texture statistics, then optimized to the top 50 using Mutual Information Classification.',
      'Robust SVM Pipeline: Built a generalized classification pipeline with an RBF kernel, StandardScaler, and balanced class weighting to handle real-world data imbalances.',
      'Comprehensive Evaluation and Visualization: Generated automated high-resolution visual analytics including confusion matrices across datasets, precision-recall analysis, and detailed per-class performance metrics.',
      'High-Speed Inference and Generalization: Achieved 74.63% test accuracy with effectively zero overfitting compared to 74.44% training accuracy, along with inference times of about 0.01 ms per sample.',
    ],
    techStack:
      'Python, scikit-learn, NumPy, SciPy, Matplotlib, OpenCV, Astropy, and Seaborn for data processing, feature extraction, visualization, and machine learning operations.',
    impact:
      'Delivers an efficient, reproducible, and mathematically rigorous solution for astronomical object categorization, handling class imbalance well while demonstrating strong generalization on unseen celestial data.',
    viewHref: 'https://github.com/kanishjn8/Classification-of-Celestial-Bodies-using-SVM',
    viewLabel: 'View Repository',
    color: '#a5d474',
  },
  {
    slug: 'momento',
    num: '04',
    title: 'Momento',
    subtitle: 'Productivity & Self-Reflection Application',
    description:
      'Momento is a productivity and self-reflection application designed to help users organize tasks, maintain focus, and track progress through a structured and intuitive interface.',
    tags: ['Flutter', 'Dart', 'Firebase Authentication', 'Firebase Realtime Database'],
    year: '2025',
    keyFeatures: [
      'Advanced Task Management: Smart calendar, 24-hour timeline, and a three-tier priority system.',
      'Firebase-Integrated Journaling: Rich-text journal with mood tracking and favorites.',
      'Focus Mode: Customizable Pomodoro timer with detailed session tracking.',
      'Analytics Dashboard: Interactive charts for productivity and performance insights.',
    ],
    techStack:
      'Flutter, Firebase Realtime Database, and Firebase Authentication for secure, real-time synchronization of user data.',
    impact:
      'Momento brings planning, focus, reflection, and analytics into a single mobile workflow to help users stay consistent and self-aware.',
    viewHref: 'https://github.com/KaivalyaJoglekar/Momento',
    viewLabel: 'View Repository',
    color: '#d474a5',
  },
  {
    slug: 'neuro-stream',
    num: '05',
    title: 'NeuroStream',
    subtitle: 'AI Video Platform Microservice System',
    description:
      'Microservice-based AI video platform for upload, processing, search, and analytics with a focus on workflow orchestration and frontend-backend integration.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'S3-Compatible Storage', 'Next.js', 'Render', 'Vercel'],
    year: '2026',
    viewLabel: 'Currently Working',
    color: '#d4a574',
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-[var(--foreground)] px-6 md:px-12 py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(212,165,116,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(212,165,116,0.35) 1px, transparent 1px)',
            backgroundSize: '90px 90px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <span className="text-xs text-neutral-500 tracking-[0.3em] uppercase block mb-4">/PROJECTS</span>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase">All Projects</h1>
        <p className="text-neutral-500 mt-5 max-w-2xl leading-relaxed">
          Detailed project snapshots with stack, context, and outcomes.
        </p>

        <Link
          href="/?from=projects&skipPreloader=1&section=work"
          className="inline-flex items-center gap-3 mt-8 px-6 py-3 border border-neutral-800 text-sm tracking-[0.14em] uppercase text-neutral-300 hover:border-[#d4a574] hover:text-[#d4a574] transition-colors"
        >
          Back To Selected Work
          <span>↩</span>
        </Link>

        <div className="mt-12 space-y-6">
          {projects.map((project) => (
            <article
              id={project.slug}
              key={project.slug}
              className="border border-neutral-900 bg-black/60 backdrop-blur-sm rounded-2xl p-7 md:p-10 scroll-mt-28"
            >
              <div className="flex items-start justify-between gap-6 flex-wrap">
                <div>
                  <p className="text-sm text-neutral-600 tracking-[0.16em] uppercase">
                    {project.num} • {project.period ?? project.year}
                  </p>
                  <h2 className="text-3xl md:text-5xl font-black mt-3" style={{ color: project.color }}>
                    {project.title}
                  </h2>
                  <p className="text-neutral-400 mt-2 text-lg">{project.subtitle}</p>
                </div>
              </div>

              <p className="text-neutral-300 mt-7 leading-relaxed">{project.description}</p>

              {project.keyFeatures && project.keyFeatures.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xs text-neutral-500 tracking-[0.22em] uppercase mb-4">Key Features</h3>
                  <div className="space-y-3">
                    {project.keyFeatures.map((feature) => (
                      <p key={feature} className="text-neutral-300 leading-relaxed">
                        {feature}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {project.techStack && (
                <div className="mt-8">
                  <h3 className="text-xs text-neutral-500 tracking-[0.22em] uppercase mb-3">Tech Stack</h3>
                  <p className="text-neutral-300 leading-relaxed">{project.techStack}</p>
                </div>
              )}

              {project.impact && (
                <div className="mt-8">
                  <h3 className="text-xs text-neutral-500 tracking-[0.22em] uppercase mb-3">Impact</h3>
                  <p className="text-neutral-300 leading-relaxed">{project.impact}</p>
                </div>
              )}

              <div className="mt-8">
                {project.viewHref && project.viewHref !== '#' ? (
                  <a
                    href={project.viewHref.replaceAll(' ', '%20')}
                    target={project.viewHref.startsWith('http') ? '_blank' : undefined}
                    rel={project.viewHref.startsWith('http') ? 'noreferrer' : undefined}
                    className="inline-flex items-center gap-3 px-6 py-3 border border-neutral-800 text-sm tracking-[0.14em] uppercase text-neutral-300 hover:border-[#d4a574] hover:text-[#d4a574] transition-colors"
                  >
                    {project.viewLabel ?? 'View here'}
                    <span>↗</span>
                  </a>
                ) : (
                  <span
                    aria-disabled="true"
                    className="inline-flex items-center gap-3 px-6 py-3 border border-neutral-900 text-sm tracking-[0.14em] uppercase text-neutral-600 cursor-not-allowed"
                  >
                    {project.viewLabel ?? 'View here'}
                    <span>{project.viewLabel ? '•' : '↗'}</span>
                  </span>
                )}
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 text-xs border border-neutral-800 uppercase tracking-wider"
                    style={{ color: project.color, backgroundColor: 'rgba(255,255,240,0.03)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
