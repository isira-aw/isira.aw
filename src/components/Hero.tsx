import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { Code2, BookOpen, Camera, Brain } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen pt-24 pb-16 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.img
            src="https://github.com/isira-aw/isira.aw/blob/main/image/isira.jpg?raw=true"
            alt="Profile"
            className="w-48 h-48 rounded-full mx-auto mb-8 object-cover shadow-xl"
            whileHover={{ scale: 1.05 }}
          />
          <motion.h1 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Hi 👋, I'm Isira Adithya Weerasinghe
          </motion.h1>
          <br />
          <div className="flex justify-center space-x-4  ">
  <motion.a
    href="https://github.com/isira-aw"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2 }}
  >
    <Github className="w-10 h-10 text-gray-600 hover:text-purple-600" />
  </motion.a>
  <motion.a
    href="https://www.linkedin.com/in/isira-weerasinghe-ba91b027b/"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2 }}
  >
    <Linkedin className="w-10 h-10 text-gray-600 hover:text-purple-600" />
  </motion.a>
</div>

<br /><br />

          <motion.p
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            A second-year Computer Science undergraduate at Informatics Institute of Technology (IIT), 
            specializing in Machine Learning and Data Science. Passionate about using AI to solve real-world 
            problems and optimize business decisions.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 flex justify-center  ">
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Code2 className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Developer</h3>
            <p className="text-gray-600">Experienced in Python, Java, and web technologies</p>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Brain className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">ML Enthusiast</h3>
            <p className="text-gray-600">Focused on machine learning and data science applications</p>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <BookOpen className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Student</h3>
            <p className="text-gray-600">BSc (Hons) Computer Science at IIT</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}