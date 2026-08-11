import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Sparkles, User, Phone, Mail, BookOpen } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// --- Google Form Configuration ---
const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSew53F2YEJhjft_pd60mUFFxj_vy_2fT_rXLguPhNAx8DKmUg/formResponse";

const ENTRY_IDS = {
  NAME: "entry.1530710792",
  EMAIL: "entry.1183025170",
  PHONE: "entry.2126486953",
  COURSE: "entry.826044730", 
  MESSAGE: "entry.1938494521",
};

interface GlobalLeadCaptureProps {
  source?: string;
}

export function GlobalLeadCapture({ source = "Global Footer Banner" }: GlobalLeadCaptureProps) {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('submitted');
    }, 2000);
  };

  return (
    <section className="py-20 relative overflow-hidden bg-slate-950 border-t border-slate-900">
      {/* Hidden Iframe for Google Form Submission */}
      <iframe name="hidden_cta_iframe" id="hidden_cta_iframe" style={{ display: 'none' }} title="hidden_cta_iframe"></iframe>

      {/* Decorative Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-[10%] -top-[50%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[100px]" />
        <div className="absolute -right-[10%] -bottom-[50%] w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-slate-900/40 p-8 md:p-12 rounded-[2.5rem] border border-slate-800 backdrop-blur-sm shadow-2xl">
          
          {/* Left Side: Copy */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 mb-2">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Free Session</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
              Book Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Free Career Guidance</span> Session
            </h2>
            <p className="text-lg text-slate-400">
              Not sure where to start? Speak with our expert mentors to map out your career path in AI, Full-Stack, and modern software development.
            </p>
            <ul className="space-y-3 pt-4">
              <li className="flex items-center gap-3 text-sm text-slate-300 font-medium">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">✓</div>
                Personalized Career Roadmap
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-300 font-medium">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">✓</div>
                Industry Skill Requirements
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-300 font-medium">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">✓</div>
                100% Free & No Obligation
              </li>
            </ul>
          </div>

          {/* Right Side: Form */}
          <div className="bg-slate-950/80 p-6 md:p-8 rounded-3xl border border-slate-800">
            {formStatus === 'submitted' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="mx-auto w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-6">
                  <Sparkles className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
                <p className="text-slate-400 mb-6 text-sm">
                  We'll contact you shortly to schedule your free guidance session.
                </p>
                <Button 
                  onClick={() => setFormStatus('idle')}
                  variant="outline" 
                  className="rounded-xl border-slate-800 text-slate-300 hover:bg-slate-900"
                >
                  Book Another Session
                </Button>
              </motion.div>
            ) : (
              <form 
                className="space-y-4"
                action={GOOGLE_FORM_ACTION_URL}
                method="POST"
                target="hidden_cta_iframe"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name={ENTRY_IDS.MESSAGE} value={`Lead captured from: ${source}`} />
                
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <Input 
                    name={ENTRY_IDS.NAME}
                    required
                    placeholder="Full Name" 
                    className="pl-11 bg-slate-900 border-slate-800 h-12 text-slate-200 placeholder:text-slate-600 focus:border-blue-500"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <Input 
                      name={ENTRY_IDS.PHONE}
                      required
                      placeholder="Phone Number" 
                      className="pl-11 bg-slate-900 border-slate-800 h-12 text-slate-200 placeholder:text-slate-600 focus:border-blue-500"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <Input 
                      name={ENTRY_IDS.EMAIL}
                      type="email"
                      required
                      placeholder="Email Address" 
                      className="pl-11 bg-slate-900 border-slate-800 h-12 text-slate-200 placeholder:text-slate-600 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="relative">
                  <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <Input 
                    name={ENTRY_IDS.COURSE}
                    required
                    placeholder="Which course/program are you interested in?" 
                    className="pl-11 bg-slate-900 border-slate-800 h-12 text-slate-200 placeholder:text-slate-600 focus:border-blue-500"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-900/20 transition-all"
                >
                  {formStatus === 'submitting' ? 'Submitting...' : 'Claim Free Session'}
                  {formStatus !== 'submitting' && <Send className="ml-2 w-4 h-4" />}
                </Button>
                <p className="text-center text-[10px] text-slate-600 font-medium uppercase tracking-wider mt-4">
                  100% Free • No Credit Card Required
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
