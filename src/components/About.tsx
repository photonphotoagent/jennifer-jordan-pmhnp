"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const },
  },
};

function useCountUp(target: number, trigger: boolean, duration = 1400) {
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

const credentials = [
  "Board-Certified Psychiatric Mental Health Nurse Practitioner (PMHNP-BC)",
  "Georgetown University — Master of Science in Nursing",
  "Trauma-Informed Care Specialist",
  "ADHD & Mood Disorder Expert",
  "17+ Years of Clinical Excellence",
];

const stats = [
  { value: 17, suffix: "+", label: "Years Experience", color: "var(--jj-sage)" },
  { value: 2000, suffix: "+", label: "Patients Served", color: "var(--jj-gold)" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const statsInView = useInView(ref, { once: true, margin: "-5%" });

  const yearsCount = useCountUp(17, statsInView, 1200);
  const patientsCount = useCountUp(2000, statsInView, 1800);
  const counts = [yearsCount, patientsCount];

  return (
    <section
      ref={ref}
      id="about"
      className="relative overflow-hidden py-24 md:py-36"
      style={{ background: "var(--jj-cream)" }}
    >
      {/* Ghost "17" background */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none hidden lg:block"
        style={{
          fontFamily: "var(--font-playfair), Georgia, serif",
          fontSize: "clamp(16rem, 26vw, 30rem)",
          lineHeight: 1,
          color: "transparent",
          WebkitTextStroke: "1px rgba(196, 164, 107, 0.07)",
          letterSpacing: "-0.04em",
          transform: "translateY(-50%) translateX(18%)",
          zIndex: 0,
        }}
      >
        17
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[42%_58%] gap-16 lg:gap-20 items-center">

          {/* ── Left: Portrait ── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative"
          >
            {/* Portrait frame with animated SVG border */}
            <div className="relative w-full aspect-[3/4]" style={{ borderRadius: "2px" }}>
              <Image
                src="/jennifer-jordan.jpg"
                alt="Jennifer Jordan, PMHNP-BC — Board-Certified Psychiatric Nurse Practitioner in Northern Virginia"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                priority
                className="object-cover object-top"
                style={{ borderRadius: "2px" }}
              />

              {/* Animated SVG border */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 133"
                preserveAspectRatio="none"
                style={{ overflow: "visible" }}
              >
                <motion.rect
                  x="1" y="1"
                  width="98" height="131"
                  fill="none"
                  stroke="rgba(141,170,145,0.5)"
                  strokeWidth="0.6"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 2.2, delay: 0.6, ease: "easeInOut" }}
                />
              </svg>

              {/* Gold accent corner */}
              <svg
                className="absolute pointer-events-none"
                style={{ top: -8, right: -8, width: 24, height: 24 }}
                viewBox="0 0 24 24"
              >
                <motion.path
                  d="M24 0 L24 24 M0 0 L24 0"
                  fill="none"
                  stroke="var(--jj-gold)"
                  strokeWidth="1.2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
                />
              </svg>

              {/* Name plate */}
              <div
                className="absolute bottom-0 left-0 right-0 px-8 py-5"
                style={{
                  background: "linear-gradient(to top, rgba(45,52,54,0.75) 0%, transparent 100%)",
                }}
              >
                <p
                  className="text-[0.56rem] tracking-[0.28em] uppercase mb-1"
                  style={{ color: "rgba(249,248,246,0.6)" }}
                >
                  Board-Certified
                </p>
                <p
                  className="text-xl"
                  style={{
                    color: "var(--jj-alabaster)",
                    fontFamily: "var(--font-playfair), Georgia, serif",
                  }}
                >
                  Jennifer Jordan, PMHNP-BC
                </p>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-px mt-4" style={{ background: "rgba(141,170,145,0.18)" }}>
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center py-5"
                  style={{ background: "var(--jj-cream)" }}
                >
                  <span
                    className="text-2xl font-light leading-none mb-1"
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      color: stat.color,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {counts[i]}
                    <span style={{ color: stat.color }}>{stat.suffix}</span>
                  </span>
                  <span
                    className="text-[0.58rem] tracking-[0.18em] uppercase"
                    style={{ color: "var(--jj-stone)" }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Offset accent */}
            <div
              className="absolute -bottom-4 -left-4 w-20 h-20 -z-10"
              style={{ background: "rgba(196,164,107,0.1)", borderRadius: "2px" }}
            />
          </motion.div>

          {/* ── Right: Bio ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col"
          >
            <motion.div variants={fadeUp} className="section-label mb-8">
              About Jennifer
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="leading-[1.12] tracking-[-0.022em] mb-8"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                color: "var(--jj-charcoal)",
                fontSize: "clamp(1.9rem, 3.2vw, 2.8rem)",
              }}
            >
              A Partnership Grounded in{" "}
              <em style={{ fontStyle: "italic", color: "var(--jj-sage)" }}>
                Clinical Excellence
              </em>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-[0.95rem] leading-[1.85] mb-5"
              style={{ color: "var(--jj-stone)", fontFamily: "var(--font-inter), sans-serif", fontWeight: 300 }}
            >
              Jennifer Jordan, PMHNP-BC, is a board-certified psychiatric nurse
              practitioner with over 17 years of experience. A Georgetown
              University alumna, Jennifer&apos;s career has spanned the full spectrum
              of mental healthcare—from inpatient crisis stabilization to
              outpatient wellness.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-[0.95rem] leading-[1.85] mb-10"
              style={{ color: "var(--jj-stone)", fontFamily: "var(--font-inter), sans-serif", fontWeight: 300 }}
            >
              She believes in a partnership between provider and patient,
              grounded in trauma-informed care and clinical excellence. Jennifer
              brings the same depth of presence to every evaluation—ensuring
              each patient feels truly seen and understood.
            </motion.p>

            {/* Credentials */}
            <motion.div variants={fadeUp} className="flex flex-col gap-3 mb-10">
              {credentials.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-4"
                >
                  <div
                    className="w-4 h-[1px] flex-shrink-0 mt-[0.6rem]"
                    style={{ background: i === 0 ? "var(--jj-gold)" : "var(--jj-sage)" }}
                  />
                  <p
                    className="text-[0.88rem] leading-relaxed"
                    style={{
                      color: "var(--jj-charcoal)",
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: i === 0 ? 500 : 400,
                    }}
                  >
                    {item}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp}>
              <a href="#contact" className="cta-primary inline-flex">
                <span>Begin Your Journey</span>
                <span style={{ opacity: 0.65 }}>→</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
