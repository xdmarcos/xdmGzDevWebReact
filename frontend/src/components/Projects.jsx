import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink, Code } from 'lucide-react';

const Projects = ({ translations, projects, language }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            {translations.projects.title}
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            {translations.projects.subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const description = language === 'es' && project.descriptionEs ? project.descriptionEs : project.description;
            const features = language === 'es' && project.featuresEs ? project.featuresEs : project.features;
            const metrics = language === 'es' && project.metricsEs ? project.metricsEs : project.metrics;
            
            return (
              <Card
                key={project.id}
                className="bg-slate-800/40 border-slate-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer overflow-hidden group"
                onClick={() => setSelectedProject({...project, description, features, metrics})}
              >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {project.title}
                  </h3>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                {/* Description */}
                <p className="text-slate-400 text-sm line-clamp-3">
                  {description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-slate-700/50 text-cyan-400 hover:bg-slate-700 border-slate-600"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge
                      variant="secondary"
                      className="bg-slate-700/50 text-slate-400 border-slate-600"
                    >
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Metrics with Link */}
                <div className="flex items-center justify-between pt-2">
                  <span className="text-cyan-400 text-sm font-medium">
                    {metrics}
                  </span>
                  {project.projectUrl && (
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 hover:text-cyan-300 transition-all duration-300 hover:scale-110"
                      title="View on App Store"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
            );
          })}
        </div>

        {/* Project Modal/Expanded View */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-slate-900 border border-slate-700 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header with Image */}
              <div className="relative h-64 md:h-80 overflow-hidden rounded-t-xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-slate-900/80 hover:bg-slate-800 rounded-full flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                >
                  ×
                </button>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold text-slate-100 mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-cyan-400 mb-3">
                    {translations.projects.features}
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-slate-300">
                        <Code className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-cyan-400 mb-3">
                    {translations.projects.technologies}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-slate-800 text-cyan-400 hover:bg-slate-700 border border-slate-600 px-4 py-2 text-sm"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="flex items-center text-cyan-400 font-medium">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  {selectedProject.metrics}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
