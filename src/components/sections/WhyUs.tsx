import React from 'react';
import { Code2, Shield, Zap, Headphones } from 'lucide-react';
import { VALUE_PILLARS } from '../../data/products';

export const WhyUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code2 className="w-5 h-5 text-zinc-900" />;
      case 'shield':
        return <Shield className="w-5 h-5 text-zinc-900" />;
      case 'zap':
        return <Zap className="w-5 h-5 text-zinc-900" />;
      case 'headphones':
        return <Headphones className="w-5 h-5 text-zinc-900" />;
      default:
        return <Code2 className="w-5 h-5 text-zinc-900" />;
    }
  };

  return (
    <section id="features" className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* 4 Feature Cards Grid matching the mockup */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {VALUE_PILLARS.map((pillar) => (
          <div
            key={pillar.id}
            className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-zinc-200/80 shadow-xs hover:border-zinc-300 hover:shadow-sm transition-all duration-200 group"
          >
            {/* Soft Green Icon Box */}
            <div className="w-12 h-12 rounded-xl bg-[#ecfccb] border border-lime-200/80 flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-[#d9f99d] transition-all">
              {getIcon(pillar.icon)}
            </div>

            {/* Content */}
            <div className="space-y-0.5">
              <h3 className="font-bold text-sm sm:text-base text-zinc-950 tracking-tight leading-snug">
                {pillar.title}
              </h3>
              <p className="text-xs text-zinc-500 leading-normal">
                {pillar.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
