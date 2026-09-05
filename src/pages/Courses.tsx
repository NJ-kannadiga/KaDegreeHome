import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/layout/SEO";
import {
  ArrowRight,
  Sparkles,
  Code2,
  Briefcase,
  TrendingUp,
  Award,
  Users,
  CheckCircle2,
} from "lucide-react";

// Existing images from the project
import fullStackCardImg from "@assets/program_ai_internship.jpg";
import placementCardImg from "@assets/program_placement_prep.jpg";
import commerceCardImg from "@assets/program_ai_commerce.jpg";

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

export default function Courses() {
  const programs = [
    {
      id: "01",
      code: "01 — AI FULL STACK DEVELOPER PRO",
      title: "AI Full Stack Developer Pro",
      subtitle: "Python & JS Edition",
      description:
        "A future-ready program for students who want to build strong coding, full-stack and AI integration skills before entering the professional world.",
      tags: ["AI", "Full Stack", "Projects", "Career"],
      link: "/programs/ai-full-stack-developer",
      image: fullStackCardImg,
      badge: "Flagship Engineering Track",
      icon: Code2,
    },
    {
      id: "02",
      code: "02 — PLACEMENT PREPARATION",
      title: "Placement Preparation",
      subtitle: "Interview & Career Ready",
      description:
        "Turn your preparation into interview confidence with structured coding, aptitude, technical and HR interview preparation.",
      tags: ["Coding", "Aptitude", "Technical", "HR", "Mock Interviews"],
      link: "/programs/placement-preparation",
      image: placementCardImg,
      badge: "Campus & Drive Accelerator",
      icon: Briefcase,
    },
    {
      id: "03",
      code: "03 — AI FOR COMMERCE",
      title: "AI for Commerce",
      subtitle: "Data, Automation & Growth",
      description:
        "Discover how AI, data and automation are transforming modern businesses and creating new opportunities for commerce students.",
      tags: ["AI", "Data", "Business", "Automation", "Analytics"],
      link: "/programs/ai-for-commerce",
      image: commerceCardImg,
      badge: "Business Intelligence Track",
      icon: TrendingUp,
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
      className="overflow-x-hidden flex flex-col justify-between"
    >
      <SEO
        title="Programs Built for Your Next Step | KA Degree"
        description="Whether you want to build real-world technology, prepare for your first job, or understand how AI can transform business — choose the path that fits where you want to go."
      />

      <Navbar />

      <main className="flex-1 pt-36 sm:pt-40 md:pt-44 pb-24 md:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* ═════════════════════════════════════════════════════
              HERO SECTION
              ═════════════════════════════════════════════════════ */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#DDD7CC] bg-[#FFFFFF] text-[12px] font-semibold tracking-wider text-[#6B1830] uppercase mb-6 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>KA Degree Cohorts 2026</span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1}
              style={{ fontFamily: S.serif }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#171717] leading-[1.1] mb-6"
            >
              Programs Built for Your Next Step
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={2}
              className="text-lg sm:text-xl text-[#6B6464] leading-relaxed"
            >
              Whether you want to build real-world technology, prepare for your first job, or understand how AI can transform business — choose the path that fits where you want to go.
            </motion.p>
          </div>

          {/* ═════════════════════════════════════════════════════
              EXACTLY 3 MAIN PROGRAM CARDS
              ═════════════════════════════════════════════════════ */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {programs.map((program, idx) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 * idx, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col bg-[#FFFFFF] rounded-3xl border border-[#DDD7CC] hover:border-[#6B1830] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl shadow-sm overflow-hidden"
              >
                {/* Image Header with Hover Scale */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#EFEAE1] border-b border-[#DDD7CC]">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  
                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#FFFFFF]/90 text-[#171717] backdrop-blur-sm border border-[#DDD7CC]">
                      {program.badge}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#6B1830] text-white flex items-center justify-center shadow-md">
                      <program.icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Program Number on Image */}
                  <div className="absolute bottom-3 left-4 text-white">
                    <span className="font-mono text-xs font-bold tracking-wider text-white/90">
                      {program.code}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between space-y-6">
                  <div>
                    {/* Subtitle */}
                    {program.subtitle && (
                      <span className="text-xs font-mono font-bold text-[#6B1830] uppercase tracking-wider block mb-2">
                        {program.subtitle}
                      </span>
                    )}

                    {/* Title */}
                    <h2
                      style={{ fontFamily: S.serif }}
                      className="text-2xl sm:text-3xl font-bold text-[#171717] leading-tight mb-4 group-hover:text-[#6B1830] transition-colors"
                    >
                      {program.title}
                    </h2>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-[#6B6464] leading-relaxed mb-6">
                      {program.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {program.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="px-3 py-1 rounded-md bg-[#F7F4EE] border border-[#DDD7CC] text-xs font-medium text-[#171717] group-hover:border-[#6B1830]/30 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Explore Button: Direct Page Navigation */}
                  <div className="pt-6 border-t border-[#DDD7CC]">
                    <Link href={program.link}>
                      <a className="w-full py-4 px-6 rounded-xl bg-[#F7F4EE] hover:bg-[#6B1830] text-[#171717] hover:text-white font-serif font-bold text-base transition-all duration-300 border border-[#DDD7CC] hover:border-[#6B1830] flex items-center justify-between group/btn shadow-sm hover:shadow-md">
                        <span>Explore Program</span>
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform" />
                      </a>
                    </Link>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Guidance Note */}
          <div className="mt-16 text-center text-sm text-[#6B6464]">
            <span>Need advice on selecting the right path for your background? </span>
            <Link href="/contact-us">
              <a className="font-bold text-[#6B1830] underline hover:text-[#8B2945]">
                Speak directly with an Academic Counselor →
              </a>
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
