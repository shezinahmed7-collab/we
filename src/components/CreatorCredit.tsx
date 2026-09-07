import React from 'react';
import { WeddingData } from '../types/wedding';

interface CreatorCreditProps {
  credit: WeddingData['credit'];
}

export const CreatorCredit: React.FC<CreatorCreditProps> = ({ credit }) => {
  if (!credit?.enabled) return null;

  return (
    <div className="pt-6 pb-12 text-center">
      <p className="font-sans text-[11px] sm:text-xs text-wedding-muted/80 tracking-widest uppercase">
        A DIGITAL INVITATION BY{' '}
        <a
          href={credit.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-wedding-accent hover:text-wedding-accent-dark hover:underline underline-offset-4 transition-colors"
        >
          {credit.handle}
        </a>
      </p>
    </div>
  );
};
