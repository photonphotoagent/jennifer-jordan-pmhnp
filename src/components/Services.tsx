"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.85, delay: i * 0.13, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const services = [
  {
    num: "01",
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="9.5" r="5.5" stroke="currentColor" strokeWidth="1" />
        <path d="M4 26c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <circle cx="7" cy="12" r="3.5" stroke="currentColor" strokeWidth="1" />
        <path d="M1 24c0-3.314 2.686-6 6-6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    title: "Pediatric & Adolescent Care",
    description: "Developmentally sensitive psychiatric evaluation for children and teens navigating ADHD, anxiety, and mood challenges. We partner with families to build integrated care plans that support the whole child.",
    tags: ["Ages 6–17", "Family Involvement", "School Coordination"],
    accent: "var(--jj-sage)",
  },
  {
    num: "02",
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="22" height="22" rx="2" stroke="currentColor" strokeWidth="1" />
        <path d="M9 14h10M14 9v10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path d="M8 8l1.5 1.5M20 8l-1.5 1.5M8 20l1.5-1.5M20 20l-1.5-1.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    title: "Adult ADHD Strategy",
    description: "Comprehensive ADHD assessment and individualized management for adults. From diagnostic clarity to executive function strategies, we help you build systems that work with your neurodivergent strengths.",
    tags: ["Comprehensive Eval", "Executive Coaching", "Medication Review"],
    accent: "var(--jj-gold)",
  },
  {
    num: "03",
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M14 3C8 3 3 8 3 14s5 11 11 11 11-5 11-11S20 3 14 3z" stroke="currentColor" strokeWidth="1" />
        <path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path d="M8 14a6 6 0 0 1 6-6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <circle cx="14" cy="14" r="2" fill="currentColor" />
      </svg>
    ),
    title: "Integrative Medication Management",
    description: "Evidence-based psychopharmacology woven into a holistic understanding of your life story. Ongoing optimization, lifestyle integration, and collaborative monitoring for mood disorders and beyond.",
    tags: ["Mood Disorders", "Ongoing Monitoring", "Holistic Integration"],
    accent: "var(--jj-sage-deep)",
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      ref={ref}
      id="services"
      className="relative py-24 md:py-36"
      style={{ background: "var(--jj-alabaster)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center text-center mb-16 md:mb-20"
        >
          <motion.div variants={fadeUp} className="section-label justify-center mb-8">
            Areas of Expertise
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="leading-[1.1] tracking-[-0.025em] max-w-xl"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              color: "var(--jj-charcoal)",
              fontSize: "clamp(2rem, 3.8vw, 3.5rem)",
            }}
          >
            Specialized Care,{" "}
            <em style={{ fontStyle: "italic", color: "var(--jj-sage)" }}>
              Individualized
            </em>{" "}
            to You
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="flex items-center gap-2 mt-6"
          >
            <div className="w-8 h-[1px]" style={{ background: "var(--jj-sage-border)" }} />
            <div className="w-2 h-[1px]" style={{ background: "var(--jj-gold)" }} />
          </motion.div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "rgba(141,170,145,0.12)" }}>
          {services.map((service, i) => (
            <motion.div
              key={service.num}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="service-card"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 280, damping: 24 }}
            >
              {/* Number */}
              <motion.div
                className="text-[3.2rem] leading-none mb-6 font-light"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  color: "rgba(141,170,145,0.18)",
                  letterSpacing: "-0.05em",
                  transition: "color 0.4s ease",
                }}
                whileHover={{ color: service.accent }}
              >
                {service.num}
              </motion.div>

              {/* Icon */}
              <motion.div
                className="mb-5"
                style={{ color: service.accent }}
                whileHover={{ scale: 1.1, rotate: 3 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                {service.icon}
              </motion.div>

              {/* Title */}
              <h3
                className="leading-snug mb-4"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  color: "var(--jj-charcoal)",
                  fontSize: "clamp(1.1rem, 1.6vw, 1.35rem)",
                  letterSpacing: "-0.01em",
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="text-[0.87rem] leading-[1.8] mb-8"
                style={{ color: "var(--jj-stone)", fontFamily: "var(--font-inter), sans-serif", fontWeight: 300 }}
              >
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[0.58rem] tracking-[0.16em] uppercase px-3 py-1.5"
                    style={{
                      color: service.accent,
                      border: `1px solid ${service.accent}40`,
                      background: `${service.accent}08`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-14"
        >
          <p
            className="text-[0.88rem]"
            style={{ color: "var(--jj-stone)", fontFamily: "var(--font-inter), sans-serif", fontWeight: 300 }}
          >
            Not sure which service is right for you?
          </p>
          <a href="#contact" className="cta-secondary">
            <span>Schedule a Free Discovery Call</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
