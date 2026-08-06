# Decisions

## 2026-08-04

### Hero

## Hero Video

The hero section should prioritize immersion while remaining cost-effective.

Preferred source order:

1. Self-hosted optimized video (if infrastructure allows it).
2. Embedded YouTube video when hosting costs or bandwidth make self-hosting impractical.

If YouTube is used:

- Hide player controls.
- Hide branding whenever possible.
- Maintain a cinematic appearance.
- Avoid layouts that expose black borders.
- Preserve visual quality across desktop and mobile.

Performance and long-term maintenance are more important than technical purity.


---

### Mapas

Se utilizará un único componente interactivo para las tres etapas.
MapLibre.
No Google Maps.

---

### Resultados

JSON.
Sin Base de Datos.

---

### Hosting

No CDN.
Priorizar bajo costo.

---

## Frontend Stack

React 19

Vite 7

TypeScript

Tailwind CSS v4

Framer Motion

MapLibre GL

React Router

## Package Manager

npm

## Formatting

Prettier

ESLint