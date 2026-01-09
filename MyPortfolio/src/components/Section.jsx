import { motion } from 'framer-motion';

const Section = ({ 
  children, 
  id, 
  className = "",
  delay = 0 
}) => {
  return (
    <div className="relative w-full group">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
        
        <motion.section
        id={id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
        className={`py-32 md:py-48 relative z-10 container mx-auto px-6 md:px-12 max-w-7xl ${className}`}
        >
        {children}
        </motion.section>
        
        {/* Soft Glowing Divider */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent blur-[1px]" />
    </div>
  );
};

export default Section;
