import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import VariableProximity from './VariableProximity.jsx';

export default function Navbar() {
  const navbarRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = ['Home', 'Services', 'Our Work', 'Who We Are', 'Founder'];

  return (
    <nav ref={navbarRef} className="fixed top-4 left-0 w-full px-4 md:px-8 lg:px-16 z-[100] flex items-center justify-between">
      {/* Logo */}
      <div className="liquid-glass rounded-full flex items-center justify-center px-4 py-2">
        <span className="font-heading italic text-white text-xl md:text-2xl leading-none pt-1">
          <VariableProximity
            label={'Balaji Creatives'}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={navbarRef}
            radius={100}
            falloff="linear"
          />
        </span>
      </div>

      {/* Desktop Nav */}
      <div className="hidden lg:flex liquid-glass rounded-full px-1.5 py-1.5 items-center gap-1">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
            className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors"
          >
            {link}
          </a>
        ))}
        <button className="bg-white text-black rounded-full px-4 py-2 text-sm font-medium font-body flex items-center gap-1.5 whitespace-nowrap ml-1">
          Contact Us
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden liquid-glass w-11 h-11 rounded-full flex items-center justify-center text-white"
      >
        {isMenuOpen ? (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
        ) : (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12h16M4 6h16M4 18h16"/></svg>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-4 right-4 liquid-glass-strong rounded-[2rem] p-6 lg:hidden flex flex-col gap-4 border border-white/10"
          >
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-white py-2 border-b border-white/5"
              >
                {link}
              </a>
            ))}
            <button className="bg-white text-black rounded-full py-3 text-sm font-bold mt-4">
              Contact Us
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
