export interface DocCategory {
  id: string;
  title: string;
  articles: {
    id: string;
    title: string;
    content: string;
  }[];
}

export const DOCS_DATA: DocCategory[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    articles: [
      {
        id: 'overview',
        title: 'Project Overview & Architecture',
        content: `### Architecture Overview
RoynixBotWorks bots are built using a decoupled, event-driven architecture designed for high throughput and zero latency on busy Discord servers.

- **Language:** TypeScript 5.5+ with strict mode enabled
- **Discord Library:** Discord.js v14.16+ targeting Discord API v10
- **Database:** Prisma ORM supporting SQLite (zero-config local storage) or PostgreSQL / MySQL for clustered setups
- **Process Supervision:** Native support for PM2 process manager and Docker multi-stage images

The codebase is organized cleanly into modular directories:
\`\`\`
titan-bot/
├── src/
│   ├── commands/        # Slash command definitions & execution logic
│   │   ├── moderation/  # /ban, /mute, /kick, /lockdown
│   │   ├── automod/     # Filter rules, keyword triggers, invite blockers
│   │   └── utility/     # /logs, /slowmode, /settings
│   ├── events/          # Gateway event listeners (guildMemberAdd, messageCreate)
│   ├── services/        # AutoMod engine, rate-limit tracker, logger
│   ├── prisma/          # Database schema and migration files
│   └── index.ts         # Gateway client initialization
├── .env.example         # Template for environment configuration
└── docker-compose.yml   # Production container configuration
\`\`\`
`
      },
      {
        id: 'quickstart',
        title: 'Quickstart Guide',
        content: `### 5-Minute Quickstart

Follow these steps to deploy Titan Moderation Bot in your local environment:

#### 1. Prerequisites
Ensure you have Node.js 20 LTS or later installed:
\`\`\`bash
node -v # Should report v20.x or higher
npm -v  # npm v10+ recommended
\`\`\`

#### 2. Extract and Install
Extract your purchased package from Whop and install the production dependencies:
\`\`\`bash
cd titan-moderation-bot
npm install
\`\`\`

#### 3. Configure Your Environment
Duplicate the environment template and provide your Discord credentials:
\`\`\`bash
cp .env.example .env
\`\`\`

Edit \`.env\` with your favorite editor:
\`\`\`bash
DISCORD_TOKEN=your_bot_token_here
CLIENT_ID=your_application_client_id
GUILD_ID=your_primary_discord_guild_id
DATABASE_URL="file:./dev.db"
\`\`\`

#### 4. Initialize Database & Register Commands
Run the Prisma schema sync and register your slash commands with the Discord API:
\`\`\`bash
npx prisma db push
npm run deploy-commands
\`\`\`

#### 5. Launch the Bot
Start the application:
\`\`\`bash
npm run start
\`\`\`
You will see: \`[Titan] Logged in as Titan#0000 | Active in 1 guild | Gateway latency: 28ms\`.
`
      }
    ]
  },
  {
    id: 'discord-portal',
    title: 'Discord Portal Setup',
    articles: [
      {
        id: 'bot-setup',
        title: 'Creating Your Bot & Obtaining Tokens',
        content: `### Setting up the Discord Developer Portal

1. Navigate to the [Discord Developer Portal](https://discord.com/developers/applications).
2. Click **New Application** at the top right and name your bot (e.g., *Titan Moderation*).
3. Under the **Bot** tab:
   - Click **Reset Token** to generate a new Bot Token. Copy this immediately and paste it into your \`.env\` under \`DISCORD_TOKEN\`.
   - Never share this token publicly or commit it to GitHub.
4. Enable the following **Privileged Gateway Intents**:
   - **Server Members Intent:** Required to track joins, leaves, role assignments, and member moderation.
   - **Message Content Intent:** Required for the AutoMod engine to inspect messages for prohibited links, words, and raid patterns.
5. In the **OAuth2 > URL Generator** tab:
   - Scopes: Select \`bot\` and \`applications.commands\`.
   - Bot Permissions: Select \`Administrator\` (recommended for full moderation coverage) or granular permissions (\`Ban Members\`, \`Kick Members\`, \`Moderate Members\`, \`Manage Channels\`, \`Manage Roles\`, \`View Audit Log\`, \`Send Messages\`, \`Embed Links\`).
   - Copy the generated invite URL and paste it into your browser to authorize the bot into your Discord server.
`
      }
    ]
  },
  {
    id: 'commands',
    title: 'Command Reference',
    articles: [
      {
        id: 'moderation-commands',
        title: 'Moderation & Protection Commands',
        content: `### Moderation Commands List

| Command | Usage | Required Permission | Description |
| :--- | :--- | :--- | :--- |
| \`/ban\` | \`/ban target:@user reason:[text] delete_days:[0-7]\` | Ban Members | Permanently bans a member with optional message purge |
| \`/unban\` | \`/unban user_id:[id] reason:[text]\` | Ban Members | Revokes ban for target user ID |
| \`/mute\` | \`/mute target:@user duration:[time] reason:[text]\` | Moderate Members | Applies native Discord timeout (e.g., \`15m\`, \`2h\`, \`1d\`) |
| \`/unmute\` | \`/unmute target:@user reason:[text]\` | Moderate Members | Removes active timeout immediately |
| \`/kick\` | \`/kick target:@user reason:[text]\` | Kick Members | Removes target from server with DM reason notification |
| \`/warn\` | \`/warn target:@user reason:[text]\` | Moderate Members | Issues recorded warning with threshold-based escalation |
| \`/warnings\` | \`/warnings target:@user\` | Moderate Members | Displays member violation history and points |
| \`/slowmode\` | \`/slowmode seconds:[0-21600]\` | Manage Channels | Sets channel cooldown interval |
| \`/lockdown\` | \`/lockdown channel:[#channel] reason:[text]\` | Manage Channels | Locks down channel during raids or spam events |
| \`/unlock\` | \`/unlock channel:[#channel]\` | Manage Channels | Restores default posting permissions |
| \`/purge\` | \`/purge count:[1-100] user:[@optional]\` | Manage Messages | Bulk deletes messages with filter support |
| \`/automod\` | \`/automod [invites|caps|words|mentions]\` | Manage Server | Configures real-time automated filters |
| \`/logs\` | \`/logs set_channel:[#channel]\` | Administrator | Configures the destination for audit logging embeds |
`
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Hosting & Deployment',
    articles: [
      {
        id: 'docker-pm2',
        title: 'Docker & PM2 Production Deployment',
        content: `### Production Deployment Options

#### Option A: Docker Compose (Recommended)
Titan includes a production-ready \`docker-compose.yml\` and multi-stage \`Dockerfile\`:

\`\`\`yaml
version: '3.8'
services:
  titan-bot:
    build: .
    restart: unless-stopped
    env_file:
      - .env
    volumes:
      - ./data:/app/prisma/data
\`\`\`

To start the container in the background:
\`\`\`bash
docker compose up -d --build
\`\`\`
To view real-time logs:
\`\`\`bash
docker compose logs -f
\`\`\`

#### Option B: PM2 on Ubuntu/Debian VPS
For traditional Linux VPS hosting:

\`\`\`bash
# Install PM2 globally
npm install -g pm2

# Build TypeScript to JavaScript
npm run build

# Start bot with cluster/fork restart supervision
pm2 start dist/index.js --name "titan-moderation"

# Save configuration for automatic reboot persistence
pm2 save
pm2 startup
\`\`\`
`
      }
    ]
  }
];
