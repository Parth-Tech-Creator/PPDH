import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { projects } from '../../constants/data';
import SectionTitle from '../Panels/SectionTitle';
import PlanetCard from '../Cards/PlanetCard';
import ProjectModal from './ProjectModal';
import ParticleField from '../Animations/ParticleField';
import ScrollReveal from '../Animations/ScrollReveal';

/**
 * "Projects" reimagined as a small planetary field — order doesn't imply
 * ranking here, so there are no 01/02/03 markers, just a field to explore.
 */
const ProjectsOrbit = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="relative overflow-hidden px-6 py-28 sm:px-10 lg:px-20">
      <ParticleField count={40} seedOffset={200} />

      <div className="relative mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Sector 02 — Project Array"
          title="Every project is a world of its own."
          description="Each planet below is a shipped project. Click one to dock and pull up the full mission report — stack, source, and a live link."
        />

        <div className="mt-16 flex flex-wrap items-start justify-center gap-x-10 gap-y-16 sm:gap-x-14">
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.08} direction="up">
              <PlanetCard project={project} onOpen={setSelected} />
            </ScrollReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsOrbit;
