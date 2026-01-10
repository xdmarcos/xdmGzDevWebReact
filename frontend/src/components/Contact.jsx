import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Github, Linkedin, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = ({ translations, contactInfo, personalInfo }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get contact data from contactInfo or use defaults
  const contactTitle = contactInfo?.title || translations.contact.title;
  const contactSubtitle = contactInfo?.subtitle || translations.contact.subtitle;
  const contactServices = contactInfo?.services || translations.contact.services;
  const formEndpoint = contactInfo?.formEndpoint || process.env.REACT_APP_FORM_ENDPOINT;
  const contactEmail = contactInfo?.email || personalInfo?.email;
  const contactGithub = contactInfo?.github || personalInfo?.github;
  const contactLinkedin = contactInfo?.linkedin || personalInfo?.linkedin;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // If formEndpoint is configured, send to real endpoint
      if (formEndpoint) {
        const response = await fetch(formEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            to: personalInfo.email,
            subject: `Portfolio Contact from ${formData.name}`,
          }),
        });

        if (response.ok) {
          toast({
            title: "Message sent successfully!",
            description: "Thank you for reaching out. I'll get back to you soon.",
          });
          setFormData({ name: '', email: '', message: '' });
        } else {
          throw new Error('Failed to send message');
        }
      } else {
        // Fallback: Simulate form submission for demo/development
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', message: '' });
        
        // Log to console for development
        console.log('Form submission (demo mode):', {
          ...formData,
          to: personalInfo.email
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly at " + personalInfo.email,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'text-cyan-400'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: personalInfo.github,
      href: `https://${personalInfo.github}`,
      color: 'text-slate-300'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: personalInfo.linkedin,
      href: `https://${personalInfo.linkedin}`,
      color: 'text-blue-400'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            {contactTitle}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {contactSubtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Social Links */}
            <div className="space-y-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-slate-800/40 rounded-lg border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all">
                        <Icon className={`w-6 h-6 ${link.color}`} />
                      </div>
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">{link.label}</p>
                      <p className="text-slate-200 font-medium">{link.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Services */}
            <Card className="bg-slate-800/40 border-slate-700/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                  {translations.contact.help}
                </h3>
                <ul className="space-y-3">
                  {contactServices.map((service, idx) => (
                    <li key={idx} className="flex items-start text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-slate-800/40 border-slate-700/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-slate-300 font-medium mb-2">
                    {translations.contact.form.name}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="bg-slate-900/50 border-slate-600 text-slate-100 focus:border-cyan-500 focus:ring-cyan-500/50"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-slate-300 font-medium mb-2">
                    {translations.contact.form.email}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="bg-slate-900/50 border-slate-600 text-slate-100 focus:border-cyan-500 focus:ring-cyan-500/50"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-300 font-medium mb-2">
                    {translations.contact.form.message}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    rows={6}
                    className="bg-slate-900/50 border-slate-600 text-slate-100 focus:border-cyan-500 focus:ring-cyan-500/50 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium py-6 text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      {translations.contact.form.send}
                      <Send className="ml-2 w-5 h-5" />
                    </span>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500">
            © {new Date().getFullYear()} {personalInfo.name}. Built with React & SwiftUI inspiration.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
