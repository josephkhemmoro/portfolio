# Joseph Khemmoro — Personal Portfolio

This repository contains my personal portfolio website. It showcases my work, articles, and background, and serves as a central place to learn more about me and how to get in touch.


## Tech Stack

Built with a modern, fast, and accessible frontend stack:

- Vite (bundler + dev server)
- React + TypeScript
- Tailwind CSS (utility-first styling)
- shadcn/ui (accessible, composable UI components)


## Project Structure

Key directories you might care about:

- `src/components/` — Reusable UI building blocks (e.g., `Footer.tsx`, `ArticlesSection.tsx`).
- `src/pages/` — Top-level pages that make up the site (e.g., `Articles.tsx`).
- `src/pages/articles/` — Individual article pages written in TSX (e.g., `DTE.tsx`, `RayDx.tsx`).
- `index.html` — Vite entry HTML file.

The site is designed to be responsive and fast, with a focus on clean typography, accessible components, and maintainable code.


## Local Development

Prerequisites:
- Node.js (LTS recommended) and npm

Install dependencies and start a local dev server with hot reloading:

```bash
npm install
npm run dev
```

Common scripts:

- `npm run dev` — Start the Vite dev server
- `npm run build` — Create a production build
- `npm run preview` — Preview the production build locally


## Deployment

This is a static site built with Vite, so it can be deployed to any static hosting provider (e.g., Vercel, Netlify, GitHub Pages). The production output is generated in `dist/` after running `npm run build`.

Example steps:
1. Build: `npm run build`
2. Deploy the contents of `dist/` to your hosting provider of choice


## How It Was Made

- The project was scaffolded with Vite and set up with React + TypeScript for type safety and a great developer experience.
- Styling is primarily handled with Tailwind CSS, enabling rapid iteration while keeping styles consistent.
- I integrated `shadcn/ui` to ensure accessible, composable UI primitives and a consistent design language.
- Content such as articles lives in `src/pages/articles/` as TSX files, which allows mixing content and JSX for custom layouts.
- Reusable components (like the articles section and footer) live under `src/components/` to keep the codebase modular and easy to maintain.


## Contributing / Feedback

This portfolio is primarily for personal use, but I welcome feedback and suggestions. Feel free to open an issue or reach out.


## License

This project’s code is available under the MIT License. If you reuse parts of it, a link back is appreciated.
