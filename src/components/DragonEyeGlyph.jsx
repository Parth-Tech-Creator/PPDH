import { useEffect, useRef } from "react";

export const DragonEyeGlyph = ({ mirror = false }) => {
  const pupilRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      const el = containerRef.current;
      if (!el || !pupilRef.current) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = Math.max(-1, Math.min(1, (e.clientX - cx) / 500));
      const dy = Math.max(-1, Math.min(1, (e.clientY - cy) / 500));
      // only the pupil shifts a few px — the eye itself never rotates or swivels
      pupilRef.current.setAttribute("transform", `translate(${dx * 5}, ${dy * 3.5})`);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`dragon-eye-glyph ${mirror ? "dragon-eye-glyph--mirror" : ""}`}
    >
      <svg viewBox="0 0 200 100" className="dragon-eye-glyph-svg" aria-hidden="true">
        <defs>
          <radialGradient id="dragonIris" cx="46%" cy="42%" r="65%">
            <stop offset="0%" stopColor="#eafcff" />
            <stop offset="35%" stopColor="var(--dragon-accent2)" />
            <stop offset="68%" stopColor="var(--dragon-accent)" />
            <stop offset="100%" stopColor="#020c10" />
          </radialGradient>
        </defs>

        {/* dark lid/rim — the almond shape behind the iris */}
        <path d="M4,52 C40,4 160,4 196,52 C160,98 40,98 4,52 Z" className="dragon-eye-lid" />

        {/* iris */}
        <ellipse cx="100" cy="52" rx="47" ry="41" fill="url(#dragonIris)" />
        <ellipse cx="100" cy="52" rx="47" ry="41" className="dragon-eye-iris-ring" />

        {/* pupil + highlight — this group shifts slightly toward the pointer */}
        <g ref={pupilRef}>
          <path
            d="M100,14 C107,36 107,70 100,92 C93,70 93,36 100,14 Z"
            className="dragon-eye-pupil"
          />
          <ellipse cx="84" cy="30" rx="7" ry="10" className="dragon-eye-highlight" />
        </g>
      </svg>
    </div>
  );
};
