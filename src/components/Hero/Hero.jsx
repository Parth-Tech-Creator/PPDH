import { useEffect, useRef } from 'react';
import { FiCompass, FiPlay, FiDownload, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { profile, socials } from '../../constants/data';
import SolarSystemScene from '../SolarSystem/SolarSystemScene';
import TypingText from '../Animations/TypingText';
import NeonButton from '../Buttons/NeonButton';

const HEADLINE_WORDS = profile.tagline.split(' ');

const Hero = () => {
  const headlineRef = useRef(null);

  // GSAP handles the headline specifically: a per-word 3D stagger reveal is
  // exactly the kind of timeline-based animation GSAP is built for, so it
  // does this one instead of Framer Motion (which drives everything else
  // in the hero) — the right tool for each job rather than one library
  // doing all of it.
  useEffect(() => {
    const words = headlineRef.current?.querySelectorAll('[data-word]');
    if (!words?.length) return undefined;

    const tl = gsap.timeline({ delay: 0.15 });
    tl.fromTo(
      words,
      { opacity: 0, y: 46, rotateX: -60, transformOrigin: '50% 100%' },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.9,
        ease: 'power4.out',
        stagger: 0.07,
      },
    );

    return () => tl.kill();
  }, []);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      {/* The solar system fills the entire hero as an immersive backdrop —
          text sits on top rather than boxed into a side column, so the
          model reads as the center of the page rather than a decoration. */}
      <div className="absolute inset-0">
        <SolarSystemScene />
      </div>

      {/* Left-weighted scrim so headline text stays legible over bright planets */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-void via-void/60 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-24 sm:px-10 lg:px-20">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.35em] text-cyan"
        >
          {profile.role} · {profile.location}
        </motion.p>

        <h1
          ref={headlineRef}
          className="font-display text-gradient mt-4 max-w-2xl text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl"
          style={{ perspective: 600 }}
        >
          {HEADLINE_WORDS.map((word, i) => (
            <span
              key={`${word}-${i}`}
              data-word
              className="inline-block will-change-transform"
              style={{ marginRight: '0.28em' }}
            >
              {word}
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 h-7 max-w-xl font-mono text-sm text-mist sm:text-base"
        >
          <TypingText words={profile.subtitleWords} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <NeonButton href="#universe" variant="primary" icon={FiCompass}>
            Explore Universe
          </NeonButton>
          <NeonButton href="#projects" variant="secondary" icon={FiPlay}>
            Start Mission
          </NeonButton>
          <NeonButton href={socials.resumeUrl} variant="outline" icon={FiDownload}>
            Resume
          </NeonButton>
          <NeonButton href="#contact" variant="ghost" icon={FiMail}>
            Contact
          </NeonButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist-dim">
          Scroll to descend
        </span>
        <div className="animate-float mx-auto mt-2 h-8 w-5 rounded-full border border-mist-dim/50">
          <span className="mx-auto mt-1.5 block h-1.5 w-1.5 rounded-full bg-cyan" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
