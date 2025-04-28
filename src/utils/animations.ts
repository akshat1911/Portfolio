import { Variants } from 'framer-motion';

// Fade in animation
export const fadeIn = (direction: 'up' | 'down' | 'left' | 'right' = 'up', delay: number = 0): Variants => {
  return {
    hidden: {
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      opacity: 0,
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay,
        ease: 'easeOut',
      },
    },
  };
};

// Stagger children animation
export const staggerContainer = (delay: number = 0.1): Variants => {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: delay,
      },
    },
  };
};

// Scale animation
export const scaleIn = (delay: number = 0): Variants => {
  return {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay,
        ease: 'easeOut',
      },
    },
  };
};

// Bounce animation
export const bounce = (delay: number = 0): Variants => {
  return {
    hidden: {
      y: 0,
    },
    visible: {
      y: [0, -10, 0],
      transition: {
        duration: 1,
        delay,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      },
    },
  };
};

// Slide in animation
export const slideIn = (direction: 'left' | 'right' = 'left', delay: number = 0): Variants => {
  return {
    hidden: {
      x: direction === 'left' ? -100 : 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay,
        ease: 'easeOut',
      },
    },
  };
};

// Rotate animation
export const rotateIn = (delay: number = 0): Variants => {
  return {
    hidden: {
      rotate: -180,
      opacity: 0,
    },
    visible: {
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        delay,
        ease: 'easeOut',
      },
    },
  };
}; 