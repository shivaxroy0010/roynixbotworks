import { Product } from '../types';
import { WHOP_PURCHASE_URL_TITAN, WHOP_PURCHASE_URL_MUSIC } from '../config/constants';

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
    checkoutUrl: WHOP_PURCHASE_URL_TITAN,
    description: 'A powerful Discord moderation solution designed to help communities maintain security, control and order through advanced moderation tools and automated protection.',
    priceFormatted: '$29.29 via Whop',
    originalPrice: '$49.99',
    currentPrice: '$29.29',
    discountBadge: 'Save 40%',
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
    id: 'roynix-music',
    name: 'Roynix Music Bot',
    slug: 'roynix-music-bot',
    tagline: 'A Powerful & Feature-Rich Discord Music Bot',
    category: 'Music & Audio',
    badge: 'Save 15%',
    featured: true,
    status: 'available',
    checkoutUrl: WHOP_PURCHASE_URL_MUSIC,
    headlineIntro: 'Play music in your Discord server instantly',
    originalPrice: '$58.81',
    currentPrice: '$49.99',
    discountBadge: 'Save 15%',
    priceFormatted: '$49.99 (Save 15%)',
    description: "Roynix Music Bot brings high-quality audio streaming directly to your Discord server. Stream from multiple platforms, manage playback with intuitive commands, and enjoy lag-free performance with advanced queue management. Whether you're hosting a gaming session, study stream, or casual hangout, Roynix keeps the vibe going with reliable music delivery. Easy to set up and simple to use, it's the bot your server needs.",
    platforms: [
      'High Quality Music Playback',
      'YouTube Support',
      'Spotify Integration',
      'Fast & Reliable'
    ],
    bulletPoints: [
      'Access to full music streaming capabilities',
      'Support for multiple audio platforms (YouTube, Spotify, SoundCloud, Apple Music)',
      'Advanced queue and playlist management',
      'Priority support and bug fixes',
      'Regular feature updates and improvements'
    ],
    features: [
      'High-quality 24-bit audio streaming',
      'YouTube & Spotify integration',
      'Advanced queue & loop modes',
      'Interactive player buttons & embed controls',
      '24/7 voice channel stay mode',
      'Real-time audio filters (Bass Boost, 8D, Nightcore)',
      'Custom server saved playlists',
      'Lag-free Lavalink v4 audio pipeline'
    ],
    specs: {
      runtime: 'Node.js 20+ (LTS) & TypeScript 5.5+',
      library: 'Discord.js v14.16+ & Lavalink v4 Voice Driver',
      database: 'Prisma ORM with SQLite or PostgreSQL (Playlists & Guild Settings)',
      architecture: 'Opus 48kHz / 24-bit lossless streaming with non-blocking audio buffer',
      deployment: ['Docker & Docker Compose', 'PM2 Process Manager', 'Pterodactyl Panel', 'Ubuntu VPS / Debian'],
      license: 'Full Source Code Commercial License for Your Discord Servers'
    },
    installationSteps: [
      {
        step: 1,
        title: 'Clone & Extract Music Repository',
        command: 'git clone <your-private-repo-url> roynix-music-bot && cd roynix-music-bot',
        details: 'Download your full TypeScript source code package instantly after checkout via Whop.'
      },
      {
        step: 2,
        title: 'Configure Lavalink & Discord Secrets',
        command: 'cp .env.example .env && nano .env',
        details: 'Provide your Discord Bot Token, Client ID, Lavalink node credentials, and optional Spotify Client Secret.'
      },
      {
        step: 3,
        title: 'Install Production Dependencies',
        command: 'npm install',
        details: 'Installs Discord.js v14, @discordjs/voice, Prisma client, and voice decoders.'
      },
      {
        step: 4,
        title: 'Deploy Slash Commands to Discord',
        command: 'npm run deploy-commands',
        details: 'Registers all music playback, filter, and queue management commands.'
      },
      {
        step: 5,
        title: 'Launch Lavalink & Bot Process',
        command: 'docker compose up -d # or npm run start',
        details: 'Roynix Music Bot connects to your voice channels and starts streaming zero-lag audio.'
      }
    ],
    commands: [
      {
        name: '/play',
        category: 'Playback',
        description: 'Plays a track or playlist from YouTube, Spotify, SoundCloud, or search query.',
        usage: '/play query:"Alan Walker - Faded" or paste URL',
        permission: 'Speak'
      },
      {
        name: '/skip',
        category: 'Queue',
        description: 'Skips the currently playing track to the next song in server queue.',
        usage: '/skip [to:index]',
        permission: 'Speak'
      },
      {
        name: '/queue',
        category: 'Queue',
        description: 'Displays the interactive paginated queue with track lengths and total duration.',
        usage: '/queue page:1',
        permission: 'SendMessages'
      },
      {
        name: '/filter',
        category: 'Audio Effects',
        description: 'Applies real-time DSP audio filters: bassboost, 8d, nightcore, vaporwave, or pop.',
        usage: '/filter mode:bassboost intensity:high',
        permission: 'Speak'
      },
      {
        name: '/nowplaying',
        category: 'Playback',
        description: 'Displays rich player embed with progress bar, volume status, and interactive controls.',
        usage: '/nowplaying',
        permission: 'SendMessages'
      },
      {
        name: '/volume',
        category: 'Controls',
        description: 'Adjusts playback volume between 1% and 200% with lossless software gain.',
        usage: '/volume level:85',
        permission: 'Speak'
      }
    ],
    iconType: 'music'
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
    checkoutUrl: WHOP_PURCHASE_URL_TITAN,
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
    checkoutUrl: WHOP_PURCHASE_URL_TITAN,
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
