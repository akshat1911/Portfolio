'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeIn, staggerContainer, scaleIn } from '@/utils/animations';

// Skill categories and their items
const skillCategories = [
  {
    name: 'Frontend',
    icon: '💻',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'HTML/CSS', level: 95 },
    ],
  },
  {
    name: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'Django', level: 70 },
      { name: 'RESTful APIs', level: 90 },
    ],
  },
  {
    name: 'Database',
    icon: '🗄️',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'Redis', level: 75 },
      { name: 'SQL', level: 85 },
    ],
  },
  {
    name: 'DevOps',
    icon: '🚀',
    skills: [
      { name: 'Docker', level: 80 },
      { name: 'AWS', level: 75 },
      { name: 'CI/CD', level: 70 },
      { name: 'Git', level: 90 },
    ],
  },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn('up', 0.2)}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Skills</h2>
          <motion.div 
            className="w-24 h-1 bg-blue-600 mx-auto rounded-full"
            variants={scaleIn(0.4)}
          ></motion.div>
        </motion.div>

        {/* Category tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer(0.1)}
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.name}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-lg transition-all ${
                activeCategory === index
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              variants={fadeIn('up', 0.1 * index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer(0.1)}
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              variants={fadeIn('up', 0.1 * index)}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                <span className="text-blue-600 dark:text-blue-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <motion.div
                  className="bg-blue-600 h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['UI/UX Design', 'Responsive Design', 'Web Accessibility', 'Performance Optimization', 'Agile/Scrum', 'Problem Solving'].map((skill) => (
              <div
                key={skill}
                className="bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow hover:shadow-md transition-shadow"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 