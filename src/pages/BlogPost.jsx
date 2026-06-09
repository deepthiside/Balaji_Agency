import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { getBlogById } from '../lib/blogStore';

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  
  useEffect(() => {
    const fetchedPost = getBlogById(id);
    if (fetchedPost) {
      setPost(fetchedPost);
    } else {
      navigate('/blog');
    }
  }, [id, navigate]);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Balaji Creatives`;
    } else {
      navigate('/blog');
    }
  }, [id, post, navigate]);

  if (!post) return null;

  return (
    <div className="bg-[#FAFAF9] min-h-screen text-[#1C1917] font-body selection:bg-[#A5C5E8]/40 selection:text-[#1C1917] relative">
      {/* Floating Back Button in top-left corner */}
      <Link 
        to="/blog" 
        className="fixed top-6 left-6 z-[1050] inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-stone-200 hover:bg-stone-50 hover:border-stone-300 text-stone-700 hover:text-[#59425A] backdrop-blur-md transition-all duration-300 group shadow-lg text-xs font-semibold font-body tracking-wider uppercase"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>Back to Blog</span>
      </Link>
      
      {/* Hero Image */}
      <div className="w-full h-[50vh] md:h-[60vh] relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FAFAF9] z-10" />
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-20 max-w-5xl mx-auto">
          <div className="bg-[#E3DAC9] text-[#1C1917] px-4 py-1.5 rounded-full text-xs font-semibold border border-stone-200 inline-block mb-6 shadow-md">
            {post.category}
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading italic tracking-tight leading-tight mb-6 text-[#1C1917]">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-sm text-[#1C1917]/80">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>

          </div>
        </div>
      </div>

      {/* Article Content */}
      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24 relative z-10">
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="prose prose-lg md:prose-xl prose-p:text-[#1C1917]/90 prose-p:font-normal prose-headings:text-[#1C1917] prose-headings:font-heading prose-headings:italic prose-a:text-[#59425A] hover:prose-a:text-[#59425A]/80 prose-strong:text-[#1C1917] prose-li:text-[#1C1917]/90 prose-ol:text-[#1C1917]/90 w-full max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        <div className="mt-20 pt-10 border-t border-stone-200 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-[#1C1917]/60 text-sm font-semibold">Share this article with your network.</p>
          <div className="flex gap-4">
            {['Twitter', 'LinkedIn', 'Facebook'].map((platform) => (
              <button key={platform} className="px-6 py-2 rounded-full border border-stone-200 bg-white text-[#1C1917] text-sm font-semibold hover:bg-[#59425A] hover:border-[#59425A] hover:text-white transition-all shadow-sm">
                {platform}
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
