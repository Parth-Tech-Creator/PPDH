import { useEffect, useState } from 'react';

/**
 * Observes every section with an id from `sectionIds` and returns whichever
 * one currently has the most visible area on screen. Drives the active nav
 * link and the "current sector" HUD readout.
 */
export const useScrollSection = (sectionIds = []) => {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? null);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const ratios = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.intersectionRatio);
        });
        let bestId = activeId;
        let bestRatio = 0;
        ratios.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });
        if (bestRatio > 0) setActiveId(bestId);
      },
      { threshold: [0.1, 0.25, 0.5, 0.75, 1] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds.join(',')]);

  return activeId;
};
