import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// Import review images
import rev2 from '../assets/images/2.jpeg';
import rev3 from '../assets/images/3.jpeg';
import rev4 from '../assets/images/4.jpeg';
import rev5 from '../assets/images/5.jpeg';
import rev6 from '../assets/images/6.jpeg';
import rev7 from '../assets/images/7.jpeg';
import rev8 from '../assets/images/8.jpeg';

const reviewImages = [rev2, rev3, rev4, rev5, rev6, rev7, rev8];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviewImages.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviewImages.length) % reviewImages.length);
  };

  // Get the 3 currently visible reviews in a circular manner
  const visibleReviews = [
    reviewImages[currentIndex],
    reviewImages[(currentIndex + 1) % reviewImages.length],
    reviewImages[(currentIndex + 2) % reviewImages.length],
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#E3DAC9] border-t border-[#1C1917]/10">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#59425A]/8 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1C1917]/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-1.5 rounded-full bg-[#59425A]/15 border border-[#59425A]/35 text-[#59425A] text-xs font-bold tracking-[0.2em] uppercase">
              Client Testimonials
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading italic text-5xl md:text-7xl text-[#1C1917] mb-6 tracking-tight uppercase"
          >
            Where Results Meet <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#59425A] via-[#1C1917] to-[#1C1917]">Satisfaction</span>
          </motion.h2>

          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-[#1C1917]/90 text-lg font-body italic">
              "Excellent" based on <span className="text-[#1C1917] font-bold underline decoration-[#59425A]/50">100+ Google reviews</span>
            </p>

            <div className="mt-6">
              <svg viewBox="0 0 24 24" className="w-32 h-10" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.26 1.07-3.71 1.07-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1c-4.3 0-8.01 2.5-9.82 6.13l3.66 2.84c.87-2.6 3.3-4.59 6.16-4.59z" fill="#EA4335" />
              </svg>
            </div>
          </div>
        </div>

        {/* Interactive Multi-Card Slider */}
        <div className="relative max-w-6xl mx-auto px-12">
          <div className="relative overflow-hidden min-h-[350px] md:min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {visibleReviews.map((imgSrc, idx) => (
                  <motion.div
                    key={`${currentIndex}-${idx}`}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className={`h-[350px] md:h-[400px] rounded-3xl border border-stone-200 bg-white p-6 flex flex-col items-center justify-center shadow-xl shadow-stone-200/35 relative group hover:shadow-2xl hover:border-stone-300 transition-all duration-300 ${
                      idx > 0 ? 'hidden md:flex' : 'flex'
                    }`}
                  >
                    <div className="absolute top-4 left-4 text-[#59425A]/10">
                      <Quote size={40} />
                    </div>
                    <div className="w-full h-full flex items-center justify-center overflow-hidden">
                      <img
                        src={imgSrc}
                        alt={`Review ${((currentIndex + idx) % reviewImages.length) + 1}`}
                        className="w-full h-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Floating Navigation Buttons - outer left & right edges */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 z-20">
            <button
              onClick={prevReview}
              className="w-12 h-12 rounded-full bg-white/95 border border-stone-200 shadow-lg text-stone-700 hover:bg-[#59425A] hover:text-white hover:border-[#59425A] transition-all active:scale-95 group/btn flex items-center justify-center"
            >
              <ChevronLeft className="group-hover/btn:-translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-0 z-20">
            <button
              onClick={nextReview}
              className="w-12 h-12 rounded-full bg-white/95 border border-stone-200 shadow-lg text-stone-700 hover:bg-[#59425A] hover:text-white hover:border-[#59425A] transition-all active:scale-95 group/btn flex items-center justify-center"
            >
              <ChevronRight className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-12">
            {reviewImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === i ? 'w-8 bg-[#59425A]' : 'w-2 bg-stone-300 hover:bg-stone-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
