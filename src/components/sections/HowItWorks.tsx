import React from 'react';
import { 
  Search, 
  Layers, 
  ShoppingCart, 
  Download, 
  Rocket, 
  ArrowRight 
} from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../../data/products';

export const HowItWorks: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'search':
        return <Search className="w-5 h-5 text-zinc-800" />;
      case 'layers':
        return <Layers className="w-5 h-5 text-zinc-800" />;
      case 'cart':
        return <ShoppingCart className="w-5 h-5 text-zinc-800" />;
      case 'download':
        return <Download className="w-5 h-5 text-zinc-800" />;
      case 'rocket':
        return <Rocket className="w-5 h-5 text-zinc-800" />;
      default:
        return <Search className="w-5 h-5 text-zinc-800" />;
    }
  };

  return (
    <section id="how-it-works" className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Header matching mockup */}
        <div className="lg:col-span-3 space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-lime-600">
            HOW IT WORKS
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight leading-tight">
            Get Your Discord Bot in 5 Steps
          </h2>
          <p className="text-sm text-zinc-500 leading-relaxed">
            A simple and secure process from browsing to setup.
          </p>
        </div>

        {/* 5 Step Cards connected by arrows */}
        <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 items-stretch">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <div key={step.step} className="flex items-center">
              {/* Step Card */}
              <div className="w-full flex flex-col justify-between p-4 rounded-2xl bg-white border border-zinc-200/90 shadow-2xs hover:border-zinc-300 transition-all duration-150 h-full">
                <div>
                  {/* Step Icon */}
                  <div className="w-9 h-9 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-3">
                    {getStepIcon(step.icon)}
                  </div>
                  {/* Step Title */}
                  <h3 className="font-bold text-sm text-zinc-900 tracking-tight mb-1">
                    {step.title}
                  </h3>
                  {/* Step Description */}
                  <p className="text-xs text-zinc-500 leading-normal">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connecting Arrow between cards (hidden on last step & small screens) */}
              {index < HOW_IT_WORKS_STEPS.length - 1 && (
                <div className="hidden lg:flex items-center justify-center px-1 text-zinc-300">
                  <ArrowRight className="w-4 h-4 stroke-[1.5]" />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
