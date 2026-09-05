'use client'
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const technologies = [
    { name: "Python", icon: "🐍" },
    { name: "React", icon: "⚛️" },
    { name: "JavaScript", icon: "💛" },
    { name: "Node.js", icon: "🟩" },
    { name: "Machine Learning", icon: "🤖" },
    { name: "TensorFlow", icon: "🟧" },
    { name: "PyTorch", icon: "🔥" },
    { name: "AWS", icon: "☁️" },
    { name: "GitHub", icon: "🐙" },
    { name: "SQL", icon: "🗄️" },
];

export default function TechnologySection() {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent -z-10"></div>
            
            <div className="px-4 md:px-16 lg:px-24 xl:px-32 text-center mb-12">
                <motion.h2 
                    className="text-3xl md:text-4xl font-bold text-white mb-4"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 240, damping: 70 }}
                >
                    Master Industry-Standard Technologies
                </motion.h2>
                <motion.p 
                    className="text-slate-400 max-w-2xl mx-auto"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, type: "spring", stiffness: 240, damping: 70 }}
                >
                    Our curriculum is built around the tools and frameworks that top tech companies use today.
                </motion.p>
            </div>

            <div className="mt-10 max-w-[1400px] mx-auto">
                <Marquee gradient={true} gradientColor="#000000" gradientWidth={100} speed={40} className="py-4">
                    {technologies.map((tech, index) => (
                        <div key={index} className="mx-6 md:mx-10 group relative flex flex-col items-center justify-center">
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col items-center justify-center gap-2 transition-all duration-300 group-hover:bg-white/10 group-hover:scale-110 group-hover:border-blue-500/50 shadow-[0_4px_20px_rgba(0,0,0,0.3)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                                <span className="text-3xl md:text-4xl grayscale group-hover:grayscale-0 transition-all duration-300">{tech.icon}</span>
                            </div>
                            <span className="mt-3 text-sm text-slate-400 group-hover:text-blue-300 transition-colors font-medium">{tech.name}</span>
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
}
