import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navlinks } from "../data/navlinks";
import type { INavLink } from "../types";
import { Link as NavLink, useLocation } from "wouter";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [location] = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Body scroll lock when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    return (
        <>
            <motion.header 
                className={`fixed top-0 z-50 flex items-center justify-between w-full py-5 px-6 md:px-12 lg:px-20 transition-all duration-300 ${isScrolled ? 'bg-brand-bg-warm/95 backdrop-blur-md shadow-sm border-b border-gray-200/50 py-4' : 'bg-brand-bg-warm'}`}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                {/* Logo Section */}
                <NavLink href="/">
                    <div className="flex items-center gap-3 cursor-pointer group">
                        <img src="/images/logo.png" alt="KA Degree Logo" className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
                    </div>
                </NavLink>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-10">
                    {navlinks.map((link: INavLink) => {
                        const isActive = location === link.href;
                        return (
                            <NavLink key={link.name} href={link.href} className="relative group py-2 flex items-center justify-center">
                                <span className={`text-[15px] font-semibold transition-colors duration-300 ${isActive ? 'text-brand-burgundy' : 'text-brand-text-primary group-hover:text-brand-burgundy'}`}>
                                    {link.name}
                                </span>
                                <span className={`absolute left-0 -bottom-1 w-full h-[2px] bg-brand-burgundy transition-transform duration-300 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                            </NavLink>
                        );
                    })}
                </nav>

                {/* Apply Now CTA */}
                <div className="hidden lg:block">
                    <NavLink href="/enroll">
                        <button className="px-8 py-3 bg-brand-burgundy-dark hover:bg-brand-burgundy text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 rounded-full font-semibold text-[15px]">
                            Talk to Us <ArrowRight className="w-4 h-4 inline-block ml-1" />
                        </button>
                    </NavLink>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(true)} className="lg:hidden text-brand-text-primary hover:text-brand-burgundy transition-colors p-2 -mr-2">
                    <Menu size={28} />
                </button>
            </motion.header>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[100] bg-brand-bg-warm flex flex-col p-6 lg:hidden overflow-y-auto"
                    >
                        <div className="flex justify-between items-center mb-12">
                            <div className="flex items-center gap-3">
                                <img src="/images/logo.png" alt="KA Degree Logo" className="h-12 w-auto object-contain" />
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-[#474740] hover:text-deep-wine p-2 bg-white rounded-full shadow-sm border border-gray-200 transition-colors">
                                <X size={24} />
                            </button>
                        </div>
                        
                        <div className="flex flex-col gap-6 items-start px-2">
                            {navlinks.map((link: INavLink) => {
                                const isActive = location === link.href;
                                return (
                                    <NavLink key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="w-full">
                                        <span className={`block w-full py-2 text-2xl font-bold tracking-wide transition-colors ${isActive ? 'text-brand-burgundy' : 'text-brand-text-primary hover:text-brand-burgundy'}`}>
                                            {link.name}
                                        </span>
                                    </NavLink>
                                );
                            })}
                            <div className="w-full pt-8 mt-4 border-t border-gray-300">
                                <NavLink href="/enroll" onClick={() => setIsOpen(false)}>
                                    <button className="w-full py-4 bg-brand-burgundy-dark text-white rounded-full font-semibold text-[15px] shadow-md active:bg-brand-burgundy transition-colors">
                                        Talk to Us <ArrowRight className="w-4 h-4 inline-block ml-1" />
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
