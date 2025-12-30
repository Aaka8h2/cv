import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Heart, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail,
  ArrowUp,
  Shield,
  Brain,
  Database
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Web Development', icon: Code },
    { name: 'AI/ML Solutions', icon: Brain },
    { name: 'Data Analysis', icon: Database },
    { name: 'Security Consulting', icon: Shield }
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#contact', label: 'Email' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                className="flex items-center space-x-3 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Aakash K</span>
              </motion.div>
              
              <motion.p
                className="text-gray-300 mb-6 max-w-md leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Full Stack Developer, AI/ML Engineer, Data Scientist, and Cybersecurity Specialist. 
                Building innovative solutions that make a difference in the digital world.
              </motion.p>

              {/* Services */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="font-semibold text-white mb-3">Services</h4>
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm text-gray-400">
                    <service.icon className="w-4 h-4" />
                    <span>{service.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="font-semibold text-white mb-4">Get In Touch</h4>
              <div className="space-y-3">
                <div className="text-sm text-gray-400">
                  <p>Email: aakash.k@email.com</p>
                  <p>Phone: +1 (555) 123-4567</p>
                  <p>Location: San Francisco, CA</p>
                </div>
                
                {/* Social Links */}
                <div className="flex space-x-3 pt-2">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 text-gray-400 hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              className="flex items-center space-x-2 text-sm text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <span>© {currentYear} Aakash K. Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>and lots of coffee</span>
            </motion.div>

            <motion.div
              className="flex items-center space-x-6 text-sm text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-1 hover:text-white transition-colors duration-200"
              >
                <ArrowUp className="w-4 h-4" />
                <span>Back to Top</span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;