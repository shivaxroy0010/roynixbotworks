/**
 * Centralized Configuration for RoynixBotWorks
 * All external links and checkout endpoints are managed here.
 */

// Official Whop Storefront and Checkout URL
export const WHOP_PURCHASE_URL = "https://whop.com/discord-bot-source-codes/roynixbotworks/";

// Brand Information
export const BRAND_CONFIG = {
  name: "RoynixBotWorks",
  tagline: "Powerful Bots. Smarter Communities.",
  headline: "Powering the Next Generation of Discord Communities.",
  description: "Discover professionally engineered Discord bots built for moderation, automation, security and community management.",
  studioBadge: "DISCORD BOT DEVELOPMENT STUDIO",
  year: new Date().getFullYear(),
  supportDiscordUrl: "https://discord.gg/roynixbotworks", // Support server placeholder
  whopStoreUrl: WHOP_PURCHASE_URL,
};

/**
 * Global purchase redirect handler
 * Guaranteed to open in the same browser tab without simulating fake gateways.
 */
export const handleWhopRedirect = () => {
  window.location.href = WHOP_PURCHASE_URL;
};
