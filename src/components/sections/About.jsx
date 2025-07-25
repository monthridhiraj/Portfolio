import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import ScrollReveal from '@/components/ScrollReveal';

const About = () => {
  const skills = [
    'C', 'Python', 'Java', 'JavaScript', 'HTML', 'CSS', 'MongoDB', 'SQL', 
    'React.js', 'Node.js', 'Generative AI', 'PyTorch', 'BiLSTM', 'NLTK', 'Scikit-learn'
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-poppins">About Me</h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal delay={200}>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Software Engineer in the making, driven by a passion for building full-stack applications and AI-powered systems. Experienced in real-world projects spanning web development, NLP, and Generative AI. I’m a disciplined learner, critical thinker, and contributor to tech communities through clubs and academic events.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="relative">
              <img 
                alt="Dhiraj Monthri in a professional setting"
                className="w-full h-auto rounded-2xl shadow-2xl"
               src="https://storage.googleapis.com/hostinger-horizons-assets-prod/ebeac311-a225-48fd-a496-e53c6fb26cbe/e1dff2eb9235d25ad59b45e522ad1f27.jpg" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent rounded-2xl"></div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={600}>
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center font-poppins">Technical Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Badge variant="secondary" className="text-sm py-2 px-4">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;