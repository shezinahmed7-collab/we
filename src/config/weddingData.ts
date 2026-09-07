import { WeddingData } from '../types/wedding';

export const weddingData: WeddingData = {
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
  displayTime: "11:49 AM - 12:10 PM",

  invitationText:
    "With the blessings of Almighty & Our Forefathers, we joyfully invite you to grace the auspicious occasion of our wedding.",

  hero: {
    style: "stationery"
  },

  photos: {
    mainPortrait: "/images/1.jpg",
    candidStory: "/images/2.jpg",
    banner: "/images/couple-walk.jpg",
    detail: "/images/4.jpg",
    closing: "/images/3.jpg",
    storyWalk: "/images/3.jpg"
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
      time: "11:49 AM - 12:10 PM",
      venue: "Raj Rotanas Convention Center",
      address: "Parippally, Kerala",
      description: "Auspicious wedding solemnisation followed by celebratory feast.",
      mapsUrl: "https://share.google/u81k89XPFILLaLGMv",
      calUrl: "https://calendar.google.com",
      calendarDetails: {
        title: "Dr. Sreehari & Dr. Daya Uday Wedding Ceremony",
        description: "Auspicious wedding solemnisation followed by celebratory feast.",
        location: "Raj Rotanas Convention Center, Parippally, Kerala",
        startDate: "20261203T061900Z",
        endDate: "20261203T073000Z"
      }
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
