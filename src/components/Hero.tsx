"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

// Line-by-line reveal variant
const lineReveal = {
  hidden: { y: "108%" },
  visible: (i: number) => ({
    y: "0%",
    transition: {
      duration: 1.05,
      delay: 0.2 + i * 0.11,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay: 0.6 + i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.2, delay: 0.5 } },
};

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

  // Parallax on right column
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.6]);

  const headlineLines = [
    { key: "l1", node: <>Bespoke Care</> },
    {
      key: "l2",
      node: (
        <>
          for Mind,{" "}
          <em style={{ color: "var(--jj-sage)", fontStyle: "italic" }}>Body,</em>
        </>
      ),
    },
    { key: "l3", node: <>& Spirit.</> },
  ];

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "var(--jj-alabaster)" }}
    >
      {/* Ambient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 75% 45%, rgba(141,170,145,0.08) 0%, transparent 58%), radial-gradient(ellipse at 20% 75%, rgba(196,164,107,0.05) 0%, transparent 52%)",
        }}
      />

      {/* Ghost "JJ" monogram */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none hidden lg:block"
        style={{
          fontFamily: "var(--font-playfair), Georgia, serif",
          fontSize: "clamp(14rem, 24vw, 26rem)",
          lineHeight: 1,
          color: "transparent",
          WebkitTextStroke: "1px rgba(141, 170, 145, 0.1)",
          letterSpacing: "-0.05em",
          zIndex: 0,
          transform: "translateY(-50%) translateX(15%)",
        }}
      >
        JJ
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20 md:pt-36 md:pb-28 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[56%_44%] gap-12 lg:gap-4 items-center">

          {/* ── Left: Text ── */}
          <div className="flex flex-col">

            {/* Label */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="section-label mb-10"
            >
              Northern Virginia · Psychiatric Wellness
            </motion.div>

            {/* Headline — line by line */}
            <h1
              className="mb-7"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                color: "var(--jj-charcoal)",
                fontSize: "clamp(2.8rem, 5.5vw, 5.4rem)",
                letterSpacing: "-0.025em",
                lineHeight: 1.04,
              }}
            >
              {headlineLines.map(({ key, node }, i) => (
                <div key={key} className="overflow-hidden">
                  <motion.div
                    custom={i}
                    variants={lineReveal}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    style={{ display: "block" }}
                  >
                    {node}
                  </motion.div>
                </div>
              ))}
            </h1>

            {/* Sage + gold rule */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex items-center gap-2 mb-8"
            >
              <div className="w-10 h-[1px]" style={{ background: "var(--jj-sage)" }} />
              <div className="w-3 h-[1px]" style={{ background: "var(--jj-gold)" }} />
            </motion.div>

            {/* Sub-headline */}
            <motion.p
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-base md:text-[1.05rem] leading-[1.85] max-w-[440px] mb-10"
              style={{ color: "var(--jj-stone)", fontFamily: "var(--font-inter), sans-serif", fontWeight: 300 }}
            >
              A sanctuary for psychiatric evaluation, evidence-based medication
              management, and holistic mental wellness in Northern Virginia.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex flex-col sm:flex-row items-start gap-5 mb-14"
            >
              <a href="#contact" className="cta-primary">
                <span>Book Consultation</span>
                <span style={{ opacity: 0.65 }}>→</span>
              </a>
              <a href="#approach" className="cta-secondary mt-2 sm:mt-[0.2rem]">
                <span>Our Approach</span>
              </a>
            </motion.div>

            {/* Credential strip with count-up */}
            <motion.div
              ref={statRef}
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex items-stretch gap-8 pt-8"
              style={{ borderTop: "1px solid rgba(141,170,145,0.22)" }}
            >
              {/* Count-up stat */}
              <div className="flex flex-col">
                <span
                  className="text-2xl font-medium leading-none mb-1"
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    color: "var(--jj-charcoal)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {statInView ? yearsCount : 0}
                  <span style={{ color: "var(--jj-gold)" }}>+</span>
                </span>
                <span
                  className="text-[0.6rem] tracking-[0.18em] uppercase"
                  style={{ color: "var(--jj-stone)" }}
                >
                  Years Experience
                </span>
              </div>

              <div
                className="w-[1px] self-stretch"
                style={{ background: "rgba(141,170,145,0.2)" }}
              />

              <div className="flex flex-col">
                <span
                  className="text-sm font-medium leading-none mb-1"
                  style={{ color: "var(--jj-charcoal)", fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Board
                </span>
                <span
                  className="text-[0.6rem] tracking-[0.18em] uppercase"
                  style={{ color: "var(--jj-stone)" }}
                >
                  Certified PMHNP
                </span>
              </div>

              <div
                className="w-[1px] self-stretch"
                style={{ background: "rgba(141,170,145,0.2)" }}
              />

              <div className="flex flex-col">
                <span
                  className="text-sm font-medium leading-none mb-1"
                  style={{ color: "var(--jj-charcoal)", fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Georgetown
                </span>
                <span
                  className="text-[0.6rem] tracking-[0.18em] uppercase"
                  style={{ color: "var(--jj-stone)" }}
                >
                  University Alumna
                </span>
              </div>
            </motion.div>
          </div>

          {/* ── Right: Texture placeholder w/ parallax ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
            style={{ y: imageY, opacity: imageOpacity }}
          >
            {/* Main image block */}
            <div
              className="relative w-full aspect-[4/5] texture-glass overflow-hidden"
              style={{ borderRadius: "2px" }}
            >
              {/* Gold accent line top */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: "linear-gradient(90deg, var(--jj-gold), transparent)" }}
              />

              {/* Floating caption */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="absolute bottom-8 left-8 right-8 p-5"
                style={{
                  background: "rgba(249,248,246,0.92)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(141,170,145,0.22)",
                }}
              >
                <p
                  className="text-[0.58rem] tracking-[0.24em] uppercase mb-2"
                  style={{ color: "var(--jj-gold)" }}
                >
                  Holistic · Evidence-Based · Compassionate
                </p>
                <p
                  className="text-sm leading-snug"
                  style={{
                    color: "var(--jj-charcoal)",
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;Treating the whole person, not just the symptom.&rdquo;
                </p>
              </motion.div>
            </div>

            {/* Offset accent blocks */}
            <div
              className="absolute -bottom-6 -right-6 w-28 h-28 -z-10"
              style={{ background: "rgba(196,164,107,0.1)", borderRadius: "2px" }}
            />
            <div
              className="absolute -top-5 -left-5 w-16 h-16 -z-10"
              style={{ border: "1px solid rgba(141,170,145,0.3)", borderRadius: "2px" }}
            />

            {/* Established tag */}
            <div
              className="absolute -right-4 top-1/3 -translate-y-1/2 px-3 py-2"
              style={{
                background: "var(--jj-charcoal)",
                writingMode: "vertical-rl",
                textOrientation: "mixed",
              }}
            >
              <span
                className="text-[0.52rem] tracking-[0.3em] uppercase"
                style={{ color: "rgba(249,248,246,0.5)" }}
              >
                Northern Virginia
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-cue hidden md:flex"
      >
        <div className="scroll-cue-line" />
      </motion.div>
    </section>
  );
}
