
import React from 'react';
import { Github, Linkedin, Code } from 'lucide-react';

const Footer = ({ handleSocialClick }) => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold font-poppins">Dhiraj Monthri</span>
            <p className="text-muted-foreground mt-2">
              Aspiring Software Engineer | Full-Stack Developer | AI Enthusiast
            </p>
          </div>
          
          <div className="flex space-x-6">
            <button
              onClick={() => handleSocialClick('github')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </button>
            <button
              onClick={() => handleSocialClick('linkedin')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </button>
            <button
              onClick={() => handleSocialClick('leetcode')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Code className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Dhiraj Monthri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
