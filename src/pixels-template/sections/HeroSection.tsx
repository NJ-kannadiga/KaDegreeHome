'use client'
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { ChevronRightIcon, GraduationCap, MonitorPlay } from "lucide-react";

const technologies = [
  { name: "Python", color: "#3776AB", x: 100, y: -100, z: 50 },
  { name: "React", color: "#61DAFB", x: -120, y: -80, z: 0 },
  { name: "JavaScript", color: "#F7DF1E", x: 80, y: 120, z: -30 },
  { name: "AI", color: "#FF6F61", x: -100, y: 100, z: 20 },
  { name: "Machine Learning", color: "#FF9900", x: 150, y: 0, z: -50 },
  { name: "TensorFlow", color: "#FF8C00", x: -160, y: 20, z: 40 },
  { name: "PyTorch", color: "#EE4C2C", x: 20, y: -150, z: -10 },
  { name: "AWS", color: "#232F3E", x: -40, y: 160, z: 30 },
  { name: "GitHub", color: "#FFFFFF", x: 180, y: 80, z: 10 },
];

export default function HeroSection() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
    const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

    return (
        <div className="relative flex flex-col lg:flex-row items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 min-h-screen pt-32 pb-16 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/4 -z-10 left-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-[120px]"></div>
            <div className="absolute top-1/3 -z-10 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[150px]"></div>

            {/* Left Content */}
            <motion.div 
                className="w-full lg:w-1/2 flex flex-col items-start z-10"
                style={{ y: y2 }}
            >
                <motion.div className="flex items-center gap-2 rounded-full p-1 pr-3 mb-6 text-blue-100 bg-blue-500/10 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.15)]"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, type: "spring", stiffness: 320, damping: 70 }}
                >
                    <span className="bg-blue-600 text-white text-xs px-3.5 py-1 rounded-full font-semibold tracking-wide">
                        NEW
                    </span>
                    <p className="flex items-center gap-1 text-sm font-medium">
                        <span>Enrollments now open for 2026 batches</span>
                    </p>
                </motion.div>

                <motion.h1 className="text-5xl md:text-6xl/tight lg:text-7xl/tight font-bold text-white max-w-2xl"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 240, damping: 70 }}
                >
                    Build Skills.<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Gain Experience.</span><br/>
                    Shape Your Future.
                </motion.h1>
                
                <motion.p className="text-lg text-slate-300 max-w-lg mt-6 leading-relaxed"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70 }}
                >
                    Empower your career with industry-focused technology programs and real-world internships. Master AI, full-stack development, and data science with KA Degree.
                </motion.p>
                
                <motion.div className="flex flex-wrap items-center gap-4 mt-10"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 320, damping: 70 }}
                >
                    <Link href="/internship" className="group relative flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full px-8 h-14 font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] overflow-hidden">
                        <MonitorPlay size={20} className="relative z-10" />
                        <span className="relative z-10">Explore Internships</span>
                        <div className="absolute inset-0 h-full w-0 bg-white/20 transition-all duration-300 ease-out group-hover:w-full"></div>
                    </Link>
                    <Link href="/courses" className="group flex items-center justify-center gap-2 border border-slate-600 hover:border-purple-500 hover:bg-purple-900/20 text-white transition-all duration-300 rounded-full px-8 h-14 font-semibold">
                        <GraduationCap size={20} />
                        <span>Explore Programs</span>
                    </Link>
                </motion.div>
            </motion.div>

            {/* Right Content - 3D Orbit Sphere */}
            <motion.div 
                className="w-full lg:w-1/2 h-[500px] md:h-[600px] mt-16 lg:mt-0 relative flex items-center justify-center perspective-[1000px]"
                style={{ y: y1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            >
                {/* Core Sphere */}
                <div className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-tr from-blue-600/40 to-purple-600/40 backdrop-blur-md border border-white/10 shadow-[0_0_50px_rgba(59,130,246,0.4)] flex items-center justify-center z-10">
                    <div className="text-white font-bold text-xl tracking-wider text-center drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                        KA<br/>DEGREE
                    </div>
                </div>

                {/* Orbiting Elements */}
                <motion.div 
                    className="absolute inset-0 w-full h-full transform-style-3d"
                    animate={{ rotateY: 360, rotateX: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                >
                    {technologies.map((tech, i) => (
                        <motion.div
                            key={i}
                            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            style={{
                                x: tech.x,
                                y: tech.y,
                                z: tech.z,
                            }}
                        >
                            <motion.div 
                                className="px-4 py-2 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 shadow-lg cursor-pointer transition-transform hover:scale-110 flex items-center justify-center"
                                style={{ boxShadow: `0 0 20px ${tech.color}40` }}
                                whileHover={{ 
                                    scale: 1.1, 
                                    backgroundColor: "rgba(255,255,255,0.1)",
                                    boxShadow: `0 0 30px ${tech.color}80` 
                                }}
                            >
                                <span className="text-sm font-semibold whitespace-nowrap drop-shadow-md" style={{ color: tech.color }}>
                                    {tech.name}
                                </span>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Orbit Rings */}
                <div className="absolute w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full border border-blue-500/20 rounded-full" style={{ transform: 'rotateX(75deg)' }}></div>
                <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full border border-purple-500/20 rounded-full" style={{ transform: 'rotateX(60deg) rotateY(45deg)' }}></div>
            </motion.div>
        </div>
    );
}
