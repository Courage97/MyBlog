import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import car from './assets/car.jpg';
import chat from './assets/chat.jpg';
import crud from './assets/crud.jpg';
import gym from './assets/gym.jpg';
import hotel from './assets/hotel.jpg';
import quote from './assets/quote.jpg';

const projects = [
  {
    title: 'Hotel Profile',
    description: 'A comprehensive profile for a hotel.',
    image: hotel,
    link: 'https://kkapartments.com.ng/',
  },
  {
    title: 'Gym Website',
    description: 'A gym website with a BMI calculator.',
    image: gym,
    link: 'https://gym2-psi.vercel.app/',
  },
  {
    title: 'Car Manufacturing Presentation',
    description: 'A presentation website for a car manufacturing company.',
    image: car,
    link: 'https://motors-kohl.vercel.app/',
  },
  {
    title: 'CRUD Operation',
    description: 'A website demonstrating CRUD operations.',
    image: crud,
    link: 'https://github.com/Courage97/crud',
  },
  {
    title: 'Chat Application',
    description: 'A real-time chat application.',
    image: chat,
    link: 'https://github.com/Courage97/Chatapp',
  },
  {
    title: 'Random Quote Generator',
    description: 'A website that generates random quotes.',
    image: quote,
    link: 'https://random-quote-sigma-eight.vercel.app/',
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 font-serif">
            My Projects
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Here are some of my completed projects.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-75 flex flex-col justify-center items-center transition-opacity duration-300">
                  <h3 className="text-xl lg:text-2xl font-semibold text-white mb-2 font-serif opacity-0 hover:opacity-100">{project.title}</h3>
                  <p className="text-base lg:text-lg text-white mb-4 opacity-0 hover:opacity-100">{project.description}</p>
                  <div className="opacity-0 hover:opacity-100">
                    <FaExternalLinkAlt className="text-white text-2xl" />
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
