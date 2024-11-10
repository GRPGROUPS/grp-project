import React from 'react';
import './Navbar.css'; // Ensure the path to your CSS file is correct
import CTAModal from './CTAModal';
import webDevelopmentImage from '../assets/web-development.jpg'; // Corrected path
import Applicazioni from '../assets/Applicazioni.jpg';
import digitalmarketing from '../assets/digitalmarketing.jpg';
import Image3 from '../assets/image3.jpg';
import Image4 from '../assets/image4.jpg';
import Image5 from '../assets/image5.jpg';
import Image2 from '../assets/image2.jpg';
import Image7 from '../assets/image7.jpg';
import Image8 from '../assets/image8.jpg';
import Image9 from '../assets/image9.jpg';
import Image10 from '../assets/image10.jpg';
import Image11 from '../assets/image11.jpg';
import Image12 from '../assets/image12.jpg';
import Image13 from '../assets/image13.jpg';

const servicesData = [
  {
    "title": `<img src="${webDevelopmentImage}" alt="Web Development" />`,
    "description": "We create responsive and user-friendly websites tailored to your business needs."
  },
  {
    "title": `<img src="${Applicazioni}" alt="AI Application" />`,
    "description": "AI optimizes digital marketing by enhancing targeting, personalization, and data analysis to improve campaign performance and customer engagement."
  },
  {
    "title": `<img src="${digitalmarketing}" alt=" Digital Marketing" />`,
    "description": "Our digital marketing strategies help you reach your target audience effectively."
  },
  {
    "title": `<img src="${Image3}" alt="Description of Image3" />`,
    "description": "Web promotion involves strategies to increase a website's visibility and attract more visitors. This includes techniques like SEO, social media marketing, and paid advertising to drive traffic and generate leads."
  },
  {
    "title": `<img src="${Image4}" alt="Description of Image4" />`,
    "description": "Mobile application development involves creating software applications designed to run on mobile devices like smartphones and tablets. These apps provide various services, from communication and entertainment to productivity and commerce, enhancing user experiences on the go."
  },
  {
    "title": `<img src="${Image5}" alt="Description of Image5" />`,
    "description": "A domain name is your website's unique address on the internet, while web hosting is the service that stores your website's files and makes them accessible to visitors."
  },
  {
    "title": `<img src="${Image2}" alt="Description of Image6" />`,
    "description": "Web design focuses on the visual aspect of websites. It involves creating aesthetically pleasing and intuitive layouts, using typography, color schemes, and imagery to enhance the user experience."
  },
  {
    "title": `<img src="${Image7}" alt="Description of Image7" />`,
    "description": "SEO Analysis is the process of examining a website's on-page and off-page elements to identify areas for improvement in search engine rankings. It involves technical SEO, keyword research, and link building strategies to enhance website visibility."
  },
  {
    "title": `<img src="${Image8}" alt="Description of Image8" />`,
    "description": "Database maintenance ensures optimal performance and security of databases. It involves tasks like regular backups, updates, optimization, and troubleshooting to prevent data loss and system failures."
  },
  {
    "title": `<img src="${Image9}" alt="Description of Image9" />`,
    "description": "Data server maintenance involves keeping data servers running smoothly and securely. This includes tasks like software updates, hardware checks, data backups, and security measures to ensure optimal performance and data protection."
  },
  {
    "title": `<img src="${Image10}" alt="Description of Image10" />`,
    "description": "Software development is the process of designing, creating, testing, and deploying software applications. It involves writing code to solve specific problems and automate tasks."
  },
  {
    "title": `<img src="${Image11}" alt="Description of Image11" />`,
    "description": "Artificial Intelligence (AI) is the science of making machines intelligent. It empowers machines to learn, reason, and make decisions, mimicking human cognitive abilities"
  },
  {
    "title": `<img src="${Image12}" alt="Description of Image12" />`,
    "description": "Data analysis is the process of examining, cleaning, transforming, and modeling data to discover useful information, draw conclusions, and support decision-making. It involves collecting and analyzing data to answer questions, test hypotheses, or disprove theories"
  },
  {
    "title": `<img src="${Image13}" alt="Description of Image13" />`,
    "description": "Cloud Computing is the delivery of computing services—such as servers, storage, databases, networking, software, analytics, and intelligence—over the Internet (“the cloud”) to offer faster innovation, flexible resources, and economies of scale."
  }
];

const Service = () => {
  return (
    <div className="services-container">
      <h1>Service Overview</h1>
      <p>We offer a range of services designed to help your business thrive. Our expertise spans web development, digital marketing, and more.</p>

      <div className="individual-services">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <h2 dangerouslySetInnerHTML={{ __html: service.title }}></h2>
            <p><strong>Description:</strong> {service.description}</p>
          </div>
        ))}
      </div>

      <CTAModal />
    </div>
  );
};

export default Service;
