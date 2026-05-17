import React from 'react';
import { motion } from 'framer-motion';
import Galaxy from './Galaxy.jsx';
import BlurText from './BlurText.jsx';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex flex-col bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Galaxy
          mouseRepulsion
          mouseInteraction
          density={0.8}
          glowIntensity={0.2}
          saturation={0}
          hueShift={140}
          twinkleIntensity={0.15}
          rotationSpeed={0.08}
          repulsionStrength={0.8}
          autoCenterRepulsion={0}
          starSpeed={0.4}
          speed={0.8}
        />
      </div>

      <div className="relative z-10 flex flex-col flex-1">
        {/* Hero Content */}
        <div className="flex-1 flex flex-col items-center justify-center pt-32 px-6 md:px-12 text-center">

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 mb-8"
          >
            <div className="h-[1px] w-8 bg-white/20"></div>
            <span className="text-[10px] tracking-[0.4em] uppercase text-white/50 font-medium">Precision Marketing</span>
            <div className="h-[1px] w-8 bg-white/20"></div>
          </motion.div>

          <BlurText
            text="Where Creativity Meets Data-Driven AI."
            className="text-5xl md:text-8xl lg:text-[7rem] font-heading italic text-white leading-[0.9] max-w-4xl tracking-tighter md:tracking-[-5px]"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-lg md:text-xl text-white/60 max-w-2xl font-body font-light leading-relaxed"
          >
            Balaji Creatives is Jaipur's elite digital powerhouse, leveraging next-gen AI to scale brands through strategic marketing and cinematic design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-12"
          >
            <a href="/#contact" className="bg-white text-black rounded-full px-10 py-4 text-sm font-bold flex items-center gap-3 hover:bg-purple-400 hover:text-white transition-all duration-300">
              Start Your Mission
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7" /><path d="M7 7h10v10" />
              </svg>
            </a>
            <a href="/portfolio" className="liquid-glass rounded-full px-10 py-4 text-sm font-medium text-white/80 hover:text-white border border-white/10 transition-colors">
              Explore Our Portfolio
            </a>
          </motion.div>

          {/* Minimal Stats Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-24 grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 opacity-60"
          >
            <div className="text-left">
              <div className="text-3xl font-heading italic text-white mb-1">10x</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40">Avg ROI</div>
            </div>
            <div className="text-left">
              <div className="text-3xl font-heading italic text-white mb-1">200+</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40">Campaigns</div>
            </div>
            <div className="text-left hidden md:block">
              <div className="text-3xl font-heading italic text-white mb-1">15+</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40">Expert Staff</div>
            </div>
          </motion.div>

        </div>

        {/* Global Partners */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="pb-16 flex flex-col items-center gap-6"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase text-white/30">Integrated with</span>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 grayscale opacity-30 hover:grayscale-0 hover:opacity-60 transition-all duration-700">
            <span className="text-xl md:text-2xl font-bold tracking-tighter">GOOGLE</span>
            <span className="text-xl md:text-2xl font-bold tracking-tighter">META</span>
            <span className="text-xl md:text-2xl font-bold tracking-tighter">ADOBE</span>
            <span className="text-xl md:text-2xl font-bold tracking-tighter">SHOPIFY</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
