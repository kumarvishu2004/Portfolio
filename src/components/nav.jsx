// components/Navbar.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa'; // GitHub icon

const Navbar = () => {
  const menuItems = [
    { label: 'Home', to: '/portfolio' },
    { label: 'About Me', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Projects', to: '/project' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <nav className="w-full bg-black text-white flex justify-between items-center py-4 px-6 md:px-12">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold"
      >
        K<span className="text-pink-500">_Vishu.</span>
      </motion.div>

      <motion.ul
        className="hidden md:flex gap-8 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {menuItems.map(({ label, to }) => (
          <motion.li
            key={label}
            className="relative group cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to={to}>{label}</Link>
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-pink-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
          </motion.li>
        ))}
      </motion.ul>

      {/* GitHub Icon Button */}
      <a
        href="https://github.com/kumarvishu2004"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.button
          className="text-white text-2xl p-2 rounded-full hover:text-pink-500 transition-transform"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <FaGithub />
        </motion.button>
      </a>
    </nav>
  );
};

export default Navbar;
