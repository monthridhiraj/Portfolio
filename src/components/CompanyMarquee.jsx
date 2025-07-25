import React from 'react';
import { motion } from 'framer-motion';

const CompanyMarquee = () => {
  const logos = [
    'Viswam AI', 'Google Generative AI', 'React', 'Node.js', 'Python', 'MongoDB', 'PyTorch', 'NLTK', 'Scikit-learn'
  ];

  const marqueeVariants = {
    animate: {
      x: [0, -1100],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-muted-foreground uppercase tracking-widest text-sm mb-8">
          Skills
        </h3>
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex"
            variants={marqueeVariants}
            animate="animate"
          >
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 mx-8 flex items-center justify-center" style={{ minWidth: '150px' }}>
                <span className="text-xl font-semibold text-muted-foreground/70 transition-colors hover:text-foreground">
                  {logo}
                </span>
              </div>
            ))}
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default CompanyMarquee;