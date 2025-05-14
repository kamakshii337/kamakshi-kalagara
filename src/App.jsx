import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import Certificates from './Certificates';
import ExtraCurriculars from './ExtraCurriculars';
import Portfolio from './Portfolio';
import Resume from './Resume';
import './App.css';

const App = () => {
  // Determine basename from package.json homepage
  const basename = process.env.NODE_ENV === 'production' ? '/kamakshi-kalagara' : '/';
  
  // State for navbar scroll effect
  const [scrolled, setScrolled] = useState(false);
  // State for scroll-to-top button visibility
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // For navbar
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // For scroll-to-top button
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    const newMenuState = !mobileMenuOpen;
    setMobileMenuOpen(newMenuState);
    
    // Add or remove the menu-open class on body to prevent scrolling
    if (newMenuState) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  // Close mobile menu when a link is clicked or when scrolling
  const closeMobileMenu = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
      document.body.classList.remove('menu-open');
    }
  };

  // Add event listener to close menu on scroll
  useEffect(() => {
    window.addEventListener('scroll', closeMobileMenu);
    return () => {
      window.removeEventListener('scroll', closeMobileMenu);
    };
  }, [mobileMenuOpen]);
  
  // Clean up body class when component unmounts
  useEffect(() => {
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, []);

  return (
    <Router basename={basename}>
      <div className="app">
        <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'menu-open' : ''}`}>
          <div className="navbar-container">
            <div className="navbar-brand">
              <NavLink to="/" onClick={closeMobileMenu}>KK</NavLink>
            </div>
            
            <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
              <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
              <ul>
                <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMobileMenu}>Home</NavLink></li>
                <li><NavLink to="/portfolio" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMobileMenu}>Portfolio</NavLink></li>
                <li><NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMobileMenu}>Projects</NavLink></li>
                <li><NavLink to="/certificates" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMobileMenu}>Certificates</NavLink></li>
                <li><NavLink to="/extra-curriculars" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMobileMenu}>Extra-Curriculars</NavLink></li>
                <li><NavLink to="/resume" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMobileMenu}>Resume</NavLink></li>
              </ul>
            </div>
          </div>
        </nav>
        
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/extra-curriculars" element={<ExtraCurriculars />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
        
        {/* Scroll to top button */}
        <div 
          className={`scroll-top ${showScrollTop ? 'visible' : ''}`}
          onClick={scrollToTop}
        >
          ↑
        </div>
      </div>
    </Router>
  );
};

export default App;
