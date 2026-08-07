# Portfolio

A minimal, animated portfolio site built with React, Vite, Tailwind CSS, and Framer Motion.

## Folder structure

```
portfolio/
├── index.html              # HTML entry point
├── package.json
├── vite.config.js
├── public/                 # static assets (favicon etc.)
├── src/
│   ├── main.jsx             # React entry point
│   ├── App.jsx               # assembles all sections
│   ├── index.css             # design tokens (colors, fonts) + Tailwind
│   ├── components/
│   │   ├── Nav.jsx           # sticky nav bar
│   │   ├── Hero.jsx          # intro section, staggered entrance animation
│   │   ├── Reveal.jsx        # reusable scroll-reveal wrapper (fade + slide up)
│   │   ├── Experience.jsx    # work history, "build log" timeline style
│   │   ├── Skills.jsx        # grouped skill tags
│   │   ├── Projects.jsx      # project cards — THIS is where you add real projects
│   │   ├── Education.jsx     # degrees + certifications
│   │   └── Contact.jsx       # footer / contact links
│   └── data/
│       ├── experience.js     # edit your work history here
│       ├── skills.js         # edit skills, education, certifications here
│       └── projects.js       # edit your real projects here
```

## Adding a real project

Open `src/data/projects.js` and add an object to the array:

```js
{
  name: 'My App',
  description: 'A short sentence on what it does and why you built it.',
  stack: ['Java', 'Spring Boot', 'PostgreSQL'],
  liveUrl: 'https://my-cool-app.vercel.app',
  repoUrl: 'https://github.com/you/my-cool-app',
  status: 'SHIPPED', // or 'IN PROGRESS'
}
```

The card updates automatically — no other file needs to change.

## Running locally

```bash
npm install
npm run dev
```

Open the URL it prints (usually http://localhost:5173).

## Building for production

```bash
npm run build
```

Outputs a static site to `dist/` — deploy that folder to Vercel, Netlify, or GitHub Pages.

## Deploying (recommended: Vercel)

1. Push this folder to a GitHub repo
2. Go to vercel.com → New Project → import the repo
3. Vercel auto-detects Vite — just click Deploy

No configuration needed.
