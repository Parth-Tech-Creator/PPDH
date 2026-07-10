import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

/**
 * Boots a single Lenis smooth-scroll instance for the whole app and drives
 * it from a shared requestAnimationFrame loop. Mount once at the App root.
 * Returns the instance via a ref in case a section (e.g. a pinned GSAP
 * ScrollTrigger animation) needs to read or sync against it later.
 */
export const useLenis = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return lenisRef;
};