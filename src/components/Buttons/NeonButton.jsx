import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VARIANT_CLASSES = {
  primary:
    'bg-gradient-to-r from-violet to-blue text-ink border border-transparent shadow-[0_0_30px_rgba(139,92,246,0.35)]',
  secondary:
    'bg-panel-light/70 text-ink border border-cyan/40 shadow-[0_0_20px_rgba(34,211,238,0.15)]',
  outline: 'bg-transparent text-ink border border-violet-soft/50',
  ghost: 'bg-transparent text-mist border border-transparent hover:text-ink',
};

let particleSeed = 0;

/**
 * The one button component every CTA in the site should use. Handles its
 * own ripple + particle-burst click feedback so callers just pass a variant.
 */
const NeonButton = ({
  children,
  variant = 'primary',
  icon: Icon,
  iconOnly = false,
  loading = false,
  as = 'button',
  href,
  className = '',
  onClick,
  ...rest
}) => {
  const [ripples, setRipples] = useState([]);
  const [bursts, setBursts] = useState([]);

  const handleClick = (e) => {
    if (loading) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const rippleId = `${Date.now()}-${particleSeed++}`;
    setRipples((r) => [
      ...r,
      { id: rippleId, x: e.clientX - rect.left, y: e.clientY - rect.top },
    ]);
    setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== rippleId)), 650);

    const burstId = `${Date.now()}-${particleSeed++}`;
    const particles = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      angle: (i / 8) * Math.PI * 2,
    }));
    setBursts((b) => [
      ...b,
      { id: burstId, x: e.clientX - rect.left, y: e.clientY - rect.top, particles },
    ]);
    setTimeout(() => setBursts((b) => b.filter((bu) => bu.id !== burstId)), 700);

    onClick?.(e);
  };

  const Tag = href ? 'a' : as;

  return (
    <Tag
      href={href}
      data-cursor-hover
      onClick={handleClick}
      className={`group relative inline-flex select-none items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] transition-transform duration-200 active:scale-95 disabled:opacity-50 ${
        iconOnly ? 'aspect-square !p-3' : ''
      } ${VARIANT_CLASSES[variant]} ${className}`}
      disabled={loading}
      {...rest}
    >
      {/* animated gradient border sheen */}
      <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.25)_50%,transparent_80%)] bg-[length:250%_250%] animate-[drift-x_1.6s_linear_infinite]" />

      {loading ? (
        <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : (
        <>
          {Icon && <Icon className="relative z-10 text-base" />}
          {!iconOnly && <span className="relative z-10">{children}</span>}
        </>
      )}

      <AnimatePresence>
        {ripples.map((r) => (
          <motion.span
            key={r.id}
            className="pointer-events-none absolute rounded-full bg-white/40"
            style={{ left: r.x, top: r.y, translateX: '-50%', translateY: '-50%' }}
            initial={{ width: 0, height: 0, opacity: 0.6 }}
            animate={{ width: 220, height: 220, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        ))}
      </AnimatePresence>

      <AnimatePresence>
        {bursts.map((burst) =>
          burst.particles.map((p) => (
            <motion.span
              key={`${burst.id}-${p.id}`}
              className="pointer-events-none absolute h-1 w-1 rounded-full bg-cyan-soft"
              style={{ left: burst.x, top: burst.y }}
              initial={{ opacity: 1, x: 0, y: 0 }}
              animate={{
                opacity: 0,
                x: Math.cos(p.angle) * 34,
                y: Math.sin(p.angle) * 34,
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
          )),
        )}
      </AnimatePresence>
    </Tag>
  );
};

export default NeonButton;
