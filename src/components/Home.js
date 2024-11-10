import React, { useEffect, useState } from 'react';
import './Navbar.css';
import Image1 from '../assets/image1.jpg';
import Image2 from '../assets/image2.jpg';
import Image3 from '../assets/image3.jpg';
import Image4 from '../assets/image4.jpg';
import Image5 from '../assets/image5.jpg';
import Image7 from '../assets/image7.jpg';
import Image8 from '../assets/image8.jpg';
import Image9 from '../assets/image9.jpg';
import Image10 from '../assets/image10.jpg';
import Image11 from '../assets/image11.jpg';
import Image12 from '../assets/image12.jpg';
import Image13 from '../assets/image13.jpg';

const Home = () => {
    // Use the actual image imports without duplicates
    const imagesAndTexts = [
        { src: Image1 },
        { src: Image2 },
        { src: Image3 },
        { src: Image4 },
        { src: Image5 },
        { src: Image7 },
        { src: Image8 },
        { src: Image9 },
        { src: Image10 },
        { src: Image11 },
        { src: Image12 },
        { src: Image13 },
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % imagesAndTexts.length);
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(interval); // Cleanup on component unmount
    }, [imagesAndTexts.length]);

    return (
        <div>
            <div className="about-container">
                <div className="text-container">
                    <h2 className="welcome-text">Welcome to our GRP Groups</h2>
                </div>
                <div className="image-container">
                    <img 
                        src={imagesAndTexts[index].src} 
                        alt={`Slideshow image ${index + 1}`} // Add alt attribute for accessibility
                        className="image fade" 
                        style={{ 
                            width: '100%',
                            height: 'auto',
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                    />
                </div>
            </div>
            <div className="about-container">
                <h1>Our Services</h1>

                <section className="about-section">
                    <h2>Web Development</h2>
                    <p>Building seamless, interactive, and stunning websites from code to completion.</p>
                </section>

                <section className="about-section">
                    <h2>Web Design</h2>
                    <p>Crafting elegant, intuitive designs that captivate and engage users effortlessly.</p>
                </section>

                <section className="about-section">
                    <h2>Web Promotion</h2>
                    <p>Boosting online presence with smart SEO, strategic ads, and viral social campaigns.</p>
                </section>

                <section className="about-section">
                    <h2>Mobile Applications</h2>
                    <p>Developing dynamic apps to enhance everyday experiences right at your fingertips.</p>
                </section>

                <section className="about-section">
                    <h2>Domain & Hosting</h2>
                    <p>Your digital address and solid hosting for a fast, reliable, and secure web experience.</p>
                </section>

                <section className="about-section">
                    <h2>Digital Marketing</h2>
                    <p>Data-driven strategies to grow your brand’s reach and engage your audience meaningfully.</p>
                </section>

                <section className="about-section">
                    <h2>SEO Analysis</h2>
                    <p>Deep-dive audits and tactics to elevate your search engine rankings and visibility.</p>
                </section>

                <section className="about-section">
                    <h2>Database & Server Maintenance</h2>
                    <p>Ensuring data security, optimization, and smooth server operations, round the clock.</p>
                </section>

                <section className="about-section">
                    <h2>Software Development</h2>
                    <p>Delivering efficient, innovative software solutions to automate and simplify tasks.</p>
                </section>

                <section className="about-section">
                    <h2>AI & Data Analysis</h2>
                    <p>Using AI to empower decisions and analyzing data to unlock insights and opportunities.</p>
                </section>

                <section className="about-section">
                    <h2>Cloud Computing</h2>
                    <p>Flexible, scalable cloud solutions to streamline processes and drive innovation.</p>
                </section>
            </div>
        </div>
    );
};

export default Home;
