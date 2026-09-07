import React from 'react';
import { Calendar, Clock, Mic } from 'lucide-react';

interface EventItem {
  id: string;
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  artist?: string;
  badge: string;
}

const EVENTS_LIST: EventItem[] = [
  {
    id: 'e1',
    title: 'Unplugged Under The Canopy',
    category: 'Acoustic Sessions',
    date: 'Every Friday & Saturday',
    time: '07:00 PM – 09:30 PM',
    location: 'Shaded Tree Deck',
    description: 'Soulful acoustic guitar, violin duos, and mellow indie vocals beneath warm hanging fairy lights and tree leaves.',
    image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=400&q=80',
    artist: 'Local Kerala Acoustic Artists',
    badge: 'Weekly Feature',
  },
  {
    id: 'e2',
    title: 'Grand Opening Acoustic Night',
    category: 'Acoustic Sessions',
    date: 'Special Event · Sept 2026',
    time: '06:30 PM Onwards',
    location: 'Main Tree Circle',
    description: 'Celebrating the birth of Twenteas Cafeteria with live unplugged classic covers, chai tastings, and warm community vibes.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80',
    artist: 'Twenteas House Band',
    badge: 'Opening Night',
  },
  {
    id: 'e3',
    title: 'Poetry & Open Mic Circle',
    category: 'Open Mic Circle',
    date: 'Every Sunday Sunset',
    time: '05:30 PM – 08:00 PM',
    location: 'Garden Seating',
    description: 'An open, welcoming space for original Malayalam & English poetry, storytelling, acoustic songs, and shared laughter.',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=400&q=80',
    artist: 'Open to All Community Voices',
    badge: 'Open Circle',
  },
  {
    id: 'e4',
    title: 'Single-Origin Tea Tasting Masterclass',
    category: 'Tea Tasting',
    date: 'First Sunday of Every Month',
    time: '11:00 AM – 12:30 PM',
    location: 'Brewing Counter',
    description: 'Immerse yourself in cold steeps, spiced infusions, and artisanal tea pairings guided by our master brewer.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=400&q=80',
    artist: 'Twenteas Tea Sommelier',
    badge: 'Monthly Journal',
  },
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-[#1A110B] text-cream-100 relative hairline-b">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Editorial Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-[1px] bg-amber-500/50" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-amber-400/90 font-medium">
              Gatherings Journal
            </span>
            <span className="w-6 h-[1px] bg-amber-500/50" />
          </div>

          <h2 className="font-serif-vintage text-4xl sm:text-5xl lg:text-6xl text-cream-100 font-normal">
            Events & Music Journal
          </h2>

          <p className="text-cream-100/70 text-xs sm:text-base font-light leading-relaxed">
            Quiet music, open poetry circles, and tea tasting sessions under the trees. No boxed cards — just a seat for as long as you need it.
          </p>
        </div>

        {/* Minimal Printed Journal Entries (No Big Box Cards!) */}
        <div className="space-y-0 hairline-t">
          {EVENTS_LIST.map((event) => (
            <div
              key={event.id}
              className="py-8 sm:py-10 hairline-b group transition-colors hover:bg-cream-100/[0.02]"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                
                {/* Date & Category Column */}
                <div className="md:col-span-3 space-y-1.5">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-amber-400/90 font-mono font-medium block">
                    {event.badge}
                  </span>
                  <div className="text-xs text-cream-100/90 font-medium flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  <div className="text-[11px] text-cream-100/50 flex items-center gap-1.5">
                    <Clock className="w-3 h-3 shrink-0" />
                    <span>{event.time}</span>
                  </div>
                </div>

                {/* Event Details Column */}
                <div className="md:col-span-7 space-y-2.5">
                  <h3 className="font-serif-vintage text-2xl sm:text-3xl text-cream-100 font-normal group-hover:text-amber-300 transition-colors leading-snug">
                    {event.title}
                  </h3>

                  <p className="text-cream-100/70 text-xs sm:text-sm font-light leading-relaxed">
                    {event.description}
                  </p>

                  {event.artist && (
                    <div className="flex items-center gap-2 text-xs text-amber-300/80 italic font-serif-vintage pt-1">
                      <Mic className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{event.artist}</span>
                    </div>
                  )}
                </div>

                {/* Subtle Thumbnail Image Accent */}
                <div className="md:col-span-2 hidden md:flex justify-end">
                  <div className="w-20 h-20 rounded-xl overflow-hidden hairline-border bg-[#140D08] shrink-0">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover filter saturate-80 group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Walk-in Footer Line */}
        <div className="pt-12 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-cream-100/40 font-mono">
            • Open Walk-in Gathering · All Seats Under Trees Welcome
          </p>
        </div>

      </div>
    </section>
  );
};
