import React from 'react';
import { Heart } from 'lucide-react';
import { WeddingData } from '../types/wedding';
import { OrnamentalDivider, GeometricCardCorners } from './OrnamentalDivider';

interface ClosingPhotoProps {
  data: WeddingData;
}

export const ClosingPhoto: React.FC<ClosingPhotoProps> = ({ data }) => {
  const closingPhotoUrl = data.photos.closing || data.photos.storyWalk || '/images/3.jpg';

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-2xl mx-auto text-center">
      <div className="invitation-card ornate-border p-6 sm:p-10 relative bg-wedding-card shadow-card">
        <GeometricCardCorners />

        {/* Final Image in Closing Section (Photo 3: 3.jpg) */}
        {closingPhotoUrl && (
          <div className="relative group max-w-md mx-auto mb-8">
            <img
              src={data.photos.closing || closingPhotoUrl}
              alt="Dr. Sreehari & Dr. Daya Uday"
              className="w-full max-w-md mx-auto rounded-sm object-cover shadow-sm border border-[#C5A869]/30"
              loading="lazy"
            />
          </div>
        )}

        {/* Heart Icon */}
        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-wedding-accent/10 text-wedding-accent mb-3">
          <Heart className="w-4 h-4 fill-wedding-accent/20" />
        </div>

        {/* Closing Blessing Sentiment */}
        <h3 className="font-serif italic text-2xl sm:text-3xl text-wedding-text font-normal max-w-md mx-auto leading-snug">
          "{data.closing.sentiment}"
        </h3>

        <OrnamentalDivider variant="flourish" className="!my-5 text-wedding-accent" />

        {/* Formal Ceremonial Sign-Off Signature */}
        <div className="pt-2">
          <span className="font-serif italic text-lg text-wedding-muted block mb-1">
            With love,
          </span>
          <h4 className="font-serif text-3xl sm:text-4xl text-wedding-text font-normal tracking-wide">
            {data.couple.groom} &amp; {data.couple.bride}
          </h4>
          <p className="font-sans text-xs tracking-widest-luxury uppercase text-wedding-accent font-semibold mt-3">
            {data.closing.signature}
          </p>
        </div>
      </div>
    </section>
  );
};

export const ClosingCard = ClosingPhoto;
