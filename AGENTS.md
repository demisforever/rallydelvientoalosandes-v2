# AGENTS.md

Before making ANY implementation decision, read in this order:

1. docs/01-experience-guidelines.md
2. docs/02-content-plan.md
3. docs/03-decisions.md
4. docs/04-site-architecture.md
5. docs/05-design-references.md

The Experience Guidelines always have higher priority than implementation details.

When there is uncertainty, preserve the intended experience rather than adding unnecessary functionality.

## Tech Stack

- React
- Vite
- TypeScript
- TailwindCSS
- Framer Motion
- React Router
- MapLibre GL
- GPX support

## General Rules

- Keep components small.
- Prefer composition over large components.
- Avoid unnecessary dependencies.
- Prioritize performance.
- Lazy load images and videos.
- Mobile-first.
- Accessibility is mandatory.

## UI Rules

- Follow the Experience Guidelines.
- Never use Bootstrap.
- Never use Material UI.
- Never use generic templates.
- Large photography is preferred over cards.
- Dark premium interface.
- Components should feel immersive.

## Code Style

- Functional components.
- Hooks only.
- Strong typing.
- Reusable UI components.
- Feature-based folder structure.

## Animations

Use Framer Motion.

Animations should:

- reinforce immersion
- never distract the user

Avoid:

- bounce
- flip
- excessive rotations

## Maps

Use MapLibre GL.

GPX files should be parsed dynamically.

Future support for downloadable GPX.

## Performance

Lighthouse score should be above 90.

Images:

- WebP
- AVIF when possible

Video:

- compressed MP4
- lazy loaded

Never autoplay videos outside the Hero section.

## Design Philosophy

Always prioritize storytelling over UI.

Every section must have a clear emotional purpose before adding visual elements.

The website should feel like an expedition through Northern Patagonia rather than an event brochure.