import { motion } from 'framer-motion';

const Section = ({ 
  children, 
  id, 
  className = "",
  delay = 0 
}) => {
  return (
    <div className="relative w-full">
        <motion.section
          id={id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
          className={`py-20 md:py-24 lg:py-32 relative z-10 container mx-auto px-6 md:px-12 max-w-7xl ${className}`}
        >
          {children}
        </motion.section>
        
        {/* Minimal section divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
    </div>
  );
};

export default Section;
