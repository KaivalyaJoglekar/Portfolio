'use client';

import { motion } from 'framer-motion';

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
  return (
    <section id="education" className="scroll-mt-28 py-32 px-6 md:px-12 relative overflow-hidden">
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
          <div className="absolute left-3 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#d4a574]/80 to-transparent" />

          <div className="space-y-10 md:space-y-12">
            {education.map((item, index) => {
              const alignLeft = index % 2 === 0;

              return (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="relative md:grid md:grid-cols-2 md:gap-12"
                >
                  <span className="absolute left-3 md:left-1/2 md:-translate-x-1/2 top-10 h-4 w-4 rounded-full border-2 border-[#d4a574] bg-black shadow-[0_0_20px_rgba(212,165,116,0.4)]" />

                  <div
                    className={`pl-10 md:pl-0 ${alignLeft ? 'md:pr-16' : 'md:col-start-2 md:pl-16'}`}
                  >
                    <div className="border border-neutral-900 bg-black/45 backdrop-blur-sm p-7 md:p-9 hover:border-[#d4a574] transition-colors duration-300">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <span className="text-xs tracking-[0.2em] uppercase text-[#d4a574]">{item.id}</span>
                        <span
                          className={`text-xs tracking-[0.2em] uppercase ${
                            item.id === '01' ? 'text-neutral-500' : 'text-[#d4a574]'
                          }`}
                        >
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
                    </div>
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
