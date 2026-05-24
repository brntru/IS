# StudyPoint

A modern educational platform built with React, Vite, and Tailwind CSS. Features a video hero homepage, course browser, pricing page, resource library, login/sign-up flow, and a student dashboard.

## Pages

| Route | Description |
|---|---|
| `/` | Homepage with video hero, featured courses, and success stories |
| `/courses` | Searchable, filterable course library |
| `/pricing` | Free, Student, and Pro plan comparison |
| `/resources` | Downloadable study guides and materials |
| `/gallery` | About Us page with platform overview |
| `/preview` | Platform preview with feature highlights |
| `/login` | Login and Sign Up form |
| `/dashboard` | Student dashboard with progress, upcoming events, and activity |

## Tech Stack

- **React 18** with TypeScript
- **Vite** for development and bundling
- **Tailwind CSS v4** for styling
- **Framer Motion** for page transitions
- **Wouter** for client-side routing
- **Radix UI** for accessible components
- **TanStack Query** for data fetching

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

```bash
npm install -g pnpm
```

### Install dependencies

```bash
pnpm install
```

### Run the development server

```bash
pnpm dev
```

The app will be available at `http://localhost:5173`.

### Build for production

```bash
pnpm build
```

### Preview production build

```bash
pnpm serve
```

## Project Structure

```
src/
├── assets/          # Video and image assets
├── components/      # Shared UI components (shadcn/ui)
├── pages/
│   ├── Home.tsx
│   ├── Courses.tsx
│   ├── Pricing.tsx
│   ├── Resources.tsx
│   ├── Gallery.tsx
│   ├── Preview.tsx
│   ├── Login.tsx
│   ├── Dashboard.tsx
│   └── not-found.tsx
├── App.tsx          # Router, navbar, footer, page transitions
├── main.tsx         # Entry point
└── index.css        # Global styles and Tailwind theme
```

## Customisation

- **Colours & theme** — edit CSS variables in `src/index.css`
- **Courses** — update the `allCourses` array in `src/pages/Courses.tsx`
- **Pricing plans** — update the `plans` array in `src/pages/Pricing.tsx`
- **Resources** — update the `resources` array in `src/pages/Resources.tsx`
- **Dashboard data** — update arrays in `src/pages/Dashboard.tsx`

## License

MIT
