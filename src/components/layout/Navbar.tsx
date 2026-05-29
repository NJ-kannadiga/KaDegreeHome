import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap } from "lucide-react";
import { useState } from "react";

import logo from "@assets/WhatsApp_Image_2026-01-14_at_10.24.21_AM_1768367360781.jpeg";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/internships", label: "Internships" },
    { href: "/courses", label: "Programs" },
    { href: "/blog", label: "Blog" },
    { href: "/contact-us", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2">
              <img src={logo} alt="KA Degree Logo" className="h-10 w-auto" />
              <span className="font-serif text-xl font-bold tracking-tight text-primary">
                KA Degree
              </span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    location === link.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <Link href="/courses">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                Apply Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="border-b bg-background md:hidden">
          <div className="container mx-auto space-y-4 px-4 py-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className="block text-sm font-medium text-foreground hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <Link href="/enroll">
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90" onClick={() => setIsOpen(false)}>
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
