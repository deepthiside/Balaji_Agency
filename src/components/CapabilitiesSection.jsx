import React from 'react';
import { motion } from 'framer-motion';
import FadingVideo from './FadingVideo.jsx';

export default function CapabilitiesSection() {
  return (
    <section id="services" className="relative min-h-screen w-full flex flex-col bg-black overflow-hidden">
      <FadingVideo
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="relative z-10 px-8 md:px-16 lg:px-20 pt-24 pb-10 flex flex-col min-h-screen">
        <div className="mb-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
            className="text-sm font-body text-white/80 mb-6"
          >
            // Services
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading italic text-white text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px]"
          >
            Marketing<br />evolved
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >

          <div className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col">
            <div className="flex items-start justify-between gap-4">
              <div className="w-11 h-11 liquid-glass rounded-[0.75rem] flex items-center justify-center shrink-0">
                <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21H5Zm1-4h12l-3.75-5-3 4L9 13l-3 4Z" />
                </svg>
              </div>
              <div className="flex flex-wrap justify-end gap-1.5 max-w-[70%]">
                {['Data-Driven', 'Targeted', 'High ROI'].map(tag => (
                  <span key={tag} className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap">{tag}</span>
                ))}
              </div>
            </div>
            <div className="flex-1"></div>
            <div className="mt-6">
              <h3 className="font-heading italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none">Growth Marketing</h3>
              <p className="mt-3 text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">
                We use data and analytics to find the perfect audience for your brand and convert them into loyal customers.
              </p>
            </div>
          </div>

          <div className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col">
            <div className="flex items-start justify-between gap-4">
              <div className="w-11 h-11 liquid-glass rounded-[0.75rem] flex items-center justify-center shrink-0">
                <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 6.47 5.76 10H20v8H4V6.47M22 4h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.89-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4Z" />
                </svg>
              </div>
              <div className="flex flex-wrap justify-end gap-1.5 max-w-[70%]">
                {['Brand Identity', 'UI/UX', 'Content Creation'].map(tag => (
                  <span key={tag} className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap">{tag}</span>
                ))}
              </div>
            </div>
            <div className="flex-1"></div>
            <div className="mt-6">
              <h3 className="font-heading italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none">Creative Design</h3>
              <p className="mt-3 text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">
                From logos to full-scale digital experiences, our creative team builds stunning visuals that tell your story.
              </p>
            </div>
          </div>

          <div className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col">
            <div className="flex items-start justify-between gap-4">
              <div className="w-11 h-11 liquid-glass rounded-[0.75rem] flex items-center justify-center shrink-0">
                <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1Zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7Z" />
                </svg>
              </div>
              <div className="flex flex-wrap justify-end gap-1.5 max-w-[70%]">
                {['AI Integration', 'Automation', 'Analytics'].map(tag => (
                  <span key={tag} className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap">{tag}</span>
                ))}
              </div>
            </div>
            <div className="flex-1"></div>
            <div className="mt-6">
              <h3 className="font-heading italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none">AI Solutions</h3>
              <p className="mt-3 text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">
                Leveraging the latest in AI technology to automate marketing processes and gain deeper insights into your customers.
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
