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

const MagicBento = ({
  glowColor = '168, 85, 247',
  enableTilt = true,
  enableMagnetism = true,
  enableBorderGlow = true
}) => {
  const gridRef = useRef(null);

  return (
    <section id="services" className="bento-section bg-black py-24 border-t border-white/10 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 mb-12 relative z-10">
        <div className="text-sm font-body text-white/70 mb-4 tracking-widest uppercase">// Our Expertise</div>
        <h2 className="font-heading italic text-white text-5xl md:text-7xl leading-none tracking-tight">
          Our Services
        </h2>
      </div>

      <BentoCardGrid gridRef={gridRef}>
        {servicesData.map((card, index) => {
          const baseClassName = `magic-bento-card ${enableBorderGlow ? 'magic-bento-card--border-glow' : ''}`;
          
          return (
            <Link
              key={card.id}
              to={`/services/${card.id}`}
              className={`${baseClassName} group`}
              style={{
                '--glow-color': glowColor
              }}
              onMouseMove={(e) => {
                const el = e.currentTarget;
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                if (enableTilt) {
                  const rotateX = ((y - centerY) / centerY) * -10;
                  const rotateY = ((x - centerX) / centerX) * 10;
                  gsap.to(el, {
                    rotateX,
                    rotateY,
                    duration: 0.2,
                    ease: 'power2.out',
                    transformPerspective: 1000
                  });
                }

                if (enableMagnetism) {
                  const magnetX = (x - centerX) * 0.05;
                  const magnetY = (y - centerY) * 0.05;
                  gsap.to(el, {
                    x: magnetX,
                    y: magnetY,
                    duration: 0.4,
                    ease: 'power2.out'
                  });
                }

                el.style.setProperty('--glow-x', `${x}px`);
                el.style.setProperty('--glow-y', `${y}px`);
                el.style.setProperty('--glow-intensity', '1');
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
                el.style.setProperty('--glow-intensity', '0');
              }}
            >
              {/* Background Image Layer */}
              <div className="absolute inset-0 z-0 transition-transform duration-700 ease-out group-hover:scale-110">
                <img 
                  src={card.image} 
                  alt={card.title}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                />
                {/* Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
              </div>

              <div className="magic-bento-card__header relative z-10 flex justify-between items-start mb-12">
                <div className="magic-bento-card__label text-xs font-body text-white/40 tracking-widest uppercase">// 0{index + 1}</div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-sm group-hover:border-white/30 transition-colors">
                  <svg className="w-5 h-5 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                  </svg>
                </div>
              </div>
              
              <div className="magic-bento-card__content relative z-10 mt-auto">
                <h3 className="magic-bento-card__title text-2xl md:text-3xl font-heading italic text-white mb-3 tracking-tight">
                  {card.title}
                </h3>
                <p className="magic-bento-card__description text-sm text-white/50 font-body font-light leading-relaxed line-clamp-2">
                  {card.description}
                </p>
              </div>
              
              {/* Internal Glow Effect Layer */}
              <div className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                   style={{
                     background: `radial-gradient(circle at var(--glow-x) var(--glow-y), rgba(${glowColor}, 0.15), transparent 70%)`
                   }}>
              </div>
            </Link>
          );
        })}
      </BentoCardGrid>
    </section>
  );
};

export default MagicBento;
