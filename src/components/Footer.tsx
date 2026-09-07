import React from 'react';
import { TwenteasLogo } from './TwenteasLogo';
import { MapPin, Phone, MessageCircle, ArrowUp, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-coffee-950 text-cream-100 border-t border-coffee-800/80 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-coffee-800/60">
          
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="inline-block" aria-label="Twenteas Cafeteria">
              <TwenteasLogo size="md" variant="boxed" />
            </a>
            <p className="font-serif-vintage text-xl italic text-cream-200/90">
              “Under the trees, around the table”
            </p>
            <p className="text-xs text-cream-300/70 font-light leading-relaxed max-w-sm">
              A nature-friendly café in Karunagappally offering artisanal tea brews, wood-fired culinary items, and soul acoustic events beneath lush green foliage.
            </p>
            <div className="text-[11px] font-mono text-amber-400/90 pt-1">
              Established 4th September 2026 · Karunagappally, Kollam
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif-vintage text-base text-cream-50 font-semibold uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-cream-200/80 font-light">
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  Our Story & Philosophy
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">
                  Curated Menu Highlights
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-amber-400 transition-colors">
                  Music & Live Events
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-400 transition-colors">
                  Location & Operating Hours
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif-vintage text-base text-cream-50 font-semibold uppercase tracking-wider">
              Connect With Us
            </h4>
            
            <div className="flex items-center space-x-3">
              {/* Instagram Icon SVG */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-coffee-900 border border-coffee-800 rounded-md text-cream-200 hover:text-amber-400 hover:border-amber-500/50 transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook Icon SVG */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-coffee-900 border border-coffee-800 rounded-md text-cream-200 hover:text-amber-400 hover:border-amber-500/50 transition-all"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-coffee-900 border border-coffee-800 rounded-md text-cream-200 hover:text-amber-400 hover:border-amber-500/50 transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href="https://twenteas.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-coffee-900 border border-coffee-800 rounded-md text-cream-200 hover:text-amber-400 hover:border-amber-500/50 transition-all"
                aria-label="Website"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>

            <div className="text-xs text-cream-300/80 font-light space-y-1">
              <div className="flex items-center gap-1.5 text-olive-400">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span>Karunagappally, Kerala 690518</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 shrink-0 text-amber-400" />
                <span className="font-mono">+91 98765 43210</span>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-400/60 font-light">
          <div>
            © 2026 <strong className="text-cream-200 font-medium">Twenteas Cafeteria</strong> (twenteas_cafe). All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-cream-300 hover:text-amber-400 transition-colors p-1.5 focus:outline-none"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
