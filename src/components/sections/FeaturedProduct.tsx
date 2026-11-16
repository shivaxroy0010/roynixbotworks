import React, { useState } from 'react';
import { CheckCircle2, Eye, Headphones, Shield } from 'lucide-react';
import { Product } from '../../types';
import { WhopButton } from '../common/WhopButton';
import { PRODUCTS } from '../../data/products';

interface FeaturedProductProps {
  product?: Product;
  onViewDetails: (product: Product) => void;
}

export const FeaturedProduct: React.FC<FeaturedProductProps> = ({ 
  onViewDetails 
}) => {
  const [selectedProductId, setSelectedProductId] = useState<string>('titan-moderation');

  const activeProduct = PRODUCTS.find(p => p.id === selectedProductId) || PRODUCTS[0];
  const isMusic = activeProduct.id === 'roynix-music';

  return (
    <section id="products" className="py-6 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Product Selector Toggle Bar */}
      <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">
            Featured Products:
          </span>
          <div className="flex items-center gap-1.5 bg-zinc-100 p-1 rounded-full border border-zinc-200">
            <button
              onClick={() => setSelectedProductId('titan-moderation')}
              className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedProductId === 'titan-moderation'
                  ? 'bg-zinc-950 text-white shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              <Shield className="w-3.5 h-3.5 text-brand-lime" />
              <span>Titan Moderation</span>
            </button>

            <button
              onClick={() => setSelectedProductId('roynix-music')}
              className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedProductId === 'roynix-music'
                  ? 'bg-[#e50914] text-white shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              <Headphones className="w-3.5 h-3.5" />
              <span>Roynix Music Bot</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/20 font-mono">15% OFF</span>
            </button>
          </div>
        </div>

        <div className="text-xs font-mono text-zinc-500">
          Instant uncompiled source code via Whop
        </div>
      </div>

      {/* Featured Card matching mockup exactly */}
      <div className={`relative rounded-3xl bg-white border shadow-sm hover:shadow-md transition-all duration-200 p-6 sm:p-8 lg:p-10 ${
        isMusic ? 'border-red-200/90 ring-1 ring-red-500/10' : 'border-zinc-200/90'
      }`}>
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
              isMusic 
                ? 'bg-red-50 text-[#e50914] border border-red-200' 
                : 'bg-[#dcfce7] text-[#15803d]'
            }`}>
              FEATURED PRODUCT
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
              isMusic ? 'bg-red-500 text-white font-bold' : 'bg-zinc-100 text-zinc-700'
            }`}>
              {activeProduct.badge}
            </span>
            <span className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-xs font-medium">
              {activeProduct.category}
            </span>
          </div>

          {/* Pricing tag from image */}
          {activeProduct.currentPrice && (
            <div className="flex items-center gap-2 font-mono">
              {activeProduct.originalPrice && (
                <span className="text-xs line-through text-zinc-400">
                  {activeProduct.originalPrice}
                </span>
              )}
              <span className={`text-base font-extrabold ${isMusic ? 'text-[#e50914]' : 'text-zinc-900'}`}>
                {activeProduct.currentPrice}
              </span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left / Center Info Area */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row items-start gap-6">
            
            {/* Glowing Avatar Emblem */}
            <div className={`w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#0d0e12] border shadow-md flex items-center justify-center flex-shrink-0 group relative overflow-hidden ${
              isMusic ? 'border-red-500/40 shadow-[0_0_20px_rgba(229,9,20,0.25)]' : 'border-zinc-800'
            }`}>
              {isMusic ? (
                <>
                  {/* Subtle red ambient glow */}
                  <div className="absolute inset-0 bg-red-600/15 rounded-2xl blur-sm" />
                  
                  {/* Headphones Emblem SVG matching Roynix Music image */}
                  <svg 
                    viewBox="0 0 64 64" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-16 h-16 text-[#e50914] drop-shadow-[0_0_12px_rgba(229,9,20,0.6)]"
                  >
                    {/* Headphone Arch */}
                    <path 
                      d="M14 36V28C14 18.0589 22.0589 10 32 10C41.9411 10 50 18.0589 50 28V36" 
                      stroke="#e50914" 
                      strokeWidth="3.5" 
                      strokeLinecap="round" 
                    />
                    {/* Left Earcup */}
                    <rect x="10" y="32" width="9" height="18" rx="4.5" fill="#1c0d10" stroke="#ff4d58" strokeWidth="2" />
                    {/* Right Earcup */}
                    <rect x="45" y="32" width="9" height="18" rx="4.5" fill="#1c0d10" stroke="#ff4d58" strokeWidth="2" />
                    {/* Center Crown / Music Wave */}
                    <path d="M26 30L29 25L32 29L35 25L38 30H26Z" fill="#ff4d58" />
                    <circle cx="32" cy="38" r="3" fill="#ffffff" />
                  </svg>
                </>
              ) : (
                <>
                  <div className="absolute inset-0 bg-purple-600/10 rounded-2xl blur-sm" />
                  {/* Titan Trident Crest SVG */}
                  <svg 
                    viewBox="0 0 64 64" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-16 h-16 text-purple-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.5)]"
                  >
                    <path 
                      d="M32 6L14 14V28C14 42 22 52 32 58C42 52 50 42 50 28V14L32 6Z" 
                      stroke="#a855f7" 
                      strokeWidth="2.5" 
                      fill="#1a1329" 
                      fillOpacity="0.8" 
                    />
                    <path d="M32 16V46" stroke="#c084fc" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M24 24C24 33 32 33 32 33" stroke="#c084fc" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M24 20V26" stroke="#c084fc" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M40 24C40 33 32 33 32 33" stroke="#c084fc" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M40 20V26" stroke="#c084fc" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M28 39H36" stroke="#e9d5ff" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </>
              )}
            </div>

            {/* Title, Description & Action Buttons */}
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
                  {activeProduct.name}
                </h2>
                {activeProduct.tagline && (
                  <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mt-0.5">
                    {activeProduct.tagline}
                  </p>
                )}
                <p className="text-sm sm:text-base text-zinc-600 mt-2 leading-relaxed">
                  {activeProduct.description}
                </p>

                {/* Platform Highlights */}
                {activeProduct.platforms && (
                  <div className="flex flex-wrap gap-2 pt-3">
                    {activeProduct.platforms.map((plat, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-700 text-xs font-medium border border-zinc-200/60">
                        {plat}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Buttons with Specific Redirect URL */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <WhopButton 
                  href={activeProduct.checkoutUrl}
                  variant={isMusic ? 'crimson' : 'lime'} 
                  size="md"
                  className="font-bold text-sm !px-5 !py-2.5 shadow-sm"
                >
                  {isMusic ? 'Buy Roynix Music on Whop' : 'Get Titan on Whop'}
                </WhopButton>

                <button
                  onClick={() => onViewDetails(activeProduct)}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white hover:bg-zinc-100 text-zinc-800 text-sm font-semibold border border-zinc-200 transition-all cursor-pointer shadow-xs active:scale-95"
                >
                  <Eye className="w-4 h-4 text-zinc-500" />
                  <span>Inspect Specifications</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Checklist Columns (2 Columns with Green/Red Checkmarks) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 pt-4 lg:pt-0 lg:border-l lg:border-zinc-100 lg:pl-8">
            {activeProduct.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  isMusic ? 'bg-red-50 text-[#e50914]' : 'bg-[#dcfce7] text-[#15803d]'
                }`}>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-zinc-800 leading-snug">
                  {feature}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
