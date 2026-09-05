import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

import logo from "@assets/WhatsApp_Image_2026-01-14_at_10.24.21_AM_1768367360781.jpeg";

interface NavLinkItem {
  href: string;
  label: string;
}

const navLinks: NavLinkItem[] = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About" },
  { href: "/internships", label: "Internship" },
  { href: "/courses", label: "Programs" },
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact" },
];

// Interactive Burgundy Hamburger Icon (Transforms from ☰ to ✕)
function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <motion.div
      className="w-7 h-5 flex flex-col justify-between items-center cursor-pointer group"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {/* Top Line */}
      <motion.span
        className="w-full h-[2px] bg-[#5A0B2E] group-hover:bg-[#3B071F] rounded-full origin-center transition-colors duration-200"
        animate={
          isOpen
            ? { rotate: 45, y: 9 }
            : { rotate: 0, y: 0 }
        }
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      />
      {/* Middle Line */}
      <motion.span
        className="w-full h-[2px] bg-[#5A0B2E] group-hover:bg-[#3B071F] rounded-full origin-center transition-colors duration-200"
        animate={
          isOpen
            ? { opacity: 0, scaleX: 0 }
            : { opacity: 1, scaleX: 1 }
        }
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
      {/* Bottom Line */}
      <motion.span
        className="w-full h-[2px] bg-[#5A0B2E] group-hover:bg-[#3B071F] rounded-full origin-center transition-colors duration-200"
        animate={
          isOpen
            ? { rotate: -45, y: -9 }
            : { rotate: 0, y: 0 }
        }
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.div>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Backdrop overlay when menu is open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/20 z-40"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Sticky Header Container */}
      <header className="fixed top-3 sm:top-4 left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none">
        <div className="max-w-4xl mx-auto pointer-events-auto">
          
          {/* Main Compact Header Bar */}
          <div
            className={cn(
              "w-full bg-[#F8F3EC] border border-[#DED5CC] transition-all duration-300",
              scrolled
                ? "py-2 sm:py-2.5 px-4 sm:px-7 shadow-[0_4px_16px_rgba(23,20,23,0.08)]"
                : "py-2.5 sm:py-3 px-4 sm:px-8 shadow-[0_2px_8px_rgba(23,20,23,0.04)]",
              isOpen ? "rounded-t-[8px] border-b-transparent" : "rounded-[8px]"
            )}
          >
            <div className="flex items-center justify-between">
              
              {/* Left: KA Degree Logo (Original proportions, ~55-65px tall) */}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Link href="/">
                  <a
                    className="flex items-center focus:outline-none"
                    onClick={() => setIsOpen(false)}
                  >
                    <img
                      src={logo}
                      alt="KA Degree Logo"
                      className="h-[52px] sm:h-[58px] md:h-[62px] w-auto object-contain select-none"
                    />
                  </a>
                </Link>
              </motion.div>

              {/* Right: Apply Now button & Hamburger Toggle Button */}
              <motion.div
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex items-center gap-2.5 sm:gap-3"
              >
                <Link href="/apply">
                  <a className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[6px] bg-[#5A0B2E] hover:bg-[#3B071F] text-white text-xs font-serif font-bold transition-all shadow-sm">
                    <span>Apply Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </Link>

                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 sm:p-2.5 -mr-1 rounded-md hover:bg-[#F0EAE1] transition-colors focus:outline-none flex items-center justify-center"
                  aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                  aria-expanded={isOpen}
                >
                  <HamburgerIcon isOpen={isOpen} />
                </button>
              </motion.div>

            </div>
          </div>

          {/* Dropdown Navigation Menu Directly Underneath */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="w-full bg-[#F8F3EC] border border-t-0 border-[#DED5CC] rounded-b-[8px] shadow-[0_16px_32px_rgba(23,20,23,0.08)] overflow-hidden"
              >
                <div className="px-6 sm:px-10 pt-2 pb-7 space-y-5">
                  
                  {/* Navigation Links */}
                  <nav className="flex flex-col space-y-1 pt-1">
                    {navLinks.map((link, i) => {
                      const isActive =
                        location === link.href ||
                        (link.href !== "/" && location.startsWith(link.href));

                      return (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{
                            delay: 0.05 + i * 0.04,
                            duration: 0.4,
                            ease: "easeOut",
                          }}
                        >
                          <Link href={link.href}>
                            <a
                              onClick={() => setIsOpen(false)}
                              className={cn(
                                "group flex items-center justify-between py-2.5 px-3 rounded-md transition-all duration-200",
                                isActive
                                  ? "text-[#5A0B2E] font-serif font-bold text-2xl sm:text-3xl pl-4 bg-[#5A0B2E]/5"
                                  : "text-[#171417] font-serif font-semibold text-2xl sm:text-3xl hover:text-[#5A0B2E] hover:translate-x-1"
                              )}
                            >
                              <span className="flex items-center gap-3">
                                {link.label}
                                {isActive && (
                                  <span className="w-2 h-2 rounded-full bg-[#5A0B2E] inline-block" />
                                )}
                              </span>
                              <ArrowRight
                                className={cn(
                                  "w-5 h-5 text-[#5A0B2E] transition-all duration-200",
                                  isActive
                                    ? "opacity-100 translate-x-0"
                                    : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                                )}
                              />
                            </a>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </nav>

                  {/* Prominent Burgundy CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{
                      delay: 0.05 + navLinks.length * 0.04,
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                    className="pt-4 border-t border-[#DED5CC] space-y-2.5"
                  >
                    <Link href="/apply">
                      <a
                        onClick={() => setIsOpen(false)}
                        className="w-full py-3.5 sm:py-4 px-6 rounded-[8px] bg-[#5A0B2E] text-white font-serif font-bold text-base sm:text-lg flex items-center justify-between hover:bg-[#3B071F] transition-all duration-200 shadow-sm hover:shadow-md group"
                      >
                        <span>Apply Now</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                      </a>
                    </Link>

                    <Link href="/contact-us">
                      <a
                        onClick={() => setIsOpen(false)}
                        className="w-full py-2.5 px-6 rounded-[8px] bg-transparent border border-[#DED5CC] text-[#171417] font-serif font-semibold text-sm sm:text-base flex items-center justify-between hover:bg-[#F0EAE1] transition-all duration-200"
                      >
                        <span>Talk to Us</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </Link>
                  </motion.div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </header>
    </>
  );
}
