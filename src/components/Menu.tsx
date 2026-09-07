import React, { useState } from 'react';
import { Utensils, Sparkles, Coffee, Info } from 'lucide-react';

export interface MenuItem {
  id: string;
  name: string;
  category: 'Teas' | 'Bites' | 'Bakery' | 'Refreshers';
  price: number;
  description: string;
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
    description: 'Slow-simmered artisanal black tea infused with fresh green cardamom, star anise, ginger, and local organic jaggery.',
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
    description: 'Crispy sourdough brushed with garlic herb butter, topped with cherry tomatoes, basil pesto, and charred mozzarella.',
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
    description: 'Tender wood-smoked chicken brioche sliders with caramelized onions, cracked black pepper sauce, and crisp greens.',
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
    description: 'Delicate whole-leaf white tea steeps with wild dried lavender flowers and pure forest honey.',
    badge: 'Organic',
    ingredients: ['White Tea Leaves', 'French Lavender', 'Raw Forest Honey'],
    dietary: 'Organic',
  },
  {
    id: '5',
    name: 'Charcoal Roasted Espresso',
    category: 'Teas',
    price: 140,
    description: 'Single-origin Wayanad coffee beans wood-roasted over charcoal for a rich, velvety dark cocoa finish.',
    badge: 'Artisanal Coffee',
    ingredients: ['Wayanad Arabica Beans', 'Filtered Water'],
    dietary: 'Vegan',
  },
  {
    id: '6',
    name: 'Warm Pistachio Cardamom Tart',
    category: 'Bakery',
    price: 210,
    description: 'Freshly baked flaky pastry shell filled with roasted pistachio frangipane and crushed green cardamom.',
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
    description: 'Cold-steeped wild hibiscus flowers, bruised fresh garden mint, sparkling soda, and lime squeeze.',
    badge: 'Cold Brewed',
    ingredients: ['Hibiscus Petals', 'Fresh Mint', 'Lime', 'Sparkling Water'],
    dietary: 'Vegan',
  },
  {
    id: '8',
    name: 'Truffle Mushroom & Cheese Tartine',
    category: 'Bites',
    price: 280,
    description: 'Pan-seared wild mushrooms with truffle oil drizzle and aged parmesan on toasted multi-grain rustic bread.',
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
    <section id="menu" className="py-24 bg-coffee-900 text-cream-100 relative border-b border-coffee-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold bg-amber-950/40 border border-amber-800/40 px-3.5 py-1 rounded-full mb-4">
            <Utensils className="w-3.5 h-3.5" />
            Curated Culinary Selection
          </div>
          <h2 className="font-serif-vintage text-3xl sm:text-4xl lg:text-5xl text-cream-50 font-normal">
            Menu Highlights
          </h2>
          <p className="text-cream-200/75 text-sm sm:text-base mt-3 font-light">
            Handcrafted beverages and slow wood-fired bites prepared with fresh local ingredients under the trees.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-coffee-800/60">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs uppercase tracking-wider font-medium px-4 py-2.5 rounded-md transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-amber-600 text-coffee-950 font-bold shadow-md'
                    : 'bg-coffee-850/80 text-cream-200/80 hover:text-cream-50 hover:bg-coffee-800 border border-coffee-800/50'
                }`}
              >
                {cat === 'All' ? 'All Highlights' : cat}
              </button>
            ))}
          </div>

          <div className="w-full md:w-64 relative">
            <input
              type="text"
              placeholder="Search flavor or bite..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-coffee-950/80 border border-coffee-800 focus:border-amber-500 rounded-md px-3.5 py-2 text-xs text-cream-100 placeholder-cream-400/50 focus:outline-none transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-coffee-950/80 hover:bg-coffee-950 border border-coffee-800/80 hover:border-amber-500/40 p-6 rounded-xl transition-all duration-300 shadow-lg flex flex-col justify-between relative overflow-hidden"
            >
              {item.badge && (
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[10px] uppercase tracking-widest text-amber-300 font-semibold bg-amber-950/80 border border-amber-800/60 px-2.5 py-1 rounded">
                    {item.badge}
                  </span>
                  {item.popular && (
                    <span className="flex items-center gap-1 text-[10px] text-olive-400 font-medium">
                      <Sparkles className="w-3 h-3 text-olive-500" />
                      Popular
                    </span>
                  )}
                </div>
              )}

              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-serif-vintage text-xl text-cream-50 font-semibold group-hover:text-amber-300 transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-base font-bold text-amber-400 font-sans ml-2">
                    ₹{item.price}
                  </span>
                </div>

                <p className="text-cream-300/80 text-xs leading-relaxed mb-4 font-light">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {item.ingredients.map((ing) => (
                    <span
                      key={ing}
                      className="text-[10px] text-cream-400/70 bg-coffee-900 border border-coffee-800 px-2 py-0.5 rounded"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onSelectItem(item)}
                className="w-full inline-flex items-center justify-center gap-2 bg-coffee-850 hover:bg-amber-600 hover:text-coffee-950 border border-coffee-750 hover:border-amber-600 text-cream-200 text-xs font-semibold uppercase tracking-wider py-2.5 rounded-md transition-all duration-200 active:scale-98"
              >
                <Info className="w-3.5 h-3.5" />
                View Details & Order Note
              </button>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12 bg-coffee-950/40 rounded-xl border border-coffee-800">
            <Coffee className="w-8 h-8 text-amber-500/50 mx-auto mb-3" />
            <p className="text-cream-200 font-serif text-lg">No menu items match your search.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-amber-400 underline hover:text-amber-300"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
