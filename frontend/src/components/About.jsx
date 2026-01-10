import React from 'react';
import { Card, CardContent } from './ui/card';
import { Code2, Smartphone, Layers } from 'lucide-react';

const About = ({ translations }) => {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, testable, and scalable code'
    },
    {
      icon: Smartphone,
      title: 'Native iOS',
      description: 'Deep expertise in Swift and iOS frameworks'
    },
    {
      icon: Layers,
      title: 'Architecture',
      description: 'MVVM, Clean Architecture, and design patterns'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            {translations.about.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto" />
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              {translations.about.content}
            </p>
            <div className="flex flex-wrap gap-3">
              {['10+ Years', 'Swift Expert', 'iOS Native', 'SwiftUI'].map((badge) => (
                <span
                  key={badge}
                  className="px-4 py-2 bg-slate-800/50 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="space-y-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-slate-100 font-semibold text-lg mb-1">
                        {item.title}
                      </h3>
                      <p className="text-slate-400 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
