import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: "PyData Sri Lanka Jan Post-conference",
    platform: "PyData",
    date: "2025",
    url: "#"
  },
  {
    title: "Fundamentals to Become a Machine Learning Engineer",
    platform: "LinkedIn Learning",
    date: "2024",
    url: "#"
  },
  {
    title: "Large Language Models: Text Classification for NLP using BERT",
    platform: "LinkedIn Learning",
    date: "2024",
    url: "#"
  },
  {
    title: "Introduction to Large Language Models",
    platform: "LinkedIn Learning",
    date: "2024",
    url: "#"
  },
  {
    title: "Deep Learning: Model Optimization and Tuning",
    platform: "LinkedIn Learning",
    date: "2024",
    url: "#"
  },
  {
    title: "Java Programming: Solving Problems with Software",
    platform: "Coursera",
    date: "2024",
    url: "#"
  }
];

export default function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="certifications" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Certifications
        </motion.h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Award className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-gray-600 mb-2">{cert.platform}</p>
              <p className="text-gray-500 text-sm mb-4">{cert.date}</p>
              <motion.a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-600 hover:text-purple-700"
                whileHover={{ scale: 1.1 }}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Certificate
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}