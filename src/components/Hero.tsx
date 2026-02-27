"use client";

import { motion } from "framer-motion";

const headlineWords = ["Where", "ideas", "become", "real."];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg">
      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb orb-1" style={{ top: "10%", left: "15%" }} />
        <div className="orb orb-2" style={{ top: "40%", right: "10%" }} />
        <div className="orb orb-3" style={{ bottom: "10%", left: "40%" }} />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 text-center">
        {/* Tag */}
        <motion.div
          className="section-label justify-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.6, duration: 0.6 }}
        >
          <span className="hidden md:block" />
          AI Development & Consulting
        </motion.div>

        {/* Headline */}
        <h1 className="text-[clamp(3rem,9vw,8rem)] font-bold leading-[0.95] tracking-[-0.04em] mb-8">
          {headlineWords.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
              <motion.span
                className={`inline-block ${word === "real." ? "gradient-text" : ""}`}
                initial={{ y: "110%", rotateX: -40 }}
                animate={{ y: "0%", rotateX: 0 }}
                transition={{
                  delay: 3.7 + i * 0.1,
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Subheadline */}
        <motion.p
          className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.2, duration: 0.8 }}
        >
          What used to cost a fortune and take forever — we ship in weeks.
          <br className="hidden md:block" />
          Dexterville is where your next big thing gets built.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.5, duration: 0.8 }}
        >
          <a href="#contact" className="magnetic-btn magnetic-btn-solid">
            <span>Let&apos;s Build Something</span>
          </a>
          <a href="#about" className="magnetic-btn">
            <span>Explore Dexterville</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5, duration: 0.6 }}
      >
        <span>Scroll</span>
        <div className="scroll-line" />
      </motion.div>
    </section>
  );
}
