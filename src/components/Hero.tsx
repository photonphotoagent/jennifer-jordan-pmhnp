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
  const rightY = useTransform(scrollYProgress, [0, 1], ["0%", "13%"]);
  const rightOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.5]);

  const lines = [
    { node: <>Bespoke</>, delay: 0.28 },
    { node: <>Psychiatric</>, delay: 0.40 },
    {
      node: (
        <>
          Care,{" "}
          <em style={{ color: "var(--jj-sage)", fontStyle: "italic" }}>Whole Person.</em>
        </>
      ),
      delay: 0.52,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col lg:grid lg:grid-cols-[54%_46%] overflow-hidden"
    >
      {/* ── Left: Charcoal ── */}
      <div
        className="relative flex flex-col justify-center px-8 lg:px-16 xl:px-20 pt-32 pb-20 lg:pt-40 lg:pb-28"
        style={{ background: "var(--jj-charcoal)" }}
      >
        {/* Ghost monogram */}
        <div
          className="absolute right-0 bottom-0 select-none pointer-events-none"
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(14rem, 22vw, 24rem)",
            lineHeight: 0.8,
            color: "transparent",
            WebkitTextStroke: "1px rgba(249,248,246,0.03)",
            letterSpacing: "-0.06em",
            zIndex: 0,
            transform: "translateX(18%)",
          }}
        >
          JJ
        </div>

        {/* Sage ambient glow */}
        <div
          className="absolute bottom-0 left-0 w-72 h-72 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 0% 100%, rgba(141,170,145,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="section-label section-label-light mb-10"
          >
            Northern Virginia · Psychiatric Wellness
          </motion.div>

          <h1
            className="mb-8"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              color: "var(--jj-alabaster)",
              fontSize: "clamp(2.9rem, 5.2vw, 5.4rem)",
              letterSpacing: "-0.028em",
              lineHeight: 1.03,
            }}
          >
            {lines.map(({ node, delay }, i) => (
              <div key={i} style={{ overflow: "hidden" }}>
                <motion.div
                  style={{ display: "block" }}
                  initial={{ y: "108%" }}
                  animate={isInView ? { y: "0%" } : {}}
                  transition={{ duration: 1.05, delay, ease: [0.16, 1, 0.3, 1] }}
                >
                  {node}
                </motion.div>
              </div>
            ))}
          </h1>

          <motion.div
            className="flex items-center gap-2 mb-8"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.72, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "left" }}
          >
            <div className="w-10 h-[1px]" style={{ background: "rgba(141,170,145,0.45)" }} />
            <div className="w-3 h-[1px]" style={{ background: "rgba(196,164,107,0.55)" }} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.62, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.95rem] leading-[1.85] max-w-[420px] mb-10"
            style={{ color: "rgba(249,248,246,0.55)", fontFamily: "var(--font-inter), sans-serif", fontWeight: 300 }}
          >
            A sanctuary for psychiatric evaluation, evidence-based medication
            management, and holistic mental wellness in Northern Virginia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.76, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-start gap-5 mb-16"
          >
            <a href="#contact" className="cta-on-dark">
              <span>Book Consultation</span>
              <span style={{ opacity: 0.6 }}>→</span>
            </a>
            <a href="#approach" className="cta-text-light mt-2 sm:mt-[0.22rem]">
              Our Approach
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            ref={statRef}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex items-stretch gap-7 pt-7"
            style={{ borderTop: "1px solid rgba(249,248,246,0.09)" }}
          >
            <div className="flex flex-col gap-1">
              <span
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "1.7rem",
                  color: "var(--jj-alabaster)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                {yearsCount}<span style={{ color: "var(--jj-gold)" }}>+</span>
              </span>
              <span className="text-[0.56rem] tracking-[0.18em] uppercase" style={{ color: "rgba(249,248,246,0.3)" }}>
                Years Experience
              </span>
            </div>

            <div className="w-px self-stretch" style={{ background: "rgba(249,248,246,0.09)" }} />

            <div className="flex flex-col gap-1">
              <span
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "1.7rem",
                  color: "var(--jj-alabaster)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                2k<span style={{ color: "var(--jj-gold)" }}>+</span>
              </span>
              <span className="text-[0.56rem] tracking-[0.18em] uppercase" style={{ color: "rgba(249,248,246,0.3)" }}>
                Patients Served
              </span>
            </div>

            <div className="w-px self-stretch" style={{ background: "rgba(249,248,246,0.09)" }} />

            <div className="flex flex-col gap-1">
              <span
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.88rem",
                  color: "var(--jj-sage)",
                  letterSpacing: "0.04em",
                  lineHeight: 1.2,
                  fontWeight: 500,
                }}
              >
                PMHNP-BC
              </span>
              <span className="text-[0.56rem] tracking-[0.18em] uppercase" style={{ color: "rgba(249,248,246,0.3)" }}>
                Board Certified
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Right: Texture panel ── */}
      <motion.div
        className="relative hidden lg:flex items-end overflow-hidden"
        style={{ y: rightY, opacity: rightOpacity }}
      >
        <div className="absolute inset-0 texture-glass" />

        {/* Gold top accent line */}
        <div
          className="absolute top-0 left-0 right-0"
          style={{ height: "2px", background: "linear-gradient(90deg, var(--jj-gold), transparent 75%)" }}
        />

        {/* Vertical NOVa label */}
        <div
          className="absolute right-9 top-1/2 -translate-y-1/2"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          <span
            className="text-[0.48rem] tracking-[0.38em] uppercase"
            style={{ color: "rgba(45,52,54,0.2)" }}
          >
            Northern Virginia
          </span>
        </div>

        {/* Corner accent */}
        <svg
          className="absolute top-8 left-8"
          width="30" height="30" viewBox="0 0 30 30" fill="none"
        >
          <motion.path
            d="M30 0 L0 0 L0 30"
            stroke="rgba(141,170,145,0.28)" strokeWidth="1" fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ delay: 0.9, duration: 1.1, ease: "easeOut" }}
          />
        </svg>

        {/* Floating card */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 m-10 p-7"
          style={{
            background: "rgba(249,248,246,0.9)",
            backdropFilter: "blur(22px)",
            WebkitBackdropFilter: "blur(22px)",
            border: "1px solid rgba(141,170,145,0.18)",
            borderTop: "2px solid var(--jj-sage)",
          }}
        >
          <p
            className="text-[0.54rem] tracking-[0.28em] uppercase mb-3"
            style={{ color: "var(--jj-sage)" }}
          >
            Philosophy of Care
          </p>
          <p
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "1.08rem",
              color: "var(--jj-charcoal)",
              fontStyle: "italic",
              lineHeight: 1.55,
            }}
          >
            &ldquo;Mental wellness is a journey best
            navigated with a trusted partner
            who knows your story.&rdquo;
          </p>
          <div className="flex items-center gap-3 mt-5">
            <div className="w-5 h-[1px]" style={{ background: "var(--jj-gold)" }} />
            <span
              className="text-[0.56rem] tracking-[0.22em] uppercase"
              style={{ color: "var(--jj-gold)" }}
            >
              Jennifer Jordan, PMHNP-BC
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.8 }}
        className="absolute bottom-8 left-[27%] hidden lg:flex flex-col items-center gap-2"
        style={{ transform: "translateX(-50%)" }}
      >
        <div
          style={{
            width: 1,
            height: 52,
            background: "linear-gradient(to bottom, rgba(249,248,246,0.22), transparent)",
            animation: "scrollPulse 2.4s ease-in-out infinite",
          }}
        />
      </motion.div>
    </section>
  );
}
