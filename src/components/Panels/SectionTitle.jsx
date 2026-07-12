import ScrollReveal from '../Animations/ScrollReveal';

/**
 * Consistent section header: a mono "eyebrow" label (sector name / index)
 * above a large gradient display heading. Every major section uses this
 * so the rhythm of the page stays predictable while the content changes.
 */
const SectionTitle = ({ eyebrow, title, description, align = 'left' }) => {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';

  return (
    <ScrollReveal className={`flex max-w-2xl flex-col gap-3 ${alignment}`}>
      {eyebrow && (
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-gradient text-3xl font-semibold sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="text-sm leading-relaxed text-mist sm:text-base">{description}</p>
      )}
    </ScrollReveal>
  );
};

export default SectionTitle;
