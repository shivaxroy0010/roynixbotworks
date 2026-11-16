import React from 'react';
import { CheckCircle2, Eye } from 'lucide-react';
import { Product } from '../../types';
import { WhopButton } from '../common/WhopButton';

interface FeaturedProductProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export const FeaturedProduct: React.FC<FeaturedProductProps> = ({ 
  product, 
  onViewDetails 
}) => {
  return (
    <section id="products" className="py-6 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Featured Card matching mockup exactly */}
      <div className="relative rounded-3xl bg-white border border-zinc-200/90 shadow-sm hover:shadow-md transition-all duration-200 p-6 sm:p-8 lg:p-10">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="px-3 py-1 rounded-full bg-[#dcfce7] text-[#15803d] text-xs font-bold uppercase tracking-wider">
            FEATURED PRODUCT
          </span>
          <span className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs font-semibold">
            {product.badge}
          </span>
          <span className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-xs font-medium">
            {product.category}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left / Center Info Area */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row items-start gap-6">
            
            {/* Titan Glowing Avatar Emblem */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#0d0e12] border border-zinc-800 shadow-md flex items-center justify-center flex-shrink-0 group relative overflow-hidden">
              {/* Subtle violet ambient glow */}
              <div className="absolute inset-0 bg-purple-600/10 rounded-2xl blur-sm" />
              
              {/* Trident Crest SVG matching mockup */}
              <svg 
                viewBox="0 0 64 64" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 text-purple-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.5)]"
              >
                {/* Shield Outline */}
                <path 
                  d="M32 6L14 14V28C14 42 22 52 32 58C42 52 50 42 50 28V14L32 6Z" 
                  stroke="#a855f7" 
                  strokeWidth="2.5" 
                  fill="#1a1329" 
                  fillOpacity="0.8"
                />
                {/* Center Trident Spear */}
                <path 
                  d="M32 16V46" 
                  stroke="#c084fc" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                />
                {/* Left Prong */}
                <path 
                  d="M24 24C24 33 32 33 32 33" 
                  stroke="#c084fc" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                />
                <path 
                  d="M24 20V26" 
                  stroke="#c084fc" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                />
                {/* Right Prong */}
                <path 
                  d="M40 24C40 33 32 33 32 33" 
                  stroke="#c084fc" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                />
                <path 
                  d="M40 20V26" 
                  stroke="#c084fc" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                />
                {/* Cross Guard */}
                <path 
                  d="M28 39H36" 
                  stroke="#e9d5ff" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                />
              </svg>
            </div>

            {/* Title, Description & Action Buttons */}
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
                  {product.name}
                </h2>
                <p className="text-sm sm:text-base text-zinc-600 mt-2 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Action Buttons matching mockup */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <WhopButton 
                  variant="lime" 
                  size="md"
                  className="font-bold text-sm !px-5 !py-2.5 shadow-sm"
                >
                  Get Titan on Whop
                </WhopButton>

                <button
                  onClick={() => onViewDetails(product)}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white hover:bg-zinc-100 text-zinc-800 text-sm font-semibold border border-zinc-200 transition-all cursor-pointer shadow-xs active:scale-95"
                >
                  <Eye className="w-4 h-4 text-zinc-500" />
                  <span>View Details</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Checklist Columns (2 Columns with Green Checkmarks) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 pt-4 lg:pt-0 lg:border-l lg:border-zinc-100 lg:pl-8">
            {product.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                {/* Green checkmark circle matching mockup */}
                <div className="w-5 h-5 rounded-full bg-[#dcfce7] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#15803d]" />
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
