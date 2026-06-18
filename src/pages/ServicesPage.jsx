import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Megaphone, Globe, Camera, Zap, Heart, Settings, CheckCircle } from 'lucide-react';
import TargetCursor from '../components/TargetCursor';
import './ServicesPage.css';

const services = [
  {
    title: "Social Media Marketing",
    icon: <Megaphone className="w-8 h-8 text-[#59425A]" />,
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop",
    content: "In today’s digital world, social media is more than just posting content — it’s about building a strong online presence, engaging your audience, and turning followers into loyal customers.",
    details: "At Balaji Creatives, our Social Media Marketing services help brands grow through creative strategies, consistent branding, and audience-focused content. We manage and grow your brand on Instagram, Facebook, LinkedIn, and YouTube, focusing on audience targeting, trend analysis, and performance tracking.",
    keywords: ["Social Media Strategy", "Instagram Marketing", "Facebook Marketing", "Digital Branding", "Content Creation", "Social Media Management", "Online Brand Growth"]
  },
  {
    title: "Performance Marketing",
    icon: <Zap className="w-8 h-8 text-[#59425A]" />,
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=800&auto=format&fit=crop",
    content: "Paid advertising on social media is one of the fastest ways to reach your target audience, drive immediate traffic, and generate high-quality leads.",
    details: "We design, write, and manage high-converting ad campaigns across Facebook Ads, Instagram Ads, Google Ads, and LinkedIn Ads. From target audience research and persuasive ad creatives to conversion optimization and continuous analytics, we maximize your ROI.",
    keywords: ["Social Media Advertising", "Facebook Ads", "Instagram Ads", "PPC Campaigns", "Google Ads", "Lead Generation", "ROI Optimization"]
  },
  {
    title: "Website Development",
    icon: <Globe className="w-8 h-8 text-[#59425A]" />,
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
    content: "Your website is the digital face of your brand. We design and build responsive, fast, and SEO-friendly sites that convert visitors into buyers.",
    details: "Whether you need a sleek landing page, a professional corporate portfolio, a dynamic startup platform, or a robust eCommerce store, we build custom solutions tailored to your unique objectives. Our designs ensure smooth UX and fast loading speeds.",
    keywords: ["Web Development", "UI/UX Design", "eCommerce Store", "Responsive Design", "SEO Optimized", "Custom Web Apps", "Page Speed Optimization"]
  },
  {
    title: "Photography & Videography",
    icon: <Camera className="w-8 h-8 text-[#59425A]" />,
    image: "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?q=80&w=800&auto=format&fit=crop",
    content: "Premium visuals separate elite businesses from generic ones. We capture, produce, and edit high-quality content that narrates your brand story.",
    details: "Our expert team handles professional product shoots, fashion photoshoots, corporate events, and engaging short-form video content (Reels/TikToks) designed to stand out on social media feeds and websites, evoking customer trust.",
    keywords: ["Brand Photography", "Product Shoots", "Commercial Photography", "Reels Production", "Event Coverage", "Visual Storytelling", "High-End Video Editing"]
  },
  {
    title: "AI Content & Influencers",
    icon: <Sparkles className="w-8 h-8 text-[#59425A]" />,
    image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=800&auto=format&fit=crop",
    content: "Embrace the future of automated brand presence. We merge advanced artificial intelligence with real creator influence for maximum reach.",
    details: "We streamline your pipeline with AI-assisted copywriting, personalized customer campaigns, and optimized content schedules. Combined with our influencer matchmaking services, we connect your brand with creators to build authentic consumer trust.",
    keywords: ["AI Content Creation", "Influencer Marketing", "AI Copywriting", "Creator Collaborations", "Automated Schedules", "Brand Matchmaking", "Digital Innovation"]
  },
  {
    title: "Digital Invitations",
    icon: <Heart className="w-8 h-8 text-[#59425A]" />,
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=800&auto=format&fit=crop",
    content: "Ditch static paper templates. We craft elegant, modern, and interactive digital invitations that leave a memorable mark.",
    details: "From stunning animated wedding e-invites to interactive corporate invites and dynamic event brochures, we build responsive pages and high-end video invitations easily shareable via WhatsApp, email, or social media.",
    keywords: ["Digital Invitations", "Wedding E-Invites", "Animated Video Invites", "Interactive Event Cards", "WhatsApp Invitations", "Custom Invitation Design", "Elegant E-Brochures"]
  },
  {
    title: "Business Automations",
    icon: <Settings className="w-8 h-8 text-[#59425A]" />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    content: "Scale your business without scaling manual work. We implement smart automation pipelines that work for you 24/7.",
    details: "We build customized WhatsApp automations, smart AI chatbots, automated lead capture pipelines, email drip sequences, and cross-platform CRM integrations to eliminate repetitive tasks, saving your team valuable hours every week.",
    keywords: ["Business Automation", "WhatsApp Chatbots", "Lead Generation Funnels", "CRM Integrations", "Email Campaigns", "Workflow Optimization", "AI Customer Support"]
  }
];

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Our Services | Balaji Creatives";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore our wide range of services including Social Media Marketing, Web Development, AI Content, Photography, and Business Automation.');
    }
  }, []);

  return (
    <div className="services-page bg-[#FAFAF9] min-h-screen text-[#1C1917] font-body selection:bg-[#A5C5E8]/40 selection:text-[#1C1917] overflow-x-hidden relative">
      <TargetCursor />

      {/* Floating Back Button */}
      <Link
        to="/"
        className="fixed top-6 left-6 z-[1050] inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-stone-200 hover:bg-stone-50 hover:border-stone-300 text-stone-700 hover:text-[#59425A] backdrop-blur-md transition-all duration-300 group shadow-lg text-xs font-semibold tracking-wider uppercase"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>Back to Home</span>
      </Link>

      {/* Decorative Blur Background Glows */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#A5C5E8]/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#E3DAC9]/15 rounded-full blur-[150px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#A5C5E8]/10 rounded-full blur-[180px] pointer-events-none z-0"></div>

      {/* Hero Header */}
      <header className="pt-36 pb-20 px-6 max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-[#59425A] font-bold mb-4 block">// Core Capabilities</span>
          <h1 className="font-heading italic text-5xl md:text-8xl mb-6 leading-none tracking-tight text-[#1C1917]">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1C1917] via-[#59425A] to-[#1C1917]">Expertise</span>
          </h1>
          <p className="max-w-2xl mx-auto text-[#1C1917]/90 text-base md:text-lg font-light leading-relaxed">
            From digital storytelling to high-performance code, photography, and AI-powered automation, we bridge the gap between creative imagination and measurable business success.
          </p>
        </motion.div>
      </header>

      {/* Services List - Alternating layout for high performance and visual class */}
      <main className="max-w-6xl mx-auto px-6 pb-28 relative z-10 space-y-20 md:space-y-32">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
            >
              {/* Service Visual Column */}
              <div className="w-full lg:w-1/2 group">
                <div className="relative overflow-hidden rounded-[2.5rem] border border-stone-200 aspect-[4/3] w-full shadow-2xl bg-stone-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent z-10 pointer-events-none"></div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3 bg-black/50 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10">
                    <div className="p-1 bg-[#A5C5E8]/20 rounded-lg text-[#A5C5E8]">
                      {React.cloneElement(service.icon, { className: "w-5 h-5" })}
                    </div>
                    <span className="text-white text-sm font-semibold uppercase tracking-wider font-heading italic">0{index + 1}</span>
                  </div>
                </div>
              </div>

              {/* Service Info Column */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="space-y-3">
                  <h2 className="text-3xl md:text-5xl font-heading italic tracking-tight text-[#1C1917]">
                    {service.title}
                  </h2>
                  <div className="h-1 w-20 bg-gradient-to-r from-[#59425A] to-transparent rounded-full"></div>
                </div>

                <p className="text-lg md:text-xl text-[#1C1917]/95 font-medium leading-relaxed font-body">
                  {service.content}
                </p>
                <p className="text-[#1C1917]/80 font-light leading-relaxed font-body text-sm md:text-base">
                  {service.details}
                </p>

                {/* Keywords Tag Cloud */}
                <div className="pt-4 space-y-3">
                  <h4 className="text-xs uppercase tracking-widest text-[#59425A] font-bold font-body">// Strategic Highlights</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.keywords.map((keyword, kidx) => (
                      <span
                        key={kidx}
                        className="px-3 py-1.5 rounded-full bg-white border border-stone-200 text-stone-700 text-xs font-semibold hover:bg-[#A5C5E8]/10 hover:border-[#A5C5E8]/30 transition-all duration-300"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>
          );
        })}

        {/* Why Choose Us Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-16 border-t border-stone-200 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-heading italic mb-12 text-[#1C1917]">Why Choose Balaji Creatives?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-left">
            {[
              "Creative and result-driven campaign strategies",
              "SEO-focused content writing and responsive website structures",
              "Professional brand photography and cinematic visual storytelling",
              "Advanced AI-powered marketing and high-performance lead models",
              "Completely customized solutions for distinct business goals",
              "Dedicated post-launch support and continuous innovations"
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-3xl bg-white border border-stone-200 hover:border-stone-300 transition-colors shadow-lg"
              >
                <div className="p-1 bg-[#A5C5E8]/20 rounded-lg text-[#59425A] mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <span className="text-[#1C1917]/95 font-body text-sm md:text-base font-medium leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </motion.section>
      </main>

      {/* Footer Branding */}
      <footer className="py-12 border-t border-stone-200 text-center text-[#1C1917]/40 text-xs uppercase tracking-widest relative z-10">
        <p>&copy; {new Date().getFullYear()} Balaji Creatives. All rights reserved.</p>
      </footer>
    </div>
  );
}
