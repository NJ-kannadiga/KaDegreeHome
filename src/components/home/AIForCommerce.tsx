import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Users, Database, Cpu, BarChart3, Target, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const processSteps = [
  { label: "Customer", icon: Users },
  { label: "Data", icon: Database },
  { label: "AI", icon: Cpu },
  { label: "Insight", icon: BarChart3 },
  { label: "Action", icon: Target },
  { label: "Growth", icon: TrendingUp },
];

export function AIForCommerce() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative py-24 bg-brand-bg-warm text-dark-charcoal overflow-hidden">
      {/* Subtle dotted background */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }}
      />
      <div className="container mx-auto px-4 xl:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
          
          {/* Left Column */}
          <div className="lg:w-4/12 max-w-md">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-[11px] font-bold tracking-[0.15em] uppercase mb-4 text-brand-burgundy/60"
            >
              AI FOR COMMERCE
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-[2.75rem] md:text-[3.5rem] font-serif font-medium leading-[1.05] mb-6 text-dark-charcoal tracking-tight"
            >
              Turning Intelligence <br />
              Into Impact.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-dark-charcoal/70 text-[14px] leading-[1.6] mb-8 font-medium pr-4"
            >
              From understanding customer behavior to delivering personalized experiences, AI helps your business grow smarter every day.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href="/services/ai-commerce">
                <a className="btn-premium inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-burgundy-dark text-white text-[13px] font-semibold rounded-[6px] group">
                  Discover AI for Commerce
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Process Flow */}
          <div className="lg:w-8/12 w-full overflow-x-auto pb-8 lg:pb-0 hide-scrollbar flex items-center justify-center lg:justify-end">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex items-start justify-between min-w-[750px] lg:min-w-full px-2"
            >
              {processSteps.map((step, index) => (
                <div key={step.label} className="flex items-start relative group flex-1">
                  
                  {/* Process Node */}
                  <motion.div variants={itemVariants} className="flex flex-col items-center gap-4 relative z-10 w-full">
                    <div className="icon-hover w-[72px] h-[72px] rounded-full bg-white border border-black/5 shadow-sm flex items-center justify-center text-brand-burgundy-dark relative bg-clip-padding">
                      <step.icon className="w-[28px] h-[28px]" strokeWidth={1.5} />
                    </div>
                    <span className="text-[13px] font-bold tracking-tight text-dark-charcoal">{step.label}</span>
                  </motion.div>

                  {/* Connecting Arrow */}
                  {index < processSteps.length - 1 && (
                    <motion.div 
                      variants={itemVariants}
                      className="absolute left-[50%] right-[-50%] top-[36px] flex items-center justify-center z-0 pointer-events-none"
                    >
                      <div className="w-[60%] border-t border-dashed border-dark-charcoal/20 h-0" />
                      <div className="absolute right-[20%] w-[6px] h-[6px] border-t border-r border-dark-charcoal/30 rotate-45 transform translate-x-1/2" />
                    </motion.div>
                  )}
                  
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
      
      {/* Hide scrollbar utility for the horizontal scrolling container */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
