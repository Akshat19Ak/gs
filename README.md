# Akshat Gupta — Personal Portfolio Website

A premium, interactive personal portfolio website built with **React** and **Vite**. Features a dark editorial design, animated constellation hero, interactive project showcases with custom SVG visualizations, and scroll-triggered animations throughout.

## Tech Stack

- **React 19** — UI components
- **Vite 8** — Build tool & dev server
- **Vanilla CSS** — Custom design system with CSS custom properties
- **Lucide React** — Icon library
- **Native Browser APIs** — IntersectionObserver, SVG animations, CSS transitions

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### 1. Clone or download the project

```bash
git clone <your-repo-url>
cd gs
```

Or if you already have the folder:

```bash
cd c:\Users\KIIT0001\Desktop\gs
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The site will be available at **http://localhost:5173** (or the next available port if 5173 is in use — check the terminal output).

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local development server with hot-reload |
| `npm run build` | Build optimised static files into `dist/` |
| `npm run preview` | Serve the production build locally for final checks |
| `npm run lint` | Run Oxlint for code quality checks |

---

## Project Structure

```
gs/
├── public/
│   └── favicon.svg          # Custom SVG favicon
├── src/
│   ├── config.js             # ← All personal data lives here (edit to personalise)
│   ├── main.jsx              # React entry point
│   ├── App.jsx               # Root component assembling all sections
│   ├── index.css             # Global design system & CSS custom properties
│   └── components/
│       ├── shared.jsx        # Nav, ScrollProgress, Reveal hook
│       ├── Hero.jsx / .css
│       ├── Story.jsx / .css
│       ├── Journey.jsx / .css
│       ├── Philosophy.jsx / .css
│       ├── Projects.jsx / .css
│       ├── Skills.jsx / .css
│       ├── Vision.jsx / .css
│       ├── Principles.jsx / .css
│       └── Closing.jsx / .css
├── index.html
├── vite.config.js
└── package.json
```

---

## Personalising the Content

All personal data (name, projects, skills, links, timeline) is centralised in one file:

```bash
src/config.js
```

Open it and update:

```js
github:   "https://github.com/YOUR_USERNAME"
linkedin: "https://linkedin.com/in/YOUR_SLUG"
email:    "your@email.com"
```

For each project, add the real `github` and `demo` URLs — links appear or hide automatically based on whether the field is filled.

---

## Building for Production

```bash
npm run build
```

Output is written to the `dist/` folder. This is a fully static site with no backend required.

**Build output (approximate):**
```
dist/index.html        ~2 kB
dist/assets/*.css     ~29 kB  (5.7 kB gzipped)
dist/assets/*.js     ~276 kB  (84 kB gzipped)
```

---

## Deployment

The `dist/` folder can be deployed to any static hosting provider:

### Vercel
```bash
npm i -g vercel
vercel deploy
```

### Netlify
Drag and drop the `dist/` folder at [app.netlify.com/drop](https://app.netlify.com/drop), or connect your GitHub repository for automatic deploys.

### GitHub Pages
Push the contents of `dist/` to the `gh-pages` branch of your repository.

---

## Accessibility & Browser Support

- Semantic HTML with correct ARIA roles and labels
- Keyboard-navigable tabs, timeline entries, and project cards
- Visible focus indicators
- `prefers-reduced-motion` respected — all animations are disabled for users who prefer it
- Responsive from 320px mobile to wide desktop monitors
- Tested in Chromium-based browsers and Firefox
