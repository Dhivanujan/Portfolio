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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
      className={`py-24 md:py-36 relative z-10 container mx-auto px-6 md:px-12 max-w-7xl ${className}`}
    >
      {/* Subtle separator/decoration could go here */}
      {children}
    </motion.section>
  );
};

export default Section;
