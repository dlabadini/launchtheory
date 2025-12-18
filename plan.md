# Transform Launch Theory to AI-Focused Agency Website

## Overview

Transform the existing static HTML portfolio site into a modern Next.js-based AI agency website with a space/rocket/launch theme, emphasizing empowering companies to survive and thrive in a post-AI world.

## Tech Stack Setup

### 1. Project Initialization

- Initialize Next.js 15+ project with TypeScript and Turbopack
- Configure Bun as package manager (`package.json` with Bun-specific settings)
- Set up project structure following Next.js App Router conventions

### 2. shadcn/ui Setup

- Run the exact command to initialize shadcn/ui with the specified preset:
  ```bash
  bunx --bun shadcn@latest create --preset "https://ui.shadcn.com/init?base=base&style=maia&baseColor=neutral&theme=cyan&iconLibrary=phosphor&font=figtree&menuAccent=subtle&menuColor=default&radius=small&template=next" --template next
  ```
  
  This configures:
  - Base: base
  - Style: maia
  - Base Color: neutral
  - Theme: cyan
  - Icon Library: phosphor (from phosphoricons.com)
  - Font: figtree
  - Menu Accent: subtle
  - Menu Color: default
  - Radius: small
  - Template: next

### 3. Linting & Formatting Configuration

- Configure **oxlint** for fast linting
- Configure **oxlint-tsgolint** for Go-style TypeScript linting
- Configure **Biome** for formatting and additional linting
- Set up pre-commit hooks (optional but recommended)

### 4. Dependencies

- Install Lottie React (`lottie-react`) for animations
- Install shadcn/ui components as needed
- Install additional dependencies for space/rocket theme visuals
- **Phosphor Icons**: Use icons from [phosphoricons.com](https://phosphoricons.com/) - the shadcn preset will configure this, but we'll specifically use space/rocket themed icons like Rocket, Planet, Star, Orbit, Satellite, etc.

## Design & Content

### 5. Landing Page Structure

Create a single-page landing experience with sections:

**Hero Section**
- Compelling headline playing on "launch" theme
- Subheadline about empowering companies in post-AI world
- CTA buttons with space/rocket imagery
- Lottie animation of rocket launch or space theme

**Value Proposition Section**
- Key services/offerings (AI strategy, implementation, transformation)
- Space-themed icons/illustrations
- "Escape velocity" messaging

**Why Us / Differentiators**
- Unique approach to AI adoption
- Space/rocket metaphors (trajectory, orbit, mission control, etc.)

**Case Studies / Results** (optional, can be placeholder)
- Success stories with space-themed presentation

**Contact CTA**
- Final call-to-action with contact form or CTA button

### 6. Theme Implementation

- Color scheme: Dark space theme with cyan accents (matching shadcn preset)
- Typography: Figtree font (from shadcn preset)
- Icons: **Phosphor Icons** from [phosphoricons.com](https://phosphoricons.com/) - specifically using space/rocket themed icons (Rocket, Planet, Star, Orbit, Satellite, etc.) as configured in the shadcn preset
- Animations: Lottie animations for rocket launches, space travel, etc.
- Visual elements: Stars, orbits, trajectories, rocket ships throughout

### 7. Component Architecture

- Reusable components in `components/` directory:
- `Hero` - Landing hero section
- `FeatureCard` - Service/value prop cards
- `LottieAnimation` - Wrapper for Lottie animations
- `SpaceBackground` - Animated space background component
- Navigation header (if needed)

## File Structure

```
launchtheory/
├── app/
│   ├── layout.tsx          # Root layout with shadcn theme
│   ├── page.tsx            # Landing page
│   └── globals.css         # Global styles + shadcn CSS
├── components/
│   ├── ui/                 # shadcn components
│   ├── hero.tsx
│   ├── feature-card.tsx
│   ├── lottie-animation.tsx
│   └── space-background.tsx
├── lib/
│   └── utils.ts            # shadcn utils
├── public/
│   └── animations/         # Lottie JSON files
├── bun.lockb               # Bun lockfile
├── package.json
├── tsconfig.json
├── next.config.ts          # Next.js config with Turbopack
├── biome.json              # Biome config
├── oxlint.json             # oxlint config
└── README.md
```

## Migration Strategy

### 8. Content Migration

- Extract key messaging from current site
- Transform portfolio content into AI agency messaging
- Preserve any relevant assets (images, logos) if applicable

### 9. Asset Management

- Move existing images to `public/images/` if needed
- Source or create Lottie animations for space/rocket theme
- Optimize assets for web performance

## Implementation Steps

1. **Initialize Next.js project** with TypeScript and Turbopack
2. **Set up Bun** configuration and install dependencies
3. **Initialize shadcn/ui** with specified preset
4. **Configure linting tools** (oxlint, oxlint-tsgolint, biome)
5. **Create base layout** with theme and navigation
6. **Build Hero section** with Lottie animation
7. **Create feature/service sections** with space theme
8. **Add contact/CTA sections**
9. **Implement responsive design** for mobile/tablet/desktop
10. **Optimize performance** (images, animations, code splitting)

## Key Files to Create/Modify

- `app/page.tsx` - Main landing page
- `app/layout.tsx` - Root layout with theme provider
- `components/hero.tsx` - Hero section component
- `components/feature-card.tsx` - Service cards
- `next.config.ts` - Turbopack configuration
- `package.json` - Dependencies and scripts
- Linting configs: `biome.json`, `oxlint.json`

## Notes

- Keep the stack lightweight as requested
- Focus on modern, clean design with space theme
- Ensure fast load times and smooth animations
- Make it mobile-responsive

