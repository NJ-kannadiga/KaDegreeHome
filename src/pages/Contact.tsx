import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useState } from "react";

// --- Google Form Configuration ---
const GOOGLE_FORM_ACTION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSew53F2YEJhjft_pd60mUFFxj_vy_2fT_rXLguPhNAx8DKmUg/formResponse";

const ENTRY_IDS = {
  NAME: "entry.1530710792",
  EMAIL: "entry.1183025170",
  PHONE: "entry.2126486953",
  WHATSAPP: "entry.188652168",
  MESSAGE: "entry.1938494521",
  COURSE: "entry.826044730",
};

/* ── fade-up animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: (i as number) * 0.12, ease: "easeOut" as const },
  }),
};

/* ── Shared input styles ── */
const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid rgba(253,252,240,0.3)",
  padding: "8px 0",
  fontSize: "16px",
  lineHeight: "24px",
  color: "#FDFCF0",
  outline: "none",
  borderRadius: 0,
  transition: "border-color 0.3s",
  fontFamily: '"Source Sans 3", sans-serif',
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "12px",
  fontWeight: 600,
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  color: "rgba(253,252,240,0.6)",
  marginBottom: "8px",
  fontFamily: '"Source Sans 3", sans-serif',
};

function handleFocus(e: React.FocusEvent<HTMLInputElement>) {
  e.currentTarget.style.borderBottomColor = "#a2d1b7";
}
function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
  e.currentTarget.style.borderBottomColor = "rgba(253,252,240,0.3)";
}

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "submitted">("idle");

  const handleSubmit = (_e: React.FormEvent) => {
    setFormStatus("submitting");
    setTimeout(() => setFormStatus("submitted"), 2000);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: '"Source Sans 3", sans-serif',
        backgroundColor: "#fbfaee",
        color: "#1b1c15",
      }}
    >
      {/* Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap"
      />

      {/* Hidden iframe for Google Form */}
      <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: "none" }} title="hidden_iframe" />

      <Navbar />

      {/* ═══════════════════════
          HERO — Warm Ivory
      ═══════════════════════ */}
      <section
        style={{ backgroundColor: "#fbfaee", position: "relative", zIndex: 10, padding: "clamp(140px, 15vw, 160px) 40px 96px" }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "24px",
            alignItems: "center",
          }}
        >
          {/* Text — cols 2-9 */}
          <motion.div
            style={{ gridColumn: "2 / 10" }}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <p
              style={{
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#3b6751",
                marginBottom: "16px",
                fontFamily: '"Source Sans 3", sans-serif',
              }}
            >
              Connect With Us
            </p>
            <h1
              style={{
                fontFamily: '"Libre Caslon Text", serif',
                fontSize: "clamp(40px, 6vw, 64px)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                fontWeight: 400,
                color: "#1A1A1A",
                marginBottom: "32px",
              }}
            >
              Get in Touch.
            </h1>
            <p
              style={{
                fontSize: "18px",
                lineHeight: "28px",
                color: "#584141",
                maxWidth: "75%",
                fontFamily: '"Source Sans 3", sans-serif',
              }}
            >
              Whether you&apos;re a student, a parent, or an industry professional, we&apos;re here to
              answer your questions and guide you toward excellence.
            </p>
          </motion.div>

          {/* Editorial image — cols 10-12 */}
          <motion.div
            style={{ gridColumn: "10 / 13" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <div
              style={{
                height: "256px",
                border: "1px solid rgba(26,26,26,0.2)",
                padding: "8px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAuocxlFE-_tDQsPtII7vmmgdlZpwiGTvpTWgw70Sc0n8jK5CZBtl0HG1JwwlVEICmTqCZmlSn8kfy9i3mDNKUZZib5IdYgT6tJVhb2VWYF3ZW03hlbLe1V5IXjRDwSG2oqkbjOkac7OPDzNX7F-RmQWCjlQVKT5uvTcsNc22hvv0ebud1A2_7luQTKx7GG7KJdR8IBm8lrdGQzw-hwM_YXYXQgWbnVmUDOcEtFtrmtLCKuQyQZRjze')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "grayscale(100%)",
                  opacity: 0.8,
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════
          CONTACT INFO — Burgundy + Diagonal
      ═══════════════════════════════ */}
      <section
        style={{
          backgroundColor: "#800020",
          color: "#FDFCF0",
          position: "relative",
          zIndex: 20,
          clipPath: "polygon(0 0, 100% 5vw, 100% 100%, 0 100%)",
          marginTop: "-5vw",
          paddingTop: "calc(5vw + 80px)",
          paddingBottom: "100px",
          paddingLeft: "40px",
          paddingRight: "40px",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "24px",
          }}
        >
          {/* Left */}
          <motion.div
            style={{ gridColumn: "2 / 6" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2
              style={{
                fontFamily: '"Libre Caslon Text", serif',
                fontSize: "clamp(28px, 4vw, 40px)",
                lineHeight: "48px",
                fontWeight: 400,
                marginBottom: "24px",
              }}
            >
              Reach Out Directly.
            </h2>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                color: "rgba(253,252,240,0.8)",
                borderLeft: "1px solid rgba(253,252,240,0.3)",
                paddingLeft: "16px",
                marginBottom: "32px",
                fontFamily: '"Source Sans 3", sans-serif',
              }}
            >
              Our support team and admissions experts are ready to assist you in your native language.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(253,252,240,0.6)" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: '"Source Sans 3", sans-serif' }}>
                We typically respond within 2–4 business hours.
              </span>
            </div>
          </motion.div>

          {/* Right — editorial contact list */}
          <motion.div
            style={{
              gridColumn: "7 / 13",
              borderLeft: "1px solid rgba(253,252,240,0.2)",
              paddingLeft: "48px",
              display: "flex",
              flexDirection: "column",
              gap: "48px",
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            {[
              {
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.37a2 2 0 0 1 1.99-2H6.6a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.29 6.29l1.84-1.84a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 15.92Z" />
                  </svg>
                ),
                label: "Phone",
                value: "+91 7975902348",
                sub: "Mon-Sat, 9am - 7pm",
              },
              {
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                ),
                label: "Email",
                value: "admissions@kadegree.com",
                sub: "24/7 Support Response",
              },
              {
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                ),
                label: "Campus",
                value: "BTM Layout, Bengaluru, Karnataka 560076",
                sub: null,
              },
            ].map((item) => (
              <motion.div
                key={item.label}
                className="group"
                style={{ cursor: "pointer" }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(253,252,240,0.5)",
                    marginBottom: "8px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontFamily: '"Source Sans 3", sans-serif',
                  }}
                >
                  {item.icon}
                  {item.label}
                </p>
                <p
                  style={{
                    fontFamily: '"Libre Caslon Text", serif',
                    fontSize: "28px",
                    lineHeight: "34px",
                    fontWeight: 400,
                    transition: "color 0.3s",
                    maxWidth: "360px",
                  }}
                >
                  {item.value}
                </p>
                {item.sub && (
                  <p style={{ fontSize: "16px", color: "rgba(253,252,240,0.7)", marginTop: "4px", fontFamily: '"Source Sans 3", sans-serif' }}>
                    {item.sub}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════
          FORM — Forest Green + Diagonal
      ═══════════════════════════════ */}
      <section
        style={{
          backgroundColor: "#013220",
          color: "#FDFCF0",
          position: "relative",
          zIndex: 30,
          clipPath: "polygon(0 5vw, 100% 0, 100% 100%, 0 100%)",
          marginTop: "-5vw",
          paddingTop: "calc(5vw + 80px)",
          paddingBottom: "120px",
          paddingLeft: "40px",
          paddingRight: "40px",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "24px",
          }}
        >
          {/* Left — intro */}
          <motion.div
            style={{ gridColumn: "2 / 7" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2
              style={{
                fontFamily: '"Libre Caslon Text", serif',
                fontSize: "clamp(28px, 4vw, 40px)",
                lineHeight: "48px",
                fontWeight: 400,
                marginBottom: "16px",
              }}
            >
              Send a Message.
            </h2>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                color: "rgba(253,252,240,0.7)",
                marginBottom: "48px",
                fontFamily: '"Source Sans 3", sans-serif',
              }}
            >
              Fill out the form below and we&apos;ll get back to you shortly.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
              <span
                style={{
                  padding: "4px 12px",
                  border: "1px solid rgba(163,209,183,0.5)",
                  color: "#a2d1b7",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  borderRadius: "2px",
                  fontFamily: '"Source Sans 3", sans-serif',
                }}
              >
                Instant Confirmation
              </span>
              <span
                style={{
                  padding: "4px 12px",
                  border: "1px solid rgba(253,252,240,0.2)",
                  color: "rgba(253,252,240,0.6)",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  borderRadius: "2px",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  fontFamily: '"Source Sans 3", sans-serif',
                }}
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                Safe &amp; Encrypted
              </span>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            style={{ gridColumn: "7 / 12" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            {formStatus === "submitted" ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ paddingTop: "40px" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    border: "1px solid rgba(163,209,183,0.5)",
                    borderRadius: "2px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "24px",
                    color: "#a2d1b7",
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: '"Libre Caslon Text", serif', fontSize: "28px", fontWeight: 400, marginBottom: "12px" }}>
                  Message Sent.
                </h3>
                <p style={{ fontSize: "16px", color: "rgba(253,252,240,0.7)", marginBottom: "32px", fontFamily: '"Source Sans 3", sans-serif' }}>
                  Thank you for reaching out. Our team will respond within 2–4 business hours.
                </p>
                <button
                  onClick={() => setFormStatus("idle")}
                  style={{
                    padding: "12px 32px",
                    backgroundColor: "#FDFCF0",
                    color: "#1A1A1A",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    border: "1px solid transparent",
                    cursor: "pointer",
                    borderRadius: "2px",
                    transition: "all 0.3s",
                    fontFamily: '"Source Sans 3", sans-serif',
                  }}
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form
                action={GOOGLE_FORM_ACTION_URL}
                method="POST"
                target="hidden_iframe"
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: "32px" }}
              >
                <input type="hidden" name={ENTRY_IDS.COURSE} value="Contact Us Page" />

                {/* Full Name */}
                <div>
                  <label htmlFor="ct-name" style={labelStyle}>Full Name</label>
                  <input id="ct-name" name={ENTRY_IDS.NAME} required placeholder="Jane Doe" style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                </div>

                {/* Email + Phone */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
                  <div>
                    <label htmlFor="ct-email" style={labelStyle}>Email Address</label>
                    <input id="ct-email" name={ENTRY_IDS.EMAIL} type="email" required placeholder="jane@example.com" style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                  </div>
                  <div>
                    <label htmlFor="ct-phone" style={labelStyle}>Phone Number</label>
                    <input id="ct-phone" name={ENTRY_IDS.PHONE} required placeholder="+91 00000 00000" style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                  </div>
                </div>

                {/* WhatsApp */}
                <div>
                  <label htmlFor="ct-whatsapp" style={labelStyle}>WhatsApp (Optional)</label>
                  <input id="ct-whatsapp" name={ENTRY_IDS.WHATSAPP} placeholder="Same as phone" style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="ct-message" style={labelStyle}>Message</label>
                  <textarea
                    id="ct-message"
                    name={ENTRY_IDS.MESSAGE}
                    required
                    placeholder="How can we help you?"
                    rows={4}
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "1px solid rgba(253,252,240,0.3)",
                      padding: "12px",
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "#FDFCF0",
                      outline: "none",
                      borderRadius: 0,
                      resize: "none",
                      transition: "border-color 0.3s",
                      fontFamily: '"Source Sans 3", sans-serif',
                    }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "#a2d1b7"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(253,252,240,0.3)"; }}
                  />
                </div>

                {/* Submit */}
                <div>
                  <motion.button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    whileHover={{ backgroundColor: "#a2d1b7", color: "#002113" }}
                    transition={{ duration: 0.2 }}
                    style={{
                      padding: "16px 32px",
                      backgroundColor: "#FDFCF0",
                      color: "#1A1A1A",
                      fontSize: "12px",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      border: "1px solid transparent",
                      cursor: formStatus === "submitting" ? "not-allowed" : "pointer",
                      opacity: formStatus === "submitting" ? 0.6 : 1,
                      borderRadius: "2px",
                      fontFamily: '"Source Sans 3", sans-serif',
                    }}
                  >
                    {formStatus === "submitting" ? "Sending…" : "Send Secure Message"}
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
