import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Target, PenTool, BarChart3, MapPin, Zap, Layout } from 'lucide-react';
import CardSwap, { Card } from './CardSwap';

const solutions = [
  {
    title: "Website Marketing & Growth",
    description: "SEO Program, Local SEO, Web optimization, Tracked Performance, Rating refined.",
    icon: <Monitor className="w-8 h-8 text-blue-400" />,
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Lead Generation Systems",
    description: "Landing pages, funnel building, conversion optimization, call and form tracking.",
    icon: <Target className="w-8 h-8 text-purple-400" />,
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Content & Authority Building",
    description: "Blog optimization, content strategy, cluster of topics, on-page SEO, and copywriting.",
    icon: <PenTool className="w-8 h-8 text-orange-400" />,
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    title: "Performance & Analytics",
    description: "User behavior recording, data mining, heatmaps, conversion insights, and reporting.",
    icon: <BarChart3 className="w-8 h-8 text-green-400" />,
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "Local Business Growth",
    description: "Highlighting the business profile, maps ranking, local listings, and review strategy.",
    icon: <MapPin className="w-8 h-8 text-yellow-400" />,
    color: "from-yellow-500/20 to-orange-500/20"
  },
  {
    title: "Paid Marketing & Campaigns",
    description: "Google Ads, Meta Ads, Retargeting Campaigns, ROI Optimization.",
    icon: <Zap className="w-8 h-8 text-red-400" />,
    color: "from-red-500/20 to-rose-500/20"
  },
  {
    title: "Website Optimization & UX",
    description: "Faster, mobile-responsive, user interface/user experience, and technical bug fixes.",
    icon: <Layout className="w-8 h-8 text-indigo-400" />,
    color: "from-indigo-500/20 to-blue-500/20"
  }
];

export default function CoreSolutions() {
  return (
    <section id="solutions" className="relative bg-black py-24 px-6 md:px-16 lg:px-20 border-t border-white/10 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm font-body text-purple-400 mb-4 tracking-[0.3em] uppercase font-bold"
            >
              // Strategic focus
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading italic text-white text-5xl md:text-7xl leading-none tracking-tight mb-8"
            >
              Core Solutions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/60 font-body text-lg max-w-md leading-relaxed mb-12"
            >
              We don't just provide services; we build high-converting systems designed for long-term scale and brand authority.
            </motion.p>

            <div className="flex flex-wrap gap-4">
              <div className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white/80 font-body text-sm">
                Strategic Growth
              </div>
              <div className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white/80 font-body text-sm">
                AI Driven
              </div>
            </div>
          </div>

          {/* Right Side CardSwap */}
          <div className="relative h-[650px] flex items-center justify-center">
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
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-10`}>
                    {item.icon}
                  </div>
                  <h3 className="text-3xl font-heading italic text-white mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-white/50 font-body font-light text-base leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between pt-8 border-t border-white/5">
                    <span className="text-[10px] text-purple-400 font-bold tracking-[0.2em] uppercase">Phase {index + 1}</span>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40">
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
