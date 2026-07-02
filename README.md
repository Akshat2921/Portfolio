# Akshat Jain — Personal Portfolio

A responsive, animated personal portfolio built with React, Vite, and Tailwind CSS. Features scroll-triggered reveal animations, parallax background layers, a mouse-tilt hero card, and an interactive project showcase.

🔗 **Live site:** [https://portfolio-theta-seven-4jzx83f6c5.vercel.app](https://portfolio-theta-seven-4jzx83f6c5.vercel.app)
📂 **Repository:** [https://github.com/Akshat2921/Portfolio](https://github.com/Akshat2921/Portfolio)

---

## Preview

| Section | Description |
|---|---|
| Hero | Intro, resume view/download, parallax background |
| About | Bio, education, and skill highlights |
| Projects | PixelCraft, Nightwave, ShopEase, Tadka |
| Achievements | LeetCode / CodeChef / DSA stats |
| Contact | Working contact form wired to EmailJS |

## Tech stack

- **React 19** — UI library
- **Vite** (rolldown) — build tool & dev server
- **Tailwind CSS v4** — styling
- **lucide-react** — icon set
- **EmailJS** — serverless contact form
- **Vercel** — hosting & deployment

## Getting started locally

```bash
git clone https://github.com/Akshat2921/portfolio.git
cd portfolio
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

If deploying on Vercel, add the same three variables under **Project → Settings → Environment Variables** so the live site can send emails too.

## Deployment (Vercel)

1. Push this repo to GitHub (see commands above).
2. Go to [vercel.com](https://vercel.com) → sign in with GitHub.
3. **Add New Project** → import this repository.
4. Framework preset auto-detects as **Vite** — no changes needed.
5. Add the EmailJS environment variables (if using the contact form).
6. Click **Deploy**.

Every future `git push` to `main` automatically triggers a redeploy.

## Project structure

```
final-portfolio/
├── public/
│   └── Akshat_Jain_Resume.pdf   # resume shown via "View / Download CV"
├── src/
│   ├── components/               # reusable UI: buttons, reveal wrapper, project graphics
│   ├── hooks/                    # useParallax, useReveal
│   ├── layout/                   # Navbar, Footer
│   └── sections/                 # Hero, About, Projects, Achievements, Contact, Experience
```

## License

Personal project — feel free to fork for inspiration, but please don't republish the content as your own.