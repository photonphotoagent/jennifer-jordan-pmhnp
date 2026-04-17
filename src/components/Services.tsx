"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const services = [
  {
    num: "01",
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="9.5" r="5.5" stroke="currentColor" strokeWidth="1" />
        <path d="M4 26c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <circle cx="7" cy="12" r="3.5" stroke="currentColor" strokeWidth="1" />
        <path d="M1 24c0-3.314 2.686-6 6-6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    title: "Pediatric & Adolescent Care",
    description:
      "Developmentally sensitive psychiatric evaluation for children and teens navigating ADHD, anxiety, and mood challenges. We partner with families to build integrated care plans that support the whole child.",
    tags: ["Ages 6–17", "Family Involvement", "School Coordination"],
    accent: "var(--jj-sage)",
    accentHex: "#8DAA91",
  },
  {
    num: "02",
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="22" height="22" rx="2" stroke="currentColor" strokeWidth="1" />
        <path d="M9 14h10M14 9v10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path d="M8 8l1.5 1.5M20 8l-1.5 1.5M8 20l1.5-1.5M20 20l-1.5-1.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    title: "Adult ADHD Strategy",
    description:
      "Comprehensive ADHD assessment and individualized management for adults. From diagnostic clarity to executive function strategies, we help you build systems that work with your neurodivergent strengths.",
    tags: ["Comprehensive Eval", "Executive Coaching", "Medication Review"],
    accent: "var(--jj-gold)",
    accentHex: "#C4A46B",
  },
  {
    num: "03",
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
        <path d="M14 3C8 3 3 8 3 14s5 11 11 11 11-5 11-11S20 3 14 3z" stroke="currentColor" strokeWidth="1" />
        <path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path d="M8 14a6 6 0 0 1 6-6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <circle cx="14" cy="14" r="2" fill="currentColor" />
      </svg>
    ),
    title: "Integrative Medication Management",
    description:
      "Evidence-based psychopharmacology woven into a holistic understanding of your life story. Ongoing optimization, lifestyle integration, and collaborative monitoring for mood disorders and beyond.",
    tags: ["Mood Disorders", "Ongoing Monitoring", "Holistic Integration"],
    accent: "var(--jj-sage-deep)",
    accentHex: "#5C7A60",
  },
];

function ServiceBand({
  service,
  index,
  isInView,
}: {
  service: (typeof services)[0];
  index: number;
  isInView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.14, ease: [0.16, 1, 0.3, 1] }}
      className="relative group"
      style={{ borderBottom: "1px solid rgba(141,170,145,0.16)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Hover background */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(ellipse at 0% 50%, ${service.accentHex}08 0%, transparent 65%)`,
        }}
      />

      {/* Left accent bar */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-[2px]"
        animate={{ scaleY: hovered ? 1 : 0 }}
        transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
        style={{ background: service.accent, transformOrigin: "top" }}
      />

      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-10 md:py-12 grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-6 md:gap-12 items-center relative z-10">

        {/* Number */}
        <div
          className="hidden md:block text-[4.5rem] leading-none font-light select-none transition-colors duration-400"
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            color: hovered ? `${service.accentHex}30` : "rgba(141,170,145,0.12)",
            letterSpacing: "-0.04em",
            minWidth: "5rem",
            transition: "color 0.4s ease",
          }}
        >
          {service.num}
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-3">
              <span style={{ color: service.accent, transition: "color 0.3s ease" }}>
                {service.icon}
              </span>
              <h3
                className="leading-snug"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  color: "var(--jj-charcoal)",
                  fontSize: "clamp(1.05rem, 1.5vw, 1.3rem)",
                  letterSpacing: "-0.01em",
                }}
              >
                {service.title}
              </h3>
            </div>
            <p
              className="text-[0.88rem] leading-[1.82] max-w-prose"
              style={{ color: "var(--jj-stone)", fontFamily: "var(--font-inter), sans-serif", fontWeight: 300 }}
            >
              {service.description}
            </p>
          </div>

          {/* Tags + CTA */}
          <div className="flex flex-col gap-2 md:w-44 md:items-end justify-center">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="text-[0.55rem] tracking-[0.16em] uppercase px-2.5 py-1"
                style={{
                  color: service.accent,
                  border: `1px solid ${service.accentHex}35`,
                  background: `${service.accentHex}06`,
                  width: "fit-content",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <AnimatePresence>
          {hovered && (
            <motion.span
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 4 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="hidden md:block text-sm"
              style={{ color: service.accent }}
            >
              →
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      ref={ref}
      id="services"
      className="relative"
      style={{ background: "var(--jj-alabaster)" }}
    >
      {/* Ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 95% 50%, rgba(196,164,107,0.05) 0%, transparent 55%)",
        }}
      />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-8 lg:px-12 pt-24 md:pt-36 pb-12 md:pb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="section-label mb-6"
            >
              Areas of Expertise
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="leading-[1.1] tracking-[-0.025em]"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                color: "var(--jj-charcoal)",
                fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
              }}
            >
              Specialized Care,{" "}
              <em style={{ fontStyle: "italic", color: "var(--jj-sage)" }}>
                Individualized
              </em>{" "}
              to You
            </motion.h2>
          </div>

          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.38 }}
            className="cta-secondary self-start md:self-end"
          >
            <span>Schedule a Consultation</span>
          </motion.a>
        </div>
      </div>

      {/* Service bands */}
      <div style={{ borderTop: "1px solid rgba(141,170,145,0.16)" }}>
        {services.map((service, i) => (
          <ServiceBand key={service.num} service={service} index={i} isInView={isInView} />
        ))}
      </div>

      {/* Footer note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="max-w-7xl mx-auto px-8 lg:px-12 py-10 flex items-center gap-4"
      >
        <div className="w-6 h-[1px]" style={{ background: "var(--jj-sage)" }} />
        <p
          className="text-[0.82rem]"
          style={{ color: "var(--jj-stone)", fontFamily: "var(--font-inter), sans-serif", fontWeight: 300 }}
        >
          Not sure which service fits?{" "}
          <a
            href="#contact"
            className="transition-colors duration-300"
            style={{ color: "var(--jj-charcoal)", borderBottom: "1px solid rgba(45,52,54,0.25)" }}
          >
            Schedule a free discovery call
          </a>
        </p>
      </motion.div>
    </section>
  );
}
