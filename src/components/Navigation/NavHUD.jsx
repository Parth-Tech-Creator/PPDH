import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../../constants/data';
import { useScrollSection } from '../../hooks/useScrollSection';

const SECTION_IDS = navLinks.map((l) => l.id);

// Stable, deterministic "coordinates" per section — cosmetic, but consistent
// across reloads rather than random noise every render.
const COORDS = SECTION_IDS.map((_, i) => {
  const ra = (i * 47.3) % 24;
  const dec = -((i * 13.7) % 90);
  return `${ra.toFixed(1)}h / ${dec.toFixed(1)}°`;
});

/**
 * The one HUD element that stays on screen the whole time you're on the
 * page — a small nav-computer readout in the corner that updates as you
 * scroll, echoing the "piloting a spacecraft" premise instead of a plain
 * scroll-progress bar.
 */
const NavHUD = () => {
  const activeId = useScrollSection(SECTION_IDS);
  const index = SECTION_IDS.indexOf(activeId);
  const link = navLinks[index] ?? navLinks[0];

  return (
    <div className="pointer-events-none fixed bottom-5 left-5 z-30 hidden font-mono text-[10px] uppercase tracking-[0.2em] text-mist sm:block">
      <div className="glass rounded-lg px-4 py-2.5">
        <p className="text-[9px] text-mist-dim">Nav Computer</p>
        <AnimatePresence mode="wait">
          <motion.p
            key={link?.id}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25 }}
            className="mt-0.5 text-cyan"
          >
            Sector {String(Math.max(index, 0) + 1).padStart(2, '0')} — {link?.label}
          </motion.p>
        </AnimatePresence>
        <p className="mt-0.5 text-mist-dim">{COORDS[Math.max(index, 0)]}</p>
      </div>
    </div>
  );
};

export default NavHUD;
