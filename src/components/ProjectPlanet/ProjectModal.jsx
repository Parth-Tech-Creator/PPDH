import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';
import { withAlpha } from '../../utils/helpers';
import GlassPanel from '../Panels/GlassPanel';
import NeonButton from '../Buttons/NeonButton';

/**
 * The "docking bay" detail view. The colored orb at the top shares a
 * layoutId with the PlanetCard that was clicked, so Framer Motion morphs
 * the small orbiting planet directly into this panel's header.
 */
const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-void/80 backdrop-blur-sm" />

      <GlassPanel
        as={motion.div}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-lg"
        glow
      >
        <button
          type="button"
          data-cursor-hover
          onClick={onClose}
          aria-label="Close docking panel"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-mist transition-colors hover:text-ink"
        >
          <FiX />
        </button>

        <div className="flex items-center gap-4">
          <motion.div
            layoutId={`planet-${project.id}`}
            className="h-16 w-16 shrink-0 rounded-full"
            style={{
              background: `radial-gradient(circle at 32% 28%, ${withAlpha(
                project.accent,
                0.95,
              )}, ${withAlpha(project.accent, 0.25)} 70%)`,
              boxShadow: `0 0 40px 8px ${withAlpha(project.accent, 0.4)}`,
            }}
          />
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-mist">
              Docking sequence complete
            </p>
            <h3 className="font-display text-2xl text-ink">{project.name}</h3>
          </div>
        </div>

        <p className="mt-5 text-sm leading-relaxed text-mist">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-mist"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <NeonButton as="a" href={project.github} variant="secondary" icon={FiGithub}>
            Source
          </NeonButton>
          <NeonButton as="a" href={project.demo} variant="primary" icon={FiExternalLink}>
            Live Demo
          </NeonButton>
        </div>
      </GlassPanel>
    </motion.div>
  );
};

export default ProjectModal;
