import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Key, 
  Server, 
  CheckCircle2
} from 'lucide-react';
import { WhopButton } from '../common/WhopButton';

export const SecurityAssurance: React.FC = () => {
  const assurances = [
    {
      title: "100% Data Sovereignty",
      description: "Unlike public multi-tenant bots that store your messages, member IDs, and logs on external shared servers, RoynixBotWorks bots store everything exclusively in your private database (SQLite/PostgreSQL).",
      icon: Lock,
      badge: "Zero-Knowledge"
    },
    {
      title: "Zero DRM or Obfuscation",
      description: "You receive clean, uncompiled TypeScript source files. There are no obfuscated blobs, hidden network beacons, or remote kill-switches. You have full visibility into every network packet.",
      icon: Key,
      badge: "Open Source Standard"
    },
    {
      title: "Discord API v10 Compliance",
      description: "Carefully engineered according to official Discord Developer Policies. Features native rate-limit token bucket handling, secure privileged gateway intents, and scoped slash command permissions.",
      icon: ShieldCheck,
      badge: "Developer Compliant"
    },
    {
      title: "Instant Whop Fulfillment",
      description: "Purchases and digital entitlements are fulfilled by Whop. You get immediate access to private GitHub repository releases, direct zip downloads, and future patch updates.",
      icon: Server,
      badge: "Automated Access"
    }
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Outer Banner */}
      <div className="rounded-3xl bg-zinc-950 border border-zinc-800 p-8 sm:p-12 text-zinc-100 shadow-xl relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-lime opacity-[0.06] blur-3xl pointer-events-none" />

        <div className="max-w-3xl mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-brand-lime text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>SECURITY & ARCHITECTURAL INTEGRITY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Why Serious Discord Communities Choose Self-Hosted Source Code
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Public bots suffer from frequent shared downtime, restrictive rate limits, and third-party data tracking. RoynixBotWorks gives you total infrastructure autonomy.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {assurances.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800/90 space-y-3 hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-brand-lime">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-zinc-800 text-zinc-400">
                    {item.badge}
                  </span>
                </div>
                <h3 className="font-bold text-base text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Whop Storefront Guarantee Bar */}
        <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-brand-lime/10 flex items-center justify-center text-brand-lime flex-shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="text-xs text-zinc-300">
              <span className="font-bold text-white block">Official Whop Storefront Guarantee</span>
              All purchases backed by secure checkout, instant download generation, and direct creator communication on Whop.
            </div>
          </div>

          <WhopButton variant="lime" size="md">
            Get Titan on Whop
          </WhopButton>
        </div>

      </div>
    </section>
  );
};
