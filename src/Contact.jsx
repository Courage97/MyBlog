import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import scan from './assets/scan.jpeg';
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        alert('Message sent successfully');
      }, (error) => {
        alert('Error sending message: ' + error.text);
      });
  };

  return (
    <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 font-serif"
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
          >
            Contact Me
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Feel free to get in touch with me.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.form 
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg order-2 md:order-1"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2 text-sm font-medium">Name</label>
              <input type="text" id="name" name="name" className="w-full p-3 border rounded-lg dark:bg-gray-900 dark:border-gray-700" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2 text-sm font-medium">Email</label>
              <input type="email" id="email" name="email" className="w-full p-3 border rounded-lg dark:bg-gray-900 dark:border-gray-700" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2 text-sm font-medium">Message</label>
              <textarea id="message" name="message" className="w-full p-3 border rounded-lg dark:bg-gray-900 dark:border-gray-700" rows="5" required></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium flex items-center justify-center transition duration-300 hover:bg-blue-600"
            >
              <FaEnvelope className="mr-2" /> Send Message
            </button>
          </motion.form>
          <motion.div 
            className="flex flex-col justify-center order-1 md:order-2"
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="mb-4 flex items-center">
              <FaPhone className="text-blue-500 text-2xl mr-4" />
              <p className="text-lg text-gray-700 dark:text-gray-300">+234 8062794852</p>
            </div>
            <div className="mb-4 flex items-center">
              <FaEnvelope className="text-blue-500 text-2xl mr-4" />
              <p className="text-lg text-gray-700 dark:text-gray-300">oyewolebarnabas97@gmail.com</p>
            </div>
            <div className="mb-4 flex items-center">
              <FaMapMarkerAlt className="text-blue-500 text-2xl mr-4" />
              <p className="text-lg text-gray-700 dark:text-gray-300">Ibadan, Oyo state, Nigeria.</p>
            </div>
            <div className="flex items-center">
              <FaWhatsapp className="text-blue-500 text-2xl mr-4" />
              <img src={scan} alt="QR Code" className="h-40 w-35 border rounded-lg shadow-lg" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
