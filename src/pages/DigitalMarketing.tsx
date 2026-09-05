import React, { useEffect } from 'react';
import { Link } from 'wouter';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ChevronRight, BarChart3, PenTool, Search, MessageSquare, Megaphone, Target } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEO } from '@/components/layout/SEO';

const S = {
  serif: '"Libre Caslon Text", Georgia, serif',
  sans: '"Source Sans 3", system-ui, sans-serif',
  cream: '#F8F3EC',
  burgundy: '#5A0B2E',
  darkBurgundy: '#3B071F',
  ink: '#171417',
  gray: '#6B6464',
  beige: '#DED5CC',
  white: '#FFFFFF'
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

/* ─── Label chip ─── */
function Label({ children, color = S.gray, border = false }: { children: React.ReactNode; color?: string; border?: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
      {border && <div style={{ height: 1, width: 32, background: color }}></div>}
      <span
        style={{
          fontFamily: S.sans,
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase' as const,
          color,
        }}
      >
        {children}
      </span>
    </div>
  );
}

export default function DigitalMarketing() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Source+Sans+3:wght@400;600;700&display=swap"
        />
      </Helmet>
      <SEO
        title="Digital Marketing | KA Degree"
        description="We turn ideas into digital experiences that attract attention, build trust and move people to take action."
      />

      <div style={{ background: S.cream, color: S.ink, fontFamily: S.sans, minHeight: '100vh', overflowX: 'hidden' }}>
        <Navbar />

        {/* =========================================
            SECTION 01 — HERO
            ========================================= */}
        <section style={{ padding: '160px 24px 80px', maxWidth: 1400, margin: '0 auto' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col">
              <motion.div variants={fadeUp}>
                <Label color={S.burgundy} border>01 — DIGITAL MARKETING</Label>
              </motion.div>
              
              <motion.h1 
                variants={fadeUp} 
                style={{ 
                  fontFamily: S.serif, 
                  fontSize: 'clamp(48px, 6vw, 76px)', 
                  lineHeight: 1.05, 
                  letterSpacing: '-0.02em', 
                  fontWeight: 400, 
                  color: S.ink,
                  marginBottom: 32 
                }}
              >
                YOUR BRAND<br/>DESERVES TO<br/>BE <span style={{ color: S.burgundy }}>SEEN.</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeUp} 
                style={{ 
                  fontSize: 20, 
                  lineHeight: 1.6, 
                  color: S.gray, 
                  maxWidth: 500,
                  marginBottom: 48 
                }}
              >
                We turn ideas into digital experiences that attract attention, build trust and move people to take action.
              </motion.p>
              
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact-us">
                  <a style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 12,
                    padding: '16px 32px',
                    background: S.burgundy,
                    color: S.white,
                    fontFamily: S.sans,
                    fontWeight: 600,
                    fontSize: 15,
                    border: `1px solid ${S.burgundy}`,
                    borderRadius: 0,
                    transition: 'all 0.2s',
                    cursor: 'pointer'
                  }}
                  onMouseOver={e => e.currentTarget.style.background = S.darkBurgundy}
                  onMouseOut={e => e.currentTarget.style.background = S.burgundy}
                  >
                    Start a Conversation <ArrowRight className="w-4 h-4" />
                  </a>
                </Link>
                
                <a href="#approach" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 12,
                  padding: '16px 32px',
                  background: 'transparent',
                  color: S.ink,
                  fontFamily: S.sans,
                  fontWeight: 600,
                  fontSize: 15,
                  border: `1px solid ${S.beige}`,
                  borderRadius: 0,
                  transition: 'all 0.2s',
                  cursor: 'pointer'
                }}
                onMouseOver={e => e.currentTarget.style.borderColor = S.ink}
                onMouseOut={e => e.currentTarget.style.borderColor = S.beige}
                >
                  Explore Our Approach <ArrowRight className="w-4 h-4 rotate-90" />
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              style={{ position: 'relative' }}
            >
              <div style={{ position: 'relative', zIndex: 10 }}>
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop" 
                  alt="Marketing Strategy Meeting" 
                  style={{ width: '100%', height: 'auto', aspectRatio: '4/3', objectFit: 'cover', borderRadius: 0, filter: 'contrast(1.05) saturate(0.9)' }}
                />
              </div>
              
              {/* Decorative elements */}
              <div style={{ position: 'absolute', top: -20, right: -20, width: 100, height: 100, borderTop: `1px dashed ${S.burgundy}`, borderRight: `1px dashed ${S.burgundy}`, zIndex: 1 }}></div>
              <div style={{ position: 'absolute', bottom: -20, left: -20, width: 100, height: 100, borderBottom: `1px dashed ${S.burgundy}`, borderLeft: `1px dashed ${S.burgundy}`, zIndex: 1 }}></div>
              
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: 'absolute', top: 40, left: -30, width: 60, height: 60, background: S.cream, border: `1px solid ${S.beige}`, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 20 }}
              >
                <div style={{ width: 4, height: 4, background: S.burgundy, borderRadius: '50%' }}></div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* =========================================
            SECTION 02 — THE PROBLEM
            ========================================= */}
        <section id="approach" style={{ background: S.cream, padding: '120px 24px', borderTop: `1px solid ${S.beige}` }}>
          <div style={{ maxWidth: 1400, margin: '0 auto' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
                <Label>THE DIGITAL LANDSCAPE</Label>
                <motion.h2 
                  variants={fadeUp} 
                  style={{ fontFamily: S.serif, fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.1, color: S.ink, marginBottom: 32 }}
                >
                  Being online isn't enough.<br/>
                  Being remembered is.
                </motion.h2>
                <motion.p variants={fadeUp} style={{ fontSize: 18, lineHeight: 1.6, color: S.ink, marginBottom: 24, maxWidth: 480 }}>
                  Your customers are already searching, comparing and deciding online.
                </motion.p>
                <motion.p variants={fadeUp} style={{ fontSize: 18, lineHeight: 1.6, color: S.ink, marginBottom: 24, maxWidth: 480 }}>
                  The challenge isn't simply getting attention.
                </motion.p>
                <motion.p variants={fadeUp} style={{ fontSize: 18, lineHeight: 1.6, color: S.ink, maxWidth: 480, fontWeight: 600 }}>
                  It's turning attention into trust,<br/>trust into action,<br/>and action into growth.
                </motion.p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                
                {/* No Strategy */}
                <motion.div variants={fadeUp} style={{ background: S.white, border: `1px solid ${S.beige}`, padding: 40 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, borderBottom: `1px solid ${S.beige}`, paddingBottom: 16 }}>
                    <span style={{ fontFamily: S.sans, fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', color: S.gray }}>NO STRATEGY</span>
                    <span style={{ color: S.burgundy }}>↓</span>
                  </div>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {['Random content', 'Random campaigns', 'Unclear audience', 'Unpredictable results'].map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, color: S.gray }}>
                        <span style={{ width: 4, height: 4, background: S.gray }}></span> {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <div style={{ display: 'flex', justifyContent: 'center', margin: '8px 0' }}>
                  <span style={{ fontFamily: S.serif, fontStyle: 'italic', color: S.gray }}>VERSUS</span>
                </div>

                {/* With Strategy */}
                <motion.div variants={fadeUp} style={{ background: S.darkBurgundy, border: `1px solid ${S.darkBurgundy}`, padding: 40, color: S.white }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, borderBottom: `1px solid rgba(255,255,255,0.2)`, paddingBottom: 16 }}>
                    <span style={{ fontFamily: S.sans, fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', color: S.white }}>WITH STRATEGY</span>
                    <span style={{ color: S.white }}>↓</span>
                  </div>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {['Clear positioning', 'Right audience', 'Meaningful content', 'Measurable growth'].map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, color: S.white }}>
                        <CheckCircle2 className="w-4 h-4 text-white" /> {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>

              </motion.div>

            </div>
          </div>
        </section>

        {/* =========================================
            SECTION 03 — OUR DIGITAL ENGINE
            ========================================= */}
        <section style={{ background: S.darkBurgundy, color: S.white, padding: '120px 24px' }}>
          <div style={{ maxWidth: 1400, margin: '0 auto', textAlign: 'center' }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
                <span style={{ fontFamily: S.sans, fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.6)' }}>
                  OUR DIGITAL ENGINE
                </span>
              </div>
              <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.1, marginBottom: 80 }}>
                One strategy.<br/>Every digital touchpoint.
              </h2>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 32, position: 'relative' }}
            >
              {/* Desktop connecting line */}
              <div className="hidden lg:block" style={{ position: 'absolute', top: 40, left: '5%', right: '5%', height: 1, background: 'rgba(255,255,255,0.2)', zIndex: 0 }}></div>

              {[
                { title: 'STRATEGY', desc: "Know where you're going before you start moving." },
                { title: 'AUDIENCE', desc: "Understand who you're speaking to." },
                { title: 'CONTENT', desc: "Give people a reason to stop and listen." },
                { title: 'DISTRIBUTION', desc: "Put the right message in the right place." },
                { title: 'CONVERSION', desc: "Turn attention into meaningful action." },
                { title: 'RETENTION', desc: "Build relationships beyond the first interaction." },
                { title: 'GROWTH', desc: "Use data to improve what works." },
              ].map((step, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeUp} 
                  style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140, cursor: 'default' }}
                  className="group"
                >
                  <div style={{ width: 80, height: 80, borderRadius: '50%', background: S.darkBurgundy, border: `1px solid rgba(255,255,255,0.3)`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, transition: 'all 0.3s' }} className="group-hover:border-white group-hover:bg-white/10">
                    <span style={{ fontFamily: S.sans, fontSize: 13, fontWeight: 700 }}>0{i+1}</span>
                  </div>
                  <h3 style={{ fontFamily: S.sans, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', marginBottom: 12 }}>{step.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.5, color: 'rgba(255,255,255,0.6)', textAlign: 'center', transition: 'color 0.3s' }} className="group-hover:text-white">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* =========================================
            SECTION 04 — WHAT WE ACTUALLY DO
            ========================================= */}
        <section style={{ background: S.cream, padding: '120px 24px' }}>
          <div style={{ maxWidth: 1400, margin: '0 auto' }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} style={{ marginBottom: 64 }}>
              <Label>CAPABILITIES</Label>
              <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.1, color: S.ink }}>
                From first impression<br/>to final conversion.
              </h2>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-beige" style={{ borderColor: S.beige }}>
              {[
                { num: '01', title: 'Brand & Digital Strategy', desc: 'Position your business clearly and create a digital roadmap that makes every channel work together.' },
                { num: '02', title: 'Search & Discovery', desc: 'Help customers discover your business through search, SEO and high-intent digital experiences.' },
                { num: '03', title: 'Social & Content', desc: 'Build content that feels human, communicates your value and creates meaningful engagement.' },
                { num: '04', title: 'Performance Campaigns', desc: 'Reach the right people with focused, measurable digital campaigns.' },
                { num: '05', title: 'Conversion Experiences', desc: 'Turn visits, attention and interest into enquiries, customers and opportunities.' },
                { num: '06', title: 'Analytics & Optimization', desc: 'Understand what\'s working, identify what\'s not and continuously improve.' }
              ].map((service, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeUp} 
                  className="group"
                  style={{ 
                    padding: '60px 40px', 
                    background: S.cream, 
                    borderRight: `1px solid ${S.beige}`,
                    borderBottom: `1px solid ${S.beige}`,
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    cursor: 'default'
                  }}
                  onMouseOver={e => e.currentTarget.style.background = S.white}
                  onMouseOut={e => e.currentTarget.style.background = S.cream}
                >
                  <span className="group-hover:text-[#5A0B2E]" style={{ display: 'block', fontFamily: S.serif, fontSize: 32, color: S.beige, marginBottom: 32, transition: 'color 0.3s' }}>
                    {service.num}
                  </span>
                  <h3 style={{ fontFamily: S.serif, fontSize: 24, fontWeight: 400, color: S.ink, marginBottom: 16 }}>
                    {service.title}
                  </h3>
                  <p style={{ fontSize: 16, lineHeight: 1.6, color: S.gray, marginBottom: 32 }}>
                    {service.desc}
                  </p>
                  <ArrowRight className="w-5 h-5 text-burgundy transform transition-transform duration-300 group-hover:translate-x-2" style={{ color: S.burgundy }} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* =========================================
            SECTION 05 — THE JOURNEY
            ========================================= */}
        <section style={{ padding: '120px 24px', background: S.white, borderTop: `1px solid ${S.beige}` }}>
          <div style={{ maxWidth: 1400, margin: '0 auto' }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} style={{ marginBottom: 80, textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
                <span style={{ fontFamily: S.sans, fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', color: S.gray }}>
                  HOW WE WORK
                </span>
              </div>
              <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.1, color: S.ink }}>
                From idea<br/>to measurable impact.
              </h2>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} style={{ display: 'flex', flexDirection: 'column', gap: 0, maxWidth: 800, margin: '0 auto' }}>
              {[
                { step: '01', name: 'DISCOVER', desc: 'We understand your business, audience and ambition.' },
                { step: '02', name: 'DEFINE', desc: 'We identify the opportunity and build the strategy.' },
                { step: '03', name: 'CREATE', desc: 'We develop the content, campaigns and digital experience.' },
                { step: '04', name: 'LAUNCH', desc: 'We put the strategy into the real world.' },
                { step: '05', name: 'LEARN', desc: 'We study the data and understand what people respond to.' },
                { step: '06', name: 'GROW', desc: 'We continuously improve and scale what works.' },
              ].map((item, i, arr) => (
                <motion.div key={i} variants={fadeUp} style={{ display: 'flex', alignItems: 'flex-start', gap: 32 }}>
                  
                  {/* Timeline track */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: 12, height: 12, background: S.burgundy, borderRadius: 0, marginTop: 6 }}></div>
                    {i < arr.length - 1 && <div style={{ width: 1, height: 100, background: S.beige, marginTop: 8, marginBottom: 8 }}></div>}
                  </div>

                  {/* Content */}
                  <div style={{ paddingBottom: i < arr.length - 1 ? 40 : 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                      <span style={{ fontFamily: S.serif, color: S.gray }}>{item.step} —</span>
                      <h3 style={{ fontFamily: S.sans, fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', color: S.ink }}>{item.name}</h3>
                    </div>
                    <p style={{ fontSize: 18, color: S.gray }}>{item.desc}</p>
                  </div>

                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* =========================================
            SECTION 06 — MAKE IT HUMAN
            ========================================= */}
        <section style={{ padding: '120px 24px', background: S.cream, borderTop: `1px solid ${S.beige}` }}>
          <div style={{ maxWidth: 1400, margin: '0 auto' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}>
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2940&auto=format&fit=crop" 
                  alt="Real human connection in business" 
                  style={{ width: '100%', height: 'auto', aspectRatio: '3/4', objectFit: 'cover', filter: 'contrast(1.05) saturate(0.9)' }}
                />
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} style={{ padding: '0 5%' }}>
                <motion.h2 variants={fadeUp} style={{ fontFamily: S.serif, fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1.05, color: S.ink, marginBottom: 48 }}>
                  People don't connect<br/>with marketing.<br/><br/>
                  They connect<br/>with <span style={{ fontStyle: 'italic', color: S.burgundy }}>stories.</span>
                </motion.h2>

                <motion.div variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', gap: 24, fontSize: 18, lineHeight: 1.6, color: S.gray }}>
                  <p>Behind every click is a person.</p>
                  <p>Someone discovering a brand for the first time.<br/>Someone comparing options.<br/>Someone deciding whether to trust you.</p>
                  <p style={{ color: S.ink, fontWeight: 600 }}>Good digital marketing understands the person first.</p>
                  <p>Then the platform.<br/>Then the numbers.</p>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* =========================================
            SECTION 07 — DIGITAL TOUCHPOINTS
            ========================================= */}
        <section style={{ padding: '120px 24px', background: S.white, borderTop: `1px solid ${S.beige}` }}>
          <div style={{ maxWidth: 1400, margin: '0 auto', textAlign: 'center' }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} style={{ marginBottom: 80 }}>
              <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.1, color: S.ink }}>
                Every interaction<br/>is part of the experience.
              </h2>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
              {[
                { phase: 'DISCOVER', tools: 'Instagram / Search / Content' },
                { phase: 'EXPLORE', tools: 'Website / Landing Page' },
                { phase: 'TRUST', tools: 'Reviews / Content / Brand' },
                { phase: 'ACT', tools: 'Enquiry / Purchase / Registration' },
                { phase: 'RETURN', tools: 'Email / Community / Remarketing' }
              ].map((step, i, arr) => (
                <React.Fragment key={i}>
                  <motion.div variants={fadeUp} style={{ padding: '24px 48px', border: `1px solid ${S.beige}`, background: S.cream, width: '100%', maxWidth: 500 }}>
                    <h3 style={{ fontFamily: S.sans, fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', color: S.ink, marginBottom: 8 }}>{step.phase}</h3>
                    <p style={{ color: S.gray, fontSize: 16 }}>{step.tools}</p>
                  </motion.div>
                  {i < arr.length - 1 && (
                    <motion.div variants={fadeUp} style={{ width: 1, height: 32, background: S.burgundy }}></motion.div>
                  )}
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </section>

        {/* =========================================
            SECTION 08 — WHAT SUCCESS LOOKS LIKE
            ========================================= */}
        <section style={{ background: S.darkBurgundy, color: S.white, padding: '120px 24px' }}>
          <div style={{ maxWidth: 1400, margin: '0 auto' }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} style={{ marginBottom: 64 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <div style={{ height: 1, width: 32, background: 'rgba(255,255,255,0.4)' }}></div>
                <span style={{ fontFamily: S.sans, fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.6)' }}>
                  THE OUTCOME
                </span>
              </div>
              <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.1 }}>
                Don't chase numbers.<br/>Build momentum.
              </h2>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 border-t border-[rgba(255,255,255,0.1)] pt-12">
              {[
                { title: 'MORE VISIBILITY', desc: 'Help the right people discover you.' },
                { title: 'MORE TRUST', desc: 'Create a brand people remember.' },
                { title: 'MORE ENGAGEMENT', desc: 'Create conversations, not just impressions.' },
                { title: 'MORE ACTION', desc: 'Turn attention into enquiries and customers.' },
                { title: 'BETTER DECISIONS', desc: 'Use real data to guide what comes next.' }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <h3 style={{ fontFamily: S.sans, fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', color: S.white }}>{item.title}</h3>
                  <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)' }}>{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* =========================================
            SECTION 09 — WHO WE WORK WITH
            ========================================= */}
        <section style={{ padding: '120px 24px', background: S.cream }}>
          <div style={{ maxWidth: 1400, margin: '0 auto' }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} style={{ marginBottom: 80 }}>
              <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.1, color: S.ink }}>
                Different businesses.<br/>Different goals.<br/>One clear approach.
              </h2>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-beige" style={{ borderColor: S.beige }}>
              {[
                { title: 'STARTUPS', desc: 'Build your presence from the ground up.' },
                { title: 'GROWING BUSINESSES', desc: 'Turn increasing attention into sustainable growth.' },
                { title: 'LOCAL BUSINESSES', desc: 'Reach the customers closest to you.' },
                { title: 'ESTABLISHED BRANDS', desc: 'Strengthen your digital presence and stay relevant.' }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} style={{ padding: '60px 40px', background: S.white, borderRight: `1px solid ${S.beige}`, borderBottom: `1px solid ${S.beige}` }}>
                  <h3 style={{ fontFamily: S.sans, fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', color: S.ink, marginBottom: 16 }}>{item.title}</h3>
                  <p style={{ fontSize: 18, color: S.gray }}>{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* =========================================
            SECTION 10 — WHY KA DEGREE
            ========================================= */}
        <section style={{ padding: '120px 24px', background: S.white, borderTop: `1px solid ${S.beige}` }}>
          <div style={{ maxWidth: 1400, margin: '0 auto' }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              <motion.div variants={fadeUp}>
                <Label>WHY KA DEGREE</Label>
                <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.1, color: S.ink }}>
                  We don't just<br/>"do digital marketing."<br/><br/>
                  We build digital growth systems.
                </h2>
              </motion.div>

              <motion.div variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                {[
                  { num: '01', text: 'Human First' },
                  { num: '02', text: 'Strategy Before Execution' },
                  { num: '03', text: 'Creative With Purpose' },
                  { num: '04', text: 'Measure. Learn. Improve.' }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 32, borderBottom: `1px solid ${S.beige}`, paddingBottom: 24 }}>
                    <span style={{ fontFamily: S.serif, fontSize: 24, color: S.beige }}>{item.num}</span>
                    <span style={{ fontFamily: S.serif, fontSize: 24, color: S.ink }}>{item.text}</span>
                  </div>
                ))}
              </motion.div>

            </motion.div>
          </div>
        </section>

        {/* =========================================
            SECTION 11 — FINAL STATEMENT
            ========================================= */}
        <section style={{ padding: '160px 24px', background: S.cream, textAlign: 'center', borderTop: `1px solid ${S.beige}` }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.h2 
                variants={fadeUp} 
                style={{ fontFamily: S.sans, fontSize: 'clamp(48px, 8vw, 120px)', fontWeight: 700, lineHeight: 0.9, letterSpacing: '-0.03em', color: S.ink, marginBottom: 40 }}
              >
                YOUR NEXT<br/>CUSTOMER<br/>IS ALREADY<br/>ONLINE.
              </motion.h2>
              <motion.p variants={fadeUp} style={{ fontSize: 20, color: S.gray, marginBottom: 48, maxWidth: 400, margin: '0 auto 48px' }}>
                The question is whether they'll find you, trust you and choose you.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link href="/contact-us">
                  <a style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 12,
                    padding: '16px 32px',
                    background: 'transparent',
                    color: S.ink,
                    fontFamily: S.sans,
                    fontWeight: 600,
                    fontSize: 15,
                    border: `1px solid ${S.ink}`,
                    borderRadius: 0,
                    transition: 'all 0.2s',
                    cursor: 'pointer'
                  }}
                  onMouseOver={e => { e.currentTarget.style.background = S.ink; e.currentTarget.style.color = S.white; }}
                  onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = S.ink; }}
                  >
                    Let's Talk <ArrowRight className="w-4 h-4" />
                  </a>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* =========================================
            SECTION 12 — FINAL CTA
            ========================================= */}
        <section style={{ background: S.darkBurgundy, color: S.white, padding: '120px 24px' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.div variants={fadeUp} style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
                <span style={{ fontFamily: S.sans, fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.6)' }}>
                  READY TO GROW?
                </span>
              </motion.div>
              <motion.h2 variants={fadeUp} style={{ fontFamily: S.serif, fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: 1.05, marginBottom: 32 }}>
                Let's build something<br/>people remember.
              </motion.h2>
              <motion.p variants={fadeUp} style={{ fontSize: 20, color: 'rgba(255,255,255,0.7)', marginBottom: 56, maxWidth: 500, margin: '0 auto 56px' }}>
                Tell us where your business is today. We'll help you find the right digital path forward.
              </motion.p>
              
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact-us">
                  <a style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 12,
                    padding: '16px 32px',
                    background: S.white,
                    color: S.darkBurgundy,
                    fontFamily: S.sans,
                    fontWeight: 600,
                    fontSize: 15,
                    border: `1px solid ${S.white}`,
                    borderRadius: 0,
                    transition: 'all 0.2s',
                    cursor: 'pointer'
                  }}
                  onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.9)'}
                  onMouseOut={e => e.currentTarget.style.background = S.white}
                  >
                    Talk to Us <ArrowRight className="w-4 h-4" />
                  </a>
                </Link>
                
                <Link href="/">
                  <a style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 12,
                    padding: '16px 32px',
                    background: 'transparent',
                    color: S.white,
                    fontFamily: S.sans,
                    fontWeight: 600,
                    fontSize: 15,
                    border: `1px solid rgba(255,255,255,0.3)`,
                    borderRadius: 0,
                    transition: 'all 0.2s',
                    cursor: 'pointer'
                  }}
                  onMouseOver={e => e.currentTarget.style.borderColor = S.white}
                  onMouseOut={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'}
                  >
                    Explore Other Services <ArrowRight className="w-4 h-4" />
                  </a>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
