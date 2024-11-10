import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faClock } from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false); // State for submit button

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Start submitting

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    emailjs.send("grpgroups182329", "template_5ufxj5i", templateParams, "aPX9hUuaeiN5s72mE")
      .then((response) => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        alert("Failed to send message. Please try again later.");
        console.error("Error:", error);
      })
      .finally(() => {
        setIsSubmitting(false); // Stop submitting
      });
  };

  return (
    <div className="container">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <div className="info-box">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
          <div>
            <h4>Address</h4>
            <p>20/97 Therimelvilai<br />Eathamozhi<br />Nagercoil 629003</p>
          </div>
        </div>
        <div className="info-box">
          <FontAwesomeIcon icon={faPhoneAlt} className="icon" />
          <div>
            <h4>Call Us</h4>
            <p>+91 9025493230<br /></p>
          </div>
        </div>
        <div className="info-box">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <div>
            <h4>Email Us</h4>
            <p>grpgroups182329@gmail.com</p>
          </div>
        </div>
        <div className="info-box">
          <FontAwesomeIcon icon={faClock} className="icon" />
          <div>
            <h4>Open Hours</h4>
            <p>Monday - Saturday<br />(08.30AM - 05.30PM)</p>
          </div>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group full-width">
          <input 
            type="text" 
            name="subject" 
            placeholder="Subject" 
            value={formData.subject} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group full-width">
          <textarea 
            name="message" 
            placeholder="Message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit" className="btn-submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
