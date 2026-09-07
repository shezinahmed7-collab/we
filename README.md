# Dr. Sreehari & Dr. Daya Uday — Luxury Digital Wedding Invitation Suite

A bespoke, universally neutral online wedding invitation and ceremonial itinerary application created for **Dr. Sreehari & Dr. Daya Uday** featuring an **Exact 4-Photo Editorial System** (`1.jpg`, `2.jpg`, `3.jpg`, `4.jpg`) and **interaction-triggered background audio**.

---

## The 4-Photo System Mapping

All four photographs occupy dedicated, intentional sections in the layout without any wasted slots:

1. **PHOTO 1 (`/images/1.jpg`) — Primary Couple Spotlight**:
   - Featured in the **Couple & Family Spotlight** section alongside names, personal quote, and family lineage cards for both Groom (*Mr. Bijukumar S & Mrs. Jayasree SR, Sabari, Sreeshailam, Ampalathumkala*) and Bride (*Udayakumar D & Suja Sudhakar, Diya Uday, Nest, Parippally*).
2. **PHOTO 2 (`/images/2.jpg`) — Candid Story Card**:
   - Featured in the dedicated **"Our Moments • Our Story"** card (clay pottery date session) highlighting the couple's candid connection.
3. **PHOTO 3 (`/images/3.jpg` / `/images/1.jpg` banner)** — **Widescreen Visual Break**:
   - Full-width panoramic visual transition placed before the events schedule with calibrated top-focus (`object-position: center 20%`) so the groom's and bride's faces remain completely uncropped, accompanied by the quote *"Two lives, two stories, one beautiful journey."*
4. **PHOTO 4 (`/images/4.jpg`) — Ceremonial Detail Spotlight**:
   - Featured in a dedicated ceremonial detail card highlighting sacred vows, rings, and the ceremonial bond.
5. **CLOSING FRAME (`/images/3.jpg`) — Corridor Walk Portrait**:
   - Featured directly above the closing blessings (*"We look forward to your presence, blessings and best wishes."*) and formal signature (*"Invited by Both Families"*).

---

## Seamless Audio Autoplay on First Interaction

- No floating button clutter: the manual music toggle button has been completely eliminated.
- Background audio triggers automatically when the guest clicks **"OPEN INVITATION ⌵"** or performs an initial touch/click anywhere on the page (complying strictly with modern browser autoplay policies).

---

## Centralized Configuration (`src/config/weddingData.ts`)

```typescript
export const weddingData = {
  couple: {
    groom: "Dr. Sreehari",
    bride: "Dr. Daya Uday",
    monogram: "S & D",
    storyQuote: "Two families, two hearts, united as one.",
    family: {
      groom: {
        father: "Mr. Bijukumar S",
        mother: "Mrs. Jayasree SR",
        sibling: "Sabari",
        residence: "Sreeshailam, Ampalathumkala"
      },
      bride: {
        father: "Udayakumar D",
        mother: "Suja Sudhakar",
        sibling: "Diya Uday",
        residence: "Nest, Parippally"
      }
    }
  },

  weddingDate: "2026-12-03T11:49:00",
  displayDate: "Dec 03, 2026",
  displayDay: "Thursday",
  displayTime: "11:49 AM – 12:10 PM",

  invitationText:
    "With the blessings of Almighty & Our Forefathers, we joyfully invite you to grace the auspicious occasion of our wedding.",

  hero: {
    style: "stationery"
  },

  photos: {
    mainPortrait: "/images/1.jpg", // Formal portrait for Primary Couple Section
    candidStory: "/images/2.jpg",  // Clay pottery session for "Our Moments"
    banner: "/images/1.jpg",       // Widescreen break with adjusted top cropping
    detail: "/images/4.jpg",       // Ceremonial hands/ring exchange
    storyWalk: "/images/3.jpg"     // Corridor walk for final closing frame
  },

  venue: {
    name: "Raj Rotanas Convention Center",
    address: "Raj Rotanas Convention Center, Parippally, Kerala",
    mapsUrl: "https://share.google/u81k89XPFILLaLGMv",
    logisticsNote: "Muhurtham: 11:49 AM to 12:10 PM. Parking and dining arrangements available at the venue."
  },

  events: [
    {
      name: "The Wedding Ceremony (Muhurtham)",
      day: "Thursday",
      date: "December 3, 2026",
      time: "11:49 AM – 12:10 PM",
      venue: "Raj Rotanas Convention Center",
      address: "Parippally, Kerala",
      description: "Auspicious wedding solemnisation followed by celebratory feast.",
      mapsUrl: "https://share.google/u81k89XPFILLaLGMv",
      calUrl: "https://calendar.google.com"
    }
  ],

  music: {
    enabled: true,
    url: "/audio/celebration-melody.mp3"
  },

  theme: {
    background: "#FAF7F2",
    surfaceCard: "#FFFFFF",
    accentGold: "#C5A869",
    primaryText: "#23211F",
    secondaryText: "#6E6862"
  },

  closing: {
    sentiment: "We look forward to your presence, blessings and best wishes.",
    signature: "Invited by Both Families"
  },

  credit: {
    enabled: true,
    handle: "@shezin.ahmd",
    instagramUrl: "https://www.instagram.com/shezin.ahmd/"
  }
};
```

---

## Local Development & Preview

```bash
# Start Vite development server
npm run dev

# Build production bundle
npm run build
```
