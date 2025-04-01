import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const skills = [
  { name: 'Python', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
  { name: 'Java', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
//  { name: 'JavaScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
  { name: 'React', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg' },
  { name: 'Spring', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg' },
  { name: 'FastAPI', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg' },
  { name: 'MySQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg' },
  // { name: 'Azure', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg' },
  // { name: 'PyTorch', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg' },
];

const skillCategories = [
  // {
  //   title: 'Programming',
  //   skills: ['Java', 'Python', 'JavaScript', 'SQL']
  // },
  // {
  //   title: 'Frontend',
  //   skills: ['React.js', 'Next.js']
  // },
  // {
  //   title: 'Backend',
  //   skills: ['Spring Boot', 'FastAPI']
  // },
  // {
  //   title: 'Cloud & Tools',
  //   skills: ['Microsoft Azure', 'Google Cloud']
  // },
  // {
  //   title: 'ML & Data',
  //   skills: ['PyTorch', 'Pandas', 'NumPy']
  // }
];

export default function Skills() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % (skills.length * 100));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 text-purple-600">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-600">{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="relative mt-16">
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10" />
          
          <div className="flex gap-16 py-8" style={{ transform: `translateX(-${scrollPosition}px)` }}>
            {[...skills, ...skills].map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-4 min-w-[100px]"
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-16 h-16 object-contain"
                />
                <p className="text-gray-700 font-medium">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <motion.div
            className="h-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </section>
  );
}