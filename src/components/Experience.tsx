import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const ExperienceCard = ({ experience, index, isLeft }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.3 }}
      viewport={{ once: true }}
      className={`flex ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-12`}
    >
      <div className="flex-1">
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-teal-500 rounded-lg mr-4">
              <Briefcase className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{experience.title}</h3>
              <p className="text-teal-400 font-medium">{experience.company}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 mb-4 text-gray-400">
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span className="text-sm">{experience.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={16} />
              <span className="text-sm">{experience.location}</span>
            </div>
          </div>
          
          <p className="text-gray-300 leading-relaxed mb-4">{experience.description}</p>
          
          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill, i) => (
              <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm text-purple-300 border border-white/20">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="hidden md:flex w-24 justify-center">
        <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full border-4 border-[#0f0f2d]"></div>
      </div>
    </motion.div>
  );
};

export const Experience = () => {
  const experiences = [
    {
      title: 'AI Intern',
      company: 'Arttifai Tech',
      duration: '2024',
      location: 'Remote',
      description: 'Developed AI-powered solutions and worked on machine learning models for various client projects. Gained hands-on experience with neural networks and data processing.',
      skills: ['Python', 'TensorFlow', 'Machine Learning', 'Data Analysis', 'AI Models']
    },
    {
      title: 'Full Stack Intern',
      company: 'Skolar Solutions',
      duration: '2023',
      location: 'Hybrid',
      description: 'Built responsive web applications using modern frameworks and contributed to both frontend and backend development. Collaborated with senior developers on production projects.',
      skills: ['React', 'Node.js', 'JavaScript', 'REST APIs', 'Database Design']
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
            Experience Timeline
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-teal-500 mx-auto"></div>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-teal-500 rounded-full"></div>
          
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={index} 
              experience={experience} 
              index={index} 
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};