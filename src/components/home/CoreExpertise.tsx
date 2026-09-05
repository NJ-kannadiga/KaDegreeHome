import React from "react";
import { Link } from "wouter";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Cpu,
  Layers,
  Code2,
  Check,
  CheckCircle2,
  BarChart3,
  Users,
  Megaphone,
} from "lucide-react";

// Existing images from the project
import dmImg from "@assets/card_digital_marketing.jpg";
import outsourcingImg from "@assets/card_outsourcing.jpg";
import aiCommerceImg from "@assets/card_ai_commerce.jpg";

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

export function CoreExpertise() {
  const shouldReduceMotion = useReducedMotion();

  const services = [
    {
      id: "01",
      code: "01 — DIGITAL MARKETING",
      title: "Digital Marketing",
      tagline: "Build visibility. Earn attention. Drive growth.",
      description:
        "Strategic digital marketing designed to help businesses reach the right audience, build trust and turn attention into measurable growth.",
      included: [
        "Brand & Digital Strategy",
        "Social Media & Content",
        "Performance Marketing",
        "Analytics & Optimization",
      ],
      link: "/services/digital-marketing",
      image: dmImg,
      icon: Megaphone,
      badge: "Audience & Acquisition",
      accentGradient: "from-[#6B1830]/10 via-transparent to-transparent",
    },
    {
      id: "02",
      code: "02 — OUTSOURCED SERVICES",
      title: "Outsourced Services",
      tagline: "Extend your team without the overhead.",
      description:
        "Get reliable technical and digital support from experienced professionals who work as an extension of your team.",
      included: [
        "Web Development",
        "Full Stack Development",
        "Technical Support",
        "Dedicated Development Teams",
      ],
      link: "/services/outsourced-services",
      image: outsourcingImg,
      icon: Code2,
      badge: "Dedicated Tech Capacity",
      accentGradient: "from-[#171717]/10 via-transparent to-transparent",
    },
    {
      id: "03",
      code: "03 — AI FOR COMMERCE",
      title: "AI for Commerce",
      tagline: "Turn intelligence into business impact.",
      description:
        "Use AI to understand customers, forecast demand, automate workflows and make faster, smarter business decisions.",
      included: [
        "Customer & Market Insights",
        "Demand Forecasting",
        "AI Automation",
        "Intelligent Workflows",
      ],
      link: "/services/ai-for-commerce",
      image: aiCommerceImg,
      icon: Cpu,
      badge: "Predictive Intelligence",
      accentGradient: "from-[#8B2945]/10 via-transparent to-transparent",
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
        delay: shouldReduceMotion ? 0 : i * 0.15,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section
      id="services"
      style={{
        backgroundColor: S.mainBg,
        color: S.text,
        fontFamily: S.sans,
      }}
      className="relative py-24 md:py-36 border-b border-[#DDD7CC] overflow-hidden"
    >
      {/* Subtle dotted background grid for editorial texture */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #171717 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ═════════════════════════════════════════════════
            SECTION HEADER
            ═════════════════════════════════════════════════ */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          
          {/* Section Title Pill */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={headerVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#DDD7CC] bg-[#FFFFFF] text-[11px] font-mono font-bold tracking-widest text-[#6B1830] uppercase mb-6 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#6B1830] animate-pulse" />
            <span>SERVICES</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={headerVariants}
            style={{ fontFamily: S.serif }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#171717] leading-[1.08] mb-6"
          >
            Digital expertise that moves businesses forward.
          </motion.h2>

          {/* Supporting Text */}
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={headerVariants}
            className="text-lg sm:text-xl text-[#6B6464] leading-relaxed max-w-2xl"
          >
            We help businesses grow through strategy, technology, digital marketing and practical AI solutions.
          </motion.p>

        </div>

        {/* ═════════════════════════════════════════════════
            3 LARGE PREMIUM SERVICE CARDS
            ═════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="group flex flex-col bg-[#FFFFFF] rounded-3xl border border-[#DDD7CC] hover:border-[#6B1830] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl shadow-sm overflow-hidden"
            >
              {/* Card Visual Header with subtle imagery & identity */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#EFEAE1] border-b border-[#DDD7CC]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Decorative Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.accentGradient} opacity-60 group-hover:opacity-100 transition-opacity`}
                />

                {/* Top Floating Badge & Icon */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#FFFFFF]/90 text-[#171717] backdrop-blur-sm border border-[#DDD7CC] shadow-sm">
                    {service.badge}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-[#6B1830] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <service.icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Service Code on Image */}
                <div className="absolute bottom-3 left-4 text-white">
                  <span className="font-mono text-xs font-bold tracking-wider text-white/90">
                    {service.code}
                  </span>
                </div>
              </div>

              {/* Card Body Content */}
              <div className="p-7 sm:p-9 flex flex-col flex-1 justify-between space-y-6">
                
                <div className="space-y-4">
                  {/* Service Hook / Subheading */}
                  <span className="text-xs font-mono font-bold text-[#6B1830] uppercase tracking-wider block">
                    {service.tagline}
                  </span>

                  {/* Title */}
                  <h3
                    style={{ fontFamily: S.serif }}
                    className="text-2xl sm:text-3xl font-bold text-[#171717] leading-tight group-hover:text-[#6B1830] transition-colors"
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#6B6464] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Included Pillars */}
                  <div className="pt-4 border-t border-[#DDD7CC]/60 space-y-2.5">
                    <span className="text-[11px] font-mono font-bold text-[#171717] uppercase tracking-wider block mb-1">
                      Key Capabilities
                    </span>
                    {service.included.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 text-xs sm:text-sm text-[#171717] font-medium"
                      >
                        <div className="w-4 h-4 rounded-full bg-[#6B1830]/10 flex items-center justify-center text-[#6B1830] shrink-0">
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Explore Service Action Button */}
                <div className="pt-6 border-t border-[#DDD7CC]">
                  <Link href={service.link}>
                    <a className="w-full py-3.5 sm:py-4 px-6 rounded-xl bg-[#F7F4EE] hover:bg-[#6B1830] text-[#171717] hover:text-white font-serif font-bold text-base transition-all duration-300 border border-[#DDD7CC] hover:border-[#6B1830] flex items-center justify-between group/btn shadow-sm hover:shadow-md">
                      <span>Explore Service</span>
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
