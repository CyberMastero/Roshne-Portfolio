import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Lightbulb, Rocket } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-teal-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-teal-500/20 rounded-full blur-xl"></div>
              <div className="relative w-full h-full bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-purple-600 to-teal-600 rounded-full flex items-center justify-center text-white text-6xl font-bold">
                  RJ
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Passionate full stack developer with hands-on experience in AI, cloud technologies, and mobile app development. 
                I love turning innovative ideas into functional, beautiful digital experiences.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                  <Code2 className="text-purple-400" size={24} />
                  <span className="text-white font-medium">Full Stack</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-teal-500/10 rounded-lg border border-teal-500/20">
                  <Lightbulb className="text-teal-400" size={24} />
                  <span className="text-white font-medium">AI/ML</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-pink-500/10 rounded-lg border border-pink-500/20">
                  <Rocket className="text-pink-400" size={24} />
                  <span className="text-white font-medium">Innovation</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};