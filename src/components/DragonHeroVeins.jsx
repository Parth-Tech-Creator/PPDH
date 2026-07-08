export const DragonHeroVeins = () => (
  <svg className="dragon-hero-veins" viewBox="0 0 1200 300" preserveAspectRatio="none" aria-hidden="true">
    {/* left side: blue flowing line rising toward the title, plus one ambient purple branch */}
    <path d="M120,300 L120,190 L170,160 L170,60" className="dragon-hero-vein dragon-hero-vein--flow" />
    <circle cx="170" cy="60" r="4" className="dragon-hero-vein-node dragon-hero-vein-node--blue" />

    <path d="M60,300 L60,220 L20,190" className="dragon-hero-vein dragon-hero-vein--purple" />
    <circle cx="20" cy="190" r="3.5" className="dragon-hero-vein-node dragon-hero-vein-node--purple" />

    {/* right side: mirrored blue flow, plus an ambient amber branch */}
    <path d="M1080,300 L1080,190 L1030,160 L1030,60" className="dragon-hero-vein dragon-hero-vein--flow" />
    <circle cx="1030" cy="60" r="4" className="dragon-hero-vein-node dragon-hero-vein-node--blue" />

    <path d="M1140,300 L1140,220 L1180,190" className="dragon-hero-vein dragon-hero-vein--yellow" />
    <circle cx="1180" cy="190" r="3.5" className="dragon-hero-vein-node dragon-hero-vein-node--yellow" />
  </svg>
);
