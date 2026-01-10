import React, { useEffect, useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from './ui/button';

const Hero = ({ translations, personalInfo, language }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Get translated content based on language
  const title = language === 'es' && personalInfo.titleEs ? personalInfo.titleEs : personalInfo.title;
  const description = language === 'es' && personalInfo.descriptionEs ? personalInfo.descriptionEs : personalInfo.description;

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Greeting */}
          <p className="text-cyan-400 text-lg md:text-xl mb-4 font-medium">
            {translations.hero.greeting}
          </p>

          {/* Name with gradient */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          {/* Title */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-200 mb-6">
            {title}
          </h2>

          {/* Description */}
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-6 text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/50"
            >
              {translations.hero.cta1}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              {translations.hero.cta2}
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div 
          className="absolute left-1/2 transform -translate-x-1/2 animate-bounce"
          style={{ bottom: '-68px' }}
        >
          <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
