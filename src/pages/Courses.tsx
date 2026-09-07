import React, { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/layout/SEO";
import { PROGRAMS, type Program } from "@/data/programs";
import {
  ArrowRight,
  Sparkles,
  Code2,
  Briefcase,
  TrendingUp,
  Award,
  Users,
  CheckCircle2,
  Layers,
  GraduationCap,
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

const easeCurve: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 1, y: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay: 0, ease: easeCurve },
  }),
};

// Map program icons and images
const programImages: Record<string, string> = {
  "ai-fullstack-skill-upgrade": fullStackCardImg,
  "ai-fullstack-placement-program": placementCardImg,
  "bca-2": fullStackCardImg,
  "paid-internship-bca-mca": placementCardImg,
  "advanced-frontend-engineering": commerceCardImg,
};

const programIcons: Record<string, any> = {
  "ai-fullstack-skill-upgrade": Code2,
  "ai-fullstack-placement-program": Briefcase,
  "bca-2": Layers,
  "paid-internship-bca-mca": GraduationCap,
  "advanced-frontend-engineering": TrendingUp,
};

export default function Courses() {
  const [selectedDegree, setSelectedDegree] = useState<string>("All");

  const degrees = ["All", "BCA", "MCA", "B.E / B.Tech", "All Degrees"];

  const filteredPrograms = (selectedDegree === "All" || selectedDegree === "All Degrees")
    ? PROGRAMS
    : PROGRAMS.filter((p) => {
        const query = selectedDegree.toLowerCase();
        return (
          p.degree.toLowerCase().includes(query) ||
          p.overview.introduction.toLowerCase().includes(query) ||
          p.short.toLowerCase().includes(query) ||
          p.title.toLowerCase().includes(query)
        );
      });

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
        title="Programs & Cohorts | KA Degree"
        description="Whether you want to build real-world technology, prepare for your first job, or master AI full stack development — choose the path that fits your goals."
      />

      <Navbar />

      <main className="flex-1 pt-36 sm:pt-40 md:pt-44 pb-24 md:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* HERO SECTION */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
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
              className="text-lg sm:text-xl text-[#6B6464] leading-relaxed mb-8"
            >
              Explore our mentor-led cohorts across AI Full Stack, Placement Accelerator, and Specialized Engineering tracks.
            </motion.p>

            {/* Filter Pills */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={3}
              className="flex flex-wrap justify-center gap-2"
            >
              {degrees.map((deg) => (
                <button
                  key={deg}
                  type="button"
                  onClick={() => setSelectedDegree(deg)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                    selectedDegree === deg
                      ? "bg-[#6B1830] text-white shadow-md"
                      : "bg-[#FFFFFF] border border-[#DDD7CC] text-[#6B6464] hover:border-[#6B1830]"
                  }`}
                >
                  {deg === "All" ? "All Programs" : deg}
                </button>
              ))}
            </motion.div>
          </div>

          {/* PROGRAM CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {filteredPrograms.map((program: Program, idx: number) => {
              const IconComp = programIcons[program.id] || Code2;
              const cardImg = programImages[program.id] || fullStackCardImg;

              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * idx, ease: easeCurve }}
                  className="group flex flex-col bg-[#FFFFFF] rounded-3xl border border-[#DDD7CC] hover:border-[#6B1830] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl shadow-sm overflow-hidden"
                >
                  {/* Image Header */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#EFEAE1] border-b border-[#DDD7CC]">
                    <img
                      src={cardImg}
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
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Program Degree & Year Tag + Terminal Motif Badge */}
                    <div className="absolute bottom-3 left-4 right-4 text-white flex items-center justify-between gap-2">
                      <span className="font-mono text-xs font-bold tracking-wider text-white/90 bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">
                        {program.degree} • {program.year}
                      </span>
                      <span className="font-mono text-[10px] font-semibold text-emerald-300 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm flex items-center gap-1 border border-emerald-500/30">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" /> compiled ✓
                      </span>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between space-y-6">
                    <div>
                      {/* Title */}
                      <h2
                        style={{ fontFamily: S.serif }}
                        className="text-2xl font-bold text-[#171717] leading-tight mb-3 group-hover:text-[#6B1830] transition-colors"
                      >
                        {program.title}
                      </h2>

                      {/* Description */}
                      <p className="text-sm text-[#6B6464] leading-relaxed mb-6">
                        {program.short}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {program.techStack.slice(0, 4).map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className="px-2.5 py-1 rounded-md bg-[#F7F4EE] border border-[#DDD7CC] text-[11px] font-mono font-medium text-[#171717]"
                          >
                            {tech}
                          </span>
                        ))}
                        {program.techStack.length > 4 && (
                          <span className="px-2 py-1 rounded-md bg-[#F7F4EE] text-[11px] font-mono font-medium text-[#6B1830]">
                            +{program.techStack.length - 4} more
                          </span>
                        )}
                      </div>

                      {/* Seats & Fee Row */}
                      <div className="flex items-center justify-between pt-2 text-xs text-[#6B6464] border-t border-[#DDD7CC]/50">
                        <span className="font-semibold text-[#171717]">
                          Fee: <strong className="text-[#6B1830] font-bold">{program.fee}</strong>
                        </span>
                        <span>
                          Seats: <strong className="text-[#171717]">{program.seats.filled}/{program.seats.total} Filled</strong>
                        </span>
                      </div>
                    </div>

                    {/* Action CTA Button */}
                    <div className="pt-4 border-t border-[#DDD7CC] flex gap-2">
                      <Link
                        href={`/apply?program=${encodeURIComponent(program.title)}`}
                        className="flex-1 py-3 px-4 rounded-xl bg-[#6B1830] hover:bg-[#8B2945] text-white font-serif font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                      >
                        <span>Apply Now</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Guidance Note */}
          <div className="mt-16 text-center text-sm text-[#6B6464]">
            <span>Need advice on selecting the right path for your background? </span>
            <Link
              href="/contact-us"
              className="font-bold text-[#6B1830] underline hover:text-[#8B2945]"
            >
              Speak directly with an Academic Counselor →
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

