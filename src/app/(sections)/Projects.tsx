'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { fadeIn, staggerContainer, scaleIn } from '@/utils/animations';

// Project data
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with payment integration, user authentication, and admin dashboard.',
    image: '/images/projects/ecommerce.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'web',
    link: 'https://github.com/yourusername/ecommerce',
    demoLink: 'https://ecommerce-demo.com',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features.',
    image: '/images/projects/taskmanager.jpg',
    tags: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    category: 'web',
    link: 'https://github.com/yourusername/taskmanager',
    demoLink: 'https://taskmanager-demo.com',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A weather dashboard that displays current and forecasted weather data using a weather API.',
    image: '/images/projects/weather.jpg',
    tags: ['React', 'API Integration', 'CSS', 'Chart.js'],
    category: 'web',
    link: 'https://github.com/yourusername/weather',
    demoLink: 'https://weather-demo.com',
  },
  {
    id: 4,
    title: 'Fitness Tracker',
    description: 'A mobile app for tracking workouts, nutrition, and fitness goals with progress visualization.',
    image: '/images/projects/fitness.jpg',
    tags: ['React Native', 'Redux', 'Firebase', 'Expo'],
    category: 'mobile',
    link: 'https://github.com/yourusername/fitness',
    demoLink: 'https://fitness-demo.com',
  },
  {
    id: 5,
    title: 'AI Image Generator',
    description: 'An application that generates images based on text prompts using AI technology.',
    image: '/images/projects/ai-image.jpg',
    tags: ['Python', 'TensorFlow', 'React', 'API'],
    category: 'ai',
    link: 'https://github.com/yourusername/ai-image',
    demoLink: 'https://ai-image-demo.com',
  },
  {
    id: 6,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website showcasing projects and skills with modern design.',
    image: '/images/projects/portfolio.jpg',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    category: 'web',
    link: 'https://github.com/yourusername/portfolio',
    demoLink: 'https://portfolio-demo.com',
  },
];

// Placeholder images for development
const placeholderImages = {
  web: 'https://via.placeholder.com/600x400/3b82f6/ffffff?text=Web+Project',
  mobile: 'https://via.placeholder.com/600x400/10b981/ffffff?text=Mobile+App',
  ai: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=AI+Project',
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Filter projects based on category
  const filteredProjects = projects.filter(
    (project) => activeFilter === 'all' || project.category === activeFilter
  );

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn('up', 0.2)}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Projects</h2>
          <motion.div 
            className="w-24 h-1 bg-blue-600 mx-auto rounded-full"
            variants={scaleIn(0.4)}
          ></motion.div>
        </motion.div>

        {/* Filter buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer(0.1)}
        >
          {['all', 'web', 'mobile', 'ai'].map((filter, index) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-lg transition-all ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              variants={fadeIn('up', 0.1 * index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer(0.1)}
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                variants={fadeIn('up', 0.1 * index)}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image || placeholderImages[project.category as keyof typeof placeholderImages]}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      GitHub
                    </motion.a>
                    <motion.a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div 
              className="col-span-full text-center py-12"
              variants={fadeIn('up', 0.2)}
            >
              <p className="text-xl text-gray-600 dark:text-gray-300">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 