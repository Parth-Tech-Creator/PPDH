/**
 * A small labeled data readout, e.g. "ALTITUDE — 340km" styled like a
 * spacecraft instrument. Used for stats, nav coordinates, and status chips.
 */
const HUDPanel = ({ label, value, accent = 'cyan', className = '' }) => {
  const accentClass = accent === 'cyan' ? 'text-cyan' : accent === 'violet' ? 'text-violet-soft' : 'text-blue-soft';

  return (
    <div
      className={`glass rounded-lg px-4 py-3 ${className}`}
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-mist">{label}</p>
      <p className={`font-display mt-1 text-xl font-semibold ${accentClass}`}>{value}</p>
    </div>
  );
};

export default HUDPanel;
