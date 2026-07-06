import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

/**
 * DecodeText
 * Renders scrambled "unknown language" glyphs that resolve into real text
 * the moment the element scrolls into view (not on page load).
 *
 * Reusable across all three realms — just pass a different glyph pool:
 *  - Dragon: runic-style unicode block
 *  - Machine: katakana / symbol glitch set
 *  - Human: swap glyphs for a real Latin word first, then call this with English
 *
 * Usage:
 *  <DecodeText as="h1" text="The Dragon Realm" glyphs={RUNIC} className="dragon-title" />
 */

export const RUNIC = "ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁᛃᛇᛈᛉᛊᛏᛒᛖᛗᛚᛜᛞᛟ";
export const GLITCH = "ｱｲｳｴｵｶｷｸｹｺ01#$%&<>/=+";

export const DecodeText = ({
  text,
  glyphs = RUNIC,
  as: Tag = "span",
  className = "",
  speed = 32,
  holdFrames = 14,
  threshold = 0.4,
}) => {
  const [containerRef, inView] = useInView({ threshold, triggerOnce: true });
  const [display, setDisplay] = useState(() =>
    text
      .split("")
      .map((c) => (c === " " ? " " : glyphs[0]))
      .join("")
  );

  useEffect(() => {
    if (!inView) return;

    let revealed = 0;
    let frame = 0;
    const total = text.length;

    const interval = setInterval(() => {
      frame++;
      if (frame > holdFrames) revealed = Math.min(total, revealed + 1);

      let out = "";
      for (let i = 0; i < total; i++) {
        if (i < revealed) out += text[i];
        else if (text[i] === " ") out += " ";
        else out += glyphs[Math.floor(Math.random() * glyphs.length)];
      }

      setDisplay(out);
      if (revealed >= total) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [inView, text, glyphs, speed, holdFrames]);

  return (
    <Tag ref={containerRef} className={className}>
      {display}
    </Tag>
  );
};
