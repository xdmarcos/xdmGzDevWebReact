import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Clock, Award } from 'lucide-react';

const Skills = ({ translations, skills, language }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(skills.map(skill => skill.category))];

  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter(skill => skill.category === selectedCategory);

  // Group skills by experience level for visual hierarchy
  const getExperienceLevel = (years) => {
    const numYears = parseInt(years);
    if (numYears >= 8) return 'expert';
    if (numYears >= 5) return 'advanced';
    if (numYears >= 3) return 'proficient';
    return 'learning';
  };

  const getLevelColor = (level) => {
    switch(level) {
      case 'expert': return 'from-cyan-500 to-blue-500';
      case 'advanced': return 'from-blue-500 to-teal-500';
      case 'proficient': return 'from-teal-500 to-cyan-500';
      default: return 'from-slate-500 to-slate-600';
    }
  };

  const getLevelBadge = (years) => {
    const numYears = parseInt(years);
    if (numYears >= 8) return { text: 'Expert', color: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/50' };
    if (numYears >= 5) return { text: 'Advanced', color: 'bg-blue-500/20 text-blue-400 border-blue-500/50' };
    if (numYears >= 3) return { text: 'Proficient', color: 'bg-teal-500/20 text-teal-400 border-teal-500/50' };
    return { text: 'Familiar', color: 'bg-slate-500/20 text-slate-400 border-slate-500/50' };
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            {translations.skills.title}
          </h2>
          <p className="text-slate-400 text-lg">
            {translations.skills.subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4" />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800 border border-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => {
            const level = getExperienceLevel(skill.years);
            const levelBadge = getLevelBadge(skill.years);
            const gradientColor = getLevelColor(level);
            const description = language === 'es' && skill.descriptionEs ? skill.descriptionEs : skill.description;

            return (
              <Card
                key={skill.name}
                className="bg-slate-800/30 backdrop-blur-sm border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <CardContent className="p-6">
                  {/* Header with icon */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-slate-100 font-bold text-xl mb-1 group-hover:text-cyan-400 transition-colors">
                        {skill.name}
                      </h3>
                      {skill.description && (
                        <p className="text-slate-500 text-sm">
                          {skill.description}
                        </p>
                      )}
                    </div>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradientColor} p-0.5 flex-shrink-0`}>
                      <div className="w-full h-full bg-slate-800 rounded-[10px] flex items-center justify-center">
                        <Award className="w-6 h-6 text-cyan-400" />
                      </div>
                    </div>
                  </div>

                  {/* Experience Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-300">
                      <Clock className="w-4 h-4 text-cyan-400" />
                      <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        {skill.years}
                      </span>
                      <span className="text-sm text-slate-400">years</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${levelBadge.color}`}>
                      {levelBadge.text}
                    </span>
                  </div>

                  {/* Category Tag */}
                  <div className="mt-4 pt-4 border-t border-slate-700/50">
                    <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                      {skill.category}
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Experience Legend */}
        <div className="mt-12 p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50">
          <h4 className="text-slate-300 font-semibold mb-4 text-center">Experience Levels</h4>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-cyan-500" />
              <span className="text-slate-400 text-sm"><strong>Expert:</strong> 8+ years</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              <span className="text-slate-400 text-sm"><strong>Advanced:</strong> 5-7 years</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-teal-500" />
              <span className="text-slate-400 text-sm"><strong>Proficient:</strong> 3-4 years</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-slate-500" />
              <span className="text-slate-400 text-sm"><strong>Familiar:</strong> 1-2 years</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
