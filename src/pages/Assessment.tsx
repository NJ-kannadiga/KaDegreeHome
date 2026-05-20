import React from 'react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Brain, Lock, Rocket, Sparkles, ArrowLeft } from 'lucide-react';
import { useLocation } from 'wouter';
import { motion } from 'framer-motion';

export default function AssessmentPage() {
    const [, setLocation] = useLocation();

    return (
        <div className="min-h-screen bg-background flex flex-col font-sans selection:bg-accent/30">
            <Navbar />

            {/* Under Development Hero */}
            <main className="flex-1 relative overflow-hidden flex flex-col items-center justify-center p-6 md:p-12 text-center">
                {/* Background Blobs - matching the brand aesthetic */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <motion.div 
                        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -left-1/4 -top-1/4 h-[500px] w-[500px] rounded-full bg-accent blur-[120px]" 
                    />
                    <motion.div 
                        animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.15, 0.05] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -right-1/4 -bottom-1/4 h-[500px] w-[500px] rounded-full bg-accent blur-[120px]" 
                    />
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 max-w-3xl"
                >
                    <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-4 py-1.5 backdrop-blur-md mb-8">
                        <Rocket className="w-4 h-4 text-accent animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-widest text-accent">Feature Under Development</span>
                    </div>

                    <div className="mb-8 flex justify-center">
                        <div className="h-24 w-24 rounded-3xl bg-primary flex items-center justify-center shadow-2xl relative border border-white/10 group overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <Brain className="h-12 w-12 text-primary-foreground relative z-10" />
                            <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground p-1.5 rounded-full shadow-lg z-20">
                                <Lock className="h-4 w-4" />
                            </div>
                        </div>
                    </div>

                    <h1 className="font-serif text-5xl font-bold tracking-tight text-primary md:text-7xl mb-6">
                        AI-Powered <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary italic">Skill Assessment</span>
                    </h1>
                    
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
                        We are building a state-of-the-art evaluation engine to benchmark your skills against global tech standards. This feature will be live soon for the 2026 Batch.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button 
                            size="lg" 
                            className="h-14 px-8 bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg rounded-2xl shadow-xl shadow-primary/20 transition-all duration-300 hover:scale-[1.02]"
                            onClick={() => setLocation('/')}
                        >
                            <ArrowLeft className="mr-2 h-5 w-5" /> Back to Home
                        </Button>
                        <Button 
                            variant="outline"
                            size="lg" 
                            className="h-14 px-8 border-accent/30 text-accent hover:bg-accent/5 font-bold text-lg rounded-2xl transition-all duration-300 hover:scale-[1.02]"
                            onClick={() => setLocation('/contact-us')}
                        >
                            Get Notified on Launch <Sparkles className="ml-2 h-5 w-5" />
                        </Button>
                    </div>

                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: "AI Evaluation", icon: "✓" },
                            { label: "Coding Trials", icon: "✓" },
                            { label: "Industry Benchmarking", icon: "✓" },
                            { label: "Expert Feedback", icon: "✓" }
                        ].map((feat, i) => (
                            <div key={i} className="flex items-center gap-2 justify-center text-sm font-medium text-muted-foreground bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm">
                                <span className="text-accent font-bold">{feat.icon}</span>
                                {feat.label}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
}
