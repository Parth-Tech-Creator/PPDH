/** Clamp a number between a min and max. */
export const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

/** Linear interpolation between a and b by t (0–1). */
export const lerp = (a, b, t) => a + (b - a) * t;

/** Map a value from one numeric range to another. */
export const mapRange = (value, inMin, inMax, outMin, outMax) =>
  outMin + ((value - inMin) * (outMax - outMin)) / (inMax - inMin);

/** Deterministic pseudo-random number from a seed, used for stable star fields. */
export const seededRandom = (seed) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

/** Build an array of `count` particles laid out with a stable pseudo-random seed. */
export const buildParticleField = (count, seedOffset = 0) =>
  Array.from({ length: count }, (_, i) => {
    const s = i + seedOffset;
    return {
      id: `p-${seedOffset}-${i}`,
      top: seededRandom(s * 12.9898) * 100,
      left: seededRandom(s * 78.233) * 100,
      size: 1 + seededRandom(s * 37.719) * 2.4,
      delay: seededRandom(s * 4.1414) * 4,
      duration: 2.5 + seededRandom(s * 91.345) * 3.5,
    };
  });

/** Format a hex color with an alpha channel, e.g. withAlpha('#8b5cf6', 0.2). */
export const withAlpha = (hex, alpha) => {
  const parsed = hex.replace('#', '');
  const bigint = parseInt(parsed, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
