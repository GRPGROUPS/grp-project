import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';
import logo from '/logo1.png'; // Adjust the path as necessary


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`header-root ${isScrolled ? 'header-scrolled' : ''}`}>
      <nav className="header-container">
        <div className="header-row">
          {/* ✅ Logo Row with Image */}
          <div className="header-logo-row">
            <img src={logo} alt="GRP Logo" className="header-logo-img" />
            <div className="header-logo-text">
              <span className="header-logo-main">GR</span>
              <span className="gradient-text">P</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="header-nav-desktop">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="header-link group">
                {item.name}
                <span className="header-link-underline"></span>
              </a>
            ))}
            <button className="header-btn-primary">Get Started</button>
          </div>

          {/* Mobile menu button */}
          <div className="header-nav-mobile-btn">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="header-mobile-btn"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="header-nav-mobile">
            <div className="header-nav-mobile-card">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="header-nav-mobile-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="header-nav-mobile-btn-wrap">
                <button className="header-btn-primary header-btn-mobile">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
