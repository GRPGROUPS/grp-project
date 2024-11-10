import React from 'react';
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import icons
import './Navbar.css'; // Create a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>GRP Groups</h3>
        <p>GRP Groups Info Park is best global human capital management consulting firms, providing a complete array of consulting services.</p>
        <p>9025493230</p>
        <p>grpgroups182329@gmail.com</p>
      </div>
      <div className="footer-section">
        <h3>SERVICES</h3>
        <ul>
          <li>Web Development</li>
          <li>Mobile Application Development</li>
          <li>Artificial Intelligence</li>
          <li>Software Development</li>
          <li>Cloud Computing</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>PRODUCTS</h3>
        <ul>
          <li>Ecommerce Website</li>
          <li>Software Application</li>
          <li>Mobile Application</li>
          <li>AI Application</li>
          <li>Data Analysis</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>ADDRESS</h3>
        <p>GRP Groups Info Park</p>
        <p>20/97,Therimelvilai </p>
        <p>Eathamozhi,</p>
        <p>Nagercoil;</p>
        <p>Pincode: 629501.</p>
      </div>
      <div className="footer-section social-media">
        <h3>FOLLOW US</h3>
        <div className="social-icons">
          <a href="https://chat.whatsapp.com/KEZQIkyNubHHdgnDaMrZGh" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={24} />
          </a>
          <a href="https://instagram.com/your-instagram-handle" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com/in/your-linkedin-handle" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Powered by GRP @ 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
