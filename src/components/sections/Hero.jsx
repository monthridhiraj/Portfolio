import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Hero = ({ handleSocialClick }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center gradient-bg overflow-hidden">
      <div className="container mx-auto px-4 py-20 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight font-poppins"
          >
            Dhiraj <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">Monthri</span>
          </motion.h1>
          <motion.h2
            variants={itemVariants}
            className="mt-4 text-lg md:text-xl lg:text-2xl font-light text-muted-foreground"
          >
            Aspiring Software Engineer | Full-Stack Developer | AI Enthusiast | Generative AI Explorer | AI Agents
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-6 text-md md:text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            “Crafting intelligent systems & real-world apps, empowering peers through hands-on tech projects and impactful learning.”
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center"
          >
            <Button size="lg" asChild>
              <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Get In Touch
              </motion.a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <motion.a href="#projects" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                View My Work
              </motion.a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;