import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { techStack } from '../../constants/data';
import SectionTitle from '../Panels/SectionTitle';
import ScrollReveal from '../Animations/ScrollReveal';

const CENTER = { x: 50, y: 50 };

/** Places the "Core" node at the hub and rings everything else around it. */
const useLayout = () => {
  return useMemo(() => {
    const core = techStack.find((t) => t.category === 'Core');
    const rest = techStack.filter((t) => t !== core);
    const radius = 36;

    const positions = new Map();
    if (core) positions.set(core.id, { ...CENTER });

    rest.forEach((node, i) => {
      const angle = (i / rest.length) * Math.PI * 2 - Math.PI / 2;
      positions.set(node.id, {
        x: CENTER.x + Math.cos(angle) * radius,
        y: CENTER.y + Math.sin(angle) * radius * 0.82, // slightly flattened ellipse for wide screens
      });
    });

    const edges = [];
    const seen = new Set();
    techStack.forEach((node) => {
      node.links.forEach((linkId) => {
        const key = [node.id, linkId].sort().join('-');
        if (seen.has(key)) return;
        seen.add(key);
        if (positions.has(node.id) && positions.has(linkId)) {
          edges.push({
            from: positions.get(node.id),
            to: positions.get(linkId),
            fromId: node.id,
            toId: linkId,
            key,
          });
        }
      });
    });

    return { positions, edges, core };
  }, []);
};

const TechConstellation = () => {
  const { positions, edges } = useLayout();
  const [activeId, setActiveId] = useState(null);
  const active = techStack.find((t) => t.id === activeId);

  return (
    <section id="research" className="relative px-6 py-28 sm:px-10 lg:px-20">
      <div className="relative mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Sector 03 — Technology Constellation"
          title="The stack, mapped like a sky."
          description="Every technology I reach for regularly, and how they connect. Hover a star to see what it's for."
          align="center"
        />

        <ScrollReveal className="relative mx-auto mt-16 aspect-[16/11] w-full max-w-4xl" delay={0.1}>
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
          >
            {edges.map((edge) => {
              const isConnected =
                activeId && (edge.fromId === activeId || edge.toId === activeId);
              const isDimmed = activeId && !isConnected;
              return (
                <line
                  key={edge.key}
                  x1={edge.from.x}
                  y1={edge.from.y}
                  x2={edge.to.x}
                  y2={edge.to.y}
                  stroke="url(#edgeGradient)"
                  strokeWidth={isConnected ? 0.35 : 0.15}
                  opacity={isDimmed ? 0.15 : isConnected ? 0.9 : 0.4}
                />
              );
            })}
            <defs>
              <linearGradient id="edgeGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#22d3ee" />
              </linearGradient>
            </defs>
          </svg>

          {techStack.map((node) => {
            const pos = positions.get(node.id);
            if (!pos) return null;
            const size = 34 + node.magnitude * 18;
            const isActive = activeId === node.id;

            return (
              <button
                key={node.id}
                type="button"
                data-cursor-hover
                onMouseEnter={() => setActiveId(node.id)}
                onMouseLeave={() => setActiveId((id) => (id === node.id ? null : id))}
                onFocus={() => setActiveId(node.id)}
                className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center bg-transparent"
                style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
              >
                <motion.span
                  className="rounded-full"
                  style={{
                    width: size,
                    height: size,
                    background:
                      'radial-gradient(circle at 35% 30%, #ffffff, #a78bfa 45%, transparent 75%)',
                  }}
                  animate={{
                    scale: isActive ? 1.4 : 1,
                    boxShadow: isActive
                      ? '0 0 30px 8px rgba(167,139,250,0.7)'
                      : '0 0 10px 2px rgba(167,139,250,0.35)',
                  }}
                  transition={{ duration: 0.25 }}
                />
                <span className="mt-2 font-mono text-[10px] uppercase tracking-wide text-mist">
                  {node.name}
                </span>
              </button>
            );
          })}
        </ScrollReveal>

        <div className="mx-auto mt-4 flex h-16 max-w-md items-center justify-center text-center">
          {active && (
            <motion.p
              key={active.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-mono text-xs text-mist"
            >
              <span className="text-cyan">{active.category}</span> — {active.description}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
};

export default TechConstellation;
