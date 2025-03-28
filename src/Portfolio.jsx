import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCode, 
  FaExternalLinkAlt, 
  FaGithub, 
  FaLayerGroup, 
  FaSearchPlus,
  FaTimes,
  FaFilter,
  FaBars
} from 'react-icons/fa';

// Import local images
import carImage from './assets/car.jpg';
import gymImage from './assets/gym.jpg';
import quoteImage from './assets/quote.jpg';

const projects = [
  {
    title: 'SuitsAdmin Billing System',
    subtitle: 'Business Management Platform',
    description: 'A comprehensive billing management system designed for restaurants, wholesale, and retail businesses. Integrates advanced features for seamless financial tracking and operational efficiency.',
    technologies: ['React', 'Django', 'PostgreSQL', 'Tailwind CSS', 'Framer Motion'],
    imageUrl: 'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    links: {
      live: 'https://suitsadmin.vercel.app/',
      github: {
        frontend: 'https://github.com/DominionAI-code/SuitsAdmin',
        backend: 'https://github.com/DominionAI-code/SuitsAdmin'
      }
    }
  },
  {
    title: 'Project Management System',
    subtitle: 'Team Collaboration Tool',
    description: 'An advanced project management platform enabling remote teams to manage tasks, track progress, and analyze performance with real-time updates and comprehensive data insights.',
    technologies: ['React', 'MaterialUI', 'Django', 'PostgreSQL', 'Tailwind CSS'],
    imageUrl: 'https://i.pinimg.com/736x/a5/02/ee/a502ee949d7cf4d2efaae84189e38232.jpg',
    links: {
      live: 'https://suitsadmin.vercel.app/',
      github: {
        frontend: 'https://github.com/Courage97/PMS-Frontend',
        backend: 'https://github.com/Courage97/PMS-Backend'
      }
    }
  },
  {
    title: 'Fitness Tracker',
    subtitle: 'Personalized Workout Companion',
    description: 'A robust fitness tracking application that monitors workouts with custom and preset routines, providing comprehensive progress tracking and visual performance metrics.',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Python', 'Django'],
    imageUrl: 'https://i.pinimg.com/736x/84/a0/25/84a025ea2c201d9a58e9011e59bae333.jpg',
    links: {
      github: 'https://github.com/Courage97/workout_django'
    }
  },
  {
    title: 'Random Quote Generator',
    subtitle: 'Inspirational Insights Platform',
    description: 'An elegant web application that fetches and displays inspiring quotes from a curated API, providing users with daily motivation and creative insights.',
    technologies: ['React', 'API Integration', 'Tailwind CSS'],
    imageUrl: quoteImage,
    links: {
      live: 'https://random-quote-sigma-eight.vercel.app/'
    }
  },
  {
    title: 'Gym Website',
    subtitle: 'Fitness Destination Platform',
    description: 'A modern, responsive gym website featuring a BMI calculator, comprehensive membership plans, and professional trainer profiles to engage and inspire fitness enthusiasts.',
    technologies: ['React', 'CSS', 'JavaScript'],
    imageUrl: gymImage,
    links: {
      live: 'https://gym2-psi.vercel.app/'
    }
  },
  {
    title: 'Car Manufacturing Website',
    subtitle: 'Automotive Showcase',
    description: 'An innovative presentation website for a car manufacturing company, highlighting cutting-edge vehicle models, technological innovations, and brand design philosophy.',
    technologies: ['React', 'Tailwind CSS', 'Frontend Development'],
    imageUrl: carImage,
    links: {
      live: 'https://motors-kohl.vercel.app/'
    }
  }
];

const ComprehensivePortfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Extract unique technologies
  const technologies = useMemo(() => 
    ['All', ...new Set(projects.flatMap(p => p.technologies))], 
    []
  );

  // Advanced filtering and searching
  const filteredProjects = useMemo(() => {
    return projects.filter(project => 
      (filter === 'All' || project.technologies.includes(filter)) &&
      (searchTerm === '' || 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => 
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    );
  }, [filter, searchTerm]);

  // Memoized project selection handler
  const handleProjectSelect = useCallback((project) => {
    setSelectedProject(project);
  }, []);

  // Memoized filter handler
  const handleFilterChange = useCallback((tech) => {
    setFilter(tech);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen py-8 md:py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 mb-2 md:mb-4">
            Project Portfolio
          </h2>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4 md:px-0">
            A collection of innovative projects demonstrating technical expertise and creative problem-solving.
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <div className="flex flex-col items-center gap-4 mb-8 md:mb-12">
          {/* Search Input */}
          <div className="relative w-full max-w-md px-4 md:px-0">
            <input 
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaFilter className="absolute right-6 md:right-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
          </div>

          {/* Mobile Filter Toggle */}
          <div className="md:hidden w-full px-4">
            <button 
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full"
            >
              <FaBars /> Filter Technologies
            </button>
          </div>

          {/* Technology Filter - Mobile Overlay */}
          <AnimatePresence>
            {isMobileFilterOpen && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden flex items-end"
                onClick={() => setIsMobileFilterOpen(false)}
              >
                <motion.div
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '100%' }}
                  transition={{ type: 'spring', damping: 15, stiffness: 300 }}
                  className="bg-white dark:bg-gray-900 w-full rounded-t-2xl p-6"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex flex-wrap justify-center gap-3">
                    {technologies.map(tech => (
                      <motion.button
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          handleFilterChange(tech);
                          setIsMobileFilterOpen(false);
                        }}
                        className={`
                          px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all
                          ${filter === tech 
                            ? 'bg-blue-600 text-white shadow-lg' 
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                          }
                        `}
                      >
                        {tech}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Technology Filter - Desktop Scrollable */}
          <div className="hidden md:flex overflow-x-auto space-x-3 pb-2 px-4 w-full justify-center">
            {technologies.map(tech => (
              <motion.button
                key={tech}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleFilterChange(tech)}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all
                  ${filter === tech 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }
                `}
              >
                {tech}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center text-gray-600 dark:text-gray-300 px-4">
            No projects found. Try adjusting your search or filter.
          </div>
        ) : (
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { 
                  delayChildren: 0.2,
                  staggerChildren: 0.1 
                }
              }
            }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-4 md:px-0"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group"
                onClick={() => handleProjectSelect(project)}
              >
                <div className="relative overflow-hidden cursor-pointer">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white dark:bg-gray-900 p-3 rounded-full text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors">
                      <FaSearchPlus size={24} />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {project.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2">
                      <FaLayerGroup /> View Details
                    </span>
                    {project.links.github && (
                      <a 
                        href={project.links.github}
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        <FaGithub size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 overflow-y-auto"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-white dark:bg-gray-900 rounded-xl w-full max-w-4xl my-8"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col md:grid md:grid-cols-2">
                  {/* Image Section */}
                  <div className="h-64 md:h-96 relative">
                    <img 
                      src={selectedProject.imageUrl} 
                      alt={selectedProject.title}
                      className="w-full h-full object-cover md:rounded-tl-xl md:rounded-bl-xl"
                    />
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-4 right-4 bg-white dark:bg-gray-800 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <FaTimes className="text-gray-600 dark:text-gray-300" />
                    </button>
                  </div>

                  {/* Project Details */}
                  <div className="p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {selectedProject.title}
                      </h3>
                      <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-4 md:mb-6">
                        {selectedProject.subtitle}
                      </p>
                      <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-4 md:mb-6">
                        {selectedProject.description}
                      </p>
                      
                      <div className="mb-4 md:mb-6">
                        <h4 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2 md:mb-3">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.map((tech, idx) => (
                            <span 
                              key={idx} 
                              className="text-xs md:text-sm bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-2 md:px-3 py-1 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-3 md:gap-4">
                      {selectedProject.links.live && (
                        <a 
                          href={selectedProject.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-blue-700 transition-colors w-full md:w-auto"
                        >
                          <FaExternalLinkAlt /> Live Demo
                        </a>
                      )}
                      {selectedProject.links.github && (
                        <a 
                          href={typeof selectedProject.links.github === 'string' 
                            ? selectedProject.links.github 
                            : selectedProject.links.github.frontend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors w-full md:w-auto"
                        >
                          <FaCode /> Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ComprehensivePortfolio;