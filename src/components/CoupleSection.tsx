import React from 'react';
import { WeddingData } from '../types/wedding';
import { OrnamentalDivider } from './OrnamentalDivider';

interface CoupleSectionProps {
  data: WeddingData;
}

export const CoupleSection: React.FC<CoupleSectionProps> = ({ data }) => {
  const { groom, bride } = data.couple.family;

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
        {/* Primary Formal Couple Portrait (1.jpg: mainPortrait) */}
        <div className="md:col-span-5 relative group">
          <div className="relative p-2.5 sm:p-3 bg-wedding-card shadow-card rounded-sm border border-wedding-accent/25">
            <div className="relative aspect-[3/4] overflow-hidden rounded-none bg-wedding-bg">
              <img
                src={data.photos.mainPortrait}
                alt={`${data.couple.groom} & ${data.couple.bride}`}
                className="w-full h-full object-cover object-top filter contrast-[1.02] transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-2 border border-wedding-accent/30 pointer-events-none" />
            </div>
          </div>
          <div className="hidden sm:block absolute -inset-2 border border-wedding-accent/20 -z-10 translate-x-2.5 translate-y-2.5 pointer-events-none" />
        </div>

        {/* Editorial Content & Family Lineage */}
        <div className="md:col-span-7 text-center md:text-left flex flex-col justify-center">
          <span className="font-sans text-xs uppercase tracking-widest-luxury text-wedding-accent font-semibold mb-2">
            The Couple
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-wedding-text font-normal leading-tight">
            {data.couple.groom}
          </h2>

          <div className="my-1.5 flex items-center justify-center md:justify-start gap-4">
            <span className="font-script text-3xl sm:text-4xl text-wedding-accent">
              &amp;
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-wedding-text font-normal leading-tight">
            {data.couple.bride}
          </h2>

          <OrnamentalDivider variant="simple" className="md:!justify-start !my-4" />

          {/* Personal Quote */}
          <p className="font-serif italic text-lg sm:text-xl text-wedding-text/90 font-light leading-relaxed max-w-lg mx-auto md:mx-0 mb-6">
            "{data.couple.storyQuote}"
          </p>

          {/* Family Lineage Cards */}
          <div className="pt-4 border-t border-wedding-accent/20 space-y-4 text-left">
            <span className="font-sans text-[11px] uppercase tracking-widest text-wedding-accent font-semibold block text-center md:text-left">
              Family Lineage
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Groom's Family Card */}
              <div className="p-4 bg-wedding-bg/70 border border-wedding-accent/20 rounded-sm">
                <span className="font-sans text-[10px] uppercase tracking-wider text-wedding-accent font-semibold block mb-1">
                  Groom's Family
                </span>
                <p className="font-serif text-base text-wedding-text font-medium leading-snug">
                  {groom.father}
                </p>
                <p className="font-serif text-base text-wedding-text font-medium leading-snug">
                  &amp; {groom.mother}
                </p>
                <div className="mt-2 text-xs text-wedding-muted space-y-0.5 border-t border-wedding-accent/15 pt-2">
                  <p><span className="text-wedding-text/80 font-medium">Sibling:</span> {groom.sibling}</p>
                  <p className="italic text-[11px] text-wedding-muted">{groom.residence}</p>
                </div>
              </div>

              {/* Bride's Family Card */}
              <div className="p-4 bg-wedding-bg/70 border border-wedding-accent/20 rounded-sm">
                <span className="font-sans text-[10px] uppercase tracking-wider text-wedding-accent font-semibold block mb-1">
                  Bride's Family
                </span>
                <p className="font-serif text-base text-wedding-text font-medium leading-snug">
                  {bride.father}
                </p>
                <p className="font-serif text-base text-wedding-text font-medium leading-snug">
                  &amp; {bride.mother}
                </p>
                <div className="mt-2 text-xs text-wedding-muted space-y-0.5 border-t border-wedding-accent/15 pt-2">
                  <p><span className="text-wedding-text/80 font-medium">Sibling:</span> {bride.sibling}</p>
                  <p className="italic text-[11px] text-wedding-muted">{bride.residence}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
