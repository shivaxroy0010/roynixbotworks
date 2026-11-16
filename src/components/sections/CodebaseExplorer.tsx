import React, { useState } from 'react';
import { 
  FolderTree, 
  FileCode, 
  Copy, 
  Check, 
  FileCheck2,
  Code2
} from 'lucide-react';
import { CODE_SAMPLES, CodeFile } from '../../data/codeSamples';
import { WhopButton } from '../common/WhopButton';

export const CodebaseExplorer: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<CodeFile>(CODE_SAMPLES[0]);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedFile.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs font-bold uppercase tracking-wider mb-3">
          <Code2 className="w-3.5 h-3.5 text-brand-lime" />
          <span>CODEBASE TRANSPARENCY</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
          Inspect The Real Source Code Before You Buy
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 mt-3 leading-relaxed">
          No obfuscated binaries. No hidden phone-home telemetry. Every file is clean, strictly typed, documented TypeScript ready for your inspection.
        </p>
      </div>

      {/* Code Explorer Card */}
      <div className="bg-[#090b0e] rounded-3xl border border-zinc-800 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
        
        {/* Left: Interactive File Tree */}
        <div className="lg:col-span-4 bg-[#0d1015] border-b lg:border-b-0 lg:border-r border-zinc-800 p-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <div className="flex items-center gap-2 text-zinc-300 font-mono text-xs font-bold">
                <FolderTree className="w-4 h-4 text-brand-lime" />
                <span>titan-moderation-bot/</span>
              </div>
              <span className="text-[10px] font-mono bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded">
                TypeScript 5.5
              </span>
            </div>

            {/* File List */}
            <div className="space-y-1.5">
              {CODE_SAMPLES.map((file) => {
                const isSelected = selectedFile.path === file.path;
                return (
                  <button
                    key={file.path}
                    onClick={() => setSelectedFile(file)}
                    className={`w-full text-left p-3 rounded-xl transition-all cursor-pointer flex items-start gap-2.5 ${
                      isSelected
                        ? 'bg-zinc-800 text-white border border-brand-lime/40 shadow-sm'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 border border-transparent'
                    }`}
                  >
                    <FileCode className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isSelected ? 'text-brand-lime' : 'text-zinc-500'}`} />
                    <div className="min-w-0 flex-1">
                      <div className="font-mono text-xs font-semibold truncate flex items-center justify-between">
                        <span>{file.name}</span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-zinc-900/80 text-zinc-400">
                          {file.category}
                        </span>
                      </div>
                      <div className="text-[11px] text-zinc-500 font-sans line-clamp-1 mt-0.5">
                        {file.path}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Repository Health Metrics */}
          <div className="pt-6 border-t border-zinc-800/80 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              Repository Standards
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
              <div className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-300">
                <span className="text-zinc-500 block text-[9px]">TYPE SAFETY</span>
                Strict Mode (100%)
              </div>
              <div className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-300">
                <span className="text-zinc-500 block text-[9px]">GATEWAY API</span>
                Discord.js v14.16
              </div>
              <div className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-300">
                <span className="text-zinc-500 block text-[9px]">ORM ENGINE</span>
                Prisma 5.x
              </div>
              <div className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-300">
                <span className="text-zinc-500 block text-[9px]">TELEMETRY</span>
                Zero (100% Private)
              </div>
            </div>
          </div>
        </div>

        {/* Right: Code Viewer */}
        <div className="lg:col-span-8 bg-[#090b0e] flex flex-col justify-between">
          
          {/* Header Bar */}
          <div className="px-5 py-3.5 bg-[#0f1217] border-b border-zinc-800 flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-lime animate-pulse" />
              <span className="font-mono text-xs font-semibold text-white">
                {selectedFile.path}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-mono transition-colors cursor-pointer"
                title="Copy source snippet"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-brand-lime" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* File Description Header */}
          <div className="px-6 py-2.5 bg-zinc-950/60 border-b border-zinc-800/80 text-xs text-zinc-400">
            {selectedFile.description}
          </div>

          {/* Syntax Code Container */}
          <div className="p-5 sm:p-6 overflow-x-auto flex-1 font-mono text-xs sm:text-[13px] leading-relaxed text-zinc-300 bg-[#090b0e]">
            <pre className="custom-scrollbar">
              <code>{selectedFile.code}</code>
            </pre>
          </div>

          {/* Bottom Trust Action */}
          <div className="p-4 bg-[#0f1217] border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <FileCheck2 className="w-4 h-4 text-brand-lime" />
              <span>Full uncompressed source code delivered instantly upon Whop checkout.</span>
            </div>
            <WhopButton variant="lime" size="sm">
              Get Titan on Whop
            </WhopButton>
          </div>

        </div>

      </div>
    </section>
  );
};
