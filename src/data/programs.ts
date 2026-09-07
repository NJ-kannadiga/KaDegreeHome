export interface Program {
  id: string;
  degree: string;
  year: string;
  title: string;
  short: string;
  seats: { total: number; filled: number };
  fee: string;
  badge: string;
  overview: {
    introduction: string;
    mentorship: string;
    careerSupport: string;
    aiIntegration: string;
  };
  mentors: {
    countries: string[];
    experience: string;
    roles: string[];
  };
  techStack: string[];
  projects: {
    total: number;
    highlights: string[];
  };
  modules: {
    title: string;
    topics: string[];
  }[];
}

export const PROGRAMS: Program[] = [
  {
    id: "ai-fullstack-skill-upgrade",
    degree: "All Science & Tech Degrees",
    year: "1st / 2nd / 3rd Year & Graduates",
    title: "AI Full Stack Developer Pro: React, Python & JS Edition",
    short: "Master modern full stack engineering with React.js, Python, FastAPI/Flask, and generative AI APIs. Build real-world applications before entering placement season.",
    seats: { total: 30, filled: 18 },
    fee: "₹14,999",
    badge: "Flagship SDE Track",
    overview: {
      introduction: "This program is designed for BCA, MCA, B.E / B.Tech, and BSc students looking to build production-grade web applications. You will learn React.js for modern component-driven UIs, Python for robust backend APIs, and modern AI tools for intelligent application features.",
      mentorship: "Weekly live mentoring, code reviews, pair-programming syncs, and architecture reviews with experienced engineers.",
      careerSupport: "Build a standout GitHub repository, ATS-optimized resume, LinkedIn brand, and deployable portfolio.",
      aiIntegration: "Learn prompt engineering, OpenAI/HuggingFace API integration, AI-assisted debugging, and building intelligent features."
    },
    mentors: {
      countries: ["India", "USA", "UK"],
      experience: "5+ years in Software Engineering",
      roles: [
        "React & Full Stack Leads",
        "Python API Engineers",
        "AI Integration Specialists",
        "Career & Portfolio Coaches"
      ]
    },
    techStack: [
      "React.js",
      "JavaScript (ES6+)",
      "Python",
      "Flask / FastAPI",
      "HTML5 / CSS3",
      "Tailwind CSS",
      "SQL / MongoDB",
      "Git & GitHub",
      "REST APIs",
      "AI API Integration"
    ],
    projects: {
      total: 6,
      highlights: [
        "Personal Portfolio Website — Responsive React + Tailwind site",
        "Task Master Pro — Full-stack CRUD application with authentication",
        "AI Resume Generator — App using LLM APIs to generate formatted resumes",
        "Analytics Dashboard — Dynamic charts with REST API backend",
        "AI Content Assistant — Full stack SaaS wrapper around AI endpoints",
        "Capstone Project — End-to-end React + Python AI Full Stack app"
      ]
    },
    modules: [
      {
        title: "Module 1: Programming & Web Foundations",
        topics: [
          "Logic & Problem Solving",
          "JavaScript ES6+ Foundations",
          "Python Syntax & Data Types",
          "Git Version Control & GitHub"
        ]
      },
      {
        title: "Module 2: Modern Frontend with React.js",
        topics: [
          "React JSX & Component Patterns",
          "State Management & Hooks (useState, useEffect)",
          "REST API Fetching & State Synchronization",
          "Responsive Design with Tailwind CSS"
        ]
      },
      {
        title: "Module 3: Python Backend & Database Systems",
        topics: [
          "Python RESTful API Development (Flask/FastAPI)",
          "Database Schemas with SQL & MongoDB",
          "User Authentication (JWT)",
          "Deployment Basics (Vercel & Render)"
        ]
      },
      {
        title: "Module 4: AI Application Development",
        topics: [
          "Integrating Generative AI APIs",
          "Prompt Engineering for Developers",
          "Building Intelligent Application Workflows",
          "AI-Assisted Testing & Optimization"
        ]
      }
    ]
  },

  {
    id: "ai-fullstack-placement-program",
    degree: "Final Year & Graduates",
    year: "Final Year / Job Seekers",
    title: "AI Full Stack Developer — Placement Accelerator",
    short: "A targeted career placement program for final-year students and graduates focusing on advanced full stack development, DSA for interviews, mock technical rounds, and placement drives.",
    seats: { total: 15, filled: 9 },
    fee: "₹60,000 (Placement Support Model)",
    badge: "Placement-Ready",
    overview: {
      introduction: "Designed specifically for job seekers needing interview-ready skills. Includes structured technical interview prep, high-frequency DSA patterns, systemic mock interview rounds, and direct placement support.",
      mentorship: "Intensive 1-on-1 mock technical interviews, code optimization reviews, and placement drive preparation.",
      careerSupport: "Complete career roadmap: resume shortlisting, LinkedIn networking strategies, HR round coaching, and placement referral drives until offer letter.",
      aiIntegration: "Architecting scalable applications with AI capabilities, system design fundamentals, and enterprise deployment."
    },
    mentors: {
      countries: ["India", "USA", "Canada"],
      experience: "6+ years in Product Teams",
      roles: [
        "Senior SDEs from MNCs",
        "Technical Hiring Managers",
        "Placement Officers",
        "System Architects"
      ]
    },
    techStack: [
      "React.js / Next.js",
      "Python",
      "FastAPI",
      "Data Structures & Algorithms",
      "System Design Lite",
      "SQL & PostgreSQL",
      "Docker Basics",
      "Interview Sprint"
    ],
    projects: {
      total: 5,
      highlights: [
        "AI Hiring Assistant — Candidate screening platform",
        "E-Commerce Platform with Analytics — High-concurrency store",
        "Interview Prep Portal — Real-time coding test platform",
        "Capstone Production App — Deployed full stack application with docs"
      ]
    },
    modules: [
      {
        title: "Module 1: Advanced React & Python Full Stack",
        topics: [
          "Scalable Frontend Architecture",
          "Production REST API Patterns",
          "Authentication & Data Security",
          "Database Query Optimization"
        ]
      },
      {
        title: "Module 2: DSA & Technical Interview Mastery",
        topics: [
          "Arrays, Hash Maps, Pointers & Recursion",
          "Trees, Graphs & Search Algorithms",
          "Common Technical Interview Coding Patterns",
          "Time & Space Complexity Optimization"
        ]
      },
      {
        title: "Module 3: Placement Preparation Sprint",
        topics: [
          "Mock Technical Rounds with Senior Engineers",
          "HR & Behavioral Communication Training",
          "ATS-Engineered Resume & LinkedIn Building",
          "Job Application & Referral Strategy"
        ]
      }
    ]
  },

  {
    id: "paid-internship-bca-mca",
    degree: "All Science & Tech Students",
    year: "Any Academic Year & Switchers",
    title: "AI Industry Internship Program",
    short: "Work on live commercial project modules with daily standups, senior engineer code reviews, and an official ISO Certification Standard Credential. Open for all students & career switchers.",
    seats: { total: 25, filled: 20 },
    fee: "₹4,499",
    badge: "Live Project Track",
    overview: {
      introduction: "Stop working on dummy tutorials. Join our development team as an intern and build live production project features. Designed for BCA, MCA, B.E / B.Tech, BSc CS students, and anyone looking to transition into an AI software career.",
      mentorship: "Daily standups, code reviews, and direct guidance from Senior Tech Leads.",
      careerSupport: "Official ISO Credential, verified QR code project record, GitHub contribution history, and referral opportunities.",
      aiIntegration: "Use modern AI development tools in production environments for speed, code quality, and documentation."
    },
    mentors: {
      countries: ["India", "USA"],
      experience: "5+ years Industry Experience",
      roles: ["Tech Leads", "Senior Full Stack Engineers", "AI Architects"]
    },
    techStack: ["React.js", "Python", "Tailwind CSS", "PostgreSQL", "FastAPI", "Git Workflows"],
    projects: {
      total: 3,
      highlights: [
        "Live Commercial Module — Frontend implementation & API integration",
        "AI Internal Tooling — Analytics dashboard for business operations",
        "Production Deployment — CI/CD deployment & performance optimization"
      ]
    },
    modules: [
      { title: "Module 1: Onboarding & Setup", topics: ["Git Workflows", "Project Architecture", "Agile Standups"] },
      { title: "Module 2: Feature Engineering", topics: ["React Components", "State Management", "API Consumption"] },
      { title: "Module 3: Production Release", topics: ["Code Reviews", "ISO Certification", "Portfolio Hosting"] }
    ]
  }
];