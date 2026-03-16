# NG POLL

A Next.js 16 polling/voting app with Supabase backend.

## Tech Stack

- **Framework**: Next.js 16 (App Router) with React 19 and React Compiler
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + shadcn/ui (Radix primitives + CVA)
- **Animation**: Motion (Framer Motion)
- **Database**: Supabase (SSR + JS client)
- **Hosting**: Vercel
- **Package Manager**: bun (use `bun` for all install/run commands)
- **Dev server**: `bun --bun next dev`

## Project Structure

```
app/              # Next.js App Router pages
  (ask)/          # Home — question submission form
  admin/          # Admin dashboard (messages + votes tabs)
  auth/           # Login page
  vote/           # Full-screen voting page
  info/           # Help/support page
  settings/       # Settings page
  api/cron/       # Cron API route
components/
  header/         # App header with nav menu
  ui/             # Reusable UI components (shadcn + custom)
core/
  api/            # API client and types
  db/supabase/    # Supabase client (browser) and server helpers
  hooks/          # Custom React hooks
  theme/          # Theme provider and toggle
  utils.ts        # Utility functions (cn, etc.)
```

## Commands

```bash
bun install        # Install dependencies
bun run dev        # Start dev server
bun run build      # Production build
bun run lint       # ESLint
```

## Path Aliases

`@/*` maps to `./*` (project root)

## Conventions

- UI components live in `components/ui/` and follow shadcn patterns (CVA variants, `cn()` for merging classes)
- Page-specific components go in `app/<route>/components/`
- Server actions go in `actions.ts` files colocated with their page
- Use `"use client"` only where needed (interactive components)
- Fonts: Geist Sans (default), Geist Mono, Comforter Brush (decorative), Yeseva One (vote labels)
- App language is Russian (UI text is in Russian)
