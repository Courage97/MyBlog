import React, { useState, useEffect, useRef } from 'react';
import { Transition } from '@headlessui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import ScrollReveal from 'scrollreveal';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(storedDarkMode);
    updateDarkMode(storedDarkMode);

    // Initialize ScrollReveal
    ScrollReveal().reveal(navRef.current, {
      duration: 1000,
      origin: 'top',
      distance: '20px',
      easing: 'ease-in-out',
    });

    // Fix for horizontal scrollbar issue
    document.body.style.overflowX = 'hidden';
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
    localStorage.setItem('darkMode', newDarkMode.toString());
    updateDarkMode(newDarkMode);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  const menuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { opacity: 1, x: '0%' },
    exit: { opacity: 0, x: '100%' },
  };

  return (
    <nav ref={navRef} className="fixed top-0 w-full z-10 py-3 transition duration-300 bg-white dark:bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-12">
          <div className="flex-shrink-0">
            <h1 className="font-extrabold text-3xl tracking-wide font-poppins">
              <span className="logo-first-letter text-4xl mr-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">B</span>
              <span className="text-gray-700 dark:text-gray-300">arnabas</span>
            </h1>
          </div>
          <div className="flex items-center">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white mr-2"
            >
              <span className="sr-only">Toggle dark mode</span>
              {darkMode ? (
                <FaSun className="w-7 h-7 text-blue-500" />
              ) : (
                <FaMoon className="w-7 h-7 text-blue-500" />
              )}
            </button>

            {/* Menu button */}
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-7 w-7 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-7 w-7 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu overlay */}
      <Transition
        show={isOpen}
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true" onClick={toggleMenu}></div>
      </Transition>

      {/* Menu content */}
      <Transition
        show={isOpen}
        enter="transition ease-in-out duration-300 transform"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
      >
        {(ref) => (
          <motion.div ref={ref} className="fixed inset-y-0 right-0 w-2/5 bg-white dark:bg-gray-900 shadow-lg"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <div className="h-full flex flex-col py-6 ">
              <div className="px-4 sm:px-6">
                <div className="flex items-start justify-between ">
                  <div className="ml-3 h-7 flex items-center ">
                    <button
                      onClick={toggleMenu}
                      className="rounded-md text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <span className="sr-only">Close panel</span>
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-6 relative flex-1 px-4 sm:px-6">
                <div className="h-full flex flex-col justify-center space-y-6  bg-white dark:bg-gray-900 shadow-lg">
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <ScrollLink
                      to="About"
                      smooth={true}
                      duration={500}
                      className="block px-3 py-2 rounded-md text-xl font-bold font-sans text-gray-900 dark:text-gray-100 hover:bg-blue-500 dark:hover:bg-blue-300 hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer"
                      onClick={toggleMenu}
                    >
                      About
                    </ScrollLink>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <ScrollLink
                      to="services"
                      smooth={true}
                      duration={500}
                      className="block px-3 py-2 rounded-md text-xl font-bold font-sans text-gray-900 dark:text-gray-100 hover:bg-blue-500 dark:hover:bg-blue-300 hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer"
                      onClick={toggleMenu}
                    >
                      Services
                    </ScrollLink>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <ScrollLink
                      to="portfolio"
                      smooth={true}
                      duration={500}
                      className="block px-3 py-2 rounded-md text-xl font-bold font-sans text-gray-900 dark:text-gray-100 hover:bg-blue-500 dark:hover:bg-blue-300 hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer"
                      onClick={toggleMenu}
                    >
                      Portfolio
                    </ScrollLink>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <ScrollLink
                      to="contact"
                      smooth={true}
                      duration={500}
                      className="block px-3 py-2 rounded-md text-xl font-bold font-sans text-gray-900 dark:text-gray-100 hover:bg-blue-500 dark:hover:bg-blue-300 hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer"
                      onClick={toggleMenu}
                    >
                      Contact
                    </ScrollLink>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </Transition>
    </nav>
  );
}

export default Navbar;
