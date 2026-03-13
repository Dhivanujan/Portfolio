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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: delay, ease: [0.25, 0.4, 0.25, 1] }}
          className={`scroll-mt-24 py-14 sm:py-16 md:py-18 lg:py-20 relative z-10 container mx-auto px-6 md:px-10 max-w-6xl ${className}`}
        >
          {children}
        </motion.section>
        
        {/* Enhanced section divider */}
        <div className="absolute bottom-0 left-0 right-0">
          {/* Main gradient line */}
          <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent opacity-60" />
          {/* Accent glow */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-32 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
          {/* Decorative dots */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 flex items-center gap-1">
            <div className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/50" />
            <div className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
          </div>
        </div>
    </div>
  );
};

export default Section;
