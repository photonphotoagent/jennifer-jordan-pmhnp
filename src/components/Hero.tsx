"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

function useCountUp(target: number, trigger: boolean, duration = 1200) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let current = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [trigger, target, duration]);
  return count;
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true });
  const statRef = useRef<HTMLDivElement>(null);
  const statInView = useInView(statRef, { once: true });
  const yearsCount = useCountUp(17, statInView);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const ghostY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  const lines = [
    { node: "Bespoke", delay: 0.24 },
    { node: <em style={{ color: "var(--jj-sage)", fontStyle: "italic" }}>Psychiatric</em>, delay: 0.36 },
    { node: "Care.", delay: 0.48 },
  ];

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: "var(--jj-charcoal)" }}
    >
      {/* Subtle ambient glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            "radial-gradient(ellipse at 85% 18%, rgba(196,164,107,0.06) 0%, transparent 48%)",
            "radial-gradient(ellipse at 4% 82%, rgba(141,170,145,0.07) 0%, transparent 52%)",
          ].join(", "),
        }}
      />

      {/* Parallax ghost monogram */}
      <motion.div
        className="absolute right-0 top-0 bottom-0 flex items-center select-none pointer-events-none"
        style={{ y: ghostY }}
      >
        <span
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(20rem, 34vw, 40rem)",
            lineHeight: 1,
            color: "transparent",
            WebkitTextStroke: "1px rgba(249,248,246,0.022)",
            letterSpacing: "-0.06em",
            transform: "translateX(24%)",
          }}
        >
          JJ
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-8 lg:px-16 xl:px-20 pt-36 pb-10 w-full flex-1 flex flex-col relative z-10">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
          className="section-label section-label-light mb-16"
        >
          Northern Virginia · Psychiatric Wellness
        </motion.div>

        {/* Editorial headline — massive */}
        <h1
          className="mb-12"
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(4.2rem, 8.8vw, 9.5rem)",
            letterSpacing: "-0.035em",
            lineHeight: 1.05,
            color: "var(--jj-alabaster)",
          }}
        >
          {lines.map(({ node, delay }, i) => (
            <div key={i} style={{ overflow: "hidden", paddingBottom: "0.06em", marginBottom: "-0.06em" }}>
              <motion.div
                style={{ display: "block" }}
                initial={{ y: "110%" }}
                animate={isInView ? { y: "0%" } : {}}
                transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
              >
                {node}
              </motion.div>
            </div>
          ))}
        </h1>

        {/* Sub-row: body + credential card */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 lg:gap-16 items-start mb-auto">

          <div>
            {/* Rule */}
            <motion.div
              className="flex items-center gap-2 mb-7"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.68, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "left" }}
            >
              <div className="w-10 h-[1px]" style={{ background: "rgba(141,170,145,0.4)" }} />
              <div className="w-3 h-[1px]" style={{ background: "rgba(196,164,107,0.5)" }} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-[0.97rem] leading-[1.88] max-w-[400px] mb-10"
              style={{ color: "rgba(249,248,246,0.48)", fontFamily: "var(--font-inter), sans-serif", fontWeight: 300 }}
            >
              A sanctuary for psychiatric evaluation, evidence-based
              medication management, and holistic mental wellness.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.73, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-start gap-5"
            >
              <a href="#contact" className="cta-on-dark">
                <span>Book Consultation</span>
                <span style={{ opacity: 0.6 }}>→</span>
              </a>
              <a href="#approach" className="cta-text-light mt-2 sm:mt-[0.24rem]">
                Our Approach
              </a>
            </motion.div>
          </div>

          {/* Floating credential card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block p-7"
            style={{
              background: "rgba(249,248,246,0.04)",
              border: "1px solid rgba(249,248,246,0.07)",
              borderTop: "2px solid var(--jj-sage)",
            }}
          >
            <p className="text-[0.52rem] tracking-[0.28em] uppercase mb-3" style={{ color: "var(--jj-sage)" }}>
              Philosophy of Care
            </p>
            <p
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "0.98rem",
                color: "rgba(249,248,246,0.68)",
                fontStyle: "italic",
                lineHeight: 1.62,
              }}
            >
              &ldquo;Mental wellness is a journey best navigated with a trusted
              partner who knows your story.&rdquo;
            </p>
            <div className="flex items-center gap-3 mt-5">
              <div className="w-5 h-[1px]" style={{ background: "var(--jj-gold)" }} />
              <span className="text-[0.52rem] tracking-[0.22em] uppercase" style={{ color: "var(--jj-gold)" }}>
                Jennifer Jordan, PMHNP-BC
              </span>
            </div>
          </motion.div>
        </div>

        {/* Stats strip — full width */}
        <motion.div
          ref={statRef}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.15 }}
          className="flex flex-wrap items-stretch gap-x-8 gap-y-4 mt-16 pt-7"
          style={{ borderTop: "1px solid rgba(249,248,246,0.07)" }}
        >
          {[
            { val: `${yearsCount}+`, label: "Years Experience", serif: true, color: "var(--jj-alabaster)" },
            { val: "2,000+", label: "Patients Served", serif: true, color: "var(--jj-alabaster)" },
            { val: "PMHNP-BC", label: "Board Certified", serif: false, color: "var(--jj-sage)" },
            { val: "Georgetown", label: "University Alumna", serif: false, color: "rgba(249,248,246,0.65)" },
          ].map((s, i) => (
            <div key={i} className="stat-item flex flex-col gap-1 cursor-default">
              <span
                style={{
                  fontFamily: s.serif ? "var(--font-playfair), Georgia, serif" : "var(--font-inter), sans-serif",
                  fontSize: s.serif ? "1.55rem" : "0.8rem",
                  color: s.color,
                  letterSpacing: s.serif ? "-0.03em" : "0.06em",
                  lineHeight: 1,
                  fontWeight: !s.serif ? 500 : undefined,
                }}
              >
                {s.val}
              </span>
              <span className="text-[0.52rem] tracking-[0.18em] uppercase" style={{ color: "rgba(249,248,246,0.25)" }}>
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue — centered */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1, duration: 0.9 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex"
      >
        <div
          style={{
            width: 1,
            height: 50,
            background: "linear-gradient(to bottom, rgba(249,248,246,0.18), transparent)",
            animation: "scrollPulse 2.4s ease-in-out infinite",
          }}
        />
      </motion.div>
    </section>
  );
}
