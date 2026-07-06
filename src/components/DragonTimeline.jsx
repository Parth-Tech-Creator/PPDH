import { DecodeText, RUNIC } from "@/components/DecodeText";

// Fill each [bracketed] note with a real sentence in your own voice.
const milestones = [
  {
    year: "Origin",
    title: "Hardware & Robotics",
    note: "[Where the instinct to take things apart and see how they work started — IoT, embedded systems, Raspberry Pi builds.]",
  },
  {
    year: "Growth",
    title: "Full-Stack Development",
    note: "[Learning to build systems end-to-end instead of just the layer people see.]",
  },
  {
    year: "Now",
    title: "AI / ML",
    note: "[What's pulling you deeper into AI/ML right now, in one or two sentences.]",
  },
];

export const DragonTimeline = () => (
  <section className="dragon-timeline-section">
    <DecodeText as="h2" glyphs={RUNIC} className="dragon-title dragon-title--sm" text="Origin Of The Realm" />
    <div className="dragon-timeline">
      {milestones.map((m, i) => (
        <div key={i} className="dragon-timeline-node">
          <span className="dragon-timeline-dot" />
          <span className="dragon-timeline-year">{m.year}</span>
          <h4 className="dragon-timeline-title">{m.title}</h4>
          <p className="dragon-timeline-note">{m.note}</p>
        </div>
      ))}
    </div>
  </section>
);
