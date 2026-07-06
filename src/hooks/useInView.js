import { useEffect, useRef, useState } from "react";

/**
 * useInView
 * Tracks whether a DOM node is currently visible in the viewport.
 *
 * @param {number} threshold - fraction of the element that must be visible (0-1)
 * @param {boolean} triggerOnce - if true, stops observing after first reveal
 * @returns [ref, inView] - attach ref to the element you want to watch
 */
export function useInView({ threshold = 0.25, triggerOnce = true } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (triggerOnce) observer.unobserve(el);
        } else if (!triggerOnce) {
          setInView(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, triggerOnce]);

  return [ref, inView];
}
