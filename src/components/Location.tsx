import React from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink, Calendar } from 'lucide-react';

interface LocationProps {
  onOpenReservation: () => void;
}

export const Location: React.FC<LocationProps> = ({ onOpenReservation }) => {
  return (
    <section id="location" className="py-24 bg-coffee-900 text-cream-100 relative border-b border-coffee-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-olive-500 font-semibold bg-olive-950/40 border border-olive-800/50 px-3.5 py-1 rounded-full mb-4">
                <MapPin className="w-3.5 h-3.5" />
                Find Us In Karunagappally
              </div>
              <h2 className="font-serif-vintage text-3xl sm:text-4xl lg:text-5xl text-cream-50 font-normal">
                Visit Twenteas Cafeteria
              </h2>
              <p className="text-cream-200/75 text-sm sm:text-base mt-3 font-light">
                Nestled under shaded green trees in Karunagappally. Easy parking and open garden deck seating.
              </p>
            </div>

            <div className="space-y-4">
              
              <div className="bg-coffee-950/80 border border-coffee-800 p-5 rounded-lg flex items-start gap-4">
                <div className="p-3 bg-amber-950/60 border border-amber-800/50 rounded-md shrink-0">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-serif-vintage text-lg text-cream-50 font-semibold mb-1">
                    Café Location
                  </h3>
                  <p className="text-xs sm:text-sm text-cream-200/80 leading-relaxed font-light">
                    Twenteas Cafeteria, Tree Canopy Junction, Main Road, Karunagappally, Kerala – 690518
                  </p>
                </div>
              </div>

              <div className="bg-coffee-950/80 border border-coffee-800 p-5 rounded-lg flex items-start gap-4">
                <div className="p-3 bg-olive-950/60 border border-olive-800/50 rounded-md shrink-0">
                  <Clock className="w-5 h-5 text-olive-400" />
                </div>
                <div>
                  <h3 className="font-serif-vintage text-lg text-cream-50 font-semibold mb-1">
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

              <div className="bg-coffee-950/80 border border-coffee-800 p-5 rounded-lg flex items-start gap-4">
                <div className="p-3 bg-coffee-850 border border-coffee-750 rounded-md shrink-0">
                  <Phone className="w-5 h-5 text-cream-200" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif-vintage text-lg text-cream-50 font-semibold">
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

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://maps.google.com/?q=Karunagappally"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-coffee-950 font-bold uppercase tracking-wider text-xs px-5 py-3 rounded-md shadow-md transition-colors"
              >
                <Navigation className="w-4 h-4" />
                Get Google Maps Directions
                <ExternalLink className="w-3 h-3" />
              </a>

              <button
                onClick={onOpenReservation}
                className="inline-flex items-center gap-2 bg-coffee-850 hover:bg-coffee-800 text-cream-100 border border-coffee-750 text-xs uppercase tracking-wider font-semibold px-5 py-3 rounded-md transition-colors"
              >
                <Calendar className="w-4 h-4 text-amber-400" />
                Book Table Ahead
              </button>
            </div>

          </div>

          <div className="lg:col-span-6">
            <div className="relative bg-coffee-950 border border-coffee-800 rounded-xl overflow-hidden shadow-2xl p-2 group">
              <div className="relative h-80 sm:h-96 w-full bg-coffee-900 rounded-lg overflow-hidden flex flex-col items-center justify-center border border-coffee-800/60 p-6 text-center">
                <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D4A359" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#map-grid)" />
                  <path d="M -50 150 C 100 120, 200 250, 500 200" stroke="#76886A" strokeWidth="3" fill="none" />
                  <path d="M 200 -50 C 220 100, 240 300, 260 500" stroke="#876049" strokeWidth="2.5" fill="none" />
                </svg>

                <div className="relative z-10 animate-bounce mb-3">
                  <div className="p-4 bg-amber-600 text-coffee-950 rounded-full shadow-2xl ring-4 ring-amber-500/20">
                    <MapPin className="w-8 h-8 fill-coffee-950 text-amber-600" />
                  </div>
                </div>

                <div className="relative z-10 max-w-xs space-y-1">
                  <h4 className="font-serif-vintage text-xl text-cream-50 font-semibold">
                    Twenteas Cafeteria
                  </h4>
                  <p className="text-xs text-amber-400 font-mono">
                    Karunagappally, Kerala
                  </p>
                  <p className="text-[11px] text-cream-300/70 font-light mt-2">
                    Under the Shaded Tree Canopy • Free Parking Available
                  </p>
                </div>

                <a
                  href="https://maps.google.com/?q=Karunagappally"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 mt-4 text-[11px] text-amber-300 font-medium hover:underline flex items-center gap-1"
                >
                  Open Interactive Map <ExternalLink className="w-3 h-3" />
                </a>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
