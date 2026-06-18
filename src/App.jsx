import React, { useRef, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
import HeroSection from './components/HeroSection.jsx';
import Founder from './components/Founder.jsx';
import OurWorkspace from './components/OurWorkspace.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import MagicBento from './components/MagicBento.jsx';
import OurClients from './components/OurClients.jsx';
import Noise from './components/Noise.jsx';
import CardNav from './components/CardNav.jsx';
import logo from './assets/images/favicon.png';
import WhoWeAre from './components/WhoWeAre.jsx';
import CoreSolutions from './components/CoreSolutions.jsx';
import Gallery from './components/Gallery.jsx';
import Reviews from './components/Reviews.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import IntroLoader from './components/IntroLoader.jsx';
import ContactPopup from './components/ContactPopup.jsx';

// Service Pages
import SocialMediaMarketing from './pages/services/SocialMediaMarketing.jsx';
import SocialMediaAdvertising from './pages/services/SocialMediaAdvertising.jsx';
import WebDevelopment from './pages/services/WebDevelopment.jsx';
import Automation from './pages/services/Automation.jsx';
import AIContent from './pages/services/AIContent.jsx';
import DigitalInvitations from './pages/services/DigitalInvitations.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import BlogPost from './pages/BlogPost.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';


const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const navItems = [
  {
    label: "Explore",
    bgColor: "#E3DAC9", // Bone Color
    textColor: "#1C1917",
    links: [
      { label: "Home", href: "/", ariaLabel: "Home Page" },
      { label: "About Us", href: "/about-us", ariaLabel: "Learn about us" },
      { label: "Our Blog", href: "/blog", ariaLabel: "Read our articles" }
    ]
  },
  {
    label: "Capabilities",
    bgColor: "#A5C5E8", // Light Blue
    textColor: "#1C1917",
    links: [
      { label: "Services", href: "/services", ariaLabel: "Our services" },
      { label: "Portfolio", href: "/portfolio", ariaLabel: "Our work and results" }
    ]
  },
  {
    label: "Connect",
    bgColor: "#59425A", // Muted Plum
    textColor: "#FAFAF9",
    links: [
      { label: "Send Message", href: "#contact", ariaLabel: "Get in touch" },
      { label: "WhatsApp Direct", href: "https://wa.me/919352932900", ariaLabel: "WhatsApp us" }
    ]
  }
];

const HomePage = () => {
  return (
    <main className="w-full bg-[#FAFAF9] text-[#1C1917] transition-colors duration-500">
      <HeroSection />
      
      <div className="relative">
        <Noise
          patternSize={500}
          patternScaleX={5}
          patternScaleY={4.7}
          patternRefreshInterval={3}
          patternAlpha={5}
        />
        <WhoWeAre />
        
        <MagicBento 
          enableBorderGlow={true}
          glowColor="140, 46, 32"
        />

        <OurClients />
        <OurWorkspace />
        <CoreSolutions />
        <Gallery />
        <Reviews />
        <div id="founder"><Founder /></div>
        <div id="contact"><Contact /></div>
      </div>
    </main>
  );
};

const AppContent = ({ isPopupOpen, closePopup }) => {
  return (
    <>
      <ScrollToTop />
      <WhatsAppButton />
      <ContactPopup isOpen={isPopupOpen} onClose={closePopup} />
      <div className="bg-[#FAFAF9] text-[#1C1917] min-h-screen flex flex-col transition-colors duration-500">
        <CardNav 
          logo={logo}
          logoAlt="Balaji Creatives Logo"
          items={navItems}
          baseColor="#FAFAF9"
          menuColor="#1C1917"
          buttonBgColor="#400B11"
          buttonTextColor="#FAFAF9"
          ease="power3.out"
        />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
            <Route path="/services/social-media-advertising" element={<SocialMediaAdvertising />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/automation" element={<Automation />} />
            <Route path="/services/ai-content-influencers" element={<AIContent />} />
            <Route path="/services/digital-invitations" element={<DigitalInvitations />} />
          </Routes>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // Show contact popup with 2s delay after the IntroLoader finishes
    if (!loading) {
      const shown = sessionStorage.getItem('contactPopupShown');
      if (!shown) {
        const timer = setTimeout(() => {
          setIsPopupOpen(true);
        }, 2000);
        return () => clearTimeout(timer);
      }
    }
  }, [loading]);

  const closePopup = () => {
    setIsPopupOpen(false);
    sessionStorage.setItem('contactPopupShown', 'true');
  };

  return (
    <>
      {loading && <IntroLoader onComplete={() => setLoading(false)} />}
      <Router>
        <AppContent isPopupOpen={isPopupOpen} closePopup={closePopup} />
      </Router>
    </>
  );
}
