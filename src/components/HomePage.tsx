'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
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
import { RingScene } from "@/components/3d/RingScene";
import { MainRoutePreloader } from "@/components/MainRoutePreloader";

const ScrollReveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 56, filter: 'blur(8px)' }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    viewport={{ once: true, amount: 0.18 }}
    transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

const getSectionTarget = () => {
  if (typeof window !== 'undefined') {
    const storedSection = window.sessionStorage.getItem('returnSection');
    if (storedSection) return storedSection;
  }
  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get('section') ?? window.location.hash.replace('#', '');
};

export const HomePage = () => {
  useEffect(() => {
    const section = getSectionTarget();
    if (!section) return;

    const scrollToSection = () => {
      const target = document.getElementById(section);
      if (!target) return;

      const headerOffset = 112;
      const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: Math.max(0, top), behavior: 'instant' });
    };

    const frame = window.requestAnimationFrame(scrollToSection);
    const timeout = window.setTimeout(scrollToSection, 450);

    if (window.sessionStorage.getItem('returnSection')) {
      window.sessionStorage.removeItem('returnSection');
      window.history.replaceState(null, '', window.location.pathname + window.location.hash);
    }

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, []);

  return (
    <main
      id="home"
      className="min-h-screen bg-black text-[var(--foreground)] selection:bg-[#d4a574]/20 selection:text-[#d4a574]"
    >
      <RingScene />

      <div className="relative z-10">
        <Header />
        <ScrollReveal>
          <About />
        </ScrollReveal>
        <ScrollReveal delay={0.04}>
          <Marquee />
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <Work />
        </ScrollReveal>
        <ScrollReveal delay={0.06}>
          <TechStack />
        </ScrollReveal>
        <ScrollReveal delay={0.07}>
          <Publications />
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <Experience />
        </ScrollReveal>
        <ScrollReveal delay={0.09}>
          <Education />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Contact />
        </ScrollReveal>
        <Footer />
      </div>
    </main>
  );
};
