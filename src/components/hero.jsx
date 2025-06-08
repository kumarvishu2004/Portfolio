import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Me from "../images/meee.jpg";

const roles = ["Frontend Developer", "Backend Developer", "Web designer", "Graphic Designer"];

const HeroSection = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000); // change role every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="relative flex flex-col items-center text-center px-4 bg-black h-screen overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.img
        src={Me}
        alt="Photo of Kumar Vishu, MERN stack developer"
        loading="lazy"
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

      {/* Rotating roles with light purple text and clamp font size */}
      <motion.h3
        key={roles[currentRoleIndex]}
        className="font-semibold mt-2 text-purple-300 z-10"
        style={{ fontSize: "clamp(1.25rem, 2vw + 1rem, 2.5rem)" }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
      >
        {roles[currentRoleIndex]}
      </motion.h3>

      <p className="text-lg md:text-xl mt-4 max-w-xl text-gray-300 z-10">
        I am a mern stack developer from Punjab, India
      </p>

      <div className="flex gap-6 mt-8 flex-wrap justify-center z-10">
        <Link to="/contact">
          <motion.button
            className="bg-gradient-to-r from-purple-500 to-orange-400 text-white px-6 py-3 rounded-full hover:scale-105 transition-transform focus:outline-none focus:ring-4 focus:ring-purple-400"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Connect with me
          </motion.button>
        </Link>

        <a href="/Vishu ka resume.pdf" target="_blank" rel="noopener noreferrer">
          <motion.button
            className="border-2 border-purple-500 text-white px-6 py-3 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-orange-400 transition-transform focus:outline-none focus:ring-4 focus:ring-purple-400"
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
