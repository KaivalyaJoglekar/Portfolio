'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    const fullText = 'KAIVALYA';

    useEffect(() => {
        const duration = 2000;
        const steps = 100;
        const intervalTime = duration / steps;
        
        const timer = setInterval(() => {
            setCount((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(onComplete, 400);
                    return 100;
                }
                const increment = prev < 80 ? 2 : 1;
                return Math.min(prev + increment, 100);
            });
        }, intervalTime);

        // Text reveal
        let charIndex = 0;
        const textTimer = setInterval(() => {
            if (charIndex <= fullText.length) {
                setText(fullText.slice(0, charIndex));
                charIndex++;
            } else {
                clearInterval(textTimer);
            }
        }, 150);

        return () => {
            clearInterval(timer);
            clearInterval(textTimer);
        };
    }, [onComplete]);

    return (
        <motion.div 
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
            exit={{ 
                clipPath: 'inset(0 0 100% 0)',
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
            }}
        >
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-5">
                <div style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                    height: '100%'
                }} />
            </div>

            <div className="relative text-center">
                {/* Giant Counter */}
                <motion.div 
                    className="text-[30vw] font-black leading-none tracking-tighter text-stroke"
                    initial={{ opacity: 0, scale: 1.2 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {String(count).padStart(3, '0')}
                </motion.div>
                
                {/* Name */}
                <motion.div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <span className="text-4xl md:text-6xl font-black tracking-[0.3em] text-[#d4a574]">
                        {text}<span className="animate-pulse">_</span>
                    </span>
                </motion.div>
            </div>
            
            {/* Progress Bar */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48">
                <div className="h-1 bg-neutral-900 overflow-hidden">
                    <motion.div 
                        className="h-full bg-[#d4a574]"
                        style={{ width: `${count}%` }}
                    />
                </div>
                <p className="text-xs text-neutral-600 mt-4 text-center tracking-[0.3em] uppercase">
                    Loading Experience
                </p>
            </div>

            {/* Corner Elements */}
            <div className="absolute top-8 left-8 text-xs text-neutral-700 font-mono">
                PORTFOLIO.2026
            </div>
            <div className="absolute top-8 right-8 text-xs text-neutral-700 font-mono">
                v1.0
            </div>
        </motion.div>
    );
};
