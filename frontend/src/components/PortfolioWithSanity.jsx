import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Navigation from './Navigation';
import { translations } from '../mock';
import { client, urlFor } from '../sanity/client';
import { personalInfoQuery, skillsQuery, projectsQuery } from '../sanity/queries';

const PortfolioWithSanity = () => {
  const [language, setLanguage] = useState('en');
  const [isScrolled, setIsScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  
  // Sanity data state
  const [personalInfo, setPersonalInfo] = useState(null);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fetch data from Sanity
  useEffect(() => {
    async function fetchSanityData() {
      try {
        setLoading(true);
        
        // Fetch all data in parallel
        const [personalData, skillsData, projectsData] = await Promise.all([
          client.fetch(personalInfoQuery),
          client.fetch(skillsQuery),
          client.fetch(projectsQuery)
        ]);

        // Transform projects to include image URLs
        const transformedProjects = projectsData.map((project, index) => ({
          id: index + 1,
          title: project.title,
          description: project.description,
          features: project.features,
          technologies: project.technologies,
          metrics: project.metrics,
          image: project.image ? urlFor(project.image).width(800).quality(80).url() : null
        }));

        setPersonalInfo(personalData);
        setSkills(skillsData);
        setProjects(transformedProjects);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Sanity data:', error);
        setLoading(false);
        // Fallback to mock data if Sanity fails
        // You can import mock data here as fallback
      }
    }

    fetchSanityData();
  }, []);

  const t = translations[language];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-slate-400 text-lg">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  // Prepare data for components
  const portfolioData = {
    personalInfo: personalInfo || {},
    skills: skills || [],
    projects: projects || [],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navigation 
        language={language} 
        setLanguage={setLanguage} 
        isScrolled={isScrolled}
        translations={t}
      />
      <Hero 
        translations={t}
        personalInfo={portfolioData.personalInfo}
      />
      <About 
        translations={t}
        personalInfo={portfolioData.personalInfo}
        language={language}
      />
      <Skills 
        translations={t}
        skills={portfolioData.skills}
      />
      <Projects 
        translations={t}
        projects={portfolioData.projects}
      />
      <Contact 
        translations={t}
        personalInfo={portfolioData.personalInfo}
      />
    </div>
  );
};

export default PortfolioWithSanity;
