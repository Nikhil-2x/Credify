# Credify – Micro-Credential Aggregator (Prototype)

An eye-catching React + React Three Fiber landing prototype for a Micro-Credential Aggregator platform. Use it in your hackathon pitch to showcase a modern 3D hero, scroll-driven storytelling, and verification/value-prop highlights.

## What’s included

- 3D Hero built with React Three Fiber + Drei
- Smooth scroll animations via GSAP ScrollTrigger
- Responsive sections: Hero, Features, Verification, Employer portal, CTA
- Clean dark theme polish

## Run locally

1. Install deps

```bash
npm i
```

2. Start dev server

```bash
npm run dev
```

3. Open the shown local URL in your browser.

## Add a Sketchfab model (optional)

- Download a GLTF/GLB from Sketchfab that matches your theme (e.g., a shield/badge, blockchain cube, or digital passport).
- Place the file under `src/assets/models/yourModel.glb`.
- Pass the relative URL to `HeroScene` in `Landing.jsx`:

```jsx
<HeroScene modelUrl={"/src/assets/models/yourModel.glb"} />
```

If no model is provided, a premium-looking animated torus-knot badge is used as a fallback.

## Customization tips

- Edit copy in `src/pages/Landing.jsx` to reflect NCVET, NSQF mapping, and your unique proposition.
- Adjust theme colors in `src/App.css` under the CSS variables.
- Add logos (DigiLocker, Skill India Digital) to the Features section as simple images or SVGs.

## Pitch talking points

- Unify all micro-credentials into one verified learner profile
- Verification via DigiLocker/Skill India/Blockchain proofs (pluggable)
- Stackable, NSQF-aligned pathways that convert micro-credentials into careers
- Employer portal for rapid validation and skill-based hiring

## License

Prototype code for demo use during hackathons. Ensure you have rights for any 3D assets you import.
