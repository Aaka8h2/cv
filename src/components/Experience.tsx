import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Award,
  Code,
  Brain,
  Shield,
  Database,
  Users,
  Target
} from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const experiences = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'Remote',
      period: '2023 - Present',
      type: 'Full-time',
      description: 'Leading development of enterprise-scale applications with modern tech stack. Mentoring junior developers and architecting scalable solutions.',
      achievements: [
        'Increased application performance by 40% through optimization',
        'Led a team of 5 developers on critical projects',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL'],
      icon: Code,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'AI/ML Engineer',
      company: 'DataVision Labs',
      location: 'San Francisco, CA',
      period: '2022 - 2023',
      type: 'Full-time',
      description: 'Developed and deployed machine learning models for predictive analytics and computer vision applications.',
      achievements: [
        'Built ML models with 95% accuracy for image classification',
        'Deployed models serving 1M+ requests daily',
        'Reduced model training time by 50% through optimization'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Kubernetes', 'MLflow'],
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Cybersecurity Analyst',
      company: 'SecureNet Systems',
      location: 'New York, NY',
      period: '2021 - 2022',
      type: 'Full-time',
      description: 'Conducted security assessments, vulnerability testing, and incident response for enterprise clients.',
      achievements: [
        'Identified and remediated 200+ security vulnerabilities',
        'Developed automated security scanning tools',
        'Achieved 99.9% threat detection accuracy'
      ],
      technologies: ['Python', 'Nmap', 'Wireshark', 'Metasploit', 'SIEM'],
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 4,
      title: 'Data Scientist',
      company: 'Analytics Pro',
      location: 'Austin, TX',
      period: '2020 - 2021',
      type: 'Full-time',
      description: 'Analyzed large datasets to extract business insights and built predictive models for various industries.',
      achievements: [
        'Improved customer retention by 25% through predictive modeling',
        'Automated reporting processes saving 20 hours/week',
        'Presented findings to C-level executives'
      ],
      technologies: ['Python', 'R', 'Tableau', 'SQL', 'Apache Spark'],
      icon: Database,
      color: 'from-green-500 to-teal-500'
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2023',
      icon: Award
    },
    {
      name: 'Certified Ethical Hacker (CEH)',
      issuer: 'EC-Council',
      year: '2022',
      icon: Shield
    },
    {
      name: 'Google Cloud Professional ML Engineer',
      issuer: 'Google Cloud',
      year: '2022',
      icon: Brain
    },
    {
      name: 'Microsoft Azure Data Scientist',
      issuer: 'Microsoft',
      year: '2021',
      icon: Database
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
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600" />
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
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Experience & Journey
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A timeline of my professional growth and achievements
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  variants={itemVariants}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white dark:bg-gray-800 rounded-full border-4 border-indigo-500 flex items-center justify-center z-10">
                    <experience.icon className="w-4 h-4 text-indigo-500" />
                  </div>

                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}>
                    <motion.div
                      className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            {experience.title}
                          </h3>
                          <p className="text-lg text-indigo-600 dark:text-indigo-400 font-medium">
                            {experience.company}
                          </p>
                        </div>
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${experience.color} flex items-center justify-center`}>
                          <experience.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{experience.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Briefcase className="w-4 h-4" />
                          <span>{experience.type}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {experience.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-1">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400">
                              <Target className="w-3 h-3 text-indigo-500 mt-1 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-md text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <motion.div className="mt-20" variants={itemVariants}>
            <h3 className="text-3xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Certifications
              </span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <cert.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                    {cert.year}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;