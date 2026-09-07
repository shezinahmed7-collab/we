import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { WeddingData } from '../types/wedding';
import { OrnamentalDivider, GeometricCardCorners } from './OrnamentalDivider';

interface HeroProps {
  data: WeddingData;
  onOpenInvitation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ data, onOpenInvitation }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isStationery = data.hero.style === 'stationery';

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden p-4 sm:p-6 md:p-8 bg-wedding-bg">
      {/* Optional Photo Background (Only active if hero.style === 'photo') */}
      {!isStationery && data.hero.photoUrl && (
        <div className="absolute inset-0 z-0">
          <img
            src={data.hero.photoUrl}
            alt={`${data.couple.groom} & ${data.couple.bride}`}
            className="w-full h-full object-cover object-center filter brightness-90 contrast-[1.02]"
            loading="eager"
          />
          <div
            className="absolute inset-0 bg-stone-950"
            style={{ opacity: data.hero.overlayDarkness ?? 0.4 }}
          />
        </div>
      )}

      {/* Main Luxury Stationery Card Frame */}
      <div
        className={`relative z-10 w-full max-w-2xl mx-auto my-auto p-8 sm:p-14 md:p-16 text-center rounded-sm transition-all duration-1000 ${
          isStationery
            ? 'invitation-card bg-wedding-card shadow-luxury'
            : 'bg-stone-950/85 text-stone-100 border border-wedding-accent/30 shadow-2xl'
        }`}
      >
        {/* Double hairline champagne gold border */}
        <div className="absolute inset-3 sm:inset-4 border border-wedding-accent/35 pointer-events-none rounded-none" />
        <div className="absolute inset-5 sm:inset-6 border border-wedding-accent/20 pointer-events-none rounded-none" />

        {/* Geometric Corner Accents */}
        <GeometricCardCorners />

        {/* 1. Monogram Crest ("S & D") in Minimalist Thin-Line Circle */}
        <div
          className={`transition-all duration-700 delay-100 ${
            mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <OrnamentalDivider variant="monogram" monogram={data.couple.monogram} />
        </div>

        {/* 2. Subtitle: "TOGETHER WITH THEIR FAMILIES" with Refined Letter-Spacing */}
        <div
          className={`transition-all duration-700 delay-200 my-2 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <span className="font-sans text-[11px] sm:text-xs uppercase font-medium tracking-[0.3em] text-wedding-accent block">
            Together With Their Families
          </span>
        </div>

        {/* 3. Couple Names: "Dr. Sreehari & Dr. Daya Uday" in Editorial Serif */}
        <div className="py-2 sm:py-3">
          <h1
            className={`font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-wide leading-tight transition-all duration-700 delay-300 ${
              isStationery ? 'text-wedding-text' : 'text-white drop-shadow-sm'
            } ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            {data.couple.groom}
          </h1>

          <div
            className={`my-1 sm:my-2 transition-all duration-700 delay-400 ${
              mounted ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <span className="font-script text-3xl sm:text-4xl text-wedding-accent opacity-90">
              &amp;
            </span>
          </div>

          <h1
            className={`font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-wide leading-tight transition-all duration-700 delay-500 ${
              isStationery ? 'text-wedding-text' : 'text-white drop-shadow-sm'
            } ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            {data.couple.bride}
          </h1>
        </div>

        {/* Divider */}
        <div
          className={`transition-all duration-700 delay-600 ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <OrnamentalDivider variant="flourish" />
        </div>

        {/* 4. Date and Ceremonial Tagline */}
        <div
          className={`transition-all duration-700 delay-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <p
            className={`font-serif italic text-base sm:text-lg mb-3 ${
              isStationery ? 'text-wedding-muted' : 'text-stone-200/90'
            }`}
          >
            "{data.couple.storyQuote}"
          </p>

          <div className="inline-block py-2 px-6 border-y border-wedding-accent/30 my-1">
            <span className="font-sans text-xs sm:text-sm tracking-[0.25em] uppercase font-medium text-wedding-accent">
              {data.displayDate} &bull; {data.displayDay}
            </span>
          </div>
        </div>

        {/* Action: Centered, Gold-Bordered "OPEN INVITATION" Button */}
        <div
          className={`mt-8 sm:mt-10 transition-all duration-700 delay-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <button
            onClick={onOpenInvitation}
            className={`group inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-wedding-accent/70 transition-all duration-300 animate-gold-breathe cursor-pointer rounded-none ${
              isStationery
                ? 'bg-wedding-bg hover:bg-wedding-accent hover:text-white text-wedding-text'
                : 'bg-stone-900/80 hover:bg-stone-900 text-white'
            }`}
            aria-label="Open invitation details"
          >
            <span className="font-sans text-xs uppercase tracking-widest-luxury font-medium">
              Open Invitation
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-wedding-accent group-hover:translate-y-0.5 group-hover:text-white transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
