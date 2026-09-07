import React from 'react';
import { Calendar, ChevronDown, Compass } from 'lucide-react';
import { TwenteasLogo } from './TwenteasLogo';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-between items-center overflow-hidden bg-[#140D08]">
      
      {/* Soft Full-Bleed Dappled Sunlight & Tree Canopy Background Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity filter saturate-50 pointer-events-none transition-opacity duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=2000&q=80')`,
        }}
      />

      {/* Ambient Lighting Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#140D08]/90 via-[#140D08]/75 to-[#140D08] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-600/8 rounded-full blur-[160px] pointer-events-none" />

      {/* Hero Central Content */}
      <div className="my-auto z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Logo Mark Header */}
        <div className="mb-8 opacity-90 transform hover:scale-102 transition-transform duration-500">
          <TwenteasLogo size="lg" variant="boxed" />
        </div>

        {/* Vintage Letterpress Typography Wordmark */}
        <div className="space-y-2 mb-6">
          <h1 className="font-serif-vintage text-6xl sm:text-8xl md:text-9xl text-cream-100 font-normal tracking-tight leading-none uppercase drop-shadow-md">
            Twenteas
          </h1>
          <p className="font-sans text-xs sm:text-sm tracking-[0.75em] text-cream-100/60 font-light uppercase pl-3">
            C A F E T E R I A
          </p>
        </div>

        {/* Tagline in Quotes */}
        <p className="font-serif-vintage text-2xl sm:text-4xl italic text-amber-200/90 font-normal tracking-wide mb-8 max-w-2xl leading-relaxed">
          “Under the trees, around the table.”
        </p>

        {/* Opening Location Subtext */}
        <p className="text-xs sm:text-sm text-cream-100/70 max-w-lg mx-auto font-light leading-relaxed mb-12 tracking-wide">
          A nature-friendly cafe-studio in <strong className="font-medium text-cream-100">Karunagappally</strong>. Opened 4th September 2026.
        </p>

        {/* Two Soft CTAs Max */}
        <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border border-amber-500/40 hover:border-amber-400 bg-amber-600/90 hover:bg-amber-500 text-coffee-950 font-bold uppercase tracking-[0.2em] text-xs px-9 py-4 rounded-full shadow-2xl transition-all duration-300 active:scale-95"
          >
            <Compass className="w-4 h-4" />
            Explore The Showcase
          </a>

          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border border-cream-100/20 hover:border-amber-400/60 bg-cream-100/5 hover:bg-cream-100/10 text-cream-100 font-semibold uppercase tracking-[0.2em] text-xs px-9 py-4 rounded-full transition-all duration-300 active:scale-95 backdrop-blur-md"
          >
            <Calendar className="w-4 h-4 text-amber-400" />
            Plan Your Visit
          </button>
        </div>

      </div>

      {/* Down Scroll Indicator */}
      <a
        href="#story"
        className="relative z-10 text-cream-100/40 hover:text-amber-300 transition-colors p-2 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em]"
        aria-label="Scroll to Our Story"
      >
        <span>Discover Our Story</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-amber-400/70" />
      </a>

    </section>
  );
};
