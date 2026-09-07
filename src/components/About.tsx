import React from 'react';
import { Trees, Coffee, Sparkles, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-28 bg-coffee-950 text-cream-100 relative overflow-hidden border-b border-coffee-800/40">
      <div className="absolute top-0 right-0 w-96 h-96 bg-olive-700/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-olive-500 font-semibold bg-olive-950/40 border border-olive-800/50 px-3.5 py-1.5 rounded-full">
              <Trees className="w-3.5 h-3.5" />
              Our Story & Philosophy
            </div>

            <h2 className="font-serif-vintage text-3xl sm:text-4xl lg:text-5xl text-cream-50 font-normal leading-tight">
              A nature-friendly haven crafted for slow moments, conversations, & quiet joy.
            </h2>

            <div className="w-16 h-0.5 bg-amber-500/60 my-4" />

            <p className="text-cream-200/85 text-base sm:text-lg leading-relaxed font-light">
              Opened on <strong className="text-cream-100 font-medium">4th September 2026</strong> in the heart of <strong className="text-cream-100 font-medium">Karunagappally</strong>, <span className="italic text-amber-300 font-serif">Twenteas Cafeteria</span> was created around a simple vision: bringing people together beneath the rustling leaves of ancient trees.
            </p>

            <p className="text-cream-200/75 text-sm sm:text-base leading-relaxed font-light">
              Whether you come for a solitary morning brew, a wood-fired meal with family, or live acoustic chords on a breezy evening — every table under our canopy is designed to make you pause, breathe, and linger a little longer.
            </p>

            {/* 3 Core Experience Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-coffee-900/60 border border-coffee-800/80 p-5 rounded-xl">
                <div className="p-2.5 bg-olive-900/40 border border-olive-700/40 rounded-lg w-fit mb-3">
                  <Trees className="w-5 h-5 text-olive-500" />
                </div>
                <h3 className="font-serif-vintage text-lg font-semibold text-cream-100 mb-1">Tree Canopy</h3>
                <p className="text-xs text-cream-300/70 font-light leading-relaxed">
                  Open-air seating shaded by lush green foliage.
                </p>
              </div>

              <div className="bg-coffee-900/60 border border-coffee-800/80 p-5 rounded-xl">
                <div className="p-2.5 bg-amber-950/40 border border-amber-800/40 rounded-lg w-fit mb-3">
                  <Coffee className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="font-serif-vintage text-lg font-semibold text-cream-100 mb-1">Artisanal Kitchen</h3>
                <p className="text-xs text-cream-300/70 font-light leading-relaxed">
                  Curated tea blends & wood-fired culinary bites.
                </p>
              </div>

              <div className="bg-coffee-900/60 border border-coffee-800/80 p-5 rounded-xl">
                <div className="p-2.5 bg-coffee-800/60 border border-coffee-700/40 rounded-lg w-fit mb-3">
                  <Sparkles className="w-5 h-5 text-amber-300" />
                </div>
                <h3 className="font-serif-vintage text-lg font-semibold text-cream-100 mb-1">Music & Events</h3>
                <p className="text-xs text-cream-300/70 font-light leading-relaxed">
                  Unplugged acoustic jams & community gatherings.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative p-7 sm:p-9 bg-coffee-900 border border-coffee-800 rounded-2xl shadow-2xl overflow-hidden group">
              
              <div className="flex items-center justify-between border-b border-coffee-800/80 pb-4 mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
                  EST. SEPT 2026
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] text-olive-500 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Eco-Conscious Space
                </span>
              </div>

              <div className="space-y-4 my-4">
                <span className="text-5xl font-serif text-amber-500/40 block leading-none">“</span>
                <p className="font-serif-vintage text-2xl sm:text-3xl text-cream-100 italic font-normal -mt-4 leading-snug">
                  Food tastes richer, music sounds sweeter, and stories flow better under the trees.
                </p>
                <p className="text-xs uppercase tracking-widest text-cream-400/60 font-semibold pt-2">
                  — The Twenteas Promise
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-coffee-800/80 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-cream-400/60 block mb-0.5">Location</span>
                  <span className="font-medium text-cream-100">Karunagappally, Kollam</span>
                </div>
                <div>
                  <span className="text-cream-400/60 block mb-0.5">Operating Hours</span>
                  <span className="font-medium text-cream-100">10:00 AM – 11:00 PM</span>
                </div>
                <div>
                  <span className="text-cream-400/60 block mb-0.5">Seating</span>
                  <span className="font-medium text-cream-100">Outdoor & Shaded Deck</span>
                </div>
                <div>
                  <span className="text-cream-400/60 block mb-0.5">Ambience</span>
                  <span className="font-medium text-amber-400">Acoustic · Serene · Warm</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
