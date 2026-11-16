import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQS } from '../../data/faqs';

interface FAQSectionProps {
  onOpenSupport: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenSupport }) => {
  const [openIds, setOpenIds] = useState<string[]>([FAQS[0].id]); // First one open by default

  const toggleFAQ = (id: string) => {
    setOpenIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* FAQ Header */}
      <div className="text-center space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-700 text-xs font-bold uppercase tracking-wider">
          <HelpCircle className="w-3.5 h-3.5 text-lime-600" />
          <span>FREQUENTLY ASKED QUESTIONS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
          Clear Answers Before You Buy
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 max-w-xl mx-auto">
          Everything you need to know about purchasing, licensing, self-hosting, and operating RoynixBotWorks software.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {FAQS.map((faq) => {
          const isOpen = openIds.includes(faq.id);

          return (
            <div
              key={faq.id}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen 
                  ? 'bg-zinc-50/90 border-zinc-300 shadow-xs' 
                  : 'bg-white border-zinc-200/90 hover:border-zinc-300'
              }`}
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="font-bold text-sm sm:text-base text-zinc-950 tracking-tight">
                  {faq.question}
                </span>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-200 flex-shrink-0 ${
                  isOpen ? 'rotate-180 bg-zinc-200 text-zinc-900' : 'bg-zinc-100 text-zinc-500'
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Still have questions banner */}
      <div className="mt-8 p-5 rounded-2xl bg-zinc-100 border border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-700">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <div className="font-bold text-sm text-zinc-900">
              Have technical or licensing questions?
            </div>
            <div className="text-xs text-zinc-500">
              Our engineering team is available via Discord and Whop customer inquiries.
            </div>
          </div>
        </div>
        <button
          onClick={onOpenSupport}
          className="px-4 py-2 rounded-full bg-white hover:bg-zinc-50 border border-zinc-300 text-zinc-800 text-xs font-semibold transition-colors cursor-pointer shadow-2xs whitespace-nowrap"
        >
          Contact Developer Support
        </button>
      </div>
    </section>
  );
};
