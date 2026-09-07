import React from 'react';
import { TwenteasLogo } from './TwenteasLogo';
import { Calendar, ChevronDown, Leaf, Music, MapPin, Coffee, Utensils } from 'lucide-react';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  return (
    <section className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-coffee-950 via-coffee-900 to-coffee-950 border-b border-coffee-800/40">
      {/* Subtle Background Lighting & Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-olive-700/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating Leaves Accent SVG Shapes */}
      <div className="absolute top-24 left-[10%] opacity-15 animate-float pointer-events-none">
        <Leaf className="w-12 h-12 text-olive-500 rotate-12" />
      </div>
      <div className="absolute bottom-24 right-[12%] opacity-15 animate-float pointer-events-none" style={{ animationDelay: '2s' }}>
        <Leaf className="w-16 h-16 text-amber-500 -rotate-45" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center flex flex-col items-center">
        {/* Opening Date Announcement Badge */}
        <div className="inline-flex items-center gap-2 bg-coffee-850/80 border border-amber-500/30 px-4 py-1.5 rounded-full mb-8 shadow-sm backdrop-blur-sm animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-xs uppercase tracking-widest font-semibold text-amber-300">
            Grand Opening · 4th September 2026
          </span>
        </div>

        {/* Large Prominent Recreated Woodcut Logo */}
        <div className="mb-6 transform transition-transform hover:scale-102 duration-300">
          <TwenteasLogo size="xl" variant="boxed" className="shadow-2xl" />
        </div>

        {/* Tagline */}
        <h1 className="font-serif-vintage text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cream-50 font-normal italic tracking-wide mb-6 text-balance max-w-3xl leading-tight drop-shadow-md">
          “Under the trees, around the table”
        </h1>

        {/* Short Description */}
        <p className="text-base sm:text-lg text-cream-200/80 max-w-2xl mx-auto font-light leading-relaxed mb-8">
          A nature-friendly sanctuary in <strong className="font-medium text-cream-100">Karunagappally</strong> where handmade artisanal teas, wood-fired bites, soul music, and peaceful green shade come together.
        </p>

        {/* Key Feature Vibe Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 text-xs text-cream-200/90 font-medium">
          <span className="inline-flex items-center gap-1.5 bg-coffee-800/40 border border-coffee-700/50 px-3.5 py-1.5 rounded-full">
            <Leaf className="w-3.5 h-3.5 text-olive-500" />
            Nature-Friendly Café
          </span>
          <span className="inline-flex items-center gap-1.5 bg-coffee-800/40 border border-coffee-700/50 px-3.5 py-1.5 rounded-full">
            <Utensils className="w-3.5 h-3.5 text-amber-500" />
            Artisanal Food & Teas
          </span>
          <span className="inline-flex items-center gap-1.5 bg-coffee-800/40 border border-coffee-700/50 px-3.5 py-1.5 rounded-full">
            <Music className="w-3.5 h-3.5 text-amber-400" />
            Music & Live Events
          </span>
          <span className="inline-flex items-center gap-1.5 bg-coffee-800/40 border border-coffee-700/50 px-3.5 py-1.5 rounded-full">
            <MapPin className="w-3.5 h-3.5 text-olive-500" />
            Karunagappally
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-amber-600 hover:bg-amber-500 text-coffee-950 font-bold uppercase tracking-wider text-xs px-8 py-3.5 rounded-md shadow-lg shadow-amber-900/30 transition-all duration-200 active:scale-95"
          >
            <Coffee className="w-4 h-4" />
            Explore Menu Highlights
          </a>

          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-coffee-800/80 hover:bg-coffee-750 text-cream-100 border border-amber-500/40 hover:border-amber-400 font-semibold uppercase tracking-wider text-xs px-8 py-3.5 rounded-md transition-all duration-200 active:scale-95"
          >
            <Calendar className="w-4 h-4 text-amber-400" />
            Reserve Outdoor Table
          </button>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream-400/60 hover:text-amber-400 transition-colors p-2 flex flex-col items-center gap-1 text-[10px] uppercase tracking-widest"
        aria-label="Scroll to About Section"
      >
        <span>Discover</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-amber-500/80" />
      </a>
    </section>
  );
};
