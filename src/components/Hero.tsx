import React from 'react';
import { Calendar, Compass, Leaf, Trees, Sun, MapPin } from 'lucide-react';
import { TwenteasLogo } from './TwenteasLogo';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  return (
    <section className="relative min-h-[95vh] pt-32 pb-16 flex flex-col justify-between items-center overflow-hidden bg-[#140D08]">
      
      {/* Nature Background: Dappled Sunlight Filtering Through Lush Green Leaves */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity filter saturate-[0.85] pointer-events-none transition-opacity duration-1000 scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=2000&q=80')`,
        }}
      />

      {/* Warm Botanical Ambient Lighting Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#140D08]/90 via-[#140D08]/75 to-[#140D08] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-amber-600/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-olive-700/15 rounded-full blur-[150px] pointer-events-none" />

      {/* Floating Organic Botanical Leaf SVG Accents */}
      <div className="absolute top-24 left-[8%] opacity-25 animate-float pointer-events-none hidden md:block">
        <Leaf className="w-16 h-16 text-olive-400 rotate-12" />
      </div>
      <div className="absolute bottom-32 right-[10%] opacity-25 animate-float pointer-events-none hidden md:block" style={{ animationDelay: '3.5s' }}>
        <Trees className="w-16 h-16 text-amber-500 -rotate-12" />
      </div>

      {/* Hero Core Content Container */}
      <div className="my-auto z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Nature-Friendly Announcement Pill */}
        <div className="inline-flex items-center gap-2.5 bg-[#1C120B]/90 border border-olive-500/30 px-5 py-2 rounded-full mb-8 shadow-xl backdrop-blur-md animate-fade-in-up">
          <Leaf className="w-4 h-4 text-olive-400 animate-pulse" />
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-olive-300">
            Nature-Friendly Cafe-Studio · Karunagappally
          </span>
        </div>

        {/* Logo Mark Header */}
        <div className="mb-6 opacity-95 transform hover:scale-102 transition-transform duration-500">
          <TwenteasLogo size="lg" variant="boxed" />
        </div>

        {/* High-Fashion Vintage Letterpress Title */}
        <div className="space-y-1.5 mb-6 animate-fade-in-up">
          <h1 className="font-serif-vintage text-6xl sm:text-8xl md:text-9xl text-cream-100 font-normal tracking-tight leading-none uppercase drop-shadow-md">
            Twenteas
          </h1>
          <p className="font-sans text-xs sm:text-sm tracking-[0.8em] text-amber-300/80 font-light uppercase pl-3">
            C A F E T E R I A
          </p>
        </div>

        {/* Tagline in Quotes */}
        <p className="font-serif-vintage text-2xl sm:text-4xl md:text-5xl italic text-amber-200/95 font-normal tracking-wide mb-6 max-w-3xl leading-snug">
          “Under the trees, around the table.”
        </p>

        {/* Refined Description emphasizing Nature & Slow Living */}
        <p className="text-sm sm:text-base md:text-lg text-cream-100/80 max-w-2xl mx-auto font-light leading-relaxed mb-10 text-balance">
          A serene open-air sanctuary shaded by ancient green foliage. Slow down with artisanal organic tea, wood-fired bites, and quiet conversation. Opened 4th September 2026.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12">
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border border-amber-500/40 hover:border-amber-400 bg-amber-600 hover:bg-amber-500 text-coffee-950 font-bold uppercase tracking-[0.2em] text-xs px-9 py-4 rounded-full shadow-2xl transition-all duration-300 active:scale-95 glow-gold"
          >
            <Compass className="w-4 h-4" />
            Explore The Showcase
          </a>

          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border border-cream-100/20 hover:border-amber-400/60 bg-[#1C120B]/80 hover:bg-cream-100/10 text-cream-100 font-semibold uppercase tracking-[0.2em] text-xs px-9 py-4 rounded-full transition-all duration-300 active:scale-95 backdrop-blur-md shadow-lg"
          >
            <Calendar className="w-4 h-4 text-amber-400" />
            Plan Your Visit Under Trees
          </button>
        </div>

      </div>

      {/* Nature Highlights Bar at Hero Bottom */}
      <div className="w-full max-w-5xl mx-auto px-6 z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl bg-[#1C120B]/70 backdrop-blur-md border border-cream-100/10 text-xs text-cream-100/80">
          
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <div className="p-2 bg-olive-950/70 border border-olive-700/50 rounded-xl text-olive-400">
              <Trees className="w-4 h-4" />
            </div>
            <div>
              <span className="block font-medium text-cream-100">Shaded Tree Canopy</span>
              <span className="text-[11px] text-cream-100/50">100% Outdoor Seating</span>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <div className="p-2 bg-amber-950/70 border border-amber-800/50 rounded-xl text-amber-400">
              <Leaf className="w-4 h-4" />
            </div>
            <div>
              <span className="block font-medium text-cream-100">Artisanal Organic Teas</span>
              <span className="text-[11px] text-cream-100/50">Fresh Single-Origin</span>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <div className="p-2 bg-coffee-850 border border-coffee-750 rounded-xl text-amber-300">
              <Sun className="w-4 h-4" />
            </div>
            <div>
              <span className="block font-medium text-cream-100">Dappled Sunlight</span>
              <span className="text-[11px] text-cream-100/50">Quiet Open-Air Studio</span>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <div className="p-2 bg-olive-950/70 border border-olive-700/50 rounded-xl text-olive-400">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="block font-medium text-cream-100">Karunagappally</span>
              <span className="text-[11px] text-cream-100/50">Kollam, Kerala</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
