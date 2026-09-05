import { useState } from "react";
import { X, Sparkles } from "lucide-react";
import { Link } from "wouter";

export function PromotionalBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 text-blue-50 w-full py-2 px-4 relative z-[60] border-b border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
      <div className="container mx-auto flex items-center justify-between text-[11px] sm:text-xs">
        <div className="flex items-center gap-2 flex-1 justify-center font-medium tracking-wide">
          <div className="flex items-center gap-1.5 bg-blue-500/20 text-blue-300 px-2.5 py-0.5 rounded-full border border-blue-500/30">
            <Sparkles className="w-3 h-3" />
            <span>NEW</span>
          </div>
          <span className="hidden sm:inline text-slate-300">Industry-Oriented Internships open for registration.</span>
          <span className="sm:hidden text-slate-300">Internships open for registration!</span>
          <Link href="/internship">
            <span className="ml-2 font-bold text-white hover:text-blue-400 transition-colors cursor-pointer flex items-center gap-1 group">
              Apply Now 
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </span>
          </Link>
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          className="p-1 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors shrink-0"
          aria-label="Close promotion"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
