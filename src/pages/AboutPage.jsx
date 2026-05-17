import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, Settings, Layers, BarChart, MessageSquare, Heart } from 'lucide-react';
import TargetCursor from '../components/TargetCursor';

const reasons = [
  {
    title: "Expertise",
    icon: <Target className="w-8 h-8 text-purple-400" />,
    description: "Our team consists of experienced professionals who are well-versed in the latest trends and strategies of the digital marketing landscape. We bring a wealth of knowledge to ensure your campaigns are in capable hands."
  },
  {
    title: "Customized Approach",
    icon: <Settings className="w-8 h-8 text-blue-400" />,
    description: "Every business is unique. We take a personalized approach to develop tailored strategies that align with your specific goals and target audiences for maximum impact."
  },
  {
    title: "Comprehensive Services",
    icon: <Layers className="w-8 h-8 text-emerald-400" />,
    description: "From Website Development to SEO, Social Media Marketing, and Paid Ads, we offer a full suite of services. Our integrated approach ensures a cohesive marketing strategy."
  },
  {
    title: "Proven Results",
    icon: <BarChart className="w-8 h-8 text-rose-400" />,
    description: "We have a track record of delivering successful outcomes. Through data-driven strategies and continuous optimization, we achieve measurable results that help your business thrive."
  },
  {
    title: "Transparency",
    icon: <MessageSquare className="w-8 h-8 text-amber-400" />,
    description: "We believe in strong partnerships based on open communication. We keep you informed about campaign progress, provide detailed reports, and are always available for you."
  },
  {
    title: "Client Satisfaction",
    icon: <Heart className="w-8 h-8 text-pink-400" />,
    description: "Your success is our success. We go above and beyond to understand your business, exceed expectations, and establish long-term relationships."
  }
];

export default function AboutPage() {
  useEffect(() => {
    document.title = "About Us | Balaji Creatives - Digital Marketing Agency";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Balaji Creatives is a top digital marketing agency. We specialize in SEO, Social Media, and ROI-driven marketing strategies.');
    }
  }, []);

  return (
    <div className="bg-black min-h-screen text-white font-body selection:bg-purple-500/30 overflow-hidden relative">
      <TargetCursor />
      
      {/* Floating Back Button in top-left corner */}
      <Link 
        to="/" 
        className="fixed top-6 left-6 z-[1050] inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-black/40 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white/70 hover:text-white backdrop-blur-md transition-all duration-300 group shadow-xl text-xs font-medium font-body tracking-wider uppercase"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>Back to Home</span>
      </Link>
      
      {/* Hero Content */}
      <header className="pt-40 pb-20 px-6 max-w-5xl mx-auto text-left relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-purple-400 font-medium mb-4 block">// Who We Are</span>
          <h1 className="font-heading italic text-6xl md:text-8xl lg:text-9xl mb-8 leading-none tracking-tighter">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white/50">Us</span>
          </h1>
          <p className="max-w-3xl mx-auto text-white/70 text-lg md:text-2xl font-light leading-relaxed">
            Best Digital Marketing Agency with experienced digital experts and a proven track record of success. We are passionate about helping our clients achieve their goals.
          </p>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 pb-32 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32 text-center"
        >
          <div className="liquid-glass rounded-3xl p-8 md:p-16 border border-white/10">
            <h2 className="text-3xl md:text-5xl font-heading italic tracking-tight mb-8">Take Your Brand to the Next Level</h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-4xl mx-auto mb-8">
              Balaji Creatives is a Digital Marketing agency that specializes in helping businesses of all sizes to increase their online visibility and grow their brand. We have a deep understanding of the latest technologies and trends. We offer a wide range of services including Website Design and Development, Digital Marketing, E-commerce Solutions, and Mobile App Development.
            </p>
            <Link to="/services" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors">
              Explore Our Services <ArrowLeft className="w-5 h-5 rotate-180" />
            </Link>
          </div>
        </motion.div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-heading italic tracking-tight mb-4">Why Choose Us?</h2>
          <p className="text-white/50 max-w-2xl mx-auto">When it comes to choosing the right partner, Balaji Creatives stands out from the competition.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="liquid-glass p-8 rounded-[2rem] border border-white/5 hover:border-white/20 transition-all cursor-target group"
            >
              <div className="p-3 bg-white/5 rounded-2xl border border-white/10 inline-block mb-6 group-hover:scale-110 transition-transform">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-heading italic tracking-tight mb-4">{reason.title}</h3>
              <p className="text-white/60 font-light leading-relaxed text-sm">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>



      </main>
    </div>
  );
}
