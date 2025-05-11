import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Me from '../images/meee.jpg';

// Helper to generate random star positions
const generateStars = (count = 200) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 2 + 1}px`,
    delay: Math.random() * 5,
  }));
};

// Helper to generate random shooting stars
const generateShootingStars = (count = 50) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 2 + 3}px`,
    animationDuration: Math.random() * 1 + 1 + 's',
    animationDelay: Math.random() * 1 + 's',
  }));
};

const stars = generateStars(100);
const shootingStars = generateShootingStars(100);

const HeroSection = () => {
  return (
    <motion.div
      className="relative flex flex-col items-center text-center px-4 bg-black h-screen overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Star background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="bg-white rounded-full absolute"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              opacity: 0.8,
            }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />
        ))}

        {/* Shooting Stars */}
        {shootingStars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
            }}
            animate={{
              top: ['10%', '100%'],
              left: ['10%', '100%'],
            }}
            transition={{
              duration: parseFloat(star.animationDuration),
              delay: star.animationDelay,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Content Layer */}
      <motion.img
        src={Me}
        alt="Kumar Vishu"
        className="w-48 h-48 rounded-full border-4 border-white shadow-lg mt-10 z-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      <h1 className="text-4xl md:text-6xl font-bold mt-6 text-white z-10">
        I'm <span className="text-purple-500">Kumar</span>
        <span className="text-pink-500"> Vishu</span>
        <span className="text-orange-400">,</span>
      </h1>

      <motion.h2
        className="text-2xl md:text-4xl font-bold mt-2 text-white z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Mern stack developer based in India.
      </motion.h2>

      <p className="text-lg md:text-xl mt-4 max-w-xl text-gray-300 z-10">
        I am a mern stack developer from Punjab, India
      </p>

      <div className="flex gap-6 mt-8 flex-wrap justify-center z-10">
        <Link to="/contact">
          <motion.button
            className="bg-gradient-to-r from-purple-500 to-orange-400 text-white px-6 py-3 rounded-full hover:scale-105 transition-transform"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Connect with me
          </motion.button>
        </Link>

        <a href="/Vishu ka resume.pdf" target="_blank" rel="noopener noreferrer">
          <motion.button
            className="border-2 border-purple-500 text-white px-6 py-3 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-orange-400 transition-transform"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            My resume
          </motion.button>
        </a>
      </div>
    </motion.div>
  );
};

export default HeroSection;
