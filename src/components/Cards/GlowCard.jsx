import { motion } from 'framer-motion';

/**
 * A lightweight card that lifts and picks up a colored glow on hover.
 * Used anywhere content is listed in a grid (certs, achievements, experience).
 */
const GlowCard = ({ children, className = '', accent = '#8b5cf6' }) => {
  return (
    <motion.div
      className={`glass relative rounded-xl p-5 ${className}`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      style={{
        '--glow-color': accent,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 12px 40px -12px ${accent}55`;
        e.currentTarget.style.borderColor = `${accent}66`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '';
        e.currentTarget.style.borderColor = '';
      }}
    >
      {children}
    </motion.div>
  );
};

export default GlowCard;
