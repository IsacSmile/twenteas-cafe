import React from 'react';
import { Calendar, Coffee, Leaf, MapPin, Trees, Music } from 'lucide-react';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-between items-center overflow-hidden bg-gradient-to-b from-coffee-950 via-[#180E08] to-coffee-950 border-b border-coffee-800/40">
      
      {/* Background Radial Glow & Soft Ambient Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-amber-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-olive-700/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Floating Organic Leaf Silhouettes */}
      <div className="absolute top-28 left-[10%] opacity-20 animate-float pointer-events-none hidden sm:block">
        <Leaf className="w-14 h-14 text-olive-500 rotate-12" />
      </div>
      <div className="absolute bottom-36 right-[12%] opacity-20 animate-float pointer-events-none hidden sm:block" style={{ animationDelay: '3s' }}>
        <Leaf className="w-16 h-16 text-amber-500 -rotate-45" />
      </div>

      <div className="my-auto z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        
        {/* Established Badge */}
        <div className="inline-flex items-center gap-2.5 bg-[#23150D]/80 border border-amber-500/30 px-5 py-2 rounded-full mb-10 shadow-lg backdrop-blur-md animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-amber-300">
            Grand Opening · 4th September 2026
          </span>
        </div>

        {/* Pure High-Fashion Editorial Typography */}
        <div className="space-y-2 mb-8 animate-fade-in-up">
          <h1 className="font-serif-vintage text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] text-cream-50 font-normal tracking-tight leading-none uppercase drop-shadow-md">
            Twenteas
          </h1>
          <p className="font-sans text-xs sm:text-sm md:text-base tracking-[0.7em] sm:tracking-[0.85em] text-amber-300/80 font-light uppercase pl-3">
            C A F E T E R I A
          </p>
        </div>

        {/* Centered Tagline in Quotes */}
        <p className="font-serif-vintage text-2xl sm:text-4xl md:text-5xl italic text-amber-200/90 font-normal tracking-wide mb-6 max-w-3xl leading-snug">
          “Under the trees, around the table”
        </p>

        {/* Short Refined Description */}
        <p className="text-sm sm:text-base md:text-lg text-cream-200/80 max-w-2xl mx-auto font-light leading-relaxed mb-10 text-balance">
          A nature-friendly haven in <strong className="font-medium text-cream-100">Karunagappally</strong> where handcrafted teas, slow wood-fired culinary bites, and unplugged acoustic strings meet in the shade.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-coffee-950 font-bold uppercase tracking-wider text-xs px-9 py-4 rounded-xl shadow-xl shadow-amber-950/60 transition-all duration-300 active:scale-95 glow-gold"
          >
            <Coffee className="w-4 h-4" />
            Explore Menu Highlights
          </a>

          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#23150D]/90 hover:bg-[#2E1C12] text-cream-100 border border-amber-500/40 hover:border-amber-400 font-semibold uppercase tracking-wider text-xs px-9 py-4 rounded-xl transition-all duration-300 active:scale-95 backdrop-blur-md shadow-lg"
          >
            <Calendar className="w-4 h-4 text-amber-400" />
            Reserve Outdoor Table
          </button>
        </div>

      </div>

      {/* Bottom Highlights Bar */}
      <div className="w-full max-w-5xl mx-auto px-4 z-10 pt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl bg-[#1C120B]/60 backdrop-blur-md border border-coffee-800/50 text-xs text-cream-200/90">
          
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <div className="p-2 bg-olive-950/60 border border-olive-700/40 rounded-lg text-olive-400">
              <Trees className="w-4 h-4" />
            </div>
            <div>
              <span className="block font-semibold text-cream-100">Shaded Tree Canopy</span>
              <span className="text-[11px] text-cream-400/60">Open-Air Deck</span>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <div className="p-2 bg-amber-950/60 border border-amber-800/40 rounded-lg text-amber-400">
              <Coffee className="w-4 h-4" />
            </div>
            <div>
              <span className="block font-semibold text-cream-100">Artisanal Brews</span>
              <span className="text-[11px] text-cream-400/60">Teas & Wood-Fired Food</span>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <div className="p-2 bg-coffee-800/60 border border-coffee-700/40 rounded-lg text-amber-300">
              <Music className="w-4 h-4" />
            </div>
            <div>
              <span className="block font-semibold text-cream-100">Live Music & Events</span>
              <span className="text-[11px] text-cream-400/60">Acoustic Sessions</span>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <div className="p-2 bg-olive-950/60 border border-olive-700/40 rounded-lg text-olive-400">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="block font-semibold text-cream-100">Karunagappally</span>
              <span className="text-[11px] text-cream-400/60">Kollam, Kerala</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
