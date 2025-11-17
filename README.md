# Joseph Khemmoro — Personal Portfolio

This repository contains my personal portfolio website—a living document that evolves alongside my journey as a software engineer. It showcases my work, articles, and background, serving as both a reflection of where I've been and a commitment to where I'm going.

## A Living Portfolio

This portfolio isn't just a static snapshot—it's an ongoing commitment to growth and transparency. As I continue my journey as a software engineer, I'm dedicated to:

- **Documenting my learning** — New articles, insights, and technical deep-dives as I explore different technologies and solve challenging problems
- **Showcasing evolution** — Regular updates to reflect new projects, skills, and experiences
- **Sharing authentically** — Honest reflections on both successes and lessons learned along the way
- **Building in public** — Keeping this codebase itself as a testament to my development practices and attention to craft

Every commit here represents not just code, but a step forward in my career. I'm committed to maintaining this space as an accurate, up-to-date representation of my capabilities and growth as an engineer.


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

This portfolio is a personal project and a continuous work in progress. As I grow as a software engineer, this site will grow with me. I welcome feedback, suggestions, and conversations about the work showcased here. Feel free to open an issue or reach out directly.


## License

This project’s code is available under the MIT License. If you reuse parts of it, a link back is appreciated.
