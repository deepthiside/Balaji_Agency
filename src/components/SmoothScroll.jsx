import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';

export default function SmoothScroll({ children }) {
  const location = useLocation();

  useEffect(() => {
    // Initialize Lenis with elite inertia scrolling options
    const lenis = new Lenis({
      duration: 1.4, // slightly longer duration for organic inertia
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // premium exponential easing
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false,
    });

    // Make lenis globally accessible
    window.lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Clean up
    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
      window.lenis = null;
    };
  }, []);

  // Intercept hash scroll and click triggers
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      // If it's a hash link on the same page
      if (href && href.startsWith('#') && window.lenis) {
        const targetId = href;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          window.lenis.scrollTo(targetElement, {
            offset: -100, // breathing room for navigation bar
            duration: 1.6,
          });
        }
      }
    };

    window.addEventListener('click', handleAnchorClick);
    return () => {
      window.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  // Reset scroll to top on route change or handle hash scroll on initial load
  useEffect(() => {
    if (window.lenis) {
      if (location.hash) {
        // Wait brief moment for virtual DOM to fully mount/settle
        setTimeout(() => {
          const targetElement = document.querySelector(location.hash);
          if (targetElement) {
            window.lenis.scrollTo(targetElement, {
              offset: -100,
              duration: 1.6,
            });
          }
        }, 150);
      } else {
        window.lenis.scrollTo(0, { immediate: true });
      }
    } else {
      if (location.hash) {
        setTimeout(() => {
          const targetElement = document.querySelector(location.hash);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [location.pathname, location.hash]);

  return <>{children}</>;
}
