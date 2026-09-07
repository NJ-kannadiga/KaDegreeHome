import { Link } from "wouter";
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      className="bg-[#121212] text-white border-t border-slate-800"
    >
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-[#E2D4C3]" />
              <span className="font-serif text-xl font-bold text-white">KA Degree</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Learn from industry experts through mentor-led training that combines
              real projects, modern AI tools, and full-stack development aligned with
              global standards.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="mb-4 font-serif text-lg font-semibold text-[#E2D4C3]">Legal</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link href="/privacy-policy"><a className="transition-colors hover:text-white inline-block">Privacy Policy</a></Link></li>
              <li><Link href="/refund-policy"><a className="transition-colors hover:text-white inline-block">Refund Policy</a></Link></li>
              <li><Link href="/terms-of-service"><a className="transition-colors hover:text-white inline-block">Terms of Service</a></Link></li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="mb-4 font-serif text-lg font-semibold text-[#E2D4C3]">Contact</h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li className="flex items-center gap-2 transition-transform hover:translate-x-1 duration-300">
                <Phone className="h-4 w-4 text-[#E2D4C3]" /> +91 7975902348
              </li>
              <li className="flex items-center gap-2 transition-transform hover:translate-x-1 duration-300">
                <Mail className="h-4 w-4 text-[#E2D4C3]" /> admin@kadegree.com
              </li>
              <li className="flex items-start gap-2 transition-transform hover:translate-x-1 duration-300">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-[#E2D4C3]" />  
                <span className="text-slate-400">
                  3rd Floor, Tech Park Building,<br />
                  BTM Layout, Bengaluru, Karnataka 560076
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="mb-4 font-serif text-lg font-semibold text-[#E2D4C3]">Follow Us</h3>
            <div className="flex gap-4 text-slate-300">
              <a href="https://www.facebook.com/share/189kFUwpSN/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-900 border border-slate-800 hover:bg-[#5A0B2E] hover:text-white transition-all"><Facebook className="h-4 w-4" /></a>
              <a href="https://www.instagram.com/ka_degree?igsh=bWxwZWVxOGx6dXRm" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-900 border border-slate-800 hover:bg-[#5A0B2E] hover:text-white transition-all"><Instagram className="h-4 w-4" /></a>
              <a href="https://www.linkedin.com/company/ka-degree/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-900 border border-slate-800 hover:bg-[#5A0B2E] hover:text-white transition-all"><Linkedin className="h-4 w-4" /></a>
            </div>
          </motion.div>
        </div>
        
        <motion.div variants={itemVariants} className="mt-12 border-t border-slate-800 pt-8">
          <p className="text-sm text-slate-400 mb-4 max-w-4xl mx-auto text-center leading-relaxed">
            KA Degree provides online computer science and AI coaching for BCA, MCA, B.E / B.Tech, and PUC students across India. Our mentor-led training focuses on real-world projects, weekly mentorship, applied AI, and modern development skills.
          </p>
          <div className="text-center text-xs text-slate-500 font-mono">
            © {new Date().getFullYear()} KA Degree. All rights reserved.
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
