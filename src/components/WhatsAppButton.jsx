import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const whatsappNumber = "+919672010821";
  const message = "Hello! I'm interested in your services. Can we talk?";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[9999] group"
    >
      {/* Green Circular Button */}
      <div className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center overflow-hidden shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-all duration-300 group-hover:shadow-[0_15px_40px_rgba(37,211,102,0.6)]">
        
        {/* Shine Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
        
        {/* White Icon */}
        <FaWhatsapp className="w-8 h-8 text-white relative z-10" />

        {/* Outer Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
      </div>

      {/* Pulsing Ring */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 -z-10"></div>
    </motion.a>
  );
}
