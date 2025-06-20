import React, { useEffect, useRef } from 'react';
import { Users, Award, Clock, Target, TrendingUp } from 'lucide-react';
import './About.css';

const About = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: <Users size={32} />, number: '50+', label: 'Happy Clients', color: 'stat-icon-bg1' },
    { icon: <Award size={32} />, number: '30+', label: 'Projects Completed', color: 'stat-icon-bg2' },
    { icon: <Clock size={32} />, number: '2+', label: 'Years Experience', color: 'stat-icon-bg3' },
    { icon: <Target size={32} />, number: '99%', label: 'Success Rate', color: 'stat-icon-bg4' }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We embrace cutting-edge technologies and methodologies to deliver solutions that set you apart from the competition.'
    },
    {
      title: 'Client-Centric Approach',
      description: 'Your success is our success. We work closely with you to understand your vision and exceed your expectations.'
    },
    {
      title: 'Quality Assurance',
      description: 'Every line of code is crafted with precision. We maintain the highest standards of quality and performance.'
    },
    {
      title: 'Agile Methodology',
      description: 'Fast, flexible, and efficient development processes that adapt to your changing business needs.'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header animate-on-scroll">
          <h2 className="about-title">
            About <span className="gradient-text">GRPs</span>
          </h2>
          <p className="about-desc">
            We are a passionate team of innovators, developers, and technology enthusiasts 
            dedicated to transforming businesses through exceptional software solutions.
          </p>
        </div>

        {/* Company Stats */}
        <div className="about-stats" ref={statsRef}>
          {stats.map((stat, index) => (
            <div key={index} className="about-stat animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="about-stat-card group">
                <div className={`about-stat-icon ${stat.color} group-hover`}>
                  <div className="about-stat-icon-inner">
                    {stat.icon}
                  </div>
                </div>
                <div className="about-stat-number group-hover">
                  {stat.number}
                </div>
                <div className="about-stat-label">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Story */}
        <div className="about-story">
          <div className="about-story-text animate-on-scroll">
            <h3 className="about-story-title">
              Our <span className="gradient-text">Story</span>
            </h3>
            <p className="about-story-desc">
              Founded in 2024, GRPs emerged from a vision to bridge the gap between innovative technology 
              and business success. What started as a small team of passionate developers has evolved 
              into a leading software development company trusted by enterprises worldwide.
            </p>
            <p className="about-story-desc">
              We believe in the transformative power of well-crafted software. Our approach combines 
              technical excellence with deep business understanding, ensuring every solution we deliver 
              drives measurable results and sustainable growth.
            </p>
            
            <div className="about-values">
              {values.map((value, index) => (
                <div key={index} className="about-value group">
                  <div className="about-value-dot group-hover"></div>
                  <div>
                    <h4 className="about-value-title group-hover">
                      {value.title}
                    </h4>
                    <p className="about-value-desc">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-story-img animate-on-scroll">
            <div className="about-story-img-bg"></div>
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Team collaboration"
              className="about-story-img-main"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="about-mission-vision">
          <div className="about-mission-card animate-on-scroll group-hover">
            <div className="about-mission-icon">
              <Target size={24} className="about-mission-icon-inner" />
            </div>
            <h3 className="about-mission-title">Our Mission</h3>
            <p className="about-mission-desc">
              To empower businesses with innovative software solutions that drive growth, 
              efficiency, and competitive advantage in the digital landscape.
            </p>
          </div>
          
          <div className="about-mission-card animate-on-scroll group-hover">
            <div className="about-mission-icon">
              <TrendingUp size={24} className="about-mission-icon-inner" />
            </div>
            <h3 className="about-mission-title">Our Vision</h3>
            <p className="about-mission-desc">
              To be the global leader in software development, recognized for our innovation, 
              quality, and commitment to transforming businesses through technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

