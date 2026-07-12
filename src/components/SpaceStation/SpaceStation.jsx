import { useEffect, useState } from 'react';
import { FiDownload, FiAward, FiFileText, FiStar, FiGithub } from 'react-icons/fi';
import { spaceStation, socials } from '../../constants/data';
import SectionTitle from '../Panels/SectionTitle';
import GlowCard from '../Cards/GlowCard';
import HUDPanel from '../Panels/HUDPanel';
import NeonButton from '../Buttons/NeonButton';
import ScrollReveal from '../Animations/ScrollReveal';

/** Pulls public, unauthenticated stats from the GitHub REST API (CORS-open). */
const useGithubStats = (username) => {
  const [stats, setStats] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!username || username === 'your-handle') {
      setStatus('unconfigured');
      return;
    }
    let cancelled = false;
    setStatus('loading');
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data) => {
        if (cancelled) return;
        setStats({ repos: data.public_repos, followers: data.followers });
        setStatus('ready');
      })
      .catch(() => {
        if (!cancelled) setStatus('error');
      });
    return () => {
      cancelled = true;
    };
  }, [username]);

  return { stats, status };
};

const SpaceStation = () => {
  const { stats, status } = useGithubStats(socials.githubUsername);

  return (
    <section className="relative px-6 py-28 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          eyebrow="Sector 05 — Orbital Station"
          title="Docking bay."
          description="Resume, credentials, and the paper trail — everything a recruiter or collaborator usually has to go dig for."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <ScrollReveal>
            <GlowCard accent="#8b5cf6" className="flex h-full flex-col justify-between">
              <div>
                <FiDownload className="text-2xl text-violet-soft" />
                <h3 className="font-display mt-3 text-lg text-ink">Resume</h3>
                <p className="mt-1 text-sm text-mist">
                  The full flight record — experience, skills, and education in one document.
                </p>
              </div>
              <NeonButton
                as="a"
                href={spaceStation.resume.url}
                variant="secondary"
                icon={FiDownload}
                className="mt-5 w-fit"
              >
                Download
              </NeonButton>
            </GlowCard>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <GlowCard accent="#22d3ee" className="flex h-full flex-col justify-between">
              <div>
                <FiGithub className="text-2xl text-cyan" />
                <h3 className="font-display mt-3 text-lg text-ink">GitHub Stats</h3>
                <p className="mt-1 text-sm text-mist">Live telemetry, pulled directly from GitHub.</p>
              </div>
              <div className="mt-5 flex gap-4">
                <HUDPanel
                  label="Repos"
                  value={status === 'ready' ? stats.repos : '—'}
                  accent="cyan"
                  className="flex-1"
                />
                <HUDPanel
                  label="Followers"
                  value={status === 'ready' ? stats.followers : '—'}
                  accent="violet"
                  className="flex-1"
                />
              </div>
              {status === 'unconfigured' && (
                <p className="mt-3 font-mono text-[10px] text-mist-dim">
                  Set `githubUsername` in constants/data.js for live numbers.
                </p>
              )}
            </GlowCard>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <GlowCard accent="#4f7cff" className="h-full">
              <FiFileText className="text-2xl text-blue-soft" />
              <h3 className="font-display mt-3 text-lg text-ink">Research Papers</h3>
              <ul className="mt-3 flex flex-col gap-3">
                {spaceStation.papers.map((paper) => (
                  <li key={paper.title} className="text-sm">
                    <a href={paper.url} data-cursor-hover className="text-ink underline decoration-blue-soft/50 underline-offset-4 hover:decoration-cyan">
                      {paper.title}
                    </a>
                    <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wide text-mist">
                      {paper.venue} · {paper.year}
                    </p>
                  </li>
                ))}
              </ul>
            </GlowCard>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <GlowCard accent="#a78bfa" className="h-full">
              <FiAward className="text-2xl text-violet-soft" />
              <h3 className="font-display mt-3 text-lg text-ink">Certificates &amp; Achievements</h3>
              <ul className="mt-3 flex flex-col gap-2">
                {spaceStation.certificates.map((cert) => (
                  <li key={cert.name} className="text-sm text-mist">
                    <span className="text-ink">{cert.name}</span> — {cert.issuer} ({cert.year})
                  </li>
                ))}
                {spaceStation.achievements.map((a) => (
                  <li key={a} className="flex items-start gap-2 text-sm text-mist">
                    <FiStar className="mt-0.5 shrink-0 text-cyan" /> {a}
                  </li>
                ))}
              </ul>
            </GlowCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default SpaceStation;
