# Portfolio — Rodrigo Bber

Personal portfolio built with Vue 3, showcasing projects, experience, and technical skills. Available in **English** and **Portuguese (pt-BR)** with light/dark theme support.

## Live Demo

[rodbber.github.io](https://rodbber.github.io)

## Tech Stack

![Vue.js](https://img.shields.io/badge/Vue.js-3-4FC08D?logo=vue.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?logo=tailwind-css&logoColor=white)
![PrimeVue](https://img.shields.io/badge/PrimeVue-3-4CAF50?logo=primevue&logoColor=white)
![vue-i18n](https://img.shields.io/badge/vue--i18n-9-42b883?logo=vue.js&logoColor=white)

## Features

- Bilingual — EN / PT-BR with automatic browser language detection
- Light and dark theme toggle
- Sections: About, Project Experience, Personal Projects, What I Can Do, Contacts
- Responsive layout for mobile, tablet, and desktop
- Interactive tech stack with tooltips

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Topics/        # Page sections (About, Xp, Projects, ...)
│   └── Experience/    # Experience card component
├── locales/           # Translation files (en.js, pt-BR.js, and data modules)
├── translations.js    # vue-i18n setup
└── main.js
```

## License

MIT
