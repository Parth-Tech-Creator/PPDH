import { useEffect, useState } from 'react';

/**
 * Tracks raw viewport mouse position (px) alongside normalized -1..1
 * coordinates, the latter being what 3D scenes want for parallax/camera
 * drift. Falls back to the center on touch devices where mousemove never
 * fires.
 */
export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0, nx: 0, ny: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = -(e.clientY / window.innerHeight) * 2 + 1;
      setPosition({ x: e.clientX, y: e.clientY, nx, ny });
    };
    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return position;
};