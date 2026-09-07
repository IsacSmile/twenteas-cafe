import React, { useState } from 'react';
import { Eye, Coffee, Search } from 'lucide-react';

export interface MenuItem {
  id: string;
  name: string;
  category: 'Teas' | 'Bites' | 'Bakery' | 'Refreshers';
  price: number;
  description: string;
  image: string;
  badge?: string;
  ingredients: string[];
  dietary?: 'Organic' | 'Vegan' | 'Vegetarian' | 'Signature';
  popular?: boolean;
}

const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Karunagappally Tree-Spiced Chai',
    category: 'Teas',
    price: 90,
    description: 'Slow-simmered artisanal black tea infused with green cardamom, star anise, fresh ginger, and local organic jaggery.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    badge: 'House Signature',
    ingredients: ['Assam Leaf', 'Cardamom', 'Ginger', 'Jaggery', 'Organic Milk'],
    dietary: 'Signature',
    popular: true,
  },
  {
    id: '2',
    name: 'Wood-Fired Garden Herb Crostini',
    category: 'Bites',
    price: 240,
    description: 'Crispy sourdough brushed with garlic herb butter, topped with charred cherry tomatoes, basil pesto, and fresh mozzarella.',
    image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=800&q=80',
    badge: 'Wood-Fired Special',
    ingredients: ['Artisanal Sourdough', 'Fresh Basil Pesto', 'Mozzarella', 'Olive Oil'],
    dietary: 'Vegetarian',
    popular: true,
  },
  {
    id: '3',
    name: 'Smoked Pepper Chicken Sliders',
    category: 'Bites',
    price: 320,
    description: 'Tender wood-smoked chicken brioche sliders with caramelized onions, cracked black pepper glaze, and crisp garden greens.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    badge: 'Chef Favorite',
    ingredients: ['Brioche Bun', 'Smoked Chicken', 'Black Pepper Glaze', 'Caramelized Onion'],
    dietary: 'Signature',
    popular: true,
  },
  {
    id: '4',
    name: 'Honey Lavender White Tea',
    category: 'Teas',
    price: 160,
    description: 'Delicate whole-leaf white tea steeps with wild dried lavender flowers and raw forest honey.',
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=80',
    badge: 'Organic Brew',
    ingredients: ['White Tea Leaves', 'French Lavender', 'Raw Forest Honey'],
    dietary: 'Organic',
  },
  {
    id: '5',
    name: 'Charcoal Roasted Espresso',
    category: 'Teas',
    price: 140,
    description: 'Single-origin Wayanad Arabica beans wood-roasted over charcoal for a velvety dark cocoa finish.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    badge: 'Artisanal Coffee',
    ingredients: ['Wayanad Arabica Beans', 'Filtered Water'],
    dietary: 'Vegan',
  },
  {
    id: '6',
    name: 'Warm Pistachio Cardamom Tart',
    category: 'Bakery',
    price: 210,
    description: 'Freshly baked flaky butter crust shell filled with roasted pistachio frangipane and crushed green cardamom.',
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800&q=80',
    badge: 'Freshly Baked',
    ingredients: ['Pistachio', 'Cardamom', 'Butter Crust', 'Clotted Cream'],
    dietary: 'Vegetarian',
    popular: true,
  },
  {
    id: '7',
    name: 'Hibiscus Mint Botanical Refresher',
    category: 'Refreshers',
    price: 150,
    description: 'Cold-steeped wild hibiscus petals, bruised garden mint leaves, sparkling soda, and fresh lime squeeze.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    badge: 'Cold Brewed',
    ingredients: ['Hibiscus Petals', 'Fresh Mint', 'Lime', 'Sparkling Water'],
    dietary: 'Vegan',
  },
  {
    id: '8',
    name: 'Truffle Mushroom & Cheese Tartine',
    category: 'Bites',
    price: 280,
    description: 'Pan-seared wild forest mushrooms with truffle oil drizzle and aged parmesan on toasted multi-grain rustic bread.',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80',
    badge: 'Gourmet Bite',
    ingredients: ['Wild Mushrooms', 'Truffle Oil', 'Parmesan', 'Rustic Grain Bread'],
    dietary: 'Vegetarian',
  },
];

interface MenuProps {
  onSelectItem: (item: MenuItem) => void;
}

export const Menu: React.FC<MenuProps> = ({ onSelectItem }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Teas', 'Bites', 'Bakery', 'Refreshers'];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-24 sm:py-32 bg-[#140D08] text-cream-100 relative hairline-b">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-5 sm:w-6 h-[1px] bg-amber-500/50" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-amber-400/90 font-medium">
              Curated Culinary Portfolio
            </span>
            <span className="w-5 sm:w-6 h-[1px] bg-amber-500/50" />
          </div>

          <h2 className="font-serif-vintage text-3xl sm:text-5xl lg:text-6xl text-cream-100 font-normal">
            Menu Showcase
          </h2>

          <p className="text-cream-100/70 text-xs sm:text-lg font-light leading-relaxed px-2">
            A lookbook of what we prepare daily under the trees. Served fresh at your table when you walk in.
          </p>
        </div>

        {/* Category Filters & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 sm:mb-16 pb-4 sm:pb-6 hairline-b">
          
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] font-light px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-amber-600 text-coffee-950 font-bold shadow-lg'
                    : 'bg-cream-100/5 text-cream-100/70 hover:text-cream-100 border border-cream-100/10'
                }`}
              >
                {cat === 'All' ? 'All Moments' : cat}
              </button>
            ))}
          </div>

          <div className="w-full sm:w-64 relative">
            <Search className="w-3.5 h-3.5 text-cream-100/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search showcase..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-cream-100/5 border border-cream-100/10 focus:border-amber-500 rounded-full pl-9 pr-4 py-2 text-xs text-cream-100 placeholder-cream-100/40 focus:outline-none transition-colors"
            />
          </div>

        </div>

        {/* Lookbook Cards Grid: 2 Columns on Mobile, 4 Columns on Desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectItem(item)}
              className="group cursor-pointer rounded-xl sm:rounded-2xl overflow-hidden bg-[#1A110B] hairline-border transition-all duration-500 hover:border-amber-500/40 flex flex-col justify-between"
            >
              <div>
                {/* Photo Banner: h-32 on Mobile, h-60 on Desktop */}
                <div className="relative h-32 sm:h-48 md:h-60 w-full overflow-hidden bg-[#140D08]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter saturate-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A110B] via-transparent to-transparent opacity-80" />

                  {item.badge && (
                    <span className="absolute top-2 left-2 sm:top-3.5 sm:left-3.5 text-[8px] sm:text-[10px] uppercase tracking-[0.1em] sm:tracking-[0.2em] text-amber-300 font-medium bg-[#140D08]/90 backdrop-blur-md px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border border-amber-500/20 max-w-[90%] truncate">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Compact Content Padding for Mobile */}
                <div className="p-3 sm:p-6 space-y-1.5 sm:space-y-3">
                  <h3 className="font-serif-vintage text-base sm:text-2xl text-cream-100 font-normal leading-snug group-hover:text-amber-300 transition-colors line-clamp-2">
                    {item.name}
                  </h3>

                  <p className="text-cream-100/70 text-[11px] sm:text-xs leading-relaxed font-light line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {item.ingredients.slice(0, 2).map((ing) => (
                      <span
                        key={ing}
                        className="text-[9px] sm:text-[10px] text-cream-100/50 font-mono truncate max-w-full"
                      >
                        • {ing}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-3 sm:p-6 pt-0 flex items-center gap-1.5 text-[10px] sm:text-xs text-amber-400/90 font-medium group-hover:text-amber-300">
                <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                <span>View Details</span>
              </div>

            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-cream-100/5 rounded-2xl border border-cream-100/10">
            <Coffee className="w-8 h-8 text-amber-500/50 mx-auto mb-3" />
            <p className="text-cream-100 font-serif-vintage text-xl">No highlights match your search.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-amber-400 underline hover:text-amber-300"
            >
              Reset Search
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
