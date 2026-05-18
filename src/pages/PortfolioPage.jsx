import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, TrendingUp, Users, Target, Search, ArrowLeft } from 'lucide-react';
import Reviews from '../components/Reviews.jsx';
import './PortfolioPage.css';

const categories = ["All", "SEO & Organic", "Paid Ads", "Social Media", "Web Design"];

const projects = [
  {
    id: 1,
    title: "E-commerce Revenue Scaling",
    client: "Urban Threads",
    category: "Paid Ads",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    challenge: "High cart abandonment and high CPA on Facebook ads.",
    solution: "Implemented dynamic retargeting and optimized ad creatives for A/B testing.",
    metrics: [
      { label: "ROAS", value: "4.5x" },
      { label: "CPA Reduction", value: "-42%" },
      { label: "Revenue Growth", value: "+210%" }
    ]
  },
  {
    id: 2,
    title: "Local SEO Dominance",
    client: "CarePlus Clinics",
    category: "SEO & Organic",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
    challenge: "Invisible in local search for key medical services in their city.",
    solution: "Complete Google Business Profile overhaul, localized content strategy, and backlink building.",
    metrics: [
      { label: "Local Rankings", value: "#1" },
      { label: "Organic Traffic", value: "+340%" },
      { label: "Patient Leads", value: "+150/mo" }
    ]
  },
  {
    id: 3,
    title: "Viral Brand Awareness",
    client: "Glow & Co.",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2874&auto=format&fit=crop",
    challenge: "Stagnant follower growth and low engagement on Instagram & TikTok.",
    solution: "Launched a short-form video strategy focusing on educational and behind-the-scenes content.",
    metrics: [
      { label: "Followers Gained", value: "45k+" },
      { label: "Engagement Rate", value: "8.4%" },
      { label: "Video Views", value: "2.1M+" }
    ]
  },
  {
    id: 4,
    title: "Conversion-Optimized Redesign",
    client: "TechFlow SaaS",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2940&auto=format&fit=crop",
    challenge: "Outdated website design leading to high bounce rates and low demo bookings.",
    solution: "Modern UI/UX redesign with a focus on clear CTA pathways and speed optimization.",
    metrics: [
      { label: "Conversion Rate", value: "+85%" },
      { label: "Bounce Rate", value: "-35%" },
      { label: "Page Speed", value: "0.8s" }
    ]
  },
  {
    id: 5,
    title: "B2B Lead Generation Funnel",
    client: "Apex Manufacturing",
    category: "Paid Ads",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop",
    challenge: "Struggling to get qualified B2B leads through traditional channels.",
    solution: "LinkedIn Lead Gen Ads combined with a high-value whitepaper lead magnet.",
    metrics: [
      { label: "Qualified Leads", value: "320+" },
      { label: "Cost Per Lead", value: "-60%" },
      { label: "Pipeline Value", value: "$1.2M" }
    ]
  },
  {
    id: 6,
    title: "National Keyword Ranking",
    client: "EcoHome Goods",
    category: "SEO & Organic",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2953&auto=format&fit=crop",
    challenge: "Competing against massive retailers for broad search terms.",
    solution: "Long-tail keyword strategy and comprehensive pillar content creation.",
    metrics: [
      { label: "Top 3 Rankings", value: "45+" },
      { label: "Organic Revenue", value: "+180%" },
      { label: "Domain Authority", value: "+22" }
    ]
  }
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    document.title = "Our Work | Balaji Creatives - Portfolio & Case Studies";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore our portfolio of successful digital marketing campaigns, SEO results, and web design projects. See how we drive growth for our clients.');
    }
  }, []);

  const filteredProjects = projects.filter(project => 
    activeCategory === "All" ? true : project.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-[#A5C5E8] text-[#1C1917] pt-40 pb-24 px-6 md:px-16 lg:px-20 relative selection:bg-[#A5C5E8]/30 selection:text-[#1C1917]">
      {/* Floating Back Button in top-left corner */}
      <Link 
        to="/" 
        className="fixed top-6 left-6 z-[1050] inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-stone-200 hover:bg-stone-50 hover:border-stone-300 text-stone-700 hover:text-[#59425A] backdrop-blur-md transition-all duration-300 group shadow-lg text-xs font-semibold font-body tracking-wider uppercase"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>Back to Home</span>
      </Link>
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-20 text-left relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-body text-[#59425A] mb-4 tracking-[0.3em] uppercase font-bold"
        >
          // Case Studies & Results
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading italic text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-8 text-[#1C1917]"
        >
          Our Work Speaks <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#59425A] via-[#1C1917] to-[#1C1917]">Volumes.</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#1C1917]/90 font-body text-lg max-w-2xl leading-relaxed"
        >
          We don't just deliver beautiful designs and clever campaigns; we deliver measurable ROI, scalable growth, and market dominance for our clients.
        </motion.p>
      </div>

      {/* Stats Overview */}
      <div className="max-w-7xl mx-auto mb-24 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: "Clients Scaled", value: "150+", icon: <Users className="w-6 h-6 text-[#59425A] mb-4" />, valueColor: "text-[#59425A]" },
          { label: "Avg. ROI Increase", value: "312%", icon: <TrendingUp className="w-6 h-6 text-[#59425A] mb-4" />, valueColor: "text-[#59425A]" },
          { label: "Leads Generated", value: "50k+", icon: <Target className="w-6 h-6 text-[#59425A] mb-4" />, valueColor: "text-[#59425A]" },
          { label: "Search Dominance", value: "Top 3", icon: <Search className="w-6 h-6 text-[#59425A] mb-4" />, valueColor: "text-[#59425A]" }
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + (i * 0.1) }}
            className="metric-box flex flex-col items-center md:items-start"
          >
            {stat.icon}
            <h3 className={`text-3xl md:text-4xl font-heading italic ${stat.valueColor} mb-2`}>{stat.value}</h3>
            <p className="text-xs font-body text-[#1C1917]/60 font-bold uppercase tracking-wider">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Filter Categories */}
      <div className="max-w-7xl mx-auto mb-12 flex flex-wrap gap-4 justify-center md:justify-start">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto portfolio-grid">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="portfolio-card flex flex-col"
            >
              <div className="portfolio-image-container">
                <img src={project.image} alt={project.title} className="portfolio-image" />
                <div className="portfolio-overlay"></div>
                <div className="absolute top-4 left-4 bg-[#B5C161] text-[#1C1917] px-3 py-1 rounded-full text-xs font-semibold border border-[#B5C161] uppercase tracking-widest">
                  {project.category}
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-sm font-body text-[#B5C161] font-bold tracking-widest uppercase mb-1">{project.client}</p>
                  <h3 className="text-2xl font-heading italic text-white leading-tight">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-6 md:p-8 flex-grow flex flex-col">
                <div className="mb-6">
                  <h4 className="text-xs font-body text-[#1C1917]/55 font-bold uppercase tracking-widest mb-2 border-b border-stone-200 pb-2">// The Challenge</h4>
                  <p className="text-[#1C1917]/80 font-body text-sm leading-relaxed font-light">{project.challenge}</p>
                </div>
                <div className="mb-8">
                  <h4 className="text-xs font-body text-[#1C1917]/55 font-bold uppercase tracking-widest mb-2 border-b border-stone-200 pb-2">// The Solution</h4>
                  <p className="text-[#1C1917]/80 font-body text-sm leading-relaxed font-light">{project.solution}</p>
                </div>
                
                <div className="mt-auto grid grid-cols-3 gap-4 pt-6 border-t border-stone-200">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <div className="text-lg md:text-xl font-heading italic text-[#59425A] font-bold mb-1">{metric.value}</div>
                      <div className="text-[9px] md:text-[10px] font-body text-[#1C1917]/55 font-bold uppercase tracking-widest">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <Reviews />
    </div>
  );
}
