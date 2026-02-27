"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [phase, setPhase] = useState<"loading" | "exit">("loading");
  const title = "DEXTERVILLE";

  useEffect(() => {
    const timer = setTimeout(() => setPhase("exit"), 2800);
    const exitTimer = setTimeout(() => onComplete(), 3500);
    return () => {
      clearTimeout(timer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" ? null : null}
      <motion.div
        className="load-screen"
        initial={{ y: 0 }}
        animate={phase === "exit" ? { y: "-100%" } : { y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <div className="noise-overlay" />

        <div className="load-text">
          {title.split("").map((char, i) => (
            <span
              key={i}
              style={{
                animationDelay: `${0.3 + i * 0.05}s`,
              }}
            >
              {char}
            </span>
          ))}
        </div>

        <motion.div
          className="load-subtitle"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
        >
          DIGITAL
        </motion.div>

        <motion.div
          className="load-bar-track"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.3 }}
        >
          <div
            className="load-bar-fill"
            style={{ animationDelay: "1.6s" }}
          />
        </motion.div>

        <motion.p
          className="font-mono text-[0.65rem] tracking-[0.2em] text-[var(--text-tertiary)] uppercase mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.4 }}
        >
          Initializing experience
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
}
