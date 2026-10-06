import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  GraduationCap,
  Sparkles,
  Lock,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Clock,
  Zap,
} from "lucide-react";

interface MetaAdsLeadFormProps {
  programName?: string;
  slotPrice?: number;
  paymentLink?: string;
  onSuccess?: () => void;
  className?: string;
  title?: string;
  subtitle?: string;
}

export function MetaAdsLeadForm({
  programName = "AI Full Stack Developer Pro",
  slotPrice = 500,
  paymentLink = "https://rzp.io/rzp/vvONUeGp",
  onSuccess,
  className = "",
  title = "Book Your Slot — ₹500 Advance",
  subtitle = "Lock your special 70% off discount & reserve your seat in the upcoming live cohort.",
}: MetaAdsLeadFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    status: "College Student (B.E / B.Tech / BCA / MCA)",
    city: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Generate WhatsApp message URL with applicant details
  const whatsappNumber = "917975902348";
  const getWhatsAppUrl = () => {
    const text = `Hi KA Degree! I have registered to book my slot for ${programName}.

📋 *Applicant Details*:
• *Name*: ${formData.fullName}
• *Email*: ${formData.email}
• *Phone*: ${formData.phone}
• *Status/Role*: ${formData.status}
• *City*: ${formData.city || "Not Provided"}
• *Slot Advance Fee*: ₹${slotPrice}

Please confirm my seat reservation & ₹${slotPrice} payment.`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Basic Validation
    if (!formData.fullName.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 10) {
      setErrorMessage("Please enter a valid 10-digit phone number.");
      return;
    }

    setSubmitting(true);

    try {
      // 1. Submit lead to Google Forms endpoint
      const urlEncodedData = new URLSearchParams();
      urlEncodedData.append("entry.1530710792", formData.fullName);
      urlEncodedData.append("entry.1183025170", formData.email);
      urlEncodedData.append("entry.2126486953", formData.phone);
      urlEncodedData.append("entry.188652168", formData.status);
      urlEncodedData.append("entry.1938494521", "Meta Ads Offer - ₹500 Slot Reservation");
      urlEncodedData.append("entry.1821951885", programName);
      urlEncodedData.append("entry.1775288101", formData.city || "Not Provided");
      urlEncodedData.append(
        "entry.826044730",
        `Meta Ads Booking: User submitted form to book slot for ₹${slotPrice}. Redirecting to Razorpay & WhatsApp.`
      );

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

      // 2. Also attempt backend lead submission if API route is active
      try {
        await fetch("/api/leads", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            full_name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            program: programName,
            notes: `Meta Ads lead - ₹${slotPrice} slot booking`,
          }),
        });
      } catch (err) {
        // Ignore silent backend lead endpoint errors if backend isn't running
      }

      setSubmitted(true);
      if (onSuccess) onSuccess();

      // Automatically open WhatsApp with prefilled details and Razorpay link after short delay
      setTimeout(() => {
        window.open(getWhatsAppUrl(), "_blank", "noopener,noreferrer");
        setTimeout(() => {
          window.open(paymentLink, "_blank", "noopener,noreferrer");
        }, 500);
      }, 1000);
    } catch (err) {
      console.error("Meta Ads lead submission error", err);
      setSubmitted(true);
      setTimeout(() => {
        window.open(getWhatsAppUrl(), "_blank", "noopener,noreferrer");
        setTimeout(() => {
          window.open(paymentLink, "_blank", "noopener,noreferrer");
        }, 500);
      }, 1000);
    } finally {
      setSubmitting(false);
    }
  };

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
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6B1830]/10 text-[#6B1830] text-xs font-bold font-mono uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  Meta Ads Special • Fast Track
                </span>
                <span className="text-[11px] font-mono font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded border border-amber-300">
                  Save ₹35,000
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#171717] leading-tight">
                {title}
              </h3>
              <p className="text-xs sm:text-sm text-[#6B6464] mt-1.5 leading-relaxed">
                {subtitle}
              </p>
            </div>

            {/* Price Callout Banner */}
            <div className="bg-[#F7F4EE] border border-[#DDD7CC] rounded-2xl p-4 mb-6 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono text-[#6B6464] uppercase block">
                  Slot Booking Fee
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-bold font-serif text-[#6B1830]">
                    ₹{slotPrice}
                  </span>
                  <span className="text-xs text-[#6B6464] line-through font-mono">
                    ₹14,999
                  </span>
                  <span className="text-[10px] text-emerald-700 font-bold uppercase bg-emerald-100 px-1.5 py-0.5 rounded">
                    Advance Lock
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-[#6B1830] font-mono font-bold block">
                  ⚡ 12 Seats Left
                </span>
                <span className="text-[11px] text-[#6B6464] font-mono">
                  100% Refund Guarantee
                </span>
              </div>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                {errorMessage}
              </div>
            )}

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold uppercase text-[#171717] mb-1 font-mono">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#6B6464] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full pl-10 pr-4 py-3 bg-[#FFFFFF] border border-[#DDD7CC] rounded-xl text-sm text-[#171717] placeholder:text-[#6B6464]/60 focus:outline-none focus:border-[#6B1830] focus:ring-1 focus:ring-[#6B1830] transition-colors"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold uppercase text-[#171717] mb-1 font-mono">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#6B6464] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="rahul@example.com"
                    className="w-full pl-10 pr-4 py-3 bg-[#FFFFFF] border border-[#DDD7CC] rounded-xl text-sm text-[#171717] placeholder:text-[#6B6464]/60 focus:outline-none focus:border-[#6B1830] focus:ring-1 focus:ring-[#6B1830] transition-colors"
                  />
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="block text-xs font-bold uppercase text-[#171717] mb-1 font-mono">
                  WhatsApp / Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#6B6464] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full pl-10 pr-4 py-3 bg-[#FFFFFF] border border-[#DDD7CC] rounded-xl text-sm text-[#171717] placeholder:text-[#6B6464]/60 focus:outline-none focus:border-[#6B1830] focus:ring-1 focus:ring-[#6B1830] transition-colors"
                  />
                </div>
              </div>

              {/* Current Status */}
              <div>
                <label className="block text-xs font-bold uppercase text-[#171717] mb-1 font-mono">
                  Current Qualification / Role
                </label>
                <div className="relative">
                  <GraduationCap className="w-4 h-4 text-[#6B6464] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-[#FFFFFF] border border-[#DDD7CC] rounded-xl text-sm text-[#171717] focus:outline-none focus:border-[#6B1830] focus:ring-1 focus:ring-[#6B1830] transition-colors appearance-none"
                  >
                    <option value="College Student (B.E / B.Tech / BCA / MCA)">
                      College Student (B.E / B.Tech / BCA / MCA)
                    </option>
                    <option value="Working Professional / Developer">
                      Working Professional / Developer
                    </option>
                    <option value="Fresh Graduate / Job Seeker">
                      Fresh Graduate / Job Seeker
                    </option>
                    <option value="Non-Tech Switcher">Non-Tech Switcher</option>
                  </select>
                </div>
              </div>

              {/* City / Location */}
              <div>
                <label className="block text-xs font-bold uppercase text-[#171717] mb-1 font-mono">
                  City / Location
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="e.g. Bangalore, Hyderabad, Remote"
                  className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#DDD7CC] rounded-xl text-sm text-[#171717] placeholder:text-[#6B6464]/60 focus:outline-none focus:border-[#6B1830] focus:ring-1 focus:ring-[#6B1830] transition-colors"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 px-6 rounded-xl bg-[#6B1830] hover:bg-[#8B2945] active:scale-[0.99] text-white font-bold text-base transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 disabled:opacity-70 cursor-pointer mt-2 group"
              >
                {submitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Submitting Lead...
                  </span>
                ) : (
                  <>
                    <Lock className="w-4 h-4 text-amber-300" />
                    <span>Pay ₹{slotPrice} & Book Your Slot</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            {/* Footer Trust Callouts */}
            <div className="mt-5 pt-4 border-t border-[#DDD7CC]/70 flex items-center justify-between text-[11px] text-[#6B6464]">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Razorpay SSL Secured
              </span>
              <span className="flex items-center gap-1 font-mono">
                <Clock className="w-3.5 h-3.5 text-[#6B1830]" />
                Instant Seat Lock
              </span>
            </div>
          </motion.div>
        ) : (
          /* Success State & Payment Redirection */
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
                Lead Registered Successfully!
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#171717]">
                Complete ₹{slotPrice} Payment
              </h3>
              <p className="text-sm text-[#6B6464] mt-2 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-[#171717]">{formData.fullName}</strong>! You are being redirected to Razorpay to complete your ₹{slotPrice} slot booking payment.
              </p>
            </div>

            <div className="p-4 bg-[#F7F4EE] rounded-2xl border border-[#DDD7CC] text-left space-y-2 text-xs">
              <div className="flex justify-between border-b border-[#DDD7CC] pb-2">
                <span className="text-[#6B6464]">Applicant:</span>
                <span className="font-bold text-[#171717]">{formData.fullName}</span>
              </div>
              <div className="flex justify-between border-b border-[#DDD7CC] pb-2">
                <span className="text-[#6B6464]">Program:</span>
                <span className="font-bold text-[#6B1830]">{programName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B6464]">Slot Advance:</span>
                <span className="font-bold font-mono text-[#171717]">₹{slotPrice}</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <a
                href={paymentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl bg-[#6B1830] hover:bg-[#8B2945] text-white font-bold text-base transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Proceed to Razorpay Payment (₹{slotPrice})</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#1EBE57] text-white font-bold text-sm transition-all duration-200 shadow-md flex items-center justify-center gap-2 group cursor-pointer"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>Send Booking Details to WhatsApp</span>
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
