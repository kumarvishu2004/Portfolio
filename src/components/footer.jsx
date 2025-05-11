import React from 'react';
import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-[#0b0b17] text-white py-12 px-4 overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.2)_2px,transparent_2px)] bg-[length:40px_40px] opacity-10 animate-floatParticles z-0" />

      <div className="relative z-10 text-center space-y-6">
        <h2 className="text-purple-500 text-2xl font-semibold">Kumar Vishu</h2>

        <div className="flex justify-center gap-6 text-2xl">
          <a
            href="https://github.com/kumarvishu2004"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/kumar-vishu-06521519b"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/k_vishu___"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400"
          >
            <FaInstagram />
          </a>
        </div>

        <p className="text-sm text-gray-400 mt-4">© 2025 Kumar Vishu All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
