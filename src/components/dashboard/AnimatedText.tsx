'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type AnimatedTextElement = 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type AnimatedTextProps = {
  text: string;
  el?: AnimatedTextElement;
  className?: string;
  once?: boolean;
  delay?: number;
};

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
};

export const AnimatedText = ({
  text,
  el: Wrapper = 'p',
  className,
  once,
  delay = 0,
}: AnimatedTextProps) => {
  const controls = useRef(null);
  const isInView = useInView(controls, { amount: 0.5, once });

  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        ref={controls}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ staggerChildren: 0.02, delayChildren: delay }}
        aria-hidden
      >
        {text.split('').map((char, index) => (
          <motion.span 
            key={`${char}-${index}`} 
            className="inline-block" 
            variants={defaultAnimations}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
};
