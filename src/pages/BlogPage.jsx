import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, MessageSquare, Clock } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Google Ads vs Meta Ads in 2026: Which Platform Delivers Better Results?",
    excerpt: "One Story that Every Business People Should be able to associate with. Meet Riya and Her Startup Journey. Riya was a dreamer-she wanted to start her own skincare business. She...",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
    date: "April 22, 2026",
    readTime: "5 min read",
    category: "Digital Advertising"
  },
  {
    id: 2,
    title: "Why Website Structure Matters for Google Rankings in 2026",
    excerpt: "A Simple Story to Understand Website Structure. The Two Shops Analogy: Suppose you enter two stores. The former is sloppy - there are items scattered around, there are no tags...",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    date: "April 22, 2026",
    readTime: "4 min read",
    category: "Search Engine Optimization"
  }
];

export default function BlogPage() {
  useEffect(() => {
    document.title = "Top Blogs & Insights | Balaji Creatives";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore Balaji Creatives Top Blogs for the latest in digital marketing strategies and expert insights to elevate your approach.');
    }
  }, []);

  return (
    <div className="bg-[#FAFAF9] min-h-screen text-[#1C1917] font-body selection:bg-[#A5C5E8]/40 selection:text-[#1C1917] overflow-hidden relative">
      
      {/* Floating Back Button in top-left corner */}
      <Link 
        to="/" 
        className="fixed top-6 left-6 z-[1050] inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-stone-200 hover:bg-stone-50 hover:border-stone-300 text-stone-700 hover:text-[#59425A] backdrop-blur-md transition-all duration-300 group shadow-lg text-xs font-semibold font-body tracking-wider uppercase"
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
          <span className="text-xs tracking-[0.3em] uppercase text-[#59425A] font-bold mb-4 block">// Insights & Strategies</span>
          <h1 className="font-heading italic text-6xl md:text-8xl lg:text-9xl mb-8 leading-none tracking-tighter text-[#1C1917]">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1C1917] via-[#59425A] to-[#1C1917]">Journal</span>
          </h1>
          <p className="max-w-3xl text-[#1C1917]/90 text-lg md:text-2xl font-light leading-relaxed">
            Explore our latest blogs for cutting-edge digital marketing strategies, AI-driven insights, and expert advice to elevate your brand's growth.
          </p>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 pb-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {blogPosts.map((post, index) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={`/blog/${post.id}`} className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-2xl shadow-stone-200/50 hover:border-stone-300 hover:shadow-xl transition-all text-[#1C1917] flex flex-col h-full group">
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-stone-100">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-[#E3DAC9] text-[#1C1917] px-3 py-1 rounded-full text-xs font-semibold border border-stone-200/50">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-[#1C1917]/55 font-bold mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1.5 ml-auto">
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>0 Comments</span>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-heading italic tracking-tight mb-4 text-[#1C1917] group-hover:text-[#59425A] transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-[#1C1917]/80 font-light leading-relaxed mb-8 flex-grow text-sm md:text-base">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-stone-200 flex items-center justify-between text-[#59425A] font-bold group-hover:text-[#59425A]/80 transition-colors">
                    <span>Continue Reading</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* Pagination / Load More (Placeholder) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <button className="bg-white px-8 py-3 rounded-full text-[#1C1917] hover:bg-[#59425A] hover:text-white hover:border-[#59425A] border border-stone-200 shadow-md font-bold transition-all">
            Load More Articles
          </button>
        </motion.div>
      </main>
    </div>
  );
}
