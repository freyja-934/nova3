
# Nova 3 Website Implementation Plan

## Tech Stack (Pinned Versions)
- **Next.js**: `v14.1.3` (App Router)
- **React**: `v18.2.0`
- **Tailwind CSS**: `v3.4.1`
- **Radix UI**: `@radix-ui/react-*` latest stable
- **TypeScript**: `v5.4.x`
- **Framer Motion**: `v10.16.2`
- **PostCSS**: `v8.4.38`
- **Autoprefixer**: `v10.4.16`
- **Sanity CMS** (optional): latest

## Inspiration Reference: Solana Style Notes
Solana uses:
- A **futuristic, modular font** with angular, 1980s tech cues in its wordmark and logomark.
- A **signature gradient** combining neon-like purple (#9945FF) and green (#14F195) to evoke speed and modernity.
- A **dark, expressive layout** with subtle gradients, bold colors, 3D elements, and clean structure.

Nova 3 will adopt a similar vibe—dark, futuristic, polished, trust-inspiring—without mimicking directly.

## Directory Structure
```
nova3-website/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── projects/
│   │   └── [slug]/page.tsx
│   ├── contact/page.tsx
│   └── components/
├── public/
│   └── assets/
├── styles/
│   └── globals.css
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
├── package.json
```

## Setup Commands
```bash
npx create-next-app@14.1.3 nova3-website --app --typescript --tailwind --eslint
cd nova3-website
npm install framer-motion@10.16.2 @radix-ui/react-dialog @radix-ui/react-tooltip @radix-ui/react-popover @radix-ui/react-tabs @radix-ui/react-slot
```

## Tailwind Config (Cursor-Safe)
**tailwind.config.ts**
```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'nova-gradient-start': '#9945FF',
        'nova-gradient-end': '#14F195',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Orbitron', 'Rajdhani', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
```

**postcss.config.js**
```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

**styles/globals.css**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body {
  @apply bg-black text-white font-sans;
}
```

## Visual Design & Animation Strategy
- **Dark-themed layout** with **neon gradient accents** (purple → green), echoing Solana's visual language without duplication.
- Use **Orbitron/Rajdhani** for headings, **Inter/Satoshi** for body text for a modular, tech‑forward feel.
- **Gradient backgrounds** on hero or section headers using `bg-gradient-to-r from-nova-gradient-start to-nova-gradient-end`.
- **Subtle glassmorphism or 3D geometric patterns** as section dividers or decorative elements.
- **Framer Motion** for crisp scroll-triggered animations.

## Component Strategy
- **Navbar**: Transparent background, neon-hover gradient underline on links.
- **Hero Section**: Animated headline/subtext.
- **What We Do**: Radix Tabs or Cards with hover glow effects.
- **Projects Grid**: Animated reveal.
- **Project Detail**: Full page Radix Dialog.
- **Footer**: Gradient divider, dark layout.

## CMS Integration (Optional)
Sanity CMS allows clients to manage:
- Hero content
- Project details & images
- Testimonials

## Deployment
Deploy on Vercel. Add Plausible or GA4 in layout for analytics.
