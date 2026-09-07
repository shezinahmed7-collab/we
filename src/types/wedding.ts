export interface FamilyMemberInfo {
  father: string;
  mother: string;
  sibling: string;
  residence: string;
}

export interface WeddingEvent {
  name: string;
  day: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  description: string;
  mapsUrl: string;
  calUrl: string;
  calendarDetails?: {
    title?: string;
    description?: string;
    location?: string;
    startDate?: string;
    endDate?: string;
  };
}

export interface WeddingData {
  couple: {
    groom: string;
    bride: string;
    monogram: string;
    storyQuote: string;
    family: {
      groom: FamilyMemberInfo;
      bride: FamilyMemberInfo;
    };
  };

  weddingDate: string; // ISO string e.g. "2026-12-03T11:49:00"
  displayDate: string;
  displayDay: string;
  displayTime: string;

  invitationText: string;

  hero: {
    style: "stationery" | "photo";
    photoUrl?: string;
    overlayDarkness?: number;
  };

  photos: {
    mainPortrait: string; // Photo 1: /images/1.jpg (Primary couple portrait)
    candidStory: string;  // Photo 2: /images/2.jpg (Pottery date candid)
    banner: string;       // Photo 3: /images/couple-walk.jpg (Widescreen banner)
    detail: string;       // Photo 4: /images/4.jpg (Hands / ring exchange)
    closing: string;      // Photo 3: /images/3.jpg (Closing framed portrait)
    storyWalk?: string;   // Optional backwards compatibility alias
  };

  venue: {
    name: string;
    address: string;
    mapsUrl: string;
    logisticsNote: string;
  };

  events: WeddingEvent[];

  music: {
    enabled: boolean;
    url: string;
  };

  theme: {
    background: string;
    surfaceCard: string;
    accentGold: string;
    primaryText: string;
    secondaryText: string;
  };

  closing: {
    sentiment: string;
    signature: string;
  };

  credit: {
    enabled: boolean;
    handle: string;
    instagramUrl: string;
  };
}
