import React from 'react';
import { motion } from 'framer-motion';
import { Building, Code, BrainCircuit, Gamepad2, Bot, FileText } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Viswam AI',
      position: 'AI Developer Intern',
      description: 'Developed and deployed intelligent AI agents using LLM pipelines. Worked on prompt engineering, fine-tuning, and backend integration for real-time use cases. Contributed to scalable AI workflows and helped optimize model inference processes.',
      logo: <BrainCircuit />,
      emoji: '🤖'
    },
    {
      id: 2,
      company: 'Personal Project',
      position: 'Image Recognition Bot',
      description: 'Built using Google Generative AI and Python. Achieved 90% object classification accuracy and reduced inference latency by 30%.',
      logo: <Bot />,
      emoji: '📸'
    },
    {
      id: 3,
      company: 'Personal Project',
      position: 'Game Store App',
      description: 'Full-stack eCommerce platform built with React.js, Node.js, and MongoDB. Implemented secure authentication and responsive, user-friendly UI with cart management.',
      logo: <Gamepad2 />,
      emoji: '🎮'
    },
    {
      id: 4,
      company: 'Personal Project',
      position: 'Automated Essay Scoring System',
      description: 'Designed with BiLSTM and NLP tools like NLTK and Scikit-learn. Automatically evaluated essay content and generated detailed feedback reports.',
      logo: <FileText />,
      emoji: '📝'
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-poppins">Experience & Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My journey through various roles and key projects that shaped my expertise.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ScrollReveal key={exp.id} delay={index * 200}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="experience-card rounded-2xl p-8"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl">
                      {exp.logo}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
                      <span>{exp.emoji}</span> {exp.position}
                    </h3>
                    <div className="flex items-center text-muted-foreground mb-3">
                      <Building className="h-4 w-4 mr-2" />
                      {exp.company}
                    </div>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;