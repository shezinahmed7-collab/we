import React from 'react';
import { WeddingData } from '../types/wedding';
import { EventCard } from './EventCard';
import { OrnamentalDivider } from './OrnamentalDivider';

interface EventsProps {
  data: WeddingData;
}

export const Events: React.FC<EventsProps> = ({ data }) => {
  // Grid layout adapts smoothly for 1, 2, 3, 4, or 5 modular cards
  const getGridClasses = (count: number) => {
    if (count === 1) return 'max-w-md mx-auto grid-cols-1';
    if (count === 2) return 'max-w-4xl mx-auto grid-cols-1 md:grid-cols-2';
    if (count === 4) return 'max-w-5xl mx-auto grid-cols-1 md:grid-cols-2';
    return 'max-w-6xl mx-auto grid-cols-1 md:grid-cols-3';
  };

  return (
    <section id="wedding-events" className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center mb-8 sm:mb-12">
        <span className="font-sans text-xs uppercase tracking-widest-luxury text-wedding-accent font-semibold block mb-2">
          Celebration Itinerary
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-wedding-text font-normal">
          Order of Celebrations
        </h2>
        <OrnamentalDivider variant="simple" />
        <p className="font-serif italic text-base sm:text-lg text-wedding-muted max-w-md mx-auto">
          We look forward to sharing these meaningful moments with you.
        </p>
      </div>

      {/* Modular Card Grid */}
      <div className={`grid gap-6 ${getGridClasses(data.events.length)}`}>
        {data.events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </section>
  );
};
