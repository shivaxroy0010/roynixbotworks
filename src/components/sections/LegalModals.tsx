import React from 'react';
import { Modal } from '../common/Modal';
import { WHOP_PURCHASE_URL } from '../../config/constants';

interface LegalModalProps {
  type: 'terms' | 'privacy' | 'refund' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <Modal
      isOpen={!!type}
      onClose={onClose}
      title={
        type === 'terms'
          ? 'Terms and Conditions'
          : type === 'privacy'
          ? 'Privacy Policy'
          : 'Refund Policy'
      }
      subtitle="RoynixBotWorks Software Licensing & Legal Disclosures"
      maxWidth="2xl"
    >
      <div className="prose prose-invert max-w-none text-xs sm:text-sm text-zinc-300 space-y-4 leading-relaxed font-sans">
        {type === 'terms' && (
          <>
            <p>
              <strong>1. Overview & Acceptance of Terms</strong><br />
              By purchasing, downloading, or using software products created by RoynixBotWorks, you agree to be bound by these Terms and Conditions. All transactions are securely processed and fulfilled through our authorized distributor, <strong>Whop</strong>.
            </p>
            <p>
              <strong>2. Grant of License</strong><br />
              Upon purchase, RoynixBotWorks grants you a non-exclusive, perpetual, commercial license to deploy, run, modify, and host the purchased Discord bot source code across your personal, corporate, or community Discord servers.
            </p>
            <p>
              <strong>3. Restrictions</strong><br />
              You may not resell, sub-license, redistribute, leak, or publicly disclose the uncompiled source code or any substantial portion thereof as a standalone digital asset or competing bot template.
            </p>
            <p>
              <strong>4. Discord Terms of Service Compliance</strong><br />
              Our source code is developed to strictly conform with Discord's Developer Terms of Service and Developer Policy. You remain solely responsible for configuring your bot instance, managing privileged intents, and complying with Discord API rate limits and safety standards.
            </p>
            <p>
              <strong>5. Warranty Disclaimer</strong><br />
              The software is provided "as is", without warranty of any kind, express or implied. RoynixBotWorks is not liable for server disputes, Discord API downtime, hosting failures, or data loss caused by unauthorized modifications.
            </p>
          </>
        )}

        {type === 'privacy' && (
          <>
            <p>
              <strong>1. Information Collection</strong><br />
              RoynixBotWorks does not collect, track, or harvest personal data from your Discord server members. Because our bots are 100% self-hosted on your own infrastructure, all server data, messages, moderation logs, and member IDs remain exclusively within your private database (SQLite/PostgreSQL).
            </p>
            <p>
              <strong>2. Payment & Customer Data</strong><br />
              All payment processing, billing addresses, and payment credentials are handled exclusively by Whop (whop.com). RoynixBotWorks never collects, stores, or processes payment card details.
            </p>
            <p>
              <strong>3. Telemetry & Analytics</strong><br />
              Our source code contains zero hidden phone-home telemetry, phone trackers, or third-party behavioral analytics. You have full source code access to verify all network egress.
            </p>
            <p>
              <strong>4. Support Inquiries</strong><br />
              If you submit a support request or email inquiry, your provided email and order reference are used solely to assist you with technical resolution and are never sold or shared with third parties.
            </p>
          </>
        )}

        {type === 'refund' && (
          <>
            <p>
              <strong>1. Digital Goods Policy</strong><br />
              Because RoynixBotWorks products are delivered as immediate, irrevocable digital source code archives and uncompiled GitHub/git repositories, standard refunds are governed under our digital goods policy through Whop.
            </p>
            <p>
              <strong>2. Defective Software Protection</strong><br />
              If you discover an inherent architectural defect or bug in the uncompiled source code that prevents the bot from operating according to its stated specifications, and our engineering support team is unable to resolve the issue within 7 business days, you are entitled to a full refund through Whop.
            </p>
            <p>
              <strong>3. Eligibility Exclusions</strong><br />
              Refunds are not granted for:
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Lack of basic technical proficiency required for self-hosting Node.js or Docker applications.</li>
                <li>Discord API account suspensions or bot terminations resulting from customer misuse.</li>
                <li>Changes of mind after source code has been unzipped or downloaded.</li>
              </ul>
            </p>
            <p>
              <strong>4. Processing Inquiries</strong><br />
              To initiate an inquiry, contact us through the <a href={WHOP_PURCHASE_URL} target="_self" className="text-brand-lime underline">Whop Customer Dashboard</a>.
            </p>
          </>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-zinc-800 flex justify-end">
        <button
          onClick={onClose}
          className="px-5 py-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold cursor-pointer"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};
