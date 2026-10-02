# Instituut Soleil: hifi V3

A completely new site with the new logo. Built with Astro (static output), GSAP + Lenis for motion, and self-hosted fonts.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Pages
Home, Behandelingen (overview + 6 treatment pages), Verwennen, Tarieven, Over Soleil, Journaal (7 articles), Contact, 404.
All prices, treatments and hours live in `src/data/site.ts`. Articles are in `src/data/journal.json`.

## Sources
- Prices: the 2026 price list (PDF on instituutsoleil.be). Several prices from V2 were out of date.
- Opening hours: the news post "Nieuwe openingsuren" (7 Sept 2026): Thursday until 20:00, Friday from 08:00.
- Articles: copied verbatim from the live site.
- Photos: the same set as V2 (`public/img`).

## Brand
- **Logo:** redrawn as vector from the Instagram screenshot and the price list (`scripts/build-logo.mjs` → `src/assets/logo-mark.svg`). The wordmark ("instituut / SOLEIL") is set in EB Garamond as the closest match. **Replace both with the original vector files once the client supplies them.**
- **Colours:** warm white `#fbfaf8`, ink `#22201e`, logo tan `#bf8e63` (mark, numerals, prices), tan-ink `#8a5a30` (text and buttons), night `#1c1917`, sand `#f3eee8`.
- **Type:** Albert Sans (headings, text) and EB Garamond (wordmark, quote, prices).
- **Rule:** anything you press is a pill. Photos have square corners. Lists use hairlines, not cards. The logo is used only as the logo, not as a decorative motif.

## Still to confirm with the client
- **Owner's name:** not used anywhere. Note: "Cathy" is the laser specialist from Haarlaser Team, not the owner. The dark portrait `zaakvoerder-portret-studio.webp` (= `_bron/raw-cathy.jpg`) may be Cathy, so it has been left out.
- **Years in business:** the site says 27 (from the news post of Sept 2026). The old homepage still said 25.
- **Original vector logo** (SVG/AI/PDF).
- **Contact form:** currently a demo (validation + confirmation, no sending). Connect a form service (e.g. Formspree, Netlify Forms) or a mail script.
- **Treatment copy:** the "Voor wie" lists for Environ DF, Peelings and Microneedling were written from the live site's articles. Ask her to check them.
- **Photos:** many are small (357 to 450 px). Higher-resolution versions, ideally a new shoot, would lift the site a lot.
- **Expired laser promotion** and the old webshop post on the live site were deliberately not migrated.
