import React from 'react';
import { WeddingData } from '../types/wedding';
import { CreatorCredit } from './CreatorCredit';

interface FooterProps {
  data: WeddingData;
}

export const Footer: React.FC<FooterProps> = ({ data }) => {
  return (
    <footer className="pt-8 pb-4 px-4 bg-wedding-bg text-center">
      <div className="w-12 h-[1px] bg-wedding-accent/25 mx-auto mb-4" />
      <CreatorCredit credit={data.credit} />
    </footer>
  );
};
