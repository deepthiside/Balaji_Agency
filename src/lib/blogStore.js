export const initialBlogs = [
  {
    id: "1",
    title: "Google Ads vs Meta Ads in 2026: Which Platform Delivers Better Results?",
    excerpt: "One Story that Every Business People Should be able to associate with. Meet Riya and Her Startup Journey. Riya was a dreamer-she wanted to start her own skincare business. She...",
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
  {
    id: "2",
    title: "Why Website Structure Matters for Google Rankings in 2026",
    excerpt: "A Simple Story to Understand Website Structure. The Two Shops Analogy: Suppose you enter two stores. The former is sloppy - there are items scattered around, there are no tags...",
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
];

export const getBlogs = () => {
  const stored = localStorage.getItem('balaji_blogs');
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error("Error parsing blogs from local storage", e);
      return initialBlogs;
    }
  }
  // Initialize if not present
  localStorage.setItem('balaji_blogs', JSON.stringify(initialBlogs));
  return initialBlogs;
};

export const getBlogById = (id) => {
  const blogs = getBlogs();
  return blogs.find(b => b.id === String(id));
};

export const saveBlog = (blogData) => {
  const blogs = getBlogs();
  const existingIndex = blogs.findIndex(b => b.id === String(blogData.id));
  
  if (existingIndex >= 0) {
    blogs[existingIndex] = { ...blogs[existingIndex], ...blogData };
  } else {
    // new blog
    blogs.push({
      ...blogData,
      id: blogData.id || String(Date.now())
    });
  }
  
  try {
    localStorage.setItem('balaji_blogs', JSON.stringify(blogs));
  } catch (e) {
    if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
      alert("Error: Storage limit exceeded! The image file you uploaded is too large. Please use a smaller image file or copy-paste an image web URL instead.");
    } else {
      alert("Error saving blog post: " + e.message);
    }
    throw e;
  }
  return blogs;
};

export const deleteBlog = (id) => {
  const blogs = getBlogs();
  const updatedBlogs = blogs.filter(b => b.id !== String(id));
  localStorage.setItem('balaji_blogs', JSON.stringify(updatedBlogs));
  return updatedBlogs;
};
