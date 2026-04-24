'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Work } from "@/components/Work";
import { TechStack } from "@/components/TechStack";
import { Publications } from "@/components/Publications";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Preloader } from "@/components/Preloader";
import { RingScene } from "@/components/3d/RingScene";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#d4a574]/20 selection:text-[#d4a574]">
      {/* 3D Ring Background */}
      {!loading && <RingScene />}
      
      {/* Noise Overlay */}
      <div className="noise-overlay" />
      
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="relative z-10">
          <Header />
          <About />
          <Marquee />
          <Work />
          <TechStack />
          <Publications />
          <Education />
          <Experience />
          <Contact />
          <Footer />
        </div>
      )}
    </main>
  );
}
