import React, { useEffect, useRef } from 'react';
import { MapPin, Clock, DollarSign, Users, Code, Smartphone, Database, Cloud, Shield, Zap, ArrowRight, Star, GraduationCap, BookOpen, Award } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Careers.css';

gsap.registerPlugin(ScrollTrigger);

const Careers = () => {
  const sectionRef = useRef(null);
  const jobsRef = useRef(null);
  const internshipsRef = useRef(null);
  const benefitsRef = useRef(null);
  const cultureRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Jobs cards animation
      const jobCards = jobsRef.current?.children;
      gsap.fromTo(jobCards,
        {
          y: 80,
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: jobsRef.current,
            start: "top 85%"
          }
        }
      );

      // Internships animation
      const internshipCards = internshipsRef.current?.children;
      gsap.fromTo(internshipCards,
        {
          x: -60,
          opacity: 0,
          rotationY: 45
        },
        {
          x: 0,
          opacity: 1,
          rotationY: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: internshipsRef.current,
            start: "top 85%"
          }
        }
      );

      // Benefits animation
      const benefitCards = benefitsRef.current?.children;
      gsap.fromTo(benefitCards,
        {
          x: -50,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: benefitsRef.current,
            start: "top 85%"
          }
        }
      );

      // Culture section animation
      gsap.fromTo(cultureRef.current,
        {
          y: 100,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cultureRef.current,
            start: "top 85%"
          }
        }
      );

      // Floating animation for job icons
      gsap.to(jobsRef.current?.querySelectorAll('.career-icon.job') || [], {
        y: -8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2
      });

      // Floating animation for internship icons
      gsap.to(internshipsRef.current?.querySelectorAll('.career-icon.internship') || [], {
        y: -6,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const formatIndianCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const jobOpenings = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Mumbai, India',
      type: 'Full-time',
      salary: `${formatIndianCurrency(960000)} - ${formatIndianCurrency(1280000)}`,
      icon: <Code size={24} />,
      skills: ['React', 'Node.js', 'TypeScript', 'AWS'],
      description: 'Lead the development of cutting-edge web applications using modern technologies.',
      featured: true
    },
    {
      title: 'Mobile App Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: `${formatIndianCurrency(800000)} - ${formatIndianCurrency(1120000)}`,
      icon: <Smartphone size={24} />,
      skills: ['React Native', 'Flutter', 'iOS', 'Android'],
      description: 'Create amazing mobile experiences for iOS and Android platforms.',
      featured: false
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Bangalore, India',
      type: 'Full-time',
      salary: `${formatIndianCurrency(880000)} - ${formatIndianCurrency(1200000)}`,
      icon: <Cloud size={24} />,
      skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
      description: 'Build and maintain scalable infrastructure and deployment pipelines.',
      featured: false
    },
    {
      title: 'Database Administrator',
      department: 'Data',
      location: 'Pune, India',
      type: 'Full-time',
      salary: `${formatIndianCurrency(760000)} - ${formatIndianCurrency(1040000)}`,
      icon: <Database size={24} />,
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Performance Tuning'],
      description: 'Optimize and maintain our database systems for maximum performance.',
      featured: false
    }
  ];

  const internshipPrograms = [
    {
      title: 'Software Development Intern',
      department: 'Engineering',
      location: 'Mumbai, India / Remote',
      duration: '3-6 months',
      stipend: `${formatIndianCurrency(25000)}/month`,
      icon: <Code size={24} />,
      skills: ['JavaScript', 'React', 'Git', 'Problem Solving'],
      description: 'Work alongside senior developers on real projects and gain hands-on experience with modern web technologies.',
      requirements: ['Computer Science student', 'Basic programming knowledge', 'Eager to learn'],
      featured: true
    },
    {
      title: 'Mobile Development Intern',
      department: 'Mobile Team',
      location: 'Remote',
      duration: '4-6 months',
      stipend: `${formatIndianCurrency(22000)}/month`,
      icon: <Smartphone size={24} />,
      skills: ['React Native', 'Mobile UI/UX', 'API Integration'],
      description: 'Build mobile applications and learn cross-platform development techniques.',
      requirements: ['Mobile development interest', 'Basic React knowledge', 'Portfolio projects'],
      featured: false
    },
    {
      title: 'UI/UX Design Intern',
      department: 'Design',
      location: 'Mumbai, India',
      duration: '3-4 months',
      stipend: `${formatIndianCurrency(20000)}/month`,
      icon: <Award size={24} />,
      skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
      description: 'Create beautiful user interfaces and improve user experiences across our products.',
      requirements: ['Design portfolio', 'Figma proficiency', 'Creative thinking'],
      featured: false
    },
    {
      title: 'Data Science Intern',
      department: 'Analytics',
      location: 'Bangalore, India / Remote',
      duration: '4-6 months',
      stipend: `${formatIndianCurrency(28000)}/month`,
      icon: <Database size={24} />,
      skills: ['Python', 'SQL', 'Machine Learning', 'Data Visualization'],
      description: 'Analyze data patterns and build predictive models to drive business insights.',
      requirements: ['Statistics background', 'Python experience', 'Analytical mindset'],
      featured: true
    },
    {
      title: 'DevOps Intern',
      department: 'Infrastructure',
      location: 'Remote',
      duration: '3-5 months',
      stipend: `${formatIndianCurrency(24000)}/month`,
      icon: <Cloud size={24} />,
      skills: ['Docker', 'AWS', 'Linux', 'Automation'],
      description: 'Learn cloud infrastructure and deployment automation in a production environment.',
      requirements: ['Linux familiarity', 'Cloud interest', 'Problem-solving skills'],
      featured: false
    },
    {
      title: 'Cybersecurity Intern',
      department: 'Security',
      location: 'Delhi, India',
      duration: '4-6 months',
      stipend: `${formatIndianCurrency(26000)}/month`,
      icon: <Shield size={24} />,
      skills: ['Security Testing', 'Network Security', 'Risk Assessment'],
      description: 'Assist in security audits and learn about protecting digital assets.',
      requirements: ['Security interest', 'Networking basics', 'Detail-oriented'],
      featured: false
    }
  ];

  const benefits = [
    {
      title: 'Competitive Stipend',
      description: 'Industry-leading internship compensation with performance bonuses',
      icon: '💰'
    },
    {
      title: 'Mentorship Program',
      description: '1-on-1 mentoring with senior developers and industry experts',
      icon: '👨‍🏫'
    },
    {
      title: 'Flexible Schedule',
      description: 'Part-time and full-time options with flexible working hours',
      icon: '⏰'
    },
    {
      title: 'Learning Resources',
      description: 'Access to premium courses, books, and conference tickets',
      icon: '📚'
    },
    {
      title: 'Real Projects',
      description: 'Work on actual client projects, not just practice assignments',
      icon: '🚀'
    },
    {
      title: 'Career Path',
      description: 'High conversion rate to full-time positions for top performers',
      icon: '🎯'
    }
  ];

  return (
    <section id="careers" ref={sectionRef} className="careers">
      <div className="container-custom">
        {/* Header */}
        <div className="careers-header">
          <h2 className="careers-title">
            Join Our <span className="gradient-text">Team</span>
          </h2>
          <p className="careers-description">
            Be part of a dynamic team that's shaping the future of technology. 
            We're looking for passionate individuals who want to make a real impact.
          </p>
        </div>

        {/* Company Culture */}
        <div ref={cultureRef} className="careers-culture">
          <div className="careers-culture-card glass-card">
            <div className="careers-culture-content">
              <h3 className="careers-culture-title">
                Why Work at <span className="gradient-text">GRP</span>?
              </h3>
              <div className="careers-culture-grid">
                <div className="careers-culture-item">
                  <div className="careers-culture-emoji">🚀</div>
                  <h4>Innovation First</h4>
                  <p>Work with cutting-edge technologies and push the boundaries of what's possible.</p>
                </div>
                <div className="careers-culture-item">
                  <div className="careers-culture-emoji">🤝</div>
                  <h4>Collaborative Culture</h4>
                  <p>Join a supportive team where your ideas are valued and your growth is prioritized.</p>
                </div>
                <div className="careers-culture-item">
                  <div className="careers-culture-emoji">🌟</div>
                  <h4>Make an Impact</h4>
                  <p>Your work directly contributes to solutions that transform businesses worldwide.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Internship Programs */}
        <div className="careers-section">
          <div className="careers-section-header">
            <h3 className="careers-section-title">
              <span className="gradient-text">Internship</span> Programs
            </h3>
            <p className="careers-section-description">
              Launch your career with hands-on experience, mentorship, and real-world projects. 
              Our internship programs are designed to accelerate your professional growth.
            </p>
          </div>
          
          <div ref={internshipsRef} className="careers-internships-grid">
            {internshipPrograms.map((internship, index) => (
              <div
                key={index}
                className={`career-card glass-card ${internship.featured ? 'featured' : ''}`}
              >
                {internship.featured && (
                  <div className="career-badge internship">
                    <GraduationCap size={12} />
                    Popular
                  </div>
                )}
                
                <div className="career-header">
                  <div className="career-icon internship">
                    <div style={{ color: 'white' }}>
                      {internship.icon}
                    </div>
                  </div>
                  <div className="career-info">
                    <h4 className="career-title internship">
                      {internship.title}
                    </h4>
                    <p className="career-description">{internship.description}</p>
                  </div>
                </div>

                <div className="career-details">
                  <div className="career-detail">
                    <Users size={16} className="career-detail-icon internship" />
                    {internship.department}
                  </div>
                  <div className="career-detail">
                    <MapPin size={16} className="career-detail-icon internship" />
                    {internship.location}
                  </div>
                  <div className="career-detail">
                    <Clock size={16} className="career-detail-icon internship" />
                    {internship.duration}
                  </div>
                  <div className="career-detail">
                    <DollarSign size={16} className="career-detail-icon internship" />
                    {internship.stipend}
                  </div>
                </div>

                <div className="career-skills-section">
                  <h5 className="career-skills-title">Skills You'll Learn:</h5>
                  <div className="career-skills">
                    {internship.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="career-skill internship"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="career-requirements">
                    <h5 className="career-requirements-title">Requirements:</h5>
                    <ul className="career-requirements-list">
                      {internship.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="career-requirement">
                          <div className="career-requirement-dot internship"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  className="career-apply-button internship"
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdIK_IGe7NgM_8IfmNApBifgQBcVOcA8TviyfyOUEFmMWu6Yg/viewform?usp=dialog', '_blank')}
                >
                  Apply for Internship
                  <BookOpen size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Full-time Job Openings */}
        <div className="careers-section">
          <h3 className="careers-section-title">
            Full-time <span className="gradient-text">Positions</span>
          </h3>
          <div ref={jobsRef} className="careers-jobs-grid">
            {jobOpenings.map((job, index) => (
              <div
                key={index}
                className={`career-card glass-card ${job.featured ? 'job-featured' : ''}`}
              >
                {job.featured && (
                  <div className="career-badge job">
                    <Star size={12} />
                    Featured
                  </div>
                )}
                
                <div className="career-header">
                  <div className="career-icon job">
                    <div style={{ color: 'white' }}>
                      {job.icon}
                    </div>
                  </div>
                  <div className="career-info">
                    <h4 className="career-title job">
                      {job.title}
                    </h4>
                    <p className="career-description">{job.description}</p>
                  </div>
                </div>

                <div className="career-details">
                  <div className="career-detail">
                    <Users size={16} className="career-detail-icon job" />
                    {job.department}
                  </div>
                  <div className="career-detail">
                    <MapPin size={16} className="career-detail-icon job" />
                    {job.location}
                  </div>
                  <div className="career-detail">
                    <Clock size={16} className="career-detail-icon job" />
                    {job.type}
                  </div>
                  <div className="career-detail">
                    <DollarSign size={16} className="career-detail-icon job" />
                    {job.salary}
                  </div>
                </div>

                <div className="career-skills-section">
                  <div className="career-skills">
                    {job.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="career-skill job"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  className="career-apply-button job"
                  onClick={() => alert('Please send your resume to the Gmail given in the contact.')}
                >
                  Apply Now
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits for Interns & Employees */}
        <div className="careers-benefits">
          <h3 className="careers-benefits-title">
            Benefits & <span className="gradient-text">Perks</span>
          </h3>
          <div ref={benefitsRef} className="careers-benefits-grid">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="benefit-card glass-card"
              >
                <div className="benefit-emoji">
                  {benefit.icon}
                </div>
                <h4 className="benefit-title">
                  {benefit.title}
                </h4>
                <p className="benefit-description">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="careers-cta">
          <div className="careers-cta-card glass-card">
            <div className="careers-cta-content">
              <h3 className="careers-cta-title">
                Ready to Start Your <span className="gradient-text">Journey</span>?
              </h3>
              <p className="careers-cta-description">
                Whether you're looking for an internship to kickstart your career or a full-time position to advance it, 
                we have opportunities that will challenge and inspire you.
              </p>
              <div className="careers-cta-buttons">
                <button
                  className="careers-cta-button internship"
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdIK_IGe7NgM_8IfmNApBifgQBcVOcA8TviyfyOUEFmMWu6Yg/viewform?usp=dialog', '_blank')}
                >
                  Apply for Internship
                  <GraduationCap size={20} />
                </button>
                <button
                  className="careers-cta-button job"
                  onClick={() => alert('Please send your resume to the Gmail given in the contact.')}
                >
                  View Full-time Jobs
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;