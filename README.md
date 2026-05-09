# Portfolio

A modern, interactive developer portfolio application built using the Next.js App Router. This project leverages React Server Components, high-performance animations, and 3D rendering to create a dynamic user experience.

## Technology Stack

### Core
- **Framework:** [Next.js](https://nextjs.org/)
- **Library:** [React 19](https://react.dev/)
- **Language:** TypeScript

### Styling & UI
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Typography:** `next/font` (Geist, Space Grotesk, Playfair Display)

### Animation & 3D
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **3D Rendering:** [Three.js](https://threejs.org/)
- **React 3D Integration:** [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/) & [@react-three/drei](https://github.com/pmndrs/drei)
- **Smooth Scrolling:** [Lenis](https://github.com/darkroomengineering/lenis)

## Project Structure

```text
src/
├── app/                  # Next.js App Router entries and global layout
├── components/           # UI Components
│   ├── 3d/               # React Three Fiber canvas elements
│   ├── ui/               # Base reusable UI components
│   └── ...               # Core page sections (Hero, Experience, Work, etc.)
└── public/               # Static assets
```

## Getting Started

### Prerequisites
- Node.js 18.x or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
2. Install the dependencies:

```bash
npm install
```

### Development

Run the local development server:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Build & Production

To build the project for production:

```bash
npm run build
```

To start the production server:

```bash
npm run start
```

## Linting

To run ESLint and check for code quality issues:

```bash
npm run lint
```
