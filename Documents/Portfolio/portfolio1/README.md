# Kapil — Test Automation Portfolio

This is a Next.js 14 + React 18 + Tailwind CSS portfolio scaffold ready for deployment to Vercel, Netlify, or GitHub Pages. It includes a simple 3D scene rendered with three.js (via @react-three/fiber).

Contents:
- Home page with contact and summary
- Projects page with detailed project cards
- 3D scene component

Quick start (macOS / zsh):

1. Install dependencies

```bash
cd /Users/test/Documents/Portfolio/portfolio1
npm install
```

2. Run local dev server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
npm start
```

Deploy:
- Vercel: link the repo and deploy (recommended)
- Netlify: build command `npm run build` and publish `out` if using `next export`
- GitHub Pages: use `next export` and publish `out` to the `gh-pages` branch

Notes:
- This scaffold is TypeScript-ready. Install packages and adjust versions if needed. You can replace the 3D scene with animated content as required.

Resume download:
- To enable the "Download Resume" button (header + contact area), place your resume PDF at `public/Kapil-Resume.pdf` in the project root. When the site is deployed the link `/Kapil-Resume.pdf` will point to that file and users will be able to download it.

