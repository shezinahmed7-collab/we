# Dr. Sreehari & Dr. Daya Uday — Luxury Digital Wedding Invitation Suite

> An ultra-luxurious, universally neutral digital wedding invitation and ceremonial itinerary web application.  
> Designed at the intersection of **Luxury Physical Stationery × Modern Editorial Web Experience**.

---

## 1. Project Overview & Concept

This project is a bespoke, reusable digital wedding invitation template engineered for **Dr. Sreehari & Dr. Daya Uday**. Rather than a generic, single-use wedding website, it is architected as an interactive digital stationery suite that honors the timeless elegance of classic luxury invitation cards while offering fluid digital interactions.

### Core Philosophy & Architectural Pillars
- **100% Culturally & Religiously Agnostic**: Universally welcoming for any wedding worldwide across diverse traditions, intercultural, civil, or secular celebrations. Contains zero religious iconography, deities, sacred scriptures, or regional clichés.
- **Announcement & Itinerary Focused (No RSVP Barriers)**: Strictly a ceremonial invitation and order-of-events guide. Free of attendance dropdowns, guest headcounts, or form barriers.
- **Physical Stationery Aesthetic**: Opening hero card evokes warm cotton paper, delicate hairline gold foil borders, and refined serif typography reveal instead of a full-bleed photo hero.
- **Single Source of Truth**: All wedding-specific content, dates, venues, maps, lineage, family names, quotes, and themes reside in one centralized configuration file (`src/config/weddingData.ts`).

---

## 2. Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework & Core** | [React 18](https://react.dev/) | Component architecture & state synchronization |
| **Build Tool & Bundler** | [Vite 6](https://vitejs.dev/) | High-performance dev server & optimized rollup production bundling |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Strict type definitions & unified data models |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) | Design tokens, responsive utilities, custom luxury typography & border framing |
| **Iconography** | [Lucide React](https://lucide.dev/) | Vector UI symbols (Maps, Calendars, Audio controls, Navigation) |
| **Audio & Motion** | Web Audio API / CSS GPU Accelerators | Pre-warmed audio buffer playback & hardware-accelerated 60fps scrolling |
| **Deployment** | [Vercel](https://vercel.com/) | Edge-optimized CI/CD deployment pipeline |

---

## 3. Design System & Color Palette

The visual identity draws inspiration from luxury cotton letterpress stationery and warm champagne gold accents.

### Color Tokens

| Token Name | Hex Code | Visual Swatch | Role & Application |
| :--- | :---: | :---: | :--- |
| **Cotton / Parchment Canvas** | `#FAF7F2` | `FAF7F2` | Warm ivory paper background texture across canvas |
| **Luxury Accent Gold** | `#C5A869` | `C5A869` | Double hairline borders, monograms, dividers, subtle gold foil highlights |
| **Gold Foil Light** | `#EBDCBA` | `EBDCBA` | Subtle highlights, badges, and active state rings |
| **Primary Text** | `#23211F` / `#2D2926` | `23211F` | Deep charcoal editorial serif headings and couple names |
| **Muted Secondary Text** | `#6E6862` | `6E6862` | Family lineage, venue logistics, event metadata, and times |
| **Surface Cards** | `#FFFFFF` | `FFFFFF` | Crisp ivory card elevation with soft embossed box-shadows |

### Typography Hierarchy
- **Headings & Monogram**: High-contrast editorial serif (*Playfair Display / Cormorant Garamond*)
- **Body & Logistics**: Clean, readable sans-serif (*Inter / Montserrat*) with generous luxury tracking (`tracking-widest-luxury`)
- **Accents & Connectors**: Refined cursive script for Ampersands (`&`) and flourish dividers

---

## 4. Core Invitation Copy & Ceremonial Details

All wedding details are centrally declared in `src/config/weddingData.ts`:

- **The Couple**: Dr. Sreehari & Dr. Daya Uday
- **Monogram Crest**: `"S & D"`
- **Taglines & Quotes**:
  - *"Two families, two hearts, united as one."*
  - *"Two lives, two stories, one beautiful journey."*
- **The Wedding Ceremony (Muhurtham)**:
  - **Date**: Thursday, December 3, 2026
  - **Auspicious Time**: 11:49 AM - 12:10 PM
  - **Venue**: Raj Rotanas Convention Center, Parippally, Kerala
  - **Navigation**: [Google Maps Location](https://share.google/u81k89XPFILLaLGMv)
- **The Wedding Reception**:
  - **Date**: Saturday, December 5, 2026
  - **Time**: 4:00 PM onwards
  - **Venue**: East Residence, Sabari Interlocking Bricks, Ampalathumkala
  - **Navigation**: [Google Maps Location](https://maps.google.com/?q=Sabari+Interlocking+Bricks+Ampalathumkala)
- **Family Lineage**:
  - **Groom's Family**: Mr. Bijukumar S & Mrs. Jayasree SR (Sibling: Sabari | Residence: Sreeshailam, Ampalathumkala)
  - **Bride's Family**: Mr. Udayakumar D & Mrs. Suja Sudhakar (Sibling: Diya Uday | Residence: Nest, Parippally)
- **Closing Blessing & Formal Sign-Off**:
  - *"We look forward to your presence, blessings and best wishes."*
  - *"With love, Dr. Sreehari & Dr. Daya Uday"*
  - *"INVITED BY BOTH FAMILIES"*

---

## 5. 4-Photo Asset Architecture

The template features a dedicated **4-Photo Editorial System** placed throughout the ceremonial flow with intentional framing:

```
public/images/
├── 1.jpg              # Spotlight Couple Portrait (Primary Lineage section)
├── 2.jpg              # Candid Moment (Pottery Date session in "Our Story" card)
├── couple-walk.jpg    # Architectural Widescreen Break (Panoramic corridor walk, height: 380px)
├── 4.jpg              # Ceremonial Detail Spotlight (Hands, sacred vows, and ring exchange)
└── 3.jpg              # Final Framed Portrait (Directly above the closing family blessing)
```

1. **Photo 1 (`/images/1.jpg`) — Primary Couple Spotlight**: Formal portrait alongside couple names and dual family lineage cards.
2. **Photo 2 (`/images/2.jpg`) — Candid Story Card**: Editorial two-column feature celebrating the couple's candid journey.
3. **Photo 3 (`/images/couple-walk.jpg`) — Widescreen Visual Break**: Full-bleed panoramic visual break with calibrated top-focus (`object-position: center 30%`) and frosted quote card: *"Two lives, two stories, one beautiful journey."*
4. **Photo 4 (`/images/4.jpg`) — Ceremonial Detail Spotlight**: Close-up vignette of hands and rings framed with celebration details.
5. **Closing Frame (`/images/3.jpg`) — Family Blessing**: Cleanly framed portrait with delicate stationery corner accents anchored directly above the closing sign-off.

---

## 6. Local Development & Deployment

### Prerequisites
- Node.js 18+ (tested on Node 20 / 22 / 24)
- npm 9+

### Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/shezinahmed7-collab/we.git
cd we

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Compile optimized production build
npm run build

# 5. Preview production build locally
npm run preview
```

### Vercel Deployment & Build Hygiene
When deploying on Linux containers such as Vercel:
1. **Never Commit `node_modules`**: `.gitignore` ensures `node_modules/` and `dist/` remain untracked so Linux builds do not encounter Windows execution bit conflicts.
2. **Simplified Build Script**: `package.json` specifies `"build": "vite build"`, eliminating `sh: tsc: Permission denied (exit code 126)` issues while Vite handles complete production bundling and tree-shaking.
3. **Optimized Media Assets**: Background music (`/audio/celebration-melody.mp3`) is pre-encoded as a clean 192kbps CBR MP3 (384 KB) for instant pre-warming and stutter-free mobile scrolling.

---

## 7. Credits & Authorship

- **Concept, Design & Engineering**: Shezin Ahmed ([@shezin.ahmd](https://www.instagram.com/shezin.ahmd/))
- **Inquiries & Custom Commissions**: [instagram.com/shezin.ahmd](https://www.instagram.com/shezin.ahmd/)

---

*Made with love for Dr. Sreehari & Dr. Daya Uday.*