import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Noise from '../../components/Noise';

export default function ServicePage({ title, description, features, image }) {
  return (
    <div className="min-h-screen bg-[#E3DAC9] text-[#1C1917] relative overflow-hidden selection:bg-[#A5C5E8]/30 selection:text-[#1C1917]">
      <Noise 
        patternSize={250}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={2}
        patternAlpha={15}
      />


      {/* Floating Back Button in top-left corner */}
      <Link 
        to="/#solutions" 
        className="fixed top-6 left-6 z-[1050] inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-stone-200 hover:bg-stone-50 hover:border-stone-300 text-stone-700 hover:text-[#59425A] backdrop-blur-md transition-all duration-300 group shadow-xl text-xs font-semibold font-body tracking-wider uppercase"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>Back to Solutions</span>
      </Link>

      <main className="relative z-10 pt-32 px-6 md:px-16 lg:px-24 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-[#59425A] font-body text-sm tracking-widest uppercase mb-4">// Service Excellence</div>
            <h1 className="text-5xl md:text-7xl font-heading italic leading-[0.9] mb-8 tracking-tighter text-[#1C1917]">
              {title}
            </h1>
            <p className="text-xl text-[#1C1917]/70 font-body font-light leading-relaxed mb-12 max-w-xl">
              {description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="p-6 rounded-3xl border border-stone-200 bg-white hover:bg-stone-50 hover:shadow-lg transition-all shadow-xl shadow-stone-200/50"
                >
                  <h3 className="text-lg font-heading italic text-[#1C1917] mb-2">{feature.title}</h3>
                  <p className="text-sm text-[#1C1917]/60 leading-relaxed font-body font-light">{feature.desc}</p>
                </motion.div>
              ))}
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(20px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative aspect-square rounded-[3rem] overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#59425A]/20 to-transparent z-10 opacity-60 group-hover:opacity-100 transition-opacity"></div>
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            />
          </motion.div>

        </div>
      </main>

      {/* Background elements */}
      <div className="fixed -bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-[#59425A]/10 rounded-full blur-[200px] pointer-events-none"></div>
      <div className="fixed -top-1/4 -left-1/4 w-[600px] h-[600px] bg-[#1C1917]/5 rounded-full blur-[150px] pointer-events-none"></div>
    </div>
  );
}
