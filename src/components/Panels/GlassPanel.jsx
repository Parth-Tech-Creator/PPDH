const Corner = ({ position }) => {
  const base = 'absolute h-3 w-3 border-violet-soft/60 transition-all duration-300';
  const positions = {
    'top-left': 'top-2 left-2 border-t border-l',
    'top-right': 'top-2 right-2 border-t border-r',
    'bottom-left': 'bottom-2 left-2 border-b border-l',
    'bottom-right': 'bottom-2 right-2 border-b border-r',
  };
  return <span className={`${base} ${positions[position]}`} aria-hidden="true" />;
};

/**
 * The glass surface used for project panels, HUD cards, and modals.
 * Corner brackets read as "targeting reticle" rather than a plain rounded
 * rectangle — small detail that reinforces the HUD language site-wide.
 */
const GlassPanel = ({ children, className = '', corners = true, glow = false, as: Tag = 'div', ...rest }) => {
  return (
    <Tag
      className={`glass relative rounded-2xl p-6 ${
        glow ? 'shadow-glow-violet' : ''
      } ${className}`}
      {...rest}
    >
      {corners && (
        <>
          <Corner position="top-left" />
          <Corner position="top-right" />
          <Corner position="bottom-left" />
          <Corner position="bottom-right" />
        </>
      )}
      {children}
    </Tag>
  );
};

export default GlassPanel;
