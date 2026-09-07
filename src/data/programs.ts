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
    degree: "All Degrees",
    year: "1st / 2nd / 3rd Year",
    title: "AI Full Stack Developer Pro: Python & JS Edition",
    short: "A future-ready program for students who want to build strong coding, full stack, and AI integration skills before entering final placement season.",
    seats: { total: 30, filled: 18 },
    fee: "₹14,999",
    badge: "Skill-Upgrade",
    overview: {
      introduction: "This program is designed for students from BCA, BSc, MCA, BE, and BTech who want to build strong development skills early. It focuses on programming fundamentals, full stack development, real-world project building, and AI-powered workflows.",
      mentorship: "Weekly live mentoring, doubt-clearing sessions, project reviews, coding practice, and guidance from industry mentors working in modern web and AI-based product development.",
      careerSupport: "Students will build a strong GitHub profile, LinkedIn presence, ATS-ready resume, and project portfolio so they are prepared for internships and future placement opportunities.",
      aiIntegration: "The program includes AI-assisted development using modern tools for coding, debugging, documentation, project acceleration, and building AI-powered full stack applications."
    },
    mentors: {
      countries: ["India", "USA", "UK"],
      experience: "5+ years in Software Development",
      roles: [
        "Full Stack Developers",
        "AI Full Stack Engineers",
        "Frontend & Backend Mentors",
        "Career & Portfolio Coaches"
      ]
    },
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Python",
      "Flask / FastAPI",
      "SQL / MongoDB",
      "Git & GitHub",
      "REST APIs",
      "AI Tools & API Integration"
    ],
    projects: {
      total: 6,
      highlights: [
        "Personal Portfolio Website — responsive portfolio with modern UI",
        "Task Management App — full stack CRUD project with authentication",
        "AI Resume Builder — app that helps generate professional resumes",
        "Student Dashboard — role-based dashboard with analytics",
        "AI Content Generator — full stack app using AI APIs",
        "Capstone Project — end-to-end AI Full Stack Developer project"
      ]
    },
    modules: [
      {
        title: "Module 1: Programming & Web Foundations",
        topics: [
          "Programming Logic",
          "JavaScript Fundamentals",
          "Python Basics",
          "HTML & CSS",
          "Git and GitHub"
        ]
      },
      {
        title: "Module 2: Frontend Development",
        topics: [
          "React Components",
          "Hooks and State Management",
          "Responsive UI Design",
          "API Integration",
          "Project Structuring"
        ]
      },
      {
        title: "Module 3: Backend & Database",
        topics: [
          "Python Backend Development",
          "REST API Building",
          "Authentication Basics",
          "SQL / NoSQL Databases",
          "Deployment Basics"
        ]
      },
      {
        title: "Module 4: AI Full Stack Development",
        topics: [
          "Using AI APIs in Projects",
          "Prompt Engineering Basics",
          "AI Workflow Automation",
          "Building AI-Powered Features",
          "Project Optimization with AI Tools"
        ]
      }
    ]
  },

  {
    id: "ai-fullstack-placement-program",
    degree: "All Degrees",
    year: "Final Year / Job Seekers",
    title: "AI Full Stack Developer — Placement Program",
    short: "A placement-focused program for final-year students and graduates who want job-ready full stack and AI skills, with a reimbursement model where up to 60–80% of the program fee is refunded based on placement outcomes.",
    seats: { total: 10, filled: 6 },
    fee: "With Placement",
    badge: "Placement-Ready",
    overview: {
      introduction: "This program is designed for students who are close to graduation or actively looking for jobs. It focuses on advanced AI full stack development, real-time projects, interview preparation, and complete placement support.",
      mentorship: "Students receive intensive mentoring through mock interviews, project architecture reviews, coding rounds, and job-readiness training from experienced industry professionals.",
      careerSupport: "This is a placement-driven program with support for resume building, LinkedIn optimization, mock interviews, aptitude preparation, communication training, and job application strategy until placement.",
      aiIntegration: "The program prepares students for AI Full Stack Developer roles by teaching how to build scalable applications with AI integrations, automation workflows, and production-ready deployment practices."
    },
    mentors: {
      countries: ["India", "USA", "Canada"],
      experience: "6+ years in Product & Engineering Teams",
      roles: [
        "Senior Full Stack Engineers",
        "AI Product Developers",
        "Interview Mentors",
        "Placement Support Specialists"
      ]
    },
    techStack: [
      "React.js / Next.js",
      "Python",
      "Flask / FastAPI",
      "Node.js Basics",
      "SQL / MongoDB",
      "Authentication & Security",
      "Deployment",
      "AI API Integration",
      "System Design Basics",
      "DSA for Interviews"
    ],
    projects: {
      total: 5,
      highlights: [
        "AI Hiring Assistant — job screening and resume analysis platform",
        "AI Learning Management System — smart education platform with dashboards",
        "E-Commerce AI Assistant — shopping and recommendation platform",
        "Interview Preparation Portal — coding, tests, and student analytics system",
        "Industry Capstone — production-ready AI full stack application"
      ]
    },
    modules: [
      {
        title: "Module 1: Advanced Full Stack Development",
        topics: [
          "Scalable Frontend Architecture",
          "Advanced Backend APIs",
          "Authentication & Authorization",
          "Database Design",
          "Production Deployment"
        ]
      },
      {
        title: "Module 2: AI Integration in Real Applications",
        topics: [
          "Working with AI APIs",
          "AI Chat Features",
          "Automation Tools",
          "Text / Content Generation Features",
          "Intelligent User Workflows"
        ]
      },
      {
        title: "Module 3: Placement Preparation",
        topics: [
          "DSA Basics for Interviews",
          "JavaScript and Python Interview Questions",
          "Mock Technical Interviews",
          "HR and Communication Rounds",
          "Resume and LinkedIn Optimization"
        ]
      },
      {
        title: "Module 4: Career & Placement Support",
        topics: [
          "Job Applications Strategy",
          "Internship and Placement Guidance",
          "Portfolio Review",
          "Referral Preparation",
          "Offer and Career Guidance"
        ]
      }
    ]
  },

   {
        id: "bca-2",
        degree: "BCA",
        year: "1st & 2nd Year",
        title: "BCA — Full Stack Product Track (1st & 2nd Year)",
        short: "Shift from 'Coder' to 'Developer'. Build scalable, database-backed applications with modern cloud workflows.",
        seats: { total: 30, filled: 20 },
        fee: "₹5,999",
        badge: "Specialization",
        overview: {
            introduction: "This year focuses on the 'MERN' stack and Cloud deployment. You will move away from local files to real databases, authentication systems, and server-side logic used by startups.",
            mentorship: "Architecture reviews with Full-Stack Leads from Bengaluru & Toronto. Learn how to structure backend APIs and manage database costs.",
            careerSupport: "Internship Accelerator: Mock technical interviews (System Design Lite) and outreach templates for startup founders.",
            aiIntegration: "AI-Driven Testing: Using AI tools to write unit tests (Jest) and generate documentation for your APIs automatically."
        },
        mentors: {
            countries: ["India (Bengaluru)", "Canada", "USA"],
            experience: "6-10 years Full Stack",
            roles: ["Startup CTOs", "Full Stack Lead Developers", "Cloud Architects"]
        },
        techStack: ["React.js", "Node.js (Express)", "MongoDB / PostgreSQL", "AWS (EC2/S3 Basics)", "Redux Toolkit"],
        projects: {
            total: 5,
            highlights: [
                "CrowdFund Platform — A Kickstarter clone with secure payment gateway integration (Stripe)",
                "Real-Time Chat Engine — A Slack-like app using Socket.io for live messaging",
                "The Social Feed — A media-heavy social network backend with image optimization",
                "E-Commerce Dashboard — Admin panel with data visualization and inventory management",
                "AI Content Generator — A SaaS wrapper around OpenAI API for generating blog posts"
            ]
        },
        modules: [
            { title: "Backend Architecture", topics: ["RESTful API Design", "Database Modeling (SQL vs NoSQL)", "Authentication (JWT)"] },
            { title: "Advanced Frontend", topics: ["Global State Management", "Performance Optimization", "React Query"] },
            { title: "DevOps Lite", topics: ["Docker Basics", "CI/CD Pipelines", "Deploying to Vercel/Render"] }
        ]
    },
    {
        id: "paid-internship-bca-mca",
        degree: "BCA / MCA",
        year: "Any",
        title: "Paid Industry Internship — BCA & MCA",
        short: "A hands-on paid internship working on live commercial projects with senior developers. Get paid while you learn and build your real-world experience.",
        seats: { total: 20, filled: 20 },
        fee: "Paid Internship",
        badge: "Internship",
        overview: {
            introduction: "Stop doing dummy projects. Join our development team as an intern and work on live client projects. This is a paid internship designed exclusively for BCA and MCA students.",
            mentorship: "Daily standups, code reviews, and direct mentorship from our Lead Engineers.",
            careerSupport: "You will get an authentic experience letter, a professional certificate, a stipend, and direct placement opportunities with top startups.",
            aiIntegration: "Learn how we use AI tools in production environments for speed and code quality."
        },
        mentors: {
            countries: ["India", "USA"],
            experience: "5+ years Industry Experience",
            roles: ["Tech Leads", "Senior Full Stack Engineers", "Product Managers"]
        },
        techStack: ["React.js", "Node.js", "Tailwind CSS", "MongoDB", "AWS Basics"],
        projects: {
            total: 3,
            highlights: [
                "Live Client Project — Front-end implementation and bug fixing.",
                "Internal Tooling — Building a dashboard for internal company use.",
                "API Integration — Working with third-party services and webhooks."
            ]
        },
        modules: [
            { title: "Onboarding & Setup", topics: ["Git Workflows", "Project Architecture", "Agile Practices"] },
            { title: "Feature Development", topics: ["Component Design", "State Management", "API Consumption"] },
            { title: "Production Deployment", topics: ["Code Reviews", "Testing Basics", "CI/CD Deployment"] }
        ]
    },
    {
        id: "advanced-frontend-engineering",
        degree: "All Degrees",
        year: "Any",
        title: "Advanced Frontend Engineering with React & Next.js",
        short: "Master the modern frontend ecosystem. Build blazing fast, SEO-friendly, and accessible web applications used by top tech companies.",
        seats: { total: 40, filled: 40 },
        fee: "₹8,999",
        badge: "Frontend-Mastery",
        overview: {
            introduction: "Move beyond basic HTML/CSS. This course takes you deep into React and Next.js, teaching you how to build complex user interfaces, manage global state, and optimize web performance.",
            mentorship: "Learn from frontend architects who have built applications serving millions of users.",
            careerSupport: "Build a stunning portfolio that guarantees interview callbacks for frontend developer roles.",
            aiIntegration: "Use AI for generating UI components, writing tests, and optimizing web accessibility."
        },
        mentors: {
            countries: ["India", "UK"],
            experience: "4+ years Frontend Architecture",
            roles: ["UI/UX Specialists", "Frontend Leads", "Web Performance Experts"]
        },
        techStack: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        projects: {
            total: 4,
            highlights: [
                "E-Commerce Storefront — A fully functional shopping app with a cart and checkout.",
                "SaaS Dashboard — Complex UI with data tables, charts, and dark mode.",
                "Blog Platform — SEO optimized site using Static Site Generation.",
                "Interactive Web Portfolio — A portfolio with advanced 3D or Framer Motion animations."
            ]
        },
        modules: [
            { title: "React Deep Dive", topics: ["Custom Hooks", "Context API & Redux", "Performance (useMemo/useCallback)"] },
            { title: "Next.js & SSR", topics: ["Server Components", "Routing & Layouts", "Data Fetching"] },
            { title: "Styling & Animation", topics: ["Tailwind Best Practices", "Framer Motion", "Responsive Design Systems"] }
        ]
    }
];