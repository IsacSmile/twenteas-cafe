import React from 'react';

export const Founder: React.FC = () => {
  return (
    <section id="founder" className="py-32 bg-[#1A110B] text-cream-100 relative hairline-b">
      
      {/* Soft Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-amber-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        
        {/* Section Pill Header */}
        <div className="inline-flex items-center gap-2 mb-12">
          <span className="w-6 h-[1px] bg-amber-500/50" />
          <span className="text-xs uppercase tracking-[0.3em] text-amber-400/90 font-medium">
            Founder's Note
          </span>
          <span className="w-6 h-[1px] bg-amber-500/50" />
        </div>

        {/* Founder Card Container */}
        <div className="flex flex-col items-center space-y-8">
          
          {/* Softly Cropped Circular Portrait */}
          <div className="relative group">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border border-amber-500/30 p-1.5 bg-[#140D08] shadow-2xl transition-transform duration-500 group-hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
                alt="Isac Smile - Founder of Twenteas"
                className="w-full h-full object-cover rounded-full filter saturate-90"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-amber-600 text-coffee-950 p-2 rounded-full shadow-lg">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 21l3.52-.64C9.31 20.73 10.62 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/>
              </svg>
            </div>
          </div>

          {/* First-Person Personal Note */}
          <blockquote className="font-serif-vintage text-2xl sm:text-3xl italic text-cream-100/90 max-w-2xl font-normal leading-relaxed text-balance">
            “I wanted a place where the trees do the talking and the tea does the rest.”
          </blockquote>

          {/* Signature & Role Block */}
          <div className="space-y-1 pt-2">
            <h3 className="font-serif-vintage text-xl sm:text-2xl text-amber-300 font-semibold tracking-wide">
              Isac Smile
            </h3>
            <p className="text-xs uppercase tracking-[0.25em] text-cream-100/50 font-light font-sans">
              Founder & Master Brewer
            </p>
          </div>

          {/* Subtle Handwriting Signature Accent */}
          <div className="pt-2 text-amber-400/60 font-handwriting text-2xl tracking-widest select-none">
            Isac Smile
          </div>

        </div>

      </div>
    </section>
  );
};
