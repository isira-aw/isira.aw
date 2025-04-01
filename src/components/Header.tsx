import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.h1 
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Isira Adithya
          </motion.h1>
          <div className="flex gap-6">
            <motion.a 
              href="#projects"
              className="text-gray-600 hover:text-purple-600 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              Projects
            </motion.a>
            <motion.a 
              href="#gallery"
              className="text-gray-600 hover:text-purple-600 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              Gallery
            </motion.a>
            <motion.a 
              href="#certifications"
              className="text-gray-600 hover:text-purple-600 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              Certifications
            </motion.a>
            <motion.a 
              href="#contact"
              className="text-gray-600 hover:text-purple-600 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              Contact
            </motion.a>
          </div>
          <div className="flex gap-4">
            <motion.a
              href="https://github.com/isira-aw"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <Github className="w-6 h-6 text-gray-600 hover:text-purple-600" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/isira-weerasinghe-ba91b027b/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
            >
              <Linkedin className="w-6 h-6 text-gray-600 hover:text-purple-600" />
            </motion.a>
            {/* <motion.a
              href="mailto:isira.aw@gmail.com"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <Mail className="w-6 h-6 text-gray-600 hover:text-purple-600" />
            </motion.a> */}
          </div>
        </div>
      </nav>
    </motion.header>
  );
}