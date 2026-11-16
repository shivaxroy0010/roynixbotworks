import React from 'react';
import { Shield, Lock, Terminal, CheckCircle2, ArrowRight } from 'lucide-react';
import { Modal } from '../common/Modal';
import { WhopButton } from '../common/WhopButton';

interface SolutionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExploreProducts: () => void;
}

export const SolutionsModal: React.FC<SolutionsModalProps> = ({ 
  isOpen, 
  onClose,
  onExploreProducts 
}) => {
  const solutions = [
    {
      title: "Automated Moderation & Server Protection",
      description: "Eliminate manual mod fatigue with intelligent keyword heuristics, anti-invite tripwires, and instant raid lockdown tools.",
      icon: Shield,
      tag: "Titan Moderation",
      benefits: ["Zero-latency event processing", "Audit log embeds with exact reasons", "Custom regex rule builder"]
    },
    {
      title: "Self-Hosted Security & Total Data Ownership",
      description: "Unlike multi-tenant public bots that suffer from shared outages and privacy risks, your bot runs exclusively on your infrastructure.",
      icon: Lock,
      tag: "Source Code Freedom",
      benefits: ["100% private database storage", "No external telemetry or tracking", "No monthly subscription creep"]
    },
    {
      title: "Developer Extensibility & Modular Architecture",
      description: "Add custom slash commands, webhook endpoints, or database tables effortlessly using standard TypeScript and Prisma schemas.",
      icon: Terminal,
      tag: "TypeScript 5.5+",
      benefits: ["Strict typing with Discord.js v14", "Pre-configured PM2 & Docker pipelines", "Clean command handler pattern"]
    }
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="RoynixBotWorks Discord Solutions"
      subtitle="How our software empowers server owners, developers, and online communities"
      maxWidth="2xl"
    >
      <div className="space-y-6">
        <div className="space-y-4">
          {solutions.map((sol, idx) => {
            const Icon = sol.icon;
            return (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-zinc-800/60 border border-zinc-700/80 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-brand-lime/10 border border-brand-lime/20 flex items-center justify-center text-brand-lime">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-sm sm:text-base text-white">
                      {sol.title}
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-700 text-zinc-300">
                    {sol.tag}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {sol.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t border-zinc-700/50">
                  {sol.benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-zinc-400">
                      <CheckCircle2 className="w-3 h-3 text-brand-lime flex-shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-zinc-800">
          <button
            onClick={() => {
              onClose();
              onExploreProducts();
            }}
            className="text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1"
          >
            <span>Scroll to Featured Products</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <WhopButton variant="lime" size="md">
            Get Titan on Whop
          </WhopButton>
        </div>
      </div>
    </Modal>
  );
};
