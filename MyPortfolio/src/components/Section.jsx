import { motion } from 'framer-motion';

const Section = ({ 
  children, 
  id, 
  className = "",
  delay = 0 
}) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      className={`py-20 md:py-32 container mx-auto px-4 md:px-6 ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default Section;
