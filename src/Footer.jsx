import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { fadeIn } from './variants';

const Footer = () => {
  // Social media links configuration
  const socialLinks = [
    {
      href: "https://x.com/Barnabas_Pelumi",
      icon: FaXTwitter,
      color: 'text-gray-700 dark:text-gray-300 hover:text-blue-500',
      label: 'Twitter'
    },
    {
      href: "https://github.com/courage97",
      icon: FaGithub,
      color: 'text-gray-700 dark:text-gray-300 hover:text-black',
      label: 'GitHub'
    },
    {
      href: "https://www.linkedin.com/in/barnabas-oyewole-993208229/",
      icon: FaLinkedinIn,
      color: 'text-gray-700 dark:text-gray-300 hover:text-blue-600',
      label: 'LinkedIn'
    },
    {
      href: "https://www.facebook.com/your-profile",
      icon: FaFacebook,
      color: 'text-gray-700 dark:text-gray-300 hover:text-blue-700',
      label: 'Facebook'
    }
  ];

  return (
    <motion.footer 
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="px-6 py-12 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          {/* Personal Branding */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-blue-600 dark:text-white mb-6">
              Barnabas Oyewole
            </h2>
            <p className="text-gray-600 text-xl dark:text-gray-400 max-w-xl">
              Software Developer | Creating innovative web solutions that blend technology and design.
            </p>
          </div>

          {/* Navigation and Social Links */}
          <div className="flex flex-col items-center space-y-6">
            {/* Social Media Icons */}
            <div className="flex space-x-6">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`${link.color} transition-all duration-300 ease-in-out`}
                >
                  <link.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>

            {/* Quick Links */}
            <div className="flex space-x-6 text-sm text-gray-600 dark:text-gray-400">
              {[
                { name: 'Home', href: '/' },
                { name: 'Projects', href: '/projects' },
                { name: 'Blog', href: '/blog' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Barnabas Oyewole. All Rights Reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;