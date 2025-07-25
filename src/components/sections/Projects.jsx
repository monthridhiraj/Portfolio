
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ScrollReveal from '@/components/ScrollReveal';

const Projects = ({ handleSocialClick }) => {
  const projects = [
    {
      id: 1,
      title: 'Image Recognition Bot',
      description: 'Generative AI-powered object detector.',
      tech: ['Generative AI', 'Python', 'Google AI'],
      featured: true
    },
    {
      id: 2,
      title: 'Game Store',
      description: 'Full-stack React + Node.js eCommerce platform.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      featured: false
    },
    {
      id: 3,
      title: 'Automated Essay Scoring',
      description: 'BiLSTM + NLP model for scoring student essays.',
      tech: ['BiLSTM', 'NLP', 'NLTK', 'Scikit-learn'],
      featured: false
    }
  ];

  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-poppins">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and creative solutions.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8">
          {featuredProject && (
            <ScrollReveal delay={300}>
              <Card className="project-card overflow-hidden md:col-span-2 lg:col-span-3">
                <div className="grid md:grid-cols-2 items-center">
                  <div className="relative h-64 md:h-full">
                    <img 
                      alt="Featured project showcase"
                      className="w-full h-full object-cover"
                     src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-8">
                    <Badge className="mb-3">Featured Project</Badge>
                    <h3 className="text-2xl font-bold text-white mb-2">{featuredProject.title}</h3>
                    <p className="text-gray-300 mb-4">{featuredProject.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {featuredProject.tech.map(tech => (
                        <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                      ))}
                    </div>
                    <div className="flex space-x-3">
                      <Button size="sm" onClick={() => handleSocialClick('github')}>
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          )}

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {otherProjects.map((project, index) => (
              <ScrollReveal key={project.id} delay={400 + index * 100}>
                <Card className="project-card overflow-hidden h-full flex flex-col">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(tech => (
                        <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button variant="outline" size="sm" onClick={() => handleSocialClick('github')}>
                      <Github className="h-4 w-4 mr-2" />
                      View on GitHub
                    </Button>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
        
        <ScrollReveal delay={600}>
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold mb-6 font-poppins">Find Me On</h3>
            <div className="flex justify-center flex-wrap gap-4">
              <Button onClick={() => handleSocialClick('github')}><Github className="mr-2 h-4 w-4" /> GitHub</Button>
              <Button onClick={() => handleSocialClick('codechef')}><Code className="mr-2 h-4 w-4" /> CodeChef</Button>
              <Button onClick={() => handleSocialClick('geeksforgeeks')}><Code className="mr-2 h-4 w-4" /> GeeksforGeeks</Button>
              <Button onClick={() => handleSocialClick('leetcode')}><Code className="mr-2 h-4 w-4" /> LeetCode</Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;
