'use client';

import { motion } from 'framer-motion';

const publication = {
  title: 'Classification of Celestial Bodies using Support Vector Machines',
  authors: 'Kanish Jain, Kaivalya Joglekar, Joel Jacob, Supriya Agrawal',
  venue: 'ICICC 2026 · Springer',
  description:
    'Peer-reviewed research focused on classifying galaxies, stars, and quasars from SDSS FITS imagery using a machine learning pipeline involving preprocessing, segmentation, feature extraction, feature selection, model training, and evaluation.',
  highlights: [
    'Built an end-to-end ML workflow from FITS preprocessing to model evaluation.',
    'Applied feature-driven SVM modeling for multi-class celestial body classification.',
    'Structured experiments for reproducibility and research-oriented analysis.',
  ],
};

export const Publications = () => {
  return (
    <section id="publications" className="py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs text-neutral-500 tracking-[0.3em] uppercase block mb-4">/05</span>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tight">Publications</h2>
          <p className="text-neutral-600 mt-4 max-w-2xl">
            Research work in machine learning and scientific image classification.
          </p>
        </motion.div>

        <div className="relative pl-8 md:pl-12">
          <div className="absolute left-2 md:left-4 top-0 bottom-0 w-px bg-neutral-900" />

          <motion.article
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative border border-neutral-900 p-8 md:p-10 hover:border-[#d4a574] transition-colors duration-300"
          >
            <span className="absolute -left-[2.35rem] md:-left-[2.85rem] top-10 h-5 w-5 rounded-full border-2 border-[#d4a574] bg-black" />

            <span className="text-xs tracking-[0.2em] uppercase text-[#d4a574] block mb-3">ICICC 2026 · Springer</span>
            <h3 className="text-2xl md:text-4xl font-black leading-tight">{publication.title}</h3>
            <p className="text-neutral-500 mt-3 text-sm md:text-base">{publication.authors}</p>

            <p className="text-neutral-400 mt-6 leading-relaxed">{publication.description}</p>

            <div className="mt-8 space-y-3">
              {publication.highlights.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="text-[#d4a574] mt-1">◆</span>
                  <p className="text-neutral-300">{point}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#publications"
                className="inline-flex items-center gap-3 px-6 py-3 bg-[#d4a574] text-black font-bold tracking-wider text-sm hover:bg-white transition-colors"
              >
                Read Research
                <span>→</span>
              </a>
              <span className="inline-flex items-center px-4 py-3 border border-neutral-800 text-neutral-500 text-xs tracking-[0.2em] uppercase">
                {publication.venue}
              </span>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};
