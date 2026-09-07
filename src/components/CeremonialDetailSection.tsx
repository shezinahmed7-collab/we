import React from 'react';
import { Heart } from 'lucide-react';
import { WeddingData } from '../types/wedding';
import { GeometricCardCorners, OrnamentalDivider } from './OrnamentalDivider';

interface CeremonialDetailSectionProps {
  data: WeddingData;
}

export const CeremonialDetailSection: React.FC<CeremonialDetailSectionProps> = ({ data }) => {
  return (
    <section className="py-10 sm:py-14 px-4 sm:px-6 max-w-2xl mx-auto text-center">
      <div className="invitation-card ornate-border p-6 sm:p-10 relative bg-wedding-card shadow-card">
        <GeometricCardCorners />

        {/* Ceremonial Detail Photo (Photo 4: 4.jpg / detail) */}
        <div className="relative group max-w-sm mx-auto mb-5">
          <div className="p-2.5 sm:p-3 bg-wedding-bg shadow-sm rounded-sm border border-wedding-accent/25">
            <div className="relative aspect-[3/4] overflow-hidden rounded-none">
              <img
                src={data.photos.detail}
                alt="Ceremonial Detail - Rings & Vows"
                className="w-full h-full object-cover object-center filter contrast-[1.02] transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-2 border border-wedding-accent/30 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-wedding-accent/10 text-wedding-accent mb-2">
          <Heart className="w-4 h-4 fill-wedding-accent/20" />
        </div>

        <span className="font-sans text-[11px] uppercase tracking-widest-luxury text-wedding-accent font-semibold block mb-2">
          Sacred Vows &amp; Eternal Bond
        </span>

        <p className="font-serif italic text-lg sm:text-xl text-wedding-text font-light max-w-md mx-auto leading-snug">
          "A promise of forever, held in love and bound with timeless devotion."
        </p>

        <OrnamentalDivider variant="simple" className="!my-4" />
      </div>
    </section>
  );
};
