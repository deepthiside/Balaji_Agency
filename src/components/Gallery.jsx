import React from 'react';
import DomeGallery from './DomeGallery';

// Import all WhatsApp images
import img1 from '../assets/images/WhatsApp Image 2026-05-16 at 10.03.03 PM.jpeg';
import img2 from '../assets/images/WhatsApp Image 2026-05-16 at 10.03.04 PM.jpeg';
import img3 from '../assets/images/WhatsApp Image 2026-05-16 at 10.03.05 PM.jpeg';
import img4 from '../assets/images/WhatsApp Image 2026-05-16 at 10.03.06 PM (1).jpeg';
import img5 from '../assets/images/WhatsApp Image 2026-05-16 at 10.03.06 PM.jpeg';
import img6 from '../assets/images/WhatsApp Image 2026-05-16 at 10.03.07 PM.jpeg';
import img7 from '../assets/images/WhatsApp Image 2026-05-16 at 10.03.10 PM.jpeg';
import img8 from '../assets/images/WhatsApp Image 2026-05-16 at 10.03.18 PM (1).jpeg';
import img9 from '../assets/images/WhatsApp Image 2026-05-16 at 10.03.18 PM.jpeg';
import img10 from '../assets/images/WhatsApp Image 2026-05-16 at 10.03.19 PM (1).jpeg';
import img11 from '../assets/images/WhatsApp Image 2026-05-16 at 10.03.19 PM.jpeg';
import img12 from '../assets/images/WhatsApp Image 2026-05-16 at 10.03.21 PM.jpeg';
import img13 from '../assets/images/WhatsApp Image 2026-05-16 at 7.28.11 AM (1).jpeg';
import img14 from '../assets/images/WhatsApp Image 2026-05-16 at 7.28.11 AM.jpeg';

// Import Office images
import Office1 from '../assets/images/Office1.jpeg';
import Office2 from '../assets/images/Office2.jpeg';
import Office3 from '../assets/images/Office3.jpeg';
import Office4 from '../assets/images/Office4.jpeg';
import Office5 from '../assets/images/Office5.jpeg';
import Office6 from '../assets/images/Office6.jpeg';

const whatsappImages = [
  { src: img1, alt: 'Agency Work 1' },
  { src: Office1, alt: 'Office Workspace 1' },
  { src: img2, alt: 'Agency Work 2' },
  { src: Office2, alt: 'Office Workspace 2' },
  { src: img3, alt: 'Agency Work 3' },
  { src: Office3, alt: 'Office Workspace 3' },
  { src: img4, alt: 'Agency Work 4' },
  { src: Office4, alt: 'Office Workspace 4' },
  { src: img5, alt: 'Agency Work 5' },
  { src: Office5, alt: 'Office Workspace 5' },
  { src: img6, alt: 'Agency Work 6' },
  { src: Office6, alt: 'Office Workspace 6' },
  { src: img7, alt: 'Agency Work 7' },
  { src: img8, alt: 'Agency Work 8' },
  { src: img9, alt: 'Agency Work 9' },
  { src: img10, alt: 'Agency Work 10' },
  { src: img11, alt: 'Agency Work 11' },
  { src: img12, alt: 'Agency Work 12' },
  { src: img13, alt: 'Agency Work 13' },
  { src: img14, alt: 'Agency Work 14' }
];

export default function Gallery() {
  return (
    <section className="py-24 bg-[#FAFAF9] relative overflow-hidden border-t border-[#1C1917]/10" id="gallery">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-6xl font-heading italic tracking-tighter mb-4 text-[#1C1917]">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1C1917] to-[#A5C5E8]">Creative Gallery</span>
        </h2>
        <p className="text-[#1C1917]/90 max-w-2xl mx-auto font-body font-light">
          A visual journey through our latest projects, campaigns, and creative milestones.
        </p>
      </div>
      
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <DomeGallery
          images={whatsappImages}
          fit={0.8}
          minRadius={600}
          maxVerticalRotationDeg={0}
          segments={34}
          dragDampening={2}
          grayscale={false} // User might prefer color for their actual work
          overlayBlurColor="#FAFAF9"
        />
      </div>
    </section>
  );
}
