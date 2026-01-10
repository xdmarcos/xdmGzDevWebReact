import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Navigation from './Navigation';
import { translations } from '../mock';

const Portfolio = () => {
  const [language, setLanguage] = useState('en');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navigation 
        language={language} 
        setLanguage={setLanguage} 
        isScrolled={isScrolled}
        translations={t}
      />
      <Hero translations={t} />
      <About translations={t} />
      <Skills translations={t} />
      <Projects translations={t} />
      <Contact translations={t} />
    </div>
  );
};

export default Portfolio;
