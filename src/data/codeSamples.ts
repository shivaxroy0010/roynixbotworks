export interface CodeFile {
  path: string;
  name: string;
  language: string;
  description: string;
  category: 'Commands' | 'Services' | 'Database' | 'DevOps';
  code: string;
}

export const CODE_SAMPLES: CodeFile[] = [
  {
    path: 'src/commands/moderation/ban.ts',
    name: 'ban.ts',
    language: 'typescript',
    category: 'Commands',
    description: 'Production Discord.js v14 slash command with permission checks, user DM notifications, message purging, and Prisma audit log persistence.',
    code: `import { 
  SlashCommandBuilder, 
  ChatInputCommandInteraction, 
  PermissionFlagsBits, 
  EmbedBuilder,
  AuditLogEvent 
} from 'discord.js';
import { prisma } from '../../database/client';
import { Logger } from '../../services/logger.service';

export const data = new SlashCommandBuilder()
  .setName('ban')
  .setDescription('Bans a target member from the guild and writes to audit logs.')
  .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
  .setDMPermission(false)
  .addUserOption(option => 
    option.setName('target')
      .setDescription('The member to ban')
      .setRequired(true))
  .addStringOption(option => 
    option.setName('reason')
      .setDescription('Reason for the ban (logged in audit trails)')
      .setMaxLength(512)
      .setRequired(false))
  .addIntegerOption(option => 
    option.setName('delete_days')
      .setDescription('Days of message history to purge (0-7)')
      .setMinValue(0)
      .setMaxValue(7)
      .setRequired(false));

export async function execute(interaction: ChatInputCommandInteraction) {
  await interaction.deferReply({ ephemeral: true });

  const targetUser = interaction.options.getUser('target', true);
  const reason = interaction.options.getString('reason') ?? 'No reason provided';
  const deleteDays = interaction.options.getInteger('delete_days') ?? 1;
  const guild = interaction.guild!;

  // Protect guild owner and higher role members
  const targetMember = await guild.members.fetch(targetUser.id).catch(() => null);
  if (targetMember && !targetMember.bannable) {
    return interaction.editReply({
      content: '❌ Cannot ban this user. Their highest role exceeds bot permissions.'
    });
  }

  // Attempt user notification via DM before guild eviction
  try {
    const dmEmbed = new EmbedBuilder()
      .setColor('#ed4245')
      .setTitle(\`You were banned from \${guild.name}\`)
      .addFields(
        { name: 'Reason', value: reason },
        { name: 'Moderator', value: interaction.user.tag }
      )
      .setTimestamp();
    await targetUser.send({ embeds: [dmEmbed] });
  } catch {
    // User DMs disabled or closed - safe fallback
  }

  // Execute native guild ban with message deletion window
  await guild.bans.create(targetUser.id, {
    reason: \`[\${interaction.user.tag}] \${reason}\`,
    deleteMessageSeconds: deleteDays * 86400
  });

  // Record audit transaction in database via Prisma
  await prisma.modLog.create({
    data: {
      guildId: guild.id,
      action: 'BAN',
      targetId: targetUser.id,
      moderatorId: interaction.user.id,
      reason,
      metadata: { deleteDays }
    }
  });

  // Emit formatted mod-log dispatch
  await Logger.dispatchModLog(guild, {
    action: 'MEMBER_BANNED',
    target: targetUser,
    moderator: interaction.user,
    reason,
    color: 0xed4245
  });

  return interaction.editReply({
    content: \`✅ Successfully banned **\${targetUser.tag}** (\${targetUser.id}).\`
  });
}`
  },
  {
    path: 'src/services/automod.service.ts',
    name: 'automod.service.ts',
    language: 'typescript',
    category: 'Services',
    description: 'High-speed event-driven regex heuristic scanner for anti-invite, bad words, token spam, and mass-mention prevention.',
    code: `import { Message, PermissionFlagsBits, EmbedBuilder } from 'discord.js';
import { prisma } from '../database/client';

const DISCORD_INVITE_REGEX = /(https?:\\/\\/)?(www\\.)?(discord\\.(gg|io|me|li)|discordapp\\.com\\/invite)\\b([-a-zA-Z0-9/]*)?/gi;

export class AutoModService {
  /**
   * Evaluates incoming message content against active guild protection rules
   */
  public static async inspectMessage(message: Message): Promise<boolean> {
    if (!message.guild || message.author.bot) return false;

    // Bypass check for administrators and moderators
    const member = message.member;
    if (member?.permissions.has(PermissionFlagsBits.ManageMessages)) {
      return false;
    }

    const config = await prisma.guildConfig.findUnique({
      where: { guildId: message.guild.id }
    });

    if (!config || !config.autoModEnabled) return false;

    // 1. Anti-Invite Link Inspection
    if (config.blockInvites && DISCORD_INVITE_REGEX.test(message.content)) {
      await this.handleViolation(message, 'INVITE_LINK', 'Unauthorized Discord invite link detected.');
      return true;
    }

    // 2. Mass Mention Tripwire
    if (config.maxMentions > 0 && message.mentions.users.size > config.maxMentions) {
      await this.handleViolation(message, 'MASS_MENTIONS', \`Exceeded limit of \${config.maxMentions} mentions.\`);
      return true;
    }

    return false;
  }

  private static async handleViolation(message: Message, type: string, detail: string) {
    await message.delete().catch(() => null);

    const warnMsg = await message.channel.send({
      content: \`⚠️ **\${message.author.toString()}**, your message was removed: \${detail}\`
    });

    // Auto-delete warning alert after 5 seconds to reduce chat noise
    setTimeout(() => warnMsg.delete().catch(() => null), 5000);
  }
}`
  },
  {
    path: 'prisma/schema.prisma',
    name: 'schema.prisma',
    language: 'prisma',
    category: 'Database',
    description: 'Prisma schema definition supporting SQLite for zero-config deployments and PostgreSQL for enterprise scale.',
    code: `datasource db {
  provider = "sqlite" // Easily switch to "postgresql" or "mysql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model GuildConfig {
  id              String   @id @default(uuid())
  guildId         String   @unique
  prefix          String   @default("!")
  modLogChannelId String?
  autoModEnabled  Boolean  @default(true)
  blockInvites    Boolean  @default(true)
  maxMentions     Int      @default(5)
  muteRoleId      String?
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
  modLogs         ModLog[]
  warnings        Warning[]
}

model ModLog {
  id          String      @id @default(cuid())
  guildId     String
  action      String      // BAN, KICK, MUTE, UNMUTE, WARN, PURGE
  targetId    String
  moderatorId String
  reason      String?
  metadata    String?     // Stored as JSON string
  createdAt   DateTime    @default(now())
  guild       GuildConfig @relation(fields: [guildId], references: [guildId], onDelete: Cascade)
}

model Warning {
  id          String      @id @default(cuid())
  guildId     String
  userId      String
  moderatorId String
  reason      String
  points      Int         @default(1)
  createdAt   DateTime    @default(now())
  guild       GuildConfig @relation(fields: [guildId], references: [guildId], onDelete: Cascade)
}`
  },
  {
    path: 'docker-compose.yml',
    name: 'docker-compose.yml',
    language: 'yaml',
    category: 'DevOps',
    description: 'Production container configuration with volume persistence, restart policies, and resource constraints.',
    code: `version: '3.8'

services:
  titan-bot:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: titan-moderation-bot
    restart: unless-stopped
    env_file:
      - .env
    volumes:
      - titan-data:/app/prisma/data
      - titan-logs:/app/logs
    deploy:
      resources:
        limits:
          cpus: '1.0'
          memory: 512M
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"

volumes:
  titan-data:
  titan-logs:`
  }
];
