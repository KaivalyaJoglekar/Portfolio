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
    label: 'Phone',
    value: 'Available via direct contact',
    action: 'Call',
    href: 'tel:+917977901515',
    secondaryAction: 'Save contact',
    secondaryHref: '/Kaivalya_Joglekar.vcf',
  },
  {
    label: 'Resume',
    value: 'Current engineering resume',
    action: 'Download PDF',
    href: '/Kaivalya_Joglekar_Resume.pdf',
    download: true,
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
    <section id="contact" ref={containerRef} className="relative scroll-mt-28 overflow-hidden px-6 py-32 md:px-12">
      <motion.div
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 overflow-hidden"
        style={{ x: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
      >
        <span className="text-[50vw] font-black leading-none text-[var(--foreground)] opacity-[0.03]">08</span>
      </motion.div>

      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -left-16 -top-24 h-72 w-72 rounded-full"
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

      <div className="relative mx-auto max-w-7xl">
        <motion.span
          className="mb-10 block font-mono text-xs uppercase tracking-[0.28em] text-[#d4a574]"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          /08 Contact
        </motion.span>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 border border-neutral-800 bg-black/70 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#d4a574]">
              Open For Internships And Product Roles
            </span>

            <h2 className="mt-7 leading-[0.88]">
              <span className="block font-display text-5xl font-black uppercase tracking-[-0.04em] md:text-7xl">Contact</span>
              <span className="font-signature mt-2 block text-6xl italic text-[#d4a574] md:text-8xl">Me</span>
            </h2>

            <p className="font-geist mt-8 max-w-2xl text-lg leading-relaxed text-neutral-400">
              I build across full-stack systems, backend engineering, and practical AI workflows.
              If your team is shipping meaningful products, let&rsquo;s connect.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="mailto:kaivalyajoglekar416@gmail.com"
                className="group inline-flex items-center gap-3 bg-[#d4a574] px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black transition-colors hover:bg-[var(--foreground)]"
              >
                Send Email
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="/Kaivalya_Joglekar_Resume.pdf"
                download
                className="inline-flex items-center gap-3 border border-neutral-800 px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-neutral-200 transition-colors hover:border-[#d4a574] hover:text-[#d4a574]"
              >
                Resume PDF <span>↓</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="border border-neutral-900 bg-black/60 backdrop-blur-sm lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {contactChannels.map((channel) => (
              <div key={channel.label} className="border-b border-neutral-900 p-7 last:border-b-0 md:p-8">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">{channel.label}</p>
                {channel.href ? (
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="font-geist break-words text-sm font-medium text-neutral-200 md:text-base">{channel.value}</p>
                    <div className="flex flex-wrap gap-2">
                      <a
                        href={channel.href}
                        target={channel.href.startsWith('http') ? '_blank' : undefined}
                        rel={channel.href.startsWith('http') ? 'noreferrer' : undefined}
                        download={'download' in channel ? channel.download : undefined}
                        className="inline-flex items-center gap-2 border border-neutral-800 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-300 transition-colors hover:border-[#d4a574] hover:text-[#d4a574]"
                      >
                        {channel.action}
                        <span>{'download' in channel && channel.download ? '↓' : '→'}</span>
                      </a>
                      {'secondaryHref' in channel && channel.secondaryHref && (
                        <a
                          href={channel.secondaryHref}
                          download
                          className="inline-flex items-center gap-2 border border-neutral-800 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-300 transition-colors hover:border-[#d4a574] hover:text-[#d4a574]"
                        >
                          {channel.secondaryAction} <span>＋</span>
                        </a>
                      )}
                    </div>
                  </div>
                ) : (
                  <p className="font-geist text-base font-medium text-neutral-200 md:text-lg">{channel.value}</p>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
