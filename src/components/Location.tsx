import React from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink, Calendar } from 'lucide-react';

interface LocationProps {
  onOpenReservation: () => void;
}

export const Location: React.FC<LocationProps> = ({ onOpenReservation }) => {
  return (
    <section id="location" className="py-28 bg-[#180E08] text-cream-100 relative border-b border-coffee-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-olive-400 font-semibold bg-olive-950/60 border border-olive-800/50 px-4 py-1.5 rounded-full mb-4">
                <MapPin className="w-3.5 h-3.5" />
                Find Us In Karunagappally
              </div>
              <h2 className="font-serif-vintage text-4xl sm:text-5xl text-cream-50 font-normal">
                Visit Twenteas Cafeteria
              </h2>
              <p className="text-cream-200/80 text-base mt-3 font-light leading-relaxed">
                Nestled under shaded green trees in Karunagappally. Easy parking and open garden deck seating.
              </p>
            </div>

            <div className="space-y-4">
              
              <div className="glass-card p-6 rounded-2xl flex items-start gap-4 transition-all">
                <div className="p-3 bg-amber-950/70 border border-amber-800/60 rounded-xl shrink-0">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-serif-vintage text-xl text-cream-50 font-semibold mb-1">
                    Café Location
                  </h3>
                  <p className="text-xs sm:text-sm text-cream-200/80 leading-relaxed font-light">
                    Twenteas Cafeteria, Tree Canopy Junction, Main Road, Karunagappally, Kerala – 690518
                  </p>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl flex items-start gap-4 transition-all">
                <div className="p-3 bg-olive-950/70 border border-olive-800/60 rounded-xl shrink-0">
                  <Clock className="w-5 h-5 text-olive-400" />
                </div>
                <div>
                  <h3 className="font-serif-vintage text-xl text-cream-50 font-semibold mb-1">
                    Operating Hours
                  </h3>
                  <p className="text-xs sm:text-sm text-cream-200/80 font-light">
                    <strong className="text-cream-100 font-medium">Monday – Sunday:</strong> 10:00 AM – 11:00 PM
                  </p>
                  <p className="text-[11px] text-amber-400/80 mt-1 font-mono">
                    * Kitchen serves hot wood-fired items till 10:30 PM
                  </p>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl flex items-start gap-4 transition-all">
                <div className="p-3 bg-coffee-850 border border-coffee-750 rounded-xl shrink-0">
                  <Phone className="w-5 h-5 text-cream-200" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif-vintage text-xl text-cream-50 font-semibold">
                    Direct Contact
                  </h3>
                  <p className="text-xs text-cream-200/80 font-light">
                    Phone / WhatsApp: <a href="tel:+919876543210" className="text-amber-300 font-mono hover:underline">+91 98765 43210</a>
                  </p>
                  <p className="text-xs text-cream-200/80 font-light">
                    Email: <a href="mailto:hello@twenteas.com" className="text-cream-100 hover:underline">hello@twenteas.com</a>
                  </p>
                </div>
              </div>

            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://maps.google.com/?q=Karunagappally"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-amber-600 hover:bg-amber-500 text-coffee-950 font-bold uppercase tracking-wider text-xs px-6 py-3.5 rounded-xl shadow-lg transition-all glow-gold"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenReservation}
                className="inline-flex items-center gap-2.5 bg-[#23150D] hover:bg-[#2E1C12] text-cream-100 border border-amber-500/40 text-xs uppercase tracking-wider font-semibold px-6 py-3.5 rounded-xl transition-all shadow-md"
              >
                <Calendar className="w-4 h-4 text-amber-400" />
                Reserve Table Ahead
              </button>
            </div>

          </div>

          <div className="lg:col-span-6">
            <div className="relative glass-card rounded-3xl overflow-hidden shadow-2xl p-2.5 group">
              <div className="relative h-96 sm:h-[420px] w-full bg-[#120B07] rounded-2xl overflow-hidden flex flex-col items-center justify-center border border-coffee-800/60 p-6 text-center">
                <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="map-grid-2" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D4A359" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#map-grid-2)" />
                  <path d="M -50 160 C 100 130, 200 280, 500 220" stroke="#76886A" strokeWidth="3.5" fill="none" />
                  <path d="M 220 -50 C 240 120, 260 320, 280 520" stroke="#876049" strokeWidth="3" fill="none" />
                </svg>

                <div className="relative z-10 animate-bounce mb-4">
                  <div className="p-4 bg-amber-600 text-coffee-950 rounded-full shadow-2xl ring-4 ring-amber-500/20 glow-gold">
                    <MapPin className="w-8 h-8 fill-coffee-950 text-amber-600" />
                  </div>
                </div>

                <div className="relative z-10 max-w-xs space-y-1">
                  <h4 className="font-serif-vintage text-2xl text-cream-50 font-semibold">
                    Twenteas Cafeteria
                  </h4>
                  <p className="text-xs text-amber-400 font-mono">
                    Karunagappally, Kollam
                  </p>
                  <p className="text-xs text-cream-300/70 font-light mt-2">
                    Under the Shaded Tree Canopy • Free Parking Available
                  </p>
                </div>

                <a
                  href="https://maps.google.com/?q=Karunagappally"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 mt-5 text-xs text-amber-300 font-semibold hover:underline flex items-center gap-1.5 bg-[#1D130C]/80 px-4 py-2 rounded-full border border-amber-800/40"
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
