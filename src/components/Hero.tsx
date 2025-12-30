import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Github, Linkedin, Mail, Code, Shield, Brain, Database } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'Full Stack Developer',
    'AI/ML Engineer',
    'Data Scientist',
    'Cybersecurity Specialist'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Image */}
          <motion.div
            className="relative mb-8"
            variants={itemVariants}
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
                <Code className="w-16 h-16 text-white" />
              </div>
            </div>
            <motion.div
              className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-3 h-3 bg-white rounded-full" />
            </motion.div>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Aakash K
            </span>
          </motion.h1>

          {/* Dynamic Role */}
          <motion.div
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 h-8"
            variants={itemVariants}
          >
            <motion.span
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              {roles[currentRole]}
            </motion.span>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Passionate about creating innovative solutions through code, leveraging AI for intelligent systems, 
            analyzing complex data patterns, and securing digital infrastructures. Building the future, one line of code at a time.
          </motion.p>

          {/* Skills Icons */}
          <motion.div
            className="flex justify-center items-center space-x-8 mb-10"
            variants={itemVariants}
          >
            {[
              { icon: Code, label: 'Development', color: 'text-blue-500' },
              { icon: Brain, label: 'AI/ML', color: 'text-purple-500' },
              { icon: Database, label: 'Data Science', color: 'text-green-500' },
              { icon: Shield, label: 'Security', color: 'text-red-500' },
            ].map((skill, index) => (
              <motion.div
                key={skill.label}
                className="flex flex-col items-center group cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-2 group-hover:bg-white dark:group-hover:bg-gray-700 transition-all duration-300 shadow-lg`}>
                  <skill.icon className={`w-6 h-6 ${skill.color}`} />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                  {skill.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            variants={itemVariants}
          >
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </motion.button>
            
            <div className="flex space-x-4">
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Mail, href: '#contact', label: 'Email' },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="p-3 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            onClick={scrollToAbout}
            className="animate-bounce text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;