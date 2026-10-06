import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Clock,
  MapPin,
  Target,
  CalendarClock,
  Briefcase,
} from "lucide-react";

interface MetaAdsLeadFormProps {
  programName?: string;
  /** Kept for backward compatibility — no payment is collected in this form. */
  slotPrice?: number;
  /** Kept for backward compatibility — no payment is collected in this form. */
  paymentLink?: string;
  onSuccess?: () => void;
  className?: string;
  title?: string;
  subtitle?: string;
}

// KA Degree WhatsApp number (country code + number, no "+")
const WHATSAPP_NUMBER = "917975902348";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSew53F2YEJhjft_pd60mUFFxj_vy_2fT_rXLguPhNAx8DKmUg/formResponse";

const STATUS_OPTIONS = [
  "Final-year Student",
  "Fresher (Passed out, looking for job)",
  "Career Gap (1+ year)",
  "Working – Non-IT",
  "Working – IT / Developer",
];

const QUALIFICATION_OPTIONS = [
  "B.E / B.Tech",
  "BCA / MCA",
  "B.Sc / M.Sc",
  "B.Com / BBA / MBA",
  "Diploma",
  "Other",
];

const GOAL_OPTIONS = [
  "Get my first IT job",
  "Switch from Non-IT to IT",
  "Restart after career gap",
  "Upskill in AI for a better package",
  "Learn Data Analytics",
  "Just exploring",
];

const START_OPTIONS = [
  "Immediately (this week)",
  "Within 1 month",
  "In 2–3 months",
  "Not sure yet",
];

const initialForm = {
  fullName: "",
  phone: "",
  email: "",
  status: "",
  qualification: "",
  passingYear: "",
  city: "",
  goal: "",
  startWhen: "",
};

type FormState = typeof initialForm;

/** Simple lead score so the team knows whom to call first. */
function getLeadTag(f: FormState): "🔥 HOT" | "🟡 WARM" | "🔵 COLD" {
  let score = 0;
  if (f.startWhen.startsWith("Immediately")) score += 3;
  else if (f.startWhen.startsWith("Within 1 month")) score += 2;
  else if (f.startWhen.startsWith("In 2–3")) score += 1;
  if (f.goal && f.goal !== "Just exploring") score += 2;
  if (f.email) score += 1;
  if (score >= 5) return "🔥 HOT";
  if (score >= 3) return "🟡 WARM";
  return "🔵 COLD";
}

const inputBase =
  "w-full py-3 bg-[#FFFFFF] border rounded-xl text-sm text-[#171717] placeholder:text-[#6B6464]/60 focus:outline-none focus:border-[#6B1830] focus:ring-1 focus:ring-[#6B1830] transition-colors";

export function MetaAdsLeadForm({
  programName = "AI Full Stack Developer Pro",
  onSuccess,
  className = "",
  title = "Get Free Career Counselling",
  subtitle = "Share a few details — our mentor will personally reach out to you on WhatsApp with the right roadmap.",
}: MetaAdsLeadFormProps) {
  const [formData, setFormData] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const clean =
      name === "phone"
        ? value.replace(/\D/g, "").slice(-10)
        : name === "passingYear"
        ? value.replace(/\D/g, "").slice(0, 4)
        : value;
    setFormData((prev) => ({ ...prev, [name]: clean }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = () => {
    const err: Partial<Record<keyof FormState, string>> = {};
    if (formData.fullName.trim().length < 3) err.fullName = "Please enter your full name.";
    if (!/^[6-9]\d{9}$/.test(formData.phone)) err.phone = "Enter a valid 10-digit WhatsApp number.";
    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) err.email = "Enter a valid email address.";
    if (!formData.status) err.status = "Please select your current status.";
    if (!formData.qualification) err.qualification = "Please select your qualification.";
    if (!formData.goal) err.goal = "Please select your goal.";
    if (!formData.startWhen) err.startWhen = "Please select when you want to start.";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const getWhatsAppUrl = () => {
    const tag = getLeadTag(formData);
    const text = `*New Lead – KA Degree* ${tag}

📋 *Lead Details*
• *Name*: ${formData.fullName}
• *WhatsApp*: +91 ${formData.phone}
• *Email*: ${formData.email || "Not provided"}
• *Current Status*: ${formData.status}
• *Qualification*: ${formData.qualification}
• *Year of Passing*: ${formData.passingYear || "Not provided"}
• *City*: ${formData.city || "Not provided"}

🎯 *Intent*
• *Goal*: ${formData.goal}
• *Wants to start*: ${formData.startWhen}
• *Program*: ${programName}

Hi KA Degree, please guide me on the next steps.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const saveLead = () => {
    const tag = getLeadTag(formData);
    const notes = `Lead: ${tag} | Qualification: ${formData.qualification} | Passing year: ${
      formData.passingYear || "-"
    } | Goal: ${formData.goal} | Start: ${formData.startWhen}`;

    // 1. Google Form (backup of every lead, even if WhatsApp isn't sent)
    const data = new URLSearchParams();
    data.append("entry.1530710792", formData.fullName);
    data.append("entry.1183025170", formData.email);
    data.append("entry.2126486953", formData.phone);
    data.append("entry.188652168", formData.status);
    data.append("entry.1938494521", "Meta Ads - Free Counselling Lead");
    data.append("entry.1821951885", programName);
    data.append("entry.1775288101", formData.city || "Not Provided");
    data.append("entry.826044730", notes);

    fetch(GOOGLE_FORM_URL, {
      method: "POST",
      mode: "no-cors",
      keepalive: true,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: data.toString(),
    }).catch((err) => console.error("Google Form lead error", err));

    // 2. Backend lead endpoint (ignored if not running)
    fetch("/api/leads", {
      method: "POST",
      keepalive: true,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        program: programName,
        notes,
      }),
    }).catch(() => {});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    saveLead();
    // Open WhatsApp directly inside the click handler so browsers don't block the popup
    window.open(getWhatsAppUrl(), "_blank", "noopener,noreferrer");
    setSubmitted(true);
    if (onSuccess) onSuccess();
  };

  const borderFor = (field: keyof FormState) =>
    errors[field] ? "border-red-400" : "border-[#DDD7CC]";

  const FieldError = ({ field }: { field: keyof FormState }) =>
    errors[field] ? (
      <p className="text-[11px] text-red-600 mt-1 font-medium">{errors[field]}</p>
    ) : null;

  const Label = ({ children, required }: { children: React.ReactNode; required?: boolean }) => (
    <label className="block text-xs font-bold uppercase text-[#171717] mb-1 font-mono">
      {children} {required && <span className="text-red-500">*</span>}
    </label>
  );

  return (
    <div
      className={`bg-[#FFFFFF] rounded-3xl border border-[#DDD7CC] p-6 sm:p-8 shadow-xl relative overflow-hidden ${className}`}
    >
      {/* Decorative gradient header bar */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#6B1830] via-amber-500 to-[#8B2945]" />

      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {/* Header Badge & Title */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6B1830]/10 text-[#6B1830] text-xs font-bold font-mono uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  1-on-1 Mentor Call
                </span>
                <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">
                  100% Free
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#171717] leading-tight">
                {title}
              </h3>
              <p className="text-xs sm:text-sm text-[#6B6464] mt-1.5 leading-relaxed">
                {subtitle}
              </p>
            </div>

            {/* Value Callout Banner */}
            <div className="bg-[#F7F4EE] border border-[#DDD7CC] rounded-2xl p-4 mb-6 grid grid-cols-3 gap-2 text-center">
              <div>
                <span className="block text-lg sm:text-xl font-bold font-serif text-[#6B1830]">5,000+</span>
                <span className="text-[10px] font-mono text-[#6B6464] uppercase">Students Guided</span>
              </div>
              <div className="border-x border-[#DDD7CC]">
                <span className="block text-lg sm:text-xl font-bold font-serif text-[#6B1830]">300+</span>
                <span className="text-[10px] font-mono text-[#6B6464] uppercase">Workshops</span>
              </div>
              <div>
                <span className="block text-lg sm:text-xl font-bold font-serif text-[#6B1830]">24 hrs</span>
                <span className="text-[10px] font-mono text-[#6B6464] uppercase">Callback</span>
              </div>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Full Name */}
              <div>
                <Label required>Full Name</Label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#6B6464] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className={`${inputBase} pl-10 pr-4 ${borderFor("fullName")}`}
                  />
                </div>
                <FieldError field="fullName" />
              </div>

              {/* WhatsApp + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label required>WhatsApp Number</Label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#6B6464] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <span className="absolute left-9 top-1/2 -translate-y-1/2 text-sm text-[#6B6464]">+91</span>
                    <input
                      type="tel"
                      name="phone"
                      inputMode="numeric"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="98765 43210"
                      className={`${inputBase} pl-[4.25rem] pr-4 ${borderFor("phone")}`}
                    />
                  </div>
                  <FieldError field="phone" />
                </div>

                <div>
                  <Label>Email Address</Label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#6B6464] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="rahul@example.com"
                      className={`${inputBase} pl-10 pr-4 ${borderFor("email")}`}
                    />
                  </div>
                  <FieldError field="email" />
                </div>
              </div>

              {/* Current Status */}
              <div>
                <Label required>Current Status</Label>
                <div className="relative">
                  <Briefcase className="w-4 h-4 text-[#6B6464] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className={`${inputBase} pl-10 pr-4 appearance-none ${borderFor("status")} ${
                      formData.status ? "" : "text-[#6B6464]/70"
                    }`}
                  >
                    <option value="">Select your current status</option>
                    {STATUS_OPTIONS.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <FieldError field="status" />
              </div>

              {/* Qualification + Passing Year */}
              <div className="grid grid-cols-1 sm:grid-cols-[1fr_8rem] gap-4">
                <div>
                  <Label required>Qualification</Label>
                  <div className="relative">
                    <GraduationCap className="w-4 h-4 text-[#6B6464] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleChange}
                      className={`${inputBase} pl-10 pr-4 appearance-none ${borderFor("qualification")} ${
                        formData.qualification ? "" : "text-[#6B6464]/70"
                      }`}
                    >
                      <option value="">Select degree</option>
                      {QUALIFICATION_OPTIONS.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                  <FieldError field="qualification" />
                </div>

                <div>
                  <Label>Passing Year</Label>
                  <input
                    type="text"
                    name="passingYear"
                    inputMode="numeric"
                    value={formData.passingYear}
                    onChange={handleChange}
                    placeholder="2024"
                    className={`${inputBase} px-4 border-[#DDD7CC]`}
                  />
                </div>
              </div>

              {/* Goal */}
              <div>
                <Label required>What's your main goal?</Label>
                <div className="relative">
                  <Target className="w-4 h-4 text-[#6B6464] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <select
                    name="goal"
                    value={formData.goal}
                    onChange={handleChange}
                    className={`${inputBase} pl-10 pr-4 appearance-none ${borderFor("goal")} ${
                      formData.goal ? "" : "text-[#6B6464]/70"
                    }`}
                  >
                    <option value="">Select your goal</option>
                    {GOAL_OPTIONS.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <FieldError field="goal" />
              </div>

              {/* Start When + City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label required>When can you start?</Label>
                  <div className="relative">
                    <CalendarClock className="w-4 h-4 text-[#6B6464] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      name="startWhen"
                      value={formData.startWhen}
                      onChange={handleChange}
                      className={`${inputBase} pl-10 pr-4 appearance-none ${borderFor("startWhen")} ${
                        formData.startWhen ? "" : "text-[#6B6464]/70"
                      }`}
                    >
                      <option value="">Select</option>
                      {START_OPTIONS.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                  <FieldError field="startWhen" />
                </div>

                <div>
                  <Label>City</Label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-[#6B6464] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="e.g. Bengaluru"
                      className={`${inputBase} pl-10 pr-4 border-[#DDD7CC]`}
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl bg-[#6B1830] hover:bg-[#8B2945] active:scale-[0.99] text-white font-bold text-base transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 cursor-pointer mt-2 group"
              >
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white shrink-0">
                  <WhatsAppIcon className="w-[18px] h-[18px] fill-[#25D366]" />
                </span>
                <span>Get Free Counselling on WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            {/* Footer Trust Callouts */}
            <div className="mt-5 pt-4 border-t border-[#DDD7CC]/70 flex items-center justify-between text-[11px] text-[#6B6464]">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Your details stay private
              </span>
              <span className="flex items-center gap-1 font-mono">
                <Clock className="w-3.5 h-3.5 text-[#6B1830]" />
                Reply within 24 hrs
              </span>
            </div>
          </motion.div>
        ) : (
          /* Success State */
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-6 text-center space-y-5"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10 animate-bounce" />
            </div>

            <div>
              <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold font-mono rounded-full mb-2">
                Details Received!
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#171717]">
                One last step — hit Send on WhatsApp
              </h3>
              <p className="text-sm text-[#6B6464] mt-2 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-[#171717]">{formData.fullName}</strong>! WhatsApp has opened
                with your details. Press <strong className="text-[#171717]">Send</strong> so our mentor can
                reach you faster.
              </p>
            </div>

            <div className="p-4 bg-[#F7F4EE] rounded-2xl border border-[#DDD7CC] text-left space-y-2 text-xs">
              <div className="flex justify-between border-b border-[#DDD7CC] pb-2">
                <span className="text-[#6B6464]">Name:</span>
                <span className="font-bold text-[#171717]">{formData.fullName}</span>
              </div>
              <div className="flex justify-between border-b border-[#DDD7CC] pb-2">
                <span className="text-[#6B6464]">Goal:</span>
                <span className="font-bold text-[#6B1830] text-right">{formData.goal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B6464]">Program:</span>
                <span className="font-bold text-[#171717] text-right">{programName}</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#1EBE57] text-white font-bold text-base transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white" />
                <span>WhatsApp didn't open? Tap here</span>
              </a>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-xs text-[#6B6464] hover:text-[#171717] underline font-mono block mx-auto pt-1"
              >
                Edit form details
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
