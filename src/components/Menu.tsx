import React, { useState } from 'react';
import { Utensils, Sparkles, Coffee, Info, Search } from 'lucide-react';

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
    description: 'Slow-simmered artisanal black tea infused with green cardamom, star anise, ginger, and local organic jaggery.',
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
    description: 'Crispy sourdough brushed with garlic herb butter, topped with roasted cherry tomatoes, basil pesto, and charred mozzarella.',
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
    description: 'Cold-steeped wild hibiscus petals, bruised garden mint leaves, sparkling soda, and lime squeeze.',
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
    <section id="menu" className="py-24 bg-coffee-900 text-cream-100 relative border-b border-coffee-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold bg-amber-950/50 border border-amber-800/40 px-3.5 py-1 rounded-full mb-4">
            <Utensils className="w-3.5 h-3.5" />
            Curated Culinary Selection
          </div>
          <h2 className="font-serif-vintage text-3xl sm:text-4xl lg:text-5xl text-cream-50 font-normal">
            Menu Highlights
          </h2>
          <p className="text-cream-200/75 text-sm sm:text-base mt-3 font-light leading-relaxed">
            Handcrafted beverages and slow wood-fired bites prepared with fresh local ingredients under the tree canopy.
          </p>
        </div>

        {/* Category Filters & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 pb-6 border-b border-coffee-800/60">
          
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs uppercase tracking-wider font-semibold px-4 py-2.5 rounded-full transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-amber-600 text-coffee-950 shadow-md'
                    : 'bg-coffee-950/80 text-cream-200/80 hover:text-cream-50 hover:bg-coffee-850 border border-coffee-800/60'
                }`}
              >
                {cat === 'All' ? 'All Moments' : cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-64 relative">
            <Search className="w-3.5 h-3.5 text-cream-400/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search flavor or bite..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-coffee-950/80 border border-coffee-800 focus:border-amber-500 rounded-full pl-9 pr-4 py-2 text-xs text-cream-100 placeholder-cream-400/50 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Menu Cards Grid with Product Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-coffee-950/90 border border-coffee-800 hover:border-amber-500/50 rounded-2xl overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl flex flex-col justify-between"
            >
              <div>
                {/* Product Image Banner */}
                <div className="relative h-48 w-full overflow-hidden bg-coffee-900">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-transparent to-transparent opacity-80" />
                  
                  {/* Badge Overlay */}
                  {item.badge && (
                    <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest text-amber-300 font-semibold bg-coffee-950/90 backdrop-blur-sm border border-amber-800/60 px-2.5 py-1 rounded-md shadow-md">
                      {item.badge}
                    </span>
                  )}

                  {item.popular && (
                    <span className="absolute top-3 right-3 inline-flex items-center gap-1 text-[10px] text-olive-300 font-semibold bg-olive-950/90 backdrop-blur-sm border border-olive-700/50 px-2.5 py-1 rounded-md">
                      <Sparkles className="w-3 h-3 text-olive-400" />
                      Popular
                    </span>
                  )}

                  {/* Price Tag Overlay */}
                  <span className="absolute bottom-3 right-3 text-sm font-bold text-cream-50 bg-amber-600/90 backdrop-blur-sm px-3 py-1 rounded-md shadow-md font-sans">
                    ₹{item.price}
                  </span>
                </div>

                {/* Card Content Body */}
                <div className="p-5">
                  <h3 className="font-serif-vintage text-xl text-cream-50 font-semibold group-hover:text-amber-300 transition-colors mb-2 leading-snug">
                    {item.name}
                  </h3>

                  <p className="text-cream-200/75 text-xs leading-relaxed font-light mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Ingredient Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {item.ingredients.slice(0, 3).map((ing) => (
                      <span
                        key={ing}
                        className="text-[10px] text-cream-400/80 bg-coffee-900 border border-coffee-800 px-2 py-0.5 rounded"
                      >
                        {ing}
                      </span>
                    ))}
                    {item.ingredients.length > 3 && (
                      <span className="text-[10px] text-cream-400/50 px-1 py-0.5">
                        +{item.ingredients.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* View Details Action */}
              <div className="px-5 pb-5 pt-1">
                <button
                  onClick={() => onSelectItem(item)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-coffee-850 hover:bg-amber-600 hover:text-coffee-950 border border-coffee-750 hover:border-amber-600 text-cream-200 text-xs font-semibold uppercase tracking-wider py-2.5 rounded-lg transition-all duration-200 active:scale-98"
                >
                  <Info className="w-3.5 h-3.5" />
                  View Details & Order Note
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Empty state search fallback */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-coffee-950/50 rounded-2xl border border-coffee-800">
            <Coffee className="w-8 h-8 text-amber-500/50 mx-auto mb-3" />
            <p className="text-cream-200 font-serif text-lg">No menu items match your search.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-amber-400 underline hover:text-amber-300 font-semibold"
            >
              Reset Search & Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
