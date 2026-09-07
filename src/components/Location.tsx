import React from 'react';
import { Navigation, ExternalLink } from 'lucide-react';

export const Location: React.FC = () => {
  return (
    <section id="location" className="py-32 bg-[#140D08] text-cream-100 relative hairline-b">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Clean Editorial Info Lines */}
          <div className="lg:col-span-6 space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[1px] bg-amber-500/50" />
                <span className="text-xs uppercase tracking-[0.3em] text-amber-400/90 font-medium">
                  Destination & Hours
                </span>
              </div>
              <h2 className="font-serif-vintage text-4xl sm:text-5xl text-cream-100 font-normal">
                Visit Us In Karunagappally
              </h2>
              <p className="text-cream-100/70 text-base mt-3 font-light leading-relaxed">
                Open walk-in seating under shaded green trees. No bookings or queries needed — just walk in and find your seat.
              </p>
            </div>

            {/* Clean Information List */}
            <div className="space-y-6 text-sm text-cream-100/80 font-light">
              
              <div className="pb-4 hairline-b space-y-1">
                <span className="text-xs uppercase tracking-[0.2em] text-amber-400/80 block">Location</span>
                <p className="font-serif-vintage text-xl text-cream-100">
                  Twenteas Cafeteria, Tree Canopy Junction, Main Road, Karunagappally, Kerala 690518
                </p>
              </div>

              <div className="pb-4 hairline-b space-y-1">
                <span className="text-xs uppercase tracking-[0.2em] text-amber-400/80 block">Operating Hours</span>
                <p className="font-serif-vintage text-xl text-cream-100">
                  Monday – Sunday: 10:00 AM – 11:00 PM
                </p>
                <p className="text-xs text-cream-100/50 font-mono pt-1">
                  Kitchen serves wood-fired snacks till 10:30 PM
                </p>
              </div>

              <div className="pb-4 hairline-b space-y-1">
                <span className="text-xs uppercase tracking-[0.2em] text-amber-400/80 block">Walk-In Policy</span>
                <p className="font-serif-vintage text-lg text-cream-100">
                  100% Walk-ins. Find a seat under the trees whenever you arrive.
                </p>
              </div>

            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://maps.google.com/?q=Karunagappally"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-amber-600 hover:bg-amber-500 text-coffee-950 font-bold uppercase tracking-[0.2em] text-xs px-8 py-4 rounded-full transition-all shadow-lg"
              >
                <Navigation className="w-4 h-4" />
                Get Directions On Google Maps
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Clean Vector Map Box */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden hairline-border shadow-2xl p-2 bg-[#1A110B]">
              <div className="relative h-96 sm:h-[440px] w-full bg-[#140D08] rounded-xl overflow-hidden flex flex-col items-center justify-center p-6 text-center">
                
                <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="map-grid-4" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D4A359" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#map-grid-4)" />
                  <path d="M -50 160 C 100 130, 200 280, 500 220" stroke="#76886A" strokeWidth="3" fill="none" />
                </svg>

                <div className="relative z-10 space-y-2 max-w-xs">
                  <span className="w-3 h-3 rounded-full bg-amber-400 inline-block animate-ping mb-2" />
                  <h4 className="font-serif-vintage text-3xl text-cream-100 font-normal">
                    Twenteas Cafeteria
                  </h4>
                  <p className="text-xs text-amber-300 font-mono tracking-widest uppercase">
                    Karunagappally, Kerala
                  </p>
                  <p className="text-xs text-cream-100/60 font-light pt-2">
                    Under the Shaded Tree Canopy • Walk-ins Welcome
                  </p>
                </div>

                <a
                  href="https://maps.google.com/?q=Karunagappally"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 mt-6 text-xs text-amber-300 font-semibold hover:underline flex items-center gap-1.5 bg-[#1A110B] px-5 py-2.5 rounded-full border border-amber-500/30"
                >
                  Open Interactive Map <ExternalLink className="w-3.5 h-3.5" />
                </a>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
