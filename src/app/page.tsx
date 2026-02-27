"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadScreen from "@/components/LoadScreen";
import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  const handleLoadComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <CustomCursor />
      <div className="noise-overlay" />

      <AnimatePresence mode="wait">
        {!loaded && (
          <LoadScreen key="loader" onComplete={handleLoadComplete} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Navigation />
        <main>
          <Hero />
          <div className="section-divider" />
          <About />
          <Marquee />
          <Services />
          <div className="section-divider" />
          <Process />
          <div className="section-divider" />
          <CTA />
        </main>
        <Footer />
      </motion.div>
    </>
  );
}
