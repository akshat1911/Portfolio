'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "I'm a Full Stack Developer";
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800" />
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.h1 
          className="text-4xl sm:text-6xl font-bold mb-6"
          initial="hidden"
          animate="visible"
          variants={fadeIn('up', 0.2)}
        >
          <motion.span 
            className="block"
            variants={fadeIn('up', 0.4)}
          >
            Hello, I&apos;m
          </motion.span>
          <motion.span 
            className="block text-blue-600 dark:text-blue-400"
            variants={fadeIn('up', 0.6)}
          >
            Akshat Sharma
          </motion.span>
        </motion.h1>
        <motion.p 
          className="text-xl sm:text-2xl mb-8 min-h-[2em]"
          initial="hidden"
          animate="visible"
          variants={fadeIn('up', 0.8)}
        >
          {text}<span className="animate-blink">|</span>
        </motion.p>
        <motion.div 
          className="flex justify-center gap-4"
          initial="hidden"
          animate="visible"
          variants={fadeIn('up', 1)}
        >
          <motion.a
            href="#contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
          <motion.a
            href="#projects"
            className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
        </motion.div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-0 left-1/2 w-80 h-80 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>
    </section>
  );
};

export default Hero;