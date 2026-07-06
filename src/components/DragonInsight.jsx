import { DecodeText, RUNIC } from "@/components/DecodeText";

export const DragonInsight = ({ label, text }) => (
  <div className="dragon-insight">
    <span className="dragon-insight-claw" aria-hidden="true" />
    <DecodeText as="span" glyphs={RUNIC} className="dragon-insight-label" text={label} />
    <p className="dragon-insight-text">{text}</p>
  </div>
);
