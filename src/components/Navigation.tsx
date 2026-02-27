"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const { scrollY } = useScroll();
  const navBg = useTransform(scrollY, [0, 100], [0, 1]);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-[9990] px-6 md:px-12"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 3.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="nav-blur rounded-none md:rounded-b-2xl"
        style={{ opacity: navBg }}
      />
      <div className="relative flex items-center justify-between h-20 max-w-[1400px] mx-auto">
        <a
          href="#"
          className="font-bold text-lg tracking-tight relative z-10"
        >
          <span className="text-[var(--text-primary)]">DEXTER</span>
          <span className="gradient-text">VILLE</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="animated-border relative text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300 pb-1 font-mono tracking-wider uppercase text-[0.7rem]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="magnetic-btn magnetic-btn-solid !py-2.5 !px-6 text-[0.7rem]"
          >
            <span>Start a Project</span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            className="block w-6 h-[1px] bg-white"
            animate={mobileOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
          />
          <motion.span
            className="block w-6 h-[1px] bg-white"
            animate={mobileOpen ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
          />
        </button>

        {/* Mobile menu */}
        <motion.div
          className="fixed inset-0 bg-[var(--bg)] z-[9989] flex flex-col items-center justify-center gap-8 md:hidden"
          initial={false}
          animate={mobileOpen ? { opacity: 1, pointerEvents: "auto" as const } : { opacity: 0, pointerEvents: "none" as const }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="text-3xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={mobileOpen ? { opacity: 1, y: 0, transition: { delay: 0.1 + i * 0.05 } } : { opacity: 0, y: 20 }}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.nav>
  );
}
