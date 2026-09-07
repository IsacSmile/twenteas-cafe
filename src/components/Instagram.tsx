import React, { useState } from 'react';
import { ExternalLink, Play, LayoutGrid, Smartphone } from 'lucide-react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

interface InstagramPost {
  id: string;
  postId: string;
  caption: string;
  date: string;
  views: string;
  image: string;
  permalink: string;
  embedUrl: string;
}

const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-1',
    postId: 'Dc8o0-MT_zB',
    caption: 'Sunset tea steeps under the shaded green canopy of Karunagappally.',
    date: 'Sept 5, 2026',
    views: '4.2k views',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80',
    permalink: 'https://www.instagram.com/p/Dc8o0-MT_zB/',
    embedUrl: 'https://www.instagram.com/p/Dc8o0-MT_zB/embed/',
  },
  {
    id: 'ig-2',
    postId: 'Dc3ifMdzkS4',
    caption: 'Unplugged acoustic evening under warm hanging fairy lights.',
    date: 'Sept 4, 2026',
    views: '3.8k views',
    image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=600&q=80',
    permalink: 'https://www.instagram.com/p/Dc3ifMdzkS4/',
    embedUrl: 'https://www.instagram.com/p/Dc3ifMdzkS4/embed/',
  },
  {
    id: 'ig-3',
    postId: 'Dc1Ky05zZSL',
    caption: 'Fresh cardamoms & hot snacks straight from our oven counter.',
    date: 'Sept 3, 2026',
    views: '5.1k views',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
    permalink: 'https://www.instagram.com/p/Dc1Ky05zZSL/',
    embedUrl: 'https://www.instagram.com/p/Dc1Ky05zZSL/embed/',
  },
  {
    id: 'ig-4',
    postId: 'DcyXZ2-zNxy',
    caption: 'Slow Sunday conversations around wooden garden tables.',
    date: 'Aug 30, 2026',
    views: '2.9k views',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
    permalink: 'https://www.instagram.com/p/DcyXZ2-zNxy/',
    embedUrl: 'https://www.instagram.com/p/DcyXZ2-zNxy/embed/',
  },
  {
    id: 'ig-5',
    postId: 'Dcv39GJzGc7',
    caption: 'Cold fruit infusions & handcrafted botanical beverages.',
    date: 'Aug 28, 2026',
    views: '3.4k views',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80',
    permalink: 'https://www.instagram.com/p/Dcv39GJzGc7/',
    embedUrl: 'https://www.instagram.com/p/Dcv39GJzGc7/embed/',
  },
  {
    id: 'ig-6',
    postId: 'DcsiI0szXXW',
    caption: 'Poetry circle sunset beneath the rain tree canopy.',
    date: 'Aug 25, 2026',
    views: '4.7k views',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=600&q=80',
    permalink: 'https://www.instagram.com/p/DcsiI0szXXW/',
    embedUrl: 'https://www.instagram.com/p/DcsiI0szXXW/embed/',
  },
];

export const Instagram: React.FC = () => {
  const [viewMode, setViewMode] = useState<'embed' | 'card'>('embed');

  return (
    <section id="story" className="py-24 sm:py-32 bg-[#140D08] text-cream-100 relative hairline-b">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1px] bg-amber-500/50" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-amber-400/90 font-medium font-mono">
                Follow The Story
              </span>
            </div>

            <h2 className="font-serif-vintage text-4xl sm:text-5xl lg:text-6xl text-cream-100 font-normal">
              From Our Table
            </h2>

            <p className="text-cream-100/70 text-xs sm:text-base font-light leading-relaxed">
              Live Instagram videos and posts straight from our Karunagappally canopy journal (@twenteas_cafe).
            </p>
          </div>

          {/* Mode Switcher & Follow CTA Link */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {/* View Mode Toggle */}
            <div className="inline-flex p-1 rounded-full bg-[#1F1610] hairline-border">
              <button
                onClick={() => setViewMode('embed')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                  viewMode === 'embed'
                    ? 'bg-amber-600 text-black font-semibold shadow-md'
                    : 'text-cream-100/60 hover:text-cream-100'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Live Video Embeds</span>
              </button>
              <button
                onClick={() => setViewMode('card')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                  viewMode === 'card'
                    ? 'bg-amber-600 text-black font-semibold shadow-md'
                    : 'text-cream-100/60 hover:text-cream-100'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Compact Gallery</span>
              </button>
            </div>

            {/* Instagram Link */}
            <a
              href="https://www.instagram.com/twenteas_cafe/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-[0.15em] font-mono text-cream-100 bg-[#1F1610] hover:bg-[#2A1E16] hairline-border hover:border-amber-500/40 rounded-full transition-all group"
            >
              <InstagramIcon className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
              <span>@twenteas_cafe</span>
              <ExternalLink className="w-3.5 h-3.5 text-cream-100/40 group-hover:text-amber-400 transition-all" />
            </a>
          </div>
        </div>

        {/* Live Instagram View Mode */}
        {viewMode === 'embed' ? (
          /* Live Playable Embed Grid (1 col mobile, 2 col tablet, 3 col desktop) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INSTAGRAM_POSTS.map((post) => (
              <div
                key={post.id}
                className="bg-[#1A110B] hairline-border rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between"
              >
                {/* Responsive Embedded Instagram Player Iframe */}
                <div className="relative w-full h-[450px] bg-[#140D08] overflow-hidden">
                  <iframe
                    src={post.embedUrl}
                    title={post.caption}
                    className="w-full h-full border-0 rounded-t-2xl"
                    scrolling="no"
                    allowTransparency={true}
                    loading="lazy"
                  />
                </div>

                {/* Footer Bar with Direct Link */}
                <div className="p-3 bg-[#170E09] border-t border-cream-100/5 flex items-center justify-between text-[11px] font-mono text-cream-100/70">
                  <span className="text-amber-400/90">{post.date}</span>
                  <a
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-amber-400 transition-colors"
                  >
                    <span>View on Instagram</span>
                    <ExternalLink className="w-3 h-3 text-amber-400" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Compact Gallery View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INSTAGRAM_POSTS.map((post) => (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-[#1A110B] hairline-border rounded-xl overflow-hidden hover:border-amber-500/40 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-48 sm:h-56 bg-[#140D08] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.caption}
                    className="w-full h-full object-cover filter saturate-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A110B] via-transparent to-black/30 opacity-80 group-hover:opacity-60 transition-opacity" />

                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] uppercase font-mono tracking-widest bg-black/60 backdrop-blur-md text-cream-100/90 hairline-border">
                      <InstagramIcon className="w-3 h-3 text-amber-400" />
                      <span>Reel</span>
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md hairline-border flex items-center justify-center text-cream-100 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-black group-hover:border-amber-400 transition-all duration-300 shadow-xl">
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </div>
                  </div>

                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-cream-100/70">
                    <span>{post.views}</span>
                    <span className="text-amber-400/90 group-hover:translate-x-1 transition-transform">Watch on Instagram →</span>
                  </div>
                </div>

                <div className="p-4 space-y-1.5 border-t border-cream-100/5 bg-[#1A110B]">
                  <div className="text-[10px] font-mono tracking-widest uppercase text-amber-400/80">
                    {post.date}
                  </div>
                  <p className="text-xs text-cream-100/80 font-light leading-relaxed line-clamp-2 group-hover:text-cream-100 transition-colors">
                    {post.caption}
                  </p>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-[11px] font-mono text-cream-100/40 uppercase tracking-[0.25em]">
            • Tag @twenteas_cafe to be featured in our canopy story journal
          </p>
        </div>

      </div>
    </section>
  );
};
