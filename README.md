# Niraj Kumar — Portfolio

React + Vite + Tailwind CSS v4 + GSAP + React Three Fiber portfolio.

## Setup

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Folder structure

```
src/
  components/      → Navbar, Hero, About, Skills, Experience, Projects, Education, Contact, Footer, ThreeBackground
  constants/data.js → all editable content (skills, projects, experience, education, contact info)
  hooks/useTypewriter.js
  App.jsx
  main.jsx
  index.css        → Tailwind v4 theme tokens + custom utility classes
```

## To customize

- **Content**: edit `src/constants/data.js` — everything (skills, projects, experience, education, contact) lives there.
- **Resume**: drop your `resume.pdf` into the `public/` folder — the About section's download button links to `/resume.pdf`.
- **Contact form**: currently shows a local "Message Sent" confirmation only. Wire it to a service like Formspree or EmailJS inside `src/components/Contact.jsx` (`submit` function) to actually receive messages.
- **Colors/fonts**: edit the `@theme` block at the top of `src/index.css`.

## Deploy

Works out of the box on Vercel or Netlify — just connect the repo, build command `npm run build`, output dir `dist`.
