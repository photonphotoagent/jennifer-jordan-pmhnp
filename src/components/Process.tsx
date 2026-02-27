"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We immerse ourselves in your vision. What's the dream? What's the problem? We map the landscape and identify the shortest path to impact.",
  },
  {
    num: "02",
    title: "Architect",
    desc: "AI-powered design sprints. We prototype interfaces, data flows, and architecture — validating assumptions before writing a single line of production code.",
  },
  {
    num: "03",
    title: "Build",
    desc: "This is where the magic happens. Our AI-augmented engineering team ships at 10x speed. Daily demos. Rapid iteration. No surprises.",
  },
  {
    num: "04",
    title: "Launch",
    desc: "Deploy, monitor, optimize. We don't disappear after launch. We help you scale, iterate, and stay ahead of the curve.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="relative py-32 md:py-48" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          className="section-label mb-6"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          How It Works
        </motion.div>

        <motion.h2
          className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight tracking-[-0.03em] mb-20 max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          From zero to launched.{" "}
          <span className="gradient-text">Absurdly fast.</span>
        </motion.h2>

        <div className="space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="process-step group border-t border-[var(--glass-border)] py-10 md:py-14 grid grid-cols-1 md:grid-cols-[120px_1fr_1fr] gap-6 md:gap-12 items-start"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
            >
              <div className="process-number font-mono">{step.num}</div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight pt-2 md:pt-6">
                {step.title}
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed pt-0 md:pt-7">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
