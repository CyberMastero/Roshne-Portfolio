import React from 'react';
import { motion } from 'framer-motion';

const SkillBubble = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.1, 
        rotateY: 360,
        boxShadow: `0 20px 40px ${skill.color}40`
      }}
      className="group relative"
    >
      <div 
        className="absolute inset-0 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: `${skill.color}40` }}
      ></div>
      <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 text-center">
        <div 
          className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl font-bold text-white"
          style={{ backgroundColor: skill.color }}
        >
          {skill.icon}
        </div>
        <h3 className="text-white font-semibold mb-2">{skill.name}</h3>
        <div className="w-full bg-white/10 rounded-full h-2">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ duration: 1, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="h-2 rounded-full"
            style={{ backgroundColor: skill.color }}
          ></motion.div>
        </div>
        <span className="text-xs text-gray-400 mt-2 block">{skill.level}%</span>
      </div>
    </motion.div>
  );
};

export const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML/CSS', icon: 'H', color: '#e34c26', level: 95 },
        { name: 'JavaScript', icon: 'JS', color: '#f7df1e', level: 90 },
        { name: 'React', icon: 'R', color: '#61dafb', level: 88 },
        { name: 'Tailwind', icon: 'T', color: '#06b6d4', level: 85 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Python', icon: 'P', color: '#3776ab', level: 92 },
        { name: 'Java', icon: 'J', color: '#ed8b00', level: 85 },
        { name: 'Flask', icon: 'F', color: '#000000', level: 80 },
        { name: 'Node.js', icon: 'N', color: '#68a063', level: 75 },
      ]
    },
    {
      title: 'Cloud & Database',
      skills: [
        { name: 'AWS', icon: 'A', color: '#ff9900', level: 80 },
        { name: 'Firebase', icon: 'F', color: '#ffca28', level: 85 },
        { name: 'MySQL', icon: 'M', color: '#4479a1', level: 88 },
        { name: 'MongoDB', icon: 'M', color: '#47a248', level: 82 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-teal-500 mx-auto"></div>
        </motion.div>

        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white mb-8 text-center"
            >
              {category.title}
            </motion.h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {category.skills.map((skill, index) => (
                <SkillBubble key={index} skill={skill} index={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};