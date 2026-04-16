"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const quoteReveal = {
  hidden: { opacity: 0, y: 36, rotateX: -8 },
  visible: {
    opacity: 1, y: 0, rotateX: 0,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] as const, delay: 0.15 },
  },
};

const pillarVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: (i: number) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.7, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const pillars = [
  {
    title: "Biopsychosocial Framework",
    desc: "Every evaluation integrates biological, psychological, and social factors to form a complete picture of your wellbeing.",
  },
  {
    title: "Trauma-Informed Practice",
    desc: "Safety and trust are the foundation. We move at your pace, honoring your story without judgment.",
  },
  {
    title: "Evidence-Based Medicine",
    desc: "Clinical decisions are grounded in the latest research, thoughtfully applied to your unique presentation.",
  },
];

export default function Approach() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      id="approach"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ background: "var(--jj-cream)" }}
    >
      {/* Ghost serif background number */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 select-none pointer-events-none hidden lg:block"
        style={{
          fontFamily: "var(--font-playfair), Georgia, serif",
          fontSize: "clamp(16rem, 28vw, 32rem)",
          lineHeight: 1,
          color: "transparent",
          WebkitTextStroke: "1px rgba(141, 170, 145, 0.08)",
          letterSpacing: "-0.04em",
          transform: "translateY(-50%) translateX(-12%)",
          zIndex: 0,
        }}
      >
        I
      </div>

      {/* Ambient gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 88% 20%, rgba(196,164,107,0.05) 0%, transparent 55%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[46%_54%] gap-16 lg:gap-20">

          {/* ── Left: Quote ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col justify-center"
            style={{ perspective: "800px" }}
          >
            <motion.div variants={fadeUp} className="section-label mb-10">
              The Approach
            </motion.div>

            {/* Editorial pull quote */}
            <motion.div
              variants={quoteReveal}
              className="relative pl-7 mb-10"
            >
              <div
                className="absolute left-0 top-0 bottom-0 w-[2px]"
                style={{
                  background: "linear-gradient(to bottom, var(--jj-sage), var(--jj-gold))",
                }}
              />
              <blockquote>
                <p
                  className="leading-[1.25] tracking-[-0.01em]"
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    color: "var(--jj-charcoal)",
                    fontStyle: "italic",
                    fontSize: "clamp(1.55rem, 2.6vw, 2.25rem)",
                  }}
                >
                  &ldquo;Treating the person,
                  <br />
                  not just the symptom.&rdquo;
                </p>
              </blockquote>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-[0.95rem] leading-[1.85] mb-5"
              style={{ color: "var(--jj-stone)", fontFamily: "var(--font-inter), sans-serif", fontWeight: 300 }}
            >
              We navigate the complexities of ADHD and mood disorders through a
              compassionate lens, integrating evidence-based medicine with a
              deep understanding of your unique life story.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-[0.95rem] leading-[1.85]"
              style={{ color: "var(--jj-stone)", fontFamily: "var(--font-inter), sans-serif", fontWeight: 300 }}
            >
              Our practice is rooted in the belief that mental wellness is a
              dynamic journey—one best navigated with a trusted partner who
              knows your name, your history, and your goals.
            </motion.p>
          </motion.div>

          {/* ── Right: Pillars ── */}
          <div className="flex flex-col justify-center">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                custom={i}
                variants={pillarVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="pillar-row group"
              >
                {/* Index */}
                <span
                  className="text-[0.65rem] tracking-[0.22em] pt-0.5 flex-shrink-0 font-medium"
                  style={{ color: "var(--jj-gold)", fontFamily: "var(--font-inter), sans-serif", minWidth: "2rem" }}
                >
                  0{i + 1}
                </span>

                <div className="flex flex-col gap-1.5 flex-1">
                  <h3
                    className="text-[0.95rem] font-medium leading-snug"
                    style={{ color: "var(--jj-charcoal)", fontFamily: "var(--font-inter), sans-serif", letterSpacing: "-0.01em" }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    className="text-[0.88rem] leading-[1.75]"
                    style={{ color: "var(--jj-stone)", fontFamily: "var(--font-inter), sans-serif", fontWeight: 300 }}
                  >
                    {pillar.desc}
                  </p>
                </div>

                <span className="pillar-arrow flex-shrink-0 mt-0.5 text-[0.9rem]">→</span>
              </motion.div>
            ))}

            {/* Quote attribution */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-10 flex items-center gap-4"
            >
              <div className="w-8 h-[1px]" style={{ background: "var(--jj-gold)" }} />
              <p
                className="text-[0.62rem] tracking-[0.22em] uppercase"
                style={{ color: "var(--jj-gold)", fontFamily: "var(--font-inter), sans-serif" }}
              >
                Jennifer Jordan, PMHNP-BC
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
