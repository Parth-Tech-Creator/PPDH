/**
 * One page-spanning circuit network instead of the old separate short
 * "side rails" + "hero veins" pieces. Reads top to bottom as: trunk lines
 * that deliberately break and resume elsewhere (the "disconnect" look),
 * horizontal stubs branching inward to different sections, a couple of
 * fully isolated floating fragments, and several points where a blue
 * segment actively flows upward rather than just glowing in place.
 */
export const DragonCircuitField = () => (
  <svg
    className="dragon-circuit-field"
    viewBox="0 0 1200 2200"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    {/* LEFT trunk — broken into disconnected segments */}
    <path className="dc-line dc-line--flow" d="M60,300 L60,180 L110,150 L110,20" />
    <path className="dc-line dc-line--purple" d="M40,520 L40,780 L90,810 L90,1050" />
    <path className="dc-line dc-line--flow" d="M70,1160 L70,1450 L30,1480 L30,1750" />
    <path className="dc-line dc-line--yellow" d="M55,1850 L55,2100" />

    {/* left stubs branching inward toward content */}
    <path className="dc-line dc-line--purple" d="M90,900 L220,900" />
    <path className="dc-line dc-line--yellow" d="M30,1600 L160,1600" />

    {/* RIGHT trunk — mirrored but not identical, its own breaks */}
    <path className="dc-line dc-line--flow" d="M1140,300 L1140,180 L1090,150 L1090,20" />
    <path className="dc-line dc-line--yellow" d="M1160,520 L1160,780 L1110,810 L1110,1050" />
    <path className="dc-line dc-line--flow" d="M1130,1160 L1130,1450 L1170,1480 L1170,1750" />
    <path className="dc-line dc-line--purple" d="M1145,1850 L1145,2100" />

    {/* right stubs */}
    <path className="dc-line dc-line--purple" d="M1110,900 L980,900" />
    <path className="dc-line dc-line--yellow" d="M1170,1600 L1040,1600" />

    {/* a long cross-page power rail loosely linking both sides */}
    <path className="dc-line dc-line--purple dc-line--thin" d="M300,1050 L900,1050" />

    {/* fully isolated fragments — the literal "disconnected" pieces */}
    <path className="dc-line dc-line--yellow" d="M600,1300 L600,1420" />
    <path className="dc-line dc-line--purple" d="M950,1900 L950,1980" />

    {/* nodes at key endpoints */}
    <circle cx="110" cy="20" r="5" className="dc-node dc-node--blue" />
    <circle cx="90" cy="1050" r="4" className="dc-node dc-node--purple" />
    <circle cx="220" cy="900" r="4" className="dc-node dc-node--purple" />
    <circle cx="160" cy="1600" r="4" className="dc-node dc-node--yellow" />
    <circle cx="30" cy="1750" r="5" className="dc-node dc-node--blue" />
    <circle cx="55" cy="2100" r="4" className="dc-node dc-node--yellow" />

    <circle cx="1090" cy="20" r="5" className="dc-node dc-node--blue" />
    <circle cx="1110" cy="1050" r="4" className="dc-node dc-node--yellow" />
    <circle cx="980" cy="900" r="4" className="dc-node dc-node--purple" />
    <circle cx="1040" cy="1600" r="4" className="dc-node dc-node--yellow" />
    <circle cx="1170" cy="1750" r="5" className="dc-node dc-node--blue" />
    <circle cx="1145" cy="2100" r="4" className="dc-node dc-node--purple" />

    <circle cx="600" cy="1300" r="3.5" className="dc-node dc-node--yellow" />
    <circle cx="950" cy="1900" r="3.5" className="dc-node dc-node--purple" />
  </svg>
);
