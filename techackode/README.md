# Techackode

React + Vite + TypeScript app with a modern UI stack.

## Stack

| Layer | Package |
| --- | --- |
| Framework | React 19, Vite 8, TypeScript |
| Styling | Tailwind CSS v4 |
| Components | Shadcn UI (New York) |
| Animation | Framer Motion, GSAP |
| Icons | Lucide React |
| Carousel | Swiper |
| State | Zustand |
| Data | TanStack Query |
| 3D | React Three Fiber, Drei, Three.js |

## Scripts

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # ESLint
```

## Project structure

```
src/
  components/
    providers/   # TanStack Query provider
    sections/    # Page sections
    three/       # R3F scenes
    ui/          # Shadcn components
  lib/           # utils, query client
  stores/        # Zustand stores
```

## Add Shadcn components

```bash
npx shadcn@latest add <component>
```

Path alias `@/` points to `src/`.
