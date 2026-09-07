import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="story" className="py-32 bg-[#140D08] text-cream-100 relative hairline-b">
      
      {/* Background Soft Dappled Light */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Printed Page Style Narrative */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-amber-500/50" />
              <span className="text-xs uppercase tracking-[0.3em] text-amber-400/90 font-medium">
                Our Story & Origins
              </span>
            </div>

            <h2 className="font-serif-vintage text-4xl sm:text-5xl lg:text-6xl text-cream-100 font-normal leading-tight">
              A place where conversation slows down under old trees.
            </h2>

            {/* Exact Prompt Copy */}
            <div className="space-y-6 text-cream-100/80 text-base sm:text-lg leading-relaxed font-light font-sans pt-2 border-l border-amber-500/30 pl-6 sm:pl-8">
              <p>
                Twenteas began with a simple idea: that conversation slows down when there's good tea and a little shade. In September 2026, under a canopy of old trees in Karunagappally, that idea became a table. No rush, no menus shouted across a counter — just wood-fired snacks, quiet music some evenings, and a seat for as long as you need it.
              </p>
            </div>

            <div className="pt-4 flex items-center gap-8 text-xs tracking-widest text-cream-100/50 uppercase font-mono">
              <div>Opened 4 Sept 2026</div>
              <div>•</div>
              <div>Karunagappally, Kerala</div>
            </div>

          </div>

          {/* Right Column: Full-Bleed Editorial Image (Let it Breathe) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hairline-border group">
              <img
                src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80"
                alt="Shaded tree canopy at Twenteas Cafeteria"
                className="w-full h-[450px] sm:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105 filter saturate-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140D08] via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-6 left-6 right-6 text-xs text-amber-200/80 font-serif-vintage italic">
                “A seat for as long as you need it.”
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
