# Tourice - Tours & Travel Booking Platform

A modern travel booking web application where users can explore destinations, browse curated tour packages, and book trips seamlessly. Built with Next.js, TypeScript, and Tailwind CSS.

**Live Demo:** [tourice-frontend-ts.vercel.app](https://tourice-frontend-ts.vercel.app/)

## Features

- **Tour Discovery** - Browse and search tour packages with real-time suggestions
- **Holiday Categories** - Explore tours by theme: Honeymoon, Wild Escapes, Pilgrimage
- **Booking System** - Authenticated booking flow with date selection, guest count, and fee calculation
- **User Authentication** - Sign up and login via NextAuth.js with session management
- **Booking History** - View and manage past bookings
- **Responsive Design** - Mobile-first layout with smooth scroll and skeleton loading
- **Dark Mode** - Toggle between light and dark themes
- **Animations** - Smooth transitions and carousels powered by Framer Motion and Swiper

## Tech Stack

| Category | Technologies |
|---|---|
| Framework | Next.js 15, React 18, TypeScript |
| Styling | Tailwind CSS, Framer Motion |
| State Management | Zustand, TanStack React Query |
| Authentication | NextAuth.js |
| HTTP Client | Axios |
| UI Components | Swiper, Lucide Icons, React Hot Toast, React Loading Skeleton |
| Validation | Zod, @t3-oss/env-nextjs |
| Smooth Scroll | Lenis |

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/shubhu2002/tourice-frontend-ts.git
cd tourice-frontend-ts

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env
```

Add the required environment variable:

```env
NEXT_PUBLIC_JWT_SECRET=your_jwt_secret
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
pnpm build
pnpm start
```

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start dev server with Turbopack |
| `pnpm build` | Create production build |
| `pnpm start` | Run production server |
| `pnpm lint` | Run ESLint |
| `pnpm lint:fix` | Auto-fix lint issues |
| `pnpm typecheck` | Run TypeScript type checking |
| `pnpm check` | Lint + typecheck combined |
| `pnpm format:write` | Format code with Prettier |
| `pnpm format:check` | Check code formatting |

## Project Structure

```
src/
├── pages/            # Next.js pages & API routes
│   ├── index.tsx     # Home page
│   ├── tours/        # Tour listing & detail pages
│   ├── bookings/     # User bookings page
│   ├── contact/      # Contact page
│   ├── about/        # About page
│   └── api/auth/     # NextAuth API route
├── components/       # React components
│   └── shared/       # Reusable components (Tour-Card, SearchBar, Booking, Login)
├── layout/           # App layout wrapper
├── store/            # Zustand state store
├── types/            # TypeScript type definitions
├── utils/            # API client, helpers, dark mode
├── constants/        # Static data & image URLs
└── styles/           # Global CSS
```

## API

The frontend connects to a REST API backend:

**Base URL:** `https://tourice-backend-ts.onrender.com/api/v1`

| Endpoint | Method | Description |
|---|---|---|
| `/tour/all` | GET | Fetch all tours |
| `/tour/search/id/:id` | GET | Get tour by ID |
| `/booking/search/:username` | GET | Get user bookings |
| `/booking/create` | POST | Create a booking |
| `/auth/register` | POST | Register a new user |
| `/auth/login` | POST | User login |

## Deployment

Deployed on [Vercel](https://vercel.com). Push to `main` triggers automatic deployments.
