import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Logo } from '../common/Logo';
import { BRAND_CONFIG, WHOP_PURCHASE_URL } from '../../config/constants';

interface FooterProps {
  onOpenDocs: () => void;
  onOpenSupport: () => void;
  onOpenLegal: (type: 'terms' | 'privacy' | 'refund') => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenDocs, 
  onOpenSupport, 
  onOpenLegal 
}) => {
  return (
    <footer className="bg-[#090b0e] text-zinc-400 border-t border-zinc-800/80 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-zinc-800/80">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-5 space-y-4">
            <Logo size="md" className="text-white" showTagline={false} />
            
            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
              Professional Discord automation and bot development studio. Providing cleanly engineered source code, moderation engines, and self-hosted server management solutions.
            </p>

            <div className="pt-2 flex items-center gap-3">
              {/* Whop Partner Badge */}
              <a
                href={WHOP_PURCHASE_URL}
                target="_self"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 hover:border-brand-lime hover:text-white transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-brand-lime" />
                <span>Verified Whop Storefront</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Products
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#products" className="text-zinc-400 hover:text-white transition-colors">
                  Titan Moderation Bot
                </a>
              </li>
              <li>
                <a 
                  href="https://whop.com/roynix-development/products/roynix-music-bot/" 
                  target="_self" 
                  className="text-red-400 hover:text-white transition-colors flex items-center gap-1 font-semibold"
                >
                  Roynix Music Bot
                  <span className="text-[10px] px-1 rounded bg-red-950 text-red-400">15% OFF</span>
                </a>
              </li>
              <li>
                <span className="text-zinc-500 flex items-center gap-1.5">
                  Sentinel Security
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-zinc-800 text-zinc-400">Roadmap</span>
                </span>
              </li>
              <li>
                <span className="text-zinc-500 flex items-center gap-1.5">
                  Atlas Economy
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-zinc-800 text-zinc-400">Roadmap</span>
                </span>
              </li>
              <li>
                <a href={WHOP_PURCHASE_URL} target="_self" className="text-brand-lime hover:underline flex items-center gap-1">
                  Browse on Whop <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Resources & Docs Column */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Resources
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onOpenDocs}
                  className="text-zinc-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Technical Documentation
                </button>
              </li>
              <li>
                <a href="#how-it-works" className="text-zinc-400 hover:text-white transition-colors">
                  Installation Overview
                </a>
              </li>
              <li>
                <a href="#product-details" className="text-zinc-400 hover:text-white transition-colors">
                  Command Simulator
                </a>
              </li>
              <li>
                <a href="#faq" className="text-zinc-400 hover:text-white transition-colors">
                  Product FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Legal Column */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Support & Legal
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onOpenSupport}
                  className="text-zinc-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Developer Support
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('terms')}
                  className="text-zinc-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Terms and Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('privacy')}
                  className="text-zinc-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('refund')}
                  className="text-zinc-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Refund Policy
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <div>
            &copy; {BRAND_CONFIG.year} {BRAND_CONFIG.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-zinc-500 text-[11px]">
            <span>Payments and digital fulfillment securely managed by</span>
            <a 
              href={WHOP_PURCHASE_URL}
              target="_self"
              className="text-zinc-300 hover:text-white font-semibold underline decoration-brand-lime"
            >
              Whop
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
