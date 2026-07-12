import { useEffect, useState } from 'react';
import { useProgress } from '@react-three/drei';
import { AnimatePresence, motion } from 'framer-motion';
import { buildParticleField } from '../../utils/helpers';

const PHASES = [
  { at: 0, label: 'Initializing mission…' },
  { at: 25, label: 'Loading universe…' },
  { at: 55, label: 'Calibrating navigation…' },
  { at: 80, label: 'Powering engines…' },
  { at: 97, label: 'Ready for launch.' },
];

const stars = buildParticleField(90, 500);

/**
 * Sits on top of everything until the GLB (and any other queued assets)
 * finish loading. Progress comes straight from three.js's loading manager
 * via drei's useProgress — it's real, not a timed fake bar.
 */
const LoadingScreen = ({ onFinished }) => {
  const { progress, active } = useProgress();
  const [visible, setVisible] = useState(true);
  const [holdComplete, setHoldComplete] = useState(false);

  useEffect(() => {
    if (progress >= 100 && !active) {
      const t = setTimeout(() => setHoldComplete(true), 450);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [progress, active]);

  useEffect(() => {
    if (holdComplete) {
      const t = setTimeout(() => {
        setVisible(false);
        onFinished?.();
      }, 550);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [holdComplete, onFinished]);

  const phase =
    [...PHASES].reverse().find((p) => progress >= p.at)?.label ?? PHASES[0].label;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: 'easeInOut' }}
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {stars.map((s) => (
              <span
                key={s.id}
                className="animate-twinkle absolute rounded-full bg-white"
                style={{
                  top: `${s.top}%`,
                  left: `${s.left}%`,
                  width: `${s.size}px`,
                  height: `${s.size}px`,
                  animationDelay: `${s.delay}s`,
                  animationDuration: `${s.duration}s`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 flex w-[min(90vw,380px)] flex-col items-center gap-6">
            <div className="relative h-20 w-20">
              <div className="absolute inset-0 rounded-full border border-violet/30" />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-t-cyan border-r-transparent border-b-transparent border-l-transparent"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
              />
              <div className="absolute inset-3 rounded-full bg-gradient-to-br from-violet/40 to-cyan/20 blur-sm" />
              <div className="absolute inset-0 flex items-center justify-center font-mono text-xs text-ink">
                {Math.min(99, Math.floor(progress))}%
              </div>
            </div>

            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-mist">
              {phase}
            </p>

            <div className="h-[3px] w-full overflow-hidden rounded-full bg-panel">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-violet via-blue to-cyan"
                animate={{ width: `${Math.min(100, progress)}%` }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
            </div>

            <p className="font-display text-sm tracking-[0.4em] text-mist-dim">
              COSMOS&nbsp;REALM
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
