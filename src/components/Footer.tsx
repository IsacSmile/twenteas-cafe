import React from 'react';
import { TwenteasLogo } from './TwenteasLogo';
import { MapPin, Phone, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#140D08] text-cream-100 hairline-t pt-20 pb-12 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 hairline-b">
          
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <a href="#" className="inline-block" aria-label="Twenteas Cafeteria">
              <TwenteasLogo size="md" variant="boxed" />
            </a>
            
            <p className="font-serif-vintage text-2xl italic text-amber-200/90 font-normal">
              “Under the trees, around the table.”
            </p>
            
            <p className="text-xs text-cream-100/60 font-light leading-relaxed max-w-sm">
              A destination brand site for a walk-in cafe-studio in Karunagappally. No rush, no menus shouted across a counter — just wood-fired snacks, tea, and quiet conversation.
            </p>
            
            <div className="text-[11px] font-mono text-amber-400/80 pt-2 uppercase tracking-widest">
              Established 4th September 2026 · Karunagappally
            </div>
          </div>

          {/* Essential Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif-vintage text-base text-cream-100 font-normal tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-cream-100/60 font-light">
              <li>
                <a href="#story" className="hover:text-amber-300 transition-colors">
                  Our Story & Origins
                </a>
              </li>
              <li>
                <a href="#founder" className="hover:text-amber-300 transition-colors">
                  Founder's Note
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-300 transition-colors">
                  Curated Showcase
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-amber-300 transition-colors">
                  Gatherings Journal
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-300 transition-colors">
                  Visit Destination
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif-vintage text-base text-cream-100 font-normal tracking-wide">
              Location
            </h4>
            <div className="text-xs text-cream-100/60 font-light space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Karunagappally, Kollam, Kerala 690518</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="font-mono">+91 98765 43210</span>
              </div>
            </div>
          </div>

        </div>

        {/* Quiet Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-100/40 font-light">
          <div>
            © 2026 <strong className="text-cream-100 font-normal">Twenteas Cafeteria</strong>. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-cream-100/60 hover:text-amber-300 transition-colors p-1"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
