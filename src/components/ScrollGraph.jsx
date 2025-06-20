import React, { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Code, Award } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollGraph = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const chartRef = useRef(null);
  const achievementsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Chart animation
      const bars = chartRef.current?.querySelectorAll('.chart-bar');
      
      gsap.fromTo(bars, 
        { 
          height: 0,
          opacity: 0 
        },
        {
          height: (i, target) => target.dataset.height,
          opacity: 1,
          duration: 1.5,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: chartRef.current,
            start: "top 80%",
            onEnter: () => setIsVisible(true)
          }
        }
      );

      // Achievement cards animation
      const cards = achievementsRef.current?.children;
      gsap.fromTo(cards,
        {
          y: 50,
          opacity: 0,
          scale: 0.8
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: achievementsRef.current,
            start: "top 85%"
          }
        }
      );

      // Floating animation for achievement icons
      gsap.to(achievementsRef.current?.querySelectorAll('.achievement-icon') || [], {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const growthData = [
    { year: '2016', projects: 15, clients: 8, revenue: 25 },
    { year: '2017', projects: 32, clients: 18, revenue: 45 },
    { year: '2018', projects: 58, clients: 35, revenue: 78 },
    { year: '2019', projects: 89, clients: 52, revenue: 120 },
    { year: '2020', projects: 125, clients: 78, revenue: 165 },
    { year: '2021', projects: 178, clients: 105, revenue: 220 },
    { year: '2022', projects: 235, clients: 142, revenue: 285 },
    { year: '2023', projects: 298, clients: 186, revenue: 350 },
    { year: '2024', projects: 365, clients: 225, revenue: 425 }
  ];

  const maxProjects = Math.max(...growthData.map(d => d.projects));
  const maxClients = Math.max(...growthData.map(d => d.clients));

  const achievements = [
    {
      icon: <Code size={24} />,
      title: 'Lines of Code',
      value: '25L+',
      description: 'Written with precision and care'
    },
    {
      icon: <Users size={24} />,
      title: 'Team Members',
      value: '45+',
      description: 'Expert developers and designers'
    },
    {
      icon: <Award size={24} />,
      title: 'Awards Won',
      value: '12+',
      description: 'Industry recognition and excellence'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Growth Rate',
      value: '150%',
      description: 'Year-over-year business growth'
    }
  ];

  return (
    <section ref={sectionRef} className="scroll-graph">
      <div className="container-custom">
        <div className="scroll-graph-header">
          <h2 className="scroll-graph-title">
            Our <span className="gradient-text">Growth Story</span>
          </h2>
          <p className="scroll-graph-description">
            From humble beginnings to industry leadership - witness our journey of continuous 
            growth, innovation, and client success over the years.
          </p>
        </div>

        {/* Enhanced Animated Growth Chart */}
        <div className="chart-container">
          <div className="chart-card glass-card">
            <h3 className="chart-title">
              Projects & Clients Growth (2016-2024)
            </h3>
            
            <div ref={chartRef} className="chart-area">
              {/* Y-axis labels */}
              <div className="chart-y-axis">
                <span>{maxProjects}</span>
                <span>{Math.floor(maxProjects * 0.75)}</span>
                <span>{Math.floor(maxProjects * 0.5)}</span>
                <span>{Math.floor(maxProjects * 0.25)}</span>
                <span>0</span>
              </div>

              {/* Chart area */}
              <div className="chart-content">
                {/* Enhanced grid lines */}
                {[0, 25, 50, 75, 100].map((percent) => (
                  <div
                    key={percent}
                    className="chart-grid-line"
                    style={{ top: `${100 - percent}%` }}
                  />
                ))}

                {/* Enhanced Bars with glow effect */}
                <div className="chart-bars">
                  {growthData.map((data, index) => (
                    <div key={data.year} className="chart-year-group">
                      <div className="chart-bars-container">
                        {/* Projects bar */}
                        <div
                          className="chart-bar chart-bar-projects"
                          data-height={`${(data.projects / maxProjects) * 100}%`}
                        />
                        {/* Clients bar */}
                        <div
                          className="chart-bar chart-bar-clients"
                          data-height={`${(data.clients / maxClients) * 100}%`}
                        />
                      </div>
                      <span className="chart-year-label">{data.year}</span>
                    </div>
                  ))}
                </div>

                {/* Enhanced Legend */}
                <div className="chart-legend">
                  <div className="chart-legend-item">
                    <div className="chart-legend-color chart-legend-projects"></div>
                    <span className="chart-legend-text">Projects</span>
                  </div>
                  <div className="chart-legend-item">
                    <div className="chart-legend-color chart-legend-clients"></div>
                    <span className="chart-legend-text">Clients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Achievement Cards */}
        <div ref={achievementsRef} className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="achievement-card glass-card"
            >
              <div className="achievement-icon">
                <div style={{ color: 'white' }}>
                  {achievement.icon}
                </div>
              </div>
              <div className="achievement-value gradient-text">
                {achievement.value}
              </div>
              <h4 className="achievement-title">
                {achievement.title}
              </h4>
              <p className="achievement-description">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollGraph;