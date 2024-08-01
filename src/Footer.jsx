import React from 'react';
import { FaGithub, FaLinkedinIn, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="text-gray-300 py-8">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <a href="#" className="text-gray-300 hover:text-white mx-2"><FaXTwitter className="inline-block text-2xl" /></a>
          <a href="https://github.com/Courage97" className="text-gray-300 hover:text-white mx-2" target="_blank" rel="noopener noreferrer"><FaGithub className="inline-block text-2xl" /></a>
          <a href="https://www.linkedin.com/in/barnabas-oyewole-993208229/" className="text-gray-300 hover:text-white mx-2" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="inline-block text-2xl" /></a>
          <a href="https://facebook.com/yourusername" className="text-gray-300 hover:text-white mx-2" target="_blank" rel="noopener noreferrer"><FaFacebook className="inline-block text-2xl" /></a>
        </div>
        <p className="text-gray-500">&copy; 2024 Barnabas Oyewole. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
