import React from 'react';
import { Trees, Coffee, Clock } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#140D08] text-cream-100 relative hairline-b overflow-hidden">
      
      {/* Soft Ambient Dappled Canopy Glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-emerald-950/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Tag */}
        <div className="inline-flex items-center gap-3 mb-12 sm:mb-16">
          <span className="w-8 h-[1px] bg-amber-500/50" />
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-amber-400/90 font-medium font-mono">
            Our Story & Origins
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Printed Page Editorial Narrative */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            <h2 className="font-serif-vintage text-4xl sm:text-5xl lg:text-6xl text-cream-100 font-normal leading-[1.15]">
              A place where conversation slows down under old trees.
            </h2>

            {/* Narrative Box with Warm Accent Bar */}
            <div className="relative pl-6 sm:pl-8 border-l border-amber-500/40 space-y-4">
              <p className="text-cream-100/80 text-base sm:text-lg leading-relaxed font-light font-sans">
                Twenteas began with a simple idea: that conversation slows down when there's good tea and a little shade. In September 2026, under a canopy of old trees in Karunagappally, that idea became a table.
              </p>
              <p className="text-cream-100/70 text-sm sm:text-base leading-relaxed font-light font-sans">
                No rush, no menus shouted across a counter — just wood-fired snacks, quiet music some evenings, and a seat for as long as you need it.
              </p>
            </div>

            {/* 3 Experience Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-cream-100/10">
              
              <div className="space-y-1.5 p-3 rounded-lg bg-[#1A110B]/60 hairline-border">
                <div className="flex items-center gap-2 text-amber-400">
                  <Trees className="w-4 h-4" />
                  <span className="text-xs font-mono font-medium uppercase tracking-wider">Canopy Shade</span>
                </div>
                <p className="text-[11px] text-cream-100/60 font-light leading-snug">
                  Shaded green courtyard in Karunagappally.
                </p>
              </div>

              <div className="space-y-1.5 p-3 rounded-lg bg-[#1A110B]/60 hairline-border">
                <div className="flex items-center gap-2 text-amber-400">
                  <Coffee className="w-4 h-4" />
                  <span className="text-xs font-mono font-medium uppercase tracking-wider">Slow Brews</span>
                </div>
                <p className="text-[11px] text-cream-100/60 font-light leading-snug">
                  Single-origin teas & oven-baked snacks.
                </p>
              </div>

              <div className="space-y-1.5 p-3 rounded-lg bg-[#1A110B]/60 hairline-border">
                <div className="flex items-center gap-2 text-amber-400">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs font-mono font-medium uppercase tracking-wider">No Rush</span>
                </div>
                <p className="text-[11px] text-cream-100/60 font-light leading-snug">
                  A seat for as long as you wish to stay.
                </p>
              </div>

            </div>

            {/* Origin Metadata */}
            <div className="pt-2 flex items-center gap-6 text-[11px] font-mono tracking-widest text-cream-100/40 uppercase">
              <span>Est. 4 Sept 2026</span>
              <span>•</span>
              <span>Karunagappally, Kerala</span>
            </div>

          </div>

          {/* Right Column: Moody Natural Canopy Photo Frame */}
          <div className="lg:col-span-5 relative group">
            
            {/* Vintage Double-Framed Card */}
            <div className="relative z-10 bg-[#1A110B] p-3 rounded-2xl hairline-border shadow-2xl overflow-hidden transition-transform duration-700 group-hover:scale-[1.01]">
              <div className="aspect-[4/5] rounded-xl overflow-hidden relative bg-[#140D08]">
                <img
                  src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1000&q=80"
                  alt="Sunlight filtering through green canopy trees at Twenteas"
                  className="w-full h-full object-cover filter saturate-85 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#140D08] via-transparent to-black/30 opacity-80" />

                {/* Bottom Quote Banner */}
                <div className="absolute bottom-4 left-4 right-4 text-left p-4 rounded-lg bg-black/60 backdrop-blur-md hairline-border space-y-1">
                  <p className="font-serif-vintage italic text-sm text-amber-200/90 leading-snug">
                    “Under the trees, around the table.”
                  </p>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-cream-100/50">
                    Twenteas Sanctuary · Karunagappally
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Offset Hairline Border Accent */}
            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 inset-0 rounded-2xl border border-amber-500/20 pointer-events-none z-0" />

          </div>

        </div>

      </div>
    </section>
  );
};
