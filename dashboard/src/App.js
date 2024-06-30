// src/App.js
import React, { useEffect } from 'react';

import './App.css';
import Navbar from './components/Navbar';

const App = () => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    const scrollFraction = scrollPosition / maxScroll;

    const startColor = [255, 0, 0]; // Red
    const endColor = [138, 43, 226]; // Violet

    const blendedColor = startColor.map((start, index) => 
      Math.round(start + (endColor[index] - start) * scrollFraction)
    );

    document.documentElement.style.setProperty('--background-color', `rgb(${blendedColor.join(',')})`);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar/>
      <section id="home" className="section">
        <h1>Home Section</h1>
        <p>Content for home section...</p>
      </section>
      <section id="about" className="section">
        <h1>About Section</h1>
        <p>Content for about section...</p>
      </section>
      <section id="services" className="section">
        <h1>Services Section</h1>
        <p>Content for services section...</p>
      </section>
      <section id="contact" className="section">
        <h1>Contact Section</h1>
        <p>Content for contact section...</p>
      </section>
    </div>
  );
};

export default App;
