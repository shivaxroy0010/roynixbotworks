import React from 'react';
import { GitCommit, CheckCircle2 } from 'lucide-react';

export const ChangelogSection: React.FC = () => {
  const releases = [
    {
      version: 'v14.2.0',
      date: 'Latest Release',
      badge: 'Current Stable',
      highlight: 'Prisma Connection Pooling & Gateway v10 Optimizations',
      changes: [
        'Added native PostgreSQL and MySQL connection pool configurations in Prisma client',
        'Updated Discord.js to v14.16+ with high-throughput Gateway payload optimizations',
        'Enhanced AutoMod regex engine with case-insensitive tokenization and wildcard bypass protection',
        'Added configurable audit log channel routing per event type (moderation, deletions, joins)'
      ]
    },
    {
      version: 'v14.1.0',
      date: 'Previous Release',
      badge: 'Feature Update',
      highlight: 'Interactive Channel Lockdown & Timeout Parser',
      changes: [
        'Added /lockdown command with automated duration recovery and staff bypass roles',
        'Implemented human-readable timeout parser supporting m/h/d interval strings (e.g., 30m, 2h, 7d)',
        'Added Docker health check endpoint and PM2 ecosystem configuration template'
      ]
    },
    {
      version: 'v14.0.0',
      date: 'Major Milestone',
      badge: 'Architecture Launch',
      highlight: 'Complete TypeScript Rewrite on Discord.js v14',
      changes: [
        'Complete rewrite in TypeScript 5.5 with strict compiler options and zero any types',
        'Zero-config SQLite database initialized automatically with Prisma ORM migrations',
        'Full slash command migration to Discord REST API v10 with permission bitfields'
      ]
    }
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-700 text-xs font-bold uppercase tracking-wider">
          <GitCommit className="w-3.5 h-3.5 text-brand-lime" />
          <span>ENGINEERING CHANGELOG</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
          Actively Maintained & Production Ready
        </h2>
        <p className="text-xs sm:text-sm text-zinc-500">
          Regular updates, Discord API parity upgrades, and continuous optimizations distributed directly to Whop license holders.
        </p>
      </div>

      <div className="space-y-4">
        {releases.map((rel, idx) => (
          <div
            key={rel.version}
            className={`p-6 rounded-2xl border transition-all ${
              idx === 0 
                ? 'bg-white border-zinc-300 shadow-sm ring-1 ring-zinc-900/5' 
                : 'bg-zinc-50/80 border-zinc-200'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-base font-extrabold text-zinc-950">
                  {rel.version}
                </span>
                <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                  idx === 0 
                    ? 'bg-[#dcfce7] text-[#15803d]' 
                    : 'bg-zinc-200 text-zinc-600'
                }`}>
                  {rel.badge}
                </span>
              </div>
              <span className="text-xs font-mono text-zinc-500">
                {rel.date}
              </span>
            </div>

            <h4 className="font-bold text-sm text-zinc-900 mb-3">
              {rel.highlight}
            </h4>

            <ul className="space-y-1.5 text-xs text-zinc-600">
              {rel.changes.map((change, cIdx) => (
                <li key={cIdx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>{change}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
