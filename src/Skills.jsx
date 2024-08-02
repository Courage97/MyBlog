import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaDatabase, FaBootstrap, FaGithub, FaGitAlt } from 'react-icons/fa';
import { SiMysql, SiDjango, SiTailwindcss, SiFirebase, SiNetlify, SiVercel } from 'react-icons/si';
import {fadeIn} from './variants'

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML', icon: <FaHtml5 className="h-10 w-10 text-orange-600" /> },
      { name: 'CSS', icon: <FaCss3Alt className="h-10 w-10 text-blue-600" /> },
      { name: 'JavaScript', icon: <FaJs className="h-10 w-10 text-yellow-500" /> },
      { name: 'React', icon: <FaReact className="h-10 w-10 text-blue-500" /> },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Python', icon: <FaPython className="h-10 w-10 text-blue-400" /> },
      { name: 'Django', icon: <SiDjango className="h-10 w-10 text-green-700" /> },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'SQL', icon: <FaDatabase className="h-10 w-10 text-gray-600" /> },
      { name: 'MySQL', icon: <SiMysql className="h-10 w-10 text-blue-500" /> },
    ],
  },
  {
    category: 'Libraries and Tools',
    items: [
      { name: 'Bootstrap', icon: <FaBootstrap className="h-10 w-10 text-purple-600" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="h-10 w-10 text-teal-500" /> },
      { name: 'Firebase', icon: <SiFirebase className="h-10 w-10 text-yellow-500" /> },
      { name: 'Git', icon: <FaGitAlt className="h-10 w-10 text-orange-600" /> },
      { name: 'GitHub', icon: <FaGithub className="h-10 w-10 text-black dark:text-white" /> },
      { name: 'Netlify', icon: <SiNetlify className="h-10 w-10 text-blue-600" /> },
      { name: 'Vercel', icon: <SiVercel className="h-10 w-10 text-black dark:text-white" /> },
    ],
  },
];

const SkillSection = () => {
  return (
    <motion.section
    variants = {fadeIn("right", 0.5)}
    initial = "hidden"
    whileInView={"show"}
    viewport={{once:false, amount:0.5}}
    className="w-full h-full bg-white dark:bg-gray-900 transition-colors duration-300 py-12">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 font-serif">
            Skills
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Here are the technologies and tools I am proficient in:
          </p>
        </div>
        <motion.div
          variants = {fadeIn("up", 0.2)}
          initial = "hidden"
          whileInView={"show"}
          viewport={{once:false, amount:0.7}}
        className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="rounded-lg p-6 shadow-md bg-white dark:bg-gray-800 w-full h-full"
            >
              <h3 className="text-2xl font-bold mb-4 font-serif text-gray-900 dark:text-gray-100">
                {skillCategory.category}
              </h3>
              <div className="flex flex-wrap justify-center">
                {skillCategory.items.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    className="flex flex-col items-center m-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-full shadow-lg">
                      {skill.icon}
                    </div>
                    <span className="mt-2 text-gray-700 dark:text-gray-300 text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SkillSection;
