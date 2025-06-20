import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, Calendar } from 'lucide-react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your EmailJS credentials
    const SERVICE_ID = 'service_9ijluvj';
    const TEMPLATE_ID = 'template_s8a58vl';
    const USER_ID = 'dpNPU_Uw3RNdcVIyK'; // public key

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then(
        (result) => {
          alert('Thank you for your message! We\'ll get back to you within 24 hours.');
          setFormData({
            name: '',
            email: '',
            company: '',
            subject: '',
            message: ''
          });
        },
        (error) => {
          alert('Sorry, there was an error sending your message. Please try again later.');
        }
      );
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email Us',
      details: 'grpgroups182329@gmail.com',
      description: 'Get in touch anytime',
      color: 'contact-info-icon1'
    },
    {
      icon: <Phone size={24} />,
      title: 'Call Us',
      details: '+91 9025493230',
      description: 'Mon-Fri, 9AM-6PM EST',
      color: 'contact-info-icon2'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Visit Us',
      details: '20/98 Therimelvilai, Eathamozhi, Nagercoil',
      description: 'Our headquarters',
      color: 'contact-info-icon3'
    },
    {
      icon: <Clock size={24} />,
      title: 'Working Hours',
      details: 'Mon - Fri: 9:00 AM - 6:00 PM',
      description: 'Saturday: 10:00 AM - 4:00 PM',
      color: 'contact-info-icon4'
    }
  ];

  const quickActions = [
    {
      icon: <MessageSquare size={20} />,
      title: 'Live Chat',
      description: 'Chat with our team',
      action: 'Start Chat',
      onClick: () => {
        window.open('https://wa.me/919025493230', '_blank');
      }
    },
    {
      icon: <Calendar size={20} />,
      title: 'Schedule Call',
      description: 'Book a consultation',
      action: 'Book Now',
      onClick: () => {
        window.open('https://wa.me/919025493230', '_blank');
      }
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header animate-on-scroll">
          <h2 className="contact-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="contact-desc">
            Ready to transform your business with cutting-edge software solutions? 
            Let's discuss your project and bring your vision to life.
          </p>
        </div>

        <div className="contact-main">
          {/* Contact Information */}
          <div className="contact-info-col">
            <div className="animate-on-scroll">
              <h3 className="contact-info-title">
                Contact <span className="gradient-text">Information</span>
              </h3>
              <div className="contact-info-list">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-info-card group">
                    <div className="contact-info-row">
                      <div className={`contact-info-icon ${info.color} group-hover`}>
                        <div className="contact-info-icon-inner">
                          {info.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="contact-info-label group-hover">
                          {info.title}
                        </h4>
                        <p className="contact-info-details">
                          {info.details}
                        </p>
                        <p className="contact-info-desc">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="contact-quick-actions">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    className="contact-quick-action group"
                    type="button"
                    onClick={action.onClick}
                  >
                    <div className="contact-quick-action-row">
                      <div className="contact-quick-action-main">
                        <div className="contact-quick-action-icon group-hover">
                          <div className="contact-quick-action-icon-inner">
                            {action.icon}
                          </div>
                        </div>
                        <div>
                          <h4 className="contact-quick-action-title group-hover">
                            {action.title}
                          </h4>
                          <p className="contact-quick-action-desc">
                            {action.description}
                          </p>
                        </div>
                      </div>
                      <span className="contact-quick-action-arrow group-hover">
                        {action.action} →
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-col">
            <div className="contact-form-card animate-on-scroll">
              <h3 className="contact-form-title">
                Start Your <span className="gradient-text">Project</span>
              </h3>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="contact-form-row">
                  <div>
                    <label htmlFor="name" className="contact-form-label">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="contact-form-input"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="contact-form-label">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="contact-form-input"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="contact-form-label">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="contact-form-input"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="contact-form-label">
                    Project Type *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="contact-form-input"
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-development">Mobile App Development</option>
                    <option value="custom-software">Custom Software Solutions</option>
                    <option value="cloud-solutions">Cloud Solutions</option>
                    <option value="it-consulting">IT Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="contact-form-label">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="contact-form-input contact-form-textarea"
                    placeholder="Tell us about your project requirements, timeline, budget, and any specific features you need..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="contact-form-submit group"
                >
                  Send Message
                  <Send className="contact-form-submit-icon group-hover" size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="contact-map-section animate-on-scroll">
          <div className="contact-map-card">
            <h3 className="contact-map-title">
              Visit Our <span className="gradient-text">Office</span>
            </h3>
            <p className="contact-map-desc">
              Located in the heart of Nagercoil, we're always ready to meet in person.
            </p>
            <div className="contact-map-placeholder" style={{padding: 0, height: '350px'}}>
              <iframe
                title="GRP Groups Info Park Location"
                src="https://www.google.com/maps?q=20/98+Therimelvilai,+Eathamozhi,+Nagercoil&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '16px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
