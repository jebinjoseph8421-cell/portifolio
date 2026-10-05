# Jebin Joseph Portfolio

A one-page portfolio for a full-stack developer (Java, Spring Boot, React), built with Next.js and Tailwind CSS. No API keys or environment variables needed.

## Tech stack
Next.js 14 (App Router), React 18, Tailwind CSS 3. Light and dark themes, responsive layout.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000. For a production build: `npm run build && npm start`.

## Customize
- All text lives in `data/content.js`: profile, about, projects, skills, education, certificates.
- Add your GitHub URL in `profile.github`; the link appears automatically.
- Replace `public/Jebin-Joseph-Resume.pdf` to update the resume download.
- Colors and fonts: `tailwind.config.js`. Components: `components/`.
- Deploy for free on Vercel by importing the repository.

## Structure
```
app/ (layout, page, globals.css) · components/ · data/content.js · public/
```
