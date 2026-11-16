import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'titan-moderation',
    name: 'Titan Moderation Bot',
    slug: 'titan-moderation-bot',
    tagline: 'High-performance automated moderation and security engine',
    category: 'Discord Moderation',
    badge: 'Premium Source Code',
    featured: true,
    status: 'available',
    description: 'A powerful Discord moderation solution designed to help communities maintain security, control and order through advanced moderation tools and automated protection.',
    priceFormatted: 'Instant Access via Whop',
    features: [
      'Advanced moderation commands',
      'Automated moderation',
      'Anti-spam protection',
      'Server protection',
      'Role management',
      'Logging system',
      'Configurable moderation settings',
      'Developer-friendly source code'
    ],
    specs: {
      runtime: 'Node.js 20+ (LTS) & TypeScript 5.5+',
      library: 'Discord.js v14.16+ (REST & Gateway v10)',
      database: 'Prisma ORM (SQLite zero-config, PostgreSQL/MySQL ready)',
      architecture: 'Event-driven modular slash commands with permission bitfields',
      deployment: ['Docker & Docker Compose', 'PM2 Process Manager', 'Pterodactyl Panel', 'Ubuntu VPS / Debian'],
      license: 'Full Source Code Commercial License for Your Discord Servers'
    },
    installationSteps: [
      {
        step: 1,
        title: 'Clone & Extract Source',
        command: 'git clone <your-private-repo-url> titan-bot && cd titan-bot',
        details: 'Download your clean TypeScript repository directly after checkout via Whop.'
      },
      {
        step: 2,
        title: 'Configure Environment Variables',
        command: 'cp .env.example .env && nano .env',
        details: 'Insert your Discord Application Client ID, Bot Token, and server owner IDs.'
      },
      {
        step: 3,
        title: 'Install Dependencies',
        command: 'npm install',
        details: 'Installs typed Discord.js v14 modules, Prisma client, and utility libraries.'
      },
      {
        step: 4,
        title: 'Deploy Slash Commands',
        command: 'npm run deploy-commands',
        details: 'Syncs all guild and global application commands with the Discord REST API.'
      },
      {
        step: 5,
        title: 'Run Bot or Docker Container',
        command: 'npm run start # or docker compose up -d',
        details: 'Titan connects to the Discord Gateway and begins real-time server protection.'
      }
    ],
    commands: [
      {
        name: '/ban',
        category: 'Moderation',
        description: 'Bans a target user with configurable message purge duration and audit reason.',
        usage: '/ban target:@user reason:"violating community rules" delete_days:7',
        permission: 'BanMembers'
      },
      {
        name: '/mute',
        category: 'Moderation',
        description: 'Applies native Discord timeout with human-readable duration strings (e.g., 30m, 2h, 1d).',
        usage: '/mute target:@user duration:2h reason:"channel derailment"',
        permission: 'ModerateMembers'
      },
      {
        name: '/automod',
        category: 'Protection',
        description: 'Configures real-time regex keyword filters, invite blocking, and mass-mention tripwires.',
        usage: '/automod filter:invites action:block notify:true',
        permission: 'ManageGuild'
      },
      {
        name: '/lockdown',
        category: 'Server Protection',
        description: 'Instantly revokes send permissions across channels during active spam or raid events.',
        usage: '/lockdown channel:#general duration:15m reason:"raid attempt"',
        permission: 'ManageChannels'
      },
      {
        name: '/slowmode',
        category: 'Moderation',
        description: 'Sets per-user rate limit interval on the current text channel.',
        usage: '/slowmode seconds:10 reason:"fast-paced debate"',
        permission: 'ManageChannels'
      },
      {
        name: '/logs',
        category: 'Auditing',
        description: 'Configures comprehensive embed logging destinations for member events, deletions, and mod actions.',
        usage: '/logs set_channel:#mod-logs category:all',
        permission: 'Administrator'
      }
    ],
    iconType: 'titan'
  },
  {
    id: 'sentinel-verification',
    name: 'Sentinel Anti-Raid & Verification Bot',
    slug: 'sentinel-verification-bot',
    tagline: 'Multi-layer gatekeeper with web OAuth2 verification and captcha shields',
    category: 'Security & Verification',
    badge: 'Coming Q2',
    featured: false,
    status: 'coming-soon',
    description: 'Enterprise security perimeter for large Discord servers. Prevents token raids, unauthorized webhook execution, and coordinated spam attacks.',
    priceFormatted: 'Roadmap',
    features: [
      'Interactive button captcha',
      'Web OAuth2 gatekeeper',
      'Automated anti-raid mode',
      'Account age filtering',
      'Avatar & badge heuristics',
      'Quarantine role routing',
      'Suspicious join alerts',
      'Comprehensive audit trails'
    ],
    specs: {
      runtime: 'Node.js 20+ & TypeScript',
      library: 'Discord.js v14 + Fastify Webhook Server',
      database: 'Redis + PostgreSQL',
      architecture: 'Distributed rate-limiting and token verification pipeline',
      deployment: ['Docker', 'Fly.io', 'Linux VPS'],
      license: 'Full Source Code Commercial License'
    },
    installationSteps: [],
    commands: [],
    iconType: 'sentinel'
  },
  {
    id: 'atlas-economy',
    name: 'Atlas Economy & Leveling Engine',
    slug: 'atlas-economy-bot',
    tagline: 'Gamified server retention with customizable shop and progression trees',
    category: 'Community Automation',
    badge: 'Coming Soon',
    featured: false,
    status: 'coming-soon',
    description: 'Keep your server members actively engaged with a balanced, cheat-resistant virtual economy, voice XP, custom rank cards, and automated role rewards.',
    priceFormatted: 'Roadmap',
    features: [
      'Message & voice chat XP tracking',
      'Custom SVG rank cards',
      'Dynamic server shop system',
      'Automated role progression',
      'Daily streaks & gambling mini-games',
      'Leaderboards (web & Discord)',
      'Transaction logging & anti-exploit',
      'Modular configuration'
    ],
    specs: {
      runtime: 'Node.js 20+ & TypeScript',
      library: 'Discord.js v14 + @napi-rs/canvas',
      database: 'Prisma ORM with PostgreSQL',
      architecture: 'Memory-cached XP queue with debounced write operations',
      deployment: ['Docker', 'VPS', 'PM2'],
      license: 'Full Source Code Commercial License'
    },
    installationSteps: [],
    commands: [],
    iconType: 'atlas'
  }
];

export const VALUE_PILLARS = [
  {
    id: 'developer-engineered',
    title: 'Developer Engineered',
    description: 'Carefully structured and maintained software.',
    icon: 'code' as const,
  },
  {
    id: 'reliable-systems',
    title: 'Reliable Systems',
    description: 'Designed for dependable Discord server operations.',
    icon: 'shield' as const,
  },
  {
    id: 'powerful-features',
    title: 'Powerful Features',
    description: 'Practical tools for real community management.',
    icon: 'zap' as const,
  },
  {
    id: 'developer-support',
    title: 'Developer Support',
    description: 'Clear documentation and assistance.',
    icon: 'headphones' as const,
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: '1. Browse',
    description: 'Explore our collection of Discord bots.',
    icon: 'search' as const,
  },
  {
    step: 2,
    title: '2. Choose',
    description: 'Select the bot that fits your community.',
    icon: 'layers' as const,
  },
  {
    step: 3,
    title: '3. Purchase',
    description: 'Buy securely through Whop.',
    icon: 'cart' as const,
  },
  {
    step: 4,
    title: '4. Access',
    description: 'Get instant access to the source code.',
    icon: 'download' as const,
  },
  {
    step: 5,
    title: '5. Install',
    description: 'Follow the documentation and set up your bot.',
    icon: 'rocket' as const,
  }
];
