import React, { useState, useEffect } from 'react';
import './SuspensePopup.css';

const SuspensePopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRender(true);
      // Small delay to trigger animation
      setTimeout(() => setIsVisible(true), 10);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Remove from DOM after animation finishes
    setTimeout(() => setShouldRender(false), 500);
  };

  if (!shouldRender) return null;

  return (
    <div className={`popup-overlay ${isVisible ? 'active' : ''}`}>
      <div className={`popup-card ${isVisible ? 'active' : ''}`}>
        <button className="close-btn" onClick={handleClose} aria-label="Close popup">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div className="popup-content">
          <div className="status-badge">Upcoming</div>
          <h2 className="main-text">Something is developing</h2>
          <p className="sub-text">something is coming</p>
          <div className="glow-effect"></div>
        </div>
      </div>
    </div>
  );
};

export default SuspensePopup;
