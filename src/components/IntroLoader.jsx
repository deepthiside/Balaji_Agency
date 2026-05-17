import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Shuffle from './Shuffle';

export default function IntroLoader({ onComplete }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Keep loader active for 2.8s to let shuffle resolve and hover/admire the premium typography
    const timer = setTimeout(() => {
      setShow(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: -80,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 bg-black z-[99999] flex flex-col items-center justify-center p-6 select-none overflow-hidden"
        >
          {/* Subtle central ambient lighting to make the dark theme pop */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[140px] pointer-events-none"></div>

          <div className="relative z-10 text-center flex flex-col gap-3 items-center">
            {/* Title: BalajiCreatives */}
            <div className="font-heading italic text-5xl md:text-8xl text-white tracking-tight uppercase leading-none">
              <Shuffle
                text="BalajiCreatives"
                shuffleDirection="down"
                duration={0.7}
                animationMode="evenodd"
                shuffleTimes={2}
                ease="power4.out"
                stagger={0.035}
                threshold={0.1}
                triggerOnce={true}
                triggerOnHover={false}
              />
            </div>

            {/* Subtitle: Let's Grow Together */}
            <div className="font-body text-xs md:text-sm text-white/50 tracking-[0.4em] uppercase mt-2">
              <Shuffle
                text="Let's Grow Together"
                shuffleDirection="up"
                duration={0.7}
                animationMode="random"
                maxDelay={0.2}
                shuffleTimes={2}
                ease="power3.out"
                threshold={0.1}
                triggerOnce={true}
                triggerOnHover={false}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
