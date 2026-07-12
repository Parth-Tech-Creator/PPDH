import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { timeline } from '../../constants/data';
import SectionTitle from '../Panels/SectionTitle';
import ScrollReveal from '../Animations/ScrollReveal';

/**
 * A vertical "galaxy" of stars, one per milestone. Older entries sit dim
 * and small; the current one shines and pulses. The connecting line fills
 * in as the section scrolls past, so the path visibly follows the reader.
 */
const MissionTimeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.75', 'end 0.4'],
  });

  return (
    <section className="relative px-6 py-28 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-3xl">
        <SectionTitle
          eyebrow="Sector 04 — Mission Timeline"
          title="The log so far."
          description="Each star is a milestone. The brightest one is where I am right now."
        />

        <div ref={containerRef} className="relative mt-16 pl-10">
          <div className="absolute left-[7px] top-0 h-full w-px bg-white/10" />
          <motion.div
            className="absolute left-[7px] top-0 w-px origin-top bg-gradient-to-b from-violet via-blue to-cyan"
            style={{ height: '100%', scaleY: scrollYProgress }}
          />

          <ul className="flex flex-col gap-14">
            {timeline.map((entry, i) => {
              const brightness = 0.4 + (i / (timeline.length - 1)) * 0.6;
              return (
                <ScrollReveal key={entry.id} as="li" delay={i * 0.05} className="relative">
                  <span
                    className="absolute -left-10 top-1 flex h-4 w-4 items-center justify-center"
                    aria-hidden="true"
                  >
                    {entry.current && (
                      <span
                        className="absolute h-4 w-4 rounded-full border border-cyan"
                        style={{ animation: 'pulse-ring 1.8s ease-out infinite' }}
                      />
                    )}
                    <span
                      className="h-2 w-2 rounded-full bg-cyan-soft"
                      style={{
                        opacity: entry.current ? 1 : brightness,
                        boxShadow: entry.current
                          ? '0 0 14px 4px rgba(103,232,249,0.8)'
                          : `0 0 6px 1px rgba(103,232,249,${brightness * 0.5})`,
                      }}
                    />
                  </span>

                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-mist">
                    {entry.date}
                  </p>
                  <h3
                    className="font-display mt-1 text-lg"
                    style={{ opacity: entry.current ? 1 : 0.65 + brightness * 0.35, color: '#f2f4ff' }}
                  >
                    {entry.title}
                  </h3>
                  <p className="mt-1 max-w-xl text-sm leading-relaxed text-mist">
                    {entry.description}
                  </p>
                </ScrollReveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MissionTimeline;
