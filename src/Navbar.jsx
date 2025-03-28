import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Add scroll event listener
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Handle resize event to close mobile menu on desktop view
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
        document.body.style.overflow = 'auto';
      }
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Only for mobile
      if (window.innerWidth < 768) {
        document.body.style.overflow = 'hidden';
      }
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const navLinks = [
    { name: 'About', to: 'About' },
    { name: 'Services', to: 'services' },
    { name: 'Portfolio', to: 'portfolio' },
    { name: 'Contact', to: 'contact' }
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-white/95 shadow-md' : 'py-5 bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <div className="relative">
                <span className="absolute -inset-1 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg blur-sm opacity-70"></span>
                <span className="relative block w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-sans font-black text-xl">B</span>
              </div>
              <span className="ml-3 text-xl sm:text-2xl font-sans font-bold tracking-tight text-gray-900">arnabas</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex space-x-8 mr-8">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="text-gray-600 hover:text-blue-600 font-sans text-sm uppercase tracking-wide font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all after:duration-300"
                  activeClass="text-blue-600 after:w-full"
                  spy={true}
                  offset={-70}
                >
                  {link.name}
                </ScrollLink>
              ))}
            </div>
            
            {/* CTA Button */}
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-2.5 rounded-lg font-sans text-sm font-medium tracking-wide hover:shadow-lg hover:translate-y-px transition-all"
            >
              Get in Touch
            </ScrollLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="flex items-center justify-center p-2 rounded-md focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ease-out ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                <span className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ease-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ease-out ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-x-0 top-[72px] z-40 bg-white border-b border-gray-200 transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 invisible'
        } md:hidden overflow-hidden`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              className="block py-3 text-gray-800 text-base font-sans font-medium border-b border-gray-100 hover:text-blue-600 transition-colors"
              onClick={toggleMenu}
            >
              {link.name}
            </ScrollLink>
          ))}
          
          <div className="pt-4">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="block w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-3 rounded-md font-sans font-medium text-center tracking-wide"
              onClick={toggleMenu}
            >
              Get in Touch
            </ScrollLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;