"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <footer
      ref={ref}
      className="relative border-t border-[var(--glass-border)] footer-gradient"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-end"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div>
            <div className="font-bold text-2xl tracking-tight mb-4">
              <span className="text-[var(--text-primary)]">DEXTER</span>
              <span className="gradient-text">VILLE</span>
            </div>
            <p className="text-[var(--text-secondary)] text-sm max-w-md leading-relaxed">
              AI development and consulting for the next era. We turn
              ideas into reality at speeds that shouldn&apos;t be possible.
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-4">
            <div className="flex gap-6">
              <a
                href="#"
                className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors text-sm animated-border pb-0.5"
              >
                Twitter/X
              </a>
              <a
                href="#"
                className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors text-sm animated-border pb-0.5"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors text-sm animated-border pb-0.5"
              >
                GitHub
              </a>
            </div>
          </div>
        </motion.div>

        <div className="section-divider my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[var(--text-tertiary)] text-xs font-mono tracking-wider">
          <span>&copy; {new Date().getFullYear()} Dexterville Digital. All rights reserved.</span>
          <span>Built with AI. Obviously.</span>
        </div>
      </div>
    </footer>
  );
}
