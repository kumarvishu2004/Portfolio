import React from 'react';
import { motion } from 'framer-motion';
import Me from '../images/meee.jpg'; 
import Me2 from '../images/me2.jpg'

const About = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white px-6 md:px-20 py-12">
      {/* About Me Heading */}
      <motion.h3
        className="text-sm text-white/70 uppercase font-semibold mb-2"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        About me
      </motion.h3>

      <motion.h2
        className="text-3xl md:text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="text-purple-500">My Education</span> & 
        <span className="text-pink-500"> Experience</span>
      </motion.h2>

      {/* Image and Content Section */}
      <div className="flex flex-col md:flex-row items-start gap-10 mb-12">
        {/* Image Left */}
        <motion.div
          className="flex-shrink-0 flex justify-center md:justify-start"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={Me2}
            alt="Profile"
            className="w-40 h-40 md:w-60 md:h-60 rounded-full border-4 border-purple-500 shadow-lg"
          />
        </motion.div>

        {/* Content Right */}
        <div className="flex-1">
          {/* Education Section */}
          <motion.h3
            className="text-2xl font-semibold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Education
          </motion.h3>

          <div className="flex flex-col gap-6 mb-12">
            {[
              {
                title: 'Bachelor Of Computer Applications',
                place: 'IK Gujrat Punjab Technical University (2022–2025)',
                description: 'I am currently pursuing BCA in IKGPTU.',
              },
              {
                title: 'Senior Secondary Education',
                place: 'Kendriya Vidyalaya Kapurtala Cantt (2021–2022)',
                description: 'My Score in 12th is 76%',
              },
              {
                title: 'Matriculation',
                place: 'Kendriya Vidyalaya Kapurtala Cantt (2019–2020)',
                description: 'My Score in 10th is 71%',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-black text-white border-2 border-white-500 rounded-full p-6 shadow-[0_0_10px_#a855f7]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-bold">{item.title}</h4>
                <p className="text-sm text-purple-400 mt-1">{item.place}</p>
                <p className="text-sm text-gray-300 mt-1">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Experience Section */}
          <motion.h3
            className="text-2xl font-semibold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Experience
          </motion.h3>

          <div className="flex flex-col md:flex-row gap-6">
            {[
              {
                title: 'Frontend Developer Intern',
                company: 'Saiket Systems',
                description: 'Developed responsive UIs using React and Tailwind CSS.',
              },
              {
                title: 'Mern stack Developer Intern',
                company: 'ELite Tech intern',
                description: 'Built portfolio and business websites for clients.',
              },
              {
                title: 'Full-Stack Intern',
                company: 'Cognifyz Technologies',
                description: 'Completed hands-on projects using MongoDB, Express, React, and Node.js.',
              },
            ].map((exp, i) => (
              <motion.div
                key={i}
                className="flex-1 bg-black text-white border-2 border-white-500 rounded-xl p-6 shadow-[0_0_10px_#fb7185]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-bold">{exp.title}</h4>
                <p className="text-sm text-pink-400 mt-1">{exp.company}</p>
                <p className="text-sm text-gray-300 mt-1">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
