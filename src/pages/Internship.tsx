import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import logo from "@assets/WhatsApp_Image_2026-01-14_at_10.24.21_AM_1768367360781.jpeg";
import { Footer } from '@/components/layout/Footer';
import { GlobalLeadCapture } from '@/components/layout/GlobalLeadCapture';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Rocket, BookOpen, Code2, Globe, Users, 
  CheckCircle2, Star, ChevronRight, X, 
  Monitor, Database, Server, Terminal, 
  Award, Briefcase, GraduationCap, Laptop,
  HelpCircle, MessageSquare, Sparkles, Send, Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- SEO Data ---
const SEO_METADATA = {
  title: "Industry Ready Internship Program | BCA, MCA & Engineering Internships in Bangalore",
  description: "Gain real project experience with KA Degree Internships in Bangalore. Specialized programs for BCA, MCA, and Engineering students. Get certified and build your portfolio.",
  keywords: "BCA Internship in Bangalore, MCA Internship in Bangalore, Engineering Internship in Bangalore, Software Internship for Students, KA Degree Internship"
};

// --- Form Configuration (Same as Courses/Contact) ---
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

export default function Internship() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');
  const [paymentOption, setPaymentOption] = useState<string>('4499');
  const [customAmount, setCustomAmount] = useState<string>('');

  // Popup and SEO logic
  useEffect(() => {
    // Set SEO metadata
    document.title = SEO_METADATA.title;
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', SEO_METADATA.description);

    const handleScroll = () => {
      if (hasShownPopup) return;
      const scrolled = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrolled / totalHeight > 0.6) {
        setShowPopup(true);
        setHasShownPopup(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasShownPopup]);

  const handleApplyClick = () => setShowPopup(true);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    const nameVal = (formData.get(ENTRY_IDS.NAME) as string) || "";
    const emailVal = (formData.get(ENTRY_IDS.EMAIL) as string) || "";
    const phoneVal = (formData.get(ENTRY_IDS.PHONE) as string) || "";
    const degreeVal = (formData.get(ENTRY_IDS.DEGREE) as string) || "";
    const collegeVal = (formData.get(ENTRY_IDS.COLLEGE_YEAR) as string) || "";

    try {
      const apiUrl = (import.meta as any).env?.VITE_API_URL || "https://kadegreehome.onrender.com";

      // 1. Submit form data to FastAPI Backend Lead API
      fetch(`${apiUrl}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nameVal,
          email: emailVal,
          phone: phoneVal,
          degree: degreeVal,
          college_year: collegeVal,
          looking_for: "AI Internship",
          payment_status: "Pending"
        })
      }).catch((err) => console.warn("Backend Lead API warning:", err));

      // 2. Submit form data to Google Forms in background as secondary record
      const urlEncodedData = new URLSearchParams();
      for (const [key, value] of formData.entries()) {
        urlEncodedData.append(key, value as string);
      }
      fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSew53F2YEJhjft_pd60mUFFxj_vy_2fT_rXLguPhNAx8DKmUg/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: urlEncodedData.toString(),
        }
      ).catch((err) => console.error("Form submit warning:", err));

      // 3. Create Order via FastAPI Backend API
      let orderId = "";
      let rzpKey = (import.meta as any).env?.VITE_RAZORPAY_KEY_ID || "rzp_live_TOQLi4q37NC4bn";
      
      let baseAmount = paymentOption === 'custom' ? parseInt(customAmount || '0', 10) : parseInt(paymentOption, 10);
      if (isNaN(baseAmount) || baseAmount < 1) baseAmount = 100;
      let payAmount = baseAmount * 100; // Convert to paise

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
        console.warn("Could not create backend order, falling back to direct checkout key", err);
      }

      // 4. Trigger Razorpay Checkout Popup Modal
      if (typeof (window as any).Razorpay !== "undefined") {
        const options: any = {
          key: rzpKey,
          amount: payAmount,
          currency: "INR",
          name: "KA Degree",
          description: "AI Internship Registration",
          image: logo,
          prefill: {
            name: nameVal,
            email: emailVal,
            contact: phoneVal,
          },
          notes: {
            program: "AI Internship",
            degree: degreeVal,
            college_year: collegeVal,
          },
          theme: {
            color: "#2563eb",
          },
          handler: async function (response: any) {
            console.log("Razorpay Payment Success:", response);
            
            // Verify Payment Signature via FastAPI Backend
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

        if (orderId) {
          options.order_id = orderId;
        }

        const rzp = new (window as any).Razorpay(options);
        rzp.open();
      } else {
        // Fallback to Razorpay Payment Link if SDK is unavailable
        setFormStatus('submitted');
        window.location.href = "https://razorpay.com/payment-link/plink_STOoA4uUXQq2up";
      }
    } catch (error) {
      console.error("Submit failed", error);
      // Fallback redirect
      setFormStatus('submitted');
      window.location.href = "https://razorpay.com/payment-link/plink_STOoA4uUXQq2up";
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30">
      <Navbar />

      {/* --- 1. Hero Section --- */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-blue-900/20 blur-[120px]" 
          />
          <motion.div 
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.15, 0.05] }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute -right-1/4 -bottom-1/4 h-[600px] w-[600px] rounded-full bg-indigo-900/20 blur-[120px]" 
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Badge variant="outline" className="mb-6 px-4 py-1.5 bg-blue-500/10 text-blue-400 border-blue-500/30 text-xs font-bold uppercase tracking-widest whitespace-nowrap">
              <Sparkles className="w-3.5 h-3.5 mr-2" /> Summer/Winter Cohorts 2026
            </Badge>
            <div className="flex flex-col items-center justify-center gap-3 mb-6 animate-pulse">
              <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/50 px-6 py-2 rounded-full backdrop-blur-sm shadow-xl shadow-orange-500/10">
                <span className="text-amber-400 font-extrabold text-lg md:text-xl tracking-wide flex items-center gap-2">
                  <Star className="w-5 h-5 fill-amber-400" /> ONLY ₹4,499/- <Star className="w-5 h-5 fill-amber-400" />
                </span>
              </div>
              <Badge variant="outline" className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border-emerald-500/30 text-xs font-bold uppercase tracking-widest">
                <Award className="w-3.5 h-3.5 mr-1" /> With Official Certification
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
               AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Internship</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12">
              KA Degree internships empower students to bridge the gap between academia and industry. Master AI and Full Stack tech, build a standout portfolio, and earn your official certification.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="h-14 px-8 bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg rounded-2xl shadow-xl shadow-blue-500/20 transition-all hover:scale-[1.05]" onClick={handleApplyClick}>
                Register Now - Pay Advance & Book Slot <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="h-14 px-8 border-slate-800 text-slate-300 hover:bg-slate-900/80 font-bold text-lg rounded-2xl transition-all hover:scale-[1.02]"
                onClick={() => document.getElementById('tech-stack')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Curriculum
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 2. Internship Categories --- */}
      <section id="categories" className="py-24 bg-slate-900/30 border-y border-slate-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Specialized Categories</h2>
            <p className="text-slate-400 max-w-xl mx-auto italic">Tailored programs to match your academic background and career goals.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "BCA Internship", 
                loc: "Internship in Bangalore", 
                desc: "Focus on web technologies, client-side logic, and database management.",
                icon: Laptop,
                color: "text-blue-400"
              },
              { 
                title: "MCA Internship", 
                loc: "Internship in Bangalore", 
                desc: "Advanced logic, backend architecture, and full-stack software development.",
                icon: Terminal,
                color: "text-indigo-400"
              },
              { 
                title: "Engineering Internship", 
                loc: "Internship in Bangalore", 
                desc: "Systems engineering, scalable applications, and industry-grade architectures.",
                icon: Monitor,
                color: "text-cyan-400"
              }
            ].map((cat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group relative p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all"
              >
                <div className={`w-14 h-14 rounded-2xl bg-slate-950 flex items-center justify-center mb-6 border border-slate-800 group-hover:bg-blue-500/10 transition-colors`}>
                  <cat.icon className={`h-7 w-7 ${cat.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{cat.title}</h3>
                <p className="text-blue-500/80 text-xs font-bold uppercase tracking-wider mb-4">{cat.loc}</p>
                <p className="text-slate-400 leading-relaxed">{cat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. Overview --- */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-blue-500/10 text-blue-400 border-none px-4 py-1">Mission & Purpose</Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Academic to Industry Transition</h2>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Most academic programs leave a gap between what you learn and what companies demand. Our internship is designed to bridge that gap through rigorous hands-on training and real-world project cycles.
                </p>
              </div>
              
              <ul className="space-y-4">
                {[
                  "Work on real-world projects used by real users.",
                  "Learn from mentors with 10+ years of tech experience.",
                  "Master modern tech stacks like React, Node.js and Flask.",
                  "Experience professional agile development workflows."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden border border-slate-800 aspect-video shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent" />
              <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-4">
                 <div className="w-20 h-20 rounded-full bg-blue-600/20 flex items-center justify-center animate-pulse">
                   <BookOpen className="h-10 w-10 text-blue-400" />
                 </div>
                 <h3 className="text-2xl font-bold text-white">Experience-Based Learning</h3>
                 <p className="text-slate-400 text-sm max-w-sm">Our platform simulates a real corporate development environment to ensure you are ready on Day 1 of your first job.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- 4. Technologies Covered --- */}
      <section id="tech-stack" className="py-24 bg-slate-900/20 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Tech Stack Mastery</h2>
            <p className="text-slate-400 max-w-xl mx-auto italic">Industry-demanded tools and frameworks you'll master during your internship.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[
              { name: "React.js", category: "Frontend", icon: Rocket },
              { name: "JavaScript", category: "Language", icon: Code2 },
              { name: "Python", category: "Language", icon: Terminal },
              { name: "OpenAI / AI", category: "AI Integration", icon: Sparkles },
              { name: "Prompt Eng.", category: "AI Tools", icon: Zap },
              { name: "SQL", category: "Database", icon: Database },
              { name: "Git / GitHub", category: "Tools", icon: Globe },
              { name: "LangChain", category: "AI Frameworks", icon: Code2 },
              { name: "API Dev", category: "Integration", icon: Terminal }
            ].map((tech, i) => (
              <Card key={i} className="border-slate-800 bg-slate-900/50 hover:border-blue-500/30 transition-all hover:bg-slate-900 group">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="p-3 bg-slate-950 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                    <tech.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <h4 className="font-bold text-white mb-1">{tech.name}</h4>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500">{tech.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. Curriculum --- */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight font-serif italic">Learning Journey</h2>
            <p className="text-slate-400 max-w-xl mx-auto">A structured 6-module curriculum to take you from a learner to an achiever.</p>
          </div>
          
          <div className="max-w-3xl mx-auto relative divide-y divide-slate-800 border-y border-slate-800">
             {[
               { id: 1, title: "Programming Fundamentals", desc: "Solidifying core logic using JavaScript and Python. Understanding data types, control structures and functional concepts." },
               { id: 2, title: "Web Development Basics", desc: "HTML5 semantic structure, modern CSS layouts with Tailwind, and DOM manipulation basics." },
               { id: 3, title: "Frontend Development with React", desc: "Components, Props, State, and advanced Hooks. Professional state management and API integration." },
               { id: 4, title: "Backend Development with Python/Flask", desc: "Building RESTful APIs, handling requests, security protocols and server-side logic." },
               { id: 5, title: "AI Integration & Prompt Engineering", desc: "Learning to leverage LLMs like GPT-4, building intelligent interfaces, and mastering prompt engineering for developers." },
               { id: 6, title: "Final Real Project", desc: "End-to-end development of a production-ready application. Deployment and code optimization for porting." }
             ].map((module, i) => (
               <div key={i} className="group py-8 px-4 hover:bg-slate-900/40 transition-colors cursor-default">
                 <div className="flex gap-6 items-start">
                   <span className="text-4xl font-serif italic text-blue-500/20 group-hover:text-blue-500/40 transition-colors">0{module.id}</span>
                   <div className="space-y-2 pt-2">
                     <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{module.title}</h3>
                     <p className="text-slate-400 leading-relaxed text-sm">{module.desc}</p>
                   </div>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- 6. Real Project Experience --- */}
      <section className="py-24 bg-blue-600/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative rounded-3xl p-8 bg-slate-900 border border-slate-800 shadow-2xl">
               <div className="space-y-6">
                 {[
                   { title: "Regulatory GraphRAG for Financial/Tax Compliance", tag: "GraphRAG + GenAI", desc: "Build an intelligent compliance assistant using Graph Retrieval-Augmented Generation for financial regulations." },
                   { title: "Multi-Agent Supply Chain & Procurement Optimizer", tag: "Multi-Agent AI", desc: "Develop a system of autonomous agents collaborating to optimize supply chain logistics and procurement." },
                   { title: "Multimodal \"Finfluencer\" Fraud Detection Engine", tag: "Multimodal AI", desc: "Create an engine that analyzes video, audio, and text to detect fraudulent financial advice." },
                   { title: "Multilingual Voice-to-Action Copilot (Next Billion Users)", tag: "Voice AI", desc: "Build a copilot that translates spoken regional languages into actionable application commands." },
                   { title: "AIOps Log Analyzer & Auto-Remediation", tag: "AIOps", desc: "Design a system that automatically parses logs to detect anomalies and trigger automated fixes." }
                 ].map((proj, i) => (
                   <div key={i} className="p-5 bg-slate-950 rounded-2xl border border-slate-800/50 group hover:border-blue-500/30 transition-all">
                     <div className="flex justify-between items-start mb-2">
                       <h4 className="font-bold text-white">{proj.title}</h4>
                       <Badge variant="outline" className="text-[10px] uppercase font-bold text-blue-400 border-blue-500/20">{proj.tag}</Badge>
                     </div>
                     <p className="text-xs text-slate-400">{proj.desc}</p>
                   </div>
                 ))}
               </div>
            </div>
            
            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="order-1 lg:order-2 space-y-6"
            >
              <Badge variant="secondary" className="bg-blue-500/10 text-blue-400 border-none px-4 py-1">Project Portfolio</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Build Something That <span className="italic">Matters</span></h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                We believe in learning by doing. During your internship, you'll integrate cutting-edge AI features into production-ready applications that show recruiters you're ready for the 2026 job market.
              </p>
              <Button size="lg" className="h-12 bg-blue-600 hover:bg-blue-500 font-bold px-8 shadow-lg shadow-blue-500/20" onClick={handleApplyClick}>
                Register Now - Pay Advance & Book Slot
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Placement Section (NEW) --- */}
      <section className="py-24 bg-slate-950 border-t border-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto rounded-[3rem] bg-gradient-to-br from-blue-600/10 to-indigo-600/10 border border-blue-500/20 p-8 md:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 px-4 py-1">Career Success</Badge>
                <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Placement with Leading <span className="text-blue-400">Companies</span></h2>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Our internship isn't just about learning; it's a direct path to employment. We connect our top performers with leading tech companies in Bangalore and beyond.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Resume Shortlisting",
                    "Direct Interview Invites",
                    "Industry Referrals",
                    "Placement Training"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-300 text-sm font-bold">
                      <CheckCircle2 className="w-5 h-5 text-blue-500" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="p-8 bg-slate-900/50 rounded-3xl border border-slate-800 backdrop-blur-sm">
                  <h4 className="text-center text-slate-500 uppercase tracking-widest font-bold text-xs mb-8">Our Students Placed At</h4>
                  <div className="grid grid-cols-2 gap-8 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700">
                    {/* Placeholder for Logos - Can be replaced with actual images */}
                    <div className="flex items-center justify-center font-bold text-2xl text-slate-400 border border-slate-800 py-4 rounded-xl">TCS</div>
                    <div className="flex items-center justify-center font-bold text-2xl text-slate-400 border border-slate-800 py-4 rounded-xl">WIPRO</div>
                    <div className="flex items-center justify-center font-bold text-2xl text-slate-400 border border-slate-800 py-4 rounded-xl">ACCENTURE</div>
                    <div className="flex items-center justify-center font-bold text-2xl text-slate-400 border border-slate-800 py-4 rounded-xl">INFOSYS</div>
                  </div>
                </div>
                {/* Decorative blob */}
                <div className="absolute -z-10 -bottom-8 -right-8 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 7. Internship Certification --- */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-blue-600/5 blur-[150px] pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center text-accent">
              <Award className="h-10 w-10" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight font-serif italic text-center">Verified Certification</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto text-center">
              Successfully complete your modules and final project to receive an official Industry Ready Internship Certificate from KA Degree.
            </p>
            
            <div className="mt-12 relative max-w-2xl group w-full">
              {/* Certificate Preview Placeholder with Glassmorphism */}
              <div className="aspect-[1.414/1] bg-slate-900/80 rounded-2xl border-2 border-slate-800 p-8 md:p-12 relative overflow-hidden shadow-2xl transition-transform hover:scale-[1.01]">
                <div className="absolute top-0 right-0 p-8">
                  <GraduationCap className="h-16 w-16 text-blue-500/20" />
                </div>
                <div className="h-full flex flex-col items-center justify-center space-y-6 border-2 border-blue-500/20 p-8 rounded-lg">
                  <div className="text-blue-400 font-bold tracking-widest text-xs uppercase">Certificate of Excellence</div>
                  <h3 className="text-3xl md:text-5xl font-serif text-white text-center">Internship Completion</h3>
                  <div className="w-32 h-px bg-slate-800" />
                  <p className="text-slate-400 text-sm text-center font-mono">Awarded to student for completing <br/>Full Stack Development Internship</p>
                  <div className="flex justify-between w-full pt-8 px-4 opacity-50">
                    <div className="text-[10px] font-bold text-slate-500">KADEGREE OFFICIAL</div>
                    <div className="text-[10px] font-bold text-slate-500 underline">VERIFIED CREDENTIAL</div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-x-0 -bottom-8 flex justify-center">
                 <Badge className="bg-accent text-accent-foreground px-6 py-2 rounded-full font-bold shadow-lg">ISO Certified Standard</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 8. Benefits Section --- */}
      <section className="py-24 bg-slate-900/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">The KA Degree Advantage</h2>
            <p className="text-slate-400 max-w-xl mx-auto italic">Everything you need to kickstart your tech career successfully.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Real Industry Projects", icon: Rocket, color: "text-blue-400", desc: "No dummy exercises. You work on logic that solves real problems." },
              { title: "Official Certification", icon: Award, color: "text-indigo-400", desc: "Gain a credential that is recognized and respected by top recruiters." },
              { title: "Portfolio Development", icon: Briefcase, color: "text-cyan-400", desc: "We help you host your projects on Vercel/Netlify for others to see." },
              { title: "Resume Building", icon: Laptop, color: "text-emerald-400", desc: "Expert guidance on highlighting your internship skills effectively." },
              { title: "Mock Interviews", icon: MessageSquare, color: "text-purple-400", desc: "Ready yourself for the real thing with technical and HR mock rounds." },
              { title: "Career Guidance", icon: Users, color: "text-orange-400", desc: "One-on-one sessions with industry experts to plan your future." }
            ].map((benefit, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 transition-all hover:bg-slate-900 group">
                <div className={`w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <benefit.icon className={`h-6 w-6 ${benefit.color}`} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{benefit.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 9. Who Can Apply --- */}
      <section className="py-24 border-y border-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-slate-900/40 rounded-[2.5rem] border border-slate-800 p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 p-8 opacity-20"><Users className="h-32 w-32" /></div>
            
            <div className="relative z-10 text-center space-y-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Who Can Apply?</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["BCA Students", "MCA Students", "B.Tech Students", "CS Graduates"].map((item, i) => (
                  <div key={i} className="p-4 bg-slate-950 rounded-2xl border border-slate-800 text-slate-300 font-bold flex items-center justify-center text-sm transform hover:scale-105 transition-transform duration-300">
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-slate-400 max-w-xl mx-auto leading-relaxed italic">
                 If you have a laptop and a hunger to learn modern software engineering, you are eligible to join the cohort. No prior complex coding experience is required—we start from basics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 10. FAQ Section --- */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Questions & Answers</h2>
            <p className="text-slate-400 max-w-xl mx-auto italic">Everything you need to know before starting your journey.</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { 
                q: "Is this internship suitable for BCA students?", 
                a: "Absolutely! The program is specifically designed to provide BCA students with the practical coding skills that are often missed in academic curricula." 
              },
              { 
                q: "Will I receive an internship certificate?", 
                a: "Yes, you will receive an official Internship Completion Certificate from KA Degree after successful evaluation of your final project." 
              },
              { 
                q: "Do I need coding experience?", 
                a: "No advanced experience needed. We start from Programming Fundamentals (Module 1). Basic familiarity with computers and a strong desire to learn is enough." 
              },
              { 
                q: "How long is the internship program?", 
                a: "The standard cohort duration is 3 to 6 months depending on the intensity of the project track you choose." 
              }
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-900/30 border border-slate-800 hover:border-slate-700 transition-all">
                <div className="flex gap-4 items-start">
                  <HelpCircle className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                  <div className="space-y-2">
                    <h4 className="font-bold text-white text-lg leading-tight">{faq.q}</h4>
                    <p className="text-slate-400 leading-relaxed text-sm">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 11. Student Testimonials --- */}
      <section className="py-24 bg-blue-600/5 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight font-serif italic mb-4">Voice of Students</h2>
            <div className="flex justify-center gap-1">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-accent text-accent" />)}
            </div>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Trust of 500+ Local Tech Candidates</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Rahul S.", role: "BCA Final Year", text: "KA Degree helped me build my first full-stack app. The mentors are always there to clear doubts. Totally worth it!" },
              { name: "Priya V.", role: "MCA Graduate", text: "The Flask backend module was a game changer for me. I finally understood how data flows in a real application." },
              { name: "Kiran K.", role: "Engineering Student", text: "Portfolio help was the best part. I had my projects live on GitHub and Vercel before I even finished the internship." }
            ].map((t, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-slate-900 border border-slate-800 relative">
                <div className="absolute top-0 right-0 p-8 opacity-10"><MessageSquare className="h-10 w-10 text-blue-500" /></div>
                <div className="space-y-6">
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />)}
                  </div>
                  <p className="text-slate-300 leading-relaxed italic">"{t.text}"</p>
                  <div className="flex items-center gap-4 border-t border-slate-800 pt-6">
                    <div className="h-10 w-10 rounded-full bg-blue-600/20 border border-blue-500/20 flex items-center justify-center font-bold text-blue-400">
                      {t.name[0]}
                    </div>
                    <div>
                      <h5 className="font-bold text-white leading-tight">{t.name}</h5>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="max-w-4xl mx-auto space-y-10"
           >
             <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tight">Your Future Start <span className="italic">Here</span>.</h2>
             <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
               Limited seats available for the upcoming Bangalore tech cohort. Apply now to secure your spot.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button size="lg" className="h-16 px-12 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xl rounded-3xl shadow-2xl shadow-blue-500/20 transition-all hover:scale-[1.05]" onClick={handleApplyClick}>
                 Register Now - Pay Advance & Book Slot
               </Button>
               <Button 
                variant="outline"
                size="lg" 
                className="h-16 px-12 border-slate-800 text-slate-300 hover:bg-slate-900/80 font-bold text-xl rounded-3xl"
               >
                 Know More
               </Button>
             </div>
           </motion.div>
        </div>
      </section>

      <Footer />

      {/* --- 12. Lead Capture Popup (Scroll Triggered) --- */}
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div 
               initial={{ opacity: 0, scale: 0.9, y: 20 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               exit={{ opacity: 0, scale: 0.9, y: 20 }}
               className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setShowPopup(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-950 text-slate-400 hover:text-white transition-colors border border-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-indigo-500" />
              
              <div className="relative z-10 text-center space-y-8">
                {formStatus === 'submitted' ? (
                  <div className="py-12 animate-in zoom-in-95 duration-500">
                    <div className="w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Sparkles className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">Application Received!</h3>
                    <p className="text-slate-400">Our academic counselors will reach out to you within 24 hours.</p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-3">
                      <Badge variant="secondary" className="bg-blue-600/20 text-blue-400 border-none px-4 py-1">Limited Slots</Badge>
                      <h3 className="text-3xl font-bold text-white">Register for AI Internship</h3>
                      <p className="text-slate-400 text-sm">Pay the advance fee and securely book your slot for the ₹4,499/- program.</p>
                    </div>
                    
                    <form className="grid gap-3 text-left" onSubmit={handleSubmit}>
                       <input type="hidden" name={ENTRY_IDS.LOOKING_FOR} value="AI Internship" />
                       <input type="hidden" name={ENTRY_IDS.PAYMENT} value={`Advance Rs${paymentOption === 'custom' ? customAmount : paymentOption} Paid`} />
                       
                       <div className="space-y-1 pt-2 pb-2">
                         <Label className="text-xs font-bold uppercase tracking-widest text-slate-500">Select Payment Amount</Label>
                         <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                           {['100', '500', '1000', '4499'].map((amt) => (
                             <button
                               type="button"
                               key={amt}
                               onClick={() => setPaymentOption(amt)}
                               className={`h-10 rounded-lg text-sm font-bold border transition-colors ${paymentOption === amt ? 'bg-blue-600 border-blue-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-900'}`}
                             >
                               ₹{amt}{amt === '4499' && ' (Full)'}
                             </button>
                           ))}
                           <button
                             type="button"
                             onClick={() => setPaymentOption('custom')}
                             className={`h-10 rounded-lg text-sm font-bold border transition-colors col-span-2 md:col-span-4 ${paymentOption === 'custom' ? 'bg-blue-600 border-blue-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-900'}`}
                           >
                             Custom Amount
                           </button>
                         </div>
                         {paymentOption === 'custom' && (
                           <div className="pt-2">
                             <Input 
                               type="number" 
                               min="1"
                               value={customAmount}
                               onChange={(e) => setCustomAmount(e.target.value)}
                               placeholder="Enter amount in ₹ (e.g. 2000)" 
                               className="bg-slate-950 border-slate-800 h-12 text-white" 
                               required 
                             />
                           </div>
                         )}
                       </div>

                       <div className="space-y-1">
                         <Label className="text-xs font-bold uppercase tracking-widest text-slate-500">Full Name</Label>
                         <Input required name={ENTRY_IDS.NAME} placeholder="Student Name" className="bg-slate-950 border-slate-800 h-12" />
                       </div>

                       <div className="grid md:grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <Label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Address</Label>
                          <Input required type="email" name={ENTRY_IDS.EMAIL} placeholder="student@example.com" className="bg-slate-950 border-slate-800 h-12" />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-xs font-bold uppercase tracking-widest text-slate-500">Phone Number</Label>
                          <Input required type="tel" name={ENTRY_IDS.PHONE} placeholder="+91 00000 00000" className="bg-slate-950 border-slate-800 h-12" />
                        </div>
                       </div>
                       
                       <div className="grid md:grid-cols-2 gap-3">
                        <div className="space-y-1">
                         <Label className="text-xs font-bold uppercase tracking-widest text-slate-500">Degree</Label>
                         <select name={ENTRY_IDS.DEGREE} className="flex h-12 w-full rounded-md border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-500">
                           <option value="BCA">BCA</option>
                           <option value="MCA">MCA</option>
                           <option value="BE / B.Tech">BE / B.Tech</option>
                           <option value="Other">Other Graduation</option>
                         </select>
                        </div>
                        <div className="space-y-1">
                         <Label className="text-xs font-bold uppercase tracking-widest text-slate-500">College / Year</Label>
                         <Input required name={ENTRY_IDS.COLLEGE_YEAR} placeholder="Your Institution" className="bg-slate-950 border-slate-800 h-12" />
                        </div>
                       </div>
                       
                       <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-3 text-sm text-blue-200 mt-2">
                         <strong className="text-blue-400">Important:</strong> You will be redirected to the Razorpay payment gateway. After successful payment, our team will contact you within 24 hours.
                       </div>
                       
                       <Button type="submit" disabled={formStatus==='submitting'} className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 h-14 font-bold text-lg mt-2 shadow-xl shadow-blue-900/40 border-0 text-white transition-all hover:scale-[1.02]">
                         {formStatus==='submitting' ? 'Redirecting to Payment...' : 'Pay Advance & Book Slot'} <Send className="ml-2 w-5 h-5" />
                       </Button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- 13. Sticky Apply Button --- */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-28 right-8 z-[90] hidden md:block"
      >
        <Button 
          size="lg" 
          onClick={handleApplyClick}
          className="h-16 px-8 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white font-bold rounded-full shadow-2xl shadow-orange-500/20 group border border-orange-400/50 transition-all hover:scale-105"
        >
          Pay Advance & Book Slot <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
        </Button>
      </motion.div>

      <GlobalLeadCapture source="Internship Page CTA" />
      <Footer />
    </div>
  );
}
