# Nikhil Patil — Portfolio

An animated one-page portfolio built with **Next.js 15**, **React 19**, **Tailwind CSS 4**, **Framer Motion** and **Swiper** — laid out after [sanidhyy/modern-portfolio](https://github.com/sanidhyy/modern-portfolio), with a white background and yellow highlights.

Sections: Home · About · Services · Work · Experience · Contact. The side nav (bottom bar on phones) scrolls to each section and highlights the one on screen; content fades in as you scroll.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

For a production build: `npm run build` then `npm start`.

## Make changes

All content lives in **`lib/data.ts`** (taken from the resume): contact details, summary, counters, skills, tools, education, services, projects and work experience.

- **Portrait:** the hero shows `public/avatar.png` (a transparent PNG). Replace that file to change it, or set `avatar: null` in `site` to show the animated orb with your initials instead.
- **LinkedIn / GitHub:** paste the URLs into `socials` — links left empty are hidden.
- **Project screenshots:** live screenshots are in `public/projects/`. Add `image: "/projects/<file>.jpg"` to a project to use one; without it a gradient thumbnail is generated from `colors` and the icon.
- **Contact form:** opens the visitor's email app addressed to `site.email`, so it works without a backend.
- **Colours:** the yellow highlight, text and background tones are in `app/globals.css` under `@theme`. Wrap any word in `<span className="highlight">` to give it the yellow marker effect.
- **Favicon:** `app/icon.svg`.

## Deploy

Push the project to GitHub and import it on [Vercel](https://vercel.com/new) — no configuration needed.

## Structure

```
app/                  layout, the single page, global styles
components/sections/  Hero, About, Services, Work, Experience, Contact
components/           Header, Nav, Footer, sliders, particles, avatar and decorative pieces
lib/data.ts           all site content
public/projects/      project screenshots
variants.ts           shared Framer Motion fade-in + scroll-reveal settings
```
