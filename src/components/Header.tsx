import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-600 hover:text-purple-600 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-6">
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

          {/* Desktop Social Links */}
          <div className="hidden lg:flex gap-4">
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
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className={`lg:hidden overflow-hidden ${isMenuOpen ? 'mt-4' : ''}`}
        >
          <div className="flex flex-col gap-4 py-4">
            <motion.a 
              href="#projects"
              className="text-gray-600 hover:text-purple-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </motion.a>
          
            <motion.a 
              href="#certifications"
              className="text-gray-600 hover:text-purple-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsMenuOpen(false)}
            >
              Certifications
            </motion.a>
            <motion.a 
              href="#contact"
              className="text-gray-600 hover:text-purple-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </motion.a>

            {/* Mobile Social Links */}
            <div className="flex gap-4 pt-4 border-t border-gray-200">
              <motion.a
                href="https://github.com/isira-aw"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
              >
                <Github className="w-6 h-6 text-gray-600 hover:text-purple-600" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/isira-weerasinghe-ba91b027b/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
              >
                <Linkedin className="w-6 h-6 text-gray-600 hover:text-purple-600" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
}