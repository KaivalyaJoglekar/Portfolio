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
    period: 'Completed',
    location: 'Mumbai, India',
    status: 'Completed',
  },
  {
    id: '03',
    qualification: 'Secondary Education — 10th',
    institution: 'R.N. Podar School',
    period: 'Completed',
    location: 'Mumbai, India',
    status: 'Completed',
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs text-neutral-500 tracking-[0.3em] uppercase block mb-4">/06</span>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tight">Education</h2>
          <p className="text-neutral-600 mt-4 max-w-2xl">
            Academic foundation in computer engineering and technical problem-solving.
          </p>
        </motion.div>

        <div className="relative pl-8 md:pl-12">
          <div className="absolute left-2 md:left-4 top-0 bottom-0 w-px bg-neutral-900" />

          <div className="space-y-8">
            {education.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="relative border border-neutral-900 p-7 md:p-9 hover:border-[#d4a574] transition-colors duration-300"
              >
                <span className="absolute -left-[2.35rem] md:-left-[2.85rem] top-8 h-5 w-5 rounded-full border-2 border-[#d4a574] bg-black" />

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs tracking-[0.2em] uppercase text-[#d4a574]">{item.id}</span>
                  <span className="text-xs tracking-[0.2em] uppercase text-neutral-500">{item.period}</span>
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
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
