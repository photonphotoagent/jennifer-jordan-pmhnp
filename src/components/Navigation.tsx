"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";

const navLinks = [
  { label: "Approach", href: "#approach", id: "approach" },
  { label: "Services", href: "#services", id: "services" },
  { label: "About", href: "#about", id: "about" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const menuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
  exit: {
    opacity: 0, y: -16,
    transition: { duration: 0.32, ease: "easeIn" as const },
  },
};

const mobileLinkVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollY } = useScroll();

  // Scroll detection for glassmorphism
  useEffect(() => {
    const unsub = scrollY.on("change", (y) => setScrolled(y > 48));
    return unsub;
  }, [scrollY]);

  // Active section tracking
  useEffect(() => {
    const ids = navLinks.map((l) => l.id);
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.35, rootMargin: "-80px 0px -40% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Body scroll lock for mobile menu
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, menuOpen ? 340 : 0);
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backdropFilter: scrolled ? "blur(28px) saturate(200%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(28px) saturate(200%)" : "none",
          background: scrolled ? "rgba(249, 248, 246, 0.88)" : "transparent",
          borderBottom: scrolled
            ? "1px solid rgba(141, 170, 145, 0.15)"
            : "1px solid transparent",
          boxShadow: scrolled ? "0 1px 32px rgba(45, 52, 54, 0.05)" : "none",
          transition: "background 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease, backdrop-filter 0.5s ease",
        }}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex flex-col leading-none group"
          >
            <span
              className="text-[1.1rem] tracking-tight transition-opacity duration-300 group-hover:opacity-70"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--jj-charcoal)" }}
            >
              Jennifer Jordan
            </span>
            <span
              className="text-[0.56rem] tracking-[0.3em] uppercase mt-[3px]"
              style={{ color: "var(--jj-gold)", fontFamily: "var(--font-inter), sans-serif", fontWeight: 500 }}
            >
              PMHNP-BC
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`nav-link ${activeSection === link.id ? "active" : ""}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="book-btn hidden md:inline-flex"
            onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
          >
            <span>Book Consultation</span>
          </a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
            onClick={() => setMenuOpen((p) => !p)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <motion.span
              className="block h-[1px] w-[22px] origin-center"
              style={{ backgroundColor: "var(--jj-charcoal)" }}
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.span
              className="block h-[1px] w-[22px] origin-center"
              style={{ backgroundColor: "var(--jj-charcoal)" }}
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-[1px] w-[22px] origin-center"
              style={{ backgroundColor: "var(--jj-charcoal)" }}
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            className="mobile-menu-overlay"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="absolute top-5 left-6">
              <span
                className="text-[1.05rem] tracking-tight"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--jj-charcoal)" }}
              >
                Jennifer Jordan
              </span>
            </div>
            <button className="absolute top-6 right-6" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <span className="text-[0.62rem] tracking-[0.22em] uppercase" style={{ color: "var(--jj-stone)" }}>
                Close
              </span>
            </button>

            <div className="flex flex-col items-center gap-7">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  custom={i}
                  variants={mobileLinkVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-[2.6rem] tracking-tight transition-opacity duration-300 hover:opacity-50"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--jj-charcoal)", fontStyle: "italic" }}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <motion.a
              href="#contact"
              className="book-btn mt-2"
              custom={navLinks.length}
              variants={mobileLinkVariants}
              initial="hidden"
              animate="visible"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
            >
              <span>Book Consultation</span>
            </motion.a>

            <div
              className="absolute bottom-10 left-1/2 -translate-x-1/2 w-10 h-[1px]"
              style={{ background: "var(--jj-gold)", opacity: 0.4 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
