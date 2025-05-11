import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio built with React and Tailwind CSS showcasing my skills and projects.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    link: '#',
  },
  {
    title: 'To-Do App',
    description: 'A simple to-do application with CRUD operations using the React.js.',
    tech: [ 'React', 'Tailwind'],
    link: '#',
  },
  {
    title: 'Weather App',
    description: 'A weather app that fetches real-time weather data from OpenWeather API.',
    tech: ['React', 'API', 'CSS'],
    link: '#',
  },
  {
    title: 'XpertMates',
    description: 'Major project with team: A utility services website which is provide all services like electrician, plumber, grocery,etc. and also have chatbot',
    tech: ['Mern stack', 'API', 'Tailwind'],
    link: '#',
  },
  {
    title: 'Aura ∞',
    description: 'I built a gaming website which provide games and user can download and play',
    tech: ['Mern stack', 'API', 'Tailwind'],
    link: '#',
  },
   {
    title: 'Connect with me',
    description: 'Contact with me for more project and show your interest if you want',
    tech: ['Mern stack devloper'],
    link: '#',
  },
   
];

const Project = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white px-6 md:px-20 py-12">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
        <span className="text-purple-500">My</span> <span className="text-pink-500">Projects</span>
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-black border-2 border-purple-500 rounded-2xl p-6 shadow-[0_0_10px_#a855f7] hover:shadow-[0_0_20px_#ec4899] transition-shadow"
          >
            <h3 className="text-xl font-bold text-purple-400 mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="text-sm bg-purple-700 text-white px-2 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-orange-400 hover:text-orange-300 underline"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
