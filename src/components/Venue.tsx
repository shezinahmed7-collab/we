import React from 'react';
import { MapPin, ExternalLink, Navigation } from 'lucide-react';
import { WeddingData } from '../types/wedding';
import { OrnamentalDivider, GeometricCardCorners } from './OrnamentalDivider';

interface VenueProps {
  data: WeddingData;
}

export const Venue: React.FC<VenueProps> = ({ data }) => {
  return (
    <section className="py-10 sm:py-14 px-4 sm:px-6 max-w-3xl mx-auto">
      <div className="invitation-card ornate-border p-6 sm:p-10 text-center relative bg-wedding-card">
        <GeometricCardCorners />

        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-wedding-accent/10 text-wedding-accent mb-4">
          <Navigation className="w-5 h-5" />
        </div>

        <span className="font-sans text-xs uppercase tracking-widest-luxury text-wedding-accent font-semibold block mb-2">
          Venue &amp; Location
        </span>

        <h3 className="font-serif text-3xl sm:text-4xl text-wedding-text font-normal mb-2">
          {data.venue.name}
        </h3>

        <div className="flex items-center justify-center gap-1.5 text-wedding-muted text-sm max-w-md mx-auto my-3">
          <MapPin className="w-4 h-4 text-wedding-accent shrink-0" />
          <span>{data.venue.address}</span>
        </div>

        {data.venue.logisticsNote && (
          <p className="font-sans text-xs text-wedding-muted/80 italic max-w-sm mx-auto mb-6">
            {data.venue.logisticsNote}
          </p>
        )}

        <OrnamentalDivider variant="simple" className="!my-5" />

        {/* Primary GET DIRECTIONS Button */}
        <div className="mt-4">
          <a
            href={data.venue.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-wedding-text text-stone-100 hover:bg-wedding-accent hover:text-white transition-all duration-300 font-sans text-xs uppercase tracking-widest-luxury font-medium shadow-md hover:shadow-lg rounded-none cursor-pointer"
          >
            <span>Get Directions</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
