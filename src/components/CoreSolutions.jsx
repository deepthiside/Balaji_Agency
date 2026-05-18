import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Target, PenTool, BarChart3, MapPin, Zap, Layout } from 'lucide-react';
import CardSwap, { Card } from './CardSwap';

const solutions = [
  {
    title: "Website Marketing & Growth",
    description: "SEO Program, Local SEO, Web optimization, Tracked Performance, Rating refined.",
    icon: <Monitor className="w-8 h-8 text-[#59425A]" />,
    color: "from-[#59425A]/15 to-[#59425A]/5"
  },
  {
    title: "Lead Generation Systems",
    description: "Landing pages, funnel building, conversion optimization, call and form tracking.",
    icon: <Target className="w-8 h-8 text-[#1C1917]" />,
    color: "from-[#1C1917]/15 to-[#1C1917]/5"
  },
  {
    title: "Content & Authority Building",
    description: "Blog optimization, content strategy, cluster of topics, on-page SEO, and copywriting.",
    icon: <PenTool className="w-8 h-8 text-[#1C1917]" />,
    color: "from-[#1C1917]/15 to-[#1C1917]/5"
  },
  {
    title: "Performance & Analytics",
    description: "User behavior recording, data mining, heatmaps, conversion insights, and reporting.",
    icon: <BarChart3 className="w-8 h-8 text-[#1D3557]" />,
    color: "from-[#A5C5E8]/35 to-[#A5C5E8]/10"
  },
  {
    title: "Local Business Growth",
    description: "Highlighting the business profile, maps ranking, local listings, and review strategy.",
    icon: <MapPin className="w-8 h-8 text-[#B5C161]" />,
    color: "from-[#B5C161]/20 to-[#B5C161]/5"
  },
  {
    title: "Paid Marketing & Campaigns",
    description: "Google Ads, Meta Ads, Retargeting Campaigns, ROI Optimization.",
    icon: <Zap className="w-8 h-8 text-[#1C1917]" />,
    color: "from-[#1C1917]/15 to-[#1C1917]/5"
  },
  {
    title: "Website Optimization & UX",
    description: "Faster, mobile-responsive, user interface/user experience, and technical bug fixes.",
    icon: <Layout className="w-8 h-8 text-[#1D3557]" />,
    color: "from-[#A5C5E8]/35 to-[#A5C5E8]/10"
  }
];

export default function CoreSolutions() {
  return (
    <section id="solutions" className="relative bg-[#A5C5E8] py-24 px-6 md:px-16 lg:px-20 border-t border-[#1C1917]/10 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm font-body text-[#1C1917] mb-4 tracking-[0.3em] uppercase font-bold"
            >
              // Strategic focus
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading italic text-[#1C1917] text-5xl md:text-7xl leading-none tracking-tight mb-8"
            >
              Core Solutions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#1C1917]/90 font-body text-lg max-w-md leading-relaxed mb-12"
            >
              We don't just provide services; we build high-converting systems designed for long-term scale and brand authority.
            </motion.p>

            <div className="flex flex-wrap gap-4">
              <div className="px-6 py-3 rounded-full border border-stone-200 bg-white text-[#1C1917] font-body text-sm font-semibold">
                Strategic Growth
              </div>
              <div className="px-6 py-3 rounded-full border border-stone-200 bg-white text-[#1C1917] font-body text-sm font-semibold">
                AI Driven
              </div>
            </div>
          </div>

          {/* Right Side CardSwap */}
          <div className="relative h-[420px] md:h-[650px] flex items-center justify-center">
            <CardSwap
              width={420}
              height={480}
              cardDistance={60}
              verticalDistance={70}
              delay={2500}
              pauseOnHover={true}
              skewAmount={1}
              easing="smooth"
            >
              {solutions.map((item, index) => (
                <Card key={index} className="flex flex-col">
                  <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 md:mb-10`}>
                    <div className="scale-75 md:scale-100">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl md:text-3xl font-heading italic text-[#1C1917] mb-2 md:mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[#57534E] font-body font-light text-xs md:text-base leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between pt-4 md:pt-8 border-t border-stone-200/60">
                    <span className="text-[9px] md:text-[10px] text-[#59425A] font-bold tracking-[0.2em] uppercase">Phase {index + 1}</span>
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-stone-50 border border-stone-200/80 flex items-center justify-center text-[#1C1917]/50 text-xs md:text-sm">
                      →
                    </div>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>

        </div>
      </div>
    </section>
  );
}
