import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * Replaces the system cursor on fine-pointer devices. The outer ring uses a
 * looser spring than the inner dot so it visibly "catches up" — the effect
 * that reads as magnetic weight without any per-element JS.
 */
const CustomCursor = () => {
  const [isFinePointer, setIsFinePointer] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [showPulse, setShowPulse] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 200, damping: 22, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 200, damping: 22, mass: 0.6 });
  const dotX = useSpring(x, { stiffness: 700, damping: 40, mass: 0.3 });
  const dotY = useSpring(y, { stiffness: 700, damping: 40, mass: 0.3 });

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)');
    setIsFinePointer(mq.matches);
    const handleChange = (e) => setIsFinePointer(e.matches);
    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (!isFinePointer) return undefined;

    const handleMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target;
      setIsHovering(Boolean(target.closest('[data-cursor-hover]')));
    };
    const handleDown = () => {
      setIsClicking(true);
      setShowPulse(true);
      setTimeout(() => setShowPulse(false), 500);
    };
    const handleUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
    };
  }, [isFinePointer, x, y]);

  if (!isFinePointer) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[90]" aria-hidden="true">
      <motion.div
        className="absolute rounded-full border border-cyan/70 mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovering ? 56 : 32,
          height: isHovering ? 56 : 32,
          opacity: isClicking ? 0.4 : 0.9,
        }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      />
      <motion.div
        className="absolute h-1.5 w-1.5 rounded-full bg-cyan"
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
        animate={{ scale: isHovering ? 0 : 1 }}
      />
      {showPulse && (
        <motion.div
          className="absolute h-8 w-8 rounded-full border border-violet"
          style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
          initial={{ opacity: 0.8, scale: 0.6 }}
          animate={{ opacity: 0, scale: 2.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      )}
    </div>
  );
};

export default CustomCursor;
