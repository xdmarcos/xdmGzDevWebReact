import React, { useState } from 'react';
import { skills } from '../mock';

const Skills = ({ translations }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(skills.map(skill => skill.category))];

  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter(skill => skill.category === selectedCategory);

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
        <div className="grid md:grid-cols-2 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-slate-100 font-semibold text-lg">
                  {skill.name}
                </span>
                <span className="text-cyan-400 font-bold text-lg">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000 ease-out shadow-lg shadow-cyan-500/50"
                  style={{
                    width: `${skill.level}%`,
                    animation: 'slideIn 1s ease-out'
                  }}
                />
              </div>
              <div className="mt-2">
                <span className="text-xs text-slate-500 font-medium">
                  {skill.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            width: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
