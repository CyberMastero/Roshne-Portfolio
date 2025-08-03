import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, ArrowRight } from 'lucide-react';

export const Hero = () => {
  const [currentSubtitle, setCurrentSubtitle] = useState(0);
  const subtitles = ['Web Dev', 'AI/ML', 'Android', 'Cloud', 'Python'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitle((prev) => (prev + 1) % subtitles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4">
      <div className="text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 bg-clip-text text-transparent">
            Hi, I'm Roshne J
          </h1>
          <div className="text-2xl md:text-3xl text-gray-300 mb-4">
            Full Stack Developer & AI Enthusiast
          </div>
          <div className="h-12 flex items-center justify-center">
            <motion.span
              key={currentSubtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl font-semibold text-teal-400"
            >
              {subtitles[currentSubtitle]}
            </motion.span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(139, 82, 255, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 shadow-lg"
          >
            <Download size={20} />
            View Resume
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ zIndex: -1 }}
            />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(56, 249, 215, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="group relative overflow-hidden border-2 border-teal-400 text-teal-400 hover:text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-colors duration-300"
          >
            Let's Connect
            <ArrowRight size={20} />
            <motion.div
              className="absolute inset-0 bg-teal-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
              style={{ zIndex: -1 }}
            />
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-teal-400"
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};