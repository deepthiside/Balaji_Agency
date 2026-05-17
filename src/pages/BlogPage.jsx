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
    <div className="bg-black min-h-screen text-white font-body selection:bg-purple-500/30 overflow-hidden">
      
      {/* Hero Content */}
      <header className="pt-40 pb-20 px-6 max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-purple-400 font-medium mb-4 block">// Insights & Strategies</span>
          <h1 className="font-heading italic text-6xl md:text-8xl lg:text-9xl mb-8 leading-none tracking-tighter">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white/50">Journal</span>
          </h1>
          <p className="max-w-3xl mx-auto text-white/70 text-lg md:text-2xl font-light leading-relaxed">
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
              <Link to={`/blog/${post.id}`} className="liquid-glass rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-all group flex flex-col h-full">
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-white/5">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-purple-300 border border-purple-500/30">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-white/40 mb-4">
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
                  
                  <h2 className="text-2xl md:text-3xl font-heading italic tracking-tight mb-4 group-hover:text-purple-300 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-white/60 font-light leading-relaxed mb-8 flex-grow text-sm md:text-base">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between text-purple-400 font-medium group-hover:text-purple-300 transition-colors">
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
          <button className="liquid-glass px-8 py-3 rounded-full text-white/70 hover:text-white transition-colors border border-white/10">
            Load More Articles
          </button>
        </motion.div>
      </main>
    </div>
  );
}
