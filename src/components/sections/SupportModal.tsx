import React, { useState } from 'react';
import { 
  MessageSquare, 
  ExternalLink, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Headphones
} from 'lucide-react';
import { Modal } from '../common/Modal';
import { WHOP_PURCHASE_URL } from '../../config/constants';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SupportModal: React.FC<SupportModalProps> = ({ isOpen, onClose }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    orderId: '',
    subject: 'Setup Assistance',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  const resetForm = () => {
    setFormSubmitted(false);
    setFormData({
      name: '',
      email: '',
      orderId: '',
      subject: 'Setup Assistance',
      message: ''
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose();
        setTimeout(resetForm, 300);
      }}
      title="RoynixBotWorks Developer Support"
      subtitle="Assistance with source code setup, environment configuration, and bug reports"
      maxWidth="2xl"
    >
      <div className="space-y-6">
        
        {/* Support Channels Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Whop Support Card */}
          <a
            href={WHOP_PURCHASE_URL}
            target="_self"
            className="p-4 rounded-xl bg-zinc-800/80 hover:bg-zinc-800 border border-zinc-700/80 transition-all flex items-start gap-3 group"
          >
            <div className="w-10 h-10 rounded-lg bg-brand-lime/10 border border-brand-lime/20 flex items-center justify-center flex-shrink-0 text-brand-lime">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm text-white flex items-center gap-1 group-hover:text-brand-lime transition-colors">
                <span>Whop Customer Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
              <p className="text-xs text-zinc-400 mt-1 leading-normal">
                Direct customer messaging for verified license holders and billing inquiries.
              </p>
            </div>
          </a>

          {/* Discord Community Card */}
          <div className="p-4 rounded-xl bg-zinc-800/80 border border-zinc-700/80 flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#5865f2]/10 border border-[#5865f2]/20 flex items-center justify-center flex-shrink-0 text-[#5865f2]">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm text-white flex items-center gap-1">
                <span>Discord Developers</span>
              </div>
              <p className="text-xs text-zinc-400 mt-1 leading-normal">
                Community channels for hosting discussions, environment setup tips, and release notices.
              </p>
            </div>
          </div>
        </div>

        {/* Realistic Support Policy Notice */}
        <div className="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800/90 text-xs text-zinc-400 flex items-start gap-2.5 leading-relaxed">
          <AlertCircle className="w-4 h-4 text-zinc-400 flex-shrink-0 mt-0.5" />
          <div>
            <strong className="text-zinc-200">Support Scope:</strong> We provide guidance on standard repository setup, environment variables, and bug fixes for the core source code. Custom bot modifications, third-party hosting server administration, or unauthorized alterations to the architecture are the responsibility of the customer.
          </div>
        </div>

        {/* Support Ticket Submission Form */}
        <div className="border-t border-zinc-800 pt-5">
          {formSubmitted ? (
            <div className="p-6 rounded-2xl bg-zinc-800/90 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-brand-lime/20 text-brand-lime flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-base text-white">
                Support Inquiry Received
              </h4>
              <p className="text-xs text-zinc-300 max-w-sm mx-auto leading-relaxed">
                Thank you, {formData.name}. Our developer support team will review your inquiry and follow up at <span className="text-white font-mono">{formData.email}</span> within 24 business hours.
              </p>
              <button
                onClick={resetForm}
                className="mt-3 px-4 py-2 rounded-full bg-zinc-700 hover:bg-zinc-600 text-white text-xs font-semibold cursor-pointer"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h4 className="font-bold text-sm text-white">
                Submit a Support or Technical Inquiry
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Mercer"
                    className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:outline-none focus:border-brand-lime"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-400 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:outline-none focus:border-brand-lime"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 mb-1">
                    Whop Order ID (if purchased)
                  </label>
                  <input
                    type="text"
                    value={formData.orderId}
                    onChange={(e) => setFormData({ ...formData, orderId: e.target.value })}
                    placeholder="whop_ord_xxxxxx"
                    className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:outline-none focus:border-brand-lime font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-400 mb-1">
                    Inquiry Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:outline-none focus:border-brand-lime cursor-pointer"
                  >
                    <option value="Setup Assistance">Setup & Installation Assistance</option>
                    <option value="Bug Report">Core Codebase Bug Report</option>
                    <option value="Pre-Purchase Question">Pre-Purchase Technical Inquiry</option>
                    <option value="Whop Access">Whop Portal Access Issue</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-400 mb-1">
                  Message Details *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your environment (Node version, OS) and the issue encountered..."
                  className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:outline-none focus:border-brand-lime"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-full border border-zinc-700 text-zinc-300 text-xs font-semibold hover:bg-zinc-800 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-full bg-brand-lime text-zinc-950 text-xs font-bold hover:bg-brand-lime-hover transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Ticket</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </Modal>
  );
};
