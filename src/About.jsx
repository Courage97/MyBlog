import React from 'react';
import { motion } from 'framer-motion';
import Barnabas from './assets/barnabas.jpg';

const AboutMe = () => {
  return (
    <section className="w-full h-screen bg-white dark:bg-gray-900 transition-colors duration-300 flex justify-center items-center mb-12 md:mb-0">
      <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center p-6 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 lg:mb-0 lg:mr-8 mt-16 md:mt-0"
        >
          <motion.img
            src={Barnabas}
            alt="Barnabas Oyewole"
            className="w-40 h-40 md:w-72 md:h-72 mt-16 rounded-full object-cover border-4 border-blue-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full lg:w-2/3 text-center lg:text-left px-4"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 font-serif"
          >
            Hello, I'm Barnabas Oyewole
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-4 font-sans text-justify"
          >
            A seasoned <span className="uppercase text-2xl font-extrabold font-sans shadow-md">fullstack developer</span> with a robust two-year track record, dedicated to delivering impactful IT solutions to businesses through intuitive web interfaces.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-6 font-sans text-justify"
          >
            My expertise spans a wide array of IT frameworks, complemented by a deep understanding of web development principles. This comprehensive skill set enables me to not only provide effective solutions but also offer valuable guidance and tutoring in the field of web development.
          </motion.p>
          <motion.a
            href="https://drive.google.com/file/d/1h7p51AtgI5WaGZKDo4uzwp4yMLhuYWhR/view?usp=sharing" // Update this path with the actual path to your resume
            download
            whileHover={{ scale: 1.05, backgroundColor: '#2563EB', boxShadow: '0px 4px 12px rgba(37, 99, 235, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="inline-block bg-blue-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-md font-medium shadow-md hover:shadow-lg"
          >
            Download My Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
