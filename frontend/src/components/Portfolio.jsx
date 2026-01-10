import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Navigation from './Navigation';
import { translations, personalInfo as mockPersonalInfo, contactInfo as mockContactInfo, skills as mockSkills, projects as mockProjects } from '../mock';
import { client, urlFor } from '../sanity/client';
import { personalInfoQuery, contactInfoQuery, skillsQuery, projectsQuery } from '../sanity/queries';

const Portfolio = () => {
  const [language, setLanguage] = useState('en');
  const [isScrolled, setIsScrolled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [useSanity] = useState(process.env.REACT_APP_USE_SANITY === 'true');
  
  // Data state
  const [personalInfo, setPersonalInfo] = useState(mockPersonalInfo);
  const [contactInfo, setContactInfo] = useState(mockContactInfo);
  const [skills, setSkills] = useState(mockSkills);
  const [projects, setProjects] = useState(mockProjects);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fetch data from Sanity if enabled
  useEffect(() => {
    async function fetchSanityData() {
      if (!useSanity || !client) {
        console.log('Using mock data - Sanity not configured or disabled');
        return;
      }

      try {
        setLoading(true);
        console.log('Fetching data from Sanity...');
        
        const [personalData, contactData, skillsData, projectsData] = await Promise.all([
          client.fetch(personalInfoQuery),
          client.fetch(contactInfoQuery),
          client.fetch(skillsQuery),
          client.fetch(projectsQuery)
        ]);

        // Transform projects to include image URLs
        const transformedProjects = projectsData.map((project, index) => ({
          id: project._id || index + 1,
          title: project.title,
          description: project.description,
          features: project.features,
          technologies: project.technologies,
          metrics: project.metrics,
          image: project.image ? urlFor(project.image).width(800).quality(80).url() : null
        }));

        if (personalData) setPersonalInfo(personalData);
        if (contactData) setContactInfo(contactData);
        if (skillsData.length > 0) setSkills(skillsData);
        if (transformedProjects.length > 0) setProjects(transformedProjects);
        
        console.log('Sanity data loaded successfully');
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Sanity data:', error);
        console.log('Falling back to mock data');
        setLoading(false);
      }
    }

    fetchSanityData();
  }, [useSanity]);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navigation 
        language={language} 
        setLanguage={setLanguage} 
        isScrolled={isScrolled}
        translations={t}
      />
      <Hero translations={t} personalInfo={personalInfo} />
      <About translations={t} personalInfo={personalInfo} language={language} />
      <Skills translations={t} skills={skills} />
      <Projects translations={t} projects={projects} />
      <Contact translations={t} contactInfo={contactInfo} personalInfo={personalInfo} />
    </div>
  );
};

export default Portfolio;
