import React from 'react';
import { motion } from 'framer-motion';
import { Pencil, BadgeCheck, Monitor, Paintbrush } from 'lucide-react';

const services = [
  {
    title: 'Frontend',
    description: 'I create the responsive websites and user-friendly which is very attractive.',
    icon: <Pencil size={32} />,
    borderColor: 'border-purple-500',
    glow: 'shadow-[0_0_15px_#a855f7]',
  },
  {
    title: 'Backend',
    description: 'I create a many projects which have built with mern stack technology like authentication & authorization.',
    icon: <BadgeCheck size={32} />,
    borderColor: 'border-pink-500',
    glow: 'shadow-[0_0_15px_#ec4899]',
  },
  {
    title: 'Database',
    description: 'I currently use the Mongodb for database and this is good foor data management.',
    icon: <Monitor size={32} />,
    borderColor: 'border-orange-400',
    glow: 'shadow-[0_0_15px_#fb923c]',
  },
   {
    title: 'Graphic Design',
    description: 'I also good in the graphic designing like logo, posters, business cards,etc.',
    icon: <Paintbrush size={32} />,
    borderColor: 'border-orange-400',
    glow: 'shadow-[0_0_15px_#fb923c]',
  },
];

const Services = () => {
  return (
    <div className="w-full bg-black text-white py-16 px-6 md:px-20">
      <motion.h3
        className="text-sm text-purple-400 uppercase font-semibold mb-2"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Services
      </motion.h3>

      <motion.h2
        className="text-3xl md:text-5xl font-bold mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Services That <span className="text-pink-500">I Provide</span>
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`bg-[#0f0f0f] border-2 ${service.borderColor} rounded-xl p-6 transition-transform hover:scale-105 ${service.glow}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 p-3 inline-block rounded-md text-white mb-4">
              {service.icon}
            </div>
            <h4 className="text-xl font-bold mb-2">{service.title}</h4>
            <p className="text-sm text-gray-300 mb-4">{service.description}</p>
           
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
