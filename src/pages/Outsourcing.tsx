import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { 
  ArrowRight, Users, Briefcase, RefreshCw, BarChart, Settings, Search, 
  Target, Monitor, Zap, Plus, Shield, Clock, TrendingUp
} from 'lucide-react';
import { CountUp } from '@/components/ui/CountUp';
import heroImg from '@/assets/card_outsourcing.jpg';
import teamImg from '@/assets/dm_human_stories.jpg';

const easeOut = [0.22, 1, 0.36, 1];

const Outsourcing: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 24; // approx 12px
      const y = (e.clientY / window.innerHeight - 0.5) * 24;
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Shared Animation Variants
  const lineReveal = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOut, delay: custom }
    })
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full bg-[#F8F3EC] text-[#171417] selection:bg-[#5A0B2E] selection:text-white"
      ref={containerRef}
    >
      {/* =========================================
          HERO SECTION
          ========================================= */}
      <section className="relative w-full px-6 md:px-8 pt-32 pb-24 max-w-[1400px] mx-auto min-h-[90vh] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          
          <div className="flex flex-col z-10 relative">
            <motion.div 
              custom={0.3} initial="hidden" animate="visible" variants={lineReveal}
              className="flex items-center gap-4 mb-8"
            >
              <div className="font-sans text-xs tracking-[0.15em] font-semibold text-[#5A0B2E]">
                02 — OUTSOURCING & DIGITAL SUPPORT
              </div>
            </motion.div>
            
            <div className="mb-8">
              {['Your Team.', 'Our Expertise.', 'One Stronger Business.'].map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.h1 
                    custom={0.45 + (i * 0.1)} initial="hidden" animate="visible" variants={lineReveal}
                    className={`font-serif text-[56px] md:text-[80px] leading-[1.05] tracking-[-0.02em] font-bold ${i === 2 ? 'text-[#5A0B2E]' : 'text-[#171417]'}`}
                  >
                    {line}
                  </motion.h1>
                </div>
              ))}
            </div>
            
            <motion.div custom={0.7} initial="hidden" animate="visible" variants={lineReveal} className="mb-10">
              <p className="font-sans text-[20px] md:text-[24px] leading-[1.5] text-[#171417] mb-4 max-w-xl">
                Extend your capabilities without the complexity of building everything in-house.
              </p>
              <p className="font-sans text-[16px] md:text-[18px] leading-[1.6] text-[#6B6464] max-w-xl">
                KA Degree provides reliable digital, technology and operational support that helps businesses move faster, work smarter and focus on what matters most.
              </p>
            </motion.div>
            
            <motion.div custom={0.9} initial="hidden" animate="visible" variants={lineReveal} className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact-us">
                <a className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#3B071F] hover:bg-[#5A0B2E] text-white rounded-xl font-medium transition-all duration-300 group hover:-translate-y-[2px]">
                  Talk to Our Team
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Link>
              <Link href="/#core-expertise">
                <a className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-[#DED5CC] hover:border-[#5A0B2E] hover:text-[#5A0B2E] text-[#171417] rounded-xl font-medium transition-all duration-300 group hover:-translate-y-[2px]">
                  Explore Other Services
                  <ArrowRight className="w-5 h-5 rotate-90 group-hover:translate-y-1 transition-transform duration-300" />
                </a>
              </Link>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
              animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
              transition={{ duration: 0.8, ease: easeOut, delay: 0.6 }}
              style={{ x: mousePosition.x * -0.5, y: mousePosition.y * -0.5 }}
              className="aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl relative group"
            >
              <img 
                src={heroImg} 
                alt="KA Degree Team" 
                className="w-full h-full object-cover rounded-[32px] group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#3B071F]/10 mix-blend-multiply" />
            </motion.div>
            
            {/* Parallax decorative circles */}
            <motion.div 
              style={{ x: mousePosition.x * 0.25, y: mousePosition.y * 0.25 }}
              className="absolute -top-12 -left-12 w-48 h-48 border border-[#5A0B2E]/20 rounded-full -z-10"
            />
            <motion.div 
              style={{ x: mousePosition.x * -0.4, y: mousePosition.y * -0.4 }}
              className="absolute -bottom-8 -right-8 w-64 h-64 border border-[#DED5CC] rounded-full -z-10"
            />

            {/* Floating Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute -bottom-8 -left-12 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-[#DED5CC]/50"
            >
              <div className="w-12 h-12 bg-[#F8F3EC] rounded-full flex items-center justify-center text-[#5A0B2E]">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <div className="font-serif font-bold text-2xl text-[#171417]">
                  <CountUp end={100} suffix="+" />
                </div>
                <div className="font-sans text-xs text-[#6B6464] font-medium uppercase tracking-wider">Projects Delivered</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
          THE CHALLENGE (VS SECTION)
          ========================================= */}
      <section className="w-full py-32 border-t border-[#DED5CC] bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.span variants={fadeUp} className="font-sans text-xs tracking-[0.15em] font-bold text-[#6B6464] block mb-4 uppercase">The Business Challenge</motion.span>
            <motion.h2 variants={fadeUp} className="font-serif text-[40px] md:text-[56px] leading-[1.1] font-bold text-[#171417]">
              You don't need a bigger team.<br />
              <span className="text-[#5A0B2E]">You need the right capabilities.</span>
            </motion.h2>
          </motion.div>

          <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24">
            {/* Background connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-[#DED5CC]/50 -z-20" />
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.8, duration: 1, ease: easeOut }}
              className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#5A0B2E] to-transparent -z-10 origin-center"
            />

            <motion.div 
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: easeOut }}
              className="bg-[#F8F3EC] p-10 rounded-3xl w-full max-w-md border border-[#DED5CC]"
            >
              <h3 className="font-sans text-sm tracking-wider font-bold text-[#6B6464] mb-8 text-center">BUILD EVERYTHING IN-HOUSE</h3>
              <ul className="space-y-6">
                {[
                  { icon: <Users size={20} />, text: 'Recruit' },
                  { icon: <Target size={20} />, text: 'Train' },
                  { icon: <Settings size={20} />, text: 'Manage' },
                  { icon: <TrendingUp size={20} />, text: 'Scale' }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-[#171417] font-medium text-lg">
                    <div className="text-[#6B6464]">{item.icon}</div>
                    {item.text}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
              className="w-16 h-16 shrink-0 bg-[#3B071F] text-white rounded-full flex items-center justify-center font-serif font-bold text-xl shadow-lg relative z-10"
            >
              VS
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: easeOut, delay: 0.2 }}
              className="bg-white p-10 rounded-3xl w-full max-w-md border border-[#5A0B2E]/20 shadow-[0_20px_40px_rgba(90,11,46,0.05)]"
            >
              <h3 className="font-sans text-sm tracking-wider font-bold text-[#5A0B2E] mb-8 text-center">WORK WITH KA DEGREE</h3>
              <ul className="space-y-6">
                {[
                  { icon: <Briefcase size={20} />, text: 'Expertise' },
                  { icon: <Zap size={20} />, text: 'Execution' },
                  { icon: <RefreshCw size={20} />, text: 'Flexibility' },
                  { icon: <Shield size={20} />, text: 'Support' }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-[#171417] font-medium text-lg">
                    <div className="text-[#5A0B2E]">{item.icon}</div>
                    {item.text}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
          OUR SERVICES
          ========================================= */}
      <section id="services" className="w-full bg-[#3B071F] py-32 text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="mb-20"
          >
            <motion.span variants={fadeUp} className="font-sans text-xs tracking-[0.15em] font-bold text-white/50 block mb-4 uppercase">Our Services</motion.span>
            <motion.h2 variants={fadeUp} className="font-serif text-[40px] md:text-[56px] leading-[1.1] font-bold text-white">
              Expert support. Exactly where you need it.
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: '01', title: 'Technology Support', desc: 'Extend your technical capabilities with experienced development and technology support.' },
              { id: '02', title: 'Web & App Development', desc: 'Build, improve and maintain modern digital applications without expanding your team.' },
              { id: '03', title: 'Digital Operations', desc: 'Get reliable support for the everyday digital work that keeps your business moving.' },
              { id: '04', title: 'Data & Analytics', desc: 'Turn business data into useful insights and better decisions.' },
              { id: '05', title: 'Process & Automation', desc: 'Reduce repetitive work and improve operational efficiency through smarter workflows.' },
              { id: '06', title: 'Dedicated Project Support', desc: 'Add experienced people to your project when you need additional capacity.' }
            ].map((srv, idx) => (
              <motion.div 
                key={srv.id}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: easeOut, delay: idx * 0.15 }}
                className="group p-10 border border-white/10 rounded-[24px] bg-white/5 hover:bg-white/10 hover:-translate-y-2 hover:border-[#5A0B2E] transition-all duration-[350ms] ease-out cursor-default flex flex-col h-full relative overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center font-serif text-xl group-hover:-translate-y-1 transition-transform duration-[350ms]">
                    {srv.id}
                  </div>
                </div>
                <h3 className="font-serif text-[24px] font-bold mb-4">{srv.title}</h3>
                <p className="font-sans text-white/60 leading-[1.6] mb-8 flex-1">{srv.desc}</p>
                
                <div className="mt-auto">
                  <ArrowRight className="w-6 h-6 text-white/40 group-hover:text-white group-hover:translate-x-2 transition-all duration-[350ms] ease-out" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          DIGITAL ENGINE (CUSTOM ANIMATION)
          ========================================= */}
      <section className="w-full bg-white py-32 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 text-center">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="mb-24"
          >
            <motion.h2 variants={fadeUp} className="font-serif text-[40px] md:text-[56px] leading-[1.1] font-bold text-[#171417]">
              The Engine of Growth
            </motion.h2>
          </motion.div>

          <div className="relative max-w-5xl mx-auto hidden lg:block">
            {/* Flow Line animated */}
            <motion.div 
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 2, ease: "linear" }}
              className="absolute top-1/2 left-0 h-[2px] bg-[#5A0B2E] -translate-y-1/2 z-0"
              style={{ transformOrigin: "left center" }}
            />
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[#DED5CC] -translate-y-1/2 z-[-1]" />

            <div className="flex justify-between relative z-10">
              {['STRATEGY', 'AUDIENCE', 'CONTENT', 'DISTRIBUTION', 'CONVERSION', 'RETENTION', 'GROWTH'].map((node, i, arr) => (
                <motion.div 
                  key={node}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex flex-col items-center gap-4"
                >
                  <motion.div 
                    initial={{ backgroundColor: "#FFFFFF", borderColor: "#DED5CC" }}
                    whileInView={{ 
                      backgroundColor: i === arr.length - 1 ? "#5A0B2E" : ["#FFFFFF", "#5A0B2E", "#FFFFFF"], 
                      borderColor: "#5A0B2E",
                      scale: i === arr.length - 1 ? [1, 1.1, 1] : 1
                    }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ 
                      backgroundColor: i === arr.length - 1 ? { delay: (i / (arr.length - 1)) * 2, duration: 0.3 } : { delay: (i / (arr.length - 1)) * 2, duration: 0.4, times: [0, 0.5, 1] },
                      borderColor: { delay: (i / (arr.length - 1)) * 2, duration: 0.3 },
                      scale: i === arr.length - 1 ? { repeat: Infinity, duration: 2, ease: "easeInOut", delay: (i / (arr.length - 1)) * 2 } : {}
                    }}
                    className="w-4 h-4 rounded-full border-2 transition-colors duration-300"
                    style={{
                      boxShadow: i === arr.length - 1 ? "0px 0px 10px rgba(90,11,46,0.3)" : "none"
                    }}
                  />
                  <motion.span 
                    initial={{ color: "#6B6464" }}
                    whileInView={{ color: i === arr.length - 1 ? "#5A0B2E" : "#171417" }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ delay: (i / (arr.length - 1)) * 2, duration: 0.3 }}
                    className="font-sans text-[11px] tracking-[0.2em] font-bold"
                  >
                    {node}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Fallback for Flow */}
          <div className="lg:hidden flex flex-col gap-6 items-center">
            {['STRATEGY', 'AUDIENCE', 'CONTENT', 'DISTRIBUTION', 'CONVERSION', 'RETENTION', 'GROWTH'].map((node, i, arr) => (
              <React.Fragment key={node}>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="px-6 py-3 border border-[#DED5CC] rounded-full text-xs font-bold tracking-widest text-[#171417]">
                  {node}
                </motion.div>
                {i < arr.length - 1 && <div className="w-[1px] h-6 bg-[#DED5CC]" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          PROCESS TIMELINE
          ========================================= */}
      <section className="w-full bg-[#F8F3EC] py-32 border-t border-[#DED5CC]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="mb-20"
          >
            <motion.span variants={fadeUp} className="font-sans text-xs tracking-[0.15em] font-bold text-[#6B6464] block mb-4 uppercase">How We Work</motion.span>
            <motion.h2 variants={fadeUp} className="font-serif text-[40px] md:text-[56px] leading-[1.1] font-bold text-[#171417]">
              Simple to start. Easy to scale.
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative pt-8">
            {/* Timeline Line */}
            <div className="hidden md:block absolute top-[28px] left-[12%] right-[12%] h-[1px] bg-[#DED5CC]" />
            <motion.div 
              className="hidden md:block absolute top-[28px] left-[12%] h-[2px] bg-[#5A0B2E]"
              style={{ width: useTransform(scrollYProgress, [0.4, 0.7], ["0%", "76%"]), transformOrigin: "left" }}
            />

            {[
              { id: '01', title: 'Understand', desc: 'We understand your business, requirements and existing workflow.' },
              { id: '02', title: 'Plan', desc: 'We define the right people, technology and approach.' },
              { id: '03', title: 'Execute', desc: 'Our team works alongside you to deliver the required work.' },
              { id: '04', title: 'Scale', desc: 'As your requirements change, your support can grow with you.' }
            ].map((step, idx) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="relative z-10 flex flex-col"
              >
                <div className="w-14 h-14 rounded-full bg-[#5A0B2E] text-white flex items-center justify-center font-serif text-[20px] mb-8 mx-auto md:mx-0 shadow-lg">
                  {step.id}
                </div>
                <h3 className="font-serif text-[24px] font-bold mb-4 text-[#171417] text-center md:text-left">{step.title}</h3>
                <p className="font-sans text-[#6B6464] leading-[1.6] text-center md:text-left">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          PART OF YOUR TEAM
          ========================================= */}
      <section className="w-full bg-white border-y border-[#DED5CC] overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
          <motion.div 
            initial={{ scale: 1.08 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: easeOut }}
            className="relative h-full min-h-[400px]"
          >
            <div className="absolute inset-0 overflow-hidden group">
              <img src={teamImg} alt="Team working" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            {/* Subtle decorative floating line */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-1/4 right-0 w-[2px] h-32 bg-[#5A0B2E] z-10 shadow-[0_0_15px_rgba(90,11,46,0.8)]"
            />
          </motion.div>

          <div className="flex flex-col justify-center p-12 md:p-24 bg-[#F8F3EC]">
            <motion.div 
              initial={{ opacity: 0, x: 50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true, margin: "-100px" }} 
              transition={{ duration: 0.8, ease: easeOut, staggerChildren: 0.15 }}
            >
              <motion.span variants={fadeUp} className="font-sans text-xs tracking-[0.15em] font-bold text-[#5A0B2E] block mb-4 uppercase">Part of your team</motion.span>
              <div className="mb-8">
                {['Not just another vendor.', 'An extension of your team.'].map((line, i) => (
                  <div key={i} className="overflow-hidden">
                    <motion.h2 
                      custom={0.2 + (i * 0.1)} initial="hidden" animate="visible" variants={lineReveal}
                      className={`font-serif text-[40px] md:text-[56px] leading-[1.1] font-bold ${i === 1 ? 'text-[#5A0B2E]' : 'text-[#171417]'}`}
                    >
                      {line}
                    </motion.h2>
                  </div>
                ))}
              </div>
              <motion.p variants={fadeUp} className="font-sans text-[20px] leading-[1.6] text-[#171417] mb-4">
                We work closely with your people, understand your processes and take responsibility for delivering meaningful work.
              </motion.p>
              <motion.p variants={fadeUp} className="font-sans text-[18px] leading-[1.6] text-[#6B6464]">
                The goal isn't to replace your team. It is to make your team stronger.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
          BENEFITS SECTION
          ========================================= */}
      <section className="w-full bg-white py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="mb-20"
          >
            <motion.span variants={fadeUp} className="font-sans text-xs tracking-[0.15em] font-bold text-[#6B6464] block mb-4 uppercase">The Advantage</motion.span>
            <motion.h2 variants={fadeUp} className="font-serif text-[40px] md:text-[56px] leading-[1.1] font-bold text-[#171417]">
              More capability.<br />Less complexity.
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { icon: <Target size={32} />, title: 'Access Expertise', desc: 'Bring specialized skills into your projects when you need them.' },
              { icon: <Zap size={32} />, title: 'Move Faster', desc: 'Start work without waiting through lengthy hiring cycles.' },
              { icon: <RefreshCw size={32} />, title: 'Stay Flexible', desc: 'Increase or reduce support as your business changes.' },
              { icon: <Monitor size={32} />, title: 'Focus Internally', desc: 'Let your core team concentrate on high-value priorities.' },
              { icon: <BarChart size={32} />, title: 'Control Costs', desc: 'Get capabilities without unnecessary overhead or long-term costs.' }
            ].map((ben, idx) => (
              <BenefitCard key={idx} ben={ben} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          WHO WE HELP CARDS
          ========================================= */}
      <section className="w-full bg-[#F8F3EC] py-32 border-t border-[#DED5CC]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="mb-20"
          >
            <motion.span variants={fadeUp} className="font-sans text-xs tracking-[0.15em] font-bold text-[#6B6464] block mb-4 uppercase">Who We Help</motion.span>
            <motion.h2 variants={fadeUp} className="font-serif text-[40px] md:text-[56px] leading-[1.1] font-bold text-[#171417]">
              Built for businesses that need to move.
            </motion.h2>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: <Plus className="text-[#5A0B2E]" size={24} />, title: 'STARTUPS', desc: 'Get the technical capabilities you need without building a large team.' },
              { icon: <TrendingUp className="text-[#5A0B2E]" size={24} />, title: 'GROWING BUSINESSES', desc: 'Scale execution while your internal team focuses on growth.' },
              { icon: <Briefcase className="text-[#5A0B2E]" size={24} />, title: 'ESTABLISHED BUSINESSES', desc: 'Add specialized expertise to existing teams and projects.' },
              { icon: <Users className="text-[#5A0B2E]" size={24} />, title: 'PROJECT TEAMS', desc: 'Bring additional people and skills when deadlines demand it.' }
            ].map((item, idx) => (
              <motion.div 
                key={item.title} variants={fadeUp} 
                className="bg-white p-8 rounded-[24px] border border-[#DED5CC] hover:border-[#5A0B2E] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ease-out group"
              >
                <div className="mb-6 bg-[#F8F3EC] w-12 h-12 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="font-sans text-sm tracking-wider font-bold text-[#171417] mb-4">{item.title}</h3>
                <p className="font-sans text-[#6B6464] leading-[1.6]">{item.desc}</p>
                <div className="mt-8 overflow-hidden h-6">
                  <ArrowRight className="w-5 h-5 text-[#5A0B2E] transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================
          FINAL STATEMENT
          ========================================= */}
      <section className="w-full bg-white py-40 border-t border-[#DED5CC] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="max-w-4xl">
            {['YOU DON\'T', 'HAVE TO', 'BUILD IT', 'ALL ALONE.'].map((line, i, arr) => (
              <div key={i} className="overflow-hidden">
                <motion.h2 
                  initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: easeOut, delay: i * 0.15 }}
                  className={`font-serif font-bold tracking-tight ${i === arr.length - 1 ? 'text-[72px] md:text-[110px] text-[#5A0B2E]' : 'text-[64px] md:text-[96px] text-[#171417]'} leading-[0.9]`}
                >
                  {line}
                </motion.h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          FINAL CTA
          ========================================= */}
      <section className="relative w-full bg-[#3B071F] text-white py-32 border-t-4 border-[#5A0B2E] overflow-hidden">
        {/* Slow moving dotted texture */}
        <motion.div 
          animate={{ backgroundPosition: ['0px 0px', '100px 100px'] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(#F8F3EC 1px, transparent 1px)', backgroundSize: '30px 30px' }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-2xl">
            <motion.span variants={fadeUp} className="font-sans text-xs tracking-[0.15em] font-bold text-white/50 block mb-6 uppercase">Let's Work Together</motion.span>
            <div className="overflow-hidden mb-4">
              <motion.h2 variants={fadeUp} className="font-serif text-[48px] md:text-[64px] leading-[1.1] font-bold">
                Need more capability?
              </motion.h2>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h2 variants={fadeUp} className="font-serif text-[48px] md:text-[64px] leading-[1.1] font-bold text-[#F8F3EC]">
                Let's build it together.
              </motion.h2>
            </div>
            <motion.p variants={fadeUp} className="font-sans text-[20px] text-white/70 leading-[1.6]">
              Tell us what you're working on and where you need support.
            </motion.p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.6, duration: 0.8 }} className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/contact-us">
              <a className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-white hover:bg-white/90 text-[#3B071F] rounded-xl font-medium transition-all duration-300 group shadow-xl">
                Talk to Our Team
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Link>
            <Link href="/#core-expertise">
              <a className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-transparent border border-white/20 hover:border-white text-white rounded-xl font-medium transition-all duration-300 group">
                Explore Other Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Link>
          </motion.div>
        </div>
      </section>

    </motion.div>
  );
};

// Interactive Benefit Card Component
const BenefitCard = ({ ben, idx }: { ben: any, idx: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut, delay: idx * 0.1 } }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex flex-col items-center text-center cursor-default"
    >
      <motion.div 
        animate={{ y: isHovered ? -8 : 0, color: isHovered ? '#5A0B2E' : '#6B6464' }}
        transition={{ duration: 0.3 }}
        className="w-16 h-16 rounded-full bg-[#F8F3EC] flex items-center justify-center mb-6 border border-[#DED5CC] shadow-sm"
      >
        {ben.icon}
      </motion.div>
      <h3 className={`font-serif text-[20px] font-bold mb-4 transition-colors duration-300 ${isHovered ? 'text-[#5A0B2E]' : 'text-[#171417]'}`}>
        {ben.title}
      </h3>
      <motion.div 
        animate={{ height: isHovered ? 'auto' : 0, opacity: isHovered ? 1 : 0 }}
        initial={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="font-sans text-[15px] leading-[1.6] text-[#6B6464]">{ben.desc}</p>
      </motion.div>
    </motion.div>
  );
};

export default Outsourcing;
