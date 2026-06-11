'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const MainRoutePreloader = ({ onComplete }: { onComplete: () => void }) => {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.sessionStorage.getItem('kj-preloader-shown') === '1') {
      const completionTimer = window.setTimeout(onComplete, 0);
      return () => window.clearTimeout(completionTimer);
    }

    window.sessionStorage.setItem('kj-preloader-shown', '1');
    const revealTimer = window.setTimeout(() => setVisible(true), 0);
    const hideTimer = window.setTimeout(() => setVisible(false), reduceMotion ? 300 : 1800);

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
          exit={reduceMotion ? { opacity: 0 } : { y: '-100%', opacity: 0 }}
          transition={{ duration: reduceMotion ? 0.16 : 0.8, ease: [0.77, 0, 0.175, 1] }}
          aria-hidden="true"
        >
          <div className="flex flex-col items-center justify-center gap-10">
            <motion.div
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, filter: 'blur(8px)', y: 15 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <h1 className="font-sans text-2xl font-light tracking-tight text-white/90 sm:text-3xl">
                Kaivalya Joglekar
              </h1>
              <p className="mt-3 font-mono text-[10px] tracking-[0.2em] text-[#0d9488] uppercase">
                Engineering &times; Research
              </p>
            </motion.div>
            <div className="h-[1px] w-48 overflow-hidden bg-white/10 sm:w-64">
              <motion.div
                className="h-full origin-left bg-[#0d9488]"
                initial={reduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: reduceMotion ? 0 : 1.4, ease: [0.65, 0, 0.35, 1] }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
