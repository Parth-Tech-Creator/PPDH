import { DecodeText, RUNIC } from "@/components/DecodeText";

// Edit this list to match your actual stack — pulled from your resume/skills marquee for now.
const hoard = [
  "Python", "PyTorch", "TensorFlow", "scikit-learn", "LLMs",
  "React", "Flask", "MongoDB", "FAISS", "AWS", "C++", "DSA",
];

export const DragonHoard = () => (
  <section className="dragon-hoard-section">
    <DecodeText as="h2" glyphs={RUNIC} className="dragon-title dragon-title--sm" text="The Hoard" />
    <p className="dragon-subtitle">Every tool a dragon has taken the trouble to gather.</p>
    <div className="dragon-hoard-grid">
      {hoard.map((skill) => (
        <span key={skill} className="dragon-hoard-item">
          {skill}
        </span>
      ))}
    </div>
  </section>
);
