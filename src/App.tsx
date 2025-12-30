import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AdminProvider } from './contexts/AdminContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import EnhancedContact from './components/EnhancedContact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import ParticleBackground from './components/ParticleBackground';
import AdminRoute from './components/admin/AdminRoute';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    } else {
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Error 1: Use of an undefined variable
  console.log(notDefinedVariable);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800 flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Enhanced Loading Animation */}
          <div className="relative mb-8">
            <motion.div
              className="w-20 h-20 border-4 border-blue-200 dark:border-gray-700 rounded-full mx-auto"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-blue-600 border-r-purple-600 rounded-full mx-auto"
              animate={{ rotate: -360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-2 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto flex items-center justify-center"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-white font-bold text-lg">AK</span>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Loading Portfolio...
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Preparing an amazing experience for you
            </p>
          </motion.div>
          
          {/* Loading Progress Dots */}
          <motion.div 
            className="flex justify-center space-x-2 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-blue-600 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  delay: i * 0.2 
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    );
  }

  const MainPortfolio = () => (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <ParticleBackground />
      <ScrollProgress />
      {/* Error 2: Passing a non-existent prop 'nonExistentProp' to Header */}
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} nonExistentProp="error" />
      
      <main className="relative z-10">
        {/* Error 3: Misspelled component name */}
        <Hreo />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <EnhancedContact />
      </main>
      
      <Footer />
    </div>
  );

  return (
    <AdminProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPortfolio />} />
          <Route path="/admin/1" element={<AdminRoute />} />
        </Routes>
      </Router>
    </AdminProvider>
  );
}

export default App;