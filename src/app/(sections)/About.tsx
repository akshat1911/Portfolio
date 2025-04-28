'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeIn, staggerContainer, scaleIn } from '@/utils/animations';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn('up', 0.2)}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <motion.div 
            className="w-24 h-1 bg-blue-600 mx-auto rounded-full"
            variants={scaleIn(0.4)}
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer(0.1)}
          >
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300"
              variants={fadeIn('right', 0.2)}
            >
              I'm a passionate Full Stack Developer with a strong foundation in web technologies
              and a keen eye for creating beautiful, functional user experiences.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300"
              variants={fadeIn('right', 0.4)}
            >
              With expertise in both frontend and backend development, I specialize in building
              scalable web applications using modern technologies and best practices.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={fadeIn('right', 0.6)}
            >
              <motion.div 
                className="bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-semibold">Experience:</span> 5+ years
              </motion.div>
              <motion.div 
                className="bg-purple-100 dark:bg-purple-900 px-4 py-2 rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-semibold">Projects:</span> 20+
              </motion.div>
              <motion.div 
                className="bg-green-100 dark:bg-green-900 px-4 py-2 rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-semibold">Clients:</span> 15+
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 gap-4"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer(0.1)}
          >
            <div className="space-y-4">
              <motion.div 
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg"
                variants={fadeIn('left', 0.2)}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="font-semibold mb-2">Frontend Development</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  React, Next.js, TypeScript, Tailwind CSS
                </p>
              </motion.div>
              <motion.div 
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg"
                variants={fadeIn('left', 0.4)}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="font-semibold mb-2">Backend Development</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Node.js, Express, Python, Django
                </p>
              </motion.div>
            </div>
            <div className="space-y-4 mt-8">
              <motion.div 
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg"
                variants={fadeIn('left', 0.6)}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="font-semibold mb-2">Database</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  MongoDB, PostgreSQL, Redis
                </p>
              </motion.div>
              <motion.div 
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg"
                variants={fadeIn('left', 0.8)}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="font-semibold mb-2">DevOps</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Docker, AWS, CI/CD, Git
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 