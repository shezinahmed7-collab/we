import React, { useState, useEffect } from 'react';
import { WeddingData } from '../types/wedding';

interface CountdownProps {
  data: WeddingData;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export const Countdown: React.FC<CountdownProps> = ({ data }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const target = new Date(data.weddingDate).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isPast: false
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [data.weddingDate]);

  return (
    <section className="py-8 sm:py-12 px-4 max-w-2xl mx-auto text-center">
      <div className="p-6 sm:p-8 bg-wedding-card border border-wedding-accent/25 shadow-sm rounded-sm transform translate3d(0,0,0)">
        <span className="font-sans text-[11px] uppercase tracking-widest-luxury text-wedding-accent font-semibold block mb-4">
          Counting Down To The Celebration
        </span>

        {timeLeft.isPast ? (
          <div className="py-3">
            <h3 className="font-serif italic text-2xl sm:text-3xl text-wedding-text">
              Today, We Celebrate
            </h3>
            <p className="font-sans text-xs text-wedding-muted mt-1 uppercase tracking-widest">
              The Journey Has Begun
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto">
            {/* DAYS */}
            <div className="flex flex-col items-center p-2.5 sm:p-3 bg-wedding-bg/60 border border-wedding-accent/20 rounded-sm">
              <span className="font-serif text-2xl sm:text-4xl text-wedding-text font-normal">
                {timeLeft.days}
              </span>
              <span className="font-sans text-[10px] sm:text-xs uppercase tracking-widest text-wedding-muted mt-1">
                Days
              </span>
            </div>

            {/* HOURS */}
            <div className="flex flex-col items-center p-2.5 sm:p-3 bg-wedding-bg/60 border border-wedding-accent/20 rounded-sm">
              <span className="font-serif text-2xl sm:text-4xl text-wedding-text font-normal">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="font-sans text-[10px] sm:text-xs uppercase tracking-widest text-wedding-muted mt-1">
                Hours
              </span>
            </div>

            {/* MINUTES */}
            <div className="flex flex-col items-center p-2.5 sm:p-3 bg-wedding-bg/60 border border-wedding-accent/20 rounded-sm">
              <span className="font-serif text-2xl sm:text-4xl text-wedding-text font-normal">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="font-sans text-[10px] sm:text-xs uppercase tracking-widest text-wedding-muted mt-1">
                Minutes
              </span>
            </div>

            {/* SECONDS */}
            <div className="flex flex-col items-center p-2.5 sm:p-3 bg-wedding-bg/60 border border-wedding-accent/20 rounded-sm">
              <span className="font-serif text-2xl sm:text-4xl text-wedding-accent font-normal">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="font-sans text-[10px] sm:text-xs uppercase tracking-widest text-wedding-muted mt-1">
                Seconds
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
