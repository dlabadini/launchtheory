# Launch Theory

An AI-focused agency website empowering companies to survive and thrive in a post-AI world, built with Next.js, TypeScript, and a space/rocket theme.

## Tech Stack

- **Framework**: Next.js 15 with Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Maia style, Cyan theme, Phosphor icons)
- **Animations**: Lottie React
- **Package Manager**: Bun
- **Linting**: oxlint, Biome

## Getting Started

### Prerequisites

- Bun installed ([install bun](https://bun.sh))

### Installation

```bash
bun install
```

### Development

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
bun run build
```

### Start Production Server

```bash
bun run start
```

### Linting

```bash
bun run lint
```

### Formatting

```bash
bun run format
```

## Project Structure

```
launchtheory/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Landing page
│   └── globals.css         # Global styles
├── components/
│   ├── hero.tsx            # Hero section
│   ├── feature-card.tsx   # Feature/service cards
│   ├── lottie-animation.tsx # Lottie wrapper
│   └── space-background.tsx # Space background component
├── lib/
│   └── utils.ts            # Utility functions
└── public/
    └── animations/          # Lottie JSON files
```

## Features

- 🚀 Space/rocket themed design
- 🌌 Dark theme with cyan accents
- ⚡ Fast performance with Turbopack
- 📱 Fully responsive
- 🎨 Modern UI with shadcn/ui components
- ✨ Smooth animations

## License

Private project

