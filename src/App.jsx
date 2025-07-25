import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';

import ParticleBackground from '@/components/ParticleBackground';
import ThemeToggle from '@/components/ThemeToggle';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import CompanyMarquee from '@/components/CompanyMarquee';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Achievements from '@/components/sections/Achievements';
import Contact from '@/components/sections/Contact';

function App() {
  const { toast } = useToast();

  const handleContactSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you shortly.",
      duration: 5000,
    });
    e.target.reset();
  };

  const handleSocialClick = (platform) => {
    const urls = {
      github: 'https://github.com/monthridhiraj',
      linkedin: 'https://www.linkedin.com',
      leetcode: 'https://leetcode.com',
      codechef: 'https://www.codechef.com',
      geeksforgeeks: 'https://www.geeksforgeeks.org',
    };

    if (urls[platform]) {
      window.open(urls[platform], '_blank', 'noopener,noreferrer');
    } else {
      toast({
        title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
        duration: 3000,
      });
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  return (
    <>
      <Helmet>
        <title>Dhiraj Monthri - Aspiring Software Engineer</title>
        <meta name="description" content="Portfolio of Dhiraj Monthri, an aspiring Software Engineer specializing in Full-Stack Development and AI." />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <ScrollProgressBar />
        <ParticleBackground />
        <ThemeToggle />
        <Toaster />

        <Header handleSocialClick={handleSocialClick} />
        
        <main>
          <Hero handleSocialClick={handleSocialClick} />
          <CompanyMarquee />
          <About />
          <Projects handleSocialClick={handleSocialClick} />
          <Experience />
          <Achievements />
          <Contact handleContactSubmit={handleContactSubmit} />
        </main>

        <Footer handleSocialClick={handleSocialClick} />
      </div>
    </>
  );
}

export default App;