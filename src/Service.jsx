import React from 'react';
import { motion } from 'framer-motion';
import {fadeIn} from './variants'

const ServiceSection = () => {
  const services = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4m18-2h.01M6 9a2 2 0 012-2h8a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V9z"
          />
        </svg>
      ),
      title: 'Web Development',
      description:
        'Building responsive, user-friendly web applications using the latest technologies.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      ),
      title: 'Instructor',
      description:
        'Providing comprehensive training and guidance in web development and programming languages.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-purple-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
        </svg>
      ),
      title: 'Technical Writing',
      description:
        'Creating clear and informative technical documentation, tutorials, and guides for software projects.',
    },
  ];

  return (
    <motion.section
    variants = {fadeIn("left", 0.2)}
    initial = "hidden"
    whileInView={"show"}
    viewport={{once:false, amount:0.7}}
      id="services"
      className="w-full h-full flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300 py-12"
    >
      <div className="w-full flex flex-col items-center justify-center p-6 md:p-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 font-serif">
            My Services
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Explore what I can do for you
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-item border border-gray-200 dark:border-gray-600 rounded-lg flex flex-col items-center justify-center text-center cursor-pointer relative shadow-md p-6 bg-white dark:bg-gray-800"
              variants = {fadeIn("right", 0.3)}
              initial = "hidden"
              whileInView={"show"}
              viewport={{once:false, amount:0.7}}
              whileHover={{ scale: 1.05, boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="flex items-center justify-center mb-4 bg-white dark:bg-gray-800 rounded-full p-3">
                {service.icon}
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold mb-2 font-serif">
                {service.title}
              </h3>
              <p className="text-base lg:text-lg text-gray-700 dark:text-gray-300 font-serif">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ServiceSection;
