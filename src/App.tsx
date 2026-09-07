import React, { useEffect, useRef } from 'react';
import { weddingData } from './config/weddingData';
import { Hero } from './components/Hero';
import { InvitationIntro } from './components/InvitationIntro';
import { CoupleSection } from './components/CoupleSection';
import { Countdown } from './components/Countdown';
import { CandidStorySection } from './components/CandidStorySection';
import { SecondaryPhotoSection } from './components/SecondaryPhotoSection';
import { Events } from './components/Events';
import { CeremonialDetailSection } from './components/CeremonialDetailSection';
import { Venue } from './components/Venue';
import { ClosingPhoto } from './components/ClosingPhoto';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Bind centralized theme tokens directly to CSS custom variables
  useEffect(() => {
    const root = document.documentElement;
    if (weddingData.theme) {
      if (weddingData.theme.background) root.style.setProperty('--color-bg', weddingData.theme.background);
      if (weddingData.theme.surfaceCard) root.style.setProperty('--color-card', weddingData.theme.surfaceCard);
      if (weddingData.theme.accentGold) root.style.setProperty('--color-accent', weddingData.theme.accentGold);
      if (weddingData.theme.primaryText) root.style.setProperty('--color-text', weddingData.theme.primaryText);
      if (weddingData.theme.secondaryText) root.style.setProperty('--color-text-muted', weddingData.theme.secondaryText);
    }
  }, []);

  // Seamless Audio Autoplay on First Interaction (Button click, touch, or key)
  useEffect(() => {
    if (!weddingData.music?.enabled || !weddingData.music?.url) return;

    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }

    const playAudio = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().catch((err) => {
          console.warn('Audio waiting for explicit user gesture:', err);
        });
      }
    };

    // One-time lightweight passive listeners that don't block the main thread
    window.addEventListener('click', playAudio, { once: true, passive: true });
    window.addEventListener('touchstart', playAudio, { once: true, passive: true });
    window.addEventListener('keydown', playAudio, { once: true, passive: true });

    return () => {
      window.removeEventListener('click', playAudio);
      window.removeEventListener('touchstart', playAudio);
      window.removeEventListener('keydown', playAudio);
    };
  }, []);

  const handleOpenInvitation = () => {
    // Trigger background audio immediately upon clicking "OPEN INVITATION"
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.play().catch((err) => {
        console.warn('Audio play initiated on user click:', err);
      });
    }

    const target = document.getElementById('invitation-details');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full paper-texture overflow-x-hidden text-wedding-text selection:bg-wedding-accent/20">
      {/* Isolated Root Audio Element with Buffer Pre-warming */}
      {weddingData.music?.enabled && (
        <audio
          ref={audioRef}
          src={weddingData.music.url}
          preload="auto"
          loop
          playsInline
          className="hidden"
          aria-hidden="true"
        />
      )}

      {/* 1. Landing & Hero Unveil (Stationery Card Aesthetics) */}
      <Hero data={weddingData} onOpenInvitation={handleOpenInvitation} />

      {/* Main Ceremonial Itinerary Body */}
      <main className="w-full">
        {/* 2. Announcement & 3-Item Quick Detail Banner */}
        <InvitationIntro data={weddingData} />

        {/* 3. Photo 1: Main Couple Spotlight & Family Lineage (1.jpg: mainPortrait) */}
        <CoupleSection data={weddingData} />

        {/* 4. Countdown Timer */}
        <Countdown data={weddingData} />

        {/* 5. Photo 2: Candid Story Card ("Our Moments - Our Story") (2.jpg: candidStory) */}
        <CandidStorySection data={weddingData} />

        {/* 6. Photo 3: Widescreen Visual Break with adjusted top focus (couple-walk.jpg: banner) */}
        <SecondaryPhotoSection data={weddingData} />

        {/* 7. Order of Celebration (Events) */}
        <Events data={weddingData} />

        {/* 8. Photo 4: Ceremonial Detail Spotlight (4.jpg: detail) */}
        <CeremonialDetailSection data={weddingData} />

        {/* 9. Venue Spotlight & Directions */}
        <Venue data={weddingData} />

        {/* 10. Closing Frame with Corridor Walk (3.jpg: closing) & Sign-off */}
        <ClosingPhoto data={weddingData} />
      </main>

      {/* 11. Minimalist Footer & Creator Attribution */}
      <Footer data={weddingData} />
    </div>
  );
};

export default App;
