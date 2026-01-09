import { motion } from 'framer-motion';

const Section = ({ 
  children, 
  id, 
  className = "",
  delay = 0 
}) => {
  return (
    <div className="relative w-full group/section">
        {/* Subtle ambient glow on scroll */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-blue/[0.03] to-transparent opacity-0 group-hover/section:opacity-100 transition-opacity duration-1000 pointer-events-none" />
        
        <motion.section
        id={id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
        className={`py-24 md:py-32 lg:py-40 relative z-10 container mx-auto px-6 md:px-12 max-w-7xl ${className}`}
        >
        {children}
        </motion.section>
        
        {/* Enhanced Section Divider with shimmer */}
        <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
        </div>
    </div>
  );
};

export default Section;
