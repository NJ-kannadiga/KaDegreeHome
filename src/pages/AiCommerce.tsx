import React, { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/layout/SEO";
import {
  ArrowRight,
  Database,
  BrainCircuit,
  Sparkles,
  LineChart,
  BarChart3,
  TrendingUp,
  Cpu,
  Layers,
  CheckCircle2,
  Users,
  Target,
  ShoppingBag,
  Briefcase,
  Check,
  Zap,
  Globe,
  DollarSign,
  PieChart,
} from "lucide-react";

import heroImg from "@assets/ai_commerce_hero.jpg";
import teamImg from "@assets/ai_commerce_team.jpg";
import cardImg from "@assets/card_ai_commerce.jpg";

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

export default function AiCommerce() {
  const workflowSteps = [
    {
      num: "01",
      label: "DATA",
      title: "Raw Signals",
      desc: "Collate customer purchases, catalog interactions, and market pricing feeds.",
      icon: Database,
    },
    {
      num: "02",
      label: "INSIGHT",
      title: "AI Analysis",
      desc: "Machine learning models identify hidden patterns, churn vectors, and revenue trends.",
      icon: BrainCircuit,
    },
    {
      num: "03",
      label: "DECISION",
      title: "Executive Clarity",
      desc: "Dynamic dashboards surface high-confidence recommendations with probabilistic margins.",
      icon: LineChart,
    },
    {
      num: "04",
      label: "AUTOMATION",
      title: "Agentic Triggers",
      desc: "Autonomous AI workflows execute marketing triggers, reorders, and personalized promotions.",
      icon: Zap,
    },
    {
      num: "05",
      label: "GROWTH",
      title: "Compounding Impact",
      desc: "Measurable revenue expansion, lower customer acquisition costs, and streamlined margins.",
      icon: TrendingUp,
    },
  ];

  const sixModules = [
    {
      num: "01",
      title: "AI for Business Foundations",
      desc: "Understand the taxonomy of Generative AI, Large Language Models, and predictive machine learning through a commercial business lens.",
      highlights: ["Demystifying LLMs & AI terminology", "Identifying high-ROI AI opportunities", "Evaluating build vs buy decisions"],
      icon: Cpu,
    },
    {
      num: "02",
      title: "Data & Analytics Strategy",
      desc: "How modern enterprises structure transactional data, warehouse metrics, and track Key Performance Indicators (KPIs).",
      highlights: ["Data pipelines for non-engineers", "Modern BI dashboards (Tableau, PowerBI)", "Cohort analysis & customer lifetime value"],
      icon: BarChart3,
    },
    {
      num: "03",
      title: "Customer Intelligence & Personalization",
      desc: "Leverage natural language processing and recommendation algorithms to decode consumer sentiment and behavior.",
      highlights: ["Semantic customer sentiment analysis", "Predictive churn & retention models", "Dynamic personalization engines"],
      icon: Users,
    },
    {
      num: "04",
      title: "Business Automation & Workflow AI",
      desc: "Eliminate repetitive spreadsheet operations with no-code/low-code agentic automation and API webhooks.",
      highlights: ["Workflow automation (Zapier, n8n)", "Automated financial reconciliations", "AI customer support triage"],
      icon: Zap,
    },
    {
      num: "05",
      title: "Modern AI Tool Stack",
      desc: "Gain hands-on proficiency with the modern AI tool ecosystem used by top corporate teams and startups.",
      highlights: ["Advanced ChatGPT & Claude prompting", "Midjourney & design synthesis", "AI spreadsheets & autonomous research bots"],
      icon: Layers,
    },
    {
      num: "06",
      title: "Real Business Case Studies",
      desc: "Analyze and reverse-engineer successful AI deployments in retail, banking, e-commerce, and logistics.",
      highlights: ["Amazon & Flipkart recommendation cases", "FinTech credit scoring automation", "D2C personalized email pipelines"],
      icon: Briefcase,
    },
  ];

  const whoIsThisFor = [
    {
      title: "B.Com Students",
      desc: "Supercharge traditional commerce studies with data analytics, financial modeling, and automated accounting workflows.",
    },
    {
      title: "BBA Students",
      desc: "Gain the strategic technology edge needed for modern management consulting and digital business operations.",
    },
    {
      title: "Commerce Graduates",
      desc: "Stand out in a competitive job market where companies demand data-literate, AI-augmented business analysts.",
    },
    {
      title: "Business Students & MBAs",
      desc: "Learn to design, manage, and evaluate AI solutions without getting bogged down in complex low-level code.",
    },
    {
      title: "Entrepreneurs & Founders",
      desc: "Build lean, automated businesses that scale revenue without ballooning headcount or operational overhead.",
    },
  ];

  const whatYoullBuild = [
    {
      title: "AI Financial Statement Analyzer",
      desc: "Build an automated pipeline that ingests raw P&L statements and generates an executive risk and opportunity summary.",
      tech: "Claude API • Python • Excel Automation",
      metric: "Reduces audit review time by 75%",
    },
    {
      title: "Dynamic Customer Churn Predictor",
      desc: "Train a predictive business model that flags accounts at risk of churning 30 days before they cancel their subscriptions.",
      tech: "Predictive ML • Logistic Regression • PowerBI",
      metric: "Accurate churn detection across cohorts",
    },
    {
      title: "Autonomous E-Commerce Campaign Engine",
      desc: "An intelligent workflow that analyzes inventory overstock and autonomously creates multi-channel promotional campaigns.",
      tech: "n8n Webhooks • OpenAI API • Klaviyo",
      metric: "Deployed for real D2C retail brand",
    },
    {
      title: "Market Intelligence & Competitor Tracker",
      desc: "A continuous web agent that monitors competitor pricing, product releases, and customer reviews to produce weekly alerts.",
      tech: "Web Scraping • Semantic Vectors • Streamlit",
      metric: "Live executive dashboard output",
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
        title="AI for Commerce | KA Degree"
        description="Where AI Meets Business. Understand how artificial intelligence, data and automation are changing modern commerce."
      />

      <Navbar />

      {/* ═════════════════════════════════════════════════════════
          1. HERO SECTION
          ═════════════════════════════════════════════════════════ */}
      <section className="relative pt-36 sm:pt-40 md:pt-44 pb-20 md:pb-28 border-b border-[#DDD7CC] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={0}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#DDD7CC] bg-[#FFFFFF] text-[12px] font-semibold tracking-wider text-[#6B1830] uppercase mb-6 shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-[#6B1830] animate-pulse" />
                <span>Program 03 — Business & AI Strategy</span>
              </motion.div>

              <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={1}
                style={{ fontFamily: S.serif }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#171717] leading-[1.08] mb-6"
              >
                Where AI <br />
                <span className="italic text-[#6B1830]">Meets Business.</span>
              </motion.h1>

              <motion.p
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={2}
                className="text-lg sm:text-xl text-[#6B6464] leading-relaxed max-w-xl mb-8"
              >
                Understand how artificial intelligence, data and automation are changing the way modern businesses make decisions, understand customers and operate.
              </motion.p>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={3}
                className="flex flex-wrap items-center gap-4"
              >
                <Link href="/apply?program=AI+for+Commerce">
                  <a className="px-8 py-4 rounded-xl bg-[#6B1830] hover:bg-[#8B2945] text-white font-semibold text-base transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-3 group">
                    <span>Apply for AI for Commerce</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    document.getElementById("modules")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-8 py-4 rounded-xl bg-[#FFFFFF] hover:bg-[#EFEAE1] border border-[#DDD7CC] text-[#171717] font-semibold text-base transition-all duration-200"
                >
                  Explore Modules
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
                    alt="AI for Commerce Business Analytics"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] font-mono tracking-widest uppercase bg-[#6B1830] px-2.5 py-1 rounded">
                      Commercial AI
                    </span>
                    <p className="text-sm font-serif mt-2 font-medium">
                      "The next generation of business leaders won't just manage people — they will manage intelligent algorithms."
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#DDD7CC] flex items-center justify-between text-xs text-[#6B6464] px-1 font-mono">
                  <span>Audience: B.Com • BBA • MBA</span>
                  <span className="text-[#6B1830] font-bold">Bangalore Cohort</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════
          2. ANIMATED WORKFLOW: DATA → INSIGHT → DECISION → AUTOMATION → GROWTH
          ═════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 border-b border-[#DDD7CC] bg-[#EFEAE1]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[12px] font-mono font-bold tracking-widest uppercase text-[#6B1830] block mb-3">
              THE COMMERCIAL INTELLIGENCE PIPELINE
            </span>
            <h2
              style={{ fontFamily: S.serif }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171717]"
            >
              How Modern Businesses Win with AI
            </h2>
            <p className="text-base sm:text-lg text-[#6B6464] mt-3">
              A continuous value loop transforming raw transactional numbers into exponential commercial growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6 relative">
            {workflowSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#DDD7CC] relative flex flex-col justify-between hover:border-[#6B1830] transition-all duration-300 shadow-sm group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#6B1830]/10 flex items-center justify-center text-[#6B1830]">
                      <step.icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#6B1830]">
                      {step.num}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono font-bold text-[#6B6464] tracking-widest uppercase block mb-1">
                    {step.label}
                  </span>

                  <h3 className="font-serif font-bold text-lg text-[#171717] mb-2 group-hover:text-[#6B1830] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6B6464] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#DDD7CC]/50 flex items-center justify-between text-xs text-[#6B1830] font-bold">
                  <span>Step {step.num}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════
          3. SIX CORE SECTIONS / MODULES
          ═════════════════════════════════════════════════════════ */}
      <section id="modules" className="py-24 md:py-32 border-b border-[#DDD7CC] bg-[#F7F4EE]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-2xl mb-16">
            <span className="text-[12px] font-mono font-bold tracking-widest uppercase text-[#6B1830] block mb-3">
              THE 6-PART CURRICULUM
            </span>
            <h2
              style={{ fontFamily: S.serif }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171717]"
            >
              Master Business & Commercial AI
            </h2>
            <p className="text-base sm:text-lg text-[#6B6464] mt-3">
              Learn exactly how modern companies deploy artificial intelligence to scale revenue, optimize operations, and automate repetitive tasks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sixModules.map((mod, idx) => (
              <div
                key={idx}
                className="bg-[#FFFFFF] p-8 rounded-2xl border border-[#DDD7CC] hover:border-[#6B1830] transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#6B1830]/10 flex items-center justify-center text-[#6B1830]">
                      <mod.icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#6B1830] bg-[#6B1830]/10 px-2.5 py-1 rounded">
                      Module {mod.num}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-[#171717] mb-3">
                    {mod.title}
                  </h3>

                  <p className="text-sm text-[#6B6464] leading-relaxed mb-6">
                    {mod.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#DDD7CC]/60 space-y-2">
                  {mod.highlights.map((h, hidx) => (
                    <div key={hidx} className="flex items-center gap-2 text-xs text-[#171717] font-medium">
                      <Check className="w-3.5 h-3.5 text-[#6B1830] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════
          4. WHO IS THIS FOR?
          ═════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 border-b border-[#DDD7CC] bg-[#EFEAE1]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-2xl mb-16">
            <span className="text-[12px] font-mono font-bold tracking-widest uppercase text-[#6B1830] block mb-3">
              TARGET CANDIDATES
            </span>
            <h2
              style={{ fontFamily: S.serif }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171717]"
            >
              Who Is This Program For?
            </h2>
            <p className="text-base sm:text-lg text-[#6B6464] mt-3">
              No programming background required. Designed for business thinkers, analysts, and future commercial leaders.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
            {whoIsThisFor.map((c, idx) => (
              <div
                key={idx}
                className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#DDD7CC] hover:border-[#6B1830] transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-[#6B1830] block mb-3">
                    0{idx + 1}
                  </span>
                  <h3 className="font-serif font-bold text-lg text-[#171717] mb-2">
                    {c.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B6464] leading-relaxed">
                    {c.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#DDD7CC]/50 text-xs font-bold text-[#6B1830] flex items-center justify-between">
                  <span>Target Fit</span>
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════
          5. WHAT YOU'LL BUILD (PRACTICAL AI BUSINESS PROJECTS)
          ═════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 border-b border-[#DDD7CC] bg-[#F7F4EE]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-2xl mb-16">
            <span className="text-[12px] font-mono font-bold tracking-widest uppercase text-[#6B1830] block mb-3">
              PORTFOLIO ARTIFACTS
            </span>
            <h2
              style={{ fontFamily: S.serif }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171717]"
            >
              What You'll Build
            </h2>
            <p className="text-base sm:text-lg text-[#6B6464] mt-3">
              Tangible business tools that prove you know how to apply artificial intelligence to real enterprise balance sheets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whatYoullBuild.map((p, idx) => (
              <div
                key={idx}
                className="bg-[#FFFFFF] p-8 sm:p-10 rounded-2xl border border-[#DDD7CC] hover:border-[#6B1830] transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-[#6B1830] uppercase tracking-wider block mb-2">
                    Project 0{idx + 1}
                  </span>
                  <h3 className="font-serif font-bold text-2xl text-[#171717] mb-3">
                    {p.title}
                  </h3>
                  <p className="text-base text-[#6B6464] leading-relaxed mb-6">
                    {p.desc}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-[#DDD7CC]">
                  <div className="text-xs font-mono text-[#171717] bg-[#EFEAE1] px-3 py-1.5 rounded inline-block">
                    {p.tech}
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#6B1830]">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{p.metric}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════
          6. FINAL CTA
          ═════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#EFEAE1] text-center">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          
          <span className="text-[12px] font-mono font-bold tracking-widest uppercase text-[#6B1830] block mb-3">
            COMMERCE + ARTIFICIAL INTELLIGENCE
          </span>

          <h2
            style={{ fontFamily: S.serif }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#171717] mb-6 leading-tight"
          >
            Ready to Explore AI for Business?
          </h2>

          <p className="text-lg sm:text-xl text-[#6B6464] leading-relaxed mb-10 max-w-xl mx-auto">
            Bridge the gap between business strategy and automated artificial intelligence. Build the future of modern commerce.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/apply?program=AI+for+Commerce">
              <a className="w-full sm:w-auto px-10 py-4 rounded-xl bg-[#6B1830] hover:bg-[#8B2945] text-white font-semibold text-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-3 group">
                <span>Apply for AI for Commerce</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Link>
            <Link href="/contact-us">
              <a className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#FFFFFF] hover:bg-[#F7F4EE] border border-[#DDD7CC] text-[#171717] font-semibold text-lg transition-all duration-200 text-center">
                Talk to Our Program Advisor
              </a>
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
