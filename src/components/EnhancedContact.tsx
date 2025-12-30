import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Twitter,
  MessageCircle,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  Sparkles
} from 'lucide-react';
import { useAdmin } from '../contexts/AdminContext';

const EnhancedContact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const { addMessage } = useAdmin();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      // Add message to admin panel
      addMessage({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      });

      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'aakash.k@email.com',
      href: 'mailto:aakash.k@email.com',
      color: 'from-blue-500 to-cyan-500',
      description: 'Send me an email anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
      color: 'from-green-500 to-emerald-500',
      description: 'Call for urgent matters'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      href: '#',
      color: 'from-purple-500 to-pink-500',
      description: 'Available for local meetings'
    },
    {
      icon: Calendar,
      title: 'Availability',
      value: 'Available for new projects',
      href: '#',
      color: 'from-orange-500 to-red-500',
      description: 'Ready to start immediately'
    }
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub', color: 'hover:bg-gray-800' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-blue-400' },
    { icon: MessageCircle, href: '#', label: 'Discord', color: 'hover:bg-indigo-600' }
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
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800 relative overflow-hidden">
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, 50, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Enhanced Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 px-4 py-2 rounded-full mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Let's Connect</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Enhanced Contact Info */}
            <motion.div className="space-y-8" variants={itemVariants}>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Let's Start a Conversation
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                  I'm always excited to hear about new opportunities and innovative projects. 
                  Whether you're looking to build something from scratch or enhance an existing solution, 
                  I'd love to be part of your journey.
                </p>
              </div>

              {/* Enhanced Contact Info Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    className="group p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-2xl border border-white/20 dark:border-gray-700/50"
                    whileHover={{ scale: 1.05, y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center shadow-lg`}>
                        <info.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 mb-1">
                          {info.title}
                        </h4>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          {info.value}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Enhanced Social Links */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Connect on Social Media
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className={`w-14 h-14 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl ${social.color}`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Enhanced Availability Status */}
              <motion.div
                className="p-8 bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-2xl shadow-lg border border-green-200/50 dark:border-gray-600/50"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="relative">
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 w-4 h-4 bg-green-500 rounded-full animate-ping opacity-75"></div>
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                    Available for New Projects
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm currently accepting new projects and collaborations. 
                  Let's discuss how we can work together to bring your vision to life!
                </p>
              </motion.div>
            </motion.div>

            {/* Enhanced Contact Form */}
            <motion.div 
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/50" 
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Send Me a Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                      placeholder="Your full name"
                    />
                  </motion.div>
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                </div>

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                    placeholder="What's this about?"
                  />
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none backdrop-blur-sm"
                    placeholder="Tell me about your project, ideas, or how we can collaborate..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 disabled:opacity-50 transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center space-x-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                      <Sparkles className="w-4 h-4" />
                    </>
                  )}
                </motion.button>

                {/* Enhanced Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-700 text-green-800 dark:text-green-200 rounded-xl flex items-center space-x-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <div>
                      <p className="font-semibold">Message sent successfully!</p>
                      <p className="text-sm">I'll get back to you within 24 hours.</p>
                    </div>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-700 text-red-800 dark:text-red-200 rounded-xl flex items-center space-x-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                    <div>
                      <p className="font-semibold">Failed to send message</p>
                      <p className="text-sm">Please try again or contact me directly.</p>
                    </div>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedContact;