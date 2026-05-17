import React from 'react';
import { motion } from 'framer-motion';
import FlyingPosters from './FlyingPosters';
import Office1 from '../assets/images/Office1.jpeg';
import Office2 from '../assets/images/Office2.jpeg';
import Office3 from '../assets/images/Office3.jpeg';
import Office4 from '../assets/images/Office4.jpeg';
import Office5 from '../assets/images/Office5.jpeg';
import Office6 from '../assets/images/Office6.jpeg';


const workspaceImages = [
  Office1,
  Office2,
  Office3,
  Office4,
  Office5,
  Office6
];

export default function OurWorkspace() {
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.883907038933!2d75.807865!3d26.844371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db60e34c9c10f%3A0x63351654c6061730!2sUDB%20Corporate%20Towers!5e0!3m2!1sen!2sin!4v1715535000000!5m2!1sen!2sin`;

  return (
    <section id="workspace" className="relative min-h-screen bg-black py-24 px-6 md:px-16 lg:px-20 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="text-sm font-body text-white/70 mb-4 tracking-widest uppercase">// Our HQ</div>
          <h2 className="font-heading italic text-white text-5xl md:text-7xl leading-none tracking-tight">
            Our Workspace
          </h2>
          <p className="text-white/50 font-body font-light max-w-2xl mt-6">
            Located in the heart of Jaipur, our mission control center is where creativity meets technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch h-[600px]">
          {/* Map Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[2rem] overflow-hidden border border-white/10 group"
          >
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2) brightness(0.8)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
            <div className="absolute bottom-6 left-6 right-6 liquid-glass p-6 rounded-2xl pointer-events-none">
              <h3 className="text-white font-heading italic text-xl mb-1">Jaipur Command Center</h3>
              <p className="text-white/60 text-xs font-body">2nd Floor, UDB Corporate Towers, Malviya Nagar</p>
            </div>
          </motion.div>

          {/* Flying Posters Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[2rem] overflow-hidden bg-white/[0.02] border border-white/10"
          >
            <FlyingPosters
              items={workspaceImages}
              planeWidth={380}
              planeHeight={480}
              distortion={4}
              scrollEase={0.015}
              cameraFov={35}
              cameraZ={25}
            />
            <div className="absolute top-6 right-6 z-20">
              <div className="liquid-glass px-4 py-2 rounded-full text-[10px] text-white/50 uppercase tracking-widest font-body">
                Scroll to explore
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none"></div>
    </section>
  );
}
