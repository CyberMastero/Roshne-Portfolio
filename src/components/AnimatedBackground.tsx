import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Smartphone, Brain, Server } from 'lucide-react';

const FloatingIcon = ({ icon: Icon, delay = 0, duration = 20, x = 0, y = 0 }) => (
  <motion.div
    className="absolute text-purple-500/20"
    initial={{ x, y, rotate: 0 }}
    animate={{
      x: [x, x + 100, x - 50, x],
      y: [y, y - 80, y + 60, y],
      rotate: [0, 180, 360],
    }}
    transition={{
      duration,
      repeat: Infinity,
      delay,
      ease: "linear"
    }}
  >
    <Icon size={24} />
  </motion.div>
);

export const AnimatedBackground = () => {
  const icons = [
    { icon: Code, x: 100, y: 200, delay: 0, duration: 25 },
    { icon: Database, x: 800, y: 150, delay: 3, duration: 30 },
    { icon: Cloud, x: 600, y: 400, delay: 6, duration: 22 },
    { icon: Smartphone, x: 300, y: 500, delay: 9, duration: 28 },
    { icon: Brain, x: 900, y: 350, delay: 12, duration: 35 },
    { icon: Server, x: 150, y: 600, delay: 15, duration: 26 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl"></div>
      <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl"></div>
      
      {/* Floating tech icons */}
      {icons.map((iconProps, index) => (
        <FloatingIcon key={index} {...iconProps} />
      ))}
    </div>
  );
};