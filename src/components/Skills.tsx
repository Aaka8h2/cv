import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Brain, 
  Database, 
  Shield, 
  Laptop, 
  Cloud, 
  GitBranch, 
  Smartphone,
  Globe,
  Lock,
  BarChart3,
  Cpu
} from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js', 'Angular']
    },
    {
      title: 'Backend Development',
      icon: Laptop,
      color: 'from-green-500 to-emerald-500',
      skills: ['Node.js', 'Python', 'Express', 'Django', 'FastAPI', 'PostgreSQL']
    },
    {
      title: 'AI/Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'NLP', 'Computer Vision']
    },
    {
      title: 'Data Science',
      icon: BarChart3,
      color: 'from-orange-500 to-red-500',
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter', 'Apache Spark']
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-rose-500',
      skills: ['Penetration Testing', 'OWASP', 'Cryptography', 'Network Security', 'Ethical Hacking', 'Security Auditing']
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-indigo-500 to-blue-500',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Jenkins']
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'from-teal-500 to-cyan-500',
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo', 'Progressive Web Apps']
    },
    {
      title: 'Database & Systems',
      icon: Database,
      color: 'from-violet-500 to-purple-500',
      skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Elasticsearch', 'GraphQL', 'System Design']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A comprehensive toolkit spanning across multiple domains of technology
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="group relative"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 h-full">
                  {/* Category Header */}
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mr-4`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.5 + index * 0.1 + skillIndex * 0.05 }}
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                        <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-200">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            className="mt-16 text-center"
            variants={itemVariants}
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Always Learning, Always Growing
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Technology evolves rapidly, and so do I. I'm constantly exploring new tools, frameworks, and methodologies to stay at the cutting edge of technology and deliver innovative solutions.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;