import React, { useState } from 'react';
import { Lock, Check, Eye, Headphones } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { Product } from '../../types';
import { WhopButton } from '../common/WhopButton';

interface ProductsCatalogProps {
  onSelectProduct: (product: Product) => void;
}

export const ProductsCatalog: React.FC<ProductsCatalogProps> = ({ onSelectProduct }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'Discord Moderation', label: 'Discord Moderation' },
    { id: 'Music & Audio', label: 'Music & Audio' },
    { id: 'Security & Verification', label: 'Security & Verification' },
    { id: 'Community Automation', label: 'Community Automation' },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Category filter pills */}
      <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
        <div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-950 tracking-tight">
            RoynixBotWorks Product Suite
          </h3>
          <p className="text-xs sm:text-sm text-zinc-500 mt-1">
            Engineered software packages with uncompiled source code, lifetime documentation and zero vendor lock-in.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 bg-zinc-100 p-1 rounded-full border border-zinc-200">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-white text-zinc-950 shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((bot) => {
          const isAvailable = bot.status === 'available';
          const isMusic = bot.id === 'roynix-music';
          const isTitan = bot.id === 'titan-moderation';

          return (
            <div
              key={bot.id}
              className={`rounded-2xl border transition-all duration-200 flex flex-col justify-between p-6 ${
                isAvailable
                  ? isMusic
                    ? 'bg-white border-red-300 shadow-sm hover:shadow-md ring-1 ring-red-500/10'
                    : 'bg-white border-zinc-300 shadow-sm hover:shadow-md ring-1 ring-zinc-900/5'
                  : 'bg-zinc-50/70 border-zinc-200 text-zinc-600'
              }`}
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                    isMusic
                      ? 'bg-red-50 text-[#e50914] border border-red-200'
                      : isTitan 
                      ? 'bg-[#dcfce7] text-[#15803d]' 
                      : 'bg-zinc-200/80 text-zinc-600'
                  }`}>
                    {bot.badge}
                  </span>
                  
                  <div className="flex items-center gap-1.5 text-xs font-mono font-medium">
                    {bot.originalPrice && (
                      <span className="line-through text-zinc-400">
                        {bot.originalPrice}
                      </span>
                    )}
                    <span className={isMusic ? 'text-[#e50914] font-bold' : 'text-zinc-700 font-bold'}>
                      {bot.currentPrice || bot.priceFormatted}
                    </span>
                  </div>
                </div>

                {/* Bot Icon & Name */}
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${
                    isMusic
                      ? 'bg-[#180a0d] text-[#e50914] border border-red-500/30 shadow-xs'
                      : isTitan 
                      ? 'bg-zinc-950 text-brand-lime border border-zinc-800 shadow-sm' 
                      : 'bg-zinc-200 text-zinc-500'
                  }`}>
                    {bot.iconType === 'titan' && 'Ψ'}
                    {bot.iconType === 'music' && <Headphones className="w-6 h-6" />}
                    {bot.iconType === 'sentinel' && '🛡'}
                    {bot.iconType === 'atlas' && '⚡'}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-base text-zinc-950 tracking-tight">
                      {bot.name}
                    </h4>
                    <span className="text-xs text-zinc-500 font-medium">
                      {bot.category}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-5 line-clamp-3">
                  {bot.description}
                </p>

                {/* Features Checklist */}
                <div className="space-y-2 border-t border-zinc-100 pt-4 mb-6">
                  <div className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                    Core Capabilities
                  </div>
                  {bot.features.slice(0, 4).map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-zinc-700">
                      <Check className={`w-3.5 h-3.5 flex-shrink-0 ${
                        isMusic ? 'text-[#e50914]' : isTitan ? 'text-brand-green' : 'text-zinc-400'
                      }`} />
                      <span>{f}</span>
                    </div>
                  ))}
                  {bot.features.length > 4 && (
                    <div className="text-[11px] text-zinc-400 font-medium pl-5">
                      + {bot.features.length - 4} additional modules
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2">
                {isAvailable ? (
                  <div className="flex items-center gap-2">
                    <WhopButton 
                      href={bot.checkoutUrl}
                      variant={isMusic ? 'crimson' : 'lime'} 
                      size="sm"
                      className="flex-1 text-center font-bold"
                    >
                      {isMusic ? 'Buy on Whop ($49.99)' : 'Get Titan on Whop'}
                    </WhopButton>
                    <button
                      onClick={() => onSelectProduct(bot)}
                      className="p-2 rounded-full border border-zinc-200 hover:bg-zinc-100 text-zinc-700 transition-colors cursor-pointer"
                      title="Inspect Product Specifications"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <button
                    disabled
                    className="w-full py-2.5 px-4 rounded-full bg-zinc-200/80 text-zinc-500 text-xs font-semibold cursor-not-allowed flex items-center justify-center gap-1.5"
                  >
                    <Lock className="w-3.5 h-3.5" />
                    <span>In Active Engineering</span>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
