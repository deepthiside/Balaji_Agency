import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactPopup({ isOpen, onClose }) {
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact_number: '',
    service: 'Marketing', // Default to Marketing matching Step 2 options
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setErrorMsg('');

    const templateParams = {
      name: formData.name,
      email: formData.email,
      contact_number: formData.contact_number,
      title: formData.service || 'New Inquiry (Popup)',
      message: formData.message,
    };

    // Retrieve active credentials from environment variables or active fallbacks
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_42mu89b';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_00rrvxe';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'UJbRCenXChB6FVvX5';

    emailjs.send(serviceId, templateId, templateParams, {
      publicKey: publicKey
    })
      .then(() => {
        setIsSending(false);
        setIsSuccess(true);
        // Automatically close after a short delay so they see the success state
        setTimeout(() => {
          onClose();
        }, 3000);
      })
      .catch((err) => {
        console.error('EmailJS Popup Error:', err);
        setIsSending(false);
        setErrorMsg('Failed to send. Please check your connection and try again.');
      });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
        >
          {/* Overlay Click to Close */}
          <div className="absolute inset-0 cursor-default" onClick={onClose} />

          {/* Popup Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-[420px] bg-white rounded-3xl shadow-2xl p-6 md:p-8 flex flex-col z-10 border border-stone-200/80 font-body text-[#1C1917] max-h-[90vh] overflow-visible"
          >
            {/* Close Button overlapping Top Right */}
            <button
              onClick={onClose}
              className="absolute -top-3 -right-3 md:-top-4 md:-right-4 bg-black border border-stone-800 text-white rounded-full w-9 h-9 md:w-10 md:h-10 flex items-center justify-center shadow-lg hover:scale-105 hover:bg-stone-900 transition-all z-20 cursor-pointer"
              aria-label="Close form"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Scrollable Form Content */}
            <div className="overflow-y-auto pr-1 flex-grow scrollbar-thin">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.div
                    key="popup-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                  >
                    <div className="space-y-1">
                      <span className="text-xs tracking-[0.2em] font-bold text-[#59425A] uppercase block">// Quick Inquiry</span>
                      <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1C1917] tracking-tight">Let's build together</h2>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Name Input */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-stone-500 uppercase tracking-wider pl-1">Name</label>
                        <input
                          type="text"
                          placeholder="Enter your name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-stone-50 border border-stone-200/80 rounded-2xl px-5 py-3.5 text-[#1C1917] placeholder-stone-400 font-body focus:outline-none focus:bg-white focus:border-[#3B4CB8] focus:ring-1 focus:ring-[#3B4CB8]/50 transition-all text-sm font-medium"
                        />
                      </div>

                      {/* Phone Input */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-stone-500 uppercase tracking-wider pl-1">Phone</label>
                        <input
                          type="tel"
                          placeholder="Enter your mobile number"
                          required
                          value={formData.contact_number}
                          onChange={(e) => setFormData({ ...formData, contact_number: e.target.value })}
                          className="w-full bg-stone-50 border border-stone-200/80 rounded-2xl px-5 py-3.5 text-[#1C1917] placeholder-stone-400 font-body focus:outline-none focus:bg-white focus:border-[#3B4CB8] focus:ring-1 focus:ring-[#3B4CB8]/50 transition-all text-sm font-medium"
                        />
                      </div>

                      {/* Email Input */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-stone-500 uppercase tracking-wider pl-1">Email</label>
                        <input
                          type="email"
                          placeholder="Enter your email address"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-stone-50 border border-stone-200/80 rounded-2xl px-5 py-3.5 text-[#1C1917] placeholder-stone-400 font-body focus:outline-none focus:bg-white focus:border-[#3B4CB8] focus:ring-1 focus:ring-[#3B4CB8]/50 transition-all text-sm font-medium"
                        />
                      </div>

                      {/* Service Category Selection (Dropdown matching main contact form options) */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-stone-500 uppercase tracking-wider pl-1">Service Required</label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full bg-stone-50 border border-stone-200/80 rounded-2xl px-5 py-3.5 text-[#1C1917] font-body focus:outline-none focus:bg-white focus:border-[#3B4CB8] focus:ring-1 focus:ring-[#3B4CB8]/50 transition-all text-sm font-semibold cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%252357534E%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[right_1.25rem_center] bg-no-repeat pr-12"
                        >
                          <option value="Marketing">Marketing (Performance & Brand)</option>
                          <option value="Development">Development (Web & App)</option>
                          <option value="Design">Design (Creative & Brand Identity)</option>
                          <option value="Other">Other Solutions</option>
                        </select>
                      </div>

                      {/* Message Textarea */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-stone-500 uppercase tracking-wider pl-1">How we Can Help?</label>
                        <textarea
                          placeholder="Tell us about your project or growth goals..."
                          rows={3}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full bg-stone-50 border border-stone-200/80 rounded-2xl px-5 py-3.5 text-[#1C1917] placeholder-stone-400 font-body focus:outline-none focus:bg-white focus:border-[#3B4CB8] focus:ring-1 focus:ring-[#3B4CB8]/50 transition-all text-sm font-medium resize-none"
                        />
                      </div>

                      {/* Error Display */}
                      {errorMsg && (
                        <div className="flex items-center gap-2 text-red-600 text-xs font-body bg-red-50 p-3 rounded-xl border border-red-200 animate-shake">
                          <AlertCircle className="w-4 h-4 flex-shrink-0" />
                          <span>{errorMsg}</span>
                        </div>
                      )}

                      {/* Action Button */}
                      <button
                        type="submit"
                        disabled={isSending}
                        className="w-fit bg-[#3B4CB8] hover:bg-[#2C3B9E] text-white rounded-xl px-7 py-3.5 font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#3B4CB8]/20 disabled:opacity-75 cursor-pointer text-sm tracking-wide mt-2"
                      >
                        {isSending ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <span>Send Message</span>
                        )}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="popup-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-10 space-y-5"
                  >
                    <div className="flex justify-center">
                      <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-8 h-8 text-green-500" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-heading font-bold text-[#1C1917]">Message Sent!</h3>
                      <p className="text-stone-500 text-sm max-w-xs mx-auto leading-relaxed">
                        Thank you for reaching out. We will get in touch with you within 24 hours.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
