import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Brain, Smartphone, Flower, CreditCard } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const iconMap = {
    brain: Brain,
    smartphone: Smartphone,
    flower: Flower,
    creditCard: CreditCard,
  };
  const Icon = iconMap[project.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, rotateX: 5 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-teal-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
      <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-gradient-to-r from-purple-500 to-teal-500 rounded-lg mr-4">
            <Icon className="text-white" size={24} />
          </div>
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
        </div>
        
        <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, i) => (
            <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm text-teal-300 border border-white/20">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium"
          >
            <Github size={18} />
            GitHub
          </motion.button>
          {project.demo && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white rounded-lg font-medium transition-colors duration-300"
            >
              <ExternalLink size={18} />
              Live Demo
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const projects = [
    {
      title: 'SmartHire – AI Resume Scanner',
      description: 'Intelligent resume scanning system using AI to match candidates with job requirements. Features automated scoring and recommendation engine.',
      tech: ['Python', 'Flask', 'AI/ML', 'NLP'],
      icon: 'brain',
      demo: true
    },
    {
      title: 'Addiction Recovery App',
      description: 'Mobile application built with Firebase and Android Studio to help users track recovery progress and connect with support groups.',
      tech: ['Android Studio', 'Firebase', 'Java', 'Real-time DB'],
      icon: 'smartphone',
      demo: false
    },
    {
      title: 'Iris Flower Classifier',
      description: 'Machine learning model for classifying iris flowers with interactive Streamlit web interface for real-time predictions.',
      tech: ['Python', 'Scikit-learn', 'Streamlit', 'Pandas'],
      icon: 'flower',
      demo: true
    },
    {
      title: 'PayPal Web Clone',
      description: 'Full-stack web application replicating PayPal\'s core functionality with secure payment processing and user authentication.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      icon: 'creditCard',
      demo: true
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-teal-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};