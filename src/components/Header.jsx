
import React from 'react';
import ThemeToggleButton from './ThemeToggleButton';
import { personalInfo } from '../data/portfolioData';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-md shadow-sm"
    >
      <div className="container-max section-padding !py-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-aesthetic-blue tracking-tight cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {personalInfo.name}
        </motion.div>
        <ThemeToggleButton />
      </div>
    </motion.header>
  );
};

export default Header;
