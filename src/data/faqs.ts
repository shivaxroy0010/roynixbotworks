import { FAQItem } from '../types';

export const FAQS: FAQItem[] = [
  {
    id: 'what-is-roynixbotworks',
    question: 'What is RoynixBotWorks?',
    category: 'general',
    answer: 'RoynixBotWorks is an independent software studio focused on building premium, production-ready Discord bot source codes and server management solutions. We provide cleanly engineered, self-hostable Discord applications designed for community owners and developers who require complete control, security, and reliability.'
  },
  {
    id: 'what-do-i-receive',
    question: 'What do I receive after purchasing?',
    category: 'licensing',
    answer: 'Upon completing your purchase through Whop, you receive immediate access to the complete, uncompiled source code repository (including all TypeScript files, command handlers, and schemas), comprehensive setup documentation, an environment configuration template (.env.example), and access to product updates distributed through your Whop membership portal.'
  },
  {
    id: 'how-do-i-install',
    question: 'How do I install a Discord bot?',
    category: 'technical',
    answer: 'Installation involves three standard steps: 1) Create a bot application in the Discord Developer Portal to obtain a Bot Token, 2) Configure your environment variables in the provided .env file, and 3) Install dependencies and start the process using Node.js (v20+) or Docker. Step-by-step instructions and command snippets are detailed in the included documentation.'
  },
  {
    id: 'do-i-receive-source-code',
    question: 'Do I receive the source code?',
    category: 'licensing',
    answer: 'Yes. Every product offered by RoynixBotWorks is delivered as 100% full, human-readable source code. There are no obfuscated files or hidden binaries. You have full visibility into every line of code running on your Discord servers, and you are free to customize, modify, and extend the codebase to match your specific server requirements.'
  },
  {
    id: 'is-technical-documentation-included',
    question: 'Is technical documentation included?',
    category: 'technical',
    answer: 'Yes. Each bot package contains structured technical documentation covering prerequisite installation, environment variables, Discord Developer Portal intent configuration, command references, permission bitfield requirements, and self-hosting runbooks for Linux VPS (Ubuntu/Debian), PM2, and Docker.'
  },
  {
    id: 'where-can-i-get-support',
    question: 'Where can I get support?',
    category: 'support',
    answer: 'Support is available through our dedicated Discord community server and direct messaging through your Whop customer portal. We assist with initial setup verification, dependency troubleshooting, and addressing bug reports. As this is self-hosted source code, basic familiarity with running Node.js or terminal commands is recommended.'
  },
  {
    id: 'how-do-i-access-my-purchase',
    question: 'How do I access my purchase?',
    category: 'licensing',
    answer: 'Your purchase is managed and fulfilled directly through Whop. Immediately after checkout, you can log in to your Whop dashboard (whop.com) to download the latest source code archive or access the private repository link, setup guides, and licensing credentials associated with your account.'
  }
];
