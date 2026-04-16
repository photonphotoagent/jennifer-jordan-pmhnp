"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadScreen from "@/components/LoadScreen";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CredentialTicker from "@/components/CredentialTicker";
import Approach from "@/components/Approach";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const handleComplete = useCallback(() => setLoaded(true), []);

  return (
    <>
      <AnimatePresence>
        {!loaded && <LoadScreen key="loadscreen" onComplete={handleComplete} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Navigation />
        <main>
          <Hero />
          <CredentialTicker />
          <Approach />
          <Services />
          <About />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </>
  );
}
