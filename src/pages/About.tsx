import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useReducedMotion,
  AnimatePresence,
} from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Layers, Lightbulb } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import campusImg from "@assets/generated_images/modern_campus.jpg";
import founderCenter from "@assets/generated_images/founder_center.jpg";
import founderRight from "@assets/generated_images/founder_right.jpg";
import founderLeft from "@assets/generated_images/founder_left.png";

/* ─────────────────────────────────────────────────────────
   CONSTANTS
───────────────────────────────────────────────────────── */
const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const easeOut: [number, number, number, number] = [0.0, 0.0, 0.2, 1.0];

/* ─────────────────────────────────────────────────────────
   REUSABLE SCROLL-REVEAL WRAPPER
   Triggers once when element enters viewport.
───────────────────────────────────────────────────────── */
function Reveal({
  children,
  delay = 0,
  className = "",
  y = 32,
  x = 0,
  scale = 1,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  x?: number;
  scale?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-72px" });
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y, x, scale }}
      animate={
        inView
          ? { opacity: 1, y: 0, x: 0, scale: 1 }
          : shouldReduce
          ? { opacity: 0 }
          : { opacity: 0, y, x, scale }
      }
      transition={{ duration: 0.9, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   WAVE SVG TRANSITIONS
───────────────────────────────────────────────────────── */
function WaveDown({ fill }: { fill: string }) {
  return (
    <div className="relative w-full overflow-hidden leading-none" style={{ height: 110 }}>
      <svg
        viewBox="0 0 1440 110"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 w-full h-full"
      >
        <path
          d="M0,40 C180,110 360,0 540,60 C720,120 900,10 1080,55 C1260,100 1380,25 1440,55 L1440,110 L0,110 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   ANIMATED STAT COUNTER  (runs once when in view)
───────────────────────────────────────────────────────── */
function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.75, ease }}
      className="flex flex-col"
    >
      <span className="font-serif text-[36px] font-bold text-[#171417] leading-none">
        {value}
      </span>
      <span className="text-[11px] text-[#6B6464] font-medium tracking-widest mt-1 uppercase">
        {label}
      </span>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────── */
export default function About() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const shouldReduce = useReducedMotion();

  /* Mouse parallax for hero image */
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const h = (e: MouseEvent) =>
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 14,
        y: (e.clientY / window.innerHeight - 0.5) * 14,
      });
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, []);

  /* Scroll-based parallax for hero section */
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroBgY = useTransform(heroScroll, [0, 1], [0, 40]);

  /* Ideology section ref for heading reveal */
  const ideologyRef = useRef<HTMLDivElement>(null);
  const ideologyInView = useInView(ideologyRef, { once: true, margin: "-80px" });

  /* CTA section ref */
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  /* Leadership section ref */
  const leadershipRef = useRef<HTMLDivElement>(null);
  const leadershipInView = useInView(leadershipRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-[#F8F3EC] text-[#171417] font-sans selection:bg-[#5A0B2E] selection:text-white overflow-x-hidden">
      <Navbar />

      {/* ══════════════════════════════════════════════
          SECTION 01 — HERO   bg: #F8F3EC
      ══════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative bg-[#F8F3EC] pt-40 pb-0 overflow-hidden">

        {/* Animated dot grid top-right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ duration: 1.4, delay: 0.8, ease }}
          className="absolute top-28 right-6 md:right-16 grid grid-cols-5 gap-[10px] pointer-events-none"
        >
          {Array.from({ length: 25 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-[5px] h-[5px] rounded-full bg-[#5A0B2E]"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.9 + i * 0.03, ease }}
            />
          ))}
        </motion.div>

        {/* Decorative circles */}
        <motion.div
          style={{ y: heroBgY }}
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full border border-[#5A0B2E]/[0.06] pointer-events-none"
        />
        <motion.div
          style={{ y: useTransform(heroScroll, [0, 1], [0, 20]) }}
          className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full border border-[#5A0B2E]/[0.03] pointer-events-none"
        />

        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* ── LEFT COPY — staggered line-by-line reveal ── */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
              }}
              className="pt-2"
            >
              {/* Eyebrow — line + text */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
                }}
                className="flex items-center gap-3 mb-8"
              >
                <motion.div
                  variants={{
                    hidden: { scaleX: 0, opacity: 0 },
                    visible: { scaleX: 1, opacity: 1, transition: { duration: 0.6, ease } },
                  }}
                  style={{ originX: 0 }}
                  className="h-[1px] w-10 bg-[#5A0B2E]"
                />
                <motion.span
                  variants={{
                    hidden: { opacity: 0, x: -8 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
                  }}
                  className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#5A0B2E]"
                >
                  ABOUT KA DEGREE
                </motion.span>
              </motion.div>

              {/* Headline — each line independent */}
              <div className="mb-8 overflow-hidden">
                <motion.h1
                  className="font-serif text-[48px] sm:text-[62px] md:text-[76px] leading-[1.04] tracking-[-0.025em]"
                  variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.14 } } }}
                >
                  <div className="overflow-hidden">
                    <motion.span
                      className="text-[#171417] block"
                      variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease } },
                      }}
                    >
                      Learning That
                    </motion.span>
                  </div>
                  <div className="overflow-hidden">
                    <motion.span
                      className="text-[#5A0B2E] italic block"
                      variants={{
                        hidden: { opacity: 0, y: 44 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
                      }}
                    >
                      Moves You Forward.
                    </motion.span>
                  </div>
                </motion.h1>
              </div>

              {/* Body paragraph */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease } },
                }}
                className="text-[16px] md:text-[18px] leading-[1.75] text-[#6B6464] max-w-[490px] mb-12"
              >
                We are a prestige academic institution dedicated to the profound exploration of
                structural theory and practical application. Our curriculum is designed not just
                to impart knowledge, but to forge the intellectual scaffolding necessary for
                building the future.
              </motion.p>

              {/* Stats row — each stat staggers */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, ease, staggerChildren: 0.14 },
                  },
                }}
                className="flex items-center gap-10 mb-12 border-t border-[#DED5CC] pt-8"
              >
                {[
                  { value: "2024", label: "Established" },
                  { value: "5K+",  label: "Students" },
                  { value: "10+",  label: "Programs" },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
                    }}
                    className={`flex flex-col ${i > 0 ? "border-l border-[#DED5CC] pl-10" : ""}`}
                  >
                    <span className="font-serif text-[36px] font-bold text-[#171417] leading-none">
                      {s.value}
                    </span>
                    <span className="text-[11px] text-[#6B6464] font-medium tracking-widest mt-1 uppercase">
                      {s.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Quote — fades in last */}
              <motion.blockquote
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease } },
                }}
                className="border-l-[2px] border-[#5A0B2E] pl-6 text-[#6B6464] italic"
              >
                <p className="text-[15px] leading-[1.75] mb-1">
                  "Education is not the filling of a pail, but the lighting of a structural fire."
                </p>
                <footer className="text-[12px] font-semibold text-[#171417] not-italic tracking-wider">
                  — W.B. Yeats
                </footer>
              </motion.blockquote>
            </motion.div>

            {/* ── RIGHT IMAGE — float + mouse parallax ── */}
            <div className="relative flex items-start justify-center lg:justify-end mt-6 lg:mt-0">
              {/* Vertical editorial labels */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 1, ease }}
                className="hidden xl:flex flex-col justify-center gap-6 mr-8 mt-36 text-[9px] font-semibold tracking-[0.22em] uppercase text-[#6B6464]/70"
              >
                {["People", "Ideas", "Knowledge", "Opportunities"].map((l, i) => (
                  <motion.span
                    key={l}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 + i * 0.1, duration: 0.6, ease }}
                  >
                    {l}
                  </motion.span>
                ))}
              </motion.div>

              {/* Mouse-tracked wrapper */}
              <motion.div
                animate={shouldReduce ? {} : { x: mouse.x * -0.28, y: mouse.y * -0.28 }}
                transition={{ type: "spring", stiffness: 55, damping: 20 }}
                className="relative"
              >
                {/* Slow ambient float */}
                <motion.div
                  animate={shouldReduce ? {} : { y: [0, -7, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Photo frame entrance */}
                  <motion.div
                    initial={{ opacity: 0, y: 28, rotate: -2 }}
                    animate={{ opacity: 1, y: 0, rotate: -2 }}
                    transition={{ duration: 1.1, delay: 0.55, ease }}
                    whileHover={{ scale: 1.02, rotate: -1.2, transition: { duration: 0.45, ease } }}
                    className="relative w-[280px] sm:w-[340px] bg-white p-3 shadow-[0_24px_64px_rgba(90,11,46,0.12)] hover:shadow-[0_32px_80px_rgba(90,11,46,0.18)] rounded-[4px] cursor-default transition-shadow duration-500"
                  >
                    <img
                      src={campusImg}
                      alt="KA Degree Campus"
                      className="w-full aspect-[4/5] object-cover rounded-[2px]"
                    />
                    {/* "A Brighter Tomorrow" label — gentle fade-up */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.3, duration: 0.8, ease }}
                      className="absolute -top-11 right-4 text-right"
                    >
                      <p className="font-serif italic text-[14px] text-[#5A0B2E] leading-tight">
                        A Brighter
                      </p>
                      <p className="font-serif italic text-[14px] text-[#5A0B2E] leading-tight">
                        Tomorrow
                      </p>
                    </motion.div>
                    {/* Decorative corner line */}
                    <div className="absolute -bottom-4 -right-4 w-20 h-20 border border-[#5A0B2E]/20 rounded-[2px] pointer-events-none" />
                  </motion.div>
                </motion.div>

                {/* Floating dot grid — counter parallax */}
                <motion.div
                  animate={shouldReduce ? {} : { x: mouse.x * 0.45, y: mouse.y * 0.45 }}
                  className="absolute -bottom-10 -left-10 grid grid-cols-4 gap-[8px] opacity-45"
                >
                  {Array.from({ length: 16 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-[5px] h-[5px] rounded-full bg-[#5A0B2E]"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.0 + i * 0.04, duration: 0.35, ease }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Wave cream → dark-green */}
        <div className="mt-28">
          <WaveDown fill="#142319" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 02 — LEADERSHIP   bg: #142319
      ══════════════════════════════════════════════ */}
      <section className="relative bg-[#142319] text-[#F8F3EC] overflow-hidden pb-0">
        {/* Slow-drifting decorative circles */}
        <motion.div
          animate={shouldReduce ? {} : { y: [0, -12, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-[-200px] w-[520px] h-[520px] rounded-full border border-white/[0.03] pointer-events-none"
        />
        <motion.div
          animate={shouldReduce ? {} : { y: [0, 10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute top-24 right-[-80px] w-[300px] h-[300px] rounded-full border border-white/[0.04] pointer-events-none"
        />
        <motion.div
          animate={shouldReduce ? {} : { y: [0, -8, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-32 left-[-130px] w-[340px] h-[340px] rounded-full border border-white/[0.04] pointer-events-none"
        />

        {/* Dot grid */}
        <div className="absolute top-14 left-8 grid grid-cols-4 gap-[9px] opacity-15 pointer-events-none">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-[4px] h-[4px] rounded-full bg-[#F8F3EC]" />
          ))}
        </div>

        {/* Architectural SVG line-art */}
        <svg
          className="absolute right-0 bottom-20 opacity-[0.04] pointer-events-none w-[360px]"
          viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="40" y="80" width="320" height="180" stroke="white" strokeWidth="1"/>
          <line x1="40" y1="80" x2="200" y2="20" stroke="white" strokeWidth="1"/>
          <line x1="360" y1="80" x2="200" y2="20" stroke="white" strokeWidth="1"/>
          <line x1="130" y1="260" x2="130" y2="160" stroke="white" strokeWidth="1"/>
          <line x1="270" y1="260" x2="270" y2="160" stroke="white" strokeWidth="1"/>
          <rect x="130" y="160" width="140" height="100" stroke="white" strokeWidth="1"/>
          <line x1="40" y1="130" x2="360" y2="130" stroke="white" strokeWidth="0.5"/>
        </svg>

        <div className="max-w-[1360px] mx-auto px-6 md:px-12 pt-16 pb-0">
          {/* Section header */}
          <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20 border-b border-white/[0.08] pb-10">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-[1px] w-8 bg-[#DED5CC]/40" />
                <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-[#DED5CC]/60">
                  02 / LEADERSHIP
                </span>
              </div>
              <h2 className="font-serif text-[42px] md:text-[58px] leading-[1.04] font-bold tracking-[-0.01em]">
                Meet Our Founders
              </h2>
            </div>
            <p className="text-[13px] text-[#DED5CC]/50 max-w-[260px] leading-relaxed md:text-right italic font-light">
              "Architects of academia, curating a space where rigorous thought meets practical innovation."
            </p>
          </Reveal>

          {/* ── FOUNDER CARDS — staggered cinematic entrance ── */}
          <div
            ref={leadershipRef}
            className="relative flex flex-col md:flex-row items-end justify-center gap-5 pb-20"
          >
            {/* LEFT — slides in from left */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={leadershipInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
              transition={{ duration: 0.9, ease, delay: 0.1 }}
              className="w-full md:w-[28%] md:self-end md:mb-[60px] relative z-10 order-2 md:order-1"
            >
              <div className="group relative overflow-hidden rounded-[12px] border border-white/[0.12] shadow-2xl cursor-default">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={founderLeft}
                    alt="Nithin Kumar – CTO"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A0E]/95 via-[#0A1A0E]/20 to-transparent" />
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.03] transition-colors duration-500" />
                </div>
                {/* Card lift on hover via wrapper */}
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4, ease }}
                  className="absolute inset-0 pointer-events-none"
                />
                <div className="absolute bottom-0 left-0 right-0 p-5 transition-transform duration-500 group-hover:-translate-y-1">
                  <div className="h-[1px] w-8 bg-[#DED5CC]/35 mb-3" />
                  <p className="font-serif text-[17px] font-bold text-white leading-snug">
                    Nithin Kumar
                  </p>
                  <p className="text-[10px] text-[#DED5CC]/55 tracking-[0.13em] mt-1 uppercase font-medium">
                    CTO of the Company
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CENTER — rises from below, slightly later */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={
                leadershipInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 40, scale: 0.96 }
              }
              transition={{ duration: 1.0, ease, delay: 0.28 }}
              className="w-full md:w-[42%] relative z-20 order-1 md:order-2"
            >
              <div className="group relative overflow-hidden rounded-[16px] border-2 border-white/20 shadow-[0_40px_100px_rgba(0,0,0,0.55)] cursor-default transition-all duration-500 hover:border-white/35 hover:shadow-[0_55px_120px_rgba(0,0,0,0.65)]">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.45, ease }}
                  className="relative"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={founderCenter}
                      alt="Guru – CEO"
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A0E]/92 via-[#0A1A0E]/10 to-transparent" />
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.025] transition-colors duration-500" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-7 transition-transform duration-500 group-hover:-translate-y-1">
                    <div className="h-[1px] w-10 bg-[#DED5CC]/50 mb-3" />
                    <p className="font-serif text-[24px] font-bold text-white leading-snug">
                      Guru
                    </p>
                    <p className="text-[10px] text-[#DED5CC]/60 tracking-[0.13em] mt-1 uppercase font-medium">
                      CEO of the Company
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* RIGHT — slides in from right */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={leadershipInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
              transition={{ duration: 0.9, ease, delay: 0.46 }}
              className="w-full md:w-[28%] md:self-end md:mb-[60px] relative z-10 order-3"
            >
              <div className="group relative overflow-hidden rounded-[12px] border border-white/[0.12] shadow-2xl cursor-default">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={founderRight}
                    alt="Gagan – CHO"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A0E]/95 via-[#0A1A0E]/20 to-transparent" />
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.03] transition-colors duration-500" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 transition-transform duration-500 group-hover:-translate-y-1">
                  <div className="h-[1px] w-8 bg-[#DED5CC]/35 mb-3" />
                  <p className="font-serif text-[17px] font-bold text-white leading-snug">Gagan</p>
                  <p className="text-[10px] text-[#DED5CC]/55 tracking-[0.13em] mt-1 uppercase font-medium">
                    CHO of the Company
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave dark-green → navy */}
        <WaveDown fill="#102B38" />
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 03 — IDEOLOGY   bg: #102B38
      ══════════════════════════════════════════════ */}
      <section className="relative bg-[#102B38] text-[#F8F3EC] overflow-hidden">
        {/* Slow-drifting rings */}
        <motion.div
          animate={shouldReduce ? {} : { y: [0, -14, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-[-150px] w-[420px] h-[420px] rounded-full border border-white/[0.04] pointer-events-none"
        />
        <motion.div
          animate={shouldReduce ? {} : { y: [0, 10, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[-80px] left-[-100px] w-[300px] h-[300px] rounded-full border border-white/[0.03] pointer-events-none"
        />

        {/* Editorial text right */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 text-right text-white/[0.05] font-serif text-[14px] font-bold tracking-[0.3em] leading-[2.5] hidden lg:block pointer-events-none">
          KNOWLEDGE.<br />PERSPECTIVE.<br />PROGRESS.
        </div>

        {/* Architectural line-art left */}
        <svg
          className="absolute left-0 bottom-10 opacity-[0.04] pointer-events-none w-[280px]"
          viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="30" y="100" width="240" height="250" stroke="white" strokeWidth="1"/>
          <line x1="30" y1="100" x2="150" y2="30" stroke="white" strokeWidth="1"/>
          <line x1="270" y1="100" x2="150" y2="30" stroke="white" strokeWidth="1"/>
          <line x1="90" y1="350" x2="90" y2="220" stroke="white" strokeWidth="1"/>
          <line x1="210" y1="350" x2="210" y2="220" stroke="white" strokeWidth="1"/>
          <rect x="90" y="220" width="120" height="130" stroke="white" strokeWidth="1"/>
        </svg>

        <div className="max-w-[1360px] mx-auto px-6 md:px-12 pt-20 pb-6">
          {/* Header — ref-tracked for animated reveal */}
          <div ref={ideologyRef}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {/* Left: eyebrow + heading */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={ideologyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.9, ease }}
              >
                <motion.div
                  className="flex items-center gap-3 mb-5"
                  initial={{ opacity: 0 }}
                  animate={ideologyInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.7, ease, delay: 0.1 }}
                >
                  <div className="h-[1px] w-8 bg-[#F8F3EC]/25" />
                  <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-[#DED5CC]/60">
                    03 / IDEOLOGY
                  </span>
                </motion.div>
                <div className="overflow-hidden">
                  <motion.h2
                    className="font-serif text-[40px] md:text-[54px] leading-[1.08] font-bold"
                    initial={{ y: 50, opacity: 0 }}
                    animate={ideologyInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                    transition={{ duration: 0.9, ease, delay: 0.18 }}
                  >
                    What Drives Us
                  </motion.h2>
                </div>
              </motion.div>

              {/* Right: description */}
              <motion.p
                className="text-[15px] text-[#DED5CC]/55 leading-relaxed self-center border-l border-white/[0.08] pl-8"
                initial={{ opacity: 0, y: 20 }}
                animate={ideologyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.9, ease, delay: 0.35 }}
              >
                We are driven by the conviction that rigorous theoretical understanding must be
                married to exceptional practical execution. Our ideology is rooted in the timeless
                principles of structure, clarity, and permanence.
              </motion.p>
            </div>
          </div>

          {/* Cards — 150 / 300 / 450 ms stagger */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pb-4">
            {[
              {
                num: "01. RIGOR",
                title: "Academic Intensity",
                desc: "Demanding excellence in every pursuit, pushing the boundaries of conventional thought.",
                icon: BookOpen,
              },
              {
                num: "02. STRUCTURE",
                title: "Architectural Logic",
                desc: "Building knowledge on a solid, unshakeable foundation of first principles.",
                icon: Layers,
              },
              {
                num: "03. PRAXIS",
                title: "Applied Wisdom",
                desc: "Translating high theory into tangible, world-altering execution.",
                icon: Lightbulb,
              },
            ].map((card, i) => (
              <Reveal key={i} delay={0.15 + i * 0.15} y={36}>
                <motion.div
                  whileHover={{
                    y: -7,
                    transition: { duration: 0.38, ease },
                  }}
                  className="group h-full bg-white/[0.04] border border-white/[0.08] rounded-[18px] p-8 md:p-9 cursor-default hover:border-[#5A0B2E]/50 hover:bg-white/[0.07] transition-colors duration-500"
                  style={{ boxShadow: "none" }}
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.12, rotate: 6 }}
                    transition={{ duration: 0.38, ease }}
                    className="w-11 h-11 rounded-full border border-[#5A0B2E]/40 flex items-center justify-center mb-8 group-hover:border-[#5A0B2E] group-hover:bg-[#5A0B2E]/10 transition-colors duration-400"
                  >
                    <card.icon className="w-[18px] h-[18px] text-[#5A0B2E]" />
                  </motion.div>

                  {/* Number label */}
                  <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#DED5CC]/35 mb-3 group-hover:text-[#DED5CC]/60 transition-colors duration-400">
                    {card.num}
                  </p>

                  {/* Heading — subtle lift on hover */}
                  <motion.h3
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.3, ease }}
                    className="font-serif text-[21px] font-bold text-white mb-4 inline-block"
                  >
                    {card.title}
                  </motion.h3>

                  {/* Body */}
                  <p className="text-[14px] text-[#DED5CC]/50 leading-relaxed">{card.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Wave navy → warm-brown */}
        <div className="mt-16">
          <WaveDown fill="#713B26" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 04 — CTA   bg: #713B26
      ══════════════════════════════════════════════ */}
      <section className="relative bg-[#713B26] text-[#F8F3EC] overflow-hidden py-28">
        {/* Decorative rotating rings */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={shouldReduce ? {} : { rotate: 360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-[320px] -left-[220px] w-[750px] h-[750px] rounded-full border border-white/[0.04]"
          />
          <motion.div
            animate={shouldReduce ? {} : { rotate: -360 }}
            transition={{ duration: 65, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-[200px] -left-[100px] w-[520px] h-[520px] rounded-full border border-white/[0.05]"
          />
          {/* Architectural mountain line-art */}
          <svg
            className="absolute right-0 bottom-0 opacity-[0.06] pointer-events-none w-[420px]"
            viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg"
          >
            <polyline
              points="0,280 100,180 180,220 280,80 380,150 500,60"
              stroke="white" strokeWidth="1.5" fill="none"
            />
            <polyline
              points="0,300 80,200 160,240 260,100 360,170 500,80 500,300"
              stroke="white" strokeWidth="0.5" fill="none" strokeDasharray="4,6"
            />
          </svg>
          {/* Editorial text */}
          <div className="absolute top-8 right-10 text-[#F8F3EC]/[0.07] font-serif text-[16px] font-bold tracking-widest text-right leading-loose hidden md:block">
            Learn.<br />Build.<br />Grow.
          </div>
        </div>

        {/* CTA content — staggered entrance */}
        <div
          ref={ctaRef}
          className="max-w-[1360px] mx-auto px-6 md:px-12 relative z-10"
        >
          <motion.h2
            className="font-serif text-[44px] md:text-[62px] leading-[1.08] font-bold mb-6"
            initial={{ opacity: 0, y: 36 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
            transition={{ duration: 0.9, ease }}
          >
            Ready to Build<br />Your Future?
          </motion.h2>

          <motion.p
            className="text-[16px] text-[#DED5CC]/65 leading-relaxed max-w-[420px] mb-12"
            initial={{ opacity: 0, y: 24 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.9, ease, delay: 0.18 }}
          >
            Join a community that values deep thinking, practical learning and real-world impact.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* Primary button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={ctaInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8, ease, delay: 0.34 }}
            >
              <Link href="/courses">
                <motion.a
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.3, ease }}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#F8F3EC] hover:bg-white text-[#713B26] font-semibold rounded-[10px] transition-colors duration-300 group shadow-lg text-[15px] cursor-pointer"
                >
                  Begin Your Application
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-[5px] transition-transform duration-300" />
                </motion.a>
              </Link>
            </motion.div>

            {/* Secondary button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={ctaInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8, ease, delay: 0.48 }}
            >
              <Link href="/contact-us">
                <motion.a
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.3, ease }}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/25 hover:border-white/55 text-white font-semibold rounded-[10px] transition-colors duration-300 group text-[15px] cursor-pointer"
                >
                  Talk to Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-[5px] transition-transform duration-300" />
                </motion.a>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
