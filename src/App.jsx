import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import About from './About';
import Service from './Service';
import Skills from './Skills'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Footer from './Footer'
import './index.css'; // Ensure your global CSS is imported

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(storedDarkMode);
    updateDarkMode(storedDarkMode);
  }, []);

  const updateDarkMode = (isDark) => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark-mode');
    }
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
    updateDarkMode(newDarkMode);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={darkMode ? 'dark' : 'light'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`min-h-screen ${darkMode ? 'dark' : ''}`}
      >
        
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <About />
        <Service />
        <Skills />
        <Portfolio /> 
        <Contact />
        <Footer />
        <main>
          <motion.section 
            className="py-8 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.h2 
              className="text-2xl font-bold text-gray-900 dark:text-gray-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {/* Your content */}
            </motion.h2>
            <motion.p 
              className="mt-4 text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {/* Your content */}
            </motion.p>
          </motion.section>
          {/* Add more sections as needed */}
        </main>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
