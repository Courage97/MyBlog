import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaDatabase, FaBootstrap, FaGithub, FaGitAlt } from 'react-icons/fa';
import { SiDjango, SiTailwindcss, SiFirebase, SiNetlify, SiVercel, SiPostgresql, SiSupabase, SiRender } from 'react-icons/si';

const SkillSection = () => {
  const skills = [
    {
      category: 'Frontend Development',
      icon: "layout",
      color: "from-indigo-400 to-blue-500",
      description: "Creating responsive, intuitive, and visually stunning user interfaces",
      softSkills: ["UI/UX Sensibility", "Design Thinking", "Visual Storytelling"],
      items: [
        { name: 'HTML', icon: <FaHtml5 className="h-8 w-8 text-orange-600" />, proficiency: 95 },
        { name: 'CSS', icon: <FaCss3Alt className="h-8 w-8 text-blue-600" />, proficiency: 90 },
        { name: 'JavaScript', icon: <FaJs className="h-8 w-8 text-yellow-500" />, proficiency: 85 },
        { name: 'React', icon: <FaReact className="h-8 w-8 text-blue-500" />, proficiency: 90 },
      ],
    },
    {
      category: 'Backend Development',
      icon: "server",
      color: "from-teal-400 to-emerald-500",
      description: "Building robust, scalable server-side applications and APIs",
      softSkills: ["Analytical Thinking", "System Architecture", "Performance Optimization"],
      items: [
        { name: 'Python', icon: <FaPython className="h-8 w-8 text-blue-400" />, proficiency: 85 },
        { name: 'Django', icon: <SiDjango className="h-8 w-8 text-green-700" />, proficiency: 80 },
      ],
    },
    {
      category: 'Database Management',
      icon: "database",
      color: "from-violet-400 to-purple-500",
      description: "Designing efficient data structures and relationships",
      softSkills: ["Data Modeling", "Query Optimization", "Information Architecture"],
      items: [
        { name: 'SQL', icon: <FaDatabase className="h-8 w-8 text-gray-600" />, proficiency: 85 },
        { name: 'PostgreSQL', icon: <SiPostgresql className="h-8 w-8 text-blue-600" />, proficiency: 80 },
        { name: 'Supabase', icon: <SiSupabase className="h-8 w-8 text-green-500" />, proficiency: 75 },
      ],
    },
    {
      category: 'DevOps & Tools',
      icon: "tool",
      color: "from-slate-400 to-slate-600",
      description: "Streamlining development workflows and deployment processes",
      softSkills: ["Problem Solving", "Automation", "Continuous Learning"],
      items: [
        { name: 'Bootstrap', icon: <FaBootstrap className="h-8 w-8 text-purple-600" />, proficiency: 90 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="h-8 w-8 text-teal-500" />, proficiency: 95 },
        { name: 'Firebase', icon: <SiFirebase className="h-8 w-8 text-yellow-500" />, proficiency: 80 },
        { name: 'Git', icon: <FaGitAlt className="h-8 w-8 text-orange-600" />, proficiency: 90 },
        { name: 'GitHub', icon: <FaGithub className="h-8 w-8 text-black dark:text-white" />, proficiency: 85 },
        { name: 'Netlify', icon: <SiNetlify className="h-8 w-8 text-blue-600" />, proficiency: 80 },
        { name: 'Vercel', icon: <SiVercel className="h-8 w-8 text-black dark:text-white" />, proficiency: 80 },
        { name: 'Render', icon: <SiRender className="h-8 w-8 text-teal-400" />, proficiency: 75 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  const skillVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    },
    hover: { 
      scale: 1.05,
      transition: { type: "spring", stiffness: 300, damping: 15 }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-850 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Decorative elements - more subtle */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-5 dark:opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-5 dark:opacity-10 animate-pulse animation-delay-2000"></div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative z-10"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-700 mb-4">
            <span className="text-gray-800 dark:text-gray-200 text-sm font-medium tracking-wider">SKILLS & EXPERTISE</span>
          </div>
          <h2 className="mt-6 text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            Technical & Professional <span className="text-indigo-600 dark:text-indigo-400">Competencies</span>
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            My unique combination of technical expertise and interpersonal skills enables me to create exceptional digital experiences
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-8"
        >
          {skills.map((skillCategory, index) => (
            <motion.div
              key={skillCategory.category}
              variants={itemVariants}
              className="relative rounded-xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`absolute h-1 w-full top-0 bg-gradient-to-r ${skillCategory.color}`}></div>
              
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center mb-6">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${skillCategory.color} text-white mb-4 md:mb-0 md:mr-5 shadow-md`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      {skillCategory.icon === "layout" && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                      )}
                      {skillCategory.icon === "server" && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                      )}
                      {skillCategory.icon === "database" && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                      )}
                      {skillCategory.icon === "tool" && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      )}
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                      {skillCategory.category}
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-300 text-sm md:text-base">{skillCategory.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h4 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                      Technical Proficiency
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {skillCategory.items.map((skill) => (
                        <motion.div 
                          key={skill.name} 
                          className="space-y-2"
                          whileHover={{ translateY: -5 }}
                          transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-lg mr-3">
                                {skill.icon}
                              </div>
                              <span className="font-medium text-gray-800 dark:text-gray-200">
                                {skill.name}
                              </span>
                            </div>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <motion.div 
                              className={`h-2 rounded-full bg-gradient-to-r ${skillCategory.color}`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.proficiency}%` }}
                              transition={{ duration: 1, ease: "easeOut" }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Soft Skills
                    </h4>
                    <div className="space-y-3">
                      {skillCategory.softSkills.map((softSkill, idx) => (
                        <motion.div
                          key={softSkill}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors duration-200"
                        >
                          <div className="flex items-center">
                            <div className={`w-8 h-8 rounded-md flex items-center justify-center bg-gradient-to-br ${skillCategory.color}/20 text-gray-700 dark:text-gray-300 mr-3`}>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                {idx === 0 && (
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                )}
                                {idx === 1 && (
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                )}
                                {idx === 2 && (
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                )}
                              </svg>
                            </div>
                            <span className="font-medium text-gray-700 dark:text-gray-300 text-sm">
                              {softSkill}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center relative z-10"
        >
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm constantly expanding my skill set and adapting to emerging technologies to deliver modern, efficient solutions.
          </p>
          <div className="mt-8">
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300"
            >
              Start a project
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillSection;