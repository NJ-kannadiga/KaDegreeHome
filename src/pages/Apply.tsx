import React, { useState, useEffect } from "react";
import { useLocation, Link } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/layout/SEO";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Award,
  ShieldCheck,
  Check,
  User,
  Mail,
  Phone,
  GraduationCap,
  BookOpen,
  Calendar,
  MapPin,
  MessageSquare,
} from "lucide-react";

/* --- Design Tokens --- */
const S = {
  mainBg: "#F7F4EE",
  secBg: "#EFEAE1",
  cardBg: "#FFFFFF",
  text: "#171717",
  muted: "#6B6464",
  burgundy: "#6B1830",
  burgundyLight: "#8B2945",
  border: "#DDD7CC",
  serif: '"Libre Caslon Text", Georgia, serif',
  sans: '"Source Sans 3", system-ui, sans-serif',
};

const PROGRAMS_LIST = [
  "AI Full Stack Developer Pro",
  "Placement Preparation",
  "AI for Commerce",
];

export default function Apply() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    currentCourse: "",
    yearOfStudy: "",
    city: "",
    selectedProgram: "AI Full Stack Developer Pro",
    message: "",
  });

  // Extract program from URL query parameter ?program=...
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const programParam = params.get("program");
      if (programParam) {
        // Find best match or set direct
        const matched = PROGRAMS_LIST.find(
          (p) => p.toLowerCase() === programParam.toLowerCase()
        );
        if (matched) {
          setFormData((prev) => ({ ...prev, selectedProgram: matched }));
        } else {
          setFormData((prev) => ({ ...prev, selectedProgram: programParam }));
        }
      }
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Connect to Google Form endpoint
      const urlEncodedData = new URLSearchParams();
      urlEncodedData.append("entry.1530710792", formData.fullName);
      urlEncodedData.append("entry.1183025170", formData.email);
      urlEncodedData.append("entry.2126486953", formData.phone);
      urlEncodedData.append("entry.188652168", `${formData.college} (${formData.currentCourse})`);
      urlEncodedData.append("entry.1938494521", formData.yearOfStudy);
      urlEncodedData.append("entry.1821951885", formData.selectedProgram);
      urlEncodedData.append("entry.1775288101", formData.city);
      urlEncodedData.append("entry.826044730", formData.message || "Application submission");

      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSew53F2YEJhjft_pd60mUFFxj_vy_2fT_rXLguPhNAx8DKmUg/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: urlEncodedData.toString(),
        }
      );

      setSubmitted(true);
    } catch (err) {
      console.error("Submission failed", err);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      style={{
        backgroundColor: S.mainBg,
        color: S.text,
        fontFamily: S.sans,
        minHeight: "100vh",
      }}
      className="overflow-x-hidden flex flex-col justify-between"
    >
      <SEO
        title="Apply to KA Degree | Official Application"
        description="Take the next step toward building skills that move your career forward. Apply for KA Degree programs."
      />

      <Navbar />

      <main className="flex-1 pt-36 sm:pt-40 md:pt-44 pb-20 md:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {submitted ? (
            /* ═════════════════════════════════════════════════
               SUCCESS SCREEN: APPLICATION RECEIVED!
               ═════════════════════════════════════════════════ */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-[#FFFFFF] border border-[#DDD7CC] rounded-3xl p-8 sm:p-14 text-center shadow-xl"
            >
              <div className="w-20 h-20 rounded-full bg-[#6B1830]/10 text-[#6B1830] flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#6B1830] block mb-2">
                APPLICATION SUBMITTED SUCCESSFULLY
              </span>

              <h1
                style={{ fontFamily: S.serif }}
                className="text-3xl sm:text-5xl font-bold text-[#171717] mb-4"
              >
                Application Received!
              </h1>

              <p className="text-base sm:text-lg text-[#6B6464] max-w-lg mx-auto leading-relaxed mb-8">
                Thank you for applying to KA Degree. Our admissions team will contact you soon.
              </p>

              <div className="bg-[#F7F4EE] border border-[#DDD7CC] rounded-2xl p-6 max-w-md mx-auto mb-8 text-left space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#6B6464]">Applicant:</span>
                  <span className="font-bold text-[#171717]">{formData.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B6464]">Program:</span>
                  <span className="font-bold text-[#6B1830]">{formData.selectedProgram}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B6464]">Contact:</span>
                  <span className="font-bold text-[#171717]">{formData.phone}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/courses">
                  <a className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#6B1830] hover:bg-[#8B2945] text-white font-semibold text-base transition-colors shadow-md">
                    Explore More Programs
                  </a>
                </Link>
                <Link href="/">
                  <a className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#FFFFFF] border border-[#DDD7CC] text-[#171717] font-semibold text-base hover:bg-[#EFEAE1] transition-colors">
                    Return to Home
                  </a>
                </Link>
              </div>
            </motion.div>
          ) : (
            /* ═════════════════════════════════════════════════
               APPLICATION FORM
               ═════════════════════════════════════════════════ */
            <div className="bg-[#FFFFFF] border border-[#DDD7CC] rounded-3xl p-6 sm:p-12 shadow-xl">
              
              {/* Form Header */}
              <div className="text-center max-w-2xl mx-auto mb-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#DDD7CC] bg-[#F7F4EE] text-[12px] font-semibold tracking-wider text-[#6B1830] uppercase mb-4 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Cohort Admissions 2026</span>
                </div>

                <h1
                  style={{ fontFamily: S.serif }}
                  className="text-3xl sm:text-5xl font-bold tracking-tight text-[#171717] mb-4"
                >
                  Apply to KA Degree
                </h1>

                <p className="text-base sm:text-lg text-[#6B6464] leading-relaxed">
                  Take the next step toward building skills that move your career forward.
                </p>
              </div>

              {/* Selected Program Indicator Banner */}
              <div className="mb-8 p-4 rounded-2xl bg-[#EFEAE1] border border-[#DDD7CC] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#6B1830] text-white flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#6B6464] block">
                      Target Program Selected
                    </span>
                    <span className="font-serif font-bold text-lg text-[#171717]">
                      {formData.selectedProgram}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono font-semibold text-[#6B1830] bg-[#FFFFFF] px-3 py-1.5 rounded-lg border border-[#DDD7CC] self-start sm:self-auto">
                  Automatically Attached
                </span>
              </div>

              {/* Main Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#171717] flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#6B1830]" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Aryan Sharma"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#DDD7CC] bg-[#F7F4EE] text-[#171717] focus:outline-none focus:border-[#6B1830] transition-colors"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#171717] flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#6B1830]" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. aryan@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#DDD7CC] bg-[#F7F4EE] text-[#171717] focus:outline-none focus:border-[#6B1830] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#171717] flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#6B1830]" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#DDD7CC] bg-[#F7F4EE] text-[#171717] focus:outline-none focus:border-[#6B1830] transition-colors"
                    />
                  </div>

                  {/* City */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#171717] flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#6B1830]" />
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      placeholder="e.g. Bengaluru, Karnataka"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#DDD7CC] bg-[#F7F4EE] text-[#171717] focus:outline-none focus:border-[#6B1830] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* College / University */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#171717] flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-[#6B1830]" />
                      College / University *
                    </label>
                    <input
                      type="text"
                      name="college"
                      required
                      placeholder="e.g. Bangalore University"
                      value={formData.college}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#DDD7CC] bg-[#F7F4EE] text-[#171717] focus:outline-none focus:border-[#6B1830] transition-colors"
                    />
                  </div>

                  {/* Current Course */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#171717] flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#6B1830]" />
                      Current Course *
                    </label>
                    <input
                      type="text"
                      name="currentCourse"
                      required
                      placeholder="e.g. BCA / MCA / B.Com / B.Tech"
                      value={formData.currentCourse}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#DDD7CC] bg-[#F7F4EE] text-[#171717] focus:outline-none focus:border-[#6B1830] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Year of Study */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#171717] flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#6B1830]" />
                      Year of Study *
                    </label>
                    <select
                      name="yearOfStudy"
                      required
                      value={formData.yearOfStudy}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#DDD7CC] bg-[#F7F4EE] text-[#171717] focus:outline-none focus:border-[#6B1830] transition-colors"
                    >
                      <option value="">Select current year</option>
                      <option value="1st Year">1st Year</option>
                      <option value="2nd Year">2nd Year</option>
                      <option value="3rd Year / Final Year">3rd Year / Final Year</option>
                      <option value="Graduated">Recent Graduate / Passed Out</option>
                    </select>
                  </div>

                  {/* Selected Program Dropdown (pre-populated) */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#171717] flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-[#6B1830]" />
                      Selected Program *
                    </label>
                    <select
                      name="selectedProgram"
                      required
                      value={formData.selectedProgram}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#6B1830] bg-[#FFFFFF] text-[#6B1830] font-bold focus:outline-none transition-colors"
                    >
                      {PROGRAMS_LIST.map((prog) => (
                        <option key={prog} value={prog}>
                          {prog}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message / Questions */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#171717] flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-[#6B1830]" />
                    Message / Questions (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Tell us about your learning goals or ask any question..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#DDD7CC] bg-[#F7F4EE] text-[#171717] focus:outline-none focus:border-[#6B1830] transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 px-8 rounded-xl bg-[#6B1830] hover:bg-[#8B2945] text-white font-serif font-bold text-lg flex items-center justify-center gap-3 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-70 group"
                  >
                    <span>{submitting ? "Submitting Application..." : "Submit Application"}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <p className="text-center text-xs text-[#6B6464]">
                  By submitting, you agree to receive application status updates and counselling assistance on your provided contact details.
                </p>

              </form>

            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
