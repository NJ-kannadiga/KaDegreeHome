import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Users, Globe, BookOpen, Layers, Rocket, Sparkles, ChevronRight, X, IndianRupee } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { PROGRAMS } from '../data/programs';

// --- Google Form Configuration ---
// FORM LINK: https://docs.google.com/forms/d/e/1FAIpQLSew53F2YEJhjft_pd60mUFFxj_vy_2fT_rXLguPhNAx8DKmUg/viewform
const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSew53F2YEJhjft_pd60mUFFxj_vy_2fT_rXLguPhNAx8DKmUg/formResponse";

const ENTRY_IDS = {
  NAME: "entry.1530710792",
  EMAIL: "entry.1183025170",
  PHONE: "entry.2126486953",
  WHATSAPP: "entry.188652168",
  MESSAGE: "entry.1938494521",
  COURSE: "entry.826044730", // e.g., "DAFSE" mapped to Course Title
  // Unused IDs based on provided list: entry.1821951885, entry.1775288101 (Maybe University/State?)
};

export default function Courses() {
  const [selectedProgram, setSelectedProgram] = useState<typeof PROGRAMS[0] | null>(null);
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');

  const isBookingOpen = (degree: string) => degree.includes('All Degrees') || degree.includes('MCA') || degree.includes('BCA');

  const handleInquirySubmit = (e: React.FormEvent) => {
    setFormStatus('submitting');
    // Form submission logic is handled by the iframe target, this just updates UI state
    setTimeout(() => {
      setFormStatus('submitted');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-200">
      <Navbar />
      <div className="py-12 px-4 md:px-8">
      {/* Hidden Iframe for Google Form Submission */}
      <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }} title="hidden_iframe"></iframe>

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-6 pt-4">
          {/* Notification Banner */}
          <div className="mx-auto max-w-3xl mb-2 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-orange-500/10 border border-orange-500/30 rounded-2xl p-4 shadow-lg shadow-orange-900/20">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <span className="relative flex h-3 w-3 sm:mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
              </span>
              <p className="text-orange-200 text-sm md:text-base font-medium">
                <span className="font-bold text-orange-400 uppercase tracking-wider text-xs mr-2 border border-orange-500/50 px-2 py-0.5 rounded">Update</span>
                March batch is <span className="font-bold text-white">already full</span>. Admissions open for <span className="font-bold text-white">June 2026</span>!
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800 text-blue-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3 h-3" /> Premium Cohorts 2026
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mt-2">
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Programs</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mt-4">
            Industry-aligned curriculums designed to bridge the gap between degree and high-performance employment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {PROGRAMS.map((program) => (
            <div
              key={program.id}
              onClick={() => isBookingOpen(program.degree) && setSelectedProgram(program)}
              className={`group relative flex flex-col bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20 ${!isBookingOpen(program.degree) ? 'opacity-70 grayscale-[0.5] cursor-not-allowed' : 'cursor-pointer'}`}
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="p-8 flex flex-col flex-1 relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <Badge variant="outline" className={`uppercase tracking-wide font-bold border-0 px-3 py-1 ${isBookingOpen(program.degree) ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' : 'bg-slate-800 text-slate-500'}`}>
                    {isBookingOpen(program.degree) ? "Admissions Open" : "Coming Soon"}
                  </Badge>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/30 border border-cyan-900/50 px-2 py-1 rounded">{program.badge}</span>
                    {/* PRICE DISPLAY ON CARD */}
                    <span className="text-sm font-bold text-emerald-400">{program.fee}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {program.title}
                </h3>
                <p className="text-slate-400 text-base leading-relaxed mb-8 flex-1">
                  {program.short}
                </p>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-3 text-slate-300 bg-slate-950/50 p-3 rounded-xl border border-slate-800">
                    <Users className="w-4 h-4 text-blue-500" />
                    <span className="font-medium">{program.seats.filled}/{program.seats.total} Filled</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300 bg-slate-950/50 p-3 rounded-xl border border-slate-800">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    <span className="font-medium truncate">Mentors in {program.mentors.countries.length} Regions</span>
                  </div>
                </div>
              </div>

              <div className="px-8 pb-8 pt-0 relative z-10">
                <Button
                  className={`w-full text-lg py-6 font-bold flex items-center justify-between group-hover:pl-8 transition-all ${isBookingOpen(program.degree) ? 'bg-white text-slate-900 hover:bg-blue-50' : 'bg-slate-800 text-slate-500 border-none'}`}
                  disabled={!isBookingOpen(program.degree)}
                >
                  {isBookingOpen(program.degree) ? "View Curriculum" : "Join Waitlist"}
                  {isBookingOpen(program.degree) && <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dark Mode Modal */}
      <Dialog open={!!selectedProgram} onOpenChange={(open) => !open && setSelectedProgram(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] h-[90vh] flex flex-col p-0 gap-0 overflow-hidden bg-slate-950 border border-slate-800 text-slate-200 shadow-2xl shadow-black">
          {selectedProgram && (
            <>
              <div className="p-6 md:p-8 border-b border-slate-800 bg-slate-900/50 relative shrink-0 z-10 flex flex-col gap-4">
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="absolute right-4 top-4 rounded-full p-2 bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors z-50"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="text-cyan-400 border-cyan-900 bg-cyan-950/30">{selectedProgram.badge}</Badge>
                    <span className="text-sm text-slate-400 font-mono">{selectedProgram.seats.total - selectedProgram.seats.filled} Seats Remaining</span>
                  </div>
                  {/* <div className="text-emerald-400 font-bold text-lg bg-emerald-950/30 px-3 py-1 rounded border border-emerald-900/50">
                    {selectedProgram.fee}
                  </div> */}
                </div>
                <DialogTitle className="text-3xl font-bold text-white leading-tight">
                  {selectedProgram.title}
                </DialogTitle>
                <DialogDescription className="text-slate-400">
                  {selectedProgram.short}
                </DialogDescription>
              </div>

              <ScrollArea className="flex-1 p-6 md:p-8 bg-slate-950">
                {showInquiryForm ? (
                  <div className="max-w-md mx-auto py-8 animate-in fade-in zoom-in-95 duration-300">
                    {formStatus === 'submitted' ? (
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto">
                          <Sparkles className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Inquiry Sent!</h3>
                        <p className="text-slate-400">Our academic counselors will review your profile and contact you on WhatsApp shortly.</p>
                        <Button onClick={() => {
                          setShowInquiryForm(false);
                          setFormStatus('idle');
                        }} variant="outline" className="mt-4 border-slate-700 text-slate-300 hover:text-white">Return to Course</Button>
                      </div>
                    ) : (
                      <form
                        action={GOOGLE_FORM_ACTION_URL}
                        method="POST"
                        target="hidden_iframe"
                        onSubmit={handleInquirySubmit}
                        className="space-y-6 bg-slate-900/50 p-6 rounded-2xl border border-slate-800"
                      >
                        <div className="space-y-2 text-center mb-6">
                          <h3 className="text-xl font-bold text-white">Join Priority Waitlist</h3>
                          <p className="text-sm text-slate-400">Secure your spot for the upcoming cohort.</p>
                        </div>

                        <div className="space-y-4">
                          {/* Hidden Course Field */}
                          <input type="hidden" name={ENTRY_IDS.COURSE} value={selectedProgram.title} />

                          <div className="grid gap-2">
                            <Label htmlFor="name" className="text-slate-300">Full Name</Label>
                            <Input id="name" name={ENTRY_IDS.NAME} required placeholder="John Doe" className="bg-slate-950 border-slate-800 text-white" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="phone" className="text-slate-300">Phone Number</Label>
                            <Input id="phone" name={ENTRY_IDS.PHONE} required placeholder="+91 99999 99999" className="bg-slate-950 border-slate-800 text-white" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="email" className="text-slate-300">Email Address</Label>
                            <Input id="email" name={ENTRY_IDS.EMAIL} type="email" required placeholder="john@example.com" className="bg-slate-950 border-slate-800 text-white" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="whatsapp" className="text-slate-300">WhatsApp Number (Optional)</Label>
                            <Input id="whatsapp" name={ENTRY_IDS.WHATSAPP} placeholder="Same as phone" className="bg-slate-950 border-slate-800 text-white" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="message" className="text-slate-300">Questions / Background</Label>
                            <Textarea id="message" name={ENTRY_IDS.MESSAGE} placeholder="I am a final year student..." className="bg-slate-950 border-slate-800 text-white" />
                          </div>
                        </div>

                        <div className="pt-4 flex gap-3">
                          <Button type="button" variant="ghost" onClick={() => setShowInquiryForm(false)} className="w-full text-slate-400 hover:text-white">Cancel</Button>
                          <Button type="submit" disabled={formStatus === 'submitting'} className="w-full bg-blue-600 hover:bg-blue-500 font-bold">
                            {formStatus === 'submitting' ? 'Sending...' : 'Submit Choice'}
                          </Button>
                        </div>
                      </form>
                    )}
                  </div>
                ) : (
                  <div className="space-y-10 max-w-3xl mx-auto">

                    {/* Overview */}
                    <section className="space-y-6">
                      <h3 className="text-xl font-bold flex items-center gap-2 text-white border-b border-slate-800 pb-2">
                        <BookOpen className="w-5 h-5 text-blue-500" /> Program Overview
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <h4 className="font-bold text-xs uppercase tracking-widest text-slate-500">Introduction</h4>
                          <p className="text-slate-300 leading-relaxed text-sm bg-slate-900/50 p-5 rounded-xl border border-slate-800 transform hover:scale-[1.02] transition-transform">{selectedProgram.overview.introduction}</p>
                        </div>
                        <div className="space-y-3">
                          <h4 className="font-bold text-xs uppercase tracking-widest text-slate-500">AI Integration</h4>
                          <p className="text-slate-300 leading-relaxed text-sm bg-blue-950/20 p-5 rounded-xl border border-blue-900/30 transform hover:scale-[1.02] transition-transform">{selectedProgram.overview.aiIntegration}</p>
                        </div>
                      </div>
                    </section>

                    {/* Mentorship Section - NEW */}
                    <section className="space-y-6">
                      <h3 className="text-xl font-bold flex items-center gap-2 text-white border-b border-slate-800 pb-2">
                        <Users className="w-5 h-5 text-green-500" /> Global Mentorship
                      </h3>
                      <div className="bg-slate-900/40 p-6 rounded-xl border border-slate-800 space-y-6">
                        <p className="text-slate-300 leading-relaxed font-medium bg-slate-950 p-4 rounded-lg border border-slate-900">{selectedProgram.overview.mentorship}</p>
                        <div className="grid lg:grid-cols-2 gap-4">
                          <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                            <h4 className="text-xs uppercase font-bold text-slate-500 mb-2 tracking-wider">Mentors</h4>
                            <div className="flex flex-wrap gap-2">
                              {selectedProgram.mentors.roles.map((r, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs bg-slate-900 text-slate-400 border-slate-800">{r}</Badge>
                              ))}
                            </div>
                          </div>
                          <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                            <h4 className="text-xs uppercase font-bold text-slate-500 mb-2 tracking-wider">Base Locations</h4>
                            <div className="flex flex-wrap gap-2">
                              {selectedProgram.mentors.countries.map((c, idx) => (
                                <span key={idx} className="text-sm text-slate-300 font-bold flex items-center gap-1"><MapPin className="w-3 h-3 text-orange-500" /> {c}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* Tech Stack */}
                    <section className="space-y-6">
                      <h3 className="text-xl font-bold flex items-center gap-2 text-white border-b border-slate-800 pb-2">
                        <Layers className="w-5 h-5 text-purple-500" /> Tech Stack
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProgram.techStack.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="px-4 py-2 text-sm bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors">{tech}</Badge>
                        ))}
                      </div>
                    </section>

                    {/* Projects */}
                    <section className="space-y-6">
                      <h3 className="text-xl font-bold flex items-center gap-2 text-white border-b border-slate-800 pb-2">
                        <Globe className="w-5 h-5 text-cyan-500" /> {selectedProgram.projects.total} Real-World Projects
                      </h3>
                      <ul className="grid gap-3">
                        {selectedProgram.projects.highlights.map((proj, i) => (
                          <li key={i} className="flex items-start gap-3 bg-slate-900/30 p-4 rounded-xl border border-slate-800/50 hover:bg-slate-900/80 transition-colors">
                            <div className="bg-green-500/20 text-green-400 rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold border border-green-500/30">{i + 1}</div>
                            <span className="text-slate-300 text-sm font-medium">{proj}</span>
                          </li>
                        ))}
                      </ul>
                    </section>

                    {/* Modules */}
                    <section className="space-y-6">
                      <h3 className="text-xl font-bold flex items-center gap-2 text-white border-b border-slate-800 pb-2">
                        <Rocket className="w-5 h-5 text-orange-500" /> Key Modules
                      </h3>
                      <div className="grid gap-4">
                        {selectedProgram.modules.map((mod, i) => (
                          <div key={i} className="bg-slate-900/40 border border-slate-800 p-5 rounded-xl hover:border-blue-500/30 transition-all hover:bg-slate-900/80">
                            <h4 className="font-bold text-white text-lg mb-3">{mod.title}</h4>
                            <div className="flex flex-wrap gap-2">
                              {mod.topics.map((t, j) => (
                                <span key={j} className="text-xs uppercase font-bold tracking-wider bg-slate-950 text-slate-500 px-2 py-1 rounded border border-slate-900">{t}</span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>

                  </div>
                )}
              </ScrollArea>

              {!showInquiryForm && (
                <div className="p-6 border-t border-slate-800 bg-slate-900 shrink-0 flex justify-end gap-4 z-20">
                  <Button variant="ghost" size="lg" onClick={() => setSelectedProgram(null)} className="text-slate-400 hover:text-white hover:bg-slate-800">Close</Button>
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 shadow-lg shadow-blue-900/20" onClick={() => setShowInquiryForm(true)}>
                    Apply Now / Inquiry
                  </Button>
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
      </div>
    </div>
  );
}
