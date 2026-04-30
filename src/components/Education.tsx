'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const education = [
  {
    id: '01',
    qualification: 'B.Tech in Computer Engineering',
    institution: 'NMIMS MPSTME',
    period: '2023 — Currently Pursuing',
    location: 'Mumbai, India',
    status: 'Currently Pursuing',
  },
  {
    id: '02',
    qualification: 'Higher Secondary Education — 12th',
    institution: 'R.N. Podar School',
    period: '2022 - 2023',
    location: 'Mumbai, India',
    status: 'Completed',
  },
  {
    id: '03',
    qualification: 'Secondary Education — 10th',
    institution: 'R.N. Podar School',
    period: '2020 - 2021',
    location: 'Mumbai, India',
    status: 'Completed',
  },
];

export const Education = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  return (
    <section id="education" className="scroll-mt-28 py-32 px-6 md:px-12 relative overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs text-neutral-500 tracking-[0.3em] uppercase block mb-4">/06</span>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight">Education</h2>
          <p className="text-neutral-600 mt-4 max-w-2xl">
            Academic foundation in computer engineering and technical problem-solving.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div 
            className="absolute left-3 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#d4a574] to-transparent origin-top" 
            style={{ scaleY: scrollYProgress, opacity: useTransform(scrollYProgress, [0, 1], [0.3, 1]) }}
          />

          <div className="space-y-10 md:space-y-12">
            {education.map((item, index) => {
              const alignLeft = index % 2 === 0;

              return (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, x: alignLeft ? -50 : 50, y: 30 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative md:grid md:grid-cols-2 md:gap-12 group"
                >
                  <motion.span 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="absolute left-3 md:left-1/2 md:-translate-x-1/2 top-10 h-4 w-4 rounded-full border-2 border-[#d4a574] bg-black group-hover:bg-[#d4a574] transition-colors duration-500 z-10" 
                  />

                  <div
                    className={`pl-10 md:pl-0 ${alignLeft ? 'md:pr-16' : 'md:col-start-2 md:pl-16'}`}
                  >
                    <motion.div 
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="border border-neutral-900 bg-black/45 backdrop-blur-sm p-7 md:p-9 hover:border-[#d4a574] transition-colors duration-300"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <span className="text-xs tracking-[0.2em] uppercase text-[#d4a574]">{item.id}</span>
                        <span className="text-xs tracking-[0.2em] uppercase text-[#d4a574]">
                          {item.period}
                        </span>
                      </div>

                      <h3 className="mt-4 text-2xl md:text-3xl font-black leading-tight">{item.qualification}</h3>
                      <p className="mt-2 text-neutral-300">{item.institution}</p>

                      <div className="mt-6 flex flex-wrap gap-3">
                        <span className="px-4 py-2 border border-neutral-800 text-xs tracking-[0.2em] uppercase text-neutral-500">
                          {item.location}
                        </span>
                        <span className="px-4 py-2 bg-[#d4a574] text-black text-xs tracking-[0.2em] uppercase font-bold">
                          {item.status}
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
