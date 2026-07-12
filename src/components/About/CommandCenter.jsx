import { about, profile } from '../../constants/data';
import SectionTitle from '../Panels/SectionTitle';
import GlassPanel from '../Panels/GlassPanel';
import HUDPanel from '../Panels/HUDPanel';
import ScrollReveal from '../Animations/ScrollReveal';

const CommandCenter = () => {
  return (
    <section id="about" className="relative px-6 py-28 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-5xl">
        <SectionTitle eyebrow="Sector 06 — Command Center" title="About the pilot." />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <ScrollReveal direction="right">
            <GlassPanel glow className="h-full">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan">
                Identity confirmed
              </p>
              <h3 className="font-display mt-2 text-2xl text-ink">{profile.name}</h3>
              <p className="text-sm text-mist">{profile.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-mist">{profile.bio}</p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {about.stats.map((stat) => (
                  <HUDPanel key={stat.label} label={stat.label} value={stat.value} />
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {about.researchInterests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full border border-violet-soft/30 bg-violet/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-violet-soft"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </GlassPanel>
          </ScrollReveal>

          <div className="flex flex-col gap-8">
            <ScrollReveal delay={0.05}>
              <h4 className="font-mono text-xs uppercase tracking-[0.25em] text-mist">
                Flight Log — Experience
              </h4>
              <div className="mt-4 flex flex-col gap-5">
                {about.experience.map((role) => (
                  <div key={role.role} className="border-l border-violet/30 pl-4">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="font-display text-ink">{role.role}</p>
                      <p className="font-mono text-[10px] text-mist">{role.period}</p>
                    </div>
                    <p className="text-sm text-cyan">{role.org}</p>
                    <p className="mt-1 text-sm leading-relaxed text-mist">{role.description}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h4 className="font-mono text-xs uppercase tracking-[0.25em] text-mist">
                Training — Education
              </h4>
              <div className="mt-4 flex flex-col gap-4">
                {about.education.map((edu) => (
                  <div key={edu.degree} className="border-l border-cyan/30 pl-4">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="font-display text-ink">{edu.degree}</p>
                      <p className="font-mono text-[10px] text-mist">{edu.period}</p>
                    </div>
                    <p className="text-sm text-mist">{edu.school}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommandCenter;
