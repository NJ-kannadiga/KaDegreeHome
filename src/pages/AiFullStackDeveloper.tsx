import React, { useState, useRef } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/layout/SEO";
import {
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Sparkles,
  Code2,
  Database,
  Cpu,
  Terminal,
  Layers,
  Award,
  Users,
  Briefcase,
  Laptop,
  Check,
  Zap,
  Globe,
  Star,
  ExternalLink,
} from "lucide-react";

// Existing images from project
import heroImg from "@assets/developer_hero.jpg";
import projectImg1 from "@assets/card_ai_commerce.jpg";
import projectImg2 from "@assets/purple_laptop.jpg";
import projectImg3 from "@assets/ai_command_center.jpg";
import mentorImg from "@assets/professional_developer.jpg";

/* --- Design Tokens --- */
const S = {
  mainBg: "#F7F4EE",
  secBg: "#EFEAE1",
  cardBg: "#FFFFFF",
  text: "#171717",
  muted: "#6B6464",
  burgundy: "#6B1830",
  burgundyLight: "#8B2945",
  border: "#DDD7CC",
  serif: '"Libre Caslon Text", Georgia, serif',
  sans: '"Source Sans 3", system-ui, sans-serif',
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function AiFullStackDeveloper() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [sliderIndex, setSliderIndex] = useState(0);

  // 6 Real-World Projects for Horizontal Slider
  const projects = [
    {
      id: "01",
      title: "AI Resume & Portfolio Intelligence",
      tag: "LLM + Vector Search",
      desc: "Full-stack application parsing candidate resumes, benchmarking skills against job descriptions, and recommending custom portfolio artifacts with live semantic scoring.",
      stack: ["React", "FastAPI", "Python", "ChromaDB", "Groq API"],
      img: projectImg1,
      outcome: "Deployed on cloud with sub-second analysis latency",
    },
    {
      id: "02",
      title: "Collaborative Real-Time Workspace",
      tag: "WebSockets + Distributed State",
      desc: "Multi-user whiteboard and rich-text workspace with live cursor tracking, conflict resolution, version histories, and encrypted room authentication.",
      stack: ["React", "TypeScript", "Node.js", "Socket.io", "MongoDB"],
      img: projectImg2,
      outcome: "Engineered to handle 50+ concurrent socket connections",
    },
    {
      id: "03",
      title: "Autonomous Enterprise Research Agent",
      tag: "Agentic AI + LangChain",
      desc: "Multi-step autonomous agent that crawls target web domains, synthesizes market trends, and outputs publication-grade financial and tech intelligence summaries.",
      stack: ["Python", "FastAPI", "PostgreSQL", "LlamaIndex", "Docker"],
      img: projectImg3,
      outcome: "Automates 15+ hours of manual data collation per week",
    },
    {
      id: "04",
      title: "Microservices E-Commerce Platform",
      tag: "Full Stack Architecture",
      desc: "High-scale modular digital storefront featuring decoupled product catalogs, cart state management, webhook-verified payment gateways, and admin metrics.",
      stack: ["React", "Express", "PostgreSQL", "Stripe API", "Tailwind"],
      img: heroImg,
      outcome: "Production-ready checkout flow with end-to-end testing",
    },
  ];

  const curriculumModules = [
    {
      num: "01",
      title: "Python & JavaScript Foundations",
      desc: "Master the twin engines of modern technology. Build robust procedural and functional logic, async programming patterns, and clean code principles.",
      topics: [
        "Advanced ES6+ JavaScript & TypeScript concepts",
        "Python 3.12 data structures & memory models",
        "Asynchronous event loops & promise chains",
        "Git version control, branching & PR review workflows",
      ],
      icon: Code2,
    },
    {
      num: "02",
      title: "Modern Frontend Engineering",
      desc: "Go far beyond static HTML/CSS. Build interactive, accessible, and ultra-performant interfaces using React and the modern component paradigm.",
      topics: [
        "Component hierarchy & composable architecture",
        "React state management & custom hook design",
        "Tailwind CSS & editorial design systems",
        "Client-side routing, caching & API integration",
      ],
      icon: Laptop,
    },
    {
      num: "03",
      title: "Scalable Backend & APIs",
      desc: "Architect enterprise-grade server backends capable of serving thousands of clients reliably with security and speed.",
      topics: [
        "RESTful API design with FastAPI & Node.js",
        "JWT authentication, role permissions & hashing",
        "Middleware pipelines, rate limiting & error handling",
        "Docker containerization & deployment basics",
      ],
      icon: Terminal,
    },
    {
      num: "04",
      title: "Databases & Data Modeling",
      desc: "Learn both relational and document databases. Design schemas, write high-performance queries, and prevent data inconsistencies.",
      topics: [
        "Relational schema design with PostgreSQL",
        "NoSQL document stores with MongoDB",
        "Database migrations, indexing & query optimization",
        "ORM integration (Prisma / SQLAlchemy)",
      ],
      icon: Database,
    },
    {
      num: "05",
      title: "Production AI Integration",
      desc: "Integrate modern Large Language Models and AI APIs into real web applications rather than just building simple toy wrappers.",
      topics: [
        "LLM API integration (OpenAI, Anthropic & Groq)",
        "Prompt engineering, structured outputs & guardrails",
        "Embeddings, vector databases & basic RAG architectures",
        "Agentic loops, tool calling & background tasks",
      ],
      icon: Cpu,
    },
  ];

  const whoIsThisFor = [
    {
      title: "College Students (BCA / MCA / B.Tech / BE)",
      desc: "Move past dry textbook syllabus into real-world code that recruiters and startup founders look for in 2026.",
    },
    {
      title: "Aspiring Full Stack Engineers",
      desc: "Consolidate scattered tutorial knowledge into one structured, industry-aligned engineering portfolio.",
    },
    {
      title: "Developers Wanting AI Skills",
      desc: "Bridge traditional web engineering with cutting-edge LLMs, automated agents, and intelligent workflows.",
    },
    {
      title: "Career Switchers & Final-Year Grads",
      desc: "Build verifiable, production-grade proof of your technical ability before applying to high-growth tech roles.",
    },
  ];

  const faqs = [
    {
      q: "What prerequisites do I need for this program?",
      a: "Basic curiosity and foundational knowledge of any programming language (C, Java, Python, or JavaScript) is helpful. We guide you from fundamentals through to advanced AI full stack deployment.",
    },
    {
      q: "How does the Industry Mentorship work?",
      a: "You are paired with senior engineers who conduct weekly 1-on-1 code reviews, architectural feedback sessions, and mock technical interviews just like in real product companies.",
    },
    {
      q: "What is the batch size and seat limit?",
      a: "To ensure high mentorship quality, each cohort is strictly capped at 30 seats. Currently, 18 seats are filled for the upcoming batch.",
    },
    {
      q: "Do I receive an official certificate?",
      a: "Yes. Upon completing the required capstone projects and passing code reviews, you receive an accredited KA Degree Certificate with verified project credentials.",
    },
    {
      q: "How does the application process work?",
      a: "Click 'Apply Now', submit your basic academic and contact information. Our admissions mentor will schedule a quick 15-minute alignment call before confirming your seat.",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: S.mainBg,
        color: S.text,
        fontFamily: S.sans,
        minHeight: "100vh",
      }}
      className="overflow-x-hidden"
    >
      <SEO
        title="AI Full Stack Developer Pro | KA Degree"
        description="Build Skills. Build Something Real. Hands-on full stack development, AI integration, real-world projects, and industry mentorship."
      />

      <Navbar />

      {/* ═════════════════════════════════════════════════════════
          1. HERO SECTION
          ═════════════════════════════════════════════════════════ */}
      <section className="relative pt-36 sm:pt-40 md:pt-44 pb-20 md:pb-28 border-b border-[#DDD7CC] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              {/* Badge */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={0}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#DDD7CC] bg-[#FFFFFF] text-[12px] font-semibold tracking-wider text-[#6B1830] uppercase mb-6 shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-[#6B1830] animate-pulse" />
                <span>Program 01 — Python & JS Edition</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={1}
                style={{ fontFamily: S.serif }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#171717] leading-[1.08] mb-6"
              >
                Build Skills. <br />
                <span className="italic text-[#6B1830]">Build Something Real.</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={2}
                className="text-lg sm:text-xl text-[#6B6464] leading-relaxed max-w-xl mb-8"
              >
                Go beyond classroom learning with hands-on full-stack development, AI integration, real projects and industry-focused mentorship.
              </motion.p>

              {/* Program Metric Highlights */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={3}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full mb-10"
              >
                <div className="bg-[#FFFFFF] border border-[#DDD7CC] p-4 rounded-xl shadow-sm">
                  <span className="block text-[11px] font-bold text-[#6B6464] uppercase tracking-wider">Tuition</span>
                  <span className="text-xl sm:text-2xl font-bold text-[#171717] font-serif">₹14,999</span>
                </div>
                <div className="bg-[#FFFFFF] border border-[#DDD7CC] p-4 rounded-xl shadow-sm">
                  <span className="block text-[11px] font-bold text-[#6B6464] uppercase tracking-wider">Seats</span>
                  <span className="text-xl sm:text-2xl font-bold text-[#6B1830] font-serif">18 / 30 Filled</span>
                </div>
                <div className="bg-[#FFFFFF] border border-[#DDD7CC] p-4 rounded-xl shadow-sm">
                  <span className="block text-[11px] font-bold text-[#6B6464] uppercase tracking-wider">Mentorship</span>
                  <span className="text-sm sm:text-base font-bold text-[#171717] font-serif">1-on-1 Industry</span>
                </div>
                <div className="bg-[#FFFFFF] border border-[#DDD7CC] p-4 rounded-xl shadow-sm">
                  <span className="block text-[11px] font-bold text-[#6B6464] uppercase tracking-wider">Credential</span>
                  <span className="text-sm sm:text-base font-bold text-[#171717] font-serif">Certified Proof</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={4}
                className="flex flex-wrap items-center gap-4"
              >
                <Link href="/apply?program=AI+Full+Stack+Developer+Pro">
                  <a className="px-8 py-4 rounded-xl bg-[#6B1830] hover:bg-[#8B2945] text-white font-semibold text-base transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-3 group">
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    document.getElementById("curriculum")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-8 py-4 rounded-xl bg-[#FFFFFF] hover:bg-[#EFEAE1] border border-[#DDD7CC] text-[#171717] font-semibold text-base transition-all duration-200 flex items-center gap-2 group"
                >
                  <span>Explore Curriculum</span>
                  <ArrowDown className="w-4 h-4 text-[#6B6464] group-hover:translate-y-0.5 transition-transform" />
                </button>
              </motion.div>

            </div>

            {/* Right Hero Image Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-5"
            >
              <div className="relative bg-[#FFFFFF] p-3 sm:p-4 rounded-3xl border border-[#DDD7CC] shadow-xl">
                <div className="overflow-hidden rounded-2xl aspect-[4/3] relative">
                  <img
                    src={heroImg}
                    alt="Developer building AI applications"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] font-mono tracking-widest uppercase bg-[#6B1830] px-2.5 py-1 rounded">
                      Live Cohort
                    </span>
                    <p className="text-sm font-serif mt-2 font-medium">
                      "Real engineers don't memorize syntax — they build systems."
                    </p>
                  </div>
                </div>

                {/* Micro tech indicators */}
                <div className="mt-4 pt-3 border-t border-[#DDD7CC] flex items-center justify-between text-xs text-[#6B6464] px-1 font-mono">
                  <span>Stack: React • FastAPI • LLMs</span>
                  <span className="text-[#6B1830] font-bold">Bangalore Cohort</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════
          2. PROGRAM OVERVIEW SECTION
          ═════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 border-b border-[#DDD7CC] bg-[#EFEAE1]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-5">
              <span className="text-[12px] font-mono font-bold tracking-widest uppercase text-[#6B1830] block mb-3">
                01 / PHILOSOPHY
              </span>
              <h2
                style={{ fontFamily: S.serif }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171717] leading-tight"
              >
                Why Most Coding Courses Fail Students
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6 text-[#171717]/80 text-base sm:text-lg leading-relaxed">
              <p>
                Traditional curriculum teaches disconnected syntax. You learn loops in isolation, HTML in isolation, and databases in isolation. But when asked to build a real product or sit in a technical interview, everything falls apart.
              </p>
              <p>
                The <strong>AI Full Stack Developer Pro</strong> program treats software engineering as an integrated craft. You start with customer-facing React components, wire them to resilient Python backend APIs, store data with PostgreSQL, and augment the entire user experience with autonomous AI reasoning.
              </p>
              
              <div className="pt-4 grid sm:grid-cols-2 gap-4">
                <div className="bg-[#FFFFFF] p-5 rounded-xl border border-[#DDD7CC]">
                  <div className="w-8 h-8 rounded-lg bg-[#6B1830]/10 flex items-center justify-center text-[#6B1830] mb-3">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif font-bold text-base text-[#171717] mb-1">Architecture First</h4>
                  <p className="text-xs text-[#6B6464] leading-normal">
                    Understand how data moves from UI clicks through network layers into persistent storage.
                  </p>
                </div>
                <div className="bg-[#FFFFFF] p-5 rounded-xl border border-[#DDD7CC]">
                  <div className="w-8 h-8 rounded-lg bg-[#6B1830]/10 flex items-center justify-center text-[#6B1830] mb-3">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif font-bold text-base text-[#171717] mb-1">AI-Augmented</h4>
                  <p className="text-xs text-[#6B6464] leading-normal">
                    Learn to build with modern AI APIs and workflows that define modern technology companies.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════
          3. WHO IS THIS FOR?
          ═════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 border-b border-[#DDD7CC] bg-[#F7F4EE]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-2xl mb-16">
            <span className="text-[12px] font-mono font-bold tracking-widest uppercase text-[#6B1830] block mb-3">
              02 / TARGET AUDIENCE
            </span>
            <h2
              style={{ fontFamily: S.serif }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171717]"
            >
              Who Is This Program For?
            </h2>
            <p className="text-base sm:text-lg text-[#6B6464] mt-4">
              Designed specifically for ambitious candidates who refuse to settle for generic tutorial certificates.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoIsThisFor.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FFFFFF] p-8 rounded-2xl border border-[#DDD7CC] hover:border-[#6B1830] transition-all duration-300 hover:-translate-y-1 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs text-[#6B1830] font-bold block mb-4">
                    0{idx + 1}
                  </span>
                  <h3 className="font-serif font-bold text-xl text-[#171717] mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#6B6464] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#DDD7CC]/60 flex items-center text-xs font-bold text-[#6B1830] gap-1">
                  <span>Target Fit</span>
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════
          4. WHAT YOU'LL LEARN (CURRICULUM)
          ═════════════════════════════════════════════════════════ */}
      <section id="curriculum" className="py-24 md:py-32 border-b border-[#DDD7CC] bg-[#EFEAE1]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-2xl mb-16">
            <span className="text-[12px] font-mono font-bold tracking-widest uppercase text-[#6B1830] block mb-3">
              03 / SYLLABUS & CURRICULUM
            </span>
            <h2
              style={{ fontFamily: S.serif }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171717]"
            >
              What You'll Master
            </h2>
            <p className="text-base sm:text-lg text-[#6B6464] mt-4">
              5 comprehensive engineering modules crafted to take you from foundational syntax to production AI systems.
            </p>
          </div>

          <div className="space-y-6">
            {curriculumModules.map((mod, idx) => (
              <div
                key={idx}
                className="bg-[#FFFFFF] p-8 sm:p-10 rounded-2xl border border-[#DDD7CC] hover:border-[#6B1830]/40 transition-all duration-300 shadow-sm"
              >
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Module Title */}
                  <div className="lg:col-span-5 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#6B1830]/10 flex items-center justify-center text-[#6B1830] shrink-0">
                      <mod.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-[#6B1830] uppercase tracking-wider block mb-1">
                        Module {mod.num}
                      </span>
                      <h3 className="font-serif font-bold text-2xl text-[#171717] mb-2">
                        {mod.title}
                      </h3>
                      <p className="text-sm text-[#6B6464] leading-relaxed">
                        {mod.desc}
                      </p>
                    </div>
                  </div>

                  {/* Right Topics List */}
                  <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3 pt-2">
                    {mod.topics.map((t, tidx) => (
                      <div
                        key={tidx}
                        className="bg-[#F7F4EE] px-4 py-3 rounded-lg border border-[#DDD7CC] flex items-center gap-3 text-sm text-[#171717]"
                      >
                        <Check className="w-4 h-4 text-[#6B1830] shrink-0" />
                        <span className="font-medium">{t}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════
          5. REAL-WORLD PROJECTS (INTERACTIVE HORIZONTAL SLIDER)
          ═════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 border-b border-[#DDD7CC] bg-[#F7F4EE]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[12px] font-mono font-bold tracking-widest uppercase text-[#6B1830] block mb-3">
                04 / REAL-WORLD PROOF
              </span>
              <h2
                style={{ fontFamily: S.serif }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171717]"
              >
                Projects That Prove Your Skills
              </h2>
              <p className="text-base sm:text-lg text-[#6B6464] mt-3 max-w-xl">
                You won't build basic to-do apps. Every project in your portfolio solves a real business problem with modern engineering standards.
              </p>
            </div>

            {/* Slider Navigation Controls */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setSliderIndex((prev) => (prev > 0 ? prev - 1 : projects.length - 1))}
                className="w-12 h-12 rounded-full border border-[#DDD7CC] bg-[#FFFFFF] hover:bg-[#EFEAE1] flex items-center justify-center text-[#171717] transition-colors focus:outline-none shadow-sm"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => setSliderIndex((prev) => (prev < projects.length - 1 ? prev + 1 : 0))}
                className="w-12 h-12 rounded-full border border-[#DDD7CC] bg-[#FFFFFF] hover:bg-[#EFEAE1] flex items-center justify-center text-[#171717] transition-colors focus:outline-none shadow-sm"
                aria-label="Next project"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Interactive Project Showcase Card */}
          <div className="relative bg-[#FFFFFF] rounded-3xl border border-[#DDD7CC] p-6 sm:p-10 shadow-lg overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={sliderIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Left Project Info */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-xs font-bold text-[#6B1830] bg-[#6B1830]/10 px-3 py-1 rounded-full">
                        Project {projects[sliderIndex].id} of 04
                      </span>
                      <span className="text-xs font-mono text-[#6B6464] border border-[#DDD7CC] px-2.5 py-1 rounded-full">
                        {projects[sliderIndex].tag}
                      </span>
                    </div>

                    <h3
                      style={{ fontFamily: S.serif }}
                      className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#171717] mb-4"
                    >
                      {projects[sliderIndex].title}
                    </h3>

                    <p className="text-base text-[#6B6464] leading-relaxed mb-6">
                      {projects[sliderIndex].desc}
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-[#DDD7CC]">
                    <div>
                      <span className="text-[11px] font-mono font-bold text-[#6B6464] uppercase tracking-wider block mb-2">
                        Technologies Deployed
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {projects[sliderIndex].stack.map((tech, tidx) => (
                          <span
                            key={tidx}
                            className="text-xs font-medium px-3 py-1.5 rounded-md bg-[#EFEAE1] text-[#171717] border border-[#DDD7CC]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#F7F4EE] border border-[#DDD7CC] flex items-center gap-3">
                      <Award className="w-5 h-5 text-[#6B1830] shrink-0" />
                      <span className="text-xs font-semibold text-[#171717]">
                        {projects[sliderIndex].outcome}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Project Preview Image */}
                <div className="lg:col-span-6">
                  <div className="rounded-2xl overflow-hidden border border-[#DDD7CC] aspect-[16/10] relative shadow-md">
                    <img
                      src={projects[sliderIndex].img}
                      alt={projects[sliderIndex].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

            {/* Slider Dots */}
            <div className="flex justify-center items-center gap-2 mt-8 pt-6 border-t border-[#DDD7CC]">
              {projects.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => setSliderIndex(dotIdx)}
                  className={`h-2.5 rounded-full transition-all ${
                    dotIdx === sliderIndex ? "w-8 bg-[#6B1830]" : "w-2.5 bg-[#DDD7CC] hover:bg-[#6B6464]"
                  }`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════
          6. MENTORSHIP & CAREER PREPARATION
          ═════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 border-b border-[#DDD7CC] bg-[#EFEAE1]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-[12px] font-mono font-bold tracking-widest uppercase text-[#6B1830] block mb-3">
                05 / GUIDANCE & CAREER
              </span>
              <h2
                style={{ fontFamily: S.serif }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171717] leading-tight mb-6"
              >
                1-on-1 Code Reviews from Real Tech Architects
              </h2>
              <p className="text-base sm:text-lg text-[#6B6464] leading-relaxed mb-8">
                You won't be writing code into a black hole. Senior developers review your GitHub pull requests, teach you how to write readable clean code, and prepare you for high-pressure technical whiteboard rounds.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Weekly Architectural Syncs",
                    desc: "Walk through real system design patterns and learn how high-growth startups structure microservices.",
                  },
                  {
                    title: "ATS-Engineered Resumes",
                    desc: "Transform your resume from generic coursework into hard metrics, deployed URLs, and clear engineering value.",
                  },
                  {
                    title: "Mock Technical Gauntlets",
                    desc: "Live coding interviews covering live debugging, DSA logic, and architectural discussions.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 bg-[#FFFFFF] p-5 rounded-xl border border-[#DDD7CC]">
                    <div className="w-8 h-8 rounded-full bg-[#6B1830]/10 flex items-center justify-center text-[#6B1830] shrink-0 mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-base text-[#171717]">{item.title}</h4>
                      <p className="text-xs text-[#6B6464] mt-1 leading-normal">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative bg-[#FFFFFF] p-4 rounded-3xl border border-[#DDD7CC] shadow-xl">
              <div className="overflow-hidden rounded-2xl aspect-[4/3] relative">
                <img
                  src={mentorImg}
                  alt="Mentor guiding student engineer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 p-4 rounded-xl bg-[#F7F4EE] border border-[#DDD7CC]">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-[#6B1830]" />
                  <div>
                    <h5 className="font-serif font-bold text-base text-[#171717]">
                      Official KA Degree Certification
                    </h5>
                    <p className="text-xs text-[#6B6464]">
                      Includes cryptographic QR verification and portfolio GitHub links recognized by hiring partners.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════
          7. FREQUENTLY ASKED QUESTIONS (FAQS)
          ═════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 border-b border-[#DDD7CC] bg-[#F7F4EE]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          
          <div className="text-center mb-16">
            <span className="text-[12px] font-mono font-bold tracking-widest uppercase text-[#6B1830] block mb-3">
              06 / CLARITY
            </span>
            <h2
              style={{ fontFamily: S.serif }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171717]"
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#FFFFFF] rounded-2xl border border-[#DDD7CC] overflow-hidden transition-all shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full text-left px-6 sm:px-8 py-5 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-serif font-bold text-lg sm:text-xl text-[#171717]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#6B1830] transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 sm:px-8 pb-6 text-[#6B6464] text-base leading-relaxed border-t border-[#DDD7CC]/50 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════
          8. FINAL CTA
          ═════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#EFEAE1] text-center">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          
          <span className="text-[12px] font-mono font-bold tracking-widest uppercase text-[#6B1830] block mb-3">
            SEATS ARE STRICTLY LIMITED
          </span>

          <h2
            style={{ fontFamily: S.serif }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#171717] mb-6 leading-tight"
          >
            Ready to Build Your Career?
          </h2>

          <p className="text-lg sm:text-xl text-[#6B6464] leading-relaxed mb-10 max-w-xl mx-auto">
            Take the leap from passive tutorial watching to verified, production-grade engineering proof.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/apply?program=AI+Full+Stack+Developer+Pro">
              <a className="w-full sm:w-auto px-10 py-4 rounded-xl bg-[#6B1830] hover:bg-[#8B2945] text-white font-semibold text-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-3 group">
                <span>Apply for This Program</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Link>
            <Link href="/contact-us">
              <a className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#FFFFFF] hover:bg-[#F7F4EE] border border-[#DDD7CC] text-[#171717] font-semibold text-lg transition-all duration-200 text-center">
                Talk to Admissions
              </a>
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-xs text-[#6B6464] font-mono">
            <span>• 30 Seats Max</span>
            <span>• 1-on-1 Mentorship</span>
            <span>• Official Certification</span>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
