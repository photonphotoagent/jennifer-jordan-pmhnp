"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className="relative py-32 md:py-48 overflow-hidden"
      ref={ref}
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="orb"
          style={{
            width: "800px",
            height: "800px",
            background:
              "radial-gradient(circle, rgba(0,229,255,0.08), transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[900px] mx-auto px-6 md:px-12 text-center">
        <motion.div
          className="section-label justify-center mb-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Ready?
        </motion.div>

        <motion.h2
          className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1] tracking-[-0.04em] mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Let&apos;s build
          <br />
          <span className="gradient-text">something legendary.</span>
        </motion.h2>

        <motion.p
          className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Whether it&apos;s a napkin sketch or a fully-formed vision, we&apos;re
          ready to make it real. Drop us a line and let&apos;s start the
          conversation.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <a
            href="mailto:hello@dextervilledigital.com"
            className="magnetic-btn magnetic-btn-solid text-base"
          >
            <span>hello@dextervilledigital.com</span>
          </a>
        </motion.div>

        <motion.p
          className="mt-8 font-mono text-xs text-[var(--text-tertiary)] tracking-wider uppercase"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Typically respond within 24 hours
        </motion.p>
      </div>
    </section>
  );
}
