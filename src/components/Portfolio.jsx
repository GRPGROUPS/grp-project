import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
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

  const projects = [
    {
      title: 'FinTech Dashboard',
      description: 'A comprehensive financial analytics platform with real-time data visualization, portfolio management, and advanced reporting capabilities.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      technologies: ['React', 'TypeScript', 'D3.js', 'Node.js', 'PostgreSQL'],
      category: 'Web Application',
      featured: true
    },
    {
      title: 'Healthcare Mobile Suite',
      description: 'Complete telemedicine solution with patient management, video consultations, prescription handling, and health monitoring.',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      technologies: ['React Native', 'Firebase', 'WebRTC', 'Node.js'],
      category: 'Mobile App',
      featured: true
    },
    {
      title: 'E-Commerce Platform',
      description: 'Scalable multi-vendor marketplace with advanced inventory management, payment processing, and analytics dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis', 'Stripe'],
      category: 'Web Platform'
    },
    {
      title: 'IoT Monitoring System',
      description: 'Industrial IoT platform for real-time equipment monitoring, predictive maintenance, and automated reporting.',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      technologies: ['Angular', 'Python', 'InfluxDB', 'MQTT', 'Docker'],
      category: 'Enterprise Software'
    },
    {
      title: 'Social Learning Platform',
      description: 'Interactive educational platform with live streaming, course management, progress tracking, and community features.',
      image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      technologies: ['Next.js', 'Prisma', 'WebRTC', 'AWS', 'Tailwind'],
      category: 'EdTech Platform'
    },
    {
      title: 'Logistics Management App',
      description: 'Complete supply chain solution with route optimization, real-time tracking, and automated dispatch management.',
      image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      technologies: ['Flutter', 'Google Maps', 'Firebase', 'ML Kit'],
      category: 'Mobile App'
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const regularProjects = projects.filter(project => !project.featured);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <div className="portfolio-header animate-on-scroll">
          <h2 className="portfolio-title">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="portfolio-desc">
            Discover our most impactful projects and see how we've transformed businesses 
            across various industries with innovative software solutions.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="portfolio-featured">
          <h3 className="portfolio-featured-title">Featured Projects</h3>
          <div className="portfolio-featured-grid">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="portfolio-card portfolio-card-featured animate-on-scroll group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="portfolio-card-image-wrap">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="portfolio-card-image"
                  />
                  <div className="portfolio-card-image-overlay"></div>
                  <div className="portfolio-card-category">
                    <span className="portfolio-card-category-badge">
                      {project.category}
                    </span>
                  </div>
                  <div className="portfolio-card-featured-badge">
                    <span className="portfolio-card-featured-label">
                      FEATURED
                    </span>
                  </div>
                </div>
                
                <div className="portfolio-card-content">
                  <h3 className="portfolio-card-title group-hover">
                    {project.title}
                  </h3>
                  <p className="portfolio-card-desc">
                    {project.description}
                  </p>
                  
                  <div className="portfolio-card-tech-list">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="portfolio-card-tech"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regular Projects */}
        <div className="portfolio-regular">
          <h3 className="portfolio-regular-title">More Projects</h3>
          <div className="portfolio-regular-grid">
            {regularProjects.map((project, index) => (
              <div
                key={index}
                className="portfolio-card portfolio-card-regular animate-on-scroll group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="portfolio-card-image-wrap">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="portfolio-card-image portfolio-card-image-regular"
                  />
                  <div className="portfolio-card-image-overlay"></div>
                  <div className="portfolio-card-category">
                    <span className="portfolio-card-category-badge">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="portfolio-card-content portfolio-card-content-regular">
                  <h3 className="portfolio-card-title portfolio-card-title-regular group-hover">
                    {project.title}
                  </h3>
                  <p className="portfolio-card-desc portfolio-card-desc-regular">
                    {project.description}
                  </p>
                  
                  <div className="portfolio-card-tech-list portfolio-card-tech-list-regular">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="portfolio-card-tech portfolio-card-tech-regular"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="portfolio-card-tech-more">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="portfolio-cta animate-on-scroll">
          <div className="portfolio-cta-card">
            <h3 className="portfolio-cta-title">
              Ready to Start Your <span className="gradient-text">Next Project</span>?
            </h3>
            <p className="portfolio-cta-desc">
              Let's discuss how we can bring your vision to life with our expertise and innovative approach.
            </p>
            <button className="portfolio-cta-btn group">
              Start Your Project
              <ArrowRight className="portfolio-cta-btn-arrow group-hover" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;