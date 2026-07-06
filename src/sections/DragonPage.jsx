import { DecodeText, RUNIC } from "@/components/DecodeText";
import { DragonProjectCard } from "@/components/DragonProjectCard";
import { DragonInsight } from "@/components/DragonInsight";
import { DragonHoard } from "@/components/DragonHoard";
import { DragonTimeline } from "@/components/DragonTimeline";
import { EmberField } from "@/components/EmberField";
import { ScrollVein } from "@/components/ScrollVein";
import { DragonCTA } from "@/components/DragonCTA";
import "./dragon.css";

// PolicyLens and Horizon are filled in with what's known — replace every
// [bracketed] note with your own words before this goes live. Project Three
// and Four are placeholders on the same template; tell me the real projects
// and I'll fill them in the same way.
const projects = [
  {
    title: "PolicyLens",
    pitch: "AI-based legal document summarizer with source-traceable answers.",
    tags: ["Python", "Flask", "React", "Mistral-7B (OpenRouter)", "MongoDB Atlas", "JWT / OAuth"],
    image: "/projects/policylens.png",
    spark:
      "[What made you want to build a legal-document tool specifically — was it the final-year project brief, a personal run-in with dense documents, or a teammate's idea? Say it in your own voice.]",
    build:
      "Built a multi-stage NLP pipeline that breaks a document down before summarizing it, so every generated line can be traced back to the exact passage it came from. Migrated the LLM backend to OpenRouter running Mistral-7B-Instruct, moved storage to MongoDB Atlas, and added Google OAuth with JWT for auth. [Add the one specific bug or wall you personally hit and how you got past it — this is the part interviewers actually remember.]",
    whyTools:
      "[Why Mistral-7B-Instruct over another model? Why MongoDB over a SQL option? Why a multi-stage pipeline instead of one summarization call? Write the real reasoning — that's what shows judgment, not the tool names themselves.]",
    video: "",
    live: "",
    deployNote: "Deployment to Vercel/Render planned — [update with real status]",
    github: "https://github.com/arbind0705/PolicyLens",
    qa: [
      {
        q: "Why not just summarize the whole document in one LLM call?",
        a: "[Your real answer — likely about traceability and accuracy holding up at document length.]",
      },
      {
        q: "What would you change if you rebuilt this today?",
        a: "[Your honest answer.]",
      },
    ],
  },
  {
    title: "Horizon",
    pitch: "A personality-development platform that recommends content through a local LLM.",
    tags: ["Python", "Flask", "React", "LLaMA 3.1"],
    image: "/projects/horizon.png",
    spark:
      "[This is the one that came from something personal — what history or part of your own personality drove you to build a tool about personal growth? Write the real story here, it's the most memorable part of this project.]",
    build:
      "Tags media for emotional themes and recommends personalized content through a local LLM, while tracking the user's growth over time through reflective AI coaching. [Add the specific technical challenge — getting the local model to run well, designing the tagging system, tuning the coaching prompts, whatever it actually was.]",
    whyTools:
      "[Why a local LLM (LLaMA 3.1) instead of an API-based model — likely privacy, cost, or control. Why Flask/React for this one specifically?]",
    video: "",
    live: "",
    deployNote: "Not deployed yet — [what's left to ship it]",
    github: "",
    qa: [
      { q: "Why build a personal-growth tool specifically?", a: "[Your honest answer.]" },
      { q: "How do you know the recommendations actually help someone?", a: "[Your answer.]" },
    ],
  },
  {
    title: "Project Three",
    pitch: "[One-line pitch]",
    tags: ["Tag1", "Tag2", "Tag3"],
    image: "/projects/placeholder.png",
    spark: "[Where did the idea come from?]",
    build: "[Your approach, and the real challenge you hit.]",
    whyTools: "[Why these specific tools?]",
    video: "",
    live: "",
    deployNote: "Not deployed yet — [what's left]",
    github: "",
    qa: [{ q: "[Likely interview question]", a: "[Your answer]" }],
  },
  {
    title: "Project Four",
    pitch: "[One-line pitch]",
    tags: ["Tag1", "Tag2", "Tag3"],
    image: "/projects/placeholder.png",
    spark: "[Where did the idea come from?]",
    build: "[Your approach, and the real challenge you hit.]",
    whyTools: "[Why these specific tools?]",
    video: "",
    live: "",
    deployNote: "Not deployed yet — [what's left]",
    github: "",
    qa: [{ q: "[Likely interview question]", a: "[Your answer]" }],
  },
];

// Scattered strength/insight badges — dropped between project cards rather
// than lumped into one block. Each [bracketed] text is a placeholder; write
// the real trait/story that connects to the project it sits next to.
const insights = [
  {
    afterIndex: 0,
    label: "Precision",
    text: "[A trait or habit that shows in how you approached PolicyLens — attention to traceability, patience with a messy pipeline, whatever's true.]",
  },
  {
    afterIndex: 1,
    label: "Curiosity",
    text: "[What building a personal-growth tool like Horizon says about how you think — your own words, not a resume line.]",
  },
  {
    afterIndex: 2,
    label: "Persistence",
    text: "[A moment you kept going on a project after it stopped being fun — the real test of commitment.]",
  },
];

export const DragonPage = () => {
  return (
    <div className="dragon-page">
      <ScrollVein />

      {/* ambient layers behind everything */}
      <svg className="dragon-veins" viewBox="0 0 1200 1600" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,80 L200,80 L240,140 L520,140 L560,60 L900,60" />
        <path d="M1200,420 L950,420 L910,360 L620,360 L580,490 L280,490" />
        <path d="M0,680 L180,680 L220,620 L560,620" />
        <path d="M1200,900 L1000,900 L960,950 L700,950" />
        <path d="M0,1200 L220,1200 L260,1140 L600,1140" />
        <path d="M1200,1400 L980,1400 L940,1450 L620,1450" />
      </svg>
      <EmberField />

      <header className="dragon-hero">
        <div className="dragon-eyes">
          <span className="dragon-eye" />
          <span className="dragon-eye" />
        </div>
        <DecodeText as="h1" glyphs={RUNIC} className="dragon-title" text="The Dragon Realm" />
        <p className="dragon-subtitle">
          Keeper of the biggest builds — the projects I'm proudest of, start to finish: the spark,
          the build, and everything that went wrong along the way.
        </p>
      </header>

      <DragonHoard />
      <DragonTimeline />

      <section className="dragon-projects">
        {projects.map((p, i) => {
          const insight = insights.find((ins) => ins.afterIndex === i);
          return (
            <div key={p.title} className="dragon-project-block">
              <DragonProjectCard project={p} />
              {insight && <DragonInsight label={insight.label} text={insight.text} />}
            </div>
          );
        })}
      </section>

      <section className="dragon-personality">
        <DecodeText
          as="h2"
          glyphs={RUNIC}
          className="dragon-title dragon-title--sm"
          text="Beyond The Code"
        />
        <div className="dragon-personality-grid">
          <div className="dragon-personality-card">
            <span className="dragon-section-label">Leadership</span>
            <p>
              [PolicyLens was a team effort with Parth, Ayush, and Bhupender — describe your actual
              role: what you owned, what decisions you drove, how you kept things moving.]
            </p>
          </div>
          <div className="dragon-personality-card">
            <span className="dragon-section-label">Commitment</span>
            <p>
              [What "seeing something through" looks like for you — a project you stuck with past
              the point it got hard.]
            </p>
          </div>
          <div className="dragon-personality-card">
            <span className="dragon-section-label">What's Next</span>
            <p>
              [Your real near-term goals — the internships you're targeting, the skills you're
              deepening, what you want to build next.]
            </p>
          </div>
        </div>
      </section>

      <DragonCTA />
    </div>
  );
};

export default DragonPage;
