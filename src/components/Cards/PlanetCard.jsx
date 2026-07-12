import { useState } from 'react';
import { motion } from 'framer-motion';
import { withAlpha } from '../../utils/helpers';

/**
 * Renders one project as a small orbital system: a dashed orbit ring, an
 * orbiting satellite dot, and a glowing planet at the center. Clicking
 * "docks" with it — the colored circle below shares a layoutId with the
 * matching element in ProjectModal, so Framer Motion animates one directly
 * into the other instead of just fading a dialog in.
 */
const PlanetCard = ({ project, onOpen }) => {
  const [hovered, setHovered] = useState(false);
  const diameter = 108 * project.size;

  return (
    <button
      type="button"
      data-cursor-hover
      onClick={() => onOpen(project)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group flex flex-col items-center gap-4 bg-transparent"
      aria-label={`Open ${project.name} project details`}
    >
      <div
        className="relative flex items-center justify-center"
        style={{ width: diameter + 40, height: diameter + 40 }}
      >
        {/* orbit ring */}
        <span
          className="absolute rounded-full border border-dashed transition-colors duration-300"
          style={{
            inset: 20,
            borderColor: hovered ? withAlpha(project.accent, 0.5) : 'rgba(255,255,255,0.12)',
          }}
        />

        {/* satellite, orbiting continuously */}
        <span
          className="absolute"
          style={{
            inset: 20,
            animation: `orbit-spin ${Math.max(6, project.orbitDuration / 4)}s linear infinite`,
          }}
        >
          <span
            className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full"
            style={{ background: project.accent, boxShadow: `0 0 8px 2px ${withAlpha(project.accent, 0.7)}` }}
          />
        </span>

        {/* energy ring pulse on hover */}
        {hovered && (
          <span
            className="absolute rounded-full border"
            style={{
              inset: '30%',
              borderColor: withAlpha(project.accent, 0.6),
              animation: 'pulse-ring 1.4s ease-out infinite',
            }}
          />
        )}

        {/* the planet itself */}
        <motion.div
          layoutId={`planet-${project.id}`}
          className="relative rounded-full"
          style={{
            width: diameter,
            height: diameter,
            background: `radial-gradient(circle at 32% 28%, ${withAlpha(
              project.accent,
              0.95,
            )}, ${withAlpha(project.accent, 0.25)} 70%)`,
            boxShadow: hovered
              ? `0 0 60px 10px ${withAlpha(project.accent, 0.45)}`
              : `0 0 24px 2px ${withAlpha(project.accent, 0.2)}`,
          }}
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </div>

      <div className="max-w-[180px] text-center">
        <p className="font-display text-base text-ink">{project.name}</p>
        <p className="mt-1 font-mono text-[10px] uppercase tracking-wide text-mist">
          {project.tagline}
        </p>
      </div>
    </button>
  );
};

export default PlanetCard;
