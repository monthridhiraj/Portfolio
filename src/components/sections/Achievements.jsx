
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Shield, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ScrollReveal from '@/components/ScrollReveal';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: 'NPTEL – The Joy of Computing using Python',
      date: 'Apr 2024',
      icon: <Award className="h-6 w-6" />
    },
    {
      id: 2,
      title: 'Infosys Springboard – Software Engineering & Agile',
      date: 'Aug 2024',
      icon: <Star className="h-6 w-6" />
    },
    {
      id: 3,
      title: 'NCC B-Certificate Holder',
      date: '',
      icon: <Shield className="h-6 w-6" />
    },
    {
      id: 4,
      title: 'Captain, School Football Team',
      date: 'U13 Champions, U15 Runners-Up',
      icon: <Trophy className="h-6 w-6" />
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-poppins">Achievements</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Recognition and certifications that highlight my professional growth.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <ScrollReveal key={achievement.id} delay={index * 150}>
              <motion.div whileHover={{ y: -5 }} className="h-full">
                <Card className="project-card h-full text-center">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4">
                      {achievement.icon}
                    </div>
                    <CardTitle className="text-lg">{achievement.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{achievement.date}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
