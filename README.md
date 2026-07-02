# Akshat Jain — Personal Portfolio

A responsive, animated personal portfolio built with React, Vite, and Tailwind CSS v4. Features scroll-triggered reveal animations, parallax background layers, a mouse-tilt hero avatar, and an infinite marquee skills strip.

## Sections

- **Hero** — intro, resume download, parallax background & floating stat badges
- **About** — bio, education, and highlight cards
- **Projects** — PixelCraft, Nightwave, ShopEase, and Tadka
- **Journey** — education & milestone timeline
- **Achievements** — LeetCode / CodeChef / DSA stats
- **Contact** — working contact form wired to EmailJS

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173 to view it locally.

### Build for production

```bash
npm run build
npm run preview
```

## Configuring the contact form (EmailJS)

The contact form uses [EmailJS](https://www.emailjs.com/) to send messages without a backend. Create a `.env` file in the project root:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Sign up at emailjs.com, create an email service + template, and paste the IDs above. Without these, the form will show a friendly error instead of sending.

## Things to personalize before deploying

- Drop your resume PDF at `public/Akshat_Jain_Resume.pdf` so the "Download CV" button works.
- Double-check the `github`/`link` URLs in `src/sections/Projects.jsx` — the Tadka repo URL is a best guess and may need updating.
- Swap the "AJ" initials avatar in `src/sections/Hero.jsx` for a real photo if you'd like — replace the gradient block with an `<img>` tag pointing at a photo in `public/`.
- Update `public/hero-bg.jpg` if you'd like a different background texture.

## Tech stack

React 19 · Vite (rolldown) · Tailwind CSS v4 · lucide-react icons · EmailJS
