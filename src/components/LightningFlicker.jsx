import { useMemo } from "react";

// One big bolt path, tall and jagged, meant to span a large chunk of a section
const boltPath =
  "M60,0 L40,90 L75,90 L20,220 L55,220 L0,400 L45,340 L15,340 L48,190 L20,190 L60,0";

export const LightningFlicker = () => {
  const bolt = useMemo(
    () => ({
      top: 5 + Math.random() * 15,
      left: 10 + Math.random() * 65,
      delay: Math.random() * 10,
      duration: 16 + Math.random() * 10,
    }),
    []
  );

  return (
    <div className="dragon-lightning-field" aria-hidden="true">
      <div
        className="dragon-flash-glow"
        style={{
          top: `${bolt.top}%`,
          left: `${bolt.left}%`,
          animationDelay: `${bolt.delay}s`,
          animationDuration: `${bolt.duration}s`,
        }}
      />
      <svg
        className="dragon-bolt"
        viewBox="0 0 80 400"
        width="220"
        height="620"
        style={{
          top: `${bolt.top}%`,
          left: `${bolt.left}%`,
          animationDelay: `${bolt.delay}s`,
          animationDuration: `${bolt.duration}s`,
        }}
      >
        <path d={boltPath} stroke="var(--dragon-accent2)" strokeWidth="2.5" fill="none" />
      </svg>
    </div>
  );
};
