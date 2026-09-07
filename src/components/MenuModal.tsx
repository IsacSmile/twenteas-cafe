import React from 'react';
import { X, Calendar } from 'lucide-react';
import { MenuItem } from './Menu';

interface MenuModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onOpenReservation: () => void;
}

export const MenuModal: React.FC<MenuModalProps> = ({ item, onClose, onOpenReservation }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#140D08]/85 backdrop-blur-md animate-fade-in">
      <div className="bg-[#1A110B] hairline-border w-full max-w-md rounded-2xl shadow-2xl overflow-hidden relative text-cream-100 animate-slide-up">
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 hairline-b bg-[#140D08]/60">
          <span className="text-[10px] uppercase tracking-[0.2em] text-amber-400 font-mono">
            Showcase Highlight · {item.category}
          </span>
          <button
            onClick={onClose}
            className="p-1 text-cream-100/50 hover:text-cream-100 rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          
          <div className="relative h-48 w-full rounded-xl overflow-hidden bg-[#140D08] hairline-border">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover filter saturate-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A110B] via-transparent to-transparent opacity-80" />
            
            {item.badge && (
              <span className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.2em] text-amber-300 font-medium bg-[#140D08]/90 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/20">
                {item.badge}
              </span>
            )}
          </div>

          <div className="space-y-2">
            <h3 className="font-serif-vintage text-2xl text-cream-100 font-normal">
              {item.name}
            </h3>
            <p className="text-cream-100/75 text-xs leading-relaxed font-light">
              {item.description}
            </p>
          </div>

          {/* Fresh Ingredients */}
          <div className="bg-[#140D08] p-4 rounded-xl hairline-border space-y-2 text-xs">
            <div className="text-amber-300/90 font-mono text-[11px] uppercase tracking-wider">
              Fresh Ingredients & Preparation:
            </div>
            <div className="flex flex-wrap gap-2">
              {item.ingredients.map((ing) => (
                <span
                  key={ing}
                  className="text-[11px] text-cream-100/70 font-mono"
                >
                  • {ing}
                </span>
              ))}
            </div>
          </div>

          <p className="text-[11px] text-cream-100/50 italic font-serif-vintage">
            * Prepared fresh daily under the trees at Twenteas Karunagappally. Walk-ins welcome.
          </p>

          {/* Action: Plan Visit to Taste */}
          <div className="pt-2">
            <button
              onClick={() => {
                onClose();
                onOpenReservation();
              }}
              className="w-full inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 text-coffee-950 font-bold uppercase tracking-[0.2em] text-xs py-3.5 rounded-full shadow-lg transition-all"
            >
              <Calendar className="w-4 h-4" /> Plan Visit To Taste Under The Trees
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
