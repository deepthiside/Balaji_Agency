import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import './MagicBento.css';

const BentoCardGrid = ({ children, gridRef }) => (
  <div ref={gridRef} className="card-grid max-w-7xl mx-auto px-6 py-12">
    {children}
  </div>
);

const cardGradients = [
  'linear-gradient(137deg, #A855F7 0%, #EC4899 45%, #F43F5E 100%)', // Social Media Marketing (Purple/Pink)
  'linear-gradient(137deg, #3B82F6 0%, #06B6D4 45%, #10B981 100%)', // Social Media Advertising (Blue/Cyan)
  'linear-gradient(137deg, #10B981 0%, #84CC16 45%, #EAB308 100%)', // Web Development (Green/Lime)
  'linear-gradient(137deg, #6366F1 0%, #4F46E5 45%, #D946EF 100%)', // Automation (Indigo/Violet)
  'linear-gradient(137deg, #F59E0B 0%, #EF4444 45%, #EC4899 100%)', // AI Content & Influencers (Gold/Orange)
  'linear-gradient(137deg, #EC4899 0%, #F43F5E 45%, #A855F7 100%)'  // Digital Invitations (Pink/Rose)
];

const MagicBento = ({
  glowColor = '168, 85, 247',
  enableTilt = true,
  enableMagnetism = true,
  enableBorderGlow = true
}) => {
  const gridRef = useRef(null);

  return (
    <section id="services" className="bento-section bg-[#E3DAC9] py-24 border-t border-[#1C1917]/10 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#A5C5E8]/15 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 mb-12 relative z-10">
        <div className="text-sm font-body text-[#1C1917]/70 mb-4 tracking-widest uppercase font-semibold">// Our Expertise</div>
        <h2 className="font-heading italic text-[#1C1917] text-5xl md:text-7xl leading-none tracking-tight">
          Our Services
        </h2>
      </div>
 
      <BentoCardGrid gridRef={gridRef}>
        {servicesData.map((card, index) => {
          const baseClassName = `magic-bento-card`;
          const gradient = cardGradients[index % cardGradients.length];
          
          return (
            <div key={card.id} className="relative group w-full h-full">
              {/* Glow Background (Outside overflow-hidden for overflow bleed effect) */}
              <div 
                className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-60 rounded-[20px] pointer-events-none transition-all duration-500 scale-105"
                style={{ 
                  background: gradient, 
                  filter: "blur(40px)",
                  zIndex: 0
                }}
              />
 
              {/* Foreground Card with Gradient Border */}
              <Link
                to={`/services/${card.id}`}
                className={`${baseClassName} relative z-10 block w-full h-full rounded-[20px] overflow-hidden shadow-xl shadow-black/35 hover:shadow-2xl hover:shadow-[#A5C5E8]/10 transition-all duration-500`}
                style={{
                  border: '3px solid transparent',
                  background: `linear-gradient(#FFFFFF, #FFFFFF) padding-box, ${gradient} border-box`,
                  aspectRatio: '4/3',
                  minHeight: '200px'
                }}
                onMouseMove={(e) => {
                  const el = e.currentTarget;
                  const rect = el.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
 
                  if (enableTilt) {
                    const rotateX = ((y - centerY) / centerY) * -8;
                    const rotateY = ((x - centerX) / centerX) * 8;
                    gsap.to(el, {
                      rotateX,
                      rotateY,
                      duration: 0.2,
                      ease: 'power2.out',
                      transformPerspective: 1000
                    });
                  }
 
                  if (enableMagnetism) {
                    const magnetX = (x - centerX) * 0.04;
                    const magnetY = (y - centerY) * 0.04;
                    gsap.to(el, {
                      x: magnetX,
                      y: magnetY,
                      duration: 0.4,
                      ease: 'power2.out'
                    });
                  }
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  gsap.to(el, {
                    rotateX: 0,
                    rotateY: 0,
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    ease: 'power2.out'
                  });
                }}
              >
                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0 transition-transform duration-700 ease-out group-hover:scale-105">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-65 group-hover:opacity-90 grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  {/* Gradient Overlay for Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/30 z-10"></div>
                </div>

                <div className="magic-bento-card__header relative z-10 flex justify-between items-start mb-12">
                  <div className="magic-bento-card__label text-xs font-body text-[#1C1917]/50 font-bold tracking-widest uppercase">// 0{index + 1}</div>
                  <div className="w-10 h-10 rounded-full border border-stone-200/80 flex items-center justify-center bg-stone-50 backdrop-blur-sm group-hover:border-stone-300 group-hover:bg-[#8C2E20] group-hover:text-white transition-all duration-300">
                    <svg className="w-5 h-5 text-stone-700 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                    </svg>
                  </div>
                </div>
                
                <div className="magic-bento-card__content relative z-10 mt-auto">
                  <h3 className="magic-bento-card__title text-2xl md:text-3xl font-heading italic text-[#1C1917] mb-3 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="magic-bento-card__description text-sm text-[#57534E] font-body font-light leading-relaxed line-clamp-2">
                    {card.description}
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </BentoCardGrid>
    </section>
  );
};

export default MagicBento;
