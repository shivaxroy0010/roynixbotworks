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
  Command as CommandIcon 
} from 'lucide-react';
import { Product } from '../../types';
import { WhopButton } from '../common/WhopButton';

interface ProductDeepDiveProps {
  product: Product;
}

export const ProductDeepDive: React.FC<ProductDeepDiveProps> = ({ product }) => {
  const [activeTab, setActiveTab] = useState<'simulator' | 'specs' | 'installation' | 'views'>('simulator');
  const [activeCommandIndex, setActiveCommandIndex] = useState<number>(0);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const activeCommand = product.commands[activeCommandIndex] || product.commands[0];

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
          <Sparkles className="w-3.5 h-3.5 text-brand-lime" />
          <span>IN-DEPTH SPECIFICATIONS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
          Engineered for Discord Communities at Scale
        </h2>
        <p className="text-base text-zinc-600 mt-3 leading-relaxed">
          Inspect Titan's architecture, command syntax, deployment pipelines, and operational controls before deployment.
        </p>
      </div>

      {/* Main Details Container */}
      <div className="bg-[#0f1217] rounded-3xl border border-zinc-800 text-zinc-200 shadow-xl overflow-hidden">
        
        {/* Navigation Tabs */}
        <div className="flex border-b border-zinc-800/80 bg-[#090b0e] px-4 sm:px-6 pt-3 overflow-x-auto gap-2">
          <button
            onClick={() => setActiveTab('simulator')}
            className={`px-4 py-3 text-xs sm:text-sm font-semibold rounded-t-xl transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap border-b-2 ${
              activeTab === 'simulator'
                ? 'border-brand-lime text-white bg-[#0f1217]'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <CommandIcon className="w-4 h-4 text-brand-lime" />
            <span>Interactive Command Simulator</span>
          </button>

          <button
            onClick={() => setActiveTab('specs')}
            className={`px-4 py-3 text-xs sm:text-sm font-semibold rounded-t-xl transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap border-b-2 ${
              activeTab === 'specs'
                ? 'border-brand-lime text-white bg-[#0f1217]'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Cpu className="w-4 h-4 text-brand-lime" />
            <span>Technical Architecture</span>
          </button>

          <button
            onClick={() => setActiveTab('installation')}
            className={`px-4 py-3 text-xs sm:text-sm font-semibold rounded-t-xl transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap border-b-2 ${
              activeTab === 'installation'
                ? 'border-brand-lime text-white bg-[#0f1217]'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Terminal className="w-4 h-4 text-brand-lime" />
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
                        ? 'bg-zinc-800/90 border-brand-lime/80 text-white shadow-sm'
                        : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono font-bold text-sm text-brand-lime">
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
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-lime" />
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
                  <span className="text-brand-lime">{activeCommand.usage}</span>
                  <button
                    onClick={() => handleCopy(activeCommand.usage, 'cmd')}
                    className="p-1 hover:text-white text-zinc-500 transition-colors"
                    title="Copy command"
                  >
                    {copiedCode === 'cmd' ? <Check className="w-3.5 h-3.5 text-brand-lime" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Simulated Discord Embed Response */}
              <div className="space-y-1 pt-2">
                <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500">
                  Bot Response Embed
                </span>
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
              </div>

              {/* Purchase Prompt Bar */}
              <div className="pt-3 flex items-center justify-between border-t border-zinc-800/80">
                <span className="text-xs text-zinc-400">
                  Ready to deploy on your Discord servers?
                </span>
                <WhopButton variant="lime" size="sm">
                  Get Titan on Whop
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
                <div className="flex items-center gap-2 text-brand-lime font-bold text-sm">
                  <Code2 className="w-4 h-4" />
                  <span>Runtime & Language</span>
                </div>
                <p className="text-white font-mono text-sm">{product.specs.runtime}</p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Strictly typed TypeScript with modern ES2022 target, async generators, and clean object-oriented architecture.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-2">
                <div className="flex items-center gap-2 text-brand-lime font-bold text-sm">
                  <Cpu className="w-4 h-4" />
                  <span>Discord Framework</span>
                </div>
                <p className="text-white font-mono text-sm">{product.specs.library}</p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Native Discord.js v14 implementation leveraging Gateway v10, interactions routing, and granular permission bitfields.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-2">
                <div className="flex items-center gap-2 text-brand-lime font-bold text-sm">
                  <Database className="w-4 h-4" />
                  <span>Database Layer</span>
                </div>
                <p className="text-white font-mono text-sm">{product.specs.database}</p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Prisma ORM provides zero-config SQLite for single servers and instant switch to PostgreSQL or MySQL for large multi-guild networks.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-2">
                <div className="flex items-center gap-2 text-brand-lime font-bold text-sm">
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
                <div className="flex items-center gap-2 text-brand-lime font-bold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Source Code Commercial License</span>
                </div>
                <p className="text-white font-mono text-sm">{product.specs.license}</p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  You receive full uncompiled source code to host, modify, rebrand, and run indefinitely across your communities.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center gap-2 text-brand-lime font-bold text-sm mb-1">
                    <Sparkles className="w-4 h-4" />
                    <span>Purchase & Fulfillment</span>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Direct instant fulfillment via Whop. Access git repository, zip archives, and future updates.
                  </p>
                </div>
                <WhopButton variant="lime" size="sm">
                  Get Titan on Whop
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
                      <span className="w-6 h-6 rounded-full bg-brand-lime text-zinc-950 font-bold text-xs flex items-center justify-center">
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
                      <span className="text-brand-lime">{step.command}</span>
                      <button
                        onClick={() => handleCopy(step.command!, `inst-${step.step}`)}
                        className="p-1 hover:text-white text-zinc-500 transition-colors cursor-pointer"
                        title="Copy command"
                      >
                        {copiedCode === `inst-${step.step}` ? (
                          <Check className="w-4 h-4 text-brand-lime" />
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
              <WhopButton variant="lime" size="md">
                Get Titan on Whop
              </WhopButton>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
