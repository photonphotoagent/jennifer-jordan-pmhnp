"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  "AI PRODUCTS",
  "WEB APPS",
  "MOBILE",
  "SAAS",
  "AUTOMATION",
  "DESIGN SYSTEMS",
  "AI AGENTS",
  "DATA PLATFORMS",
];

export default function Marquee() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="py-16 overflow-hidden border-y border-[var(--glass-border)]"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="marquee-item flex items-center gap-8">
            {item}
            <span className="w-2 h-2 rounded-full bg-[rgba(255,255,255,0.06)]" />
          </span>
        ))}
      </div>
    </motion.div>
  );
}
