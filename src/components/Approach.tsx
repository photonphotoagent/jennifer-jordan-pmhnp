"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pillars = [
  {
    num: "01",
    title: "Biopsychosocial Framework",
    desc: "Every evaluation integrates biological, psychological, and social factors to form a complete picture of your wellbeing.",
  },
  {
    num: "02",
    title: "Trauma-Informed Practice",
    desc: "Safety and trust are the foundation. We move at your pace, honoring your story without judgment.",
  },
  {
    num: "03",
    title: "Evidence-Based Medicine",
    desc: "Clinical decisions are grounded in the latest research, thoughtfully applied to your unique presentation.",
  },
];

export default function Approach() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const pillarsRef = useRef<HTMLDivElement>(null);
  const pillarsInView = useInView(pillarsRef, { once: true, margin: "-5%" });

  return (
    <section
      ref={ref}
      id="approach"
      className="relative overflow-hidden"
      style={{ background: "var(--jj-cream)" }}
    >
      {/* Ghost character — oversized, perfectly centered */}
      <div
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden"
        style={{ zIndex: 0 }}
      >
        <span
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(24rem, 55vw, 62rem)",
            lineHeight: 1,
            color: "transparent",
            WebkitTextStroke: "1px rgba(141,170,145,0.055)",
            letterSpacing: "-0.05em",
          }}
        >
          &ldquo;
        </span>
      </div>

      {/* Amber ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 85% 15%, rgba(196,164,107,0.06) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10 pt-24 md:pt-36 pb-0">

        {/* Label — centered, semantic h2 for SEO */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="section-label justify-center mb-14"
        >
          The Approach
        </motion.h2>

        {/* Giant pull quote — centered */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
          style={{ perspective: "1000px" }}
        >
          <blockquote>
            <p
              className="leading-[1.18] tracking-[-0.02em]"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                color: "var(--jj-charcoal)",
                fontStyle: "italic",
                fontSize: "clamp(2.2rem, 5vw, 4.6rem)",
              }}
            >
              &ldquo;Treating the person,
              <br />
              <span style={{ color: "var(--jj-sage)" }}>not just the symptom.</span>&rdquo;
            </p>
          </blockquote>

          {/* Attribution */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-4 mt-7"
            style={{ transformOrigin: "center" }}
          >
            <div className="w-6 h-[1px]" style={{ background: "var(--jj-gold)" }} />
            <p
              className="text-[0.6rem] tracking-[0.24em] uppercase"
              style={{ color: "var(--jj-gold)", fontFamily: "var(--font-inter), sans-serif" }}
            >
              Jennifer Jordan, PMHNP-BC
            </p>
            <div className="w-6 h-[1px]" style={{ background: "var(--jj-gold)" }} />
          </motion.div>
        </motion.div>

        {/* Body text — narrow, centered */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.95rem] leading-[1.88] mb-5"
            style={{ color: "var(--jj-stone)", fontFamily: "var(--font-inter), sans-serif", fontWeight: 300 }}
          >
            We navigate the complexities of ADHD and mood disorders through a
            compassionate lens, integrating evidence-based medicine with a
            deep understanding of your unique life story.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.95rem] leading-[1.88]"
            style={{ color: "var(--jj-stone)", fontFamily: "var(--font-inter), sans-serif", fontWeight: 300 }}
          >
            Our practice is rooted in the belief that mental wellness is a
            dynamic journey—one best navigated with a trusted partner who
            knows your name, your history, and your goals.
          </motion.p>
        </div>
      </div>

      {/* Pillars — staggered editorial list */}
      <div
        ref={pillarsRef}
        className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10 pb-0"
      >
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.num}
            initial={{ opacity: 0, x: i % 2 === 0 ? -16 : 16 }}
            animate={pillarsInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: i * 0.13, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-start gap-8 md:gap-12 py-8 group"
            style={{
              borderTop: "1px solid rgba(141,170,145,0.13)",
              marginLeft: i === 1 ? "clamp(0px, 6vw, 5rem)" : undefined,
            }}
          >
            {/* Large gold numeral */}
            <span
              className="flex-shrink-0 leading-none select-none"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(2.2rem, 3.5vw, 3rem)",
                color: "rgba(196,164,107,0.28)",
                letterSpacing: "-0.04em",
                transition: "color 0.4s ease",
                minWidth: "3rem",
              }}
            >
              {pillar.num}
            </span>

            <div className="flex-1 max-w-lg">
              <h3
                className="text-[0.95rem] font-medium leading-snug mb-2.5"
                style={{
                  color: "var(--jj-charcoal)",
                  fontFamily: "var(--font-inter), sans-serif",
                  letterSpacing: "-0.01em",
                }}
              >
                {pillar.title}
              </h3>
              <p
                className="text-[0.87rem] leading-[1.8]"
                style={{ color: "var(--jj-stone)", fontFamily: "var(--font-inter), sans-serif", fontWeight: 300 }}
              >
                {pillar.desc}
              </p>
            </div>
          </motion.div>
        ))}
        {/* Final rule */}
        <div style={{ borderTop: "1px solid rgba(141,170,145,0.13)" }} />
      </div>
    </section>
  );
}
