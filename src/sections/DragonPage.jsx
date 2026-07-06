import { DecodeText, RUNIC } from "@/components/DecodeText";
import { DragonProjectCard } from "@/components/DragonProjectCard";
import "./dragon.css";

// PolicyLens is filled in with what's known — replace every [bracketed] note
// with your own words before this goes live. The other three are placeholders
// built on the exact same template; duplicate one for a 5th project if you want it.
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
    title: "Project Two",
    pitch: "[One-line pitch — what it does, in plain language.]",
    tags: ["Tag1", "Tag2", "Tag3"],
    image: "/projects/placeholder.png",
    spark: "[Where did the idea come from?]",
    build: "[Your approach, and the real challenge you hit.]",
    whyTools: "[Why these specific tools, over the alternatives?]",
    video: "",
    live: "",
    deployNote: "Not deployed yet — [what's left to ship it]",
    github: "",
    qa: [{ q: "[A question you'd expect in an interview about this]", a: "[Your answer]" }],
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

export const DragonPage = () => {
  return (
    <div className="dragon-page">
      {/* ambient circuit veins behind everything */}
      <svg className="dragon-veins" viewBox="0 0 1200 900" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,80 L200,80 L240,140 L520,140 L560,60 L900,60" />
        <path d="M1200,420 L950,420 L910,360 L620,360 L580,490 L280,490" />
        <path d="M0,680 L180,680 L220,620 L560,620" />
        <path d="M1200,780 L1000,780 L960,830 L700,830" />
      </svg>

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

      <section className="dragon-projects">
        {projects.map((p, i) => (
          <DragonProjectCard key={i} project={p} />
        ))}
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
              [PolicyLens was a team effort with Parth, Ayush, and Bhupender — this is a natural
              place to describe your actual role: what you owned, what decisions you drove, how you
              kept things moving.]
            </p>
          </div>
          <div className="dragon-personality-card">
            <span className="dragon-section-label">Commitment</span>
            <p>
              [Describe what "seeing something through" looks like for you — a project you stuck
              with past the point it got hard.]
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
    </div>
  );
};

export default DragonPage;
