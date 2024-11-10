import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaEnvelope, FaServicestack, FaBars } from 'react-icons/fa';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="navbar-logo" />
            
            {/* Toggle button for mobile view */}
            <div className="navbar-toggle" onClick={toggleMenu}>
                <FaBars className="hamburger-icon" />
            </div>

            {/* Navigation links */}
            <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
                <li>
                    <Link to="/" onClick={closeMenu}><FaHome /> Home</Link>
                </li>
                <li>
                    <Link to="/about" onClick={closeMenu}><FaInfoCircle /> About</Link>
                </li>
                <li>
                    <Link to="/contact" onClick={closeMenu}><FaEnvelope /> Contact</Link>
                </li>
                <li>
                    <Link to="/service" onClick={closeMenu}><FaServicestack /> Services</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
