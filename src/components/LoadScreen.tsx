"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function LoadScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2700);
    return () => clearTimeout(timer);
  }, [onComplete]);

  const credential = "PMHNP·BC";

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center select-none overflow-hidden"
      style={{ background: "var(--jj-charcoal)" }}
      exit={{
        y: "-100%",
        transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] as const },
      }}
    >
      {/* Subtle grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.025,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundSize: "256px 256px",
        }}
      />

      {/* Center content */}
      <div className="flex flex-col items-center">

        {/* Sage · gold · sage rule */}
        <motion.div
          className="flex items-center mb-8"
          style={{ gap: "8px" }}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.55, delay: 0.12, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <div style={{ width: 36, height: 1, background: "rgba(141,170,145,0.45)" }} />
          <div
            style={{
              width: 5, height: 5,
              background: "var(--jj-gold)",
              opacity: 0.75,
              transform: "rotate(45deg)",
            }}
          />
          <div style={{ width: 36, height: 1, background: "rgba(141,170,145,0.45)" }} />
        </motion.div>

        {/* "Jennifer Jordan" — word-by-word line reveal */}
        <div
          className="flex mb-4"
          style={{ gap: "0.42em" }}
        >
          {["Jennifer", "Jordan"].map((word, i) => (
            <div key={word} style={{ overflow: "hidden" }}>
              <motion.span
                style={{
                  display: "block",
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
                  color: "var(--jj-alabaster)",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.1,
                }}
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 0.95,
                  delay: 0.28 + i * 0.11,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
              >
                {word}
              </motion.span>
            </div>
          ))}
        </div>

        {/* "PMHNP·BC" — character stagger */}
        <div className="flex items-center" style={{ gap: "0.05em" }}>
          {credential.split("").map((char, i) => (
            <motion.span
              key={i}
              style={{
                color: "#C4A46B",
                fontSize: "0.65rem",
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 500,
                letterSpacing: "0.24em",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35, delay: 0.85 + i * 0.04 }}
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.5 }}
          style={{
            color: "rgba(249,248,246,0.2)",
            fontSize: "0.6rem",
            fontFamily: "var(--font-inter), sans-serif",
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            marginTop: "2.2rem",
          }}
        >
          Northern Virginia
        </motion.p>
      </div>

      {/* Progress bar — bottom edge */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: "1px", background: "rgba(249,248,246,0.05)" }}
      >
        <motion.div
          style={{
            height: "100%",
            background: "linear-gradient(90deg, var(--jj-sage), var(--jj-gold))",
          }}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.1, delay: 0.55, ease: [0.16, 1, 0.3, 1] as const }}
        />
      </div>

      {/* Slim corner accents — top left & bottom right */}
      <motion.svg
        className="absolute top-6 left-6"
        width="28" height="28" viewBox="0 0 28 28" fill="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <motion.path
          d="M28 0 L0 0 L0 28"
          stroke="rgba(141,170,145,0.25)" strokeWidth="1" fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        />
      </motion.svg>

      <motion.svg
        className="absolute bottom-6 right-6"
        width="28" height="28" viewBox="0 0 28 28" fill="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <motion.path
          d="M0 28 L28 28 L28 0"
          stroke="rgba(196,164,107,0.2)" strokeWidth="1" fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        />
      </motion.svg>
    </motion.div>
  );
}
