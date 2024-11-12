'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaJsSquare, 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaPython, 
  FaFigma, 
  FaJira 
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiInvision, 
  SiDjango, 
  SiKotlin, 
  SiCoda, 
  SiTableau, 
  SiSqlite,
  SiAdobecreativecloud 
} from 'react-icons/si';
import { BiData } from 'react-icons/bi';

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: string;
}

const Skills = () => {
  const skills: Skill[] = [
    { name: 'JavaScript', icon: <FaJsSquare />, category: 'Programming Skills' },
    { name: 'React', icon: <FaReact />, category: 'Programming Skills' },
    { name: 'Next.js', icon: <SiNextdotjs />, category: 'Programming Skills' },
    { name: 'HTML', icon: <FaHtml5 />, category: 'Programming Skills' },
    { name: 'CSS', icon: <FaCss3Alt />, category: 'Programming Skills' },
    { name: 'Kotlin', icon: <SiKotlin />, category: 'Programming Skills' },
    { name: 'Python', icon: <FaPython />, category: 'Programming Skills' },
    { name: 'Django', icon: <SiDjango />, category: 'Programming Skills' },
    { name: 'Adobe Creative Cloud', icon: <SiAdobecreativecloud />, category: 'Design Skills' },
    { name: 'Figma', icon: <FaFigma />, category: 'Design Skills' },
    { name: 'InVision', icon: <SiInvision />, category: 'Design Skills' },
    { name: 'Jira', icon: <FaJira />, category: 'Product Management Skills' },
    { name: 'Coda.io', icon: <SiCoda />, category: 'Product Management Skills' },
    { name: 'Data Cleaning', icon: <BiData />, category: 'Data Skills' },
    { name: 'SQL', icon: <SiSqlite />, category: 'Data Skills' },
  ];

  const categories = {
    'Design Skills': skills.filter(skill => skill.category === 'Design Skills'),
    'Programming Skills': skills.filter(skill => skill.category === 'Programming Skills'),
    'Product Management Skills': skills.filter(skill => skill.category === 'Product Management Skills'),
    'Data Skills': skills.filter(skill => skill.category === 'Data Skills'),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 }},
    hover: { scale: 1.1, y: -5, transition: { duration: 0.3, type: "spring", stiffness: 300 }}
  };

  return (
    <section className="mt-72 bg-gray-50 flex justify-center">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          My Skills
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center mx-auto"
          style={{ maxWidth: '900px' }}
          variants={containerVariants}
          initial="hidden"
          animate="visible">
          
          {Object.entries(categories).slice(0, 4).map(([category, categorySkills]) => (
            <motion.div
              key={category}
              className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl"
              style={{ width: '100%', maxWidth: '450px', minHeight: '400px' }}
              variants={cardVariants}
              tabIndex={0} 
              whileHover={{ scale: 1.03 }}>
              
              <div className="bg-blue-100 p-6">
                <h3 className="text-2xl font-semibold text-blue-600">{category}</h3>
              </div>
              
              <div className="p-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  {categorySkills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      className="flex flex-col items-center text-center"
                      variants={skillVariants}
                      whileHover="hover"
                      tabIndex={0} 
                      whileTap={{ scale: 0.95 }}>
                      <div className="text-4xl mb-3 text-blue hover:text-blue-600 transition duration-200">
                        {skill.icon}
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
