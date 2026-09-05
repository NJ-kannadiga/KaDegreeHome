import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export function HomeCTA() {
  return (
    <section className="bg-brand-burgundy-dark text-brand-cream py-24 relative overflow-hidden bg-motion-burgundy">
      {/* Decorative subtle patterns on edges */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 15% 50%, rgba(255,255,255,0.08) 1px, transparent 1px), radial-gradient(circle at 85% 50%, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />
      
      {/* Large subtle radial gradients to add depth */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-brand-burgundy to-transparent opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-burgundy to-transparent opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-4 xl:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <h2 className="text-[2.5rem] md:text-[3.5rem] leading-[1.1] md:leading-[1.1] font-serif font-medium mb-6 tracking-tight text-[#F8F3EC]">
              Let's Build What's Next.
            </h2>
            <p className="text-brand-cream/80 text-[16px] leading-[1.7] max-w-xl">
              Whether you're looking to grow your business, explore AI opportunities, outsource services, or gain real-world experience, KA Degree is ready to help.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto"
          >
            <Link href="/contact-us">
              <a className="btn-premium inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-cream text-brand-burgundy-dark text-[14px] font-bold rounded-lg hover:bg-white transition-all group w-full sm:w-auto">
                Talk to Us
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Link>
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById("opportunities");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="btn-premium inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-brand-cream border border-brand-cream/40 text-[14px] font-bold rounded-lg hover:bg-white/10 transition-all group w-full sm:w-auto"
            >
              <span>Explore Opportunities</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

