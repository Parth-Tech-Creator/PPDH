import { useState } from "react";
import { ChevronDown, GitBranch, Play, ExternalLink, Construction } from "lucide-react";
import { DecodeText, RUNIC } from "@/components/DecodeText";
import { useInView } from "@/hooks/useInView";

/**
 * project shape:
 * {
 *   title, pitch, tags: [],
 *   image,
 *   spark, build, whyTools,   // the three case-study sections
 *   video, live, deployNote,  // action row — live OR deployNote, not both
 *   github,
 *   qa: [{ q, a }]
 * }
 */
export const DragonProjectCard = ({ project }) => {
  const [open, setOpen] = useState(false);
  const [openQA, setOpenQA] = useState(null);
  const [cardRef, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <div ref={cardRef} className={`dragon-card ${inView ? "dragon-card--in" : ""}`}>
      <span className="dragon-card-claw" aria-hidden="true" />

      <button
        type="button"
        className="dragon-card-header"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <div className="dragon-card-headline">
          <DecodeText as="h3" glyphs={RUNIC} className="dragon-card-title" text={project.title} />
          <p className="dragon-card-pitch">{project.pitch}</p>
          <div className="dragon-tags">
            {project.tags.map((t) => (
              <span key={t} className="dragon-tag">{t}</span>
            ))}
          </div>
        </div>
        <ChevronDown className={`dragon-chevron ${open ? "dragon-chevron--open" : ""}`} />
      </button>

      <div className={`dragon-card-body ${open ? "dragon-card-body--open" : ""}`}>
        <div className="dragon-card-body-inner">
          {project.image && (
            <img src={project.image} alt={project.title} className="dragon-card-image" />
          )}

          <div className="dragon-card-section">
            <span className="dragon-section-label">The Spark</span>
            <p>{project.spark}</p>
          </div>
          <div className="dragon-card-section">
            <span className="dragon-section-label">The Build</span>
            <p>{project.build}</p>
          </div>
          <div className="dragon-card-section">
            <span className="dragon-section-label">Why These Tools</span>
            <p>{project.whyTools}</p>
          </div>

          <div className="dragon-actions">
            {project.video && (
              <a href={project.video} target="_blank" rel="noopener noreferrer" className="dragon-btn">
                <Play size={16} /> Watch Demo
              </a>
            )}
            {project.live ? (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="dragon-btn">
                <ExternalLink size={16} /> Live
              </a>
            ) : (
              <div className="dragon-btn dragon-btn--muted">
                <Construction size={16} /> {project.deployNote || "Not deployed yet"}
              </div>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="dragon-btn dragon-btn--ghost">
                <GitBranch size={16} /> GitHub
              </a>
            )}
          </div>

          {project.qa?.length > 0 && (
            <div className="dragon-qa">
              <span className="dragon-section-label">Ask Me About It</span>
              {project.qa.map((item, i) => (
                <div key={i} className="dragon-qa-item">
                  <button
                    type="button"
                    className="dragon-qa-question"
                    onClick={() => setOpenQA(openQA === i ? null : i)}
                    aria-expanded={openQA === i}
                  >
                    {item.q}
                    <ChevronDown
                      className={`dragon-chevron dragon-chevron--sm ${openQA === i ? "dragon-chevron--open" : ""}`}
                    />
                  </button>
                  {openQA === i && <p className="dragon-qa-answer">{item.a}</p>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
