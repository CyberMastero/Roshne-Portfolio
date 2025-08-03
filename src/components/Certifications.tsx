import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const CertificationCard = ({ cert, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -90 }}
      whileInView={{ opacity: 1, rotateY: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        boxShadow: '0 25px 50px rgba(139, 82, 255, 0.3)'
      }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-teal-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
      <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 bg-gradient-to-r from-purple-500 to-teal-500 rounded-lg">
            <Award className="text-white" size={24} />
          </div>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="text-teal-400 hover:text-teal-300 transition-colors"
          >
            <ExternalLink size={20} />
          </motion.button>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
        <p className="text-teal-400 font-medium mb-2">{cert.issuer}</p>
        <p className="text-gray-400 text-sm mb-4">{cert.date}</p>
        <p className="text-gray-300 leading-relaxed">{cert.description}</p>
        
        <div className="mt-6 flex flex-wrap gap-2">
          {cert.skills.map((skill, i) => (
            <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm text-purple-300 border border-white/20">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const Certifications = () => {
  const certifications = [
    {
      title: 'IBM Data Analysis (AI Track)',
      issuer: 'IBM',
      date: '2024',
      description: 'Comprehensive certification covering data analysis, machine learning, and AI implementation using IBM tools and methodologies.',
      skills: ['Data Analysis', 'Machine Learning', 'Python', 'AI/ML', 'IBM Watson']
    },
    {
      title: 'AWS Fundamentals',
      issuer: 'Amazon Web Services (Coursera)',
      date: '2023',
      description: 'Foundational knowledge of AWS cloud services, architecture, and best practices for scalable cloud solutions.',
      skills: ['AWS', 'Cloud Computing', 'EC2', 'S3', 'Lambda']
    },
    {
      title: 'Java Programming',
      issuer: 'IIT Bombay',
      date: '2023',
      description: 'Advanced Java programming concepts including object-oriented programming, data structures, and application development.',
      skills: ['Java', 'OOP', 'Data Structures', 'Algorithms', 'Spring']
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-teal-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};