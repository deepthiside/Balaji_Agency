import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

const blogContent = {
  "1": {
    title: "Google Ads vs Meta Ads in 2026: Which Platform Delivers Better Results?",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
    date: "April 22, 2026",
    readTime: "5 min read",
    category: "Digital Advertising",
    content: `
      <h2>The Two Titans of Digital Advertising</h2>
      <p>Meet Riya and Her Startup Journey. Riya was a dreamer—she wanted to start her own skincare business. She had the perfect products, a beautiful website, and a strong brand vision. But when it came to digital advertising, she was faced with the ultimate dilemma: Google Ads or Meta Ads?</p>
      <p>This is a story every business owner in 2026 can relate to. The landscape of digital advertising has evolved massively with AI integration, and choosing the right platform is more critical than ever.</p>
      
      <h3>Google Ads: The Intent Machine</h3>
      <p>Google Ads is built on intent. When someone searches for "best organic face wash," they are actively looking to buy. In 2026, Google's AI-driven Performance Max campaigns have made targeting almost entirely automated, relying on machine learning to find conversions across Search, YouTube, and Display networks.</p>
      <ul>
        <li><strong>Pros:</strong> High conversion intent, immediate results, dominance in local search.</li>
        <li><strong>Cons:</strong> Higher Cost Per Click (CPC), steep learning curve, highly competitive.</li>
      </ul>

      <h3>Meta Ads: The Discovery Engine</h3>
      <p>Meta (Facebook and Instagram) is where people go to connect and be entertained, not necessarily to shop. However, Meta's AI algorithm in 2026 has become incredibly adept at predictive targeting—showing your ads to people before they even know they want your product.</p>
      <ul>
        <li><strong>Pros:</strong> Unbeatable visual storytelling, lower cost per impression, massive reach, perfect for brand awareness.</li>
        <li><strong>Cons:</strong> Lower immediate purchase intent, ad fatigue happens quickly, requires constant creative testing.</li>
      </ul>

      <h3>The 2026 Verdict: Which is Better?</h3>
      <p>The truth is, asking which is "better" is the wrong question. In 2026, the most successful brands don't choose one over the other; they use them synergistically.</p>
      <p>Use <strong>Meta Ads</strong> to build your brand, tell your story, and generate demand. Then, use <strong>Google Ads</strong> to capture that demand when users inevitably go to search for your products or solutions. By integrating both, you create a holistic marketing funnel that maximizes ROI.</p>
    `
  },
  "2": {
    title: "Why Website Structure Matters for Google Rankings in 2026",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    date: "April 22, 2026",
    readTime: "4 min read",
    category: "Search Engine Optimization",
    content: `
      <h2>The Two Shops Analogy</h2>
      <p>Suppose you enter two stores. The first store is sloppy—items are scattered everywhere, there are no signs, and you can't find the checkout counter. The second store is neatly organized, with clear aisles, bright signs, and a helpful directory at the entrance.</p>
      <p>Which store are you more likely to buy from? Which store will you recommend to a friend? Google asks the exact same questions about your website.</p>

      <h3>Beyond Backlinks and Keywords</h3>
      <p>For years, SEO was dominated by keyword stuffing and backlink building. But in 2026, Google's AI algorithms (like Gemini and the latest core updates) prioritize user experience (UX) and semantic understanding above all else. This means your website's architecture is the foundation of your SEO success.</p>

      <h3>1. Crawlability and Indexing</h3>
      <p>If Google's bots can't navigate your site, you won't rank. A logical hierarchy (Home > Category > Subcategory > Post) ensures that search engines can easily crawl and index every page. XML sitemaps and proper internal linking are your website's roadmaps.</p>

      <h3>2. The Core Web Vitals Factor</h3>
      <p>A structured website is typically a faster website. Clean code, organized assets, and logical databases lead to better loading speeds. Google's Core Web Vitals strictly penalize slow, clunky websites because they cause users to bounce back to the search results.</p>

      <h3>3. Distributing Page Authority</h3>
      <p>When you earn a high-quality backlink to your homepage, a good site structure allows that "link juice" to flow down to your product and blog pages seamlessly through internal links. A flat or disorganized structure traps this authority, wasting valuable SEO potential.</p>

      <h3>Conclusion</h3>
      <p>In 2026, you cannot trick Google. You have to build a website that genuinely serves the user. Start by mapping out a logical structure, fixing broken links, and ensuring a seamless journey from the landing page to conversion. Good structure is good SEO.</p>
    `
  }
};

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogContent[id];

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
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
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
