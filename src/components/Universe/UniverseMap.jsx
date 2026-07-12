import ParticleField from '../Animations/ParticleField';
import ScrollReveal from '../Animations/ScrollReveal';
import SectionTitle from '../Panels/SectionTitle';

const RINGS = [
  { label: 'Projects', href: '#projects', radius: 46, duration: 22, color: '#8b5cf6' },
  { label: 'Stack', href: '#research', radius: 34, duration: 16, color: '#22d3ee' },
  { label: 'Timeline', href: '#about', radius: 22, duration: 11, color: '#4f7cff' },
];

/**
 * A short, deliberately calm section between the hero and the content
 * sections — it explains the site's own orbit metaphor (everything below
 * "orbits" the same core idea) with one lightweight animated diagram
 * instead of a second full 3D canvas, which would double the WebGL cost
 * for very little payoff this early in the page.
 */
const UniverseMap = () => {
  return (
    <section id="universe" className="relative overflow-hidden px-6 py-28 sm:px-10 lg:px-20">
      <ParticleField count={30} seedOffset={80} />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        <ScrollReveal direction="right">
          <SectionTitle
            eyebrow="Sector 01 — Universe"
            title="Everything here orbits one idea."
            description="Systems that can see, decide, and act. The rings alongside are a map of the site itself — each one is a section below, radiating out from that core."
          />
        </ScrollReveal>

        <ScrollReveal
          direction="left"
          className="relative mx-auto aspect-square w-full max-w-sm"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="h-4 w-4 rounded-full bg-gradient-to-br from-white to-cyan-soft shadow-[0_0_30px_10px_rgba(103,232,249,0.5)]" />
          </div>

          {RINGS.map((ring) => (
            <div
              key={ring.label}
              className="absolute rounded-full border border-white/10"
              style={{
                inset: `${50 - ring.radius}%`,
              }}
            >
              <div
                className="absolute inset-0"
                style={{ animation: `orbit-spin ${ring.duration}s linear infinite` }}
              >
                <a
                  href={ring.href}
                  data-cursor-hover
                  className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
                  style={{ animation: `orbit-spin-reverse ${ring.duration}s linear infinite` }}
                >
                  <span
                    className="flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1 font-mono text-[9px] uppercase tracking-wide text-ink"
                    style={{
                      background: `${ring.color}22`,
                      border: `1px solid ${ring.color}55`,
                    }}
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ background: ring.color, boxShadow: `0 0 6px 2px ${ring.color}88` }}
                    />
                    {ring.label}
                  </span>
                </a>
              </div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default UniverseMap;
