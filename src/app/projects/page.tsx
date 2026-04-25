import { ProjectsPageContent } from '@/components/ProjectsPageContent';

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
  return <ProjectsPageContent projects={projects} />;
}
