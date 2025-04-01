import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const photos = [
  {
    url: "https://github.com/isira-aw/isira.aw/blob/main/image/1000114033.jpg?raw=true",
    title: "Panadura beach"
  },
  {
    url: "https://github.com/isira-aw/isira.aw/blob/main/image/1000142580.jpg?raw=true",
    title: "Wangedigala"
  },
  {
    url: "https://github.com/isira-aw/isira.aw/blob/main/image/WhatsApp%20Image%202025-04-01%20at%2008.53.52_cabc5a5f.jpg?raw=true",
    title: " University of Sri Jayewardenepura, Sri Lanka"
  },
  {
    url: "https://github.com/isira-aw/isira.aw/blob/main/image/IMG-20231124-WA0279%5B1%5D.jpg?raw=true",
    title: "IIT Campus: Informatics Institute of Technology"
  },
  // Add more photos as needed
];

export default function Gallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="gallery" className="py-16">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Photo Gallery
        </motion.h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-64 object-cover"
              />
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent"
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
              >
                <h3 className="text-white font-semibold">{photo.title}</h3>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}