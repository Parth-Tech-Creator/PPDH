import { useEffect, useRef, useState } from 'react';

/**
 * Tracks the mouse in both raw pixel coordinates and normalized -1..1
 * coordinates (relative to viewport center) — the latter is what you want
 * for parallax / 3D camera nudging so it stays resolution-independent.
 */
export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0, nx: 0, ny: 0 });
  const frame = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        const nx = (e.clientX / window.innerWidth) * 2 - 1;
        const ny = (e.clientY / window.innerHeight) * 2 - 1;
        setPosition({ x: e.clientX, y: e.clientY, nx, ny });
      });
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMove);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  return position;
};
