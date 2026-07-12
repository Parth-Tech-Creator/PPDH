import { useMemo } from 'react';
import { buildParticleField } from '../../utils/helpers';

/**
 * A field of small glowing dots that drift and twinkle. Pure CSS animation —
 * no canvas, no WebGL — so it's cheap enough to sit behind any number of
 * sections without competing with the 3D hero for GPU time.
 */
const ParticleField = ({ count = 60, seedOffset = 0, className = '' }) => {
  const particles = useMemo(
    () => buildParticleField(count, seedOffset),
    [count, seedOffset],
  );

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="animate-twinkle absolute rounded-full bg-cyan-soft"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            boxShadow: '0 0 6px 1px rgba(103, 232, 249, 0.6)',
          }}
        />
      ))}
    </div>
  );
};

export default ParticleField;
