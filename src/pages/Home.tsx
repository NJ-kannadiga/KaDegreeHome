import React, { useEffect } from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GlobalLeadCapture } from "@/components/layout/GlobalLeadCapture";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Rocket, BookOpen, Code2, Globe, Users,
  ChevronRight, Laptop,
  Monitor, Database, Server, Terminal,
  MessageSquare, Sparkles, Brain, Code
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from "wouter";

// --- 100+ Companies for Marquee ---
// --- Companies with brand colors for logo tiles ---
const COMPANIES_ROW1: { name: string; abbr: string; color: string }[] = [
  { name: "TCS", abbr: "TCS", color: "#00BBF0" },
  { name: "Wipro", abbr: "WIP", color: "#341C75" },
  { name: "Accenture", abbr: "ACC", color: "#A100FF" },
  { name: "Infosys", abbr: "INF", color: "#007CC3" },
  { name: "HCL", abbr: "HCL", color: "#0057A8" },
  { name: "Tech Mahindra", abbr: "TM", color: "#CC0000" },
  { name: "Cognizant", abbr: "COG", color: "#1A4CA1" },
  { name: "Capgemini", abbr: "CAP", color: "#0070AD" },
  { name: "IBM", abbr: "IBM", color: "#1F70C1" },
  { name: "Oracle", abbr: "ORC", color: "#F80000" },
  { name: "SAP", abbr: "SAP", color: "#008FD3" },
  { name: "Microsoft", abbr: "MS", color: "#00A4EF" },
  { name: "Google", abbr: "GOO", color: "#4285F4" },
  { name: "Amazon", abbr: "AMZ", color: "#FF9900" },
  { name: "Flipkart", abbr: "FLK", color: "#2874F0" },
  { name: "Zoho", abbr: "ZHO", color: "#E42527" },
  { name: "Freshworks", abbr: "FW", color: "#25C16F" },
  { name: "CRED", abbr: "CRD", color: "#1C1C1E" },
  { name: "Razorpay", abbr: "RPY", color: "#3395FF" },
  { name: "Paytm", abbr: "PYT", color: "#00BAF2" },
  { name: "PhonePe", abbr: "PPE", color: "#5F259F" },
  { name: "MakeMyTrip", abbr: "MMT", color: "#CB0062" },
  { name: "Swiggy", abbr: "SWG", color: "#FC8019" },
  { name: "Zomato", abbr: "ZMT", color: "#CB202D" },
  { name: "Ola", abbr: "OLA", color: "#231F20" },
  { name: "Nykaa", abbr: "NYK", color: "#FC2779" },
  { name: "Meesho", abbr: "MSH", color: "#F43397" },
  { name: "Dunzo", abbr: "DNZ", color: "#00D290" },
  { name: "Zepto", abbr: "ZEP", color: "#8B00FF" },
  { name: "Urban Company", abbr: "UC", color: "#6F3BE4" },
  { name: "BigBasket", abbr: "BB", color: "#84C225" },
  { name: "Mphasis", abbr: "MPH", color: "#003DA5" },
  { name: "Hexaware", abbr: "HEX", color: "#00A551" },
  { name: "LTIMindtree", abbr: "LTI", color: "#E4002B" },
  { name: "Persistent", abbr: "PER", color: "#0047BB" },
  { name: "KPIT", abbr: "KPT", color: "#00376C" },
  { name: "Tata Elxsi", abbr: "TEL", color: "#003399" },
  { name: "L&T Technology", abbr: "LNT", color: "#005A9C" },
  { name: "Bosch", abbr: "BSH", color: "#EA0016" },
  { name: "Siemens", abbr: "SIE", color: "#009999" },
];
const COMPANIES_ROW2: { name: string; abbr: string; color: string }[] = [
  { name: "DXC Technology", abbr: "DXC", color: "#6F2DA8" },
  { name: "NTT Data", abbr: "NTT", color: "#003087" },
  { name: "Genpact", abbr: "GEN", color: "#00A0D2" },
  { name: "EXL Service", abbr: "EXL", color: "#0033A0" },
  { name: "WNS", abbr: "WNS", color: "#E20028" },
  { name: "Firstsource", abbr: "FST", color: "#007DC6" },
  { name: "EPAM", abbr: "EPA", color: "#41C0F0" },
  { name: "GlobalLogic", abbr: "GL", color: "#0091D5" },
  { name: "Nagarro", abbr: "NAG", color: "#FF6900" },
  { name: "ThoughtWorks", abbr: "TW", color: "#EC1D25" },
  { name: "Synechron", abbr: "SYN", color: "#0077B6" },
  { name: "Virtusa", abbr: "VRT", color: "#00274C" },
  { name: "Honeywell", abbr: "HON", color: "#FC3524" },
  { name: "Schneider", abbr: "SCH", color: "#3DCD58" },
  { name: "ABB", abbr: "ABB", color: "#FF000F" },
  { name: "GE Healthcare", abbr: "GEH", color: "#003087" },
  { name: "Philips", abbr: "PHI", color: "#0B5ED7" },
  { name: "Mahindra", abbr: "MAH", color: "#CC0000" },
  { name: "Tata Motors", abbr: "TML", color: "#00519B" },
  { name: "Hero MotoCorp", abbr: "HMC", color: "#C8102E" },
  { name: "Bajaj", abbr: "BAJ", color: "#003580" },
  { name: "Toyota", abbr: "TOY", color: "#EB0A1E" },
  { name: "Honda", abbr: "HON", color: "#CC0000" },
  { name: "Hyundai", abbr: "HYU", color: "#002C5F" },
  { name: "Ford", abbr: "FRD", color: "#003080" },
  { name: "Byju's", abbr: "BYJ", color: "#7B2D8B" },
  { name: "Unacademy", abbr: "UNA", color: "#08BD80" },
  { name: "Mindtree", abbr: "MDT", color: "#5AB946" },
  { name: "Zensar", abbr: "ZNS", color: "#E4002B" },
  { name: "Birlasoft", abbr: "BRS", color: "#003087" },
  { name: "Coforge", abbr: "COF", color: "#FF671F" },
  { name: "Sasken", abbr: "SAS", color: "#003580" },
  { name: "Subex", abbr: "SUB", color: "#0057A8" },
  { name: "Cyient", abbr: "CYI", color: "#006DB7" },
  { name: "QuEST Global", abbr: "QST", color: "#E4002B" },
  { name: "Mastek", abbr: "MST", color: "#006CAE" },
  { name: "Kellton", abbr: "KLT", color: "#0070C0" },
  { name: "Newgen", abbr: "NGN", color: "#003087" },
  { name: "Volvo", abbr: "VOL", color: "#003087" },
  { name: "BMW", abbr: "BMW", color: "#1C69D3" },
  { name: "Mercedes", abbr: "MER", color: "#A0A0A0" },
  { name: "Suzuki", abbr: "SUZ", color: "#E4002B" },
  { name: "TVS", abbr: "TVS", color: "#003580" },
];

function LogoTile({ name, abbr, color }: { name: string; abbr: string; color: string }) {
  return (
    <div className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-slate-800/70 bg-slate-900/50 hover:border-slate-700 transition-all cursor-default group shrink-0">
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center text-[10px] font-black text-white shrink-0 shadow-lg"
        style={{ backgroundColor: color }}
      >
        {abbr}
      </div>
      <span className="text-slate-400 text-sm font-semibold group-hover:text-slate-200 transition-colors whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

function MarqueeRow({ items, reverse = false }: { items: { name: string; abbr: string; color: string }[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div
      className="overflow-hidden w-full py-2"
      style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)' }}
    >
      <div
        className="flex gap-4 w-max"
        style={{
          animation: `marquee${reverse ? 'Reverse' : ''} 120s linear infinite`,
        }}
      >
        {doubled.map((company, i) => (
          <LogoTile key={i} name={company.name} abbr={company.abbr} color={company.color} />
        ))}
      </div>
    </div>
  );
}


// --- SEO Data ---
const SEO_METADATA = {
  title: "KA Degree | Mentor-Led Tech & AI Coaching for BCA, MCA, BE Students",
  description: "Industry-standard tech coaching in Bangalore. Master AI, Full-Stack, and Core CS through mentor-led real projects. Designed for BCA, MCA, and Engineering students.",
  keywords: "Tech Coaching Bangalore, AI Training BCA MCA, Software Engineering Mentorship, KA Degree, Learn React Node Python"
};

export default function Home() {
  // SEO logic
  useEffect(() => {
    document.title = SEO_METADATA.title;
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', SEO_METADATA.description);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30">
      <Navbar />

      {/* --- 1. Hero Section --- */}
      <section className="relative pt-32 pb-24 overflow-hidden">
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
            <Badge variant="outline" className="mb-6 px-4 py-1.5 bg-blue-500/10 text-blue-400 border-blue-500/30 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 mr-2" /> Modern Tech & AI Coaching
            </Badge>
            <h1 className="text-5xl md:text-8xl font-extrabold text-white tracking-tight leading-[1.05] mb-8">
              Real-World <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Tech & AI</span> Coaching
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12">
              We are not a college. We train real developers. Master modern tech stacks with mentor-led training designed for BCA, MCA, and Engineering students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/courses">
                <Button size="lg" className="h-14 px-8 bg-white text-slate-900 hover:bg-blue-50 font-bold text-lg rounded-2xl shadow-xl shadow-blue-500/10 transition-all hover:scale-[1.02] w-full sm:w-auto">
                  Explore Programs <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/assessment">
                <Button variant="outline" size="lg" className="h-14 px-8 border-slate-800 text-slate-300 hover:bg-slate-900/80 font-bold text-lg rounded-2xl transition-all hover:scale-[1.02] w-full sm:w-auto">
                  Take Free Assessment
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 3. Who This Is For --- */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Programs for Every CS Student</h2>
            <p className="text-slate-400 max-w-xl mx-auto italic">Industry-aligned mentorship tailored to your academic stage.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "BCA Students", desc: "Programming & full-stack skills with real-world project cycles.", icon: Laptop, color: "text-blue-400" },
              { title: "MCA Students", desc: "Advanced systems, backend architecture, and practical AI exposure.", icon: Terminal, color: "text-indigo-400" },
              { title: "Engineering", desc: "Bridging the gap between engineering theory and professional dev workflows.", icon: Monitor, color: "text-cyan-400" },
              { title: "PUC / CS Prep", desc: "Early logic foundation and smooth transition into computer science degrees.", icon: Code2, color: "text-emerald-400" }
            ].map((program, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center mb-6 group-hover:bg-blue-500/10 transition-colors">
                  <program.icon className={`h-6 w-6 ${program.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{program.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{program.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* --- 2. Trust Strip (Infinite Marquee) --- */}
      <section className="py-12 border-y border-slate-900/50 bg-slate-900/20 overflow-hidden">
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marqueeReverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
        `}</style>
        <p className="text-center text-slate-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-6">Trusted by Students Placed At Leading Companies</p>
        <MarqueeRow items={COMPANIES_ROW1} />
        <MarqueeRow items={COMPANIES_ROW2} reverse />
      </section>



      {/* --- 4. How It Works --- */}
      <section className="py-24 bg-blue-600/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="bg-blue-500/10 text-blue-400 border-none px-4 py-1">The Methodology</Badge>
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">Beyond Traditional <span className="italic text-blue-400">Classrooms</span></h2>
              <div className="grid gap-6">
                {[
                  { title: "Mentor-Led Batches", desc: "Small groups led by industry experts. No generic video lectures.", icon: Users },
                  { title: "Weekly Mentorship", desc: "Direct code reviews and career clarity sessions every week.", icon: MessageSquare },
                  { title: "Real-World Projects", desc: "Build applications that matter. Learn how production teams work.", icon: Rocket },
                  { title: "AI-First Approach", desc: "Master modern AI tools to code faster and meet 2026 standards.", icon: Brain }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-slate-900/50 transition-colors">
                    <div className="mt-1 p-2 bg-slate-900 rounded-lg text-blue-400">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-600/20 to-indigo-600/5 rounded-3xl border border-blue-500/20 p-8 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent animate-pulse" />
                <div className="relative text-center space-y-4">
                  <div className="text-6xl font-black text-blue-500/40">100%</div>
                  <div className="text-xl font-bold text-white uppercase tracking-widest">Practical Learning</div>
                  <p className="text-slate-500 text-sm">We focus on logic that solves real problems.</p>
                </div>
              </div>
              {/* Decorative blobs */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. Skill Modules --- */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">What You Will Master</h2>
            <p className="text-slate-400 max-w-xl mx-auto italic">A comprehensive stack designed for the modern industry demands.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "Core CS", icon: Terminal, desc: "Data Structures & Logic" },
              { name: "Frontend", icon: Globe, desc: "React & Modern CSS" },
              { name: "Backend", icon: Server, desc: "Python & Node.js" },
              { name: "Applied AI", icon: Brain, desc: "Practical AI Workflows" },
              { name: "Databases", icon: Database, desc: "SQL & System Design" }
            ].map((skill, i) => (
              <Card key={i} className="border-slate-800 bg-slate-900/50 hover:border-blue-500/30 transition-all hover:bg-slate-900 group">
                <CardContent className="p-8 flex flex-col items-center">
                  <div className="p-4 bg-slate-950 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                    <skill.icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <h4 className="font-bold text-white mb-2">{skill.name}</h4>
                  <p className="text-xs text-slate-500 font-medium">{skill.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. AI Integration Highlight --- */}
      <section className="py-24 bg-slate-950 relative overflow-hidden border-y border-slate-900">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-blue-600/5 blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-emerald-500/10 text-emerald-400 border-none px-4 py-1">Future Ready</Badge>
            <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tight">AI & Modern Technology <span className="italic text-blue-400">Exposure</span></h2>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              We go beyond basics. Learn how to use AI for code generation, automation, and real software team workflows.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              {[
                "Applied AI fundamentals",
                "AI tools for developers",
                "Automation workflows"
              ].map((text, i) => (
                <div key={i} className="p-6 bg-slate-900/40 rounded-2xl border border-slate-800 backdrop-blur-sm text-sm font-bold text-slate-300">
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- 7. Language Support --- */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-8">Learn in Your <span className="italic font-serif">Own</span> Language</h2>
          <p className="text-slate-400 mb-12 max-w-xl mx-auto italic text-lg">We support explanations in regional Indian languages alongside English to ensure total conceptual clarity.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Kannada", "Telugu", "Tamil", "Hindi", "Malayalam", "English"].map((lang) => (
              <span key={lang} className="px-8 py-3 rounded-full bg-slate-900 border border-slate-800 text-blue-400 font-bold text-sm hover:border-blue-500/30 transition-all">
                {lang}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* --- 8. CTA Section --- */}
      <section className="py-32 relative overflow-hidden bg-slate-950">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto rounded-[3rem] bg-gradient-to-br from-blue-600 to-indigo-700 p-12 md:p-24 shadow-2xl shadow-blue-900/20"
          >
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.9]">READY TO <br />BUILD?</h2>
            <p className="text-xl text-blue-100 max-w-xl mx-auto leading-relaxed mb-12 font-medium">
              Stop learning like a student. Start training like a developer. Flexible fees and pay-after-placement options available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/courses">
                <Button size="lg" className="h-16 px-12 bg-white text-blue-900 hover:bg-blue-50 font-bold text-xl rounded-2xl shadow-2xl transition-all hover:scale-[1.05] w-full sm:w-auto">
                  Get Started Now
                </Button>
              </Link>
              <Link href="/internships">
                <Button variant="outline" size="lg" className="h-16 px-12 border-blue-400/30 text-white hover:bg-white/10 font-bold text-xl rounded-2xl w-full sm:w-auto">
                  View Internships
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <GlobalLeadCapture source="Home Page CTA" />
      <Footer />
    </div>
  );
}
