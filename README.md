# NeuroBalance AI Portal

A modern concept landing page for **NeuroBalance AI**, an ambient digital companion that promotes healthier technology habits through subtle interventions instead of aggressive restrictions.

## Recommended Editor Extensions

If you are using VS Code or Cursor, install these first:

- `ESLint` (`dbaeumer.vscode-eslint`)
- `Tailwind CSS IntelliSense` (`bradlc.vscode-tailwindcss`)
- `Prettier - Code formatter` (`esbenp.prettier-vscode`)
- `Error Lens` (`usernamehw.errorlens`) optional but useful

## How To Run

Requirements:

- Node.js `20.9+` or newer
- `npm` `10+`

Commands:

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

Useful extra commands:

```bash
npm run lint
npm run build
```

## Project Architecture

### Product architecture

The portal presents NeuroBalance AI as a single calm system with four layers:

1. `Behavior Sensing` gathers lightweight digital habit signals.
2. `Pattern Engine` detects distraction, focus, and recovery rhythms.
3. `Reflective Memory` connects behavior with emotional outcomes and journaling.
4. `Ambient Presence` surfaces soft interventions through the orb and habit landscape.

### Code architecture

```text
src/
  app/
    globals.css                # Global theme, gradients, utilities, motion helpers
    layout.tsx                 # Fonts + metadata shell
    page.tsx                   # Entry page for the landing portal
  components/
    portal/
      ambient-orb.tsx          # Floating ambient orb state indicator
      habit-landscape.tsx      # Hero visualization with avatar + growing task structures
      insight-card.tsx         # Reusable card for insight / memory callouts
      landing-page.tsx         # Main page composition and section layout
      section-shell.tsx        # Shared section heading wrapper
  lib/
    portal-content.ts          # Centralized content and section data
```

## Stack

- `Next.js 16`
- `React 19`
- `Tailwind CSS 4`
- `Framer Motion`
- `lucide-react`

## Design Direction

- Soft greens, warm neutrals, and muted blue accents
- Calm glassmorphism panels with subtle gradients
- Breathing and drift animations instead of gamified motion
- Responsive landing page focused on clarity and emotional calm

## Notes

- The hero section includes the requested `Habit Landscape` visual.
- The floating orb represents the ambient system state: `Calm`, `Drift`, and `Intervention`.
- The content structure covers hero, problem, solution, workflow, features, privacy, vision, and footer.
