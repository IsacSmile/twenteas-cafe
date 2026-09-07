import React from 'react';
import { Calendar, Coffee, ChevronDown, Leaf, MapPin, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-coffee-950 via-coffee-900 to-coffee-950 border-b border-coffee-800/40">
      
      {/* Soft Ambient Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-600/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-olive-700/8 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle Leaf Accents */}
      <div className="absolute top-24 left-[8%] opacity-15 animate-float pointer-events-none hidden sm:block">
        <Leaf className="w-12 h-12 text-olive-500 rotate-12" />
      </div>
      <div className="absolute bottom-28 right-[10%] opacity-15 animate-float pointer-events-none hidden sm:block" style={{ animationDelay: '2.5s' }}>
        <Leaf className="w-14 h-14 text-amber-500 -rotate-45" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        
        {/* Grand Opening Badge */}
        <div className="inline-flex items-center gap-2 bg-coffee-850/90 border border-amber-500/30 px-4 py-1.5 rounded-full mb-10 shadow-sm backdrop-blur-md animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-[11px] sm:text-xs uppercase tracking-widest font-semibold text-amber-300">
            Grand Opening · 4th September 2026
          </span>
        </div>

        {/* Pure Typography Branding (NO LOGO IMAGE IN HERO) */}
        <div className="space-y-1 mb-8 animate-fade-in">
          <h1 className="font-serif-vintage text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-cream-50 font-normal tracking-tight leading-none uppercase drop-shadow-sm">
            Twenteas
          </h1>
          <p className="font-sans text-xs sm:text-sm md:text-base tracking-[0.6em] sm:tracking-[0.75em] text-cream-200/80 font-light uppercase pl-2">
            Cafeteria
          </p>
        </div>

        {/* Centered Tagline in Quotes */}
        <p className="font-serif-vintage text-2xl sm:text-3xl md:text-4xl italic text-amber-300/90 font-normal tracking-wide mb-6 text-balance leading-relaxed">
          “Under the trees, around the table”
        </p>

        {/* Short Refined Description */}
        <p className="text-sm sm:text-base md:text-lg text-cream-200/80 max-w-2xl mx-auto font-light leading-relaxed mb-10 text-balance">
          A nature-friendly sanctuary in <strong className="font-medium text-cream-100">Karunagappally</strong> where handcrafted teas, wood-fired bites, and unplugged acoustic notes come together in the shade.
        </p>

        {/* Vibe Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12 text-xs text-cream-300/80 font-medium">
          <span className="inline-flex items-center gap-1.5 bg-coffee-850/60 border border-coffee-800/80 px-3.5 py-1.5 rounded-full">
            <Leaf className="w-3.5 h-3.5 text-olive-500" />
            Nature-Friendly Café
          </span>
          <span className="inline-flex items-center gap-1.5 bg-coffee-850/60 border border-coffee-800/80 px-3.5 py-1.5 rounded-full">
            <Coffee className="w-3.5 h-3.5 text-amber-500" />
            Artisanal Teas & Food
          </span>
          <span className="inline-flex items-center gap-1.5 bg-coffee-850/60 border border-coffee-800/80 px-3.5 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Music & Live Events
          </span>
          <span className="inline-flex items-center gap-1.5 bg-coffee-850/60 border border-coffee-800/80 px-3.5 py-1.5 rounded-full">
            <MapPin className="w-3.5 h-3.5 text-olive-500" />
            Karunagappally
          </span>
        </div>

        {/* Two Soft CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-amber-600 hover:bg-amber-500 text-coffee-950 font-bold uppercase tracking-wider text-xs px-8 py-3.5 rounded-md shadow-lg shadow-amber-950/40 transition-all duration-200 active:scale-95"
          >
            <Coffee className="w-4 h-4" />
            Explore Menu Highlights
          </a>

          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-coffee-850/90 hover:bg-coffee-800 text-cream-100 border border-amber-500/40 hover:border-amber-400 font-semibold uppercase tracking-wider text-xs px-8 py-3.5 rounded-md transition-all duration-200 active:scale-95 backdrop-blur-sm"
          >
            <Calendar className="w-4 h-4 text-amber-400" />
            Reserve Outdoor Table
          </button>
        </div>

      </div>

      {/* Down Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream-400/50 hover:text-amber-400 transition-colors p-2 flex flex-col items-center gap-1 text-[10px] uppercase tracking-widest"
        aria-label="Scroll to About Section"
      >
        <span>Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-amber-500/80" />
      </a>

    </section>
  );
};
