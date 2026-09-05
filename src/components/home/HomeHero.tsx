import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ShoppingCart, BarChart3, ShoppingBag, Users } from "lucide-react";
import heroImg from "@assets/hero_ai_business.jpg";

export function HomeHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative w-full bg-brand-bg-warm pt-32 pb-32 lg:pt-36 lg:pb-48 overflow-hidden">
      <div className="container mx-auto px-4 xl:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div 
            className="max-w-xl"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.p 
              variants={itemVariants}
              className="text-[11px] font-semibold tracking-[0.2em] text-brand-burgundy/80 uppercase mb-4"
            >
              KA DEGREE
            </motion.p>
            <motion.h1 
              variants={containerVariants}
              className="text-5xl lg:text-[70px] font-serif font-medium text-brand-text-primary leading-[1.05] mb-6"
            >
              <motion.span variants={itemVariants} className="block">Digital Expertise.</motion.span>
              <motion.span variants={itemVariants} className="block">Smarter Solutions.</motion.span>
              <motion.span variants={itemVariants} className="block text-brand-burgundy">Real Growth.</motion.span>
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-[15px] text-brand-text-secondary mb-10 max-w-[420px] leading-[1.6]"
            >
              Helping businesses grow through digital marketing, outsourced services and AI-powered commerce solutions.
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div variants={itemVariants}>
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("services");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="btn-premium inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-burgundy text-white text-[15px] font-semibold rounded-full hover:bg-brand-burgundy-dark transition-all duration-300 shadow-md hover:shadow-lg group"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 btn-arrow" />
                </button>
              </motion.div>
              <motion.div variants={itemVariants}>
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("opportunities");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="btn-premium inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent text-brand-burgundy border border-brand-burgundy/40 text-[15px] font-semibold rounded-full hover:bg-brand-burgundy hover:text-white hover:border-brand-burgundy transition-colors duration-300 group"
                >
                  <span>View Opportunities</span>
                  <ArrowRight className="w-4 h-4 btn-arrow" />
                </button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:ml-auto w-full max-w-lg xl:max-w-xl group"
          >
            {/* Subtle decorative elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -left-10 w-24 h-24 bg-brand-burgundy/5 rounded-full blur-2xl" 
            />
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 right-10 w-40 h-40 bg-brand-burgundy/10 rounded-full blur-3xl" 
            />
            
            <img 
              src={heroImg} 
              alt="KA Degree Expertise" 
              className="relative z-10 w-full h-auto object-contain mix-blend-multiply opacity-95 scale-[1.15] translate-y-8 image-subtle-zoom"
              style={{
                maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)'
              }}
            />

            {/* Floating Icons */}
            <div className="absolute top-[20%] left-[10%] z-20 flex flex-col items-center gap-2 animate-bounce-slow">
              <div className="w-14 h-14 rounded-full bg-white/95 border border-brand-burgundy/10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex items-center justify-center text-brand-burgundy">
                <ShoppingCart className="w-5 h-5 icon-hover" strokeWidth={1.5} />
              </div>
              <span className="text-[10px] font-semibold text-brand-text-secondary uppercase tracking-wider">Business</span>
            </div>

            <div className="absolute top-[5%] right-[25%] z-20 flex flex-col items-center gap-2 animate-bounce-slow" style={{ animationDelay: '1s' }}>
              <div className="w-14 h-14 rounded-full bg-white/95 border border-brand-burgundy/10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex items-center justify-center text-brand-burgundy">
                <BarChart3 className="w-5 h-5 icon-hover" strokeWidth={1.5} />
              </div>
              <span className="text-[10px] font-semibold text-brand-text-secondary uppercase tracking-wider drop-shadow-md">Digital</span>
            </div>

            <div className="absolute top-[45%] right-[5%] z-20 flex flex-col items-center gap-2 animate-bounce-slow" style={{ animationDelay: '2s' }}>
              <div className="w-14 h-14 rounded-full bg-white/95 border border-brand-burgundy/10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex items-center justify-center text-brand-burgundy">
                <ShoppingBag className="w-5 h-5 icon-hover" strokeWidth={1.5} />
              </div>
              <span className="text-[10px] font-semibold text-brand-text-secondary uppercase tracking-wider drop-shadow-md">AI</span>
            </div>

            <div className="absolute bottom-[10%] right-[30%] z-20 flex flex-col items-center gap-2 animate-bounce-slow" style={{ animationDelay: '1.5s' }}>
              <div className="w-14 h-14 rounded-full bg-white/95 border border-brand-burgundy/10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex items-center justify-center text-brand-burgundy">
                <Users className="w-5 h-5 icon-hover" strokeWidth={1.5} />
              </div>
              <span className="text-[10px] font-semibold text-brand-text-secondary uppercase tracking-wider drop-shadow-md">Growth</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle bottom wave transition into Services section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg 
          className="relative block w-full h-[60px] md:h-[120px]"
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,95 C150,120 300,15 600,15 C900,15 1050,120 1200,95 V120 H0 Z" 
            className="fill-[#F7F4EE]"
          ></path>
        </svg>
      </div>
    </section>
  );
}
