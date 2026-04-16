"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CredentialTicker from "@/components/CredentialTicker";
import Approach from "@/components/Approach";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
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
    </>
  );
}
