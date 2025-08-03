import React from 'react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0f0f2d] text-white overflow-x-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;