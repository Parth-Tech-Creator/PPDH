import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { navLinks, socials } from '../../constants/data';
import { useScrollSection } from '../../hooks/useScrollSection';
import MagneticButton from '../Buttons/MagneticButton';
import NeonButton from '../Buttons/NeonButton';

const SECTION_IDS = navLinks.map((l) => l.id);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSection(SECTION_IDS);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed inset-x-0 top-4 z-40 flex justify-center px-4"
    >
      <nav
        className={`glass flex w-full max-w-3xl items-center justify-between rounded-full px-3 py-2 transition-all duration-300 sm:px-5 ${
          scrolled ? 'shadow-[0_8px_30px_rgba(0,0,0,0.4)]' : ''
        }`}
      >
        <a href="#home" data-cursor-hover className="font-display px-2 text-sm text-ink">
          COSMOS<span className="text-cyan">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.filter((l) => l.id !== 'contact').map((link) => (
            <li key={link.id}>
              <MagneticButton strength={10}>
                <a
                  href={`#${link.id}`}
                  data-cursor-hover
                  className={`relative rounded-full px-3.5 py-2 font-mono text-[11px] uppercase tracking-wide transition-colors ${
                    activeId === link.id ? 'text-ink' : 'text-mist hover:text-ink'
                  }`}
                >
                  {link.label}
                  {activeId === link.id && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-0 -z-10 rounded-full bg-white/8"
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    />
                  )}
                </a>
              </MagneticButton>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <NeonButton as="a" href={`#contact`} variant="primary" className="!px-4 !py-2 text-[10px]">
            Contact
          </NeonButton>
        </div>

        <button
          type="button"
          data-cursor-hover
          onClick={() => setMobileOpen((o) => !o)}
          className="flex h-9 w-9 items-center justify-center rounded-full text-ink md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="glass absolute left-4 right-4 top-16 flex flex-col gap-1 rounded-2xl p-3 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileOpen(false)}
                className={`rounded-xl px-4 py-3 font-mono text-xs uppercase tracking-wide ${
                  activeId === link.id ? 'bg-white/8 text-ink' : 'text-mist'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={socials.resumeUrl}
              className="mt-1 rounded-xl px-4 py-3 font-mono text-xs uppercase tracking-wide text-cyan"
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
