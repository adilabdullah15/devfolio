# devfolio

Personal portfolio website — a pure static site (HTML + CSS + vanilla JS) for **Adil Abdullah Khan**, Full-Stack Developer and aspiring AI/ML researcher.

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-deployed-brightgreen)](https://adilabdullah15.github.io/devfolio)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Made with HTML + CSS + JS](https://img.shields.io/badge/made%20with-HTML%20%7C%20CSS%20%7C%20JS-orange)](index.html)

## Features

- Modern **dark theme** with accent highlights
- Sticky nav with **smooth-scroll anchor links** and active-link highlighting on scroll
- **Responsive** layouts (CSS grid) with a mobile **hamburger menu** — works with or without JS
- Scroll **reveal-on-scroll animations** via IntersectionObserver (progressive enhancement)
- Semantic sections: Hero, About, Skills, Projects (8 cards), Education, Contact, Footer
- Auto-updating footer year
- Zero dependencies, zero build step

## Quick Start

No install needed — it's a plain static site:

```bash
git clone https://github.com/adilabdullah15/devfolio.git
cd devfolio
# then just open index.html in a browser
```

Or serve locally with Python if you prefer:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## How to Customize

| What to change | Where to edit |
|---|---|
| Name, role, hero CTAs | `index.html` → `#home` hero section |
| About text, location, stats | `index.html` → `#about` section |
| Skills grid | `index.html` → `#skills` → `.skills-grid` (add/remove `.skill-card` divs) |
| Projects (titles, descriptions, links) | `index.html` → `#projects` → `.project-card` blocks |
| Education | `index.html` → `#education` → `.edu-card` |
| Email + social links | `index.html` → `#contact` section |
| Colors, fonts, spacing | `styles.css` → `:root` variables at the top |
| Menu/scroll/reveal behavior | `script.js` |

## Deploy

### GitHub Pages (free, recommended)

1. Push this repo to `https://github.com/adilabdullah15/devfolio`
2. Repo → **Settings → Pages** → Source: **Deploy from a branch**
3. Branch: `main`, folder: `/ (root)` → Save
4. Live at `https://adilabdullah15.github.io/devfolio/`

### Render (static site)

1. Push the repo to GitHub
2. [dashboard.render.com](https://dashboard.render.com) → **New → Static Site**
3. Connect the repo; Build Command: *(leave blank)*; Publish Directory: `.`
4. Deploy — you get an `onrender.com` URL

## Structure

```
devfolio/
├── index.html   # all page content and sections
├── styles.css   # dark theme, layout, responsive nav, animations
├── script.js    # menu toggle, active nav links, reveal on scroll, year
├── .gitignore
├── LICENSE      # MIT
└── README.md
```

## Tech Stack

- **HTML5** (semantic)
- **CSS3** (custom properties, grid, media queries)
- **Vanilla JavaScript** (IntersectionObserver, scroll events)

## Author

**Adil Abdullah Khan** — Full-Stack Developer · Aspiring AI/ML Researcher

- BS Information Technology, Thal University Bhakkar, Pakistan
- GitHub: [adilabdullah15](https://github.com/adilabdullah15)
- YouTube: [@rometechofficial](https://www.youtube.com/@rometechofficial)
- Facebook: [Joyce Rafel Stories](https://www.facebook.com/joycerafelstories)
- TikTok: [@mr.kofficial2](https://www.tiktok.com/@mr.kofficial2)
- Email: [adilabdullahkhan35@gmail.com](mailto:adilabdullahkhan35@gmail.com)

This project is licensed under the MIT License — see [LICENSE](LICENSE).
