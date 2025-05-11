import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white px-6 md:px-20 py-12">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
        <span className="text-purple-500">Contact</span> <span className="text-pink-500">Me</span>
      </h2>

      <motion.form
        action="https://formspree.io/f/xkgrzrev" // 🔁 Replace with your Formspree endpoint
        method="POST"
        className="max-w-2xl mx-auto bg-black border-2 border-purple-500 rounded-2xl p-8 shadow-[0_0_15px_#a855f7] space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div>
          <label className="block mb-2 text-white/80">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-3 bg-black border border-purple-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-white/80">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-3 bg-black border border-purple-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-white/80">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full p-3 bg-black border border-purple-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <motion.button
          type="submit"
          className="bg-gradient-to-r from-purple-500 to-orange-400 text-white px-6 py-3 rounded-full hover:scale-105 transition-transform"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </div>
  );
};

export default Contact;
