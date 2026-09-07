import React from 'react';

interface OrnamentalDividerProps {
  className?: string;
  variant?: 'simple' | 'flourish' | 'monogram';
  monogram?: string;
}

export const OrnamentalDivider: React.FC<OrnamentalDividerProps> = ({
  className = '',
  variant = 'simple',
  monogram
}) => {
  if (variant === 'monogram' && monogram) {
    return (
      <div className={`flex flex-col items-center justify-center py-3 ${className}`}>
        {/* Minimalist thin-line circle monogram */}
        <div className="relative flex items-center justify-center w-14 h-14 rounded-full border border-wedding-accent/50 bg-wedding-card shadow-sm">
          <div className="absolute inset-1 rounded-full border border-wedding-accent/20" />
          <span className="font-serif italic text-base tracking-widest text-wedding-accent font-medium">
            {monogram}
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'flourish') {
    return (
      <div className={`flex items-center justify-center gap-3 my-5 opacity-80 ${className}`}>
        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-wedding-accent/60 to-wedding-accent" />
        {/* Minimalist geometric diamond accent */}
        <div className="w-2 h-2 rotate-45 border border-wedding-accent bg-wedding-card" />
        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent via-wedding-accent/60 to-wedding-accent" />
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center gap-2 my-4 opacity-75 ${className}`}>
      <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-wedding-accent/50" />
      <span className="w-1.5 h-1.5 rotate-45 border border-wedding-accent/70 bg-wedding-accent/30" />
      <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-wedding-accent/50" />
    </div>
  );
};

export const GeometricCardCorners: React.FC = () => (
  <>
    <div className="geometric-corner geometric-corner-tl" />
    <div className="geometric-corner geometric-corner-tr" />
    <div className="geometric-corner geometric-corner-bl" />
    <div className="geometric-corner geometric-corner-br" />
  </>
);
