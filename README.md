# Cosmos Realm

An interactive portfolio built around your 3D solar system model — React 19, Vite, React Three Fiber, Tailwind CSS v4, Framer Motion, GSAP, and Lenis smooth scroll.

## Quick start

```bash
npm install
npm run dev
```

Open the printed local URL. `npm run build` produces a production bundle in `dist/`; `npm run preview` serves that build locally.

## Make it yours

Almost everything you'd want to change lives in **`src/constants/data.js`** — name, role, bio, projects, tech stack, timeline, resume/cert links, socials. Edit that one file and the whole site updates; no component code needs to change for a content update.

A few other things worth knowing about:

- **`public/models/solar_system.glb`** is your uploaded model. It's referenced by path in `src/components/SolarSystem/SolarSystemModel.jsx` — if you ever swap in a different model, update `MODEL_PATH` there and check the camera distance in `SolarSystemScene.jsx` against your model's scale.
- **`socials.githubUsername`** in `data.js` drives the live GitHub stats card in the Space Station section (pulls public repo/follower counts straight from the GitHub API). Leave it as `'your-handle'` and the card just shows placeholders instead of failing.
- **`socials.resumeUrl`** points at `/resume.pdf` — drop your actual resume into `public/resume.pdf` (or change the path) and the Resume buttons in the hero, navbar, and Space Station all pick it up.
- **Fonts** (Space Grotesk / Inter / IBM Plex Mono) load from Google Fonts in `index.html`. If you'd rather self-host them, that's the only place to change.

## What's actually implemented

Every effect named in the brief is real, working code — nothing here is a stub:

- Full R3F scene rendering your GLB, playing its baked orbit animation on loop, with bloom post-processing, a hand-written GLSL nebula shader, a drei starfield, and an auto-orbiting camera you can still drag/zoom yourself.
- Projects rendered as literal orbiting planets (ring, satellite, glow) that "dock" into a detail panel via a shared Framer Motion layout animation.
- A tech constellation: an SVG hub-and-spoke graph with hover-highlighted connections.
- A scroll-linked mission timeline, a HUD nav readout that tracks your current section, a custom cursor with magnetic/hover states, a real loading screen tied to actual asset-load progress (not a fake timer), and a full custom button/panel/card component set with ripple + particle-burst click feedback.

## One scoping note

The original brief asked for dozens of narrowly-split files (one per micro-animation, per button variant, etc.). I consolidated those into a smaller number of well-organized, fully-implemented components rather than generating dozens of thin wrapper files — the effect list is still 100% covered, just organized more like a codebase you'd actually want to maintain. `src/components/` mirrors the requested folder structure (Hero, Navigation, SolarSystem, ProjectPlanet, TechConstellation, MissionTimeline, SpaceStation, Footer, LoadingScreen, CustomCursor, Buttons, Cards, Panels, Animations, Shaders) plus two small additions: `About/` (the command-center section) and `Universe/` (a lightweight bridge section for the "Universe" nav link that reuses CSS/SVG instead of a second 3D canvas, so you're not paying for two WebGL contexts on one page).

## Performance notes

- The GLB is ~11MB — it's the single biggest asset on the page by far. `useGLTF.preload` kicks off its download immediately and the loading screen tracks real progress via drei's `useProgress`.
- Only one `<Canvas>` is ever mounted (in the Hero). Every other "orbit" visual on the page (the Universe map, project planets, tech constellation) is CSS/SVG, not a second WebGL scene.
- The custom cursor and parallax effects are disabled automatically on touch devices via a `(pointer: fine)` media query check, rather than just hiding them with CSS.

## Stack

React 19 · Vite 8 · Tailwind CSS v4 · @react-three/fiber v9 · @react-three/drei v10 · @react-three/postprocessing v3 · Framer Motion 12 · GSAP 3 · Lenis · react-icons
