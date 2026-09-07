import React from 'react';
import { ExternalLink } from 'lucide-react';

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
  permalink: string;
  embedUrl: string;
}

const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-1',
    postId: 'Dc8o0-MT_zB',
    caption: 'Sunset tea steeps under the shaded green canopy of Karunagappally.',
    date: 'Sept 5, 2026',
    permalink: 'https://www.instagram.com/p/Dc8o0-MT_zB/',
    embedUrl: 'https://www.instagram.com/p/Dc8o0-MT_zB/embed/',
  },
  {
    id: 'ig-2',
    postId: 'Dc3ifMdzkS4',
    caption: 'Unplugged acoustic evening under warm hanging fairy lights.',
    date: 'Sept 4, 2026',
    permalink: 'https://www.instagram.com/p/Dc3ifMdzkS4/',
    embedUrl: 'https://www.instagram.com/p/Dc3ifMdzkS4/embed/',
  },
  {
    id: 'ig-3',
    postId: 'Dc1Ky05zZSL',
    caption: 'Fresh cardamoms & hot snacks straight from our oven counter.',
    date: 'Sept 3, 2026',
    permalink: 'https://www.instagram.com/p/Dc1Ky05zZSL/',
    embedUrl: 'https://www.instagram.com/p/Dc1Ky05zZSL/embed/',
  },
  {
    id: 'ig-4',
    postId: 'DcyXZ2-zNxy',
    caption: 'Slow Sunday conversations around wooden garden tables.',
    date: 'Aug 30, 2026',
    permalink: 'https://www.instagram.com/p/DcyXZ2-zNxy/',
    embedUrl: 'https://www.instagram.com/p/DcyXZ2-zNxy/embed/',
  },
  {
    id: 'ig-5',
    postId: 'Dcv39GJzGc7',
    caption: 'Cold fruit infusions & handcrafted botanical beverages.',
    date: 'Aug 28, 2026',
    permalink: 'https://www.instagram.com/p/Dcv39GJzGc7/',
    embedUrl: 'https://www.instagram.com/p/Dcv39GJzGc7/embed/',
  },
  {
    id: 'ig-6',
    postId: 'DcsiI0szXXW',
    caption: 'Poetry circle sunset beneath the rain tree canopy.',
    date: 'Aug 25, 2026',
    permalink: 'https://www.instagram.com/p/DcsiI0szXXW/',
    embedUrl: 'https://www.instagram.com/p/DcsiI0szXXW/embed/',
  },
];

export const Instagram: React.FC = () => {
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
              Live videos from our canopy story journal (@twenteas_cafe).
            </p>
          </div>

          {/* Follow CTA Link */}
          <div className="shrink-0 w-full sm:w-auto">
            <a
              href="https://www.instagram.com/twenteas_cafe/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 text-xs uppercase tracking-[0.15em] font-mono text-cream-100 bg-[#1F1610] hover:bg-[#2A1E16] hairline-border hover:border-amber-500/40 rounded-full transition-all group whitespace-nowrap"
            >
              <InstagramIcon className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform shrink-0" />
              <span>Follow @twenteas_cafe</span>
              <ExternalLink className="w-3.5 h-3.5 text-cream-100/40 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all shrink-0" />
            </a>
          </div>
        </div>

        {/* Pure Video Player Grid (Crops header & footer so ONLY video shows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {INSTAGRAM_POSTS.map((post) => (
            <div
              key={post.id}
              className="bg-[#1A110B] hairline-border rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-amber-500/40"
            >
              {/* Cropped Container: Clips the top header bar and bottom footer so ONLY the video shows */}
              <div className="relative w-full h-[350px] sm:h-[420px] md:h-[450px] bg-[#140D08] overflow-hidden rounded-xl">
                <iframe
                  src={post.embedUrl}
                  title={post.caption}
                  className="absolute -top-[56px] sm:-top-[60px] left-0 w-full h-[125%] border-0 scale-[1.05] origin-top pointer-events-auto"
                  scrolling="no"
                  allowTransparency={true}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

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
