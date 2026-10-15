# Instituut Soleil: hifi V3

A completely new site with the new logo. Built with Astro (static output) and self-hosted fonts. V4 (15 Oct 2026) reworks all client feedback: see `feedback/FEEDBACK-TRACKER.md` and `feedback/NOTION-CHANGELOG.md`.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Pages
Home, Behandelingen (overview + Huidanalyse & advies, Skin Relax, Skin Expert), Ontspanning (`/verwennen/`), Tarieven, Over Soleil, Journaal, Contact, 404. Old URLs redirect via `public/_redirects`.
All prices, treatments and hours live in `src/data/site.ts`. Articles are in `src/data/journal.json`.

## Sources
- Prices: the 2026 price list (PDF on instituutsoleil.be). Several prices from V2 were out of date.
- Opening hours: the news post "Nieuwe openingsuren" (7 Sept 2026): Thursday until 20:00, Friday from 08:00.
- Articles: copied verbatim from the live site.
- Photos: the same set as V2 (`public/img`).

## Brand
- **Look:** modelled on genevieveoushoorn.be at the client's request: white page, light beige frames behind photos and text, small light headings, no black surfaces, content max 1120px wide.
- **Colours:** white `#ffffff`, beige `#f6f0e8`, sand gold `#ece1d3` (footer), bronze `#946a43` (buttons, labels, bronze block), logo tan `#bf8e63` (logo and thin rules only), ink `#3b322b`.
- **Type:** Raleway (everything) and EB Garamond (wordmark only).
- **Owner:** Saskia (Ferket). 27 years confirmed by her own copy.

## Still to confirm with the client
See the last section of `feedback/NOTION-CHANGELOG.md`.
