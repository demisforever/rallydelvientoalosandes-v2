# Rally del Viento a los Andes — Experience Guidelines

> Version: 1.0
> Last updated: August 2026

---

# Mission

Rally del Viento a los Andes is not just a Mountain Bike race.

It is a four-day experience where nature, teamwork, sacrifice and adventure transform every participant.

The website should never feel like an event registration page.

It should feel like the beginning of an unforgettable journey.

---

# Core Concept

> We are not selling a race.

We are selling a life-changing experience.

The visitor should want to participate before reading any technical information.

---

# Project Constraints

This project is maintained by a single developer.

Design decisions must consider long-term maintenance.

Avoid solutions that require expensive infrastructure or unnecessary recurring costs.

Whenever multiple solutions provide a similar user experience, prefer the one that:

- is simpler to maintain;
- has lower hosting costs;
- reduces bandwidth usage;
- avoids vendor lock-in.

The goal is to create a premium experience without premium infrastructure costs.

---

# Brand Personality

The brand should feel:

- Authentic
- Adventurous
- Premium
- Human
- Patagonian
- Powerful
- Emotional

Avoid feeling:

- Corporate
- Institutional
- Generic
- Cold
- Overly technological
- Futuristic

---

# Emotional Goals

When someone enters the website they should feel:

- Adrenaline
- Curiosity
- Excitement
- Respect for nature
- Desire to explore
- Sense of achievement
- Team spirit
- Freedom
- Personal growth

The website should communicate movement, effort and reward.

---

# Storytelling

Every section of the website should tell a story.

The visitor's emotional journey should be:

1. Curiosity
2. Excitement
3. Challenge
4. Adventure
5. Teamwork
6. Camp Experience
7. Achievement
8. Registration

Do not expose all information immediately.

Build curiosity.

---

# Visual Identity

## Overall Style

Dark.

Elegant.

Cinematic.

Premium.

Inspired by outdoor adventure documentaries.

The interface should breathe.

Use large photographs.

Avoid visual noise.

---

# Photography

Prioritize real photography.

Preferred subjects:

- Cyclists in action
- Dust
- Rocks
- Mountain landscapes
- Camp
- Fire
- Cordero a la estaca
- Team celebrations
- Finish line
- Sunrise
- Sunset
- Drone photography

Avoid:

- Stock photos
- Artificial poses
- Studio photography
- White backgrounds
- Generic MTB images

---

# Regional Identity

One of the strongest differentiators of Rally del Viento a los Andes is its location.

The website should celebrate the identity of Northern Neuquén and avoid generic mountain imagery whenever possible.

Whenever illustrations, silhouettes or decorative elements are used, they should represent real landmarks and elements from the region.

## Geographic Identity

Place names are part of the visual identity.

References to Huinganco, Varvarco, Los Cerrillos, Cerro Corona, Cordillera del Viento and Volcán Domuyo should appear naturally throughout the website as subtle cartographic elements.

These labels should never dominate the interface.

Instead, they should feel like annotations on an expedition map.

Possible implementations include:

- Small labels integrated into landscape illustrations.
- Subtle captions along decorative dividers.
- Interactive tooltips on the footer silhouette.
- Background map-style annotations with low opacity.

The objective is to reinforce the authenticity of the location without interrupting the user experience.

## Footer Silhouette

The footer should contain a minimalist panoramic silhouette inspired by the real landscape of the race.

Rather than using generic mountains, it should represent the identity of the event.

Possible elements include:

- Cerro Corona (main landmark)
- Cordillera del Viento
- Volcán Domuyo
- Native forests of Huinganco
- A mountain biker climbing a trail
- A condor flying above the mountains
- A small camp with tents
- A campfire
- Steam inspired by Aguas Calientes
- Native vegetation and rocky terrain

The illustration should feel subtle and elegant.

It should not compete with the content.

It should reinforce the emotional connection with the place.

## Design Principles

The illustration should:

- Span the full width of the page.
- Be monochromatic.
- Use clean vector shapes.
- Feel timeless.
- Blend naturally into the layout.
- Work as a background element rather than the main attraction.

Avoid:

- Generic mountain silhouettes.
- Large bicycles or bike parts.
- Overly detailed illustrations.
- Cartoon-style graphics.
- Decorative elements unrelated to Northern Neuquén.

## Narrative

The silhouette should quietly tell the story of the event.

It should evoke the feeling of travelling across the mountains through the three stages:

Huinganco → Varvarco → Los Cerrillos → Huinganco

The goal is that someone familiar with the region immediately recognizes its landscape, while everyone else perceives it as a unique and authentic place.

---

# Video

The homepage should open with a cinematic video.

Recommended duration:

15–20 seconds.

Possible shots:

- Drone
- Wheels
- Dust
- Camp
- Mountains
- Cyclists
- Finish line
- Nature
- Fire
- Teamwork

Avoid:

- Interviews
- Text inside the video
- Slow introductions

The visitor should immediately feel immersed.

---

# Colors

## Primary Background

```css
#0F0F10
```

## Secondary Background

```css
#171717
```

## Surface

```css
#222222
```

## Primary Text

```css
#FFFFFF
```

## Secondary Text

```css
#D8D8D8
```

## Accent Color

Inspired by Patagonia dust.

Warm earth tones.

Example:

```css
#C08A45
```

## Red

Use sparingly.

Only for:

- CTA
- Important notifications
- Registration

## Blue

Use only when referencing the logo.

Never use large blue sections.

---

# Typography

Main Headlines

- Bebas Neue (or equivalent)

Secondary Typography

- Space Grotesk
- Manrope
- General Sans

Characteristics:

- Strong
- Clean
- Highly readable

Avoid decorative fonts.

---

# Layout

Large spacing.

Large margins.

Big photography.

Minimal text.

Avoid cards whenever possible.

Content should feel immersive.

---

# Components

Preferred:

- Full-width sections
- Edge-to-edge photography
- Large CTA buttons
- Timeline
- Interactive maps
- Elevation profiles

Avoid:

- Tiny cards
- Excessive borders
- Heavy shadows
- Glassmorphism

---

# Animations

Animations should be subtle.

Preferred:

- Fade
- Reveal
- Slow Parallax
- Image Zoom
- Scroll-based animations

Avoid:

- Bounce
- Flip
- Spinning elements
- Flashy transitions

Animations should reinforce immersion.

Never distract the user.

---

# Maps

Maps are one of the most important sections.

Each stage should include:

- Interactive map
- GPX download
- Distance
- Elevation gain
- Estimated time
- Terrain information

Future idea:

Allow exporting directly to GPS devices.

---

# Camp Experience

The camp deserves its own section.

It represents the emotional heart of the event.

Show:

- Campfires
- Cordero a la estaca
- Team dinners
- Rest
- Friendships
- Mountains
- Night sky

The visitor should imagine being there.

---

# Sponsors

Sponsors should be elegant.

Monochromatic by default.

Full color on hover.

Do not compete with the event identity.

---

# Results

Results should be searchable.

Data source:

Static JSON files.

Possible filters:

- Edition
- Stage
- Category
- Team
- Rider

No database is required.

---

# Tone of Voice

Write like an invitation to an adventure.

Not like a technical manual.

Instead of:

"Stage 2 has 65 km."

Prefer:

"Stage 2 takes riders deep into the mountains through one of the most spectacular landscapes in northern Patagonia."

---

# Inspiration

Inspired by:

- Patagonia
- Red Bull Bike
- Cape Epic
- UCI Mountain Bike World Series

Without copying any of them.

The website should have its own identity.

---

# Accessibility

Maintain excellent contrast.

Keyboard navigation.

Responsive design.

Optimized images.

Fast loading.

Accessibility is part of the experience.

---

# Final Principle

Every design decision should answer one question:

> "Does this make the visitor want to experience Rally del Viento a los Andes?"

If the answer is no,

rethink the design.

# Performance Philosophy

Performance is part of the user experience.

The website should feel lightweight and responsive.

Whenever possible:

- Lazy load heavy assets.
- Prioritize perceived performance.
- Avoid unnecessary JavaScript.
- Keep animations GPU-friendly.
- Optimize images before adding new ones.

Users should never feel that visual quality comes at the cost of responsiveness.