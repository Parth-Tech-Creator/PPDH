import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { socials, profile } from '../../constants/data';
import MagneticButton from '../Buttons/MagneticButton';
import NeonButton from '../Buttons/NeonButton';
import SectionTitle from '../Panels/SectionTitle';

const LINKS = [
  { icon: FiGithub, href: socials.github, label: 'GitHub' },
  { icon: FiLinkedin, href: socials.linkedin, label: 'LinkedIn' },
  { icon: FiMail, href: `mailto:${socials.email}`, label: 'Email' },
];

const Footer = () => {
  return (
    <footer id="contact" className="relative border-t border-white/10 px-6 py-20 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          eyebrow="Sector 07 — Transmission"
          title="Open a channel."
          description={`Currently based in ${profile.location}. ${profile.availability}.`}
        />

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <NeonButton as="a" href={`mailto:${socials.email}`} variant="primary" icon={FiMail}>
            {socials.email}
          </NeonButton>
          <div className="flex gap-3">
            {LINKS.slice(0, 2).map(({ icon: Icon, href, label }) => (
              <MagneticButton key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor-hover
                  aria-label={label}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-lg text-mist transition-colors hover:border-cyan/50 hover:text-cyan"
                >
                  <Icon />
                </a>
              </MagneticButton>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/5 pt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-mist-dim sm:flex-row sm:items-center sm:justify-between">
          <span>Cosmos Realm — v1.0.0</span>
          <span className="flex items-center gap-2">
            <span className="animate-blink h-1.5 w-1.5 rounded-full bg-cyan" />
            Status: Online
          </span>
          <span>&copy; {new Date().getFullYear()} {profile.name}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
