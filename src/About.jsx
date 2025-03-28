import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Barnabas from './assets/barnabas.jpg';

const AboutMe = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: custom * 0.1,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  const scaleVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: (custom) => ({
      scale: 1,
      opacity: 1,
      transition: { 
        delay: custom * 0.1,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  const stats = [
    { value: "2+", label: "Years Experience", icon: "👨‍💻" },
    { value: "15+", label: "Projects Completed", icon: "🚀" },
    { value: "99%", label: "Client Satisfaction", icon: "⭐" },
    { value: "24/7", label: "Support", icon: "🔧" }
  ];

  return (
    <section 
      ref={ref}
      className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-500"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-500/10 to-purple-500/5 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-purple-500/10 to-blue-500/5 rounded-tr-full"></div>
      <div className="absolute w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-6 sm:px-8 relative">
        {/* Header */}
        <motion.div 
          className="text-center mb-20" 
          initial="hidden"
          animate={controls}
          custom={1}
          variants={fadeInVariants}
        >
          <span className="inline-block text-sm font-medium px-3 py-1 mb-3 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 text-blue-600 dark:text-blue-400">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-display mb-6">
            <span className="text-gray-900 dark:text-white">Discovering </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              My Journey
            </span>
          </h2>
          <div className="w-16 h-1 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left column - Round image showcase */}
          <motion.div
            className="lg:col-span-5 relative flex justify-center"
            initial="hidden"
            animate={controls}
            custom={2}
            variants={scaleVariants}
          >
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              {/* Multiple decorative layers - circular now */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/40 animate-spin-slow"></div>
              <div className="absolute inset-0 scale-110 rounded-full border-2 border-dashed border-purple-500/30 animate-spin-slow-reverse"></div>
              
              {/* Background gradient blur */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-xl transform scale-90"></div>
              
              {/* Main image container - ROUND VERSION */}
              <div className="relative w-full h-full bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full p-1 shadow-xl">
                <div className="w-full h-full bg-white dark:bg-gray-800 rounded-full p-2 overflow-hidden">
                  <img
                    src={Barnabas}
                    alt="Barnabas Oyewole"
                    className="w-full h-full object-cover object-center rounded-full"
                  />
                </div>
              </div>
              
              {/* Floating badge elements */}
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2 rounded-full shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                custom={5}
                variants={fadeInVariants}
              >
                <span className="bg-blue-500 w-3 h-3 rounded-full"></span>
                Developer
              </motion.div>
              
              <motion.div 
                className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2 rounded-full shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-2"
                initial={{ opacity: 0, y: -20 }}
                animate={controls}
                custom={6}
                variants={fadeInVariants}
              >
                <span className="bg-purple-500 w-3 h-3 rounded-full"></span>
                Software
              </motion.div>
            </div>
          </motion.div>

          {/* Right column - Content */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial="hidden"
              animate={controls}
              custom={3}
              variants={fadeInVariants}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 font-medium">
                <div className="h-px w-6 bg-gray-400 dark:bg-gray-600"></div>
                <span>DISCOVER MY STORY</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-display leading-tight">
                Hello, I'm{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Barnabas Oyewole
                </span>
              </h3>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                A seasoned{" "}
                <span className="inline-block px-2 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded font-medium transform rotate-1 mx-1">
                  Software Developer
                </span>{" "}
                with a robust two-year track record, dedicated to delivering impactful IT solutions to businesses through intuitive web interfaces.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                My expertise spans a wide array of IT frameworks, complemented by a deep understanding of web development principles. This comprehensive skill set enables me to not only provide effective solutions but also offer valuable guidance and tutoring in the field of web development.
              </p>
            </motion.div>
            
            {/* Stats section */}
            <motion.div
              initial="hidden"
              animate={controls}
              custom={4}
              variants={fadeInVariants}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="relative p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 group hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="text-3xl mb-1">{stat.icon}</div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
            
            {/* Call to action */}
            <motion.div
              initial="hidden"
              animate={controls}
              custom={5}
              variants={fadeInVariants}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <a
                href="https://drive.google.com/file/d/1lErNFQ_ciHc1k4p9DSiDEjxbcx--KrUA/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-8 py-4 group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative flex items-center justify-center gap-3 text-white font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L10 12.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 13.586V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Download Resume
                </div>
              </a>
              
              <a
                href="#contact"
                className="relative px-8 py-4 group"
              >
                <div className="absolute inset-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative flex items-center justify-center gap-3 text-gray-900 dark:text-white font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Contact Me
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;