import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Target, Users, Lightbulb } from 'lucide-react';
import ProfileImageUpload from './ProfileImageUpload';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [profileImage, setProfileImage] = useState('https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=600');

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: Award },
    { number: '3+', label: 'Years Experience', icon: Target },
    { number: '20+', label: 'Happy Clients', icon: Users },
    { number: '100+', label: 'Problems Solved', icon: Lightbulb },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Passionate technologist with expertise across multiple domains
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div className="space-y-6" variants={itemVariants}>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Hello! I'm Aakash K, a passionate full-stack developer and technology enthusiast with a deep love for creating innovative solutions. My journey in technology spans across multiple disciplines, from building scalable web applications to developing intelligent AI systems.
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  With expertise in <strong>full-stack development</strong>, I create end-to-end solutions using modern technologies. My passion for <strong>artificial intelligence and machine learning</strong> drives me to build intelligent systems that solve real-world problems.
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  As a <strong>data scientist</strong>, I transform complex data into actionable insights, and my background in <strong>cybersecurity</strong> ensures that every solution I build is secure and robust. I believe in continuous learning and staying at the forefront of technological advancement.
                </p>
              </div>

              {/* Skills Progress */}
              <div className="space-y-4">
                {[
                  { skill: 'Full Stack Development', percentage: 95 },
                  { skill: 'AI/Machine Learning', percentage: 88 },
                  { skill: 'Data Science', percentage: 90 },
                  { skill: 'Cybersecurity', percentage: 85 },
                ].map((item, index) => (
                  <motion.div
                    key={item.skill}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {item.skill}
                      </span>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {item.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${item.percentage}%` } : { width: 0 }}
                        transition={{ duration: 1.5, delay: 1 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Image & Stats */}
            <motion.div className="space-y-8" variants={itemVariants}>
              {/* Profile Image */}
              <div className="relative">
                <ProfileImageUpload
                  currentImage={profileImage}
                  onImageChange={setProfileImage}
                  className="w-full max-w-md mx-auto"
                />
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className="text-white text-xs font-bold">AI</span>
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center shadow-lg"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                >
                  <span className="text-white text-xs font-bold">SEC</span>
                </motion.div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-lg shadow-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;