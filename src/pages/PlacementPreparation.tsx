import React, { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/layout/SEO";
import {
  ArrowRight,
  CheckCircle2,
  Code,
  Users,
  Briefcase,
  GraduationCap,
  Target,
  FileCheck,
  MessageSquare,
  Sparkles,
  Terminal,
  Clock,
  Award,
  Check,
  TrendingUp,
  Search,
  Star,
} from "lucide-react";

import interviewImg from "@assets/smart_classroom.jpg";
import studentImg from "@assets/professional_developer.jpg";

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

export default function PlacementPreparation() {
  const [activeTab, setActiveTab] = useState(0);

  const heroTags = [
    "Aptitude",
    "Coding",
    "DSA",
    "Technical Interviews",
    "HR Interviews",
    "Communication",
    "Resume Building",
    "Mock Interviews",
  ];

  const journeySteps = [
    {
      num: "01",
      label: "ASSESS",
      title: "Diagnostic Baseline",
      desc: "Comprehensive evaluation of your current coding speed, aptitude benchmarks, and communication confidence.",
    },
    {
      num: "02",
      label: "PRACTICE",
      title: "Targeted Drills",
      desc: "Structured algorithmic problem solving, core CS fundamentals, and company-specific aptitude patterns.",
    },
    {
      num: "03",
      label: "IMPROVE",
      title: "Feedback Loops",
      desc: "Granular feedback on code quality, runtime complexity, body language, and behavioral STAR stories.",
    },
    {
      num: "04",
      label: "MOCK",
      title: "Real-Time Simulations",
      desc: "Face senior hiring managers and technical leads in realistic 45-minute pressurized mock interviews.",
    },
    {
      num: "05",
      label: "INTERVIEW READY",
      title: "Placement Launch",
      desc: "Walk into drive season with an ATS-certified resume, verified GitHub portfolio, and unshakable confidence.",
    },
  ];

  const includedModules = [
    {
      title: "Coding & Data Structures (DSA)",
      desc: "Arrays, Strings, Recursion, Trees, Graphs, and dynamic programming patterns tested by top tech product and services companies.",
      topics: ["Time & Space Complexity (Big-O)", "Core LeetCode Patterns", "Live Whiteboard Problem Solving", "Code Optimization"],
      icon: Code,
    },
    {
      title: "Aptitude & Logical Reasoning",
      desc: "Master quantitative shortcuts, speed mathematics, logical deduction, and verbal reasoning required to clear campus rounds.",
      topics: ["Time & Work, Speed & Distance", "Permutations & Probability", "Logical Series & Data Interpretation", "Timed Speed Drills"],
      icon: Target,
    },
    {
      title: "Technical Interview Rounds",
      desc: "Deep-dive into DBMS (SQL), Operating Systems, OOPs, Computer Networks, and your individual academic capstone projects.",
      topics: ["Relational Database Queries", "OS Threading & Memory", "OOPs Design Principles", "System Architecture Lite"],
      icon: Terminal,
    },
    {
      title: "HR & Behavioral Mastery",
      desc: "Structure answers using the STAR technique. Confidently handle tricky behavioral questions, salary discussions, and cultural fit.",
      topics: ["STAR Framework Responses", "Overcoming Weaknesses", "Company Research Strategies", "Body Language & Voice Tone"],
      icon: Users,
    },
    {
      title: "ATS-Engineered Resume & LinkedIn",
      desc: "We completely restructure your resume so it clears automated ATS scanners and commands recruiter attention within 6 seconds.",
      topics: ["Quantifiable Impact Bullets", "Keyword Optimization", "GitHub Portfolio Linkage", "LinkedIn Recruiter Outreach"],
      icon: FileCheck,
    },
    {
      title: "Communication & Group Discussions",
      desc: "Express technical thoughts clearly and concisely. Lead group discussions constructively without aggressive posturing.",
      topics: ["Articulation & Clarity", "GD Strategy & Etiquette", "Impromptu Speaking Drills", "English Fluency Coaching"],
      icon: MessageSquare,
    },
  ];

  const mockPillars = [
    {
      title: "Resume Review",
      desc: "1-on-1 line-by-line audit of your CV, removing generic fluff and highlighting verified technical project metrics.",
      metric: "100% ATS-Compliant",
    },
    {
      title: "Technical Mock Interview",
      desc: "45-minute live coding session with a real senior developer testing your logic, debugging ability, and core CS fundamentals.",
      metric: "Live Code Review",
    },
    {
      title: "HR Mock Interview",
      desc: "Realistic simulation of the managerial/HR round with personalized coaching on posture, eye contact, and negotiation.",
      metric: "STAR Method Trained",
    },
    {
      title: "Feedback & Improvement",
      desc: "Detailed written scorecard detailing strengths, areas of weakness, and a tailored 14-day corrective action plan.",
      metric: "Actionable Scorecard",
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
        title="Placement Preparation | KA Degree"
        description="Prepare With Purpose. Perform With Confidence. Build the technical skills, problem-solving ability and interview confidence needed to ace placements."
      />

      <Navbar />

      {/* ═════════════════════════════════════════════════════════
          1. HERO SECTION
          ═════════════════════════════════════════════════════════ */}
      <section className="relative pt-36 sm:pt-40 md:pt-44 pb-20 md:pb-28 border-b border-[#DDD7CC] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-12">
            {/* Small Label */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#DDD7CC] bg-[#FFFFFF] text-[12px] font-semibold tracking-wider text-[#6B1830] uppercase mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#6B1830] animate-pulse" />
              <span>Program 02 — Comprehensive Career Accelerator</span>
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
              Prepare With Purpose. <br />
              <span className="italic text-[#6B1830]">Perform With Confidence.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={2}
              className="text-lg sm:text-xl text-[#6B6464] leading-relaxed mb-8"
            >
              Build the technical skills, problem-solving ability and interview confidence needed to approach placement season with a clear strategy.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={3}
              className="flex flex-wrap items-center gap-4"
            >
              <Link href="/apply?program=Placement+Preparation">
                <a className="px-8 py-4 rounded-xl bg-[#6B1830] hover:bg-[#8B2945] text-white font-semibold text-base transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-3 group">
                  <span>Apply for Placement Preparation</span>
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
                View Included Modules
              </button>
            </motion.div>
          </div>

          {/* Highlight Tags Bar */}
          <div className="pt-8 border-t border-[#DDD7CC]">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#6B6464] block mb-3">
              Covered Disciplines
            </span>
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {heroTags.map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-xl bg-[#FFFFFF] border border-[#DDD7CC] text-sm font-semibold text-[#171717] hover:border-[#6B1830] transition-colors shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════
          2. ANIMATED JOURNEY: ASSESS → PRACTICE → IMPROVE → MOCK → INTERVIEW READY
          ═════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 border-b border-[#DDD7CC] bg-[#EFEAE1]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[12px] font-mono font-bold tracking-widest uppercase text-[#6B1830] block mb-3">
              STRUCTURED METHODOLOGY
            </span>
            <h2
              style={{ fontFamily: S.serif }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171717]"
            >
              The Placement Roadmap
            </h2>
            <p className="text-base sm:text-lg text-[#6B6464] mt-3">
              A 5-phase progressive journey designed to eliminate interview anxiety through systematic preparation.
            </p>
          </div>

          {/* Desktop & Tablet Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6 relative">
            {journeySteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#DDD7CC] relative flex flex-col justify-between hover:border-[#6B1830] transition-all duration-300 shadow-sm group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#6B1830] bg-[#6B1830]/10 px-2.5 py-1 rounded">
                      {step.num}
                    </span>
                    <span className="text-[11px] font-bold text-[#6B6464] tracking-widest uppercase">
                      {step.label}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#171717] mb-2 group-hover:text-[#6B1830] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B6464] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#DDD7CC]/50 flex items-center justify-between text-xs text-[#6B1830] font-bold">
                  <span>Phase {step.num}</span>
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════
          3. REALISTIC CODING & INTERVIEW VISUAL ELEMENT
          ═════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 border-b border-[#DDD7CC] bg-[#F7F4EE]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[12px] font-mono font-bold tracking-widest uppercase text-[#6B1830] block">
                ENGINEERING STANDARDS
              </span>
              <h2
                style={{ fontFamily: S.serif }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171717] leading-tight"
              >
                Learn How Interviewers Actually Evaluate You
              </h2>
              <p className="text-base sm:text-lg text-[#6B6464] leading-relaxed">
                Clearing modern tech placements requires more than getting the right output on your local machine. Recruiters look for how you handle edge cases, talk through algorithmic complexity, and structure clean modular code.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  "Live explanation of thought processes before typing a single line",
                  "Immediate detection of time and space bottlenecks (O(N) vs O(N²))",
                  "Graceful recovery when presented with difficult edge test-cases",
                  "Clear, confident communication that makes interviewers want you on their team",
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#6B1830]/10 flex items-center justify-center text-[#6B1830] shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm sm:text-base font-medium text-[#171717]">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Realistic Coding & Evaluation Visual Simulator */}
            <div className="lg:col-span-6">
              <div className="bg-[#171717] rounded-3xl p-5 sm:p-6 shadow-2xl border border-[#DDD7CC]/20 text-white font-mono text-xs sm:text-sm">
                
                {/* Code Window Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                    <span className="ml-3 text-xs text-white/50">two_sum_optimized.py</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-[#6B1830] text-white font-bold uppercase">
                    Live Coding Round
                  </span>
                </div>

                {/* Code Snippet */}
                <div className="space-y-1 text-slate-300 leading-relaxed overflow-x-auto pb-4">
                  <p><span className="text-purple-400">def</span> <span className="text-blue-400">find_target_pair</span>(nums: list[int], target: int) -&gt; list[int]:</p>
                  <p className="pl-4 text-emerald-400/80"># Hash map for O(1) constant lookup speed</p>
                  <p className="pl-4">lookup = {'{}'}</p>
                  <p className="pl-4"><span className="text-purple-400">for</span> idx, num <span className="text-purple-400">in</span> enumerate(nums):</p>
                  <p className="pl-8">complement = target - num</p>
                  <p className="pl-8"><span className="text-purple-400">if</span> complement <span className="text-purple-400">in</span> lookup:</p>
                  <p className="pl-12 text-yellow-300">return [lookup[complement], idx]</p>
                  <p className="pl-8">lookup[num] = idx</p>
                  <p className="pl-4"><span className="text-purple-400">return</span> []</p>
                </div>

                {/* Live Evaluator Panel */}
                <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-3">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                    <span className="text-[10px] text-white/50 block uppercase">Time Complexity</span>
                    <span className="text-emerald-400 font-bold text-sm">O(N) Linear • Pass</span>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                    <span className="text-[10px] text-white/50 block uppercase">Interviewer Rating</span>
                    <span className="text-yellow-400 font-bold text-sm">★★★★★ Strong Hire</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════
          4. WHAT'S INCLUDED?
          ═════════════════════════════════════════════════════════ */}
      <section id="modules" className="py-24 md:py-32 border-b border-[#DDD7CC] bg-[#EFEAE1]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-2xl mb-16">
            <span className="text-[12px] font-mono font-bold tracking-widest uppercase text-[#6B1830] block mb-3">
              COMPREHENSIVE CURRICULUM
            </span>
            <h2
              style={{ fontFamily: S.serif }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171717]"
            >
              What's Included in the Program?
            </h2>
            <p className="text-base sm:text-lg text-[#6B6464] mt-3">
              Every round, every assessment, every interview format covered thoroughly under one rigorous curriculum.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {includedModules.map((mod, idx) => (
              <div
                key={idx}
                className="bg-[#FFFFFF] p-8 rounded-2xl border border-[#DDD7CC] hover:border-[#6B1830] transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#6B1830]/10 flex items-center justify-center text-[#6B1830] mb-6">
                    <mod.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-[#171717] mb-3">
                    {mod.title}
                  </h3>
                  <p className="text-sm text-[#6B6464] leading-relaxed mb-6">
                    {mod.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#DDD7CC]/60 space-y-2">
                  {mod.topics.map((t, tidx) => (
                    <div key={tidx} className="flex items-center gap-2 text-xs text-[#171717] font-medium">
                      <Check className="w-3.5 h-3.5 text-[#6B1830] shrink-0" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════
          5. PRACTICE LIKE IT'S THE REAL INTERVIEW
          ═════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 border-b border-[#DDD7CC] bg-[#F7F4EE]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[12px] font-mono font-bold tracking-widest uppercase text-[#6B1830] block mb-3">
              SIMULATION BARS
            </span>
            <h2
              style={{ fontFamily: S.serif }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171717]"
            >
              Practice Like It's the Real Interview
            </h2>
            <p className="text-base sm:text-lg text-[#6B6464] mt-3">
              By the time you sit across from an actual corporate recruiter, you've already cleared multiple simulated gauntlets.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-[#FFFFFF] p-8 rounded-2xl border border-[#DDD7CC] hover:border-[#6B1830] transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-[#6B1830] block mb-4">
                    Pillar 0{idx + 1}
                  </span>
                  <h3 className="font-serif font-bold text-xl text-[#171717] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#6B6464] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#DDD7CC]/60 flex items-center justify-between text-xs font-mono text-[#6B1830] font-bold">
                  <span>{pillar.metric}</span>
                  <CheckCircle2 className="w-4 h-4" />
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
            YOUR PLACEMENT ADVANTAGE
          </span>

          <h2
            style={{ fontFamily: S.serif }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#171717] mb-6 leading-tight"
          >
            Ready for Your Next Interview?
          </h2>

          <p className="text-lg sm:text-xl text-[#6B6464] leading-relaxed mb-10 max-w-xl mx-auto">
            Build the technical skills. Practice with purpose. Walk into your campus and off-campus drives prepared.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/apply?program=Placement+Preparation">
              <a className="w-full sm:w-auto px-10 py-4 rounded-xl bg-[#6B1830] hover:bg-[#8B2945] text-white font-semibold text-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-3 group">
                <span>Apply for Placement Preparation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Link>
            <Link href="/contact-us">
              <a className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#FFFFFF] hover:bg-[#F7F4EE] border border-[#DDD7CC] text-[#171717] font-semibold text-lg transition-all duration-200 text-center">
                Talk to a Placement Coach
              </a>
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
