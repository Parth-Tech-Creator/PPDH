import { motion } from 'framer-motion';

const DIRECTIONS = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { y: 0, x: 40 },
  right: { y: 0, x: -40 },
  none: { y: 0, x: 0 },
};

/**
 * Fades + slides a child into place the first time it enters the viewport.
 * Wrap any section content in this instead of hand-rolling IntersectionObserver
 * logic per component.
 */
const ScrollReveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  className = '',
  as = 'div',
  once = true,
}) => {
  const offset = DIRECTIONS[direction] ?? DIRECTIONS.up;
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
};

export default ScrollReveal;
