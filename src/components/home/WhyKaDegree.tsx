import { motion } from "framer-motion";
import { UserCog, Presentation, Settings, Rocket } from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "Strategy",
    description: "We craft meaningful strategies designed to create real and measurable impact.",
    icon: UserCog,
  },
  {
    number: "02",
    title: "Digital Expertise",
    description: "Our team brings deep digital knowledge to drive growth across channels.",
    icon: Presentation,
  },
  {
    number: "03",
    title: "Practical Execution",
    description: "We focus on execution that delivers results, not just recommendations.",
    icon: Settings,
  },
  {
    number: "04",
    title: "AI Innovation",
    description: "We use AI to solve real challenges and unlock new opportunities.",
    icon: Rocket,
  }
];

export function WhyKaDegree() {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-24 bg-brand-bg-warm text-dark-charcoal border-t border-dark-charcoal/5">
      <div className="container mx-auto px-4 xl:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-[11px] font-bold tracking-[0.15em] uppercase mb-4 text-brand-burgundy/60"
          >
            WHY KA DEGREE
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-[42px] font-serif font-medium text-dark-charcoal"
          >
            Why KA Degree?
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="h-[2px] w-12 bg-brand-burgundy/40 mx-auto mt-6"
          />
        </div>

        {/* Columns */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12"
        >
          {reasons.map((reason, index) => (
            <motion.div 
              key={reason.number} 
              variants={itemVariants}
              className={`relative px-4 lg:px-8 ${index !== 0 ? 'lg:before:absolute lg:before:left-0 lg:before:top-0 lg:before:h-full lg:before:w-px lg:before:bg-dark-charcoal/[0.06]' : ''}`}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[4rem] leading-none font-serif text-dark-charcoal/20 font-semibold tracking-tighter">
                  {reason.number}
                </span>
                <div className="icon-hover w-12 h-12 rounded-full bg-white border border-black/5 shadow-sm flex items-center justify-center text-brand-burgundy-dark relative bg-clip-padding">
                  <reason.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-[20px] font-medium mb-4 font-serif text-dark-charcoal">{reason.title}</h3>
              <p className="text-dark-charcoal/70 leading-[1.6] text-[14px] font-medium">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
