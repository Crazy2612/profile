import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 md:mb-0"
          >
            <p>&copy; 2023 Faij Alam. All rights reserved.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-4"
          >
            <a
              href="https://github.com/faijalam"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/faijalam"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:faij.alam@example.com"
              className="hover:text-green-400 transition duration-300"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;