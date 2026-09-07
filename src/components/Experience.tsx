import React, { useState } from 'react';
import { Music, Calendar, Clock, Mic, UserCheck, CheckCircle2 } from 'lucide-react';

interface EventItem {
  id: string;
  title: string;
  category: 'Acoustic Music' | 'Community & Open Mic' | 'Tea Tasting';
  date: string;
  time: string;
  description: string;
  artist?: string;
  badge: string;
}

const EVENTS_LIST: EventItem[] = [
  {
    id: 'e1',
    title: 'Unplugged Under The Canopy',
    category: 'Acoustic Music',
    date: 'Every Friday & Saturday',
    time: '07:00 PM – 09:30 PM',
    description: 'Soulful acoustic guitar, violin duos, and mellow indie vocals under illuminated tree branches.',
    artist: 'Featuring Local Kerala Acoustic Artists',
    badge: 'Weekly Feature',
  },
  {
    id: 'e2',
    title: 'Grand Opening Acoustic Night',
    category: 'Acoustic Music',
    date: 'Special Event · Sept 2026',
    time: '06:30 PM Onwards',
    description: 'Celebrating the birth of Twenteas Cafeteria with complimentary house chai & live unplugged classic covers.',
    artist: 'Twenteas House Band',
    badge: 'Special Celebration',
  },
  {
    id: 'e3',
    title: 'Poetry & Open Mic Circle',
    category: 'Community & Open Mic',
    date: 'Every Sunday Evening',
    time: '05:30 PM – 08:00 PM',
    description: 'An open space for original Malayalam & English poetry, storytelling, and soft acoustic jams.',
    artist: 'Community Driven',
    badge: 'All Welcome',
  },
  {
    id: 'e4',
    title: 'Single-Origin Tea Tasting Masterclass',
    category: 'Tea Tasting',
    date: 'First Sunday of Every Month',
    time: '11:00 AM – 12:30 PM',
    description: 'Learn the art of cold steeps, spiced infusions, and tea pairings guided by our master brewer.',
    artist: 'Twenteas Tea Sommelier',
    badge: 'Workshop',
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
    <section id="experience" className="py-24 bg-coffee-950 text-cream-100 relative overflow-hidden border-b border-coffee-800/40">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-olive-500 font-semibold bg-olive-950/40 border border-olive-800/50 px-3.5 py-1 rounded-full mb-4">
            <Music className="w-3.5 h-3.5" />
            Atmosphere & Community
          </div>
          <h2 className="font-serif-vintage text-3xl sm:text-4xl lg:text-5xl text-cream-50 font-normal">
            Music & Events Under the Trees
          </h2>
          <p className="text-cream-200/75 text-sm sm:text-base mt-3 font-light">
            Slow down with warm acoustic notes, warm tea cups, and friendly conversations in Karunagappally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EVENTS_LIST.map((event) => {
            const isRSVPD = rsvpedEvents[event.id];

            return (
              <div
                key={event.id}
                className="bg-coffee-900/90 border border-coffee-800 hover:border-amber-500/40 p-6 sm:p-8 rounded-xl transition-all duration-300 shadow-xl flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-coffee-800/60">
                    <span className="text-[10px] uppercase tracking-widest text-amber-400 font-semibold bg-amber-950/60 border border-amber-800/50 px-2.5 py-1 rounded">
                      {event.badge}
                    </span>
                    <span className="text-xs text-cream-400/70 font-mono">
                      {event.category}
                    </span>
                  </div>

                  <h3 className="font-serif-vintage text-2xl text-cream-50 font-semibold mb-3 group-hover:text-amber-300 transition-colors">
                    {event.title}
                  </h3>

                  <p className="text-cream-200/80 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                    {event.description}
                  </p>

                  <div className="space-y-2.5 mb-6 text-xs text-cream-200/90 bg-coffee-950/60 p-4 rounded-lg border border-coffee-800/50">
                    <div className="flex items-center gap-2.5 text-amber-400 font-medium">
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

                <button
                  onClick={() => handleToggleRSVP(event.id, event.title)}
                  className={`w-full inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider py-3 rounded-md transition-all duration-200 ${
                    isRSVPD
                      ? 'bg-olive-800/80 text-cream-50 border border-olive-600'
                      : 'bg-amber-600 hover:bg-amber-500 text-coffee-950 shadow-md'
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
            );
          })}
        </div>
      </div>
    </section>
  );
};
