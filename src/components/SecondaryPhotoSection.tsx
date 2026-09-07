import React from 'react';
import { WeddingData } from '../types/wedding';

interface SecondaryPhotoSectionProps {
  data: WeddingData;
}

export const SecondaryPhotoSection: React.FC<SecondaryPhotoSectionProps> = ({ data }) => {
  return (
    <section className="my-12 sm:my-16 relative w-full overflow-hidden">
      {/* Widescreen Banner with height: 380px and object-position: center 30% */}
      <div className="relative w-full h-[380px]">
        <img
          src={data.photos.banner}
          alt="Dr. Sreehari & Dr. Daya Uday"
          className="w-full h-[380px] object-cover filter brightness-[0.92] contrast-[1.02]"
          style={{ objectPosition: 'center 30%' }}
          loading="lazy"
        />
        {/* Subtle dark veil overlay */}
        <div className="absolute inset-0 bg-stone-950/30" />

        {/* Framing border */}
        <div className="absolute inset-3 sm:inset-6 border border-wedding-accent/30 pointer-events-none" />

        {/* Frosted Quote Overlay: centered horizontally and positioned to keep faces completely unobstructed */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-7 sm:pb-9 px-4 text-center text-white">
          <div className="max-w-md mx-auto bg-stone-950/80 px-6 py-4 rounded-sm border border-wedding-accent/30 shadow-xl transform translate3d(0,0,0)">
            <span className="font-serif italic text-xl sm:text-2xl md:text-3xl font-light text-stone-100 leading-snug drop-shadow-sm block">
              "Two lives, two stories, one beautiful journey."
            </span>
            <div className="mt-2 flex items-center justify-center gap-2">
              <div className="w-5 h-[1px] bg-wedding-accent-light/60" />
              <span className="font-script text-lg text-wedding-accent-light">together</span>
              <div className="w-5 h-[1px] bg-wedding-accent-light/60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
