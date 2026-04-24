'use client';

import { motion } from 'framer-motion';

export const Logo = () => {
  return (
    <div className="relative group cursor-pointer z-50">
      <motion.div
        className="relative z-10 font-black text-2xl tracking-tighter flex items-center justify-center bg-white text-black w-12 h-12 rounded-sm"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="-ml-1">K</span>
        <span className="-ml-0.5 text-cyan-600">J</span>
      </motion.div>
      <div className="absolute top-1 left-1 w-12 h-12 bg-cyan-500 rounded-sm -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300" />
      <div className="absolute top-2 left-2 w-12 h-12 bg-fuchsia-500 rounded-sm -z-20 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
    </div>
  );
};
