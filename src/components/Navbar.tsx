import React, { useState, useEffect } from 'react';
import { TwenteasLogo } from './TwenteasLogo';
import { Menu, X, Calendar, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Story', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Experience', href: '#experience' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-coffee-950/90 backdrop-blur-md border-b border-coffee-800/60 shadow-lg py-2.5'
          : 'bg-gradient-to-b from-coffee-950/95 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="group focus:outline-none focus:ring-2 focus:ring-amber-500/50 rounded-sm transition-transform active:scale-95"
            aria-label="Twenteas Cafeteria Home"
          >
            <TwenteasLogo size="sm" variant="boxed" className="transition-transform group-hover:scale-105" />
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-cream-200/90 hover:text-amber-400 tracking-wide transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-amber-400 after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <span className="inline-flex items-center gap-1.5 text-xs text-olive-500 bg-olive-900/30 border border-olive-700/40 px-3 py-1.5 rounded-full font-medium">
              <MapPin className="w-3.5 h-3.5 text-olive-600" />
              Karunagappally
            </span>

            <button
              onClick={onOpenReservation}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-coffee-950 text-xs font-semibold tracking-wider uppercase px-4 py-2.5 rounded-md shadow-md hover:shadow-amber-500/20 transition-all duration-200 active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              Book Table
            </button>
          </div>

          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={onOpenReservation}
              className="bg-amber-600/90 text-coffee-950 p-2 rounded-md font-semibold text-xs transition-colors"
              aria-label="Book Table"
            >
              <Calendar className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-cream-100 hover:text-amber-400 rounded-md focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-coffee-900/95 backdrop-blur-xl border-b border-coffee-800/80 px-4 pt-4 pb-6 transition-all duration-300 animate-slide-up">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-coffee-800/50">
              <div className="flex items-center gap-2 text-xs text-olive-500">
                <MapPin className="w-3.5 h-3.5" />
                Karunagappally, Kerala
              </div>
              <span className="text-[10px] uppercase tracking-widest text-amber-500/80 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-800/40">
                Opened 4 Sept 2026
              </span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-serif-vintage tracking-wide text-cream-100 hover:text-amber-400 py-2 border-b border-coffee-800/30 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-cream-400/50 font-sans">→</span>
              </a>
            ))}

            <div className="pt-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full inline-flex items-center justify-center gap-2 bg-amber-600 text-coffee-950 font-bold uppercase tracking-wider text-xs py-3 rounded-md shadow-md active:scale-98"
              >
                <Calendar className="w-4 h-4" />
                Reserve a Table Under the Trees
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
