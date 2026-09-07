import React from 'react';
import { ExternalLink } from 'lucide-react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export const Founder: React.FC = () => {
  return (
    <section id="founder" className="py-24 sm:py-32 bg-[#170E09] text-cream-100 relative hairline-b overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="inline-flex items-center gap-3 mb-12 sm:mb-16">
          <span className="w-8 h-[1px] bg-amber-500/50" />
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-amber-400/90 font-medium font-mono">
            Founder's Note
          </span>
        </div>

        {/* Editorial Layout: Photo + Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Founder Portrait Column */}
          <div className="lg:col-span-5 relative group">
            
            {/* Vintage Frame Matting */}
            <div className="relative z-10 bg-[#140D08] p-3 sm:p-4 rounded-2xl hairline-border shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]">
              <div className="aspect-[4/5] overflow-hidden rounded-xl bg-[#1A110B] relative">
                <img
                  src="/founder.jpg"
                  alt="Siddharth S Mon — Founder & Master Brewer of Twenteas Cafeteria"
                  className="w-full h-full object-cover object-center filter saturate-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Subtle Image Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#140D08]/80 via-transparent to-transparent" />
                
                {/* Founder Caption Tag on Photo */}
                <div className="absolute bottom-4 left-4 right-4 text-left backdrop-blur-md bg-black/40 p-3 rounded-lg hairline-border flex items-center justify-between">
                  <div>
                    <div className="font-serif-vintage text-lg text-cream-100 font-normal">
                      Siddharth S Mon
                    </div>
                    <div className="text-[10px] font-mono text-amber-400/90 uppercase tracking-widest">
                      Founder & Master Brewer
                    </div>
                  </div>

                  <a
                    href="https://www.instagram.com/sid_siddharthhh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-amber-500/20 hover:bg-amber-500 text-amber-400 hover:text-black transition-colors hairline-border"
                    title="Follow @sid_siddharthhh on Instagram"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Decorative Offset Vintage Frame Border */}
            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 inset-0 rounded-2xl border border-amber-500/20 pointer-events-none z-0" />
          </div>

          {/* Narrative & Quote Column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Main Quote Block */}
            <div className="space-y-4">
              <span className="text-amber-500/40 text-6xl font-serif-vintage leading-none block -mb-6 select-none">
                “
              </span>
              <blockquote className="font-serif-vintage text-3xl sm:text-4xl lg:text-5xl text-cream-100 font-normal leading-snug tracking-tight text-balance">
                I wanted a place where the trees do the talking and the tea does the rest.
              </blockquote>
            </div>

            {/* Printed Journal Copy */}
            <p className="text-cream-100/75 text-sm sm:text-base font-light leading-relaxed max-w-2xl">
              Twenteas Cafeteria was born from a simple desire — to build a sanctuary beneath Karunagappally's shaded green canopy. A space free from rushing orders, where fresh spiced tea, warm conversations, and live acoustic melodies flow gently around the table.
            </p>

            {/* Signature & Details Block */}
            <div className="pt-6 border-t border-cream-100/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-serif-vintage text-2xl sm:text-3xl text-amber-300 font-normal tracking-wide whitespace-nowrap">
                    Siddharth S Mon
                  </h3>
                  <a
                    href="https://www.instagram.com/sid_siddharthhh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono text-cream-100/70 hover:text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 hairline-border transition-all"
                  >
                    <span>@sid_siddharthhh</span>
                    <ExternalLink className="w-3 h-3 text-amber-400" />
                  </a>
                </div>
                <p className="text-[11px] sm:text-xs uppercase tracking-widest text-cream-100/50 font-mono">
                  Karunagappally, Kerala · Opened Sept 4, 2026
                </p>
              </div>

              {/* Handwritten Signature Styling */}
              <div className="font-serif-vintage italic text-xl sm:text-2xl text-amber-400/60 tracking-wider whitespace-nowrap shrink-0">
                ~ Siddharth S Mon
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
