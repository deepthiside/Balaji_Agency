import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import VariableProximity from './VariableProximity.jsx';
import founderImg from '../assets/images/founder.png';

export default function Founder() {
  const sectionRef = useRef(null);
  return (
    <section id="founder" ref={sectionRef} className="relative w-full py-20 px-6 md:px-16 lg:px-20 bg-black overflow-hidden border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse gap-12 items-center">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
            className="text-sm font-body text-white/80 mb-6"
          >
            // Leadership
          </motion.div>
 
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading italic text-white text-5xl md:text-6xl leading-[0.9] tracking-[-2px] mb-4"
          >
            <VariableProximity
              label={'Meet the Founder'}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={sectionRef}
              radius={100}
              falloff="linear"
            />
          </motion.h2>
 
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/60 font-body uppercase tracking-widest text-sm mb-8"
          >
            Balaji Creatives
          </motion.p>
 
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/80 font-body font-light text-lg mb-6 max-w-xl leading-relaxed"
          >
            With over a decade of experience in digital marketing and a passion for emerging technologies, our founder established Balaji Creatives to bridge the gap between AI and human creativity.
          </motion.p>
 
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white/80 font-body font-light text-lg max-w-xl leading-relaxed"
          >
            "We don't just adapt to the future of marketing; we build it. By empowering our talented team with the best AI tools, we deliver results that were previously unimaginable for our clients in Jaipur and beyond."
          </motion.p>
        </div>
 
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 w-full max-w-md relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-[2rem] blur opacity-30 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="relative rounded-[2rem] overflow-hidden border border-white/10 aspect-[4/5]">
            <img 
              src={founderImg} 
              alt="Jyoti Meena - Founder & CEO" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="text-white font-heading italic text-2xl tracking-tight mb-1">Jyoti Meena</div>
                <div className="text-purple-400 font-body text-xs uppercase tracking-[0.2em] font-bold">Founder & CEO</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
