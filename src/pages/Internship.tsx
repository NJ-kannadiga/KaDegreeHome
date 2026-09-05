import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import {
  ArrowRight,
  ArrowDown,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  X,
  Sparkles,
  Terminal,
  Code2,
  Database,
  ShieldCheck,
  Award,
  Briefcase,
  GraduationCap,
  Laptop,
  HelpCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  Send,
  ExternalLink,
  Layers,
  Cpu,
  Server,
  Network,
  Check,
  CheckCircle2,
  Lock,
  Flame,
  Menu
} from 'lucide-react';

// Brand Assets
import logo from '@assets/WhatsApp_Image_2026-01-14_at_10.24.21_AM_1768367360781.jpeg';
import developerHeroImg from '@assets/developer_hero.jpg';
import professionalDevImg from '@assets/professional_developer.jpg';
import bcaBgImg from '@assets/bca-bg.jpg';
import mcaBgImg from '@assets/mca-bg.jpg';
import engBgImg from '@assets/eng-bg.jpg';
import graphRagImg from '@assets/ai_command_center.jpg';
import demandForecastImg from '@assets/purple_laptop.jpg';
import edgeVisionImg from '@assets/program_ai_internship.jpg';
import studentsCollabImg from '@assets/smart_classroom.jpg';

// --- SEO Metadata ---
const SEO_METADATA = {
  title: "Industry Ready AI Internship 2026 | KA Degree Bangalore",
  description: "Move from classroom theory to industry confidence. Work on real AI and full-stack projects, build a verified portfolio, and earn official certification in Bangalore.",
  keywords: "AI Internship Bangalore, BCA Internship Bangalore, MCA Internship, Engineering Internship 2026, Full Stack AI Projects, KA Degree"
};

// --- Form & Payment Endpoints ---
const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSew53F2YEJhjft_pd60mUFFxj_vy_2fT_rXLguPhNAx8DKmUg/formResponse";
const ENTRY_IDS = {
  NAME: "entry.1530710792",
  EMAIL: "entry.1183025170",
  PHONE: "entry.2126486953",
  DEGREE: "entry.188652168",
  COLLEGE_YEAR: "entry.1938494521",
  LOOKING_FOR: "entry.1821951885",
  PAYMENT: "entry.1775288101",
  MESSAGE: "entry.826044730"
};

// Subtle animation helper for editorial entrance
function Reveal({
  children,
  delay = 0,
  y = 20,
  className = ""
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Interactive Number Counter
function AnimatedCounter({ end, suffix = "", duration = 1.5 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const stepTime = 20;
    const totalSteps = (duration * 1000) / stepTime;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Internship() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Popup & Form State
  const [showPopup, setShowPopup] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<string>("BCA / MCA / Engineering AI Track");
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');
  const [paymentOption, setPaymentOption] = useState<string>('4499');
  const [customAmount, setCustomAmount] = useState<string>('');

  // Interactive Section States
  const [activeStackLayer, setActiveStackLayer] = useState<number>(0);
  const [activeProjectIdx, setActiveProjectIdx] = useState<number>(0);
  const [hoveredAdvantageIdx, setHoveredAdvantageIdx] = useState<number>(0);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const [testimonialIdx, setTestimonialIdx] = useState<number>(0);
  const [isTestimonialPaused, setIsTestimonialPaused] = useState<boolean>(false);

  // Scroll listener for sticky header & SEO
  useEffect(() => {
    document.title = SEO_METADATA.title;
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', SEO_METADATA.description);

    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Autoplay for student voices
  useEffect(() => {
    if (isTestimonialPaused) return;
    const interval = setInterval(() => {
      setTestimonialIdx((prev) => (prev + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isTestimonialPaused]);

  const openRegisterModal = (trackTitle?: string) => {
    if (trackTitle) setSelectedTrack(trackTitle);
    setShowPopup(true);
  };

  // Handle lead submission and Razorpay checkout
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    const nameVal = (formData.get(ENTRY_IDS.NAME) as string) || "";
    const emailVal = (formData.get(ENTRY_IDS.EMAIL) as string) || "";
    const phoneVal = (formData.get(ENTRY_IDS.PHONE) as string) || "";
    const degreeVal = (formData.get(ENTRY_IDS.DEGREE) as string) || selectedTrack;
    const collegeVal = (formData.get(ENTRY_IDS.COLLEGE_YEAR) as string) || "";

    try {
      const apiUrl = (import.meta as any).env?.VITE_API_URL || "https://kadegreehome.onrender.com";

      // 1. Submit to FastAPI Backend
      fetch(`${apiUrl}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nameVal,
          email: emailVal,
          phone: phoneVal,
          degree: degreeVal,
          college_year: collegeVal,
          looking_for: `AI Internship (${selectedTrack})`,
          payment_status: "Pending"
        })
      }).catch((err) => console.warn("Backend Lead API warning:", err));

      // 2. Submit to Google Forms as backup
      const urlEncodedData = new URLSearchParams();
      for (const [key, value] of formData.entries()) {
        urlEncodedData.append(key, value as string);
      }
      fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: urlEncodedData.toString(),
      }).catch((err) => console.error("Form submit warning:", err));

      // 3. Compute payment amount
      let baseAmount = paymentOption === 'custom' ? parseInt(customAmount || '0', 10) : parseInt(paymentOption, 10);
      if (isNaN(baseAmount) || baseAmount < 1) baseAmount = 100;
      let payAmount = baseAmount * 100; // in paise

      let orderId = "";
      let rzpKey = (import.meta as any).env?.VITE_RAZORPAY_KEY_ID || "rzp_live_TOQLi4q37NC4bn";

      try {
        const orderRes = await fetch(`${apiUrl}/api/payments/create-order`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: payAmount,
            currency: "INR",
            name: nameVal,
            email: emailVal,
            phone: phoneVal,
            degree: degreeVal,
            college_year: collegeVal
          })
        });
        if (orderRes.ok) {
          const orderData = await orderRes.json();
          orderId = orderData.order_id;
          if (orderData.key_id) rzpKey = orderData.key_id;
          if (orderData.amount) payAmount = orderData.amount;
        }
      } catch (err) {
        console.warn("Falling back to direct checkout key", err);
      }

      // 4. Open Razorpay Checkout Modal
      if (typeof (window as any).Razorpay !== "undefined") {
        const options: any = {
          key: rzpKey,
          amount: payAmount,
          currency: "INR",
          name: "KA Degree",
          description: `AI Internship Registration - ${selectedTrack}`,
          image: logo,
          prefill: {
            name: nameVal,
            email: emailVal,
            contact: phoneVal,
          },
          notes: {
            program: "AI Internship 2026",
            track: selectedTrack,
            degree: degreeVal,
            college_year: collegeVal,
          },
          theme: {
            color: "#5A0B2E",
          },
          handler: async function (response: any) {
            try {
              await fetch(`${apiUrl}/api/payments/verify`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                }),
              });
            } catch (vErr) {
              console.warn("Payment verification backend warning:", vErr);
            }
            setFormStatus('submitted');
          },
          modal: {
            ondismiss: function () {
              setFormStatus('idle');
            },
          },
        };

        if (orderId) options.order_id = orderId;
        const rzp = new (window as any).Razorpay(options);
        rzp.open();
      } else {
        setFormStatus('submitted');
        window.location.href = "https://razorpay.com/payment-link/plink_STOoA4uUXQq2up";
      }
    } catch (error) {
      console.error("Submit failed", error);
      setFormStatus('submitted');
      window.location.href = "https://razorpay.com/payment-link/plink_STOoA4uUXQq2up";
    }
  };

  // AI Tech Stack Data (8 layers)
  const techStackLayers = [
    {
      num: "01",
      layer: "FOUNDATION",
      title: "Knowledge Graphs & Structured Data",
      subtitle: "Grounding LLMs in deterministic knowledge instead of probabilistic guesses",
      tools: ["Neo4j", "NetworkX", "SQLite", "DuckDB"],
      concept: "Transforms unstructured domain manuals and relational data into semantic graph entities. Eliminates hallucinations by forcing queries along validated graph edges before inference."
    },
    {
      num: "02",
      layer: "REPRESENTATION",
      title: "Embeddings",
      subtitle: "Translating code, natural language & documents into dense semantic vector space",
      tools: ["HuggingFace", "all-MiniLM-L6-v2", "CLIP", "BGE-Large"],
      concept: "Generates high-dimensional semantic mathematical vectors. Understands synonyms, regional semantic variations, and cross-modal representations across audio, images, and text."
    },
    {
      num: "03",
      layer: "REASONING",
      title: "LLM Backends",
      subtitle: "Pluggable, cost-optimized intelligence backends engineered for low latency",
      tools: ["Gemini 1.5", "Groq LPU", "Ollama Local", "Llama-3 70B"],
      concept: "Multi-model provider routing architecture. Switch effortlessly between on-device offline models and cloud inference APIs without rewriting application business logic."
    },
    {
      num: "04",
      layer: "ORCHESTRATION",
      title: "Agentic Frameworks",
      subtitle: "Multi-agent task decomposition, tool invocation & autonomous decision loops",
      tools: ["CrewAI", "LangGraph", "AutoGen", "FastAPI"],
      concept: "Moves past simple request-response chats to autonomous agents that delegate subtasks, invoke Python sandboxes, query databases, and synthesize unified responses."
    },
    {
      num: "05",
      layer: "RETRIEVAL",
      title: "Vector Databases & RAG",
      subtitle: "Millisecond-scale similarity search with hybrid keyword & semantic reranking",
      tools: ["Qdrant", "Milvus", "ChromaDB", "LlamaIndex", "LangChain"],
      concept: "Indexes millions of embeddings with HNSW graphs. Implements contextual compression, query rewriting, and cross-encoder reranking for production retrieval precision."
    },
    {
      num: "06",
      layer: "LANGUAGE & VOICE",
      title: "Speech & Multilingual NLP",
      subtitle: "Indic speech recognition, localized dialect translation & streaming audio",
      tools: ["Whisper", "IndicWhisper", "Bhashini APIs", "gTTS"],
      concept: "Enables voice-first applications tailored to India's diverse linguistic demographics. Processes live microphone streams with real-time Kannada, Hindi, and English transcription."
    },
    {
      num: "07",
      layer: "PERCEPTION",
      title: "Computer Vision & Multimodal",
      subtitle: "Real-time edge frame processing, object detection & multimodal scene analysis",
      tools: ["OpenCV", "CLIP", "yt-dlp", "LLaVA"],
      concept: "Extracts video frame streams from industrial RTSP cameras, executes lightweight frame diff algorithms, and triggers multimodal VLM reasoning on anomaly detection."
    },
    {
      num: "08",
      layer: "PRODUCTION",
      title: "MLOps & Automation",
      subtitle: "Telemetry, drift detection, automated retraining & CI/CD deployment",
      tools: ["Elasticsearch", "Kibana", "Prophet", "Scikit-learn", "Terraform"],
      concept: "Wraps experimental AI logic in containerized Docker images, automated regression pipelines, Prometheus latency metrics, and automated alert webhooks."
    }
  ];

  // Projects Showcase Data (3 Case Studies)
  const projects = [
    {
      num: "01 / 03",
      title: "Hybrid GraphRAG Knowledge Engine",
      badge: "GraphRAG + LLM",
      quote: "AI that understands connections, not just keywords.",
      desc: "Ingests complex enterprise documentation and operational policies into Neo4j graph nodes and vector embeddings. Delivers deterministic, hallucination-free answers with cross-document entity traversal.",
      stack: ["Python", "Neo4j", "LlamaIndex", "Groq API", "Flask"],
      img: graphRagImg,
      details: [
        { label: "Core Challenge", val: "Cross-document query hallucination in financial compliance" },
        { label: "What You Build", val: "Custom graph schema parser with automated entity relation extraction" },
        { label: "Production Metric", val: "99.4% answer accuracy with millisecond citation linking" }
      ]
    },
    {
      num: "02 / 03",
      title: "AI Demand Forecasting Engine",
      badge: "Time Series AI",
      quote: "Predict future demand using historical data and external factors.",
      desc: "Trains transformer-based time series models with PyTorch to forecast supply-chain spikes and inventory bottlenecks with calibrated probabilistic uncertainty bounds.",
      stack: ["Python", "PyTorch", "PatchTST", "FastAPI", "Docker"],
      img: demandForecastImg,
      details: [
        { label: "Core Challenge", val: "Erratic stockout cycles influenced by localized external events" },
        { label: "What You Build", val: "Multivariate PatchTST deep learning pipeline with seasonality decomposition" },
        { label: "Production Metric", val: "32% reduction in warehouse overstock error variance" }
      ]
    },
    {
      num: "03 / 03",
      title: "Edge Vision Intelligence System",
      badge: "Computer Vision",
      quote: "Real-time warehouse and safety monitoring with privacy-first intelligence.",
      desc: "Processes RTSP video feeds on-device using OpenCV, Ollama, and LLaVA. Executes instant frame segmentation and triggers automated incident notifications via n8n webhooks.",
      stack: ["Ollama", "LLaVA", "n8n", "OpenCV", "WebSockets"],
      img: edgeVisionImg,
      details: [
        { label: "Core Challenge", val: "Cloud bandwidth expenses and privacy compliance with video feeds" },
        { label: "What You Build", val: "Edge worker daemon with frame buffer analysis & zero cloud transit" },
        { label: "Production Metric", val: "Sub-150ms on-prem alert latency with encrypted logging" }
      ]
    }
  ];

  // Advantage Showcase (6 Interactive items)
  const advantageItems = [
    {
      id: "01",
      title: "Real Industry Projects",
      desc: "No toy code or pre-packaged calculator apps. You work on production architectures solving genuine technical bottlenecks faced by modern engineering teams.",
      highlight: "Production Repositories & Real Pull Requests",
      pill: "Hands-on Code"
    },
    {
      id: "02",
      title: "Official Certification",
      desc: "Receive a verifiable, digitally signed credential stamped with KA Degree's ISO-compliant academic certification standard, recognizable by IT recruiters.",
      highlight: "Digitally Verifiable Credential QR",
      pill: "Recognized Credential"
    },
    {
      id: "03",
      title: "Portfolio Development",
      desc: "Host your production builds live on Vercel, Netlify, and GitHub. Graduate with live production URLs that prove your technical execution during job interviews.",
      highlight: "Live GitHub Repos & Deployed URL Links",
      pill: "Proof of Work"
    },
    {
      id: "04",
      title: "Resume Building",
      desc: "Transform generic classroom bullet points into high-impact, ATS-optimized engineering narratives highlighting system scale, latency reductions, and tech stacks.",
      highlight: "ATS-Engineered Technical Resume",
      pill: "Recruiter Ready"
    },
    {
      id: "05",
      title: "Mock Interviews",
      desc: "Face comprehensive technical and HR interview rounds modeled after top product companies and Bangalore tech firms with direct senior mentor feedback.",
      highlight: "Live DSA & Architecture Whiteboarding",
      pill: "Interview Prep"
    },
    {
      id: "06",
      title: "Career Guidance",
      desc: "1-on-1 strategic roadmap discussions with mentors having 10+ years of tech experience, guiding your transition into junior software engineer or AI roles.",
      highlight: "Personalized Career Trajectory Map",
      pill: "Direct Mentorship"
    }
  ];

  // FAQ Accordion
  const faqs = [
    {
      q: "Who is eligible for this internship?",
      a: "This internship is open to all students and recent graduates from BCA, MCA, B.Tech, BE, and computer science-related backgrounds. If you have a laptop and a desire to build real systems, you can join."
    },
    {
      q: "Will I receive an internship certificate?",
      a: "Yes. Upon completing your core project modules, submitting your repository, and passing the project evaluation review, you will receive an official Industry Ready Internship Certificate from KA Degree."
    },
    {
      q: "Do I need coding experience?",
      a: "Basic programming familiarity (such as Python, Java, or C/C++ from your college syllabus) is helpful. Our mentors start with modular foundations before transitioning directly into full-stack and AI project development."
    },
    {
      q: "How long is the internship program?",
      a: "The standard cohort duration is 3 to 6 months. We offer flexible scheduling designed to seamlessly accommodate university exam timetables and semester project requirements."
    }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "KA Degree helped me build my first full-stack app. The mentors are always there to clear doubts. Totally worth it!",
      author: "Rahul S.",
      role: "BCA Final Year",
      college: "Bangalore University",
      badge: "Full Stack Intern"
    },
    {
      quote: "The Flask backend module was a game changer for me. I finally understood how data flows in a real application.",
      author: "Priya V.",
      role: "MCA Graduate",
      college: "VTU Belagavi",
      badge: "Backend & AI Track"
    },
    {
      quote: "Portfolio help was the best part. I had my projects live on GitHub and Vercel before I even finished the internship.",
      author: "Kiran K.",
      role: "Engineering Student",
      college: "BMSIT Bangalore",
      badge: "Systems Track"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F3EC] text-[#171417] selection:bg-[#5A0B2E]/20 font-sans antialiased">
      
      {/* ============================================================ */}
      {/* 1. HEADER (Shared Compact Floating Header)                   */}
      {/* ============================================================ */}
      <Navbar />

      {/* ============================================================ */}
      {/* 2. HERO SECTION (Cinematic Editorial + Realistic Tech Workspace) */}
      {/* ============================================================ */}
      <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden border-b border-[#DED5CC]">
        {/* Subtle background texture grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#171417_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          
          {/* Left Editorial Copy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Small Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#DED5CC] bg-white text-[11px] font-mono font-semibold tracking-widest text-[#5A0B2E] uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#5A0B2E] animate-pulse" />
              KA DEGREE / INTERNSHIP 2026
            </motion.div>

            {/* Headline with Staggered Line Reveal */}
            <div className="space-y-1">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#171417] leading-[1.08]"
              >
                Build Skills.
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#5A0B2E] italic leading-[1.08]"
              >
                Build Proof.
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#171417] leading-[1.08]"
              >
                Build Your Future.
              </motion.h1>
            </div>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg md:text-xl text-[#6B6464] max-w-2xl leading-relaxed font-light"
            >
              KA Degree internships help students move from academic learning to real-world technology. Learn AI and Full Stack development, work on meaningful projects, build your portfolio, and earn an official certification.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="pt-4 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={() => openRegisterModal()}
                className="px-8 py-4 rounded-full bg-[#5A0B2E] text-white font-semibold text-base shadow-sm hover:bg-[#3B071F] hover:shadow-md transition-all flex items-center gap-3 group"
              >
                Register Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  document.getElementById('tracks')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 rounded-full bg-white text-[#171417] border border-[#DED5CC] font-semibold text-base hover:border-[#171417] transition-all flex items-center gap-2 group"
              >
                Explore Internship
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform text-[#6B6464]" />
              </button>
            </motion.div>

            {/* Subtext info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-6 pt-3 text-xs text-[#6B6464]"
            >
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#5A0B2E]" />
                Official ISO Stamped Certificate
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#5A0B2E]" />
                Bangalore Technology Cohort
              </span>
            </motion.div>
          </div>

          {/* Right Technology Visual (Realistic Workspace Composition) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Primary Frame Card with Realistic Developer Environment */}
            <div className="relative rounded-2xl overflow-hidden border border-[#DED5CC] bg-white shadow-xl">
              
              {/* Window Header */}
              <div className="bg-[#171417] px-4 py-3 flex items-center justify-between text-xs text-stone-400 font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-stone-300 font-medium">workspace / kadegree-internship.py</span>
                </div>
                <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-stone-200">v2.6-prod</span>
              </div>

              {/* Realistic Visual Photograph with Tech Overlays */}
              <div className="relative h-[320px] sm:h-[380px] overflow-hidden bg-stone-900">
                <img
                  src={developerHeroImg}
                  alt="Student developer working on real software systems"
                  className="w-full h-full object-cover opacity-85 hover:scale-103 transition-transform duration-700 ease-out"
                />
                
                {/* Subtle gradient overlay to make code pop */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#171417] via-[#171417]/40 to-transparent" />

                {/* Floating Technical HUD Badge: 2026 COHORT */}
                <div className="absolute top-4 left-4 bg-[#171417]/85 backdrop-blur-md border border-stone-700/60 rounded-lg px-3 py-1.5 shadow-lg">
                  <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    2026 COHORT • AI + FULL STACK
                  </div>
                </div>

                {/* Live Code Snippet Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#171417]/90 backdrop-blur-md border border-stone-700/80 rounded-xl p-4 font-mono text-xs text-stone-300 space-y-1.5 shadow-2xl">
                  <div className="flex items-center justify-between text-[11px] text-stone-400 pb-1 border-b border-stone-800">
                    <span className="flex items-center gap-1.5 text-blue-400">
                      <Terminal className="w-3.5 h-3.5" />
                      graph_rag_engine.py
                    </span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <Check className="w-3 h-3" /> compiled (110ms)
                    </span>
                  </div>
                  <p className="text-purple-400 pt-1">from <span className="text-amber-300">langgraph</span> import StateGraph</p>
                  <p className="text-stone-300">pipeline = StateGraph(InternshipWorkflow)</p>
                  <p className="text-emerald-400">&gt;&gt;&gt; Ingesting Neo4j graphs &amp; vector embeddings...</p>
                  <div className="pt-2 flex items-center justify-between text-[10px] text-stone-400">
                    <span>Database: DuckDB / Qdrant</span>
                    <span className="text-[#F8F3EC] bg-[#5A0B2E] px-2 py-0.5 rounded font-bold">100% Real Code</span>
                  </div>
                </div>
              </div>

              {/* Bottom Status Strip */}
              <div className="bg-white px-4 py-3 border-t border-[#DED5CC] flex items-center justify-between text-xs text-[#6B6464]">
                <span className="font-mono text-[#171417] font-semibold">Active Track: Enterprise AI</span>
                <span className="text-emerald-700 font-medium flex items-center gap-1">
                  ● Mentor Code Review Ready
                </span>
              </div>
            </div>

            {/* Subtle floating accent pill on the side */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="hidden sm:flex absolute -bottom-5 -left-5 bg-white border border-[#DED5CC] p-3 rounded-xl shadow-lg items-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-[#5A0B2E]/10 flex items-center justify-center text-[#5A0B2E]">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#171417]">Bangalore Hub</div>
                <div className="text-[10px] text-[#6B6464]">Direct Tech Mentorship</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. SECTION 02 — INTERNSHIP SNAPSHOT                          */}
      {/* ============================================================ */}
      <section className="bg-white border-b border-[#DED5CC] py-12 md:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* 5 Column Metric Strip with thin vertical dividers */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-[#DED5CC]">
            
            {/* 1. Price */}
            <div className="text-center md:px-6 py-2">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#5A0B2E] tracking-tight">
                ₹4,499/-
              </div>
              <p className="mt-2 text-xs uppercase tracking-wider text-[#6B6464] font-mono">
                Total Cohort Fee
              </p>
            </div>

            {/* 2. Official Certification */}
            <div className="text-center md:px-6 py-2">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#171417] tracking-tight">
                Official
              </div>
              <p className="mt-2 text-xs uppercase tracking-wider text-[#6B6464] font-mono">
                Verified Certification
              </p>
            </div>

            {/* 3. Cohort */}
            <div className="text-center md:px-6 py-2">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#171417] tracking-tight">
                2026
              </div>
              <p className="mt-2 text-xs uppercase tracking-wider text-[#6B6464] font-mono">
                Summer &amp; Winter Cohorts
              </p>
            </div>

            {/* 4. Duration */}
            <div className="text-center md:px-6 py-2">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#171417] tracking-tight">
                3–6
              </div>
              <p className="mt-2 text-xs uppercase tracking-wider text-[#6B6464] font-mono">
                Months Duration
              </p>
            </div>

            {/* 5. Real Projects */}
            <div className="text-center md:px-6 py-2 col-span-2 md:col-span-1">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#5A0B2E] tracking-tight">
                100%
              </div>
              <p className="mt-2 text-xs uppercase tracking-wider text-[#6B6464] font-mono">
                Real Project Work
              </p>
            </div>

          </div>

          {/* Continuous slow-moving marquee ticker */}
          <div className="mt-12 pt-8 border-t border-[#DED5CC]/60 relative overflow-hidden">
            <div className="flex select-none whitespace-nowrap">
              <motion.div
                animate={{ x: [0, -1000] }}
                transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                className="flex items-center gap-8 text-xs font-mono font-medium tracking-widest text-[#5A0B2E] uppercase"
              >
                <span>AI • FULL STACK • REAL PROJECTS • INDUSTRY MENTORS • CAREER READY</span>
                <span>★</span>
                <span>AI • FULL STACK • REAL PROJECTS • INDUSTRY MENTORS • CAREER READY</span>
                <span>★</span>
                <span>AI • FULL STACK • REAL PROJECTS • INDUSTRY MENTORS • CAREER READY</span>
                <span>★</span>
                <span>AI • FULL STACK • REAL PROJECTS • INDUSTRY MENTORS • CAREER READY</span>
                <span>★</span>
              </motion.div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. SECTION 03 — WHY THIS INTERNSHIP                          */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 border-b border-[#DED5CC] bg-[#F8F3EC]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Thesis Statement */}
            <div className="lg:col-span-5 space-y-6">
              <Reveal>
                <div className="inline-block text-xs font-mono font-semibold text-[#5A0B2E] uppercase tracking-widest pb-1 border-b border-[#5A0B2E]">
                  Section 03 / Philosophy
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#171417] leading-tight">
                  From Classroom Knowledge to Industry Confidence.
                </h2>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-base sm:text-lg text-[#6B6464] leading-relaxed font-light">
                  Most university exams reward memorizing syntax and definition questions. But modern tech employers look for evidence of execution: Can you structure clean pull requests? Can you debug async API failures? Can you ground an LLM in a local database without breaking latency budgets?
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <p className="text-base text-[#6B6464] leading-relaxed font-light">
                  Our internship replaces theoretical rote-learning with a rigorous step-by-step engineering progression modeled after actual product teams.
                </p>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="p-6 rounded-2xl bg-white border border-[#DED5CC] shadow-xs space-y-3">
                  <div className="text-xs font-mono text-[#5A0B2E] uppercase font-bold tracking-wider">
                    The Outcome
                  </div>
                  <p className="text-sm text-[#171417] font-medium leading-normal">
                    You leave with a verified GitHub portfolio, live hosted endpoints, and real project stories you can confidently defend in technical interviews.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right Vertical Timeline (01 to 06 with scroll-draw line) */}
            <div className="lg:col-span-7 relative pl-4 sm:pl-8">
              
              {/* Connecting vertical line */}
              <div className="absolute left-[20px] sm:left-[36px] top-6 bottom-6 w-[2px] bg-[#DED5CC]" />

              <div className="space-y-8 relative z-10">
                {[
                  {
                    num: "01",
                    title: "Learn",
                    subtitle: "Architectural Foundations",
                    desc: "Study real enterprise system design, modern full-stack workflows, and the core layers of modern generative AI backends."
                  },
                  {
                    num: "02",
                    title: "Build",
                    subtitle: "Hands-on Codebase Execution",
                    desc: "Implement core features inside modular production repositories using FastAPI, Neo4j, PyTorch, and modern web frameworks."
                  },
                  {
                    num: "03",
                    title: "Review",
                    subtitle: "Senior Mentor Pull Requests",
                    desc: "Submit your code for line-by-line review. Learn professional formatting, error handling, and performance optimization."
                  },
                  {
                    num: "04",
                    title: "Deploy",
                    subtitle: "Live Staging & CI/CD Pipelines",
                    desc: "Containerize your services with Docker, provision persistent cloud databases, and deploy live publicly accessible URLs."
                  },
                  {
                    num: "05",
                    title: "Present",
                    subtitle: "Technical Walkthroughs",
                    desc: "Defend your system design choices in front of peers and senior mentors, developing clear engineering communication."
                  },
                  {
                    num: "06",
                    title: "Certify",
                    subtitle: "Official KA Degree Credential",
                    desc: "Earn your verified, ISO-standard Industry Ready Internship Certificate with digital verification credentials."
                  }
                ].map((step, idx) => (
                  <Reveal key={step.num} delay={idx * 0.1}>
                    <div className="flex items-start gap-4 sm:gap-6 group">
                      
                      {/* Step Number Circle Indicator */}
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-[#5A0B2E] text-[#5A0B2E] flex items-center justify-center font-mono font-bold text-xs sm:text-sm shrink-0 shadow-xs group-hover:bg-[#5A0B2E] group-hover:text-white transition-colors">
                        {step.num}
                      </div>

                      {/* Content Block */}
                      <div className="flex-1 pb-4 border-b border-[#DED5CC]/70">
                        <div className="flex flex-wrap items-baseline gap-2">
                          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#171417] group-hover:text-[#5A0B2E] transition-colors">
                            {step.title}
                          </h3>
                          <span className="text-xs font-mono text-[#5A0B2E] uppercase tracking-wider">
                            / {step.subtitle}
                          </span>
                        </div>
                        <p className="mt-1.5 text-sm text-[#6B6464] leading-relaxed">
                          {step.desc}
                        </p>
                      </div>

                    </div>
                  </Reveal>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. SECTION 04 — SPECIALIZED TRACKS                           */}
      {/* ============================================================ */}
      <section id="tracks" className="py-24 md:py-32 border-b border-[#DED5CC] bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="max-w-3xl space-y-4 mb-16">
            <Reveal>
              <span className="text-xs font-mono font-semibold text-[#5A0B2E] uppercase tracking-widest">
                Section 04 / Academic Specializations
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#171417]">
                Choose Your Starting Point.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-[#6B6464] font-light leading-relaxed">
                Focused internship paths designed around your academic background. Each track prepares you for relevant entry-level engineering roles.
              </p>
            </Reveal>
          </div>

          {/* Three Large Editorial Panels */}
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                degree: "BCA INTERNSHIP",
                tagline: "Web technologies, client-side logic and database management.",
                details: "Tailored for computer applications students. Build responsive web interfaces, learn REST API consumption, master SQL queries, and deploy production web dashboards.",
                stack: ["React / Vite", "Tailwind CSS", "Node / Express", "PostgreSQL", "Git Workflows"],
                img: bcaBgImg
              },
              {
                num: "02",
                degree: "MCA INTERNSHIP",
                tagline: "Advanced backend architecture, application logic and full-stack development.",
                details: "Designed for postgraduate candidates. Build complex microservices, scalable distributed caches, authentication middlewares, and modern full-stack enterprise systems.",
                stack: ["Python FastAPI", "Docker", "Redis", "Distributed DBs", "Async Celery"],
                img: mcaBgImg
              },
              {
                num: "03",
                degree: "ENGINEERING INTERNSHIP",
                tagline: "Systems engineering, scalable applications and industry-grade architectures.",
                details: "Geared toward B.Tech / BE computer science students. Delve into system design, LLM orchestration, GraphRAG retrieval pipelines, and high-throughput production services.",
                stack: ["Neo4j", "PyTorch", "LangGraph", "Vector Stores", "Edge Vision"],
                img: engBgImg
              }
            ].map((track, i) => (
              <Reveal key={track.num} delay={i * 0.15}>
                <div
                  onClick={() => openRegisterModal(track.degree)}
                  className="group cursor-pointer rounded-2xl border border-[#DED5CC] bg-[#F8F3EC] overflow-hidden flex flex-col justify-between hover:border-[#5A0B2E] hover:-translate-y-1.5 transition-all duration-300 shadow-sm hover:shadow-lg"
                >
                  {/* Top Image Preview with Subtle Zoom */}
                  <div className="relative h-60 overflow-hidden bg-stone-900 border-b border-[#DED5CC]">
                    <img
                      src={track.img}
                      alt={track.degree}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171417]/80 via-transparent to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-mono font-bold text-[#5A0B2E]">
                        TRACK {track.num}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-serif text-2xl font-bold text-white tracking-tight">
                        {track.degree}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-[#5A0B2E]">
                        {track.tagline}
                      </p>
                      <p className="text-sm text-[#6B6464] leading-relaxed">
                        {track.details}
                      </p>
                    </div>

                    {/* Tech Stack Chips */}
                    <div>
                      <div className="text-[11px] font-mono text-[#6B6464] uppercase tracking-wider mb-2">
                        Technologies Mastered:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {track.stack.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded bg-white border border-[#DED5CC] text-xs font-mono text-[#171417]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Strip */}
                    <div className="pt-4 border-t border-[#DED5CC]/80 flex items-center justify-between text-sm font-bold text-[#5A0B2E]">
                      <span className="group-hover:underline">Explore Track Details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. SECTION 05 — THE AI TECH STACK (Dark Architecture Section) */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 bg-[#09120E] text-[#F8F3EC] border-b border-[#22332B] relative overflow-hidden">
        
        {/* Subtle matrix-like grid background */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#5cdbb5_1px,transparent_1px)] [background-size:28px_28px]" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/40 text-emerald-400 text-xs font-mono tracking-widest uppercase">
              <Cpu className="w-3.5 h-3.5" />
              SECTION 05 / AI ARCHITECTURE
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Learn the Stack Behind Modern AI Products.
            </h2>
            <p className="text-base sm:text-lg text-stone-400 leading-relaxed font-light">
              We reject shallow ChatGPT wrapper tutorials. You will build and connect the 8 actual architectural layers Indian fintechs, AI labs, and product startups deploy in production.
            </p>
          </div>

          {/* Interactive 8-Layer Architecture Visualization */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Layer Navigation Column (Interactive Stack) */}
            <div className="lg:col-span-6 space-y-3">
              {techStackLayers.map((layer, idx) => {
                const isActive = activeStackLayer === idx;
                return (
                  <div
                    key={layer.num}
                    onClick={() => setActiveStackLayer(idx)}
                    className={`cursor-pointer p-4 sm:p-5 rounded-xl border transition-all duration-200 flex items-center justify-between ${
                      isActive
                        ? "bg-[#142319] border-emerald-500 shadow-md shadow-emerald-950/50 translate-x-1"
                        : "bg-[#0E1B14] border-stone-800/80 hover:border-stone-700 hover:bg-[#112018]"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold ${
                          isActive
                            ? "bg-emerald-500 text-stone-950"
                            : "bg-stone-800 text-stone-400"
                        }`}
                      >
                        {layer.num}
                      </span>
                      <div>
                        <div className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase">
                          LAYER {layer.num} — {layer.layer}
                        </div>
                        <h4 className="font-serif font-bold text-base sm:text-lg text-white">
                          {layer.title}
                        </h4>
                      </div>
                    </div>

                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isActive ? "text-emerald-400 translate-x-1" : "text-stone-600"
                      }`}
                    />
                  </div>
                );
              })}
            </div>

            {/* Right Detailed Architecture Inspector Panel */}
            <div className="lg:col-span-6 sticky top-28">
              <div className="rounded-2xl border border-emerald-500/40 bg-[#0E1B14] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between border-b border-stone-800 pb-4">
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                      ACTIVE LAYER // {techStackLayers[activeStackLayer].num}
                    </span>
                    <span className="text-xs font-mono text-stone-400">
                      KA-DEGREE AI SYSTEM LAB
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-mono uppercase text-emerald-400 tracking-widest font-semibold">
                      {techStackLayers[activeStackLayer].layer}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                      {techStackLayers[activeStackLayer].title}
                    </h3>
                    <p className="text-sm text-stone-300 italic mt-2">
                      "{techStackLayers[activeStackLayer].subtitle}"
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#08100C] border border-stone-800/90 text-sm text-stone-300 leading-relaxed font-light">
                    {techStackLayers[activeStackLayer].concept}
                  </div>

                  <div>
                    <div className="text-xs font-mono uppercase text-stone-400 tracking-wider mb-3">
                      Production Tooling Handled:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {techStackLayers[activeStackLayer].tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-xs font-mono text-emerald-300 font-semibold"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400 font-mono">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Pipeline Verified
                    </span>
                    <span>Direct Hands-On Modules</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. SECTION 06 — PROJECTS (Horizontal Storytelling Slider)    */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 border-b border-[#DED5CC] bg-[#F8F3EC]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Header & Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-mono font-semibold text-[#5A0B2E] uppercase tracking-widest">
                Section 06 / Project Portfolio
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#171417]">
                Build Something That Matters.
              </h2>
              <p className="text-base sm:text-lg text-[#6B6464] font-light">
                One primary real-world project at a time. Work on scalable, production-grade applications that give you substantial talking points in interviews.
              </p>
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-4">
              <span className="font-mono text-sm font-bold text-[#5A0B2E]">
                {projects[activeProjectIdx].num}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    setActiveProjectIdx((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
                  }
                  className="p-3 rounded-full border border-[#DED5CC] bg-white text-[#171417] hover:border-[#5A0B2E] hover:text-[#5A0B2E] transition-all shadow-xs"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() =>
                    setActiveProjectIdx((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
                  }
                  className="p-3 rounded-full border border-[#DED5CC] bg-white text-[#171417] hover:border-[#5A0B2E] hover:text-[#5A0B2E] transition-all shadow-xs"
                  aria-label="Next project"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Active Project Card Showcase */}
          <div className="rounded-3xl border border-[#DED5CC] bg-white overflow-hidden shadow-lg">
            <div className="grid lg:grid-cols-12 items-stretch">
              
              {/* Left Image Area */}
              <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-[500px] bg-stone-900 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeProjectIdx}
                    src={projects[activeProjectIdx].img}
                    alt={projects[activeProjectIdx].title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Floating Badge on Image */}
                <div className="absolute top-6 left-6">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#5A0B2E] text-white text-xs font-mono font-bold uppercase tracking-wider shadow-md">
                    {projects[activeProjectIdx].badge}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white font-mono text-xs">
                  <span className="bg-black/60 px-3 py-1.5 rounded backdrop-blur-sm">
                    {projects[activeProjectIdx].quote}
                  </span>
                </div>
              </div>

              {/* Right Technical Specification Column */}
              <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between space-y-6">
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProjectIdx}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6"
                  >
                    <div>
                      <span className="text-xs font-mono text-[#5A0B2E] uppercase font-bold tracking-widest">
                        PROJECT SPECIFICATION {projects[activeProjectIdx].num}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#171417] mt-1 leading-tight">
                        {projects[activeProjectIdx].title}
                      </h3>
                    </div>

                    <p className="text-base text-[#6B6464] leading-relaxed font-light">
                      {projects[activeProjectIdx].desc}
                    </p>

                    {/* Details Breakdown */}
                    <div className="space-y-3 pt-2">
                      {projects[activeProjectIdx].details.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-xl bg-[#F8F3EC] border border-[#DED5CC] text-xs flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1"
                        >
                          <span className="font-mono text-[#5A0B2E] font-bold uppercase tracking-wider">
                            {item.label}:
                          </span>
                          <span className="text-[#171417] font-medium">
                            {item.val}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Technology Chips */}
                    <div>
                      <span className="text-[11px] font-mono text-[#6B6464] uppercase tracking-wider block mb-2">
                        Technologies Deployed:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {projects[activeProjectIdx].stack.map((st) => (
                          <span
                            key={st}
                            className="px-3 py-1 rounded-full bg-white border border-[#DED5CC] text-xs font-mono text-[#171417] font-medium"
                          >
                            {st}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Bottom Register Action */}
                <div className="pt-6 border-t border-[#DED5CC] flex items-center justify-between">
                  <button
                    onClick={() => openRegisterModal(projects[activeProjectIdx].title)}
                    className="px-6 py-3 rounded-full bg-[#5A0B2E] text-white text-xs sm:text-sm font-bold hover:bg-[#3B071F] transition-all flex items-center gap-2 group"
                  >
                    Build This In Cohort
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <span className="text-xs font-mono text-[#6B6464]">
                    100% Evaluation Ready
                  </span>
                </div>

              </div>

            </div>
          </div>

          {/* Quick Click Project Bar */}
          <div className="grid grid-cols-3 gap-3 mt-6">
            {projects.map((p, i) => (
              <button
                key={p.num}
                onClick={() => setActiveProjectIdx(i)}
                className={`py-3 px-4 rounded-xl text-left border text-xs transition-all ${
                  activeProjectIdx === i
                    ? "bg-[#5A0B2E] text-white border-[#5A0B2E] shadow-sm"
                    : "bg-white text-[#171417] border-[#DED5CC] hover:border-[#5A0B2E]"
                }`}
              >
                <span className="font-mono text-[10px] block opacity-80">
                  {p.num}
                </span>
                <span className="font-serif font-bold truncate block">
                  {p.title}
                </span>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. SECTION 07 — EXPERIENCE BASED LEARNING                    */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 border-b border-[#DED5CC] bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Image Composition */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden border border-[#DED5CC] bg-[#F8F3EC] shadow-md">
                <img
                  src={studentsCollabImg}
                  alt="Students collaborating on software projects in Bangalore"
                  className="w-full h-[360px] sm:h-[440px] object-cover"
                />
              </div>

              {/* Floating Quote Card */}
              <div className="absolute -bottom-6 -right-6 hidden sm:block bg-white p-5 rounded-2xl border border-[#DED5CC] shadow-xl max-w-xs">
                <div className="text-xs font-mono text-[#5A0B2E] uppercase font-bold tracking-wider mb-1">
                  Bangalore Campus Model
                </div>
                <p className="text-xs text-[#171417] leading-relaxed">
                  "Students code alongside mentors with 10+ years of tech experience, simulating real sprint reviews."
                </p>
              </div>
            </div>

            {/* Right Editorial Copy & 4 Pillars */}
            <div className="lg:col-span-6 space-y-6">
              <Reveal>
                <span className="text-xs font-mono font-semibold text-[#5A0B2E] uppercase tracking-widest">
                  Section 07 / Studio Environment
                </span>
              </Reveal>

              <Reveal delay={0.1}>
                <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#171417] leading-tight">
                  Not Just Lessons. Real Work.
                </h2>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-base sm:text-lg text-[#6B6464] leading-relaxed font-light">
                  Our platform simulates a real corporate development environment so you experience how professional teams actually build, review, test and ship software.
                </p>
              </Reveal>

              {/* 4 Small Editorial Points */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {[
                  {
                    title: "Real-World Projects",
                    desc: "Code features that handle genuine business edge cases instead of dummy school assignments."
                  },
                  {
                    title: "Industry Mentors",
                    desc: "Direct access to senior tech architects with over 10+ years of active software experience."
                  },
                  {
                    title: "Agile Workflows",
                    desc: "Participate in sprint standups, backlog grooming, Git feature branching, and pull request milestones."
                  },
                  {
                    title: "Professional Reviews",
                    desc: "Receive structured code reviews assessing readability, time complexity, and API security standards."
                  }
                ].map((item, idx) => (
                  <Reveal key={item.title} delay={0.15 + idx * 0.1}>
                    <div className="p-4 rounded-xl bg-[#F8F3EC] border border-[#DED5CC] space-y-1.5 hover:border-[#5A0B2E] transition-colors">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#5A0B2E]" />
                        <h4 className="font-serif font-bold text-sm text-[#171417]">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-xs text-[#6B6464] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. SECTION 08 — CAREER SUCCESS (Deep Burgundy Section)       */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 bg-[#5A0B2E] text-white border-b border-[#3B071F] relative overflow-hidden">
        
        {/* Subtle decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="max-w-3xl space-y-4 mb-16">
            <span className="text-xs font-mono tracking-widest uppercase text-amber-200 font-semibold">
              Section 08 / Proven Impact
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Learn With Purpose. Graduate With Proof.
            </h2>
            <p className="text-base sm:text-lg text-stone-200 font-light leading-relaxed">
              We focus on building measurable competency that gets your resume noticed and prepares you for technical interviews.
            </p>
          </div>

          {/* 4 Animated Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { num: 500, suffix: "+", label: "Candidates Trained" },
              { num: 10, suffix: "+", label: "Years Mentor Experience" },
              { num: 6, suffix: " Mo", label: "Max Program Duration" },
              { num: 100, suffix: "%", label: "Project-Based Learning" }
            ].map((metric) => (
              <div
                key={metric.label}
                className="p-6 sm:p-8 rounded-2xl bg-black/20 backdrop-blur-xs border border-white/15 text-center space-y-2 hover:border-amber-300/40 transition-colors"
              >
                <div className="font-serif text-3xl sm:text-5xl font-bold text-amber-200">
                  <AnimatedCounter end={metric.num} suffix={metric.suffix} />
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-stone-300">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* 4 Career Support Blocks */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-white/15">
            {[
              {
                title: "Resume Shortlisting",
                desc: "ATS-optimized bullet points detailing actual project architectures, latency numbers, and deployment stacks."
              },
              {
                title: "Direct Interview Invites",
                desc: "Recommendations to partner startups and tech firms looking for fresh talent with verified proof of work."
              },
              {
                title: "Industry Referrals",
                desc: "Network directly with Bangalore tech mentors who can refer exceptional performers for open positions."
              },
              {
                title: "Placement Training",
                desc: "Master system design fundamentals, coding interview patterns, and behavioral answer strategies."
              }
            ].map((pillar) => (
              <div key={pillar.title} className="space-y-2">
                <div className="flex items-center gap-2 text-amber-300">
                  <Sparkles className="w-4 h-4" />
                  <h4 className="font-serif font-bold text-base text-white">
                    {pillar.title}
                  </h4>
                </div>
                <p className="text-xs text-stone-200 leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 10. SECTION 09 — CERTIFICATION                               */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 border-b border-[#DED5CC] bg-[#F8F3EC] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <Reveal>
                <span className="text-xs font-mono font-semibold text-[#5A0B2E] uppercase tracking-widest">
                  Section 09 / Verified Credential
                </span>
              </Reveal>

              <Reveal delay={0.1}>
                <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#171417] leading-tight">
                  Verified Certification
                </h2>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-base sm:text-lg text-[#6B6464] font-light leading-relaxed">
                  Successfully complete your modules and final project to receive an official Industry Ready Internship Certificate from KA Degree.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="space-y-4 pt-2">
                  {[
                    "Officially recognized ISO Certification Standard credential",
                    "Unique QR code verification identifier linking to your project record",
                    "Clear breakdown of modules completed and engineering technologies mastered",
                    "Ready to upload on LinkedIn, GitHub, and academic credit submissions"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-[#171417]">
                      <Check className="w-4 h-4 text-[#5A0B2E] mt-0.5 shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="pt-4">
                  <button
                    onClick={() => openRegisterModal()}
                    className="px-8 py-3.5 rounded-full bg-[#5A0B2E] text-white font-semibold text-sm hover:bg-[#3B071F] transition-all"
                  >
                    Enroll to Earn Certificate
                  </button>
                </div>
              </Reveal>
            </div>

            {/* Right Realistic Certificate Mockup (Slightly Rotated 3D Perspective) */}
            <div className="lg:col-span-6 flex justify-center">
              <motion.div
                initial={{ opacity: 0, rotate: 3, y: 30 }}
                whileInView={{ opacity: 1, rotate: 1.5, y: 0 }}
                whileHover={{ rotate: 0, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-lg bg-white rounded-2xl border-4 border-[#DED5CC] p-8 sm:p-12 shadow-2xl relative overflow-hidden transition-all"
              >
                {/* Subtle Guilloche pattern border */}
                <div className="border border-[#5A0B2E]/30 p-6 rounded-xl space-y-6 text-center relative">
                  
                  {/* Watermark Seal */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                    <GraduationCap className="w-48 h-48 text-[#5A0B2E]" />
                  </div>

                  <div className="flex items-center justify-between border-b border-[#DED5CC] pb-3 text-[10px] font-mono text-[#6B6464] uppercase">
                    <span>KA DEGREE OFFICIAL</span>
                    <span className="text-[#5A0B2E] font-bold">VERIFIED CREDENTIAL</span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs uppercase font-mono tracking-widest text-[#5A0B2E] font-semibold">
                      CERTIFICATE OF EXCELLENCE
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#171417]">
                      INTERNSHIP COMPLETION
                    </h3>
                  </div>

                  <p className="text-xs text-[#6B6464] max-w-xs mx-auto leading-relaxed">
                    This is to verify that the candidate has successfully built and deployed real-world project modules during the 2026 Cohort.
                  </p>

                  <div className="pt-4 flex items-center justify-between text-left text-xs border-t border-[#DED5CC]">
                    <div>
                      <div className="text-[10px] font-mono text-[#6B6464]">PROGRAM EVALUATED</div>
                      <div className="font-bold text-[#171417]">Full Stack &amp; AI Engineering</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-mono text-[#6B6464]">SECURITY SERIAL</div>
                      <div className="font-mono font-bold text-[#5A0B2E]">#KAD-2026-V8921</div>
                    </div>
                  </div>

                  {/* Stamp Badge */}
                  <div className="flex justify-center pt-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5A0B2E]/10 text-[#5A0B2E] font-mono text-[10px] font-bold uppercase">
                      <Award className="w-3.5 h-3.5" />
                      ISO Certified Academic Standard
                    </span>
                  </div>

                </div>
              </motion.div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 11. SECTION 10 — THE KA DEGREE ADVANTAGE (Hover List)        */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 border-b border-[#DED5CC] bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="max-w-3xl space-y-4 mb-16">
            <span className="text-xs font-mono font-semibold text-[#5A0B2E] uppercase tracking-widest">
              Section 10 / Complete Ecosystem
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#171417]">
              The KA Degree Advantage.
            </h2>
            <p className="text-base sm:text-lg text-[#6B6464] font-light">
              Hover each pillar to explore how our structured program accelerates your career from university student to industry-ready engineer.
            </p>
          </div>

          {/* Interactive Vertical List + Dynamic Right Preview */}
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left 6 List Items */}
            <div className="lg:col-span-7 divide-y divide-[#DED5CC]">
              {advantageItems.map((item, idx) => {
                const isHovered = hoveredAdvantageIdx === idx;
                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setHoveredAdvantageIdx(idx)}
                    onClick={() => setHoveredAdvantageIdx(idx)}
                    className={`py-6 cursor-pointer transition-all duration-200 group ${
                      isHovered ? "pl-4 text-[#5A0B2E]" : "pl-0 hover:pl-2"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-sm font-bold text-[#5A0B2E]">
                          {item.id}
                        </span>
                        <h3 className={`font-serif text-xl sm:text-2xl font-bold transition-colors ${
                          isHovered ? "text-[#5A0B2E]" : "text-[#171417] group-hover:text-[#5A0B2E]"
                        }`}>
                          {item.title}
                        </h3>
                      </div>
                      <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#F8F3EC] text-[#6B6464] border border-[#DED5CC]">
                        {item.pill}
                      </span>
                    </div>

                    <p className={`mt-2 text-sm text-[#6B6464] leading-relaxed max-w-xl transition-opacity ${
                      isHovered ? "opacity-100 block" : "opacity-75 block"
                    }`}>
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Right Dynamic Preview Box */}
            <div className="lg:col-span-5 sticky top-28">
              <div className="rounded-2xl border border-[#DED5CC] bg-[#F8F3EC] p-8 shadow-sm relative overflow-hidden">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#5A0B2E] font-bold">
                  FOCUS DETAIL // {advantageItems[hoveredAdvantageIdx].id}
                </span>

                <h4 className="font-serif text-2xl font-bold text-[#171417] mt-2 mb-3">
                  {advantageItems[hoveredAdvantageIdx].title}
                </h4>

                <p className="text-sm text-[#6B6464] leading-relaxed mb-6 font-light">
                  {advantageItems[hoveredAdvantageIdx].desc}
                </p>

                <div className="p-4 rounded-xl bg-white border border-[#DED5CC] space-y-2">
                  <div className="text-xs font-mono font-bold text-[#5A0B2E] uppercase">
                    Deliverable:
                  </div>
                  <div className="text-sm font-semibold text-[#171417] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5A0B2E]" />
                    {advantageItems[hoveredAdvantageIdx].highlight}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#DED5CC] flex items-center justify-between text-xs text-[#6B6464]">
                  <span>KA Degree Academic Standard</span>
                  <button
                    onClick={() => openRegisterModal(advantageItems[hoveredAdvantageIdx].title)}
                    className="font-bold text-[#5A0B2E] hover:underline"
                  >
                    Claim Slot &rarr;
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 12. SECTION 11 — WHO CAN APPLY                               */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 border-b border-[#DED5CC] bg-[#F8F3EC]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          
          <Reveal>
            <span className="text-xs font-mono font-semibold text-[#5A0B2E] uppercase tracking-widest">
              Section 11 / Eligibility
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-4 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { title: "BCA Students", desc: "1st, 2nd & Final Year" },
                { title: "MCA Students", desc: "1st & Final Year" },
                { title: "B.Tech Students", desc: "CSE, ISE, ECE & AI" },
                { title: "CS Graduates", desc: "2024, 2025 & 2026 Passouts" }
              ].map((q) => (
                <div
                  key={q.title}
                  className="p-6 rounded-2xl bg-white border border-[#DED5CC] shadow-xs text-center space-y-1 hover:border-[#5A0B2E] transition-colors"
                >
                  <h3 className="font-serif font-bold text-xl text-[#171417]">
                    {q.title}
                  </h3>
                  <p className="text-xs text-[#6B6464] font-mono">
                    {q.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-10 font-serif text-xl sm:text-2xl text-[#171417] max-w-2xl mx-auto italic leading-relaxed">
              "If you have a laptop and a hunger to learn modern software engineering, you are eligible to join the cohort."
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => openRegisterModal()}
                className="px-8 py-3.5 rounded-full bg-[#5A0B2E] text-white font-semibold text-sm hover:bg-[#3B071F] transition-all"
              >
                Apply for 2026 Cohort
              </button>
            </div>
          </Reveal>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 13. SECTION 12 — FAQ (Premium Accordion)                     */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 border-b border-[#DED5CC] bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs font-mono font-semibold text-[#5A0B2E] uppercase tracking-widest">
              Section 12 / Questions
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#171417]">
              Frequently Asked Questions.
            </h2>
            <p className="text-base text-[#6B6464] font-light">
              Clear answers to help you start your internship journey with total confidence.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-[#DED5CC] bg-[#F8F3EC] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif font-bold text-lg text-[#171417] hover:text-[#5A0B2E] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#6B6464] transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#5A0B2E]" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="px-6 pb-6 text-sm text-[#6B6464] leading-relaxed border-t border-[#DED5CC]/60 pt-4"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 14. SECTION 13 — STUDENT VOICES (Autoplay Testimonials)      */}
      {/* ============================================================ */}
      <section
        onMouseEnter={() => setIsTestimonialPaused(true)}
        onMouseLeave={() => setIsTestimonialPaused(false)}
        className="py-24 md:py-32 border-b border-[#DED5CC] bg-[#F8F3EC] overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          
          <span className="text-xs font-mono font-semibold text-[#5A0B2E] uppercase tracking-widest">
            Section 13 / Alumni Feedback
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#171417] mt-3 mb-16">
            Student Voices.
          </h2>

          {/* Testimonial Card */}
          <div className="relative min-h-[260px] flex flex-col justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIdx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl space-y-6"
              >
                <div className="flex justify-center gap-1 text-[#5A0B2E]">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-5 h-5 fill-[#5A0B2E]" />
                  ))}
                </div>

                <p className="font-serif text-xl sm:text-3xl text-[#171417] italic leading-snug">
                  "{testimonials[testimonialIdx].quote}"
                </p>

                <div>
                  <div className="font-bold text-base text-[#171417]">
                    {testimonials[testimonialIdx].author}
                  </div>
                  <div className="text-xs font-mono text-[#6B6464] mt-0.5">
                    {testimonials[testimonialIdx].role} • {testimonials[testimonialIdx].college}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setTestimonialIdx(i)}
                className={`h-2 rounded-full transition-all ${
                  testimonialIdx === i ? "w-8 bg-[#5A0B2E]" : "w-2 bg-[#DED5CC] hover:bg-[#6B6464]"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 15. FINAL CTA (Dramatic Burgundy Section)                    */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 bg-[#5A0B2E] text-white relative overflow-hidden">
        
        {/* Subtle geometric line patterns */}
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />

        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center space-y-8 relative z-10">
          
          <span className="text-xs font-mono tracking-widest uppercase text-amber-200 font-semibold px-3 py-1 rounded-full border border-amber-300/30 inline-block">
            Bangalore 2026 Cohort
          </span>

          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            Your Future Starts Here.
          </h2>

          <p className="text-lg sm:text-xl text-stone-200 max-w-2xl mx-auto leading-relaxed font-light">
            Limited seats available for the upcoming Bangalore technology cohort. Advance your coding ability and graduate with proof.
          </p>

          <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
            <button
              onClick={() => openRegisterModal()}
              className="px-8 py-4 rounded-full bg-white text-[#5A0B2E] font-bold text-base hover:bg-stone-100 shadow-xl transition-all flex items-center gap-2 group"
            >
              Register Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <Link href="/contact-us">
              <a className="px-8 py-4 rounded-full border border-white/40 text-white font-semibold text-base hover:bg-white/10 transition-all">
                Know More &rarr;
              </a>
            </Link>
          </div>

          <div className="pt-6 text-xs text-stone-300 font-mono">
            Direct Queries: admissions@kadegree.com • +91 7975902348
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 16. FOOTER                                                   */}
      {/* ============================================================ */}
      <footer className="bg-[#171417] text-stone-300 py-16 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 pb-12 border-b border-stone-800">
            
            {/* Col 1: Brand Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-white">
                <GraduationCap className="h-7 w-7 text-[#F8F3EC]" />
                <span className="font-serif text-xl font-bold">KA Degree</span>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed font-light">
                Learn from industry experts through mentor-led training that combines real projects, modern AI tools, and full-stack development aligned with global engineering standards.
              </p>
            </div>

            {/* Col 2: Legal */}
            <div>
              <h3 className="font-serif text-sm font-bold text-white mb-4 uppercase tracking-wider">
                Legal
              </h3>
              <ul className="space-y-2 text-xs">
                <li><Link href="/privacy-policy"><a className="hover:text-white transition-colors">Privacy Policy</a></Link></li>
                <li><Link href="/refund-policy"><a className="hover:text-white transition-colors">Refund Policy</a></Link></li>
                <li><Link href="/terms-of-service"><a className="hover:text-white transition-colors">Terms of Service</a></Link></li>
              </ul>
            </div>

            {/* Col 3: Contact Details */}
            <div>
              <h3 className="font-serif text-sm font-bold text-white mb-4 uppercase tracking-wider">
                Contact
              </h3>
              <ul className="space-y-2.5 text-xs text-stone-400">
                <li className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-stone-400" /> +91 7975902348
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-stone-400" /> admissions@kadegree.com
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-3.5 w-3.5 text-stone-400 shrink-0 mt-0.5" />
                  <span>3rd Floor, Tech Park Building, BTM Layout, Bengaluru, Karnataka 560076</span>
                </li>
              </ul>
            </div>

            {/* Col 4: Follow Us */}
            <div>
              <h3 className="font-serif text-sm font-bold text-white mb-4 uppercase tracking-wider">
                Follow Us
              </h3>
              <ul className="space-y-2 text-xs">
                <li><a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
            <p>&copy; {new Date().getFullYear()} KA Degree. All rights reserved.</p>
            <p className="font-mono text-[11px]">Bangalore Technology Studio &amp; Education Hub</p>
          </div>
        </div>
      </footer>

      {/* ============================================================ */}
      {/* 17. REGISTRATION MODAL / POPUP (Razorpay + Form Submit)     */}
      {/* ============================================================ */}
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-lg bg-[#F8F3EC] rounded-2xl border border-[#DED5CC] shadow-2xl p-6 sm:p-8 my-8 text-[#171417]"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 p-2 rounded-full border border-[#DED5CC] bg-white text-[#171417] hover:bg-stone-100 transition-colors"
                aria-label="Close registration modal"
              >
                <X className="w-4 h-4" />
              </button>

              {formStatus === 'submitted' ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#171417]">
                    Registration Initiated!
                  </h3>
                  <p className="text-sm text-[#6B6464]">
                    Our academic counselor will reach out within 24 hours to confirm your cohort schedule and project track.
                  </p>
                  <button
                    onClick={() => setShowPopup(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#5A0B2E] text-white text-xs font-bold"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <span className="text-[10px] font-mono text-[#5A0B2E] font-bold uppercase tracking-wider">
                      COHORT 2026 ENROLLMENT
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#171417]">
                      Register for AI Internship
                    </h3>
                    <p className="text-xs text-[#6B6464] mt-1">
                      Selected Track: <span className="font-semibold text-[#5A0B2E]">{selectedTrack}</span>
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div>
                      <label className="block text-xs font-semibold text-[#171417] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name={ENTRY_IDS.NAME}
                        required
                        placeholder="e.g. Rahul Sharma"
                        className="w-full h-11 px-3.5 rounded-xl border border-[#DED5CC] bg-white text-sm text-[#171417] focus:outline-none focus:border-[#5A0B2E]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-[#171417] mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name={ENTRY_IDS.EMAIL}
                          required
                          placeholder="rahul@gmail.com"
                          className="w-full h-11 px-3.5 rounded-xl border border-[#DED5CC] bg-white text-sm text-[#171417] focus:outline-none focus:border-[#5A0B2E]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#171417] mb-1">
                          WhatsApp / Phone *
                        </label>
                        <input
                          type="tel"
                          name={ENTRY_IDS.PHONE}
                          required
                          placeholder="+91 98765 43210"
                          className="w-full h-11 px-3.5 rounded-xl border border-[#DED5CC] bg-white text-sm text-[#171417] focus:outline-none focus:border-[#5A0B2E]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-[#171417] mb-1">
                          Degree *
                        </label>
                        <select
                          name={ENTRY_IDS.DEGREE}
                          defaultValue={selectedTrack.includes("BCA") ? "BCA" : selectedTrack.includes("MCA") ? "MCA" : "B.Tech/BE"}
                          className="w-full h-11 px-3 rounded-xl border border-[#DED5CC] bg-white text-sm text-[#171417] focus:outline-none focus:border-[#5A0B2E]"
                        >
                          <option value="BCA">BCA</option>
                          <option value="MCA">MCA</option>
                          <option value="B.Tech/BE">B.Tech / BE</option>
                          <option value="B.Sc CS">B.Sc Computer Science</option>
                          <option value="Other">Other Graduate</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#171417] mb-1">
                          College Year *
                        </label>
                        <select
                          name={ENTRY_IDS.COLLEGE_YEAR}
                          defaultValue="Final Year"
                          className="w-full h-11 px-3 rounded-xl border border-[#DED5CC] bg-white text-sm text-[#171417] focus:outline-none focus:border-[#5A0B2E]"
                        >
                          <option value="1st Year">1st Year</option>
                          <option value="2nd Year">2nd Year</option>
                          <option value="3rd Year">3rd Year</option>
                          <option value="Final Year">Final Year</option>
                          <option value="Graduated">Already Graduated</option>
                        </select>
                      </div>
                    </div>

                    {/* Payment Amount Toggle */}
                    <div className="pt-2">
                      <label className="block text-xs font-semibold text-[#171417] mb-1.5">
                        Booking Fee Option
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { val: "4499", label: "₹4,499 (Full Fee)" },
                          { val: "1000", label: "₹1,000 (Advance)" },
                          { val: "custom", label: "Custom Amount" }
                        ].map((opt) => (
                          <button
                            key={opt.val}
                            type="button"
                            onClick={() => setPaymentOption(opt.val)}
                            className={`py-2 px-2 rounded-xl text-xs font-mono font-bold border transition-colors ${
                              paymentOption === opt.val
                                ? "bg-[#5A0B2E] text-white border-[#5A0B2E]"
                                : "bg-white text-[#171417] border-[#DED5CC] hover:border-[#5A0B2E]"
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>

                      {paymentOption === 'custom' && (
                        <div className="mt-2">
                          <input
                            type="number"
                            min="100"
                            placeholder="Enter amount in ₹ (e.g. 2000)"
                            value={customAmount}
                            onChange={(e) => setCustomAmount(e.target.value)}
                            className="w-full h-10 px-3 rounded-xl border border-[#DED5CC] bg-white text-sm text-[#171417] focus:outline-none focus:border-[#5A0B2E]"
                            required
                          />
                        </div>
                      )}
                    </div>

                    <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-[11px] text-amber-800 leading-snug">
                      <strong>Secure Booking:</strong> Clicking below opens the official Razorpay gateway. Upon successful transaction, your slot in the 2026 cohort is confirmed.
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full h-12 rounded-full bg-[#5A0B2E] text-white font-bold text-sm hover:bg-[#3B071F] transition-all flex items-center justify-center gap-2 shadow-md"
                    >
                      {formStatus === 'submitting' ? 'Redirecting to Payment...' : 'Proceed to Book Slot'}
                      <Lock className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
