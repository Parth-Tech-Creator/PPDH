import { forwardRef, useState } from 'react';
import { motion } from 'framer-motion';

const VARIANT_STYLES = {
  primary:
    'bg-gradient-to-r from-violet to-blue text-ink border-transparent shadow-[0_0_30px_rgba(139,92,246,0.35)] hover:shadow-[0_0_44px_rgba(139,92,246,0.55)]',
  secondary:
    'bg-panel text-ink border-white/10 hover:border-cyan/40 hover:shadow-[0_0_24px_rgba(34,211,238,0.2)]',
  outline:
    'bg-transparent text-ink border-violet-soft/50 hover:border-cyan-soft hover:shadow-[0_0_24px_rgba(103,232,249,0.2)]',
};

/**
 * The base button used everywhere on the site: Primary / Secondary /
 * Outline via `variant`, an optional leading icon, a `loading` spinner
 * state, a sweeping gradient sheen on hover, and a small particle burst
 * on click. Wrap in <MagneticButton> for cursor-pull behavior, or use
 * standalone for static placements (forms, cards).
 */
const NeonButton = forwardRef(
  ({ children, variant = 'primary', icon: Icon, loading = false, className = '', onClick, ...props }, ref) => {
    const [burst, setBurst] = useState(false);

    const handleClick = (e) => {
      setBurst(true);
      setTimeout(() => setBurst(false), 500);
      onClick?.(e);
    };

    return (
      <motion.button
        ref={ref}
        data-cursor="hover"
        whileTap={{ scale: 0.96 }}
        onClick={handleClick}
        disabled={loading}
        className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border px-7 py-3.5 font-display text-sm font-medium tracking-wide transition-[colors,box-shadow] duration-300 disabled:opacity-70 ${VARIANT_STYLES[variant]} ${className}`}
        {...props}
      >
        {/* sweeping gradient sheen */}
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

        {/* click particle burst */}
        {burst &&
          Array.from({ length: 8 }).map((_, i) => {
            const angle = (i / 8) * Math.PI * 2;
            return (
              <motion.span
                key={i}
                className="pointer-events-none absolute left-1/2 top-1/2 h-1 w-1 rounded-full bg-cyan-soft"
                initial={{ x: 0, y: 0, opacity: 1 }}
                animate={{ x: Math.cos(angle) * 40, y: Math.sin(angle) * 40, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            );
          })}

        {loading ? (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
        ) : (
          <>
            {Icon && <Icon className="relative z-10 h-4 w-4" />}
            <span className="relative z-10">{children}</span>
          </>
        )}
      </motion.button>
    );
  }
);

NeonButton.displayName = 'NeonButton';
export default NeonButton;