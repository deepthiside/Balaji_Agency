import React from 'react';
import LogoLoop from './LogoLoop';
import RishabhLogo from '../assets/images/rishabhjwellers.png';
import BWlogo from '../assets/images/BW.jpeg';
import JBlogo from '../assets/images/jb-jewellers.png';
import modern_baisalogo from '../assets/images/modern_baisa.png';
import prakshat_group_logo from '../assets/images/prakash_hospital.jpeg';
import KNlogo from '../assets/images/KN.jpeg';
import goeasylogo from '../assets/images/goeasylogo.png';

const clientLogos = [
  { src: RishabhLogo, alt: "Rishabh Jwellers" },
  { src: BWlogo, alt: "BW" },
  { src: JBlogo, alt: "JB" },
  { src: modern_baisalogo, alt: "Modern Baisa" },
  { src: prakshat_group_logo, alt: "Prakash Group" },
  { src: KNlogo, alt: "KN" },
  { src: goeasylogo, alt: "GoEasy" }
];

export default function OurClients() {
  return (
    <section id="clients" className="relative bg-[#FAFAF9] py-24 border-t border-[#1C1917]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-10">
        <div className="text-sm font-body text-[#1C1917]/85 font-semibold mb-4 tracking-widest uppercase">// Strategic Partners</div>
        <h2 className="font-heading italic text-[#1C1917] text-5xl md:text-6xl leading-none tracking-tight">
          Our Clients & Partners
        </h2>
        <p className="text-[#2D2924] font-body font-light max-w-2xl mx-auto mt-6">
          Collaborating with industry leaders to deliver exceptional digital experiences and growth strategies.
        </p>
      </div>

      <div className="relative py-12 bg-white border-y border-stone-200 overflow-hidden">
        <LogoLoop
          logos={clientLogos}
          speed={40}
          direction="left"
          logoHeight={90}
          gap={120}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#FAFAF9"
          ariaLabel="Our clients"
        />
      </div>

      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/10 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
}
