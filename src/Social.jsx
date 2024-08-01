import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebookF } from "react-icons/fa6";
const SocialIcons = () => {
  return (
    <div className="fixed left-0 top-0 h-full flex flex-col items-center justify-center p-4">
      <motion.a
        href="https://x.com/Barnabas_Pelumi"
        className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-500 mb-4 border border-transparent rounded-full p-2"
        whileHover={{ scale: 1.1, translateX: 5 }}
        style={{
          backgroundColor: '#F5F8FA', // Light mode background color for Twitter
        }}
      >
        <FaXTwitter className="h-6 w-6" />
      </motion.a>
      <motion.a
        href="https://github.com/courage97"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-500 mb-4 border border-transparent rounded-full p-2"
        whileHover={{ scale: 1.1, translateX: 5 }}
        style={{
          backgroundColor: '#f6fcf', // Light mode background color for Github
        }}
      >
        <FaGithub className="h-6 w-6" />
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/in/barnabas-oyewole-993208229/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-500 mb-4 border border-transparent rounded-full p-2"
        whileHover={{ scale: 1.1, translateX: 5 }}
        style={{
          backgroundColor: '#f0f2f5', // Light mode background color for Linkedin
        }}
      >
        <FaLinkedinIn className="h-6 w-6" />
      </motion.a>
      <motion.a
        href="https://fa"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-500 mb-4 border border-transparent rounded-full p-2"
        whileHover={{ scale: 1.1, translateX: 5 }}
        style={{
          backgroundColor: '#3b5998', // Light mode background color for Facebook
        }}
      >
        <FaFacebookF className="h-6 w-6" />
      </motion.a>
    </div>
  );
};

export default SocialIcons;
