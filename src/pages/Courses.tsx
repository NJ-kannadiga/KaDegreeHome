import React, { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
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
  Star,
  ShieldCheck,
  Calendar,
  Clock,
  CreditCard,
  Building2,
  ExternalLink,
  ChevronDown,
  Check,
  Zap,
} from "lucide-react";

// Existing images from the project
import fullStackCardImg from "@assets/program_ai_internship.jpg";
import placementCardImg from "@assets/program_placement_prep.jpg";
import commerceCardImg from "@assets/program_ai_commerce.jpg";
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

const easeCurve: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 1, y: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay: 0, ease: easeCurve },
  }),
};

// Map program metadata for competitive clarity (duration, EMI, rating, mode)
const programMeta: Record<string, { duration: string; schedule: string; emi: string; rating: string; reviews: string; mode: string }> = {
  "ai-fullstack-skill-upgrade": {
    duration: "4–6 Months",
    schedule: "4 Days / Wk • 1-2 Hrs/Session",
    emi: "or ₹2,500/month",
    rating: "4.9",
    reviews: "180+ Reviews",
    mode: "Live Online",
  },
  "ai-fullstack-placement-program": {
    duration: "4 Months",
    schedule: "Intensive Placement Track",
    emi: "or ₹5,000/month (Placement Model)",
    rating: "4.9",
    reviews: "120+ Reviews",
    mode: "Online / Hybrid",
  },
  "paid-internship-bca-mca": {
    duration: "3–6 Months",
    schedule: "Flexible Project Hours",
    emi: "or ₹1,000 Advance",
    rating: "4.8",
    reviews: "240+ Reviews",
    mode: "Online / Hybrid",
  },
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
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

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

  const faqs = [
    {
      q: "Can I pay in monthly installments or pay an advance to book a slot?",
      a: "Yes! You can reserve your seat by paying a small advance slot booking fee (₹1,000), or pay the full fee. Easy installment options and flexi-payment options are available.",
    },
    {
      q: "Do I need prior coding experience to join these programs?",
      a: "No advanced experience is required. We start from Programming Fundamentals (Module 1). Basic familiarity with computers and a strong desire to learn software engineering is all you need.",
    },
    {
      q: "Will I receive an official certificate upon completion?",
      a: "Yes. Every student who completes the required project builds receives an official ISO Standard Verified Certificate from KA Degree, complete with a QR code link to your live GitHub and Vercel portfolio.",
    },
    {
      q: "How does the Placement Assistance work?",
      a: "Our dedicated placement cell actively tracks fresher hiring across top companies in Bangalore and India. We provide ATS resume optimization, direct recruiter referrals, and 1-on-1 mock technical interviews.",
    },
    {
      q: "What is the class mode and duration?",
      a: "Classes are held online with live mentor support, code reviews, and pair-programming sessions. Programs run 3 to 6 months flexible based on your weekly availability.",
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
        title="Programs & Cohorts | KA Degree"
        description="Whether you want to build real-world technology, prepare for your first job, or master AI full stack development — choose the path that fits your goals."
      />

      <Navbar />

      <main className="flex-1 pt-36 sm:pt-40 md:pt-44 pb-24 md:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* ═════════════════════════════════════════════════
              1. HERO SECTION & VALUE PROPOSITION
              ═════════════════════════════════════════════════ */}
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

          {/* ═════════════════════════════════════════════════
              2. TRUST STRIP BAR
              ═════════════════════════════════════════════════ */}
          <div className="mb-16 bg-[#FFFFFF] border border-[#DDD7CC] rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[#DDD7CC]">
              <div className="pt-3 md:pt-0">
                <span className="text-2xl sm:text-3xl font-bold font-serif text-[#6B1830] block">500+</span>
                <span className="text-xs font-mono font-bold text-[#6B6464] uppercase tracking-wider">Students Trained</span>
              </div>
              <div className="pt-3 md:pt-0">
                <span className="text-2xl sm:text-3xl font-bold font-serif text-[#171717] block">ISO Standard</span>
                <span className="text-xs font-mono font-bold text-[#6B6464] uppercase tracking-wider">Verified Credential</span>
              </div>
              <div className="pt-3 md:pt-0">
                <span className="text-2xl sm:text-3xl font-bold font-serif text-[#6B1830] block">10+ YOE</span>
                <span className="text-xs font-mono font-bold text-[#6B6464] uppercase tracking-wider">Senior Industry Mentors</span>
              </div>
              <div className="pt-3 md:pt-0">
                <span className="text-2xl sm:text-3xl font-bold font-serif text-[#171717] block">TCS • WIPRO</span>
                <span className="text-xs font-mono font-bold text-[#6B6464] uppercase tracking-wider">Accentue • Infosys</span>
              </div>
            </div>
          </div>

          {/* ═════════════════════════════════════════════════
              3. PROGRAM CARDS GRID
              ═════════════════════════════════════════════════ */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {filteredPrograms.map((program: Program, idx: number) => {
              const IconComp = programIcons[program.id] || Code2;
              const cardImg = programImages[program.id] || fullStackCardImg;
              const meta = programMeta[program.id] || {
                duration: "4–6 Months",
                schedule: "Live Classes",
                emi: "Flexi-payment",
                rating: "4.9",
                reviews: "150+ Reviews",
                mode: "Online / Hybrid",
              };

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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {/* Top Badge & Rating Tag */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="text-[11px] font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#FFFFFF]/90 text-[#171717] backdrop-blur-sm border border-[#DDD7CC] shadow-sm">
                        {program.badge}
                      </span>
                      <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#6B1830] text-white text-xs font-mono font-bold shadow-md">
                        <Star className="w-3 h-3 text-amber-300 fill-amber-300" />
                        <span>{meta.rating}</span>
                      </div>
                    </div>

                    {/* Program Degree & Year Tag + Compiled Motif */}
                    <div className="absolute bottom-3 left-4 right-4 text-white flex items-center justify-between gap-2 z-10">
                      <span className="font-mono text-xs font-bold tracking-wider text-white/90 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm border border-white/10">
                        {program.degree} • {program.year}
                      </span>
                      <span className="font-mono text-[10px] font-semibold text-emerald-300 bg-black/70 px-2 py-0.5 rounded backdrop-blur-sm flex items-center gap-1 border border-emerald-500/40">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" /> compiled ✓
                      </span>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between space-y-6">
                    <div>
                      {/* Meta Info Bar: Duration & Mode */}
                      <div className="flex items-center gap-3 text-xs font-mono text-[#6B6464] mb-3">
                        <span className="flex items-center gap-1 font-semibold text-[#171717]">
                          <Clock className="w-3.5 h-3.5 text-[#6B1830]" />
                          {meta.duration}
                        </span>
                        <span>•</span>
                        <span className="bg-[#F7F4EE] px-2 py-0.5 rounded border border-[#DDD7CC] font-bold text-[#6B1830]">
                          {meta.mode}
                        </span>
                      </div>

                      {/* Title */}
                      <h2
                        style={{ fontFamily: S.serif }}
                        className="text-2xl font-bold text-[#171717] leading-tight mb-3 group-hover:text-[#6B1830] transition-colors"
                      >
                        {program.title}
                      </h2>

                      {/* Description */}
                      <p className="text-sm text-[#6B6464] leading-relaxed mb-5">
                        {program.short}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
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

                      {/* Seats & Fee Row with EMI framing */}
                      <div className="pt-3 border-t border-[#DDD7CC]/70 space-y-1.5">
                        <div className="flex items-center justify-between text-xs text-[#6B6464]">
                          <span className="font-semibold text-[#171717]">
                            Fee: <strong className="text-[#6B1830] font-bold text-base">{program.fee}</strong>
                          </span>
                          <span>
                            Seats: <strong className="text-[#171717]">{program.seats.filled}/{program.seats.total} Filled</strong>
                          </span>
                        </div>
                        <div className="text-[11px] font-mono text-[#6B1830] font-bold flex items-center gap-1">
                          <CreditCard className="w-3 h-3 text-[#6B1830]" />
                          <span>{meta.emi}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action CTA Buttons */}
                    <div className="pt-4 border-t border-[#DDD7CC] flex flex-col sm:flex-row gap-2">
                      <Link
                        href={
                          program.id === "ai-fullstack-skill-upgrade"
                            ? "/programs/ai-full-stack-developer"
                            : program.id === "ai-fullstack-placement-program"
                            ? "/programs/placement-preparation"
                            : program.id === "paid-internship-bca-mca"
                            ? "/internship"
                            : "/programs/ai-full-stack-developer"
                        }
                        className="flex-1 py-3 px-4 rounded-xl bg-[#FFFFFF] border border-[#DDD7CC] hover:bg-[#EFEAE1] text-[#171717] font-serif font-bold text-sm transition-all duration-300 flex items-center justify-center gap-1.5 shadow-xs"
                      >
                        <span>View Details</span>
                      </Link>
                      <Link
                        href={`/apply?program=${encodeURIComponent(program.title)}`}
                        className="flex-1 py-3 px-4 rounded-xl bg-[#6B1830] hover:bg-[#8B2945] text-white font-serif font-bold text-sm transition-all duration-300 flex items-center justify-center gap-1.5 shadow-sm hover:shadow-md"
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

          {/* ═════════════════════════════════════════════════
              4. MENTOR & LEADERSHIP HIGHLIGHTS
              ═════════════════════════════════════════════════ */}
          <div className="mt-24 bg-[#EFEAE1] border border-[#DDD7CC] rounded-3xl p-8 sm:p-12">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5">
                <span className="text-[12px] font-mono font-bold tracking-widest uppercase text-[#6B1830] block mb-3">
                  DIRECT INDUSTRY MENTORSHIP
                </span>
                <h2 style={{ fontFamily: S.serif }} className="text-3xl sm:text-4xl font-bold text-[#171717] mb-4">
                  Learn from Engineers with 10+ Years Experience
                </h2>
                <p className="text-sm sm:text-base text-[#6B6464] leading-relaxed mb-6">
                  You won't be guided by fresh graduates. Our lead mentors (NJ Sir, Guru Sir, Shilpa Ma'am, Pavan Sir & Sachin Sir) conduct weekly 1-on-1 PR reviews, architectural syncs, and mock technical gauntlets.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-mono font-bold text-[#6B1830]">
                  <span className="bg-[#FFFFFF] px-3 py-1.5 rounded-lg border border-[#DDD7CC]">• SDE Leads</span>
                  <span className="bg-[#FFFFFF] px-3 py-1.5 rounded-lg border border-[#DDD7CC]">• AI Architects</span>
                  <span className="bg-[#FFFFFF] px-3 py-1.5 rounded-lg border border-[#DDD7CC]">• DSA Mentors</span>
                </div>
              </div>

              <div className="lg:col-span-7 grid sm:grid-cols-3 gap-4">
                {[
                  { name: "Rahul S.", role: "BCA Student", quote: "Built my first AI full stack app with real mentor feedback. Totally worth it!" },
                  { name: "Priya V.", role: "MCA Graduate", quote: "The Flask and FastAPI backend module made data flow completely crystal clear." },
                  { name: "Kiran K.", role: "B.Tech Engineering", quote: "Projects were live on GitHub and Vercel before I even finished the cohort." },
                ].map((st, sidx) => (
                  <div key={sidx} className="bg-[#FFFFFF] p-5 rounded-2xl border border-[#DDD7CC] flex flex-col justify-between">
                    <p className="text-xs text-[#6B6464] italic mb-4">"{st.quote}"</p>
                    <div>
                      <span className="font-serif font-bold text-sm text-[#171717] block">{st.name}</span>
                      <span className="text-[11px] font-mono text-[#6B1830] font-semibold">{st.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ═════════════════════════════════════════════════
              5. FREQUENTLY ASKED QUESTIONS (FAQ)
              ═════════════════════════════════════════════════ */}
          <div className="mt-24 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[12px] font-mono font-bold tracking-widest uppercase text-[#6B1830] block mb-3">
                CLEAR ANSWERS
              </span>
              <h2 style={{ fontFamily: S.serif }} className="text-3xl sm:text-4xl font-bold text-[#171717]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-[#FFFFFF] rounded-2xl border border-[#DDD7CC] overflow-hidden shadow-xs"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full text-left px-6 sm:px-8 py-5 flex items-center justify-between gap-4 focus:outline-none"
                    >
                      <span className="font-serif font-bold text-lg text-[#171717]">
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
                          <div className="px-6 sm:px-8 pb-6 text-[#6B6464] text-sm leading-relaxed border-t border-[#DDD7CC]/50 pt-4">
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
