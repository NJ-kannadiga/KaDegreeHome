import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Zap, Clock, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

// --- Google Form Configuration ---
const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSew53F2YEJhjft_pd60mUFFxj_vy_2fT_rXLguPhNAx8DKmUg/formResponse";

const ENTRY_IDS = {
  NAME: "entry.1530710792",
  EMAIL: "entry.1183025170",
  PHONE: "entry.2126486953",
  WHATSAPP: "entry.188652168",
  MESSAGE: "entry.1938494521",
  COURSE: "entry.826044730", 
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    setFormStatus('submitting');
    // The actual submission is handled by the iframe target
    setTimeout(() => {
      setFormStatus('submitted');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background selection:bg-accent/30">
      <Navbar />
      
      {/* Hidden Iframe for Google Form Submission */}
      <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }} title="hidden_iframe"></iframe>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground md:py-32">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -left-1/4 -top-1/4 h-[400px] w-[400px] rounded-full bg-accent blur-[100px]" 
          />
          <motion.div 
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.05, 0.15, 0.05] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -right-1/4 -bottom-1/4 h-[400px] w-[400px] rounded-full bg-accent blur-[100px]" 
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="text-center md:text-left"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 backdrop-blur-md mb-6">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary-foreground/70">Connect with us</span>
            </motion.div>
            <motion.h1 variants={fadeIn} className="font-serif text-5xl font-bold tracking-tight md:text-7xl">
              Get in <span className="text-accent underline decoration-accent/30 decoration-8 underline-offset-8">Touch</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
              Whether you're a student, a parent, or an industry professional, we're here to answer your questions and guide you toward excellence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-24 md:px-6">
        <div className="grid gap-16 lg:grid-cols-5">
          {/* Contact Info */}
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="lg:col-span-2 space-y-10"
          >
            <motion.div variants={fadeIn}>
              <h2 className="font-serif text-3xl font-bold text-primary">Reach Out Directly</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our support team and admissions experts are ready to assist you in your native language.
              </p>
            </motion.div>

            <div className="grid gap-4">
              {[
                { icon: Phone, title: "Call Us", detail: "+91 7975902348", sub: "Mon-Sat, 9am - 7pm" },
                { icon: Mail, title: "Email Us", detail: "admissions@kadegree.com", sub: "24/7 Support Response" },
                { icon: MapPin, title: "Our Campus", detail: "BTM Layout, Bengaluru", sub: "Karnataka 560076" }
              ].map((item, idx) => (
                <motion.div key={idx} variants={fadeIn}>
                  <Card className="border-border/50 bg-card hover:border-accent/50 transition-colors duration-300">
                    <CardContent className="flex items-center gap-5 p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-primary">{item.title}</h3>
                        <p className="text-foreground/90">{item.detail}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{item.sub}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeIn} className="rounded-2xl bg-secondary p-8 border border-border/50">
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 shrink-0 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                   <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Response Time</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    We typically respond to all inquiries within 2-4 business hours.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <div className="glass-card relative overflow-hidden rounded-3xl border border-border/50 bg-card p-8 md:p-12 shadow-2xl transition-all duration-300 hover:shadow-accent/5">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
              
              <div className="relative z-10">
                {formStatus === 'submitted' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 px-6"
                  >
                    <div className="mx-auto w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-6">
                      <Sparkles className="h-8 w-8" />
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-primary mb-4">Message Sent!</h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
                      Thank you for reaching out. Our team has received your message and will get back to you shortly.
                    </p>
                    <Button 
                      onClick={() => setFormStatus('idle')}
                      variant="outline" 
                      className="rounded-xl px-8 border-accent/20 text-accent hover:bg-accent/5 font-bold"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="mb-2 font-serif text-3xl font-bold text-primary">Send a Message</h2>
                    <p className="mb-10 text-muted-foreground">Fill out the form below and we'll get back to you shortly.</p>
                    
                    <form 
                      className="space-y-6" 
                      action={GOOGLE_FORM_ACTION_URL}
                      method="POST"
                      target="hidden_iframe"
                      onSubmit={handleSubmit}
                    >
                      {/* Hidden Source Field */}
                      <input type="hidden" name={ENTRY_IDS.COURSE} value="Contact Us Page" />
                      
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-semibold text-primary">Full Name</label>
                          <Input 
                            id="name" 
                            name={ENTRY_IDS.NAME}
                            required
                            placeholder="John Doe" 
                            className="bg-background/50 border-input transition-all duration-300 focus:ring-2 focus:ring-accent/20" 
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-semibold text-primary">Email Address</label>
                          <Input 
                            id="email" 
                            name={ENTRY_IDS.EMAIL}
                            type="email" 
                            required
                            placeholder="john@example.com" 
                            className="bg-background/50 border-input transition-all duration-300 focus:ring-2 focus:ring-accent/20" 
                          />
                        </div>
                      </div>
                      
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-semibold text-primary">Phone Number</label>
                          <Input 
                            id="phone" 
                            name={ENTRY_IDS.PHONE}
                            required
                            placeholder="+91 99999 99999" 
                            className="bg-background/50 border-input transition-all duration-300 focus:ring-2 focus:ring-accent/20" 
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="whatsapp" className="text-sm font-semibold text-primary">WhatsApp (Optional)</label>
                          <Input 
                            id="whatsapp" 
                            name={ENTRY_IDS.WHATSAPP}
                            placeholder="+91 99999 00000" 
                            className="bg-background/50 border-input transition-all duration-300 focus:ring-2 focus:ring-accent/20" 
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-semibold text-primary">Message</label>
                        <Textarea 
                          id="message" 
                          name={ENTRY_IDS.MESSAGE}
                          required
                          placeholder="Tell us more about your inquiry..." 
                          rows={4} 
                          className="bg-background/50 border-input transition-all duration-300 focus:ring-2 focus:ring-accent/20 resize-none"
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        disabled={formStatus === 'submitting'}
                        className="group h-14 w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 text-lg font-bold shadow-lg shadow-primary/10"
                      >
                        <span className="flex items-center gap-2">
                          {formStatus === 'submitting' ? 'Sending...' : 'Send Secure Message'}
                          {formStatus !== 'submitting' && <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />}
                        </span>
                      </Button>
                    </form>

                    <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground border-t border-border/50 pt-8">
                      <div className="flex items-center gap-2 uppercase tracking-tight font-bold">
                        <Zap className="h-4 w-4 text-accent" />
                        Instant Confirmation
                      </div>
                      <div className="w-px h-4 bg-border/50" />
                      <div>Safe & Encrypted</div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
