"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

type FormState = {
  name: string; email: string; phone: string; service: string; message: string;
};

const initialForm: FormState = { name: "", email: "", phone: "", service: "", message: "" };

const services = [
  "Pediatric & Adolescent Care",
  "Adult ADHD Strategy",
  "Integrative Medication Management",
  "Not sure — I'd like guidance",
];

// Floating label input component
function FloatingInput({
  id, name, type = "text", value, required, onChange,
}: {
  id: string; name: string; type?: string; value: string;
  required?: boolean; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const [focused, setFocused] = useState(false);
  const floated = focused || value.length > 0;
  const labelText: Record<string, string> = {
    name: "Full Name", email: "Email Address", phone: "Phone (optional)",
  };

  return (
    <div className="jj-input-group">
      <label
        htmlFor={id}
        className={`jj-floating-label ${floated ? "floating" : ""} ${focused ? "active" : ""}`}
      >
        {labelText[name]}{required && !floated ? "" : ""}
      </label>
      <input
        id={id} name={name} type={type} required={required}
        className="jj-input" value={value} onChange={onChange}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        autoComplete="off"
      />
    </div>
  );
}

function FloatingTextarea({
  id, name, value, required, onChange,
}: {
  id: string; name: string; value: string;
  required?: boolean; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  const [focused, setFocused] = useState(false);
  const floated = focused || value.length > 0;

  return (
    <div className="jj-input-group">
      <label
        htmlFor={id}
        className={`jj-floating-label ${floated ? "floating" : ""} ${focused ? "active" : ""}`}
      >
        Tell Us About Yourself{required ? "" : ""}
      </label>
      <textarea
        id={id} name={name} required={required} rows={5}
        className="jj-textarea" value={value} onChange={onChange}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
      />
    </div>
  );
}

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ background: "var(--jj-alabaster)" }}
    >
      {/* Ambient gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 12% 55%, rgba(141,170,145,0.07) 0%, transparent 52%), radial-gradient(ellipse at 88% 25%, rgba(196,164,107,0.05) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[42%_58%] gap-16 lg:gap-20">

          {/* ── Left: Info ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col justify-center"
          >
            <motion.div variants={fadeUp} className="section-label mb-8">
              Get in Touch
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="leading-[1.12] tracking-[-0.022em] mb-7"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                color: "var(--jj-charcoal)",
                fontSize: "clamp(1.9rem, 3.2vw, 2.8rem)",
              }}
            >
              Begin Your Path to{" "}
              <em style={{ fontStyle: "italic", color: "var(--jj-sage)" }}>Clarity</em>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-[0.95rem] leading-[1.85] mb-10"
              style={{ color: "var(--jj-stone)", fontFamily: "var(--font-inter), sans-serif", fontWeight: 300 }}
            >
              Whether you&apos;re seeking a first evaluation or refining an existing
              care plan, we welcome you. Share a little about yourself and
              we&apos;ll be in touch within one business day.
            </motion.p>

            {/* Info points */}
            <motion.div variants={fadeUp} className="flex flex-col gap-5 mb-10">
              {[
                { label: "Response Time", value: "Within 1 business day" },
                { label: "Location", value: "Northern Virginia" },
                { label: "Telehealth", value: "Available statewide (VA)" },
              ].map((item, i) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div
                    className="w-4 h-[1px] flex-shrink-0 mt-[0.65rem]"
                    style={{ background: i === 1 ? "var(--jj-gold)" : "var(--jj-sage)" }}
                  />
                  <div>
                    <p
                      className="text-[0.6rem] tracking-[0.2em] uppercase mb-0.5"
                      style={{ color: i === 1 ? "var(--jj-gold)" : "var(--jj-sage)" }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-[0.9rem]"
                      style={{ color: "var(--jj-charcoal)", fontFamily: "var(--font-inter), sans-serif", fontWeight: 400 }}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Patient Portal card */}
            <motion.div
              variants={fadeUp}
              className="p-6"
              style={{
                background: "var(--jj-cream)",
                border: "1px solid rgba(196,164,107,0.2)",
                borderLeft: "2px solid var(--jj-gold)",
              }}
            >
              <p
                className="text-[0.6rem] tracking-[0.22em] uppercase mb-2"
                style={{ color: "var(--jj-gold)" }}
              >
                Existing Patients
              </p>
              <p
                className="text-[0.87rem] leading-relaxed mb-4"
                style={{ color: "var(--jj-stone)", fontFamily: "var(--font-inter), sans-serif", fontWeight: 300 }}
              >
                Secure access to your records, messaging, and appointments is
                coming soon through our integrated patient portal.
              </p>
              <span className="portal-btn inline-flex">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ opacity: 0.6 }}>
                  <rect x="0.5" y="3" width="12" height="9.5" rx="1" stroke="currentColor" strokeWidth="1" />
                  <path d="M4 3V2a2.5 2.5 0 0 1 5 0v1" stroke="currentColor" strokeWidth="1" />
                </svg>
                <span>Patient Portal (Coming Soon)</span>
              </span>
            </motion.div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.95, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -12 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-8"
                >
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <FloatingInput id="name" name="name" value={form.name} required onChange={handleChange} />
                    <FloatingInput id="email" name="email" type="email" value={form.email} required onChange={handleChange} />
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <FloatingInput id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} />

                    {/* Service select */}
                    <div className="jj-input-group">
                      <label
                        htmlFor="service"
                        className={`jj-floating-label ${form.service ? "floating" : ""}`}
                        style={{ color: form.service ? "var(--jj-sage)" : undefined }}
                      >
                        Area of Interest
                      </label>
                      <select
                        id="service" name="service"
                        className="jj-input"
                        value={form.service}
                        onChange={handleChange}
                        style={{ color: form.service ? "var(--jj-charcoal)" : "transparent" }}
                      >
                        <option value="" disabled />
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <FloatingTextarea id="message" name="message" value={form.message} required onChange={handleChange} />

                  {/* Disclaimer */}
                  <p
                    className="text-[0.78rem] leading-relaxed"
                    style={{ color: "var(--jj-stone)", fontFamily: "var(--font-inter), sans-serif", fontWeight: 300, opacity: 0.7 }}
                  >
                    This form is not a crisis line. If you are experiencing a psychiatric
                    emergency, please call <strong style={{ fontWeight: 500 }}>988</strong> or go to your nearest emergency room.
                  </p>

                  <motion.button
                    type="submit"
                    className="cta-primary self-start"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <span>Send Message</span>
                    <span style={{ opacity: 0.65 }}>→</span>
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-start justify-center min-h-[440px] gap-6"
                >
                  {/* Check circle */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 20 }}
                    className="w-14 h-14 flex items-center justify-center"
                    style={{ border: "1px solid var(--jj-sage)", borderRadius: "50%" }}
                  >
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" style={{ color: "var(--jj-sage)" }}>
                      <motion.path
                        d="M4 11l6 6 8-8"
                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                      />
                    </svg>
                  </motion.div>

                  <div>
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="text-2xl mb-3"
                      style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--jj-charcoal)" }}
                    >
                      Thank you, {form.name.split(" ")[0]}.
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.55, duration: 0.6 }}
                      className="text-[0.95rem] leading-relaxed max-w-sm"
                      style={{ color: "var(--jj-stone)", fontFamily: "var(--font-inter), sans-serif", fontWeight: 300 }}
                    >
                      Your message has been received. We&apos;ll be in touch within
                      one business day to schedule your consultation.
                    </motion.p>
                  </div>

                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.7, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    style={{ width: 48, height: 1, background: "linear-gradient(90deg, var(--jj-sage), var(--jj-gold))", transformOrigin: "left" }}
                  />

                  <button
                    onClick={() => { setSubmitted(false); setForm(initialForm); }}
                    className="cta-secondary"
                  >
                    <span>Send Another Message</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
