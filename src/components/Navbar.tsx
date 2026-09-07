import React, { useState, useEffect } from 'react';
import { TwenteasLogo } from './TwenteasLogo';
import { Menu, X, MapPin } from 'lucide-react';

export const Navbar: React.FC = () => {
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
          ? 'bg-[#140D08]/95 backdrop-blur-md hairline-b py-2.5 sm:py-3.5 shadow-xl'
          : 'bg-gradient-to-b from-[#140D08]/95 to-transparent py-3.5 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo Mark Header */}
          <a
            href="#"
            className="group focus:outline-none transition-opacity hover:opacity-90 shrink-0"
            aria-label="Twenteas Cafeteria Home"
          >
            <TwenteasLogo size="sm" variant="boxed" />
          </a>

          {/* Desktop Navigation Links */}
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

          {/* Location Badge */}
          <div className="hidden md:flex items-center space-x-4">
            <span className="inline-flex items-center gap-2 text-xs text-olive-300/90 bg-olive-950/60 border border-olive-700/40 px-4 py-2 rounded-full font-medium">
              <MapPin className="w-3.5 h-3.5 text-olive-400" />
              Karunagappally · Walk-ins Welcome
            </span>
          </div>

          {/* Mobile Navigation Toggle Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-cream-100 hover:text-amber-400 focus:outline-none rounded-lg bg-[#1C120B] border border-cream-100/10"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#140D08]/98 backdrop-blur-2xl hairline-b px-5 pt-5 pb-8 transition-all duration-300 animate-slide-up">
          <div className="flex flex-col space-y-4">
            <div className="pb-3 hairline-b flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-olive-400 font-medium">
                <MapPin className="w-3.5 h-3.5" />
                <span>Karunagappally · Walk-ins Only</span>
              </div>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-serif-vintage tracking-wide text-cream-100 hover:text-amber-300 py-2 border-b border-cream-100/5 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-cream-100/40 font-sans">→</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
