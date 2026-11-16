import React, { useState } from 'react';
import { 
  BookOpen, 
  Copy, 
  Check, 
  ChevronRight
} from 'lucide-react';
import { Modal } from '../common/Modal';
import { DOCS_DATA } from '../../data/docs';
import { WhopButton } from '../common/WhopButton';

interface DocumentationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DocumentationModal: React.FC<DocumentationModalProps> = ({ isOpen, onClose }) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(DOCS_DATA[0].id);
  const [activeArticleId, setActiveArticleId] = useState<string>(DOCS_DATA[0].articles[0].id);
  const [copiedCode, setCopiedCode] = useState(false);

  const activeCategory = DOCS_DATA.find(c => c.id === activeCategoryId) || DOCS_DATA[0];
  const activeArticle = activeCategory.articles.find(a => a.id === activeArticleId) || activeCategory.articles[0];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="RoynixBotWorks Technical Documentation"
      subtitle="Engineering manuals, Discord API setup, and deployment guides"
      maxWidth="4xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 min-h-[460px]">
        {/* Left Sidebar Menu */}
        <div className="md:col-span-4 border-r border-zinc-800 pr-4 space-y-5">
          <div className="text-xs font-bold uppercase tracking-wider text-zinc-400">
            Navigation Index
          </div>

          <div className="space-y-4">
            {DOCS_DATA.map((cat) => (
              <div key={cat.id} className="space-y-1">
                <div className="text-xs font-semibold text-zinc-300 px-2 py-1 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-brand-lime" />
                  <span>{cat.title}</span>
                </div>
                <div className="space-y-0.5 pl-2">
                  {cat.articles.map((art) => (
                    <button
                      key={art.id}
                      onClick={() => {
                        setActiveCategoryId(cat.id);
                        setActiveArticleId(art.id);
                      }}
                      className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer flex items-center justify-between ${
                        activeArticleId === art.id
                          ? 'bg-brand-lime text-zinc-950 font-bold'
                          : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                      }`}
                    >
                      <span className="truncate">{art.title}</span>
                      {activeArticleId === art.id && <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Quick CTA Box */}
          <div className="p-3.5 rounded-xl bg-zinc-800/80 border border-zinc-700/80 space-y-2">
            <div className="text-[11px] font-bold text-white flex items-center gap-1.5">
              <span>Titan Source Code</span>
            </div>
            <p className="text-[11px] text-zinc-400">
              Instant download of uncompiled repo & commercial license on Whop.
            </p>
            <WhopButton variant="lime" size="sm" fullWidth>
              Get Titan on Whop
            </WhopButton>
          </div>
        </div>

        {/* Right Article Content View */}
        <div className="md:col-span-8 space-y-4 overflow-y-auto max-h-[520px] pr-2">
          <div className="border-b border-zinc-800 pb-3 flex items-center justify-between">
            <h2 className="text-lg font-bold text-white">
              {activeArticle.title}
            </h2>
            <button
              onClick={() => handleCopy(activeArticle.content)}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs transition-colors cursor-pointer"
            >
              {copiedCode ? <Check className="w-3 h-3 text-brand-lime" /> : <Copy className="w-3 h-3" />}
              <span>{copiedCode ? 'Copied' : 'Copy Section'}</span>
            </button>
          </div>

          {/* Render article text with styled preformatted blocks */}
          <div className="prose prose-invert max-w-none text-xs sm:text-sm text-zinc-300 space-y-3 leading-relaxed whitespace-pre-wrap font-sans">
            {activeArticle.content}
          </div>
        </div>
      </div>
    </Modal>
  );
};
