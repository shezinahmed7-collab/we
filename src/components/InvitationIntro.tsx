import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { WeddingData } from '../types/wedding';
import { OrnamentalDivider, GeometricCardCorners } from './OrnamentalDivider';

interface InvitationIntroProps {
  data: WeddingData;
}

export const InvitationIntro: React.FC<InvitationIntroProps> = ({ data }) => {
  return (
    <section id="invitation-details" className="py-12 sm:py-16 px-4 sm:px-6 max-w-4xl mx-auto scroll-mt-6">
      <div className="invitation-card ornate-border p-6 sm:p-10 md:p-12 text-center bg-wedding-card">
        {/* Geometric Corner Accents */}
        <GeometricCardCorners />

        <div className="max-w-2xl mx-auto">
          {/* Monogram Crest */}
          <OrnamentalDivider variant="monogram" monogram={data.couple.monogram} />

          {/* Invitation Text */}
          <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-wedding-text font-light leading-relaxed my-5">
            "{data.invitationText}"
          </p>

          <OrnamentalDivider variant="flourish" />

          {/* 3-Item Quick Detail Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-wedding-accent/20">
            {/* DATE */}
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-wedding-accent/10 flex items-center justify-center text-wedding-accent mb-2">
                <Calendar className="w-4 h-4" />
              </div>
              <span className="font-sans text-[11px] uppercase tracking-widest text-wedding-muted font-medium">
                The Date
              </span>
              <span className="font-serif text-base sm:text-lg text-wedding-text mt-1 font-medium">
                {data.displayDate} ({data.displayDay})
              </span>
            </div>

            {/* MUHURTHAM / TIME */}
            <div className="flex flex-col items-center sm:border-x sm:border-wedding-accent/20 sm:px-4">
              <div className="w-8 h-8 rounded-full bg-wedding-accent/10 flex items-center justify-center text-wedding-accent mb-2">
                <Clock className="w-4 h-4" />
              </div>
              <span className="font-sans text-[11px] uppercase tracking-widest text-wedding-muted font-medium">
                Muhurtham / Time
              </span>
              <span className="font-serif text-base sm:text-lg text-wedding-text mt-1 font-medium">
                {data.displayTime}
              </span>
            </div>

            {/* VENUE */}
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-wedding-accent/10 flex items-center justify-center text-wedding-accent mb-2">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="font-sans text-[11px] uppercase tracking-widest text-wedding-muted font-medium">
                The Venue
              </span>
              <span className="font-serif text-base sm:text-lg text-wedding-text mt-1 font-medium line-clamp-1">
                Raj Rotanas Convention Center, Parippally
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
