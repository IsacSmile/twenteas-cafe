import React from 'react';
import { Compass, Leaf, Trees, Sun, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] pt-24 pb-12 sm:pt-32 sm:pb-16 flex flex-col justify-between items-center overflow-hidden bg-[#140D08]">
      
      {/* Background Dappled Sunlight Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity filter saturate-[0.85] pointer-events-none transition-opacity duration-1000 scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=2000&q=80')`,
        }}
      />

      {/* Ambient Lighting Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#140D08]/90 via-[#140D08]/75 to-[#140D08] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] sm:w-[800px] h-[500px] bg-amber-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 sm:w-96 h-72 sm:h-96 bg-olive-700/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Floating Botanical Silhouettes */}
      <div className="absolute top-24 left-[6%] opacity-20 animate-float pointer-events-none hidden md:block">
        <Leaf className="w-14 h-14 text-olive-400 rotate-12" />
      </div>
      <div className="absolute bottom-32 right-[8%] opacity-20 animate-float pointer-events-none hidden md:block" style={{ animationDelay: '3.5s' }}>
        <Trees className="w-14 h-14 text-amber-500 -rotate-12" />
      </div>

      {/* Hero Core Content */}
      <div className="my-auto z-10 w-full max-w-4xl mx-auto px-5 sm:px-6 text-center flex flex-col items-center">
        
        {/* Walk-in Announcement Pill */}
        <div className="inline-flex items-center gap-2 sm:gap-2.5 bg-[#1C120B]/90 border border-olive-500/30 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full mb-6 sm:mb-8 shadow-xl backdrop-blur-md animate-fade-in-up max-w-full">
          <Leaf className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-olive-400 animate-pulse shrink-0" />
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold text-olive-300 truncate">
            Walk-in Cafe-Studio · Karunagappally
          </span>
        </div>

        {/* Pure Typography Title (No Duplicate Boxed Logo Image inside Hero) */}
        <div className="space-y-1 sm:space-y-2 mb-6 sm:mb-8 animate-fade-in-up w-full">
          <h1 className="font-serif-vintage text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-cream-100 font-normal tracking-tight leading-none uppercase drop-shadow-md">
            Twenteas
          </h1>
          <p className="font-sans text-[10px] sm:text-xs md:text-sm tracking-[0.4em] sm:tracking-[0.75em] text-amber-300/80 font-light uppercase pl-1 sm:pl-2">
            C A F E T E R I A
          </p>
        </div>

        {/* Tagline in Quotes */}
        <p className="font-serif-vintage text-xl sm:text-3xl md:text-4xl italic text-amber-200/95 font-normal tracking-wide mb-5 sm:mb-6 max-w-2xl leading-snug px-2">
          “Under the trees, around the table.”
        </p>

        {/* Description */}
        <p className="text-xs sm:text-base md:text-lg text-cream-100/80 max-w-xl mx-auto font-light leading-relaxed mb-8 sm:mb-10 text-balance px-2">
          A serene open-air sanctuary shaded by ancient green foliage. Walk in, find a seat under the trees, and enjoy slow artisanal chai, wood-fired snacks, and quiet conversation.
        </p>

        {/* Showcase CTA */}
        <div className="w-full sm:w-auto px-4 mb-8 sm:mb-10">
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 border border-amber-500/40 hover:border-amber-400 bg-amber-600 hover:bg-amber-500 text-coffee-950 font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs px-8 sm:px-10 py-3.5 sm:py-4 rounded-full shadow-2xl transition-all duration-300 active:scale-95 glow-gold"
          >
            <Compass className="w-4 h-4 shrink-0" />
            Explore The Culinary Showcase
          </a>
        </div>

      </div>

      {/* Nature Highlights Bar at Hero Bottom */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-[#1C120B]/80 backdrop-blur-md border border-cream-100/10 text-xs text-cream-100/80">
          
          <div className="flex items-center gap-3 p-1">
            <div className="p-2 bg-olive-950/70 border border-olive-700/50 rounded-xl text-olive-400 shrink-0">
              <Trees className="w-4 h-4" />
            </div>
            <div>
              <span className="block font-medium text-cream-100 text-xs">Shaded Tree Canopy</span>
              <span className="text-[10px] sm:text-[11px] text-cream-100/50">100% Outdoor Walk-in</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-1">
            <div className="p-2 bg-amber-950/70 border border-amber-800/50 rounded-xl text-amber-400 shrink-0">
              <Leaf className="w-4 h-4" />
            </div>
            <div>
              <span className="block font-medium text-cream-100 text-xs">Artisanal Organic Teas</span>
              <span className="text-[10px] sm:text-[11px] text-cream-100/50">Fresh Single-Origin</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-1">
            <div className="p-2 bg-coffee-850 border border-coffee-750 rounded-xl text-amber-300 shrink-0">
              <Sun className="w-4 h-4" />
            </div>
            <div>
              <span className="block font-medium text-cream-100 text-xs">No Rush, No Queries</span>
              <span className="text-[10px] sm:text-[11px] text-cream-100/50">Just Sit & Enjoy</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-1">
            <div className="p-2 bg-olive-950/70 border border-olive-700/50 rounded-xl text-olive-400 shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="block font-medium text-cream-100 text-xs">Karunagappally</span>
              <span className="text-[10px] sm:text-[11px] text-cream-100/50">Kollam, Kerala</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
