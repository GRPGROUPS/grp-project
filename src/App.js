import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes here
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import the Footer
import Home from './components/Home';
import Service from './components/Service'; // Import the Service component
import About from './components/About';
import Contact from './components/Contact';
import './App.css'; // Optional: For general styling

const App = () => {
    return (
      <Router>
          <div className="min-h-screen flex flex-col">
              <Navbar />
              <Routes> {/* Use Routes instead of Switch */}
                  <Route path="/" element={<Home />} /> {/* Home route */}
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/service" element={<Service />} /> {/* Add the Service route */}
              </Routes>
              <Footer /> {/* Use the Footer component */}
          </div>
      </Router>
    );
};

export default App;