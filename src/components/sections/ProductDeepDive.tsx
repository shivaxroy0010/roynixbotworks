import React, { useState } from 'react';
import { 
  Terminal, 
  Cpu, 
  Database, 
  Server, 
  ShieldCheck, 
  Code2, 
  Copy, 
  Check, 
  Sparkles, 
  Command as CommandIcon,
  Play,
  SkipForward,
  SkipBack,
  Repeat,
  Shuffle,
  Heart,
  Volume2,
  Headphones
} from 'lucide-react';
import { Product } from '../../types';
import { WhopButton } from '../common/WhopButton';

interface ProductDeepDiveProps {
  product: Product;
}

export const ProductDeepDive: React.FC<ProductDeepDiveProps> = ({ product }) => {
  const [activeTab, setActiveTab] = useState<'simulator' | 'specs' | 'installation'>('simulator');
  const [activeCommandIndex, setActiveCommandIndex] = useState<number>(0);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const activeCommand = product.commands[activeCommandIndex] || product.commands[0];
  const isMusic = product.id === 'roynix-music';
  const accentColor = isMusic ? 'text-[#e50914]' : 'text-brand-lime';
  const accentBorder = isMusic ? 'border-[#e50914]' : 'border-brand-lime';
  const accentBg = isMusic ? 'bg-[#e50914]' : 'bg-brand-lime';

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <section id="product-details" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-700 text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className={`w-3.5 h-3.5 ${accentColor}`} />
          <span>IN-DEPTH SPECIFICATIONS & COMMANDS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
          {product.name} Architecture & Live Playground
        </h2>
        <p className="text-base text-zinc-600 mt-3 leading-relaxed">
          {product.tagline} — Inspect command syntax, runtime pipelines, and deployment options before checkout.
        </p>
      </div>

      {/* Main Details Container */}
      <div className={`bg-[#0f1217] rounded-3xl border shadow-xl overflow-hidden ${
        isMusic ? 'border-red-950/60' : 'border-zinc-800'
      }`}>
        
        {/* Navigation Tabs */}
        <div className="flex border-b border-zinc-800/80 bg-[#090b0e] px-4 sm:px-6 pt-3 overflow-x-auto gap-2">
          <button
            onClick={() => setActiveTab('simulator')}
            className={`px-4 py-3 text-xs sm:text-sm font-semibold rounded-t-xl transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap border-b-2 ${
              activeTab === 'simulator'
                ? `${accentBorder} text-white bg-[#0f1217]`
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <CommandIcon className={`w-4 h-4 ${accentColor}`} />
            <span>Interactive Command Simulator</span>
          </button>

          <button
            onClick={() => setActiveTab('specs')}
            className={`px-4 py-3 text-xs sm:text-sm font-semibold rounded-t-xl transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap border-b-2 ${
              activeTab === 'specs'
                ? `${accentBorder} text-white bg-[#0f1217]`
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Cpu className={`w-4 h-4 ${accentColor}`} />
            <span>Technical Architecture</span>
          </button>

          <button
            onClick={() => setActiveTab('installation')}
            className={`px-4 py-3 text-xs sm:text-sm font-semibold rounded-t-xl transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap border-b-2 ${
              activeTab === 'installation'
                ? `${accentBorder} text-white bg-[#0f1217]`
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Terminal className={`w-4 h-4 ${accentColor}`} />
            <span>Installation Walkthrough</span>
          </button>
        </div>

        {/* Tab 1: Interactive Command Simulator */}
        {activeTab === 'simulator' && (
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Commands Selector */}
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                Available Slash Commands
              </div>
              <div className="space-y-2">
                {product.commands.map((cmd, idx) => (
                  <button
                    key={cmd.name}
                    onClick={() => setActiveCommandIndex(idx)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                      activeCommandIndex === idx
                        ? isMusic 
                          ? 'bg-zinc-800/90 border-red-500/80 text-white shadow-sm'
                          : 'bg-zinc-800/90 border-brand-lime/80 text-white shadow-sm'
                        : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`font-mono font-bold text-sm ${accentColor}`}>
                        {cmd.name}
                      </span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400">
                        {cmd.category}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 line-clamp-1">
                      {cmd.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Live Discord Embed & Execution Preview */}
            <div className="lg:col-span-7 bg-[#1e1f22] rounded-2xl border border-zinc-800 p-5 space-y-4 shadow-inner">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${accentBg}`} />
                  <span className="font-mono text-xs font-semibold text-zinc-300">
                    Live Command Execution Preview
                  </span>
                </div>
                <span className="text-[11px] font-mono text-zinc-500">
                  Perms: {activeCommand.permission}
                </span>
              </div>

              {/* Input Command Syntax */}
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500">
                  Command Invocation
                </span>
                <div className="bg-[#111214] p-3 rounded-lg font-mono text-xs text-zinc-200 border border-zinc-800 flex items-center justify-between">
                  <span className={accentColor}>{activeCommand.usage}</span>
                  <button
                    onClick={() => handleCopy(activeCommand.usage, 'cmd')}
                    className="p-1 hover:text-white text-zinc-500 transition-colors"
                    title="Copy command"
                  >
                    {copiedCode === 'cmd' ? <Check className={`w-3.5 h-3.5 ${accentColor}`} /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Simulated Discord Embed Response */}
              <div className="space-y-1 pt-2">
                <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500">
                  Bot Response Embed
                </span>

                {isMusic ? (
                  /* Music Player Discord Embed matching uploaded image */
                  <div className="bg-[#2b2d31] rounded-lg border-l-4 border-[#e50914] p-4 space-y-3 font-sans shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-[#180a0d] border border-red-500/40 flex items-center justify-center text-[10px] text-red-400 font-bold">
                          <Headphones className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-bold text-xs text-white">ROYNIX Music</span>
                        <span className="bg-[#5865f2] text-white text-[9px] font-bold px-1.5 py-0.2 rounded uppercase">
                          BOT
                        </span>
                      </div>
                      <span className="text-[10px] text-zinc-400 font-mono">24-bit / 48kHz</span>
                    </div>

                    {/* Track info card matching uploaded image */}
                    <div className="flex items-center gap-3 bg-[#1e1f22] p-3 rounded-lg border border-zinc-800">
                      <div className="w-12 h-12 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center flex-shrink-0 text-xl font-bold text-red-500">
                        🎵
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-[10px] text-red-400 font-bold uppercase tracking-wider">
                          Now Playing
                        </div>
                        <div className="text-sm font-bold text-white truncate">
                          Alan Walker - Faded
                        </div>
                        <div className="text-[11px] text-zinc-400">
                          Source: YouTube Music • Requested by: @Admin
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar matching image */}
                    <div className="space-y-1 font-mono text-[10px]">
                      <div className="w-full bg-zinc-700 h-1.5 rounded-full overflow-hidden flex">
                        <div className="bg-[#e50914] h-full w-[38%]" />
                      </div>
                      <div className="flex justify-between text-zinc-400">
                        <span>1:24</span>
                        <span>3:32</span>
                      </div>
                    </div>

                    {/* Interactive Player Buttons */}
                    <div className="flex items-center justify-between pt-1 border-t border-zinc-700/60">
                      <div className="flex items-center gap-2">
                        <button className="p-1.5 rounded bg-zinc-800 text-zinc-300 hover:text-white">
                          <SkipBack className="w-3.5 h-3.5" />
                        </button>
                        <button className="p-1.5 rounded bg-[#e50914] text-white hover:bg-red-600">
                          <Play className="w-3.5 h-3.5 fill-white" />
                        </button>
                        <button className="p-1.5 rounded bg-zinc-800 text-zinc-300 hover:text-white">
                          <SkipForward className="w-3.5 h-3.5" />
                        </button>
                        <button className="p-1.5 rounded bg-zinc-800 text-zinc-300 hover:text-white">
                          <Repeat className="w-3.5 h-3.5" />
                        </button>
                        <button className="p-1.5 rounded bg-zinc-800 text-zinc-300 hover:text-white">
                          <Shuffle className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center gap-2 text-[11px] text-zinc-400 font-mono">
                        <Volume2 className="w-3.5 h-3.5 text-zinc-400" />
                        <span>100%</span>
                        <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 cursor-pointer ml-1" />
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Titan Moderation Embed */
                  <div className="bg-[#2b2d31] rounded-lg border-l-4 border-brand-lime p-4 space-y-2 font-sans shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded bg-purple-950 flex items-center justify-center text-[10px] text-purple-300 font-bold">
                          Ψ
                        </div>
                        <span className="font-bold text-xs text-white">Titan Moderation System</span>
                        <span className="bg-[#5865f2] text-white text-[9px] font-bold px-1.5 py-0.2 rounded uppercase">
                          BOT
                        </span>
                      </div>
                      <span className="text-[10px] text-zinc-400 font-mono">Status: 200 OK</span>
                    </div>

                    <p className="text-xs text-zinc-300 font-medium">
                      {activeCommand.description}
                    </p>

                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-zinc-700/60 font-mono text-[11px]">
                      <div>
                        <span className="text-zinc-500 block text-[10px]">EXECUTION TIME</span>
                        <span className="text-zinc-300">14ms (REST latency)</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 block text-[10px]">AUDIT LOGGED</span>
                        <span className="text-brand-lime">#mod-logs synced</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Purchase Prompt Bar */}
              <div className="pt-3 flex items-center justify-between border-t border-zinc-800/80">
                <div className="text-xs text-zinc-400">
                  {isMusic ? (
                    <span>Ready for lossless music playback in your server?</span>
                  ) : (
                    <span>Ready to deploy on your Discord servers?</span>
                  )}
                </div>
                <WhopButton 
                  href={product.checkoutUrl}
                  variant={isMusic ? 'crimson' : 'lime'} 
                  size="sm"
                >
                  {isMusic ? 'Buy Roynix Music on Whop ($49.99)' : 'Get Titan on Whop ($29.29)'}
                </WhopButton>
              </div>

            </div>

          </div>
        )}

        {/* Tab 2: Technical Specifications */}
        {activeTab === 'specs' && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-2">
                <div className={`flex items-center gap-2 ${accentColor} font-bold text-sm`}>
                  <Code2 className="w-4 h-4" />
                  <span>Runtime & Language</span>
                </div>
                <p className="text-white font-mono text-sm">{product.specs.runtime}</p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Strictly typed TypeScript with modern ES2022 target, async generators, and clean object-oriented architecture.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-2">
                <div className={`flex items-center gap-2 ${accentColor} font-bold text-sm`}>
                  <Cpu className="w-4 h-4" />
                  <span>Framework & Engine</span>
                </div>
                <p className="text-white font-mono text-sm">{product.specs.library}</p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {isMusic 
                    ? 'Lavalink v4 high-performance audio node integration with Opus 48kHz audio encoding.'
                    : 'Native Discord.js v14 implementation leveraging Gateway v10, interactions routing, and granular permission bitfields.'}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-2">
                <div className={`flex items-center gap-2 ${accentColor} font-bold text-sm`}>
                  <Database className="w-4 h-4" />
                  <span>Database Layer</span>
                </div>
                <p className="text-white font-mono text-sm">{product.specs.database}</p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Prisma ORM provides zero-config SQLite for single servers and instant switch to PostgreSQL or MySQL for large multi-guild networks.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-2">
                <div className={`flex items-center gap-2 ${accentColor} font-bold text-sm`}>
                  <Server className="w-4 h-4" />
                  <span>Deployment Targets</span>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {product.specs.deployment.map((dep, i) => (
                    <span key={i} className="px-2 py-1 bg-zinc-800 rounded text-[11px] font-mono text-zinc-300">
                      {dep}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-2">
                <div className={`flex items-center gap-2 ${accentColor} font-bold text-sm`}>
                  <ShieldCheck className="w-4 h-4" />
                  <span>Commercial Source License</span>
                </div>
                <p className="text-white font-mono text-sm">{product.specs.license}</p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  You receive full uncompiled source code to host, modify, rebrand, and run indefinitely across your communities.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex flex-col justify-between space-y-3">
                <div>
                  <div className={`flex items-center gap-2 ${accentColor} font-bold text-sm mb-1`}>
                    <Sparkles className="w-4 h-4" />
                    <span>Purchase & Fulfillment</span>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Direct instant fulfillment via Whop. Access git repository, zip archives, and future updates.
                  </p>
                </div>
                <WhopButton 
                  href={product.checkoutUrl}
                  variant={isMusic ? 'crimson' : 'lime'} 
                  size="sm"
                >
                  {isMusic ? 'Buy Roynix Music on Whop ($49.99)' : 'Get Titan on Whop ($29.29)'}
                </WhopButton>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Installation Walkthrough */}
        {activeTab === 'installation' && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="space-y-4">
              {product.installationSteps.map((step) => (
                <div 
                  key={step.step}
                  className="p-4 sm:p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className={`w-6 h-6 rounded-full ${accentBg} text-zinc-950 font-bold text-xs flex items-center justify-center`}>
                        {step.step}
                      </span>
                      <h4 className="font-bold text-sm sm:text-base text-white">
                        {step.title}
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 pl-8">
                    {step.details}
                  </p>

                  {step.command && (
                    <div className="ml-8 mt-2 bg-[#090b0e] p-3 rounded-xl border border-zinc-800 font-mono text-xs text-zinc-200 flex items-center justify-between">
                      <span className={accentColor}>{step.command}</span>
                      <button
                        onClick={() => handleCopy(step.command!, `inst-${step.step}`)}
                        className="p-1 hover:text-white text-zinc-500 transition-colors cursor-pointer"
                        title="Copy command"
                      >
                        {copiedCode === `inst-${step.step}` ? (
                          <Check className={`w-4 h-4 ${accentColor}`} />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs sm:text-sm text-zinc-300">
                Detailed step-by-step PDF & Markdown documentation is bundled inside your Whop download.
              </span>
              <WhopButton 
                href={product.checkoutUrl}
                variant={isMusic ? 'crimson' : 'lime'} 
                size="md"
              >
                {isMusic ? 'Buy Roynix Music on Whop ($49.99)' : 'Get Titan on Whop ($29.29)'}
              </WhopButton>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
