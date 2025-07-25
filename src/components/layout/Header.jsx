import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Code, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = ({ handleSocialClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Projects', 'Experience', 'Achievements', 'Contact'];

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);
  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-sm border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.a
            href="#hero"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            className="text-xl font-bold font-poppins"
          >
            DM
          </motion.a>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={() => handleSocialClick('github')}>
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => handleSocialClick('linkedin')}>
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => handleSocialClick('leetcode')}>
              <Code className="h-5 w-5" />
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={handleMenuToggle}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-sm pb-4"
        >
          <nav className="flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                onClick={handleLinkClick}
              >
                {item}
              </a>
            ))}
            <div className="flex space-x-4 pt-4">
              <Button variant="ghost" size="icon" onClick={() => handleSocialClick('github')}>
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => handleSocialClick('linkedin')}>
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => handleSocialClick('leetcode')}>
                <Code className="h-5 w-5" />
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;