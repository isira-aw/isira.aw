import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Youtube, Database, Gamepad2, School, Baby } from 'lucide-react';

const projects = [
  {
    title: "YouTube Channel Growth Analysis",
    description: "A YouTube analytics project using Power BI for data visualization and machine learning for predictive modeling. Identifies patterns in subscriber growth, video views, and revenue while forecasting future trends.",
    image: "https://github.com/isira-aw/isira.aw/blob/main/image/413629687-36fe67c6-bebf-4680-99bd-0093a6478471.png?raw=true",
    github: "https://github.com/isira-aw/YouTube_Channel_Growth_PowerBI_and_ML",
    technologies: ["Power BI", "Machine Learning"]
  },
  {
    title: "Tank Game Python",
    description: "A 2D multiplayer tank battle game built with Pygame, featuring player movement, shooting mechanics, obstacle navigation, flag capture, and game-over conditions.",
    image: "https://github.com/isira-aw/isira.aw/blob/main/image/Screenshot%202025-02-16%20230722.png?raw=true",
    github: "https://github.com/isira-aw/Tank-Game-Python",
    technologies: ["Python", "Pygame"],
    icon: <Gamepad2 className="w-12 h-12 text-green-500" />
  },
  {
    title: "Student Marks Management",
    description: "A Python-based student marks management system that allows users to add, update, delete, and view student records.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/isira-aw/Student_marks_management-PYTHON-Project",
    technologies: ["Python"],
    icon: <School className="w-12 h-12 text-blue-500" />
  },
  {
    title: "Seats Management Java",
    description: "A CLI software that allows users to purchase, cancel, and check available tickets easily. Provides a simple interface for managing ticket transactions efficiently.",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/isira-aw/seats_management-JAVA",
    technologies: ["Java OOP"],
    icon: <Database className="w-12 h-12 text-orange-500" />
  },
  {
    title: "TimeVault",
    description: "AI Calenda - Built an AI-driven calendar using Python, Kivy, and Google Calendar API to extract and schedule events from images.",
    image: "https://github.com/isira-aw/isira.aw/blob/main/image/Screenshot%202025-04-01%20110644.png?raw=true",
    github: "https://github.com/isira-aw/Calendar_GoogleAPI.git",
    technologies: ["Python","Kivy" ,"Google API" ],
    icon: <Database className="w-12 h-12 text-orange-500" />
  },
  {
    title: "MOMMYcare+",
    description: "An intelligent chatbot backend using Python with LLM integration (LangChain/OpenAI GPT API). Collaborated with Flutter team for smooth frontend-backend integration.",
    image: "https://github.com/isira-aw/isira.aw/blob/main/image/homepage1.png?raw=true",
    github: "#",
    technologies: ["LLM", "Flutter", "Python"],
    icon: <Baby className="w-12 h-12 text-pink-500" />
  }
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="p-6">
                <div className="h-64 object-cover">
                  <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover p-5 rounded-[10px]"/>
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-purple-600"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}