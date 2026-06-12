export type Project = {
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
  image: string;
  imageClassName?: string;
};

export const projects: Project[] = [
  {
    slug: 'internship-fair-technical-research-cell',
    num: '01',
    title: 'Internship Fair - Technical & Research Cell',
    subtitle: 'Deployed Student Internship Portal',
    description:
      'A responsive event platform created and deployed for the Technical & Research Cell Internship Fair, supporting student participation, opportunity discovery, registration workflows, and live event updates.',
    tags: ['Web Development', 'Responsive UI', 'Event Registration', 'Vercel'],
    year: '2025',
    keyFeatures: [
      'Event Registration: Built registration-ready workflows for student participation.',
      'Opportunity Discovery: Structured internship information for fast scanning and access.',
      'Live Deployment: Delivered iterative reliability updates before and during the event.',
    ],
    techStack: 'Responsive web development, event registration workflows, and Vercel deployment.',
    impact: 'Delivered an official live platform used to support the Technical & Research Cell Internship Fair.',
    viewHref: 'https://trc-internshipfair.vercel.app/',
    viewLabel: 'View Live Site',
    image: '/projects/internship-fair-technical-research-cell.png',
    color: '#ef4444',
  },
  {
    slug: 'bombay-research-summit',
    num: '02',
    title: 'Bombay Research Summit',
    subtitle: 'Deployed Research Event Website',
    description:
      'An official event website deployed for the Bombay Research Summit, presenting the summit, research-focused programming, event photography, and participation information through a responsive interface.',
    tags: ['Web Development', 'Responsive UI', 'Research Event', 'Netlify'],
    year: '2025',
    keyFeatures: [
      'Research Showcase: Presented summit programming and research-focused event content.',
      'Responsive Experience: Built reliable layouts across mobile and desktop devices.',
      'Live Deployment: Delivered and maintained the official event site on Netlify.',
    ],
    techStack: 'Responsive web development, event showcase interfaces, and Netlify deployment.',
    impact: 'Provided the official public-facing digital presence for the Bombay Research Summit.',
    viewHref: 'https://bombayresearchsummit.netlify.app/',
    viewLabel: 'View Live Site',
    image: '/projects/bombay-research-summit.png',
    imageClassName: 'object-contain p-4',
    color: '#4169e1',
  },
  {
    slug: 'route-sense',
    num: '03',
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
    viewHref: 'https://github.com/kanishjn8/CC2',
    viewLabel: 'View Repository',
    image: '/projects/route-sense.png',
    color: '#16a394',
  },
  {
    slug: 'elevate-ai',
    num: '04',
    title: 'Elevate AI',
    subtitle: 'AI Resume Analysis & Job Discovery Platform',
    description:
      'Elevate AI analyzes uploaded resumes, scores their strengths and gaps, and finds relevant job opportunities based on the candidate’s experience and skills. It combines personalized resume feedback, role matching, and focused career recommendations in one workflow.',
    tags: ['React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Recharts', 'FastAPI', 'Google Gemini API'],
    year: '2025',
    period: 'Jul 2025 — Aug 2025',
    keyFeatures: [
      'AI-Powered Resume Parsing: Uses Gemini to extract and evaluate skills, experience, and education from uploaded resumes.',
      'Job Discovery and Matching: Finds relevant job opportunities and computes match percentages using extracted technical and soft-skill signals.',
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
    image: '/projects/elevate-ai.png',
    color: '#ff5c39',
  },
  {
    slug: 'celestial-body-classification',
    num: '05',
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
    image: '/projects/celestial-body-classification.png',
    color: '#a5d474',
  },
  {
    slug: 'momento',
    num: '06',
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
    image: '/projects/momento.png',
    color: '#d474a5',
  },
  {
    slug: 'neuro-stream',
    num: '07',
    title: 'NeuroStream',
    subtitle: 'AI Video Platform Microservice System',
    description:
      'Microservice-based AI video platform for upload, processing, search, and analytics with a focus on workflow orchestration and frontend-backend integration.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'S3-Compatible Storage', 'Next.js', 'Render', 'Vercel'],
    year: '2026',
    viewLabel: 'Currently Working',
    image: '/projects/neuro-stream.png',
    color: '#7c6fd1',
  },
  {
    slug: 'biosentinel',
    num: '08',
    title: 'BioSentinel',
    subtitle: 'Continuous Behavioral Biometrics Authentication',
    description:
      'BioSentinel is a continuous, invisible second-factor authentication system designed to monitor session integrity after the initial login. It streams user interactions—like keystrokes, mouse movements, and scrolling—in real-time to an anomaly detection engine. By constantly scoring behavior windows against an enrolled user profile, it autonomously detects account takeovers and forces re-authentication the moment a session drifts, preventing unauthorized access post-login.',
    tags: ['React', 'FastAPI', 'WebSockets', 'scikit-learn', 'Python'],
    year: '2025',
    keyFeatures: [
      'Continuous Monitoring Pipeline: Engineered a real-time telemetry pipeline using React and FastAPI via WebSockets to dynamically capture, batch, and process behavioral events in 5-second windows.',
      'Anomaly Detection Models: Developed a per-user Isolation Forest and Random Forest machine learning architecture to accurately calculate risk scores based on 34 unique behavioral features and trigger re-authentication workflows.',
      'Adaptive Learning Engine: Integrated a Face ID-style adaptive learning system that continuously updates baseline profiles using clean sessions while strictly discarding anomalous sessions to completely block model-poisoning attacks.'
    ],
    techStack: 'React (Vite), FastAPI, Python, WebSockets, scikit-learn (Isolation Forest & Random Forest), SQLite, Pytest',
    impact: 'BioSentinel demonstrates how continuous behavioral biometrics and adaptive machine learning can transform one-time static logins into proactive, resilient, zero-trust session security.',
    viewHref: 'https://github.com/kanishjn8/BioSentinel',
    viewLabel: 'View Repository',
    image: '/projects/biosentinel.png',
    color: '#e05a78',
  },
];
