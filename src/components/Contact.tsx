'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const contactChannels = [
  {
    label: 'Email',
    value: 'kaivalyajoglekar416@gmail.com',
    action: 'Send an email',
    href: 'mailto:kaivalyajoglekar416@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'Professional profile',
    action: 'Open LinkedIn profile',
    href: 'https://www.linkedin.com/in/kaivalya-joglekar-0bb0b9258',
  },
  {
    label: 'GitHub',
    value: 'Code and project work',
    action: 'View GitHub profile',
    href: 'https://github.com/KaivalyaJoglekar',
  },
  {
    label: 'Base',
    value: 'Mumbai, India',
  },
];

export const Contact = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section id="contact" ref={containerRef} className="scroll-mt-28 py-32 px-6 md:px-12 relative overflow-hidden">
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 right-0 pointer-events-none overflow-hidden"
        style={{ x: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
      >
        <span className="text-[50vw] font-black leading-none text-[var(--foreground)] opacity-[0.03]">08</span>
      </motion.div>

      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-24 -left-16 h-72 w-72 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(212,165,116,0.18) 0%, rgba(212,165,116,0) 70%)' }}
          animate={{ x: [0, 20, 0], y: [0, 26, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-28 right-0 h-80 w-80 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(212,165,116,0.14) 0%, rgba(212,165,116,0) 72%)' }}
          animate={{ x: [0, -22, 0], y: [0, -18, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(120,120,120,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(120,120,120,0.25) 1px, transparent 1px)',
            backgroundSize: '90px 90px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.span
          className="text-[#d4a574] text-xs tracking-[0.35em] uppercase block mb-10"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          /08 CONTACT
        </motion.span>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-800 bg-black/70 text-[#d4a574] text-xs tracking-[0.18em] uppercase">
              Open For Internships And Product Roles
            </span>

            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.95] mt-7">
              Contact
              <span className="block text-stroke-accent">Me</span>
            </h2>

            <p className="text-neutral-400 text-lg mt-8 max-w-2xl leading-relaxed">
              I build across full-stack systems, backend engineering, and practical AI workflows.
              If your team is shipping meaningful products, let&rsquo;s connect.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <a
                href="mailto:kaivalyajoglekar416@gmail.com"
                className="group inline-flex items-center gap-3 px-7 py-4 bg-[#d4a574] text-black font-bold tracking-[0.12em] text-sm uppercase hover:bg-[var(--foreground)] transition-colors"
              >
                Send Email
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 border border-neutral-900 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {contactChannels.map((channel) => (
              <div key={channel.label} className="p-7 md:p-8 border-b border-neutral-900 last:border-b-0">
                <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-3">{channel.label}</p>
                {channel.href ? (
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-sm md:text-base text-neutral-300">{channel.value}</p>
                    <a
                      href={channel.href}
                      target={channel.href.startsWith('http') ? '_blank' : undefined}
                      rel={channel.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-800 text-xs tracking-[0.16em] uppercase text-neutral-300 hover:border-[#d4a574] hover:text-[#d4a574] transition-colors"
                    >
                      {channel.action}
                      <span>→</span>
                    </a>
                  </div>
                ) : (
                  <p className="text-base md:text-lg text-neutral-200">{channel.value}</p>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
