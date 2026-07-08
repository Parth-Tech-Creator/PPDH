export const SideRails = () => (
  <>
    <svg
      className="dragon-rail dragon-rail--left"
      viewBox="0 0 120 2200"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M20,0 L20,300 L60,340 L60,700 L10,740 L10,1100 L50,1140 L50,1500 L20,1540 L20,1900 L55,1940 L55,2200" />
      <circle cx="20" cy="300" r="5" className="rail-node rail-node--blue" />
      <circle cx="60" cy="700" r="5" className="rail-node rail-node--purple" />
      <circle cx="10" cy="1100" r="5" className="rail-node rail-node--yellow" />
      <circle cx="50" cy="1500" r="5" className="rail-node rail-node--blue" />
      <circle cx="55" cy="1940" r="5" className="rail-node rail-node--purple" />
    </svg>
    <svg
      className="dragon-rail dragon-rail--right"
      viewBox="0 0 120 2200"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M100,0 L100,260 L60,300 L60,660 L110,700 L110,1060 L70,1100 L70,1460 L100,1500 L100,1860 L65,1900 L65,2200" />
      <circle cx="60" cy="300" r="5" className="rail-node rail-node--purple" />
      <circle cx="110" cy="700" r="5" className="rail-node rail-node--yellow" />
      <circle cx="70" cy="1100" r="5" className="rail-node rail-node--blue" />
      <circle cx="100" cy="1500" r="5" className="rail-node rail-node--purple" />
      <circle cx="65" cy="1900" r="5" className="rail-node rail-node--yellow" />
    </svg>
  </>
);
