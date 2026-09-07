import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 sm:pt-36 sm:pb-20 flex flex-col justify-between items-center overflow-hidden bg-[#140D08]">
      
      {/* Background Real Cafe Storefront Night Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 filter saturate-[0.9] contrast-[1.05] pointer-events-none transition-opacity duration-1000 scale-105"
        style={{
          backgroundImage: `url('/hero-bg.jpg')`,
        }}
      />

      {/* Warm Ambient Radial & Vignette Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#140D08]/90 via-[#140D08]/80 to-[#140D08] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] sm:w-[700px] h-[450px] bg-amber-600/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Main Single-Column Editorial Hero Content */}
      <div className="my-auto z-10 w-full max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Eyebrow Announcement (No Pill Container, Pure Hairline Alignment) */}
        <div className="inline-flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          <span className="w-8 sm:w-12 h-[1px] bg-amber-500/40" />
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-cream-100/60 font-mono font-medium">
            Walk-in Cafe-Studio · Karunagappally
          </span>
          <span className="w-8 sm:w-12 h-[1px] bg-amber-500/40" />
        </div>

        {/* Dominant Wordmark Header & Subtitle with Generous Negative Space */}
        <div className="space-y-3 mb-8 sm:mb-10 w-full">
          <h1 className="font-serif-vintage text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] text-cream-100 font-normal tracking-tight leading-none uppercase">
            Twenteas
          </h1>
          <p className="font-mono text-xs sm:text-sm tracking-[0.6em] sm:tracking-[0.8em] text-cream-100/50 uppercase font-light pl-2">
            Cafeteria
          </p>
        </div>

        {/* Italic Serif Quote Accent */}
        <p className="font-serif-vintage italic text-2xl sm:text-4xl text-amber-400 font-normal tracking-wide mb-6 max-w-2xl leading-snug">
          “Under the trees, around the table.”
        </p>

        {/* Supporting Narrative Paragraph */}
        <p className="text-xs sm:text-base md:text-lg text-cream-100/75 max-w-xl mx-auto font-light leading-relaxed mb-10 sm:mb-12 text-balance">
          A serene open-air sanctuary shaded by ancient green foliage. Walk in, find a seat under the trees, and enjoy slow artisanal chai, wood-fired snacks, and quiet conversation.
        </p>

        {/* Clean Rounded Amber CTA Button */}
        <div className="w-full sm:w-auto px-4 mb-12 sm:mb-16">
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-amber-600 hover:bg-amber-500 text-black font-semibold uppercase tracking-[0.15em] sm:tracking-[0.25em] text-[11px] sm:text-xs px-6 sm:px-10 py-3.5 sm:py-4 rounded-full transition-all duration-300 shadow-xl whitespace-nowrap"
          >
            See You Under The Trees
          </a>
        </div>

      </div>

      {/* Clean Hairline Bottom Highlights Divider (No Boxes, No Icons) */}
      <div className="w-full max-w-5xl mx-auto px-6 mt-12 sm:mt-16 pt-8 border-t border-cream-100/10 z-10">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[10px] sm:text-[11px] font-mono tracking-widest text-cream-100/50 uppercase text-center">
          <span>Shaded Tree Canopy</span>
          <span className="text-amber-500/40 hidden sm:inline">•</span>
          <span>Artisanal Tea Brews</span>
          <span className="text-amber-500/40 hidden sm:inline">•</span>
          <span>No Rush · Walk-in Only</span>
          <span className="text-amber-500/40 hidden sm:inline">•</span>
          <span>Karunagappally, Kerala</span>
        </div>
      </div>

    </section>
  );
};
