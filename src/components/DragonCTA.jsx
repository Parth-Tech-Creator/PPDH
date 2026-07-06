import { ArrowRight } from "lucide-react";
import { DecodeText, RUNIC } from "@/components/DecodeText";

export const DragonCTA = () => (
  <section className="dragon-cta">
    <DecodeText as="h2" glyphs={RUNIC} className="dragon-title dragon-title--sm" text="Enter My Lair" />
    <p className="dragon-subtitle">
      Want to talk about any of this, or bring me onto a team? Reach out.
    </p>
    {/* update this href once your contact section/page is back */}
    <a href="/#contact" className="dragon-cta-btn">
      Get in touch <ArrowRight size={18} />
    </a>
  </section>
);
