import React from 'react';

export const Founder: React.FC = () => {
  return (
    <section id="founder" className="py-32 bg-[#1A110B] text-cream-100 relative hairline-b overflow-hidden">
      
      {/* Soft Ambient Radial Lighting Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        
        {/* Section Header Line */}
        <div className="inline-flex items-center gap-3 mb-12">
          <span className="w-8 h-[1px] bg-amber-500/50" />
          <span className="text-xs uppercase tracking-[0.3em] text-amber-400/90 font-medium">
            Founder's Note
          </span>
          <span className="w-8 h-[1px] bg-amber-500/50" />
        </div>

        {/* Founder Card Container */}
        <div className="flex flex-col items-center space-y-8">
          
          {/* Founder Photo - Clean Soft-Cropped Frame with Amber Border */}
          <div className="relative group">
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border border-amber-500/30 p-2 bg-[#140D08] shadow-2xl transition-transform duration-700 group-hover:scale-105">
              <img
                src="/founder.jpg"
                alt="Isac Smile - Founder of Twenteas Cafeteria"
                className="w-full h-full object-cover object-top rounded-full filter saturate-[0.95]"
              />
            </div>
            
            <div className="absolute -bottom-1 -right-1 bg-amber-600 text-coffee-950 p-2 rounded-full shadow-xl">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
          </div>

          {/* First-Person Personal Note */}
          <blockquote className="font-serif-vintage text-2xl sm:text-3xl lg:text-4xl italic text-cream-100/95 max-w-2xl font-normal leading-relaxed text-balance">
            “I wanted a place where the trees do the talking and the tea does the rest.”
          </blockquote>

          {/* Founder Signature & Role Block */}
          <div className="space-y-1.5 pt-2">
            <h3 className="font-serif-vintage text-2xl sm:text-3xl text-amber-300 font-normal tracking-wide">
              Isac Smile
            </h3>
            <p className="text-xs uppercase tracking-[0.25em] text-cream-100/50 font-light font-sans">
              Founder & Master Brewer
            </p>
          </div>

          {/* Subtle Handwritten Signature Accent */}
          <div className="pt-1 text-amber-400/50 font-serif-vintage italic text-2xl tracking-widest select-none">
            Isac Smile
          </div>

        </div>

      </div>
    </section>
  );
};
