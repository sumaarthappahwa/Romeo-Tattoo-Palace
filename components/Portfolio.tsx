
import React from 'react';

const items = [
  { id: 1, category: 'Realism', url: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800' },
  { id: 2, category: 'Traditional', url: 'https://images.unsplash.com/photo-1560707303-4e980ce876ad?auto=format&fit=crop&q=80&w=800' },
  { id: 3, category: 'Portrait', url: 'https://images.unsplash.com/photo-1590208653897-da3300b4a681?auto=format&fit=crop&q=80&w=800' },
  { id: 4, category: 'Fine Line', url: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&q=80&w=800' },
  { id: 5, category: 'Color', url: 'https://images.unsplash.com/photo-1597852074816-d933c4d2b988?auto=format&fit=crop&q=80&w=800' },
  { id: 6, category: 'Blackwork', url: 'https://images.unsplash.com/photo-1562967914-6c175197f101?auto=format&fit=crop&q=80&w=800' },
  { id: 7, category: 'Minimalist', url: 'https://images.unsplash.com/photo-1512101176959-c557f3516787?auto=format&fit=crop&q=80&w=800' },
  { id: 8, category: 'Japanese', url: 'https://images.unsplash.com/photo-1621503322880-55723e6571f3?auto=format&fit=crop&q=80&w=800' },
];

const Portfolio: React.FC<{ limit?: number }> = ({ limit }) => {
  const displayItems = limit ? items.slice(0, limit) : items;

  return (
    <section className="py-24 bg-zinc-950 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[#D4AF37] uppercase tracking-[0.5em] mb-4">The Gallery</h2>
          <h3 className="text-4xl md:text-6xl font-oswald uppercase font-bold">Artist Showcases</h3>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {displayItems.map((item) => (
            <div key={item.id} className="relative group overflow-hidden break-inside-avoid rounded-sm">
              <img 
                src={item.url} 
                alt={item.category}
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <div className="text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-[#D4AF37] text-sm tracking-widest uppercase mb-2">Style</p>
                  <p className="text-white text-2xl font-oswald uppercase tracking-wider">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
