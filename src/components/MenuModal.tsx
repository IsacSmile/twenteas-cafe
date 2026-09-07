import React, { useState } from 'react';
import { X, Check, ShoppingBag, Sparkles } from 'lucide-react';
import { MenuItem } from './Menu';

interface MenuModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export const MenuModal: React.FC<MenuModalProps> = ({ item, onClose }) => {
  const [orderAdded, setOrderAdded] = useState(false);

  if (!item) return null;

  const handleAdd = () => {
    setOrderAdded(true);
    setTimeout(() => {
      setOrderAdded(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-coffee-950/80 backdrop-blur-md animate-fade-in">
      <div className="bg-coffee-900 border border-coffee-800 w-full max-w-md rounded-xl shadow-2xl overflow-hidden relative text-cream-100 animate-slide-up">
        <div className="flex items-center justify-between p-5 border-b border-coffee-800/80 bg-coffee-950/60">
          <span className="text-[10px] uppercase tracking-widest text-amber-400 font-semibold bg-amber-950/60 border border-amber-800/50 px-2.5 py-1 rounded">
            {item.category} Highlight
          </span>
          <button
            onClick={onClose}
            className="p-1.5 text-cream-400 hover:text-cream-100 rounded-md transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex justify-between items-baseline">
            <h3 className="font-serif-vintage text-2xl text-cream-50 font-semibold">
              {item.name}
            </h3>
            <span className="text-xl font-bold text-amber-400 font-sans">
              ₹{item.price}
            </span>
          </div>

          <p className="text-cream-200/80 text-xs leading-relaxed font-light">
            {item.description}
          </p>

          <div className="bg-coffee-950/80 p-4 rounded-lg border border-coffee-800/60 space-y-2 text-xs">
            <div className="text-cream-300/90 font-medium">Fresh Ingredients:</div>
            <div className="flex flex-wrap gap-1.5">
              {item.ingredients.map((ing) => (
                <span
                  key={ing}
                  className="text-[11px] text-cream-200 bg-coffee-900 border border-coffee-750 px-2.5 py-1 rounded"
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-olive-400">
            <Sparkles className="w-4 h-4 text-olive-500" />
            <span>Prepared fresh on order at Twenteas Karunagappally.</span>
          </div>

          <div className="pt-2">
            <button
              onClick={handleAdd}
              disabled={orderAdded}
              className={`w-full inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider py-3 rounded-md transition-all ${
                orderAdded
                  ? 'bg-olive-800 text-cream-50'
                  : 'bg-amber-600 hover:bg-amber-500 text-coffee-950 shadow-lg'
              }`}
            >
              {orderAdded ? (
                <>
                  <Check className="w-4 h-4" /> Added to Order Note!
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" /> Add To Dine-in / Takeaway Note
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
