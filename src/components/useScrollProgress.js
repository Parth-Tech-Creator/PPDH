import { useEffect, useState } from 'react';

/**
 * Observes each section id in `sectionIds` and returns whichever is most
 * visible in the viewport right now. Drives the active nav-link underline
 * and can be reused by any section that needs to know "am I in view".
 */
export const useScrollProgress = (sectionIds = []) => {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? null);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin: '-15% 0px -15% 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
};