import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import VariableProximity from './VariableProximity.jsx';

export default function Contact() {
  const contactHeaderRef = useRef(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep(); // Move to success state
  };

  return (
    <section id="contact" ref={contactHeaderRef} className="relative py-24 px-6 md:px-16 lg:px-20 bg-[#E3DAC9] overflow-hidden border-t border-[#1C1917]/10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 relative z-10">
        
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col flex-1"
        >
          <div className="text-sm font-body text-[#1C1917]/70 mb-6 font-bold uppercase tracking-[0.2em] animate-pulse">// Contact Mission Control</div>
          
          <h2 className="font-heading italic text-[#1C1917] text-5xl md:text-7xl leading-[1] md:leading-[0.9] tracking-tight md:tracking-[-3px]">
            <VariableProximity
              label="Let’s scale your brand together"
              className="font-heading italic text-[#1C1917]"
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={contactHeaderRef}
              radius={100}
              falloff="linear"
            />
          </h2>
          
          <p className="text-[#1C1917]/90 font-body font-light leading-relaxed max-w-xl mt-6">
            Get in touch with our team to discuss your next big marketing campaign, creative strategy, or digital growth goals.
          </p>

          <div className="mt-10 flex flex-col gap-4">
            <div className="bg-white border border-stone-200/80 shadow-md rounded-full px-5 py-4 flex items-center gap-4 w-full md:w-fit text-[#1C1917]">
              <Mail className="w-5 h-5 text-[#B5C161]" />
              <span className="text-[#1C1917] font-body text-sm font-medium">info@balajicreatives.com</span>
            </div>
            <div className="bg-white border border-stone-200/80 shadow-md rounded-full px-5 py-4 flex items-center gap-4 w-full md:w-fit text-[#1C1917]">
              <Phone className="w-5 h-5 text-[#B5C161]" />
              <span className="text-[#1C1917] font-body text-sm font-medium">+91 9672010821</span>
            </div>
            <div className="bg-white border border-stone-200/80 shadow-md rounded-full px-5 py-4 flex items-center gap-4 w-full md:w-fit text-[#1C1917]">
              <MapPin className="w-5 h-5 text-[#B5C161]" />
              <span className="text-[#1C1917] font-body text-sm font-medium">Jaipur, Rajasthan</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Stepper Form */}
        <motion.div
          initial={{ opacity: 0, x: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-stone-200/80 shadow-2xl shadow-stone-200/30 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8">
            <div className="text-xs font-body text-stone-400 font-bold uppercase tracking-widest">
              Step {step > 3 ? 3 : step} / 3
            </div>
          </div>

          <form onSubmit={handleSubmit} className="relative z-10">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-heading italic text-[#1C1917]">Who are we speaking with?</h3>
                  <div className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      required
                      className="w-full bg-stone-50 border border-stone-200/80 rounded-2xl px-6 py-4 text-[#1C1917] placeholder-stone-400 font-body focus:outline-none focus:bg-white focus:border-[#A5C5E8] focus:ring-1 focus:ring-[#A5C5E8] transition-all"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      required
                      className="w-full bg-stone-50 border border-stone-200/80 rounded-2xl px-6 py-4 text-[#1C1917] placeholder-stone-400 font-body focus:outline-none focus:bg-white focus:border-[#A5C5E8] focus:ring-1 focus:ring-[#A5C5E8] transition-all"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <button 
                    type="button" 
                    onClick={nextStep}
                    disabled={!formData.name || !formData.email}
                    className="w-full bg-[#1C1917] text-white rounded-full py-4 font-bold hover:bg-[#A5C5E8] hover:text-[#1C1917] transition-all disabled:opacity-50"
                  >
                    Next Step
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-heading italic text-[#1C1917]">What can we help you with?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {['Marketing', 'Development', 'Design', 'Other'].map(s => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setFormData({...formData, service: s})}
                        className={`px-4 py-3 rounded-xl border text-sm font-body transition-all ${
                          formData.service === s 
                          ? 'bg-[#A5C5E8] border-[#A5C5E8] text-[#1C1917] shadow-md font-bold' 
                          : 'bg-stone-50 border-stone-200 text-[#57534E] hover:border-stone-400 hover:bg-stone-100'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <button type="button" onClick={prevStep} className="flex-1 border border-stone-200 rounded-full py-4 text-[#57534E] font-bold hover:bg-stone-50 transition-colors">Back</button>
                    <button 
                      type="button" 
                      onClick={nextStep}
                      disabled={!formData.service}
                      className="flex-[2] bg-[#1C1917] text-white rounded-full py-4 font-bold hover:bg-[#A5C5E8] hover:text-[#1C1917] transition-all"
                    >
                      Continue
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-heading italic text-[#1C1917]">Any specific details?</h3>
                  <textarea 
                    placeholder="Tell us about your project..." 
                    rows={4}
                    className="w-full bg-stone-50 border border-stone-200/80 rounded-2xl px-6 py-4 text-[#1C1917] placeholder-stone-400 font-body focus:outline-none focus:bg-white focus:border-[#A5C5E8] focus:ring-1 focus:ring-[#A5C5E8] transition-all"
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  />
                  <div className="flex gap-4">
                    <button type="button" onClick={prevStep} className="flex-1 border border-stone-200 rounded-full py-4 text-[#57534E] font-bold hover:bg-stone-50 transition-colors">Back</button>
                    <button 
                      type="submit"
                      className="flex-[2] bg-[#1C1917] hover:bg-[#1C1917]/95 text-white rounded-full py-4 font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#1C1917]/10"
                    >
                      Send Message <Send className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {step > 3 && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-6"
                >
                  <div className="flex justify-center">
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-heading italic text-[#1C1917] mb-2">Message Received!</h3>
                    <p className="text-[#57534E] font-body">Our team will reach out to you within 24 hours.</p>
                  </div>
                  <button 
                    type="button" 
                    onClick={() => setStep(1)}
                    className="text-stone-400 hover:text-[#A5C5E8] font-body text-sm underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
