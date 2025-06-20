import React, { useEffect, useState } from 'react';
import { ArrowRight, Code, Smartphone, Settings, ChevronDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      {/* Animated Background */}
      <div className="hero-bg">
        <div className="hero-bg-gradient"></div>
        <div className="hero-bg-radial"></div>
        {/* Floating particles */}
        <div className="hero-bg-particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="hero-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="hero-content">
        <div className={`hero-inner ${isVisible ? 'hero-visible' : 'hero-hidden'}`}>
          <div className="hero-welcome">
            <span className="hero-welcome-badge">
              🚀 Welcome to the Future of Software Development
            </span>
          </div>
          
          <h1 className="hero-title">
            Transforming Ideas Into
            <span className="gradient-text hero-title-gradient">Digital Excellence</span>
          </h1>
          
          <p className="hero-desc">
            GRP is your trusted partner in cutting-edge software development. We craft innovative web applications, 
            mobile solutions, and custom software that drives business transformation and accelerates growth.
          </p>
          
          <div className="hero-btn-row">
            <button className="btn-primary hero-btn group">
              Start Your Project
              <ArrowRight className="hero-btn-arrow group-hover" size={20} />
            </button>
            <button className="btn-secondary hero-btn">
              Explore Our Work
            </button>
          </div>

          {/* Feature Icons */}
          <div className="hero-features">
            <div className="hero-feature-card group">
              <div className="hero-feature-icon group-hover">
                <Code size={24} className="hero-feature-icon-inner" />
              </div>
              <h3 className="hero-feature-title">Web Development</h3>
              <p className="hero-feature-desc">Modern, responsive websites that captivate and convert</p>
            </div>
            
            <div className="hero-feature-card group">
              <div className="hero-feature-icon group-hover">
                <Smartphone size={24} className="hero-feature-icon-inner" />
              </div>
              <h3 className="hero-feature-title">Mobile Apps</h3>
              <p className="hero-feature-desc">Native iOS & Android solutions for maximum impact</p>
            </div>
            
            <div className="hero-feature-card group">
              <div className="hero-feature-icon group-hover">
                <Settings size={24} className="hero-feature-icon-inner" />
              </div>
              <h3 className="hero-feature-title">Custom Software</h3>
              <p className="hero-feature-desc">Tailored solutions that fit your unique business needs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator">
        <button 
          onClick={scrollToNext}
          className="hero-scroll-btn"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
