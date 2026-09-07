import React, { useState } from 'react';
import { Music, Calendar, Clock, Mic, UserCheck, CheckCircle2, Sparkles } from 'lucide-react';

interface EventItem {
  id: string;
  title: string;
  category: 'Acoustic Sessions' | 'Open Mic Gathering' | 'Tea & Brew Tasting';
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  artist?: string;
  badge: string;
  highlightText: string;
}

const EVENTS_LIST: EventItem[] = [
  {
    id: 'e1',
    title: 'Unplugged Under The Canopy',
    category: 'Acoustic Sessions',
    date: 'Every Friday & Saturday Evening',
    time: '07:00 PM – 09:30 PM',
    location: 'Shaded Garden Deck · Karunagappally',
    description: 'Soulful acoustic guitar, violin duos, and mellow indie vocals beneath warm hanging fairy lights and tree leaves.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    artist: 'Local Kerala Acoustic Artists',
    badge: 'Weekly Feature',
    highlightText: 'Complimentary herbal tea cup on arrival',
  },
  {
    id: 'e2',
    title: 'Grand Opening Acoustic Night',
    category: 'Acoustic Sessions',
    date: 'Special Event · Sept 2026',
    time: '06:30 PM Onwards',
    location: 'Main Tree Stage · Karunagappally',
    description: 'Celebrating the birth of Twenteas Cafeteria with live unplugged classic covers, chai tastings, and warm community vibes.',
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80',
    artist: 'Twenteas House Acoustic Band',
    badge: 'Opening Night',
    highlightText: 'Special opening tea pairing menu',
  },
  {
    id: 'e3',
    title: 'Poetry & Open Mic Circle',
    category: 'Open Mic Gathering',
    date: 'Every Sunday Sunset',
    time: '05:30 PM – 08:00 PM',
    location: 'Tree Canopy Outdoor Circle',
    description: 'An open, welcoming space for original Malayalam & English poetry, storytelling, acoustic songs, and shared laughter.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    artist: 'Open to All Storytellers & Singers',
    badge: 'Community Gathering',
    highlightText: 'Bring your instruments & stories',
  },
  {
    id: 'e4',
    title: 'Single-Origin Tea Tasting Masterclass',
    category: 'Tea & Brew Tasting',
    date: 'First Sunday of Every Month',
    time: '11:00 AM – 12:30 PM',
    location: 'Brewing Deck',
    description: 'Immerse yourself in cold steeps, spiced infusions, and artisanal tea pairings guided by our master tea brewer.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    artist: 'Twenteas Tea Sommelier',
    badge: 'Intimate Workshop',
    highlightText: 'Limited to 15 attendees per session',
  },
];

interface ExperienceProps {
  onRSVP: (eventTitle: string) => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onRSVP }) => {
  const [rsvpedEvents, setRsvpedEvents] = useState<Record<string, boolean>>({});

  const handleToggleRSVP = (eventId: string, title: string) => {
    setRsvpedEvents((prev) => ({
      ...prev,
      [eventId]: !prev[eventId],
    }));
    onRSVP(title);
  };

  return (
    <section id="experience" className="py-28 bg-coffee-950 text-cream-100 relative overflow-hidden border-b border-coffee-800/40">
      
      {/* Soft Ambient Background Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-amber-600/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-olive-700/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-olive-500 font-semibold bg-olive-950/50 border border-olive-800/50 px-4 py-1.5 rounded-full">
            <Music className="w-3.5 h-3.5" />
            An Invitation To Slow Down
          </div>

          <h2 className="font-serif-vintage text-4xl sm:text-5xl lg:text-6xl text-cream-50 font-normal leading-tight">
            Music & Gatherings Under the Trees
          </h2>

          <p className="text-cream-200/80 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Warm tea cups, soft strings, and intimate conversations beneath the leaf canopy. Join us for acoustic evenings and quiet celebrations in Karunagappally.
          </p>
        </div>

        {/* Editorial Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {EVENTS_LIST.map((event) => {
            const isRSVPD = rsvpedEvents[event.id];

            return (
              <div
                key={event.id}
                className="group bg-coffee-900/70 backdrop-blur-md border border-coffee-800/90 hover:border-amber-500/50 rounded-2xl overflow-hidden transition-all duration-300 shadow-2xl flex flex-col justify-between"
              >
                <div>
                  {/* Event Image Banner with Glass Badge */}
                  <div className="relative h-56 w-full overflow-hidden bg-coffee-950">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-coffee-950/40 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                      <span className="text-[10px] uppercase tracking-widest text-amber-300 font-semibold bg-coffee-950/90 backdrop-blur-sm border border-amber-800/60 px-3 py-1 rounded-md shadow-md">
                        {event.badge}
                      </span>
                      <span className="text-[11px] text-cream-200/90 bg-coffee-950/80 backdrop-blur-sm px-2.5 py-1 rounded border border-coffee-800 font-mono">
                        {event.category}
                      </span>
                    </div>

                    {/* Highlight Footer inside image */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-xs text-amber-300/90 font-medium">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="truncate">{event.highlightText}</span>
                    </div>
                  </div>

                  {/* Event Card Content */}
                  <div className="p-6 sm:p-8 space-y-4">
                    <h3 className="font-serif-vintage text-2xl sm:text-3xl text-cream-50 font-semibold group-hover:text-amber-300 transition-colors leading-snug">
                      {event.title}
                    </h3>

                    <p className="text-cream-200/80 text-xs sm:text-sm leading-relaxed font-light">
                      {event.description}
                    </p>

                    {/* Schedule & Location Pill Grid */}
                    <div className="space-y-2.5 pt-2 text-xs text-cream-200/90 border-t border-coffee-800/60">
                      <div className="flex items-center gap-2.5 text-amber-400 font-semibold">
                        <Calendar className="w-4 h-4 text-amber-500 shrink-0" />
                        <span>{event.date}</span>
                      </div>

                      <div className="flex items-center gap-2.5 text-cream-300/80">
                        <Clock className="w-4 h-4 text-olive-500 shrink-0" />
                        <span>{event.time}</span>
                      </div>

                      {event.artist && (
                        <div className="flex items-center gap-2.5 text-cream-300/80">
                          <Mic className="w-4 h-4 text-amber-400 shrink-0" />
                          <span className="italic">{event.artist}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* RSVP Action */}
                <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2">
                  <button
                    onClick={() => handleToggleRSVP(event.id, event.title)}
                    className={`w-full inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl transition-all duration-200 ${
                      isRSVPD
                        ? 'bg-olive-800/90 text-cream-50 border border-olive-600 shadow-inner'
                        : 'bg-amber-600 hover:bg-amber-500 text-coffee-950 shadow-lg shadow-amber-950/50'
                    }`}
                  >
                    {isRSVPD ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-olive-300" />
                        RSVP Confirmed (See You There!)
                      </>
                    ) : (
                      <>
                        <UserCheck className="w-4 h-4" />
                        Reserve Spot / Remind Me
                      </>
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
