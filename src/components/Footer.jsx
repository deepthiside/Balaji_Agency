import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaInstagram, FaYoutube, FaFacebookF, FaPinterestP } from 'react-icons/fa';
import VariableProximity from './VariableProximity.jsx';
import Noise from './Noise.jsx';

export default function Footer() {
  const footerRef = useRef(null);
  return (
    <footer ref={footerRef} className="relative bg-[#180F19] overflow-hidden border-t border-white/10 px-6 md:px-16 lg:px-20 py-16">

      {/* Top Area */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-16 relative z-10">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-1"
        >
          <div className="flex items-center gap-4">
            <div className="bg-white/10 border border-white/10 shadow-sm rounded-full flex items-center justify-center px-4 py-2">
              <span className="font-heading italic text-white text-2xl leading-none pt-1">
                <VariableProximity
                  label={'Balaji Creatives'}
                  className="font-heading italic text-white"
                  fromFontVariationSettings="'wght' 400, 'opsz' 9"
                  toFontVariationSettings="'wght' 1000, 'opsz' 40"
                  containerRef={footerRef}
                  radius={100}
                  falloff="linear"
                />
              </span>
            </div>
          </div>
          <p className="max-w-md text-[#F5F3EF]/75 font-body font-light leading-relaxed mt-5">
            Engineering humanity’s next frontier through cinematic digital marketing, AI-driven strategies, and immersive creative experiences.
          </p>
        </motion.div>

        {/* Right - Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col gap-3"
          >
            <h4 className="text-white font-body font-medium mb-5">
              <VariableProximity
                label={'Navigation'}
                className="text-white font-body font-medium"
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={footerRef}
                radius={80}
                falloff="linear"
              />
            </h4>
            <a href="#home" className="text-[#F5F3EF]/70 hover:text-[#A5C5E8] transition-all duration-300 font-body text-sm font-medium">Home</a>
            <a href="#services" className="text-[#F5F3EF]/70 hover:text-[#A5C5E8] transition-all duration-300 font-body text-sm font-medium">Services</a>
            <a href="#our-work" className="text-[#F5F3EF]/70 hover:text-[#A5C5E8] transition-all duration-300 font-body text-sm font-medium">Our Work</a>
            <a href="#who-we-are" className="text-[#F5F3EF]/70 hover:text-[#A5C5E8] transition-all duration-300 font-body text-sm font-medium">Who We Are</a>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col gap-3"
          >
            <h4 className="text-white font-body font-medium mb-5">
              <VariableProximity
                label={'Company'}
                className="text-white font-body font-medium"
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={footerRef}
                radius={80}
                falloff="linear"
              />
            </h4>
            <a href="#" className="text-[#F5F3EF]/70 hover:text-[#A5C5E8] transition-all duration-300 font-body text-sm font-medium">About</a>
            <a href="#" className="text-[#F5F3EF]/70 hover:text-[#A5C5E8] transition-all duration-300 font-body text-sm font-medium">Capabilities</a>
            <a href="#" className="text-[#F5F3EF]/70 hover:text-[#A5C5E8] transition-all duration-300 font-body text-sm font-medium">Partners</a>
            <a href="#" className="text-[#F5F3EF]/70 hover:text-[#A5C5E8] transition-all duration-300 font-body text-sm font-medium">Contact</a>
          </motion.div>

          {/* Socials & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            <div>
              <h4 className="text-white font-heading italic text-xl mb-4 relative inline-block">
                Contact Us
                <span className="absolute -bottom-1 left-0 w-8 h-[2px] bg-[#A5C5E8]"></span>
              </h4>
              <div className="flex flex-col gap-3 mt-4">
                <div className="flex items-center gap-3 text-[#F5F3EF]/70 hover:text-[#A5C5E8] transition-colors duration-300 group">
                  <div className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-[#A5C5E8]/10 transition-colors">
                    <MapPin className="w-4 h-4 text-[#A5C5E8]" />
                  </div>
                  <span className="font-body text-sm">Jaipur, Rajasthan</span>
                </div>
                <div className="flex items-center gap-3 text-[#F5F3EF]/70 hover:text-[#A5C5E8] transition-colors duration-300 group">
                  <div className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-[#A5C5E8]/10 transition-colors">
                    <Phone className="w-4 h-4 text-[#A5C5E8]" />
                  </div>
                  <span className="font-body text-sm">+91 9672010821</span>
                </div>
                <div className="flex items-center gap-3 text-[#F5F3EF]/70 hover:text-[#A5C5E8] transition-colors duration-300 group">
                  <div className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-[#A5C5E8]/10 transition-colors">
                    <Mail className="w-4 h-4 text-[#A5C5E8]" />
                  </div>
                  <span className="font-body text-sm">info@balajicreatives.com</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-heading italic text-xl mb-4">Follow Us</h4>
              <div className="flex gap-3">
                <a 
                  href="https://www.instagram.com/balaji_creatives?igsh=NjM3eGtsdmR4dHd6" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-white/10 text-white hover:text-[#180F19] hover:bg-[#A5C5E8] hover:border-[#A5C5E8] border border-white/10 shadow-sm flex items-center justify-center transition-all duration-300"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://youtube.com/@balaji_creatives_agency?si=SXMb7FAXio_xbZ_R" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-white/10 text-white hover:text-[#180F19] hover:bg-[#A5C5E8] hover:border-[#A5C5E8] border border-white/10 shadow-sm flex items-center justify-center transition-all duration-300"
                >
                  <FaYoutube className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.facebook.com/share/1VEEDrEQJL/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-white/10 text-white hover:text-[#180F19] hover:bg-[#A5C5E8] hover:border-[#A5C5E8] border border-white/10 shadow-sm flex items-center justify-center transition-all duration-300"
                >
                  <FaFacebookF className="w-5 h-5" />
                </a>
                <a 
                  href="https://pin.it/77sdnmyCh" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-white/10 text-white hover:text-[#180F19] hover:bg-[#A5C5E8] hover:border-[#A5C5E8] border border-white/10 shadow-sm flex items-center justify-center transition-all duration-300"
                >
                  <FaPinterestP className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, delay: 0.5 }}
        className="max-w-7xl mx-auto mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs font-body text-[#F5F3EF]/40"
      >
        <p>© 2026 Balaji Creatives. All rights reserved.</p>
        <p>Designed for the future of digital marketing.</p>
      </motion.div>

    </footer>
  );
}
