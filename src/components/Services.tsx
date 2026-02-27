"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path
          d="M16 3L4 9v14l12 6 12-6V9L16 3z"
          stroke="url(#g1)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M4 9l12 6m0 0l12-6m-12 6v14" stroke="url(#g1)" strokeWidth="1.5" />
        <defs>
          <linearGradient id="g1" x1="4" y1="3" x2="28" y2="29">
            <stop stopColor="#00E5FF" />
            <stop offset="1" stopColor="#7B61FF" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "AI Product Development",
    desc: "End-to-end AI-powered product builds. From concept to deployed, revenue-generating product. We architect, design, and ship complete solutions.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="url(#g2)" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="4" stroke="url(#g2)" strokeWidth="1.5" />
        <path d="M16 4v8m0 8v8M4 16h8m8 0h8" stroke="url(#g2)" strokeWidth="1.5" />
        <defs>
          <linearGradient id="g2" x1="4" y1="4" x2="28" y2="28">
            <stop stopColor="#00E5FF" />
            <stop offset="1" stopColor="#7B61FF" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "AI Strategy & Consulting",
    desc: "Navigate the AI landscape with clarity. We help you identify where AI creates real value in your business — and build the roadmap to get there.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="8" width="24" height="16" rx="2" stroke="url(#g3)" strokeWidth="1.5" />
        <path d="M12 14l3 3 5-5" stroke="url(#g3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="g3" x1="4" y1="8" x2="28" y2="24">
            <stop stopColor="#00E5FF" />
            <stop offset="1" stopColor="#7B61FF" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Rapid Prototyping",
    desc: "Go from napkin sketch to working prototype in days, not months. We use AI-accelerated workflows to validate ideas at unprecedented speed.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 6h16a2 2 0 012 2v16a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" stroke="url(#g4)" strokeWidth="1.5" />
        <path d="M10 16h12M10 12h8M10 20h6" stroke="url(#g4)" strokeWidth="1.5" strokeLinecap="round" />
        <defs>
          <linearGradient id="g4" x1="6" y1="6" x2="26" y2="26">
            <stop stopColor="#00E5FF" />
            <stop offset="1" stopColor="#7B61FF" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Design & Brand",
    desc: "Interfaces that feel like they're from the future. We design experiences that are not just beautiful — they convert, delight, and differentiate.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-32 md:py-48" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          className="section-label mb-6"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          What We Build
        </motion.div>

        <motion.h2
          className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight tracking-[-0.03em] mb-20 max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Four pillars. One mission:{" "}
          <span className="gradient-text">ship your future.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="glass-card relative p-8 md:p-10 group"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                e.currentTarget.style.setProperty("--mouse-x", `${x}%`);
                e.currentTarget.style.setProperty("--mouse-y", `${y}%`);
              }}
            >
              <div className="card-glow" />
              <div className="relative z-10">
                <div className="mb-6 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed text-[0.95rem]">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
