import React from 'react';
import { Calendar, Clock, Mic } from 'lucide-react';

interface EventItem {
  id: string;
  title: string;
  category: 'Acoustic Sessions' | 'Open Mic Circle' | 'Tea Tasting';
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
    image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=800&q=80',
    artist: 'Local Kerala Acoustic Artists',
    badge: 'Weekly Gathering',
  },
  {
    id: 'e2',
    title: 'Grand Opening Acoustic Night',
    category: 'Acoustic Sessions',
    date: 'Special Event · Sept 2026',
    time: '06:30 PM Onwards',
    location: 'Main Tree Circle',
    description: 'Celebrating the birth of Twenteas Cafeteria with live unplugged classic covers, chai tastings, and warm community vibes.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    artist: 'Twenteas Tea Sommelier',
    badge: 'Monthly Journal',
  },
];

interface ExperienceProps {
  onOpenReservation: () => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onOpenReservation }) => {
  return (
    <section id="experience" className="py-32 bg-[#1A110B] text-cream-100 relative hairline-b">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-[1px] bg-amber-500/50" />
            <span className="text-xs uppercase tracking-[0.3em] text-amber-400/90 font-medium">
              Events & Gathering Journal
            </span>
            <span className="w-6 h-[1px] bg-amber-500/50" />
          </div>

          <h2 className="font-serif-vintage text-4xl sm:text-5xl lg:text-6xl text-cream-100 font-normal">
            Gatherings Under The Trees
          </h2>

          <p className="text-cream-100/70 text-base sm:text-lg font-light leading-relaxed">
            Quiet music, open poetry circles, and tea tasting workshops beneath the canopy.
          </p>
        </div>

        {/* Events Journal List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {EVENTS_LIST.map((event) => (
            <div
              key={event.id}
              className="group bg-[#140D08] rounded-2xl overflow-hidden hairline-border transition-all duration-500 hover:border-amber-500/40 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter saturate-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#140D08] via-transparent to-transparent opacity-80" />

                  <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] text-amber-300 font-medium bg-[#140D08]/90 backdrop-blur-md px-3.5 py-1 rounded-full border border-amber-500/20">
                    {event.badge}
                  </span>
                </div>

                <div className="p-8 space-y-4">
                  <h3 className="font-serif-vintage text-2xl sm:text-3xl text-cream-100 font-normal leading-snug group-hover:text-amber-300 transition-colors">
                    {event.title}
                  </h3>

                  <p className="text-cream-100/70 text-xs sm:text-sm leading-relaxed font-light">
                    {event.description}
                  </p>

                  <div className="space-y-2 pt-2 text-xs text-cream-100/80 border-t border-cream-100/10">
                    <div className="flex items-center gap-2.5 text-amber-300 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{event.date}</span>
                    </div>

                    <div className="flex items-center gap-2.5 text-cream-100/60">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{event.time}</span>
                    </div>

                    {event.artist && (
                      <div className="flex items-center gap-2.5 text-cream-100/60">
                        <Mic className="w-3.5 h-3.5" />
                        <span className="italic">{event.artist}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0">
                <button
                  onClick={onOpenReservation}
                  className="w-full inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] py-3 rounded-full border border-amber-500/30 hover:border-amber-400 bg-amber-600/10 hover:bg-amber-600 text-amber-300 hover:text-coffee-950 transition-all duration-300"
                >
                  Join Us Under Trees
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
