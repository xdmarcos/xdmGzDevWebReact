import React from 'react';
import { Card, CardContent } from './ui/card';
import { Code2, Smartphone, Layers, CheckCircle2, Award, Zap, Target, Sparkles } from 'lucide-react';

const About = ({ translations, personalInfo, language }) => {
  // Icon mapping for dynamic rendering
  const iconMap = {
    Code2,
    Smartphone,
    Layers,
    CheckCircle2,
    Award,
    Zap,
    Target,
    Sparkles
  };

  // Get highlights from personalInfo or use defaults
  const highlights = personalInfo?.highlights || [
    {
      icon: "Code2",
      title: "Clean Code",
      titleEs: "Código Limpio",
      description: "Writing maintainable, testable, and scalable code",
      descriptionEs: "Escribiendo código mantenible, testeable y escalable"
    },
    {
      icon: "Smartphone",
      title: "Native iOS",
      titleEs: "iOS Nativo",
      description: "Deep expertise in Swift and iOS frameworks",
      descriptionEs: "Experiencia profunda en Swift y frameworks de iOS"
    },
    {
      icon: "Layers",
      title: "Architecture",
      titleEs: "Arquitectura",
      description: "MVVM, Clean Architecture, and design patterns",
      descriptionEs: "MVVM, Arquitectura Limpia y patrones de diseño"
    },
    {
      icon: "CheckCircle2",
      title: "Code Quality",
      titleEs: "Calidad de Código",
      description: "Unit Testing, UI Test, Screenshot testing, Integration Tests and more",
      descriptionEs: "Pruebas Unitarias, Pruebas de UI, Pruebas de Captura, Pruebas de Integración y más"
    }
  ];

  // Get cloud tags from personalInfo or use defaults
  const cloudTags = language === 'es' && personalInfo?.cloudTagsEs 
    ? personalInfo.cloudTagsEs 
    : (personalInfo?.cloudTags || ['10+ Years', 'Swift Expert', 'iOS Native', 'SwiftUI']);

  // Get about content based on language
  const aboutContent = language === 'es' && personalInfo?.aboutContentEs 
    ? personalInfo.aboutContentEs 
    : personalInfo?.aboutContent || translations.about.content;

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
            <p className="text-slate-300 text-lg leading-relaxed text-justify">
              {aboutContent}
            </p>
            {/* Cloud Tags */}
            <div className="flex flex-wrap gap-3">
              {cloudTags.map((badge) => (
                <span
                  key={badge}
                  className="px-4 py-2 bg-slate-800/50 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium hover:bg-slate-800 hover:border-cyan-500/50 transition-all duration-300"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="space-y-4">
            {highlights.map((item, index) => {
              const Icon = iconMap[item.icon] || Code2; // Fallback to Code2 if icon not found
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
