import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ScrollGraph from './components/ScrollGraph';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Careers from './components/Careers';

function App() {
  return (
    <div className="app-root">
      <Header />
      <Hero />
      <About />
      <Services />
      <ScrollGraph />
      <Portfolio />
      <Careers />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
