import React from 'react';
import LogoLoop from './LogoLoop';
import client1 from '../assets/images/client1.png';
import client2 from '../assets/images/client2.png';
import client3 from '../assets/images/client3.png';
import client4 from '../assets/images/client4.png';
import client5 from '../assets/images/client5.png';
import client6 from '../assets/images/client6.png';
import client7 from '../assets/images/client7.png';

const clientLogos = [
  { src: client1, alt: "Client 1" },
  { src: client2, alt: "Client 2" },
  { src: client3, alt: "Client 3" },
  { src: client4, alt: "Client 4" },
  { src: client5, alt: "Client 5" },
  { src: client6, alt: "Client 6" },
  { src: client7, alt: "Client 7" }
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

      <div className="relative py-4 bg-white border-y border-stone-200/50 overflow-hidden">
        <LogoLoop
          logos={clientLogos}
          speed={40}
          direction="left"
          logoHeight={220}
          gap={-45}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Our clients"
        />
      </div>

      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/10 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
}
