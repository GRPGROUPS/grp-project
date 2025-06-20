import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github, Code2, ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Web Development',
    'Mobile App Development',
    'Custom Software Solutions',
    'Cloud Solutions',
    'Database Design',
    'IT Consulting'
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: '#', name: 'Facebook', color: 'hover:text-blue-400' },
    { icon: <Twitter size={20} />, href: '#', name: 'Twitter', color: 'hover:text-sky-400' },
    { icon: <Linkedin size={20} />, href: '#', name: 'LinkedIn', color: 'hover:text-blue-500' },
    { icon: <Github size={20} />, href: '#', name: 'GitHub', color: 'hover:text-gray-300' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-company">
            <div className="footer-logo-row">
              <div className="footer-logo-bg">
                <Code2 size={24} className="footer-logo-icon" />
              </div>
              <div className="footer-logo-text">
                <span className="footer-logo-main">GR</span>
                <span className="gradient-text">Ps </span>
              </div>
            </div>
            <p className="footer-company-desc">
              Transforming businesses through innovative software solutions. 
              We're your trusted partner in digital transformation and technology excellence.
            </p>
            <div className="footer-social-row">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`footer-social-btn ${social.color}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-list">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="footer-link group"
                  >
                    <span className="footer-link-bar"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-list">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="footer-link group">
                    <span className="footer-link-bar"></span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="footer-heading">Contact Info</h3>
            <div className="footer-contact-list">
              <div className="footer-contact-row group">
                <div className="footer-contact-icon-bg">
                  <Mail size={16} className="footer-contact-icon" />
                </div>
                <span className="footer-contact-text group-hover">
                  grpgroups182329@gmail.com
                </span>
              </div>
              <div className="footer-contact-row group">
                <div className="footer-contact-icon-bg">
                  <Phone size={16} className="footer-contact-icon" />
                </div>
                <span className="footer-contact-text group-hover">
                  +91 9025493230
                </span>
              </div>
              <div className="footer-contact-row group">
                <div className="footer-contact-icon-bg footer-contact-icon-bg-mt">
                  <MapPin size={16} className="footer-contact-icon" />
                </div>
                <span className="footer-contact-text group-hover">
                  20/98 Therimelvilai, Eathamozhi<br />
                  Nagercoil
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-container">
          <div className="footer-bottom-left">
            © 2024 GRPs. All rights reserved. Crafted with passion and precision.
          </div>
          <div className="footer-bottom-right">
            <div className="footer-bottom-links">
              <a href="#" className="footer-bottom-link">
                Privacy Policy
              </a>
              <a href="#" className="footer-bottom-link">
                Terms of Service
              </a>
              <a href="#" className="footer-bottom-link">
                Cookie Policy
              </a>
            </div>
            <button
              onClick={scrollToTop}
              className="footer-scrolltop-btn"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} className="footer-scrolltop-icon" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;