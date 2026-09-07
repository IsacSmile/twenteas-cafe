import React, { useState, useEffect } from 'react';
import { TwenteasLogo } from './TwenteasLogo';
import { Menu, X, Calendar } from 'lucide-react';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Story', href: '#story' },
    { name: 'Founder', href: '#founder' },
    { name: 'Showcase', href: '#menu' },
    { name: 'Gatherings', href: '#experience' },
    { name: 'Visit Us', href: '#location' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#140D08]/90 backdrop-blur-md hairline-b py-3 shadow-xl'
          : 'bg-gradient-to-b from-[#140D08]/95 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo Mark Link */}
          <a
            href="#"
            className="group focus:outline-none transition-opacity hover:opacity-90"
            aria-label="Twenteas Cafeteria Home"
          >
            <TwenteasLogo size="sm" variant="boxed" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] font-light text-cream-100/70 hover:text-amber-300 transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onOpenReservation}
              className="inline-flex items-center gap-2 border border-cream-100/20 hover:border-amber-400/60 bg-cream-100/5 hover:bg-cream-100/10 text-cream-100 text-xs font-semibold tracking-[0.2em] uppercase px-5 py-2.5 rounded-full transition-all duration-300 active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              Plan Your Visit
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center space-x-3 md:hidden">
            <button
              onClick={onOpenReservation}
              className="bg-amber-600/90 text-coffee-950 px-3 py-1.5 rounded-full font-semibold text-xs tracking-wider uppercase"
              aria-label="Plan Your Visit"
            >
              Visit
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-cream-100 hover:text-amber-400 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#140D08]/98 backdrop-blur-xl hairline-b px-6 pt-6 pb-8 transition-all duration-300">
          <div className="flex flex-col space-y-5">
            <div className="pb-3 hairline-b flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.2em] text-cream-100/50 font-mono">
                Karunagappally · Est. Sept 2026
              </span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-serif-vintage tracking-wide text-cream-100 hover:text-amber-300 py-1 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-cream-100/40">→</span>
              </a>
            ))}

            <div className="pt-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full inline-flex items-center justify-center gap-2 bg-amber-600 text-coffee-950 font-bold uppercase tracking-[0.2em] text-xs py-3.5 rounded-full"
              >
                <Calendar className="w-4 h-4" />
                Reserve a Table Under Trees
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
