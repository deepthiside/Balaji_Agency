import React from 'react';
import heroVideo from '../assets/images/video2.mp4';

export default function HeroSection() {
  return (
    <section className="relative w-full pt-[4.5rem] md:pt-0 md:min-h-screen bg-[#06263b] overflow-hidden select-none">
      {/* High-Performance Widescreen Video Background */}
      <div className="relative w-full aspect-video md:absolute md:inset-0 md:h-full md:aspect-auto overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover scale-[1.01]"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
