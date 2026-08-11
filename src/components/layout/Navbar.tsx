import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles, Flame } from "lucide-react";
import { useState } from "react";

import logo from "@assets/WhatsApp_Image_2026-01-14_at_10.24.21_AM_1768367360781.jpeg";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/internships", label: "Internships", badge: "50% OFF" },
    { href: "/courses", label: "Programs" },
    { href: "/blog", label: "Blog" },
    { href: "/contact-us", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full shadow-xl">
      {/* Top Offer Banner */}
      <div className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-500 text-white text-xs font-semibold py-2 px-4 text-center flex items-center justify-center gap-2 shadow-inner">
        <span className="inline-flex items-center gap-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 px-2.5 py-0.5 text-[10px] uppercase font-extrabold tracking-wider shadow-sm">
          <Flame className="h-3 w-3 text-yellow-300 fill-yellow-300 animate-bounce" /> Hot Deal
        </span>
        <span className="hidden sm:inline text-white/95">
          🎉 Special Offer: Get <strong className="font-extrabold text-amber-200 underline decoration-amber-300 underline-offset-2">50% Discount</strong> on all Industry Internship Programs!
        </span>
        <span className="sm:hidden text-white font-bold">
          🔥 <strong className="text-amber-200">50% OFF</strong> on Internships!
        </span>
        <Link href="/internships">
          <a className="ml-1 inline-flex items-center gap-1 text-[11px] bg-white text-red-600 hover:bg-amber-100 font-extrabold px-3 py-0.5 rounded-full transition-all duration-200 shadow-md hover:scale-105">
            Claim Offer &rarr;
          </a>
        </Link>
      </div>

      {/* Main Navbar */}
      <nav className="border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-xl text-slate-100 shadow-2xl">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex h-16 items-center justify-between">
            <Link href="/">
              <a className="flex items-center gap-3 group">
                <div className="bg-white p-1 rounded-lg shadow-md border border-slate-700/50 flex items-center justify-center">
                  <img src={logo} alt="KA Degree Logo" className="h-8 w-auto object-contain" />
                </div>
                <span className="font-serif text-xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-amber-400 group-hover:to-amber-300 transition-all">
                  KA Degree
                </span>
              </a>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex md:items-center md:gap-5">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a
                    className={cn(
                      "relative text-sm font-medium transition-all duration-200 flex items-center gap-1.5 py-1.5 px-3 rounded-lg",
                      location === link.href
                        ? "text-amber-400 font-bold bg-amber-500/10 border border-amber-500/30 shadow-sm shadow-amber-500/10"
                        : "text-slate-300 hover:text-white hover:bg-slate-900/80"
                    )}
                  >
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 px-2 py-0.5 text-[10px] font-extrabold text-white shadow-md shadow-red-500/40 animate-pulse tracking-wide uppercase border border-red-400/40">
                        <Sparkles className="h-2.5 w-2.5 text-yellow-200 fill-yellow-200" />
                        {link.badge}
                      </span>
                    )}
                  </a>
                </Link>
              ))}
              <Link href="/courses">
                <Button className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-extrabold shadow-lg shadow-amber-500/25 border-0 hover:scale-105 transition-all duration-200 rounded-full px-5">
                  Apply Now
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg text-slate-200 bg-slate-900 border border-slate-800 hover:text-white hover:bg-slate-800"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl md:hidden">
            <div className="container mx-auto space-y-2 px-4 py-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a
                    className={cn(
                      "flex items-center justify-between text-sm font-medium py-2.5 px-3 rounded-lg transition-all",
                      location === link.href
                        ? "bg-amber-500/10 text-amber-400 font-bold border border-amber-500/30"
                        : "text-slate-300 hover:bg-slate-900 hover:text-white"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 px-2.5 py-0.5 text-xs font-bold text-white shadow-sm animate-pulse">
                        <Sparkles className="h-3 w-3 text-yellow-200 fill-yellow-200" />
                        {link.badge}
                      </span>
                    )}
                  </a>
                </Link>
              ))}
              <Link href="/courses">
                <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-extrabold hover:from-amber-400 hover:to-orange-400 mt-3 rounded-xl py-3 shadow-lg shadow-amber-500/20" onClick={() => setIsOpen(false)}>
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}


