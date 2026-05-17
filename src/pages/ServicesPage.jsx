import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Megaphone, Globe, Camera, Zap, Heart, Settings } from 'lucide-react';
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack';
import TargetCursor from '../components/TargetCursor';
import './ServicesPage.css';

const services = [
  {
    title: "Social Media Marketing",
    icon: <Megaphone className="w-8 h-8 text-purple-400" />,
    content: "In today’s digital world, social media is more than just posting content — it’s about building a strong online presence, engaging your audience, and turning followers into loyal customers. At Balaji Creatives, our Social Media Marketing services help brands grow through creative strategies, consistent branding, and audience-focused content.",
    details: "We create powerful marketing campaigns for platforms like Instagram, Facebook, LinkedIn, and YouTube to increase brand awareness, customer engagement, and lead generation. Our team focuses on content creation, hashtag strategy, audience targeting, trend analysis, and performance tracking to deliver measurable results.",
    keywords: ["Social Media Marketing Services", "Instagram Marketing", "Facebook Marketing", "Digital Branding", "Social Media Strategy", "Online Brand Growth", "Content Marketing Agency", "Social Media Management", "Business Promotion Online", "Creative Marketing Solutions"]
  },
  {
    title: "Social Media Advertising",
    icon: <Zap className="w-8 h-8 text-blue-400" />,
    content: "Paid advertising on social media is one of the fastest ways to reach your target audience and generate quality leads. Balaji Creatives specializes in high-performing social media advertising campaigns designed to maximize ROI and business growth.",
    details: "We create and manage ad campaigns across Facebook Ads, Instagram Ads, Google Ads, and LinkedIn Ads. From audience research and ad creatives to conversion optimization and analytics, our experts ensure every campaign is optimized for performance.",
    keywords: ["Social Media Advertising", "Facebook Ads Agency", "Instagram Ads Services", "PPC Advertising", "Online Advertising Company", "Lead Generation Services", "Paid Marketing Campaigns", "Google Ads Management", "Digital Advertising Experts", "ROI Marketing"]
  },
  {
    title: "Website Development",
    icon: <Globe className="w-8 h-8 text-emerald-400" />,
    content: "A website is the digital identity of your business. At Balaji Creatives, we develop modern, responsive, and SEO-friendly websites that help businesses stand out online.",
    details: "Our Website Development services include business websites, portfolio websites, eCommerce stores, landing pages, and custom web solutions. We focus on user-friendly design, fast loading speed, mobile responsiveness, and search engine optimization to improve visibility and customer experience.",
    keywords: ["Website Development Company", "Responsive Website Design", "SEO-Friendly Websites", "Business Website Development", "eCommerce Website", "Web Design Services", "Custom Website Solutions", "Professional Website Developers", "Mobile Responsive Websites", "Modern Web Development"]
  },
  {
    title: "Photography",
    icon: <Camera className="w-8 h-8 text-rose-400" />,
    content: "Visual content plays a major role in digital branding. Professional photography helps businesses create a strong impression and connect emotionally with customers. Balaji Creatives provides high-quality photography services for brands, products, events, and social media campaigns.",
    details: "Our photography team captures creative and professional visuals that enhance your marketing materials, social media posts, websites, and advertisements. From product photography to corporate shoots and event coverage, we ensure every image represents your brand perfectly.",
    keywords: ["Professional Photography Services", "Product Photography", "Brand Photography", "Event Photography", "Creative Photoshoots", "Commercial Photography", "Social Media Photography", "Digital Branding Photography", "Professional Visual Content", "Photography Agency"]
  },
  {
    title: "AI Content & Influencers",
    icon: <Sparkles className="w-8 h-8 text-amber-400" />,
    content: "AI-powered content creation is transforming digital marketing. At Balaji Creatives, we combine artificial intelligence with creativity to deliver engaging content and influencer marketing strategies that drive results.",
    details: "We create AI-generated social media content, captions, ad copies, blog content, and personalized marketing campaigns. Our influencer marketing services help brands collaborate with creators and influencers to increase reach, trust, and audience engagement.",
    keywords: ["AI Content Creation", "Influencer Marketing Services", "AI Digital Marketing", "Social Media Influencers", "Content Creation Agency", "AI Marketing Solutions", "Brand Collaboration", "Digital Content Strategy", "Creative Marketing Agency", "Online Influencer Promotion"]
  },
  {
    title: "Digital Invitations",
    icon: <Heart className="w-8 h-8 text-pink-400" />,
    content: "Digital invitations are a modern and creative way to invite guests for weddings, corporate events, birthdays, and special occasions. Balaji Creatives designs attractive and personalized digital invitations that leave a lasting impression.",
    details: "We create animated invitations, video invitations, e-invites, and interactive invitation designs tailored to your event theme and style. Our digital invitations are easy to share on WhatsApp, email, and social media platforms.",
    keywords: ["Digital Invitation Design", "Wedding E-Invites", "Animated Invitations", "Video Invitations", "Online Invitation Cards", "Creative Invitation Design", "Digital Event Invitations", "WhatsApp Invitations", "Personalized Invitations", "Modern Invitation Services"]
  },
  {
    title: "Automations",
    icon: <Settings className="w-8 h-8 text-indigo-400" />,
    content: "Business automation helps companies save time, reduce manual work, and improve efficiency. Balaji Creatives provides smart automation solutions for businesses to streamline workflows and improve customer experiences.",
    details: "Our automation services include WhatsApp Automation, Email Automation, CRM Integration, Chatbots, Lead Management Systems, AI Automation, and Social Media Scheduling. We help businesses automate repetitive tasks, improve communication, and increase productivity using modern digital tools.",
    keywords: ["Business Automation Services", "WhatsApp Automation", "AI Automation Solutions", "CRM Integration", "Chatbot Development", "Marketing Automation", "Workflow Automation", "Automated Lead Generation", "Digital Business Solutions", "Smart Automation Services"]
  }
];

export default function ServicesPage() {
  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    document.title = "Our Services | Balaji Creatives - Digital Marketing & Automation Experts";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore Balaji Creatives wide range of services including Social Media Marketing, Web Development, AI Content, Photography, and Business Automation.');
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
          <span className="text-xs tracking-[0.3em] uppercase text-purple-400 font-medium mb-4 block">// Mission Capabilities</span>
          <h1 className="font-heading italic text-6xl md:text-8xl lg:text-9xl mb-8 leading-none tracking-tighter">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white/50">Expertise</span>
          </h1>
          <p className="max-w-2xl mx-auto text-white/50 text-lg md:text-xl font-light leading-relaxed">
            From digital storytelling to architectural code and AI-powered intelligence, we bridge the gap between imagination and measurable success.
          </p>
        </motion.div>
      </header>

      {/* Scroll Stack Section */}
      <main className="relative z-10">
        <ScrollStack 
          useWindowScroll={true} 
          itemDistance={isMobile ? 120 : 200} 
          itemStackDistance={isMobile ? 15 : 40} 
          stackPosition="12%" 
          itemScale={0.03}
        >
          {services.map((service, index) => (
            <ScrollStackItem key={index}>
              <div className="flex flex-col h-full cursor-target">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl md:text-5xl font-heading italic tracking-tight">{service.title}</h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 flex-grow">
                  <div className="space-y-6">
                    <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed">
                      {service.content}
                    </p>
                    <p className="text-white/50 font-light leading-relaxed">
                      {service.details}
                    </p>
                  </div>
                  
                  <div className="lg:border-l lg:border-white/10 lg:pl-12">
                    <h3 className="text-xs uppercase tracking-widest text-white/30 mb-6 font-medium">Core Strategy Keywords</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.keywords.map((keyword, kidx) => (
                        <span key={kidx} className="px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium hover:bg-purple-500/20 transition-colors">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-white/5 flex justify-between items-center text-white/20 text-xs tracking-widest uppercase">
                  <span>Balaji Creatives // 0{index + 1}</span>
                  <span className="hidden md:block">System Status: Operational</span>
                </div>
              </div>
            </ScrollStackItem>
          ))}
          
          {/* Why Choose Us Card */}
          <ScrollStackItem>
            <div className="flex flex-col h-full items-center justify-center text-center max-w-4xl mx-auto cursor-target">
              <h2 className="text-4xl md:text-6xl font-heading italic mb-12">Why Choose Balaji Creatives?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {[
                  "Creative and result-driven strategies",
                  "SEO-focused content and website solutions",
                  "Professional branding and storytelling",
                  "Advanced AI-powered marketing services",
                  "Customized solutions for every business",
                  "Dedicated support and innovative ideas"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 text-left">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <span className="text-white/80 font-body text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>

            </div>
          </ScrollStackItem>
        </ScrollStack>
      </main>

      {/* Footer Decoration */}
      <div className="py-12 text-center opacity-0">
        <p>Balaji Creatives</p>
      </div>
    </div>
  );
}
