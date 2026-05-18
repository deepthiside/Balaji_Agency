import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import VariableProximity from './VariableProximity.jsx';
import TiltedCard from './TiltedCard.jsx';
import Noise from './Noise.jsx';

export default function WhoWeAre() {
  const containerRef = useRef(null);

  return (
    <section id="who-we-are" ref={containerRef} className="relative w-full py-20 px-6 md:px-16 lg:px-20 bg-[#A5C5E8] overflow-hidden border-t border-[#1C1917]/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
            className="text-sm font-body text-[#1C1917]/70 font-semibold mb-6 animate-pulse"
          >
            // Who We Are
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading italic text-[#1C1917] text-5xl md:text-6xl leading-[0.9] tracking-[-2px] mb-8"
          >
            <VariableProximity
              label="Balaji Creatives"
              className="variable-proximity-demo font-heading italic text-[#1C1917]"
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
            />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[#1C1917]/90 font-body font-light text-lg mb-6 max-w-xl leading-relaxed"
          >
            Based in the vibrant heart of Jaipur, Balaji Creatives was born from a simple idea: blending cutting-edge AI technology with unparalleled creative vision. We are a team of strategists, designers, and innovators dedicated to pushing the boundaries of what's possible in digital marketing.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-[#1C1917]/90 font-body font-light text-lg max-w-xl leading-relaxed"
          >
            Our mission is to help brands connect with their audiences in meaningful ways, using data-driven insights and stunning visuals to drive real growth.
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 w-full"
        >
          <div className="bg-white border border-stone-200 shadow-xl shadow-stone-200/50 rounded-[2rem] p-2 aspect-[4/3] w-full">
            <div className="w-full h-full rounded-[1.8rem] bg-transparent overflow-hidden relative">
              <TiltedCard
                imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2850&auto=format&fit=crop"
                altText="Balaji Creatives Team"
                captionText="Balaji Creatives"
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                loading="lazy"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent w-full h-full rounded-[15px]"></div>
                }
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
