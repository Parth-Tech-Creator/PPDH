import { useMemo } from "react";

export const EmberField = ({ count = 26 }) => {
  const embers = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 12 + Math.random() * 12,
        size: 2 + Math.random() * 3,
      })),
    [count]
  );

  return (
    <div className="dragon-embers" aria-hidden="true">
      {embers.map((e, i) => (
        <span
          key={i}
          className="dragon-ember"
          style={{
            left: `${e.left}%`,
            width: `${e.size}px`,
            height: `${e.size}px`,
            animationDelay: `${e.delay}s`,
            animationDuration: `${e.duration}s`,
          }}
        />
      ))}
    </div>
  );
};
