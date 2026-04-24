'use client';

import { motion } from 'framer-motion';

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d4a574]/5 to-transparent pointer-events-none" />

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
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-[0.95]">
              Open to
              <span className="block text-stroke-accent">Technical Opportunities</span>
            </h2>

            <p className="text-neutral-500 text-lg mt-8 max-w-2xl leading-relaxed">
              I am open to internships, collaborations, and software engineering roles across full-stack,
              AI/ML, and backend systems. If you are building something meaningful, I would be glad to connect.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:kaivalyajoglekar416@gmail.com"
                className="group inline-flex items-center gap-3 px-7 py-4 bg-[#d4a574] text-black font-bold tracking-wider text-sm hover:bg-white transition-colors"
              >
                Send Email
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="https://www.linkedin.com/in/kaivalya-joglekar-0bb0b9258"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-7 py-4 border border-neutral-800 text-neutral-300 text-sm tracking-wider hover:border-[#d4a574] hover:text-[#d4a574] transition-colors"
              >
                LinkedIn Profile
              </a>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 border border-neutral-900 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="p-7 md:p-8 border-b border-neutral-900">
              <p className="text-xs tracking-[0.2em] uppercase text-neutral-600 mb-3">Email</p>
              <a
                href="mailto:kaivalyajoglekar416@gmail.com"
                className="text-base md:text-lg text-neutral-200 hover:text-[#d4a574] transition-colors break-all"
              >
                kaivalyajoglekar416@gmail.com
              </a>
            </div>

            <div className="p-7 md:p-8 border-b border-neutral-900">
              <p className="text-xs tracking-[0.2em] uppercase text-neutral-600 mb-3">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/kaivalya-joglekar-0bb0b9258"
                target="_blank"
                rel="noreferrer"
                className="text-base md:text-lg text-neutral-200 hover:text-[#d4a574] transition-colors break-all"
              >
                www.linkedin.com/in/kaivalya-joglekar-0bb0b9258
              </a>
            </div>

            <div className="p-7 md:p-8 border-b border-neutral-900">
              <p className="text-xs tracking-[0.2em] uppercase text-neutral-600 mb-3">GitHub</p>
              <a
                href="https://github.com/KaivalyaJoglekar"
                target="_blank"
                rel="noreferrer"
                className="text-base md:text-lg text-neutral-200 hover:text-[#d4a574] transition-colors break-all"
              >
                github.com/KaivalyaJoglekar
              </a>
            </div>

            <div className="p-7 md:p-8 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-neutral-600 mb-2">Location</p>
                <p className="text-neutral-300">Mumbai, India</p>
              </div>
              <span className="px-4 py-2 bg-[#d4a574] text-black text-xs tracking-[0.2em] uppercase font-bold">
                Available
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
