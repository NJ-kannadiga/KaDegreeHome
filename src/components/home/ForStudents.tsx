import React, { useEffect } from "react";
import { Link } from "wouter";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Laptop,
  Code2,
  Award,
  TrendingUp,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

// Realistic high-quality imagery from existing project assets
import imgInternship from "@assets/program_ai_internship.jpg";
import imgPrograms from "@assets/developer_hero.jpg";
import imgPlacement from "@assets/program_placement_prep.jpg";
import imgAiCommerce from "@assets/program_ai_commerce.jpg";

/* --- Design Tokens --- */
const S = {
  bgWarm: "#F8F3EC",
  cardBg: "#FFFFFF",
  text: "#171417",
  muted: "#635C57",
  burgundy: "#6B1830",
  burgundyDark: "#3B071F",
  border: "#DDD7CC",
  serif: '"Libre Caslon Text", Georgia, serif',
  sans: '"Source Sans 3", system-ui, sans-serif',
};

export function ForStudents() {
  const shouldReduceMotion = useReducedMotion();

  // Support direct hash navigation (#opportunities) on page mount
  useEffect(() => {
    if (window.location.hash === "#opportunities" || window.location.hash === "#students") {
      const el = document.getElementById("opportunities");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 120);
      }
    }
  }, []);

  const opportunities = [
    {
      id: "01",
      code: "01 — ONLINE INTERNSHIPS",
      title: "Online Internships",
      tagline: "Work on real projects. Learn from mentors. Build experience.",
      includes: [
        "AI & Full Stack",
        "Real-world projects",
        "Mentor guidance",
        "Certificate",
      ],
      buttonText: "Explore Internships",
      destination: "/internship",
      image: imgInternship,
      icon: Laptop,
      badge: "Real-World Experience",
      accentGlow: "from-[#6B1830]/15 via-transparent to-transparent",
    },
    {
      id: "02",
      code: "02 — CAREER PROGRAMS",
      title: "Career Programs",
      tagline: "Structured programs designed around the skills companies actually need.",
      includes: [
        "Full Stack Development",
        "AI & Machine Learning",
        "Industry projects",
        "Career preparation",
      ],
      buttonText: "Explore Programs",
      destination: "/programs",
      image: imgPrograms,
      icon: Code2,
      badge: "Core Tech Disciplines",
      accentGlow: "from-[#171417]/15 via-transparent to-transparent",
    },
    {
      id: "03",
      code: "03 — PLACEMENT PREPARATION",
      title: "Placement Preparation",
      tagline: "Turn your preparation into interview confidence.",
      includes: [
        "Coding & Aptitude",
        "Technical preparation",
        "Mock interviews",
        "Resume support",
      ],
      buttonText: "Prepare for Placement",
      destination: "/programs/placement-preparation",
      image: imgPlacement,
      icon: Award,
      badge: "Interview Ready",
      accentGlow: "from-[#6B1830]/15 via-transparent to-transparent",
    },
    {
      id: "04",
      code: "04 — AI FOR COMMERCE",
      title: "AI for Commerce",
      tagline: "Learn how AI is transforming modern businesses.",
      includes: [
        "Business Analytics",
        "AI Automation",
        "Customer Intelligence",
        "Demand Forecasting",
      ],
      buttonText: "Explore AI for Commerce",
      destination: "/programs/ai-for-commerce",
      image: imgAiCommerce,
      icon: TrendingUp,
      badge: "Commercial Intelligence",
      accentGlow: "from-[#3B071F]/15 via-transparent to-transparent",
    },
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 35 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        delay: shouldReduceMotion ? 0 : i * 0.12,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section
      id="opportunities"
      style={{
        backgroundColor: S.bgWarm,
        color: S.text,
        fontFamily: S.sans,
      }}
      className="relative py-28 md:py-36 border-b border-[#DDD7CC] overflow-hidden"
    >
      {/* Background subtle editorial dotted pattern */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #171417 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ═════════════════════════════════════════════════
            SECTION HEADER
            ═════════════════════════════════════════════════ */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          
          {/* Section Kicker Badge */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={headerVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#DDD7CC] bg-[#FFFFFF] text-[11px] font-mono font-bold tracking-widest text-[#6B1830] uppercase mb-6 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#6B1830]" />
            <span>OPPORTUNITIES</span>
          </motion.div>

          {/* Section Title */}
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={headerVariants}
            style={{ fontFamily: S.serif }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#171417] leading-[1.08] mb-6"
          >
            Your Next Opportunity Starts Here.
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={headerVariants}
            className="text-lg sm:text-xl text-[#635C57] leading-relaxed max-w-2xl"
          >
            Learn through real work, build your portfolio, and take the next step toward your career.
          </motion.p>

        </div>

        {/* ═════════════════════════════════════════════════
            4 LARGE INTERACTIVE OPPORTUNITY CARDS
            ═════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {opportunities.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="group flex flex-col bg-[#FFFFFF] rounded-3xl border border-[#DDD7CC] hover:border-[#6B1830] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl shadow-sm overflow-hidden"
            >
              {/* Card Visual Header with subtle parallax and zoom */}
              <div className="relative aspect-[16/9] sm:aspect-[16/8.5] overflow-hidden bg-[#EFEAE1] border-b border-[#DDD7CC]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Cinematic Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.accentGlow} opacity-60 group-hover:opacity-100 transition-opacity`}
                />

                {/* Top Badge & Animated Number */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="text-[11px] font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#FFFFFF]/90 text-[#171417] backdrop-blur-sm border border-[#DDD7CC] shadow-sm">
                    {item.badge}
                  </span>

                  {/* Subtle Number Animation Badge */}
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3B071F]/80 backdrop-blur-sm text-white border border-white/20 text-xs font-mono font-bold tracking-widest group-hover:bg-[#6B1830] transition-colors">
                    <span>{item.id}</span>
                  </div>
                </div>

                {/* Bottom Code & Title overlay on image for rich context */}
                <div className="absolute bottom-4 left-5 right-5 text-white z-10 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold tracking-widest uppercase text-white/90">
                    {item.code}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#6B1830] group-hover:scale-110 transition-all">
                    <item.icon className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Card Body Content */}
              <div className="p-7 sm:p-9 flex flex-col flex-1 justify-between space-y-6">
                
                <div className="space-y-4">
                  {/* Title */}
                  <h3
                    style={{ fontFamily: S.serif }}
                    className="text-2xl sm:text-3xl font-bold text-[#171417] leading-tight group-hover:text-[#6B1830] transition-colors"
                  >
                    {item.title}
                  </h3>

                  {/* Tagline / Hook */}
                  <p className="text-base text-[#6B1830] font-medium leading-snug">
                    “{item.tagline}”
                  </p>

                  {/* Bullet Highlights */}
                  <div className="pt-4 border-t border-[#DDD7CC]/70">
                    <span className="text-[11px] font-mono font-bold text-[#171417] uppercase tracking-wider block mb-3">
                      Included Highlights
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {item.includes.map((point, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2.5 text-xs sm:text-sm text-[#171417] font-medium"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#6B1830] shrink-0" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Explore Button */}
                <div className="pt-6 border-t border-[#DDD7CC]">
                  <Link href={item.destination}>
                    <a className="w-full py-3.5 sm:py-4 px-6 rounded-xl bg-[#F8F3EC] hover:bg-[#6B1830] text-[#171417] hover:text-white font-serif font-bold text-base transition-all duration-300 border border-[#DDD7CC] hover:border-[#6B1830] flex items-center justify-between group/btn shadow-sm hover:shadow-md">
                      <span>{item.buttonText}</span>
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform" />
                    </a>
                  </Link>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
