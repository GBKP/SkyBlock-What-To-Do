// ─── Types ───────────────────────────────────────────────────────────────────

export interface NavItem {
  slug: string;
  title: string;
  description: string;
}

export interface Guide {
  slug: string;
  title: string;
  summary: string;
  category: string;
  body: string[];
}

// ─── Top-level nav ────────────────────────────────────────────────────────────

export const HOME_PATHS: NavItem[] = [
  { slug: "progression", title: "General Progression", description: "Skills, combat, and long-term goals." },
  { slug: "money",       title: "Money Making",         description: "Active and passive coin methods." },
  { slug: "ideas",       title: "Give Me Some Ideas",   description: "Not sure what to do? Start here." },
];

export const PROGRESSION_SKILLS: NavItem[] = [
  { slug: "mining",          title: "Mining",           description: "HOTM, powder, and gemstone mining." },
  { slug: "farming",         title: "Farming",          description: "Crop farming and jacob contests." },
  { slug: "fishing",         title: "Fishing",          description: "Trophy fish, lava fishing, and more." },
  { slug: "combat",          title: "Combat",           description: "Slayers, dungeons, and Kuudra." },
  { slug: "minions",         title: "Minions",          description: "Maximising your island output." },
  { slug: "other-skills",    title: "Other Skills",     description: "Enchanting, alchemy, taming, and more." },
  { slug: "foraging-hunting",title: "Foraging & Hunting", description: "Foraging XP and bestiary." },
];

export const MONEY_METHODS: NavItem[] = [
  { slug: "mining",    title: "Mining",        description: "Gemstones, mithril, and powder grind." },
  { slug: "farming",   title: "Farming",       description: "High-value crop contracts and bazaar flips." },
  { slug: "fishing",   title: "Fishing",       description: "Fishing for profit." },
  { slug: "combat",    title: "Combat / Mobs", description: "Mob drops, slayer drops, and dungeons." },
  { slug: "lazy-money",title: "Lazy / AFK",    description: "BINs, minions, and bazaar while offline." },
  { slug: "flipping",  title: "Flipping",      description: "Bazaar and auction house flipping." },
  { slug: "rift-money",title: "Rift",          description: "Motes and cross-realm profit." },
];

export const COMBAT_SUB: NavItem[] = [
  { slug: "slayers",  title: "Slayers",           description: "All five slayer bosses." },
  { slug: "dungeons", title: "Dungeons",           description: "Catacombs floors and master mode." },
  { slug: "kuudra",   title: "Kuudra",             description: "Fire Kuudra tiers and rewards." },
];

export const SLAYER_LIST: NavItem[] = [
  { slug: "zombie-slayer",  title: "Zombie Slayer",  description: "Revenant Horror." },
  { slug: "spider-slayer",  title: "Spider Slayer",  description: "Tarantula Broodfather." },
  { slug: "wolf-slayer",    title: "Wolf Slayer",    description: "Sven Packmaster." },
  { slug: "enderman-slayer",title: "Enderman Slayer",description: "Voidgloom Seraph." },
  { slug: "blaze-slayer",   title: "Blaze Slayer",   description: "Inferno Demonlord." },
];

export const DUNGEON_LIST: NavItem[] = [
  { slug: "dungeons-early", title: "Early Dungeons (F1–F4)", description: "Getting started in Catacombs." },
  { slug: "dungeons-mid",   title: "Mid Dungeons (F5–F6)",   description: "Pushing further floors." },
  { slug: "dungeons-late",  title: "Late Dungeons (F7+/M1+)",description: "Master mode and beyond." },
];

// ─── Guide data ───────────────────────────────────────────────────────────────
// REPLACE THIS ARRAY with the full guide content when you paste lib/content.ts.

export const GUIDES: Guide[] = [
  {
    slug: "combat-early",
    title: "Early Combat",
    summary: "Getting started with combat in Hypixel Skyblock.",
    category: "combat",
    body: ["Placeholder — paste the real lib/content.ts to fill this in."],
  },
  {
    slug: "combat-general",
    title: "General Combat Tips",
    summary: "General combat progression advice.",
    category: "combat",
    body: ["Placeholder — paste the real lib/content.ts to fill this in."],
  },
  {
    slug: "slayer-overview",
    title: "Slayer Overview",
    summary: "How slayers work and which to prioritise.",
    category: "slayers",
    body: ["Placeholder — paste the real lib/content.ts to fill this in."],
  },
  {
    slug: "zombie-slayer",
    title: "Zombie Slayer",
    summary: "Revenant Horror — the first slayer you should max.",
    category: "slayers",
    body: ["Placeholder — paste the real lib/content.ts to fill this in."],
  },
  {
    slug: "spider-slayer",
    title: "Spider Slayer",
    summary: "Tarantula Broodfather guide.",
    category: "slayers",
    body: ["Placeholder — paste the real lib/content.ts to fill this in."],
  },
  {
    slug: "wolf-slayer",
    title: "Wolf Slayer",
    summary: "Sven Packmaster guide.",
    category: "slayers",
    body: ["Placeholder — paste the real lib/content.ts to fill this in."],
  },
  {
    slug: "enderman-slayer",
    title: "Enderman Slayer",
    summary: "Voidgloom Seraph guide.",
    category: "slayers",
    body: ["Placeholder — paste the real lib/content.ts to fill this in."],
  },
  {
    slug: "blaze-slayer",
    title: "Blaze Slayer",
    summary: "Inferno Demonlord guide.",
    category: "slayers",
    body: ["Placeholder — paste the real lib/content.ts to fill this in."],
  },
  {
    slug: "dungeons-early",
    title: "Early Dungeons (F1–F4)",
    summary: "Getting started in Catacombs.",
    category: "dungeons",
    body: ["Placeholder — paste the real lib/content.ts to fill this in."],
  },
  {
    slug: "dungeons-mid",
    title: "Mid Dungeons (F5–F6)",
    summary: "Pushing further floors.",
    category: "dungeons",
    body: ["Placeholder — paste the real lib/content.ts to fill this in."],
  },
  {
    slug: "dungeons-late",
    title: "Late Dungeons (F7+/M1+)",
    summary: "Master mode and beyond.",
    category: "dungeons",
    body: ["Placeholder — paste the real lib/content.ts to fill this in."],
  },
  {
    slug: "kuudra",
    title: "Kuudra",
    summary: "Fire Kuudra tiers, builds, and rewards.",
    category: "kuudra",
    body: ["Placeholder — paste the real lib/content.ts to fill this in."],
  },
  {
    slug: "dailies",
    title: "Daily Tasks & Routines",
    summary: "Things you can do every day to stay productive.",
    category: "ideas",
    body: ["Placeholder — paste the real lib/content.ts to fill this in."],
  },
  {
    slug: "lazy-money",
    title: "Lazy / AFK Money",
    summary: "BINs, minions, and bazaar strategies.",
    category: "money",
    body: ["Placeholder — paste the real lib/content.ts to fill this in."],
  },
  {
    slug: "flipping",
    title: "Flipping",
    summary: "Bazaar and auction house flipping strategies.",
    category: "money",
    body: ["Placeholder — paste the real lib/content.ts to fill this in."],
  },
  {
    slug: "rift-money",
    title: "Rift Money",
    summary: "Motes and cross-realm profit in the Rift.",
    category: "money",
    body: ["Placeholder — paste the real lib/content.ts to fill this in."],
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

export function getGuidesByCategory(category: string): Guide[] {
  return GUIDES.filter((g) => g.category === category);
}

export function searchGuides(query: string): Guide[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return GUIDES.filter(
    (g) =>
      g.title.toLowerCase().includes(q) ||
      g.summary.toLowerCase().includes(q) ||
      g.category.toLowerCase().includes(q)
  ).slice(0, 8);
}
