"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "10x", label: "Faster than traditional agencies" },
  { value: "90%", label: "Cost reduction with AI-first approach" },
  { value: "∞", label: "Ideas we can bring to life" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 md:py-48" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          className="section-label mb-8"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          The Manifesto
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <motion.h2
              className="text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em] mb-8"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Dexterville isn&apos;t
              <br />a company.{" "}
              <span className="gradient-text">
                It&apos;s a place.
              </span>
            </motion.h2>

            <motion.p
              className="text-[var(--text-secondary)] text-lg leading-relaxed mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The place where founders, dreamers, and builders come to
              turn &quot;what if&quot; into &quot;what is.&quot; We fuse cutting-edge AI with
              world-class design and engineering to build products that
              would have taken a team of 20 and six months — in weeks.
            </motion.p>

            <motion.p
              className="text-[var(--text-secondary)] text-lg leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              The rules changed. The old playbook — bloated teams,
              endless meetings, six-figure budgets for an MVP — that&apos;s
              dead. Welcome to the new era. Welcome to Dexterville.
            </motion.p>
          </div>

          <div className="flex flex-col gap-8 lg:pt-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="border-l border-[var(--glass-border)] pl-8"
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
              >
                <div className="stat-value gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-[var(--text-secondary)] text-sm tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
