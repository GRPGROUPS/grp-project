import React, { useEffect } from 'react';
import { Code, Smartphone, Settings, Cloud, Database, Shield, Zap, Globe } from 'lucide-react';
import './Services.css';

const Services = () => {
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

  const services = [
    {
      icon: <Code size={32} />,
      title: 'Web Development',
      description: 'Create stunning, high-performance websites and web applications using cutting-edge technologies like React, Vue, and Node.js.',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Tuning', 'Modern Frameworks'],
      gradient: 'service-gradient1'
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile App Development',
      description: 'Build native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android.',
      features: ['Native Development', 'Cross-Platform', 'App Store Optimization', 'Push Notifications'],
      gradient: 'service-gradient2'
    },
    {
      icon: <Settings size={32} />,
      title: 'Custom Software Solutions',
      description: 'Develop tailored software solutions that address your specific business challenges and operational requirements.',
      features: ['Business Logic', 'Workflow Automation', 'System Integration', 'Scalable Architecture'],
      gradient: 'service-gradient3'
    },
    {
      icon: <Cloud size={32} />,
      title: 'Cloud Solutions',
      description: 'Migrate and deploy your applications to the cloud with AWS, Azure, and Google Cloud Platform for maximum scalability.',
      features: ['Cloud Migration', 'DevOps Implementation', 'Auto Scaling', 'Cost Optimization'],
      gradient: 'service-gradient4'
    },
    {
      icon: <Database size={32} />,
      title: 'Database Design',
      description: 'Design and optimize databases for maximum performance, security, and scalability across various data platforms.',
      features: ['Database Architecture', 'Performance Tuning', 'Data Migration', 'Backup Solutions'],
      gradient: 'service-gradient5'
    },
    {
      icon: <Shield size={32} />,
      title: 'Security Solutions',
      description: 'Implement robust security measures to protect your applications and sensitive data from modern threats.',
      features: ['Security Audits', 'Data Encryption', 'Access Control', 'Compliance Standards'],
      gradient: 'service-gradient6'
    },
    {
      icon: <Zap size={32} />,
      title: 'Performance Optimization',
      description: 'Enhance your existing applications with advanced optimization techniques for speed and efficiency.',
      features: ['Code Optimization', 'Load Balancing', 'Caching Strategies', 'Monitoring Tools'],
      gradient: 'service-gradient7'
    },
    {
      icon: <Globe size={32} />,
      title: 'IT Consulting',
      description: 'Strategic technology consulting to help you make informed decisions about your digital transformation journey.',
      features: ['Technology Strategy', 'Digital Transformation', 'Architecture Planning', 'Best Practices'],
      gradient: 'service-gradient8'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header animate-on-scroll">
          <h2 className="services-title">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="services-description">
            We offer comprehensive software development services designed to accelerate your business 
            growth and digital transformation in today's competitive landscape.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card animate-on-scroll group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`service-icon ${service.gradient}`}>
                <div className="icon-inner">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="service-title group-hover">
                {service.title}
              </h3>
              
              <p className="service-desc">
                {service.description}
              </p>
              
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="service-feature group-hover">
                    <div className="feature-dot"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="service-footer">
                <button className="service-learn-more group-hover">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
