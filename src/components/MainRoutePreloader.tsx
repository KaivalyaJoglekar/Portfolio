'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const MainRoutePreloader = ({ onComplete }: { onComplete: () => void }) => {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const revealTimer = window.setTimeout(() => setVisible(true), 0);
    const hideTimer = window.setTimeout(() => setVisible(false), reduceMotion ? 220 : 1100);

    return () => {
      window.clearTimeout(revealTimer);
      window.clearTimeout(hideTimer);
    };
  }, [onComplete, reduceMotion]);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          data-testid="main-route-preloader"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-black"
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.7, filter: 'blur(14px)' }}
          transition={{ duration: reduceMotion ? 0.14 : 0.48, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden="true"
        >
          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0.65, scale: 0.9 }}
            animate={{ opacity: 1, scale: [0.9, 1, 1.06] }}
            transition={{
              duration: reduceMotion ? 0 : 0.95,
              times: [0, 0.62, 1],
              ease: [0.23, 1, 0.32, 1],
            }}
            className="relative flex items-center text-[#FFFFF0]"
          >
            <motion.span
              initial={reduceMotion ? false : { x: -44, y: -140, opacity: 0, rotate: -7 }}
              animate={{ x: [null, -6, 0], y: 0, opacity: 1, rotate: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.62, times: [0, 0.72, 1], ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-8xl font-black leading-none tracking-[-0.08em] sm:text-9xl"
            >
              K
            </motion.span>
            <motion.span
              initial={reduceMotion ? false : { x: 44, y: 140, opacity: 0, rotate: 7 }}
              animate={{ x: [null, 6, 0], y: 0, opacity: 1, rotate: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.62, delay: 0.04, times: [0, 0.72, 1], ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-8xl font-black leading-none tracking-[-0.08em] sm:text-9xl"
            >
              J
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
