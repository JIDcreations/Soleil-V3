---
name: Instituut Soleil
description: A calm, airy skin-expert site where a real face, real prices and a real method carry the trust.
colors:
  tan: "#bf8e63"
  tan-ink: "#8a5a30"
  paper: "#fbfaf8"
  sand: "#f3eee8"
  ink: "#22201e"
  ink-2: "#5d5650"
  night: "#1c1917"
  on-night: "#f4efe9"
  on-night-2: "#b9afa6"
  line: "rgb(34 32 30 / 0.12)"
  line-night: "rgb(244 239 233 / 0.14)"
  status-open: "#4f8a5b"
  error: "#a23a2a"
typography:
  display:
    fontFamily: "Albert Sans Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.9rem, 2rem + 4.2vw, 6rem)"
    fontWeight: 280
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Albert Sans Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.9rem + 2.7vw, 4.4rem)"
    fontWeight: 300
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  title-lg:
    fontFamily: "Albert Sans Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.95rem, 1.6rem + 1.5vw, 3rem)"
    fontWeight: 300
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Albert Sans Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 1.33rem + 0.75vw, 2rem)"
    fontWeight: 350
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  title-sm:
    fontFamily: "Albert Sans Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.2rem, 1.12rem + 0.35vw, 1.42rem)"
    fontWeight: 450
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  lede:
    fontFamily: "Albert Sans Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.2rem, 1.12rem + 0.35vw, 1.42rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Albert Sans Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1rem, 0.97rem + 0.15vw, 1.09rem)"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Albert Sans Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(0.84rem, 0.82rem + 0.1vw, 0.9rem)"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0.02em"
  statement:
    fontFamily: "EB Garamond Variable, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(1.7rem, 1.1rem + 2.5vw, 3.35rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  numeral:
    fontFamily: "EB Garamond Variable, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(4rem, 3rem + 5vw, 8rem)"
    fontWeight: 400
    lineHeight: 0.85
    letterSpacing: "-0.02em"
  wordmark:
    fontFamily: "EB Garamond Variable, Iowan Old Style, Georgia, serif"
    fontSize: "1.3rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.3em"
rounded:
  none: "0px"
  pill: "999px"
spacing:
  gutter: "clamp(16px, 4vw, 56px)"
  section: "clamp(88px, 11vw, 168px)"
  section-tight: "clamp(56px, 7vw, 104px)"
  max: "1400px"
  text-max: "760px"
  header: "76px"
components:
  button-primary:
    backgroundColor: "{colors.tan-ink}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "#ffffff"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "44px"
  button-ink-hover:
    backgroundColor: "{colors.tan-ink}"
  button-light:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "52px"
  button-light-hover:
    backgroundColor: "{colors.tan}"
    textColor: "{colors.night}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "52px"
  button-line-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "44px"
  chip-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  input:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "14px 16px"
    height: "52px"
  price-table:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: "14px 0"
---

# Design System: Instituut Soleil

## Overview

**Creative North Star: "The Quiet Consultation Room"**

The site feels like sitting across from one expert in a bright, uncluttered room: warm white paper, a single deep night band where the offer or the address sits, sand bands where the method and the arrangements are explained. Large light sans headlines do the talking; EB Garamond is reserved for the moments that are personal or precise (her statement, step numerals, prices, the wordmark). Density is low and measured: wide section padding, generous gutters, hairline rules doing the structural work that cards and boxes do elsewhere.

Photography is documentary and real (the owner, the scanner, the treatment room), and every photo carries one shared warm grade (a light sepia) so colour photos stay colour and the black-and-white originals turn warm, and the set reads as one. Photos are square-cornered and revealed by clip, never framed. Colour comes almost entirely from the logo tan and its darker text twin. The logo is used only as the logo, in the header, and draws itself on the home page.

Motion is slow and eased (one long expo-out curve), carried by Lenis smooth scroll and GSAP: clip-path reveals, words that ink in on scroll, a sticky method image that swaps per step, a photo that follows the pointer over the treatment index. All of it is gated behind `prefers-reduced-motion: no-preference`.

**Key Characteristics:**
- Warm paper ground, sand and night as the only other surfaces.
- Light-weight (280 to 350) sans display, tight negative tracking.
- Garamond only for statement, numerals, prices and wordmark.
- Hairline lists and rules instead of cards.
- Anything you press is a pill; everything else is square.
- One warm grade on every photo: colour stays colour, black and white turns warm.
- Slow clip reveals on a single expo-out ease.

## Colors

A warm-neutral palette with one tan accent split into a light "mark" tone and a darker "ink" tone that passes as text.

### Primary
- **Sun Tan** (tan): the logo colour. Used for the logo mark, large Garamond prices and headings on night, the "today" marker in the hours on night, tick dashes, text selection, and the hover fill of light pills. Display sizes or night grounds only; it does not carry small text on paper.
- **Tan Ink** (tan-ink): the readable twin of Sun Tan. Primary booking pill, current nav item, link hover, group captions over price tables and treatment lists, post categories, focus ring on light grounds.

### Neutral
- **Warm Paper** (paper): page ground, text on ink pills, header glass.
- **Sand** (sand): alternate band for the method, arrangements and closing booking strip; scrollbar track.
- **Warm Ink** (ink): body text, default pill, strong rules (the ink line that heads every list).
- **Soft Ink** (ink-2): ledes, muted copy, durations, meta.
- **Night** (night): the one offer band per page and the footer; mobile booking dock.
- **On Night / On Night Soft** (on-night, on-night-2): text and muted text on night.
- **Hairline / Night Hairline** (line, line-night): row separators and quiet borders.

### Functional
- **Open Green** (status-open): the dot on the live "open now" status. Nowhere else.
- **Error Brick** (error): form error text and field border. Nowhere else.

### Named Rules
**The Two Tans Rule.** Sun Tan is for the mark and for display-size numerals or headings on night; whenever tan sits at text size on paper or sand, it is Tan Ink.

**The One Night Rule.** Night appears at most once in a page's body (the offer, the beliefs, or the route band) plus the footer. It is a pause, not a theme.

## Typography

**Display Font:** Albert Sans Variable (with ui-sans-serif, system-ui)
**Body Font:** Albert Sans Variable
**Accent Font:** EB Garamond Variable (with Iowan Old Style, Georgia)

**Character:** A soft, open geometric sans set very light and large carries the calm; a classical Garamond appears only where the voice becomes personal or numerical, so it reads like her handwriting in the margin.

### Hierarchy
- **Display** (280, step-5, 0.98): home hero headline and the footer call to action, max about 14ch.
- **Headline** (300, step-4, 1.04): section titles.
- **Title Large** (300, step-3): method step titles, treatment index row names, prose h2.
- **Title** (350, step-2, 1.12): post titles, big copy, mobile index rows.
- **Title Small** (450, step-1, 1.25): small headings such as "Openingsuren".
- **Lede** (400, step-1, 1.5): intro paragraphs in Soft Ink, max 46ch.
- **Body** (400, step-0, 1.6): running text; measure 62ch.
- **Label** (500, step--1, +0.02em, sentence case): captions over price tables and treatment groups, form labels, meta.
- **Statement** (Garamond 400, 1.2): one first-person paragraph per page whose words ink in from 16% ink to full ink on scroll, max 30ch.
- **Numeral** (Garamond 400, 0.85): the big Discovery price, step numerals 1 to 3, arrangement prices and names, brand names, belief headings.
- **Wordmark** (Garamond 400, 0.3em tracking, uppercase "SOLEIL" over a small spaced "instituut").

### Named Rules
**The Light Weight Rule.** Headings h1 to h3 sit between 280 and 350 with negative tracking (-0.02em to -0.04em). Heavy headings break the calm.

**The Garamond Is Her Voice Rule.** Serif is only for the statement, numerals, prices, proper names of arrangements and brands, and the wordmark. Never for body copy or UI.

## Layout

A centred container (max 1400px, fluid gutter) with a narrow 760px text column for articles. Sections breathe on a fluid section padding; tighter strips use the tight step. Most content splits asymmetrically, a narrower sticky head column (0.8fr) beside a wider content column (1.4fr), used for price sections, treatment details and pampering panels. The home hero is a 1.08fr / 1fr split filling the viewport, the photo pair laid on a 6 by 8 grid with the smaller photo overlapping the lower left, separated by a paper mat.

Lists run full width as hairline rows: a 1px ink rule opens each group, 1px hairlines separate rows. Arrangements are a horizontal scroll-snap rail of hairline columns (ink top rule, hairline left divider), with pill arrow controls. The fixed header (76px) hides on scroll down and turns into paper glass when scrolled.

Breakpoints: 1080px (nav collapses to a full-screen sheet), 900/860px (splits stack to one column, method image moves inline), 760px (the mobile booking dock appears, week becomes a list), 640px (forms and brand grid go single column).

## Elevation & Depth

Flat. Depth comes from tonal bands (paper, sand, night), overlapping photos and clip reveals, not shadows. Two soft effects exist, both functional: the scrolled header is translucent paper with a 14px backdrop blur and a 1px hairline beneath it, and the mobile booking dock floats with a diffuse dark shadow over translucent night. Outline buttons and chips draw their stroke with an inset 1px shadow so the stroke never shifts layout.

### Shadow Vocabulary
- **Header hairline** (`box-shadow: 0 1px 0 var(--line)`): scrolled header only.
- **Dock float** (`box-shadow: 0 12px 32px -12px rgb(28 25 23 / 0.5)`): mobile booking dock only.
- **Inset stroke** (`box-shadow: inset 0 0 0 1px var(--ink)` or `var(--line)`): outline pills, chips, rail controls.
- **Photo mat** (`box-shadow: 0 0 0 clamp(8px, 1vw, 14px) var(--paper)`): the overlapping hero photo, so it reads as cut into the larger one.

### Named Rules
**The Flat Paper Rule.** Content never floats. Only the two pieces of fixed chrome (header, dock) get blur or shadow.

## Shapes

Two shapes only. Controls are full pills (999px): buttons, chips, jump-nav links, rail arrows, the dock, the call button, the skip link. Everything else is square: photos, inputs (0 radius, white fill, 1px border), tables, columns, panels. The only circles besides pills are the 8px status dot and the 56px author portrait next to the statement. Lines are always 1px: ink to open a group, hairline between rows. List bullets are 14px horizontal dashes (tan on night, tan-ink in prose), never dots.

## Components

### Buttons
Calm and confident; colour fills up from below on hover.
- **Shape:** full pill (999px), 52px tall, 28px side padding; small variant 44px and 20px.
- **Primary (tan):** Tan Ink fill, white text, the main "Afspraak maken" on light grounds; on hover an ink layer slides up from the bottom (0.55s, expo-out).
- **Ink (default):** ink fill, paper text; the header booking pill. Hover slides Tan Ink up.
- **Light:** paper fill, ink text, for night grounds; hover slides Sun Tan up with night text.
- **Line:** transparent with a 1px inset ink stroke; phone and secondary actions. Hover fills ink.
- **Active:** scale 0.98. **Focus:** 2px Tan Ink outline, 3px offset (Sun Tan on night).

### Text Link
Weight 500 with a 1px underline drawn as a background; on hover the underline retracts to the right and the text turns Tan Ink (Sun Tan on night). Used for every secondary action, typically "Nieuw? Begin met een huidanalyse" beside the primary pill.

### Chips
- **Style:** 44px pill, 1px inset hairline stroke, weight 450.
- **State:** hover darkens the stroke to ink; current or selected fills ink with paper text. Used for related treatments and the pampering tabs; the price-page jump nav is the same pattern at 40px.

### Lists and Columns (instead of cards)
- **Corner Style:** none.
- **Background:** the band they sit on; no fill of their own.
- **Shadow Strategy:** none.
- **Border:** 1px ink rule above the group, 1px hairlines between rows.
- **Internal Padding:** vertical only (11 to 28px per row).

### Inputs / Fields
- **Style:** white fill, square, 1px border at 28% ink, 52px min height, label above in Label style.
- **Focus:** border goes ink plus a 3px Tan Ink ring at 18% opacity.
- **Error:** Error Brick border and message below.

### Navigation
Brand (logo mark 54px in Sun Tan + Garamond wordmark) left; single-line nav at 0.95rem/450 with a 1px underline that draws in from the left on hover and stays on the current page (current in Tan Ink); ink booking pill at the end. Below 1080px a "Menu" button opens a full-screen paper sheet that wipes down by clip-path, with large light links and booking/phone pills at the foot. Below 760px a floating night dock holds the booking pill and a round call button.

### Treatment Index (signature)
Full-width hairline rows: large light name, Soft Ink one-liner, "vanaf €" price with an arrow. On hover the name slides 14px right and turns Tan Ink while a 300px photo follows the pointer. On mobile the description drops and a 72 by 88 thumbnail leads each row.

### Price Table
Label-style Tan Ink caption over a 1px ink rule; rows of name, Soft Ink duration, right-aligned tabular price at weight 500, separated by hairlines.

### Opening Hours and Live Status
A seven-column week strip between hairlines, today's day highlighted in tan; collapses to a list on mobile. The live status reads Brussels time and shows "open" with a green dot or "gesloten" with a Soft Ink dot.

### Method Stage (signature)
Three tall steps with Garamond numerals beside a sticky image; the active step is full opacity (others 32%) and its photo wipes up over the previous one.

### Concern picker (home, behandelingen)
Replaces a long treatment list where a visitor decides. Large pill chips name a skin concern ("Een doffe huid", "Fijne lijntjes", "Pigmentvlekken", "Verslapping & volume", "Onzuiverheden", "Even ontspannen"); the active chip is Ink filled. The panel shows one Soft Ink sentence, then 2 or 3 offer tiles (4:5 photo, light name, one-liner, "vanaf €" with arrow) and a closing Night block "Twijfel je?" that routes to the huidanalyse. Tiles rise in with a 70ms stagger on switch. On mobile the chips and tiles become horizontal snap rails. Concern-to-treatment mapping lives in `concerns` in `src/data/site.ts`. The full hairline index stays on /behandelingen/ only.

## Do's and Don'ts

### Do:
- **Do** keep booking one tap away: ink or Tan Ink pill in the header, Tan Ink pill in every page head, light pill in the footer, dock on mobile.
- **Do** pair every primary pill with a text link for the newcomer path (start with a skin analysis).
- **Do** run every photo through the single greyscale grade (`grayscale(1) contrast(1.04) brightness(1.02)`) and keep it square-cornered.
- **Do** build lists as hairline rows under a 1px ink rule.
- **Do** use the one expo-out ease (`cubic-bezier(0.16, 1, 0.3, 1)`) for reveals and hovers, and gate motion behind reduced-motion.
- **Do** use Phosphor regular icons inlined as SVG, sized to the text.

### Don't:
- **Don't** use the logo as a decorative motif: no sun arcs, horizon lines or large marks in heroes, footers or backgrounds. The mark appears once, in the header.
- **Don't** put content in filled or rounded cards; use hairline columns and rows.
- **Don't** set Sun Tan as small text on paper or sand; use Tan Ink.
- **Don't** round photos, inputs or panels; only pressable things are pills.
- **Don't** bring back V2's mustard field, cacao brown or script logo.
- **Don't** add shadows to content; only the header and dock float.
