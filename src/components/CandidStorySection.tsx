import React from 'react';
import { Sparkles } from 'lucide-react';
import { WeddingData } from '../types/wedding';
import { GeometricCardCorners } from './OrnamentalDivider';

interface CandidStorySectionProps {
  data: WeddingData;
}

export const CandidStorySection: React.FC<CandidStorySectionProps> = ({ data }) => {
  return (
    <section className="py-10 sm:py-16 px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="invitation-card ornate-border p-6 sm:p-10 relative bg-wedding-card shadow-card">
        <GeometricCardCorners />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
          {/* Candid Story Photo (Photo 2: 2.jpg / candidStory) */}
          <div className="md:col-span-6 relative group">
            <div className="p-2.5 sm:p-3 bg-wedding-bg shadow-sm rounded-sm border border-wedding-accent/25">
              <div className="relative aspect-[4/3] sm:aspect-[1/1] overflow-hidden rounded-none">
                <img
                  src={data.photos.candidStory}
                  alt="Our Journey - Moments Together"
                  className="w-full h-full object-cover object-center filter contrast-[1.02] transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-2 border border-wedding-accent/30 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Warm Editorial Story Text */}
          <div className="md:col-span-6 text-center md:text-left flex flex-col justify-center">
            <div className="inline-flex items-center justify-center md:justify-start gap-1.5 text-wedding-accent mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="font-sans text-[11px] uppercase tracking-widest-luxury font-semibold">
                Our Journey &amp; Moments Together
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-wedding-text font-normal leading-tight mb-3">
              Moments Together
            </h3>

            <p className="font-serif italic text-base sm:text-lg text-wedding-text/90 font-light leading-relaxed mb-4">
              "In the quiet everyday moments, amidst shared laughter and gentle conversations, we found our forever."
            </p>

            <div className="pt-3 border-t border-wedding-accent/20">
              <span className="font-sans text-[11px] uppercase tracking-widest text-wedding-muted font-medium">
                {data.couple.groom} &amp; {data.couple.bride}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
