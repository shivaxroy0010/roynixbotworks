import React from 'react';
import { Terminal, Home } from 'lucide-react';
import { Logo } from '../common/Logo';

interface NotFoundProps {
  onBackHome: () => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ onBackHome }) => {
  return (
    <div className="min-h-screen bg-[#090b0e] text-zinc-100 flex flex-col justify-between p-6 sm:p-12">
      <div className="max-w-7xl mx-auto w-full">
        <Logo size="md" className="text-white" />
      </div>

      <div className="max-w-xl mx-auto w-full text-center space-y-6 py-16">
        <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto text-brand-lime">
          <Terminal className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs text-brand-lime font-bold tracking-widest uppercase">
            Error 404 // Target Not Found
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Resource Does Not Exist
          </h1>
          <p className="text-sm text-zinc-400 leading-relaxed">
            The requested Discord bot package or route could not be found on the RoynixBotWorks registry.
          </p>
        </div>

        <div className="pt-2">
          <button
            onClick={onBackHome}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-lime text-zinc-950 font-bold text-sm hover:bg-brand-lime-hover transition-colors cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Return to Storefront</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full text-center text-xs text-zinc-600 font-mono">
        RoynixBotWorks Core Gateway System
      </div>
    </div>
  );
};
