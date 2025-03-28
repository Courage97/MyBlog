import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ServiceSection = () => {
  const [activeService, setActiveService] = useState(null);
  
  const services = [
    {
      id: 1,
      icon: "code",
      title: "Software Development",
      description: "Building tailored software solutions to meet the specific needs of a business or individual that is user-friendly, web applications using the latest technologies.",
      color: "bg-blue-500",
      textColor: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      features: ["Custom Web Applications", "Mobile Development", "API Integration", "E-commerce Solutions"]
    },
    {
      id: 2,
      icon: "briefcase",
      title: "Consulting and Technical Expertise",
      description: "Advising businesses on the best software solutions, technologies, and practices to achieve their goals. This could include system architecture design, technology stack selection, or even training and mentoring development teams.",
      color: "bg-emerald-500",
      textColor: "text-emerald-500",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      features: ["Technology Audits", "Architecture Design", "Team Mentoring", "Process Optimization"]
    },
    {
      id: 3,
      icon: "shield",
      title: "Software Maintenance and Support",
      description: "Creating clear and informative technical documentation, tutorials, and guides for software projects.",
      color: "bg-violet-500",
      textColor: "text-violet-500",
      bgColor: "bg-violet-50 dark:bg-violet-900/20",
      features: ["Bug Fixing", "Performance Optimization", "Security Updates", "Feature Enhancement"]
    },
  ];

  return (
    <section id="services" className="py-24 relative bg-white dark:bg-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-100 dark:bg-blue-900/20 blur-3xl opacity-50"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-purple-100 dark:bg-purple-900/20 blur-3xl opacity-50"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-violet-500/10 border border-blue-100 dark:border-blue-800">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500 text-sm font-medium">SERVICES OFFERED</span>
          </div>
          <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">Expert Solutions</span> for Your Digital Needs
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            Elevate your business with tailored services designed for success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-xl overflow-hidden group ${service.bgColor} backdrop-blur-sm border border-gray-100 dark:border-gray-800 h-full`}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="absolute bottom-0 right-0 w-40 h-40 -mr-16 -mb-16 rounded-full opacity-20 transition-transform duration-700 group-hover:scale-150 group-hover:opacity-30" style={{background: `radial-gradient(circle at center, ${service.color.replace('bg-', '')}, transparent)`}}></div>
              
              <div className={`w-14 h-14 rounded-lg ${service.color} flex items-center justify-center mb-6 shadow-lg`}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {service.icon === "code" && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  )}
                  {service.icon === "briefcase" && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  )}
                  {service.icon === "shield" && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  )}
                </svg>
              </div>
              
              <h3 className={`text-xl font-bold mb-3 ${service.textColor}`}>
                {service.title}
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 line-clamp-3">
                {service.description}
              </p>
              
              <div className={`space-y-2 ${activeService === service.id ? 'block' : 'hidden'} transition-all duration-300 mb-6`}>
                <h4 className="font-medium text-gray-900 dark:text-white">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                      <svg className={`w-4 h-4 mr-2 ${service.textColor}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-auto">
                <button className={`group inline-flex items-center font-medium ${service.textColor} hover:underline`}>
                  <span>Explore Service</span>
                  <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a href='https://random-quote-sigma-eight.vercel.app/' className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-1">
            Get a Custom Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSection;