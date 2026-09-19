import { ServerInfo, Kit } from '../types';

export const SERVER_DATA: ServerInfo = {
  name: "Power SMP",
  javaIp: "SOON 👋🏻",
  bedrockIp: "SOON 👋🏻",
  bedrockPort: "SOON 👋🏻",
  onlinePlayers: "SOON 👋🏻",
  statusText: "قريباً الافتتاح الرسمي",
  version: "1.20 - 1.21.x",
  discordUrl: "https://discord.gg/YJ6QvYK9w",
};

export const FULL_NETHERITE_KIT: Kit = {
  id: "kit-netherite-god",
  name: "Full Netherite Kit",
  nameAr: "فول نذر رايت",
  priceCredits: 1000000,
  priceFormatted: "1M كريدت (1,000,000)",
  descriptionAr: "الكيت الأقوى على الإطلاق في سيرفر Power SMP! عتاد نذر رايت أسطوري بتطويرات قصوى للحماية والقتال، يشمل أسلحة، دروع، وأدوات نجاة نادرة.",
  badge: "👑 الأقوى والأندر",
  items: [
    {
      id: "helmet",
      name: "Netherite Helmet",
      nameAr: "خوذة نذر رايت أسطورية",
      category: "armor",
      enchantments: ["Protection IV", "Unbreaking III", "Mending", "Respiration III", "Aqua Affinity"],
      count: 1,
      icon: "🪖",
      rarity: "mythic"
    },
    {
      id: "chestplate",
      name: "Netherite Chestplate",
      nameAr: "صدرية نذر رايت أسطورية",
      category: "armor",
      enchantments: ["Protection IV", "Unbreaking III", "Mending", "Thorns III"],
      count: 1,
      icon: "🛡️",
      rarity: "mythic"
    },
    {
      id: "leggings",
      name: "Netherite Leggings",
      nameAr: "بنطال نذر رايت أسطوري",
      category: "armor",
      enchantments: ["Protection IV", "Unbreaking III", "Mending", "Swift Sneak III"],
      count: 1,
      icon: "👖",
      rarity: "mythic"
    },
    {
      id: "boots",
      name: "Netherite Boots",
      nameAr: "حذاء نذر رايت أسطوري",
      category: "armor",
      enchantments: ["Protection IV", "Unbreaking III", "Mending", "Feather Falling IV", "Soul Speed III"],
      count: 1,
      icon: "👢",
      rarity: "mythic"
    },
    {
      id: "sword",
      name: "Netherite Sword",
      nameAr: "سيف نذر رايت الفتاك",
      category: "weapon",
      enchantments: ["Sharpness V", "Unbreaking III", "Mending", "Fire Aspect II", "Looting III", "Sweeping Edge III"],
      count: 1,
      icon: "⚔️",
      rarity: "mythic"
    },
    {
      id: "axe",
      name: "Netherite Axe",
      nameAr: "فأس نذر رايت المدمر",
      category: "weapon",
      enchantments: ["Efficiency V", "Sharpness V", "Unbreaking III", "Mending", "Silk Touch"],
      count: 1,
      icon: "🪓",
      rarity: "mythic"
    },
    {
      id: "pickaxe",
      name: "Netherite Pickaxe",
      nameAr: "بيكاكس نذر رايت الخارق",
      category: "tool",
      enchantments: ["Efficiency V", "Fortune III", "Unbreaking III", "Mending"],
      count: 1,
      icon: "⛏️",
      rarity: "legendary"
    },
    {
      id: "bow",
      name: "Power Bow",
      nameAr: "قوس القوة الخارقة",
      category: "weapon",
      enchantments: ["Power V", "Flame", "Punch II", "Unbreaking III", "Infinity"],
      count: 1,
      icon: "🏹",
      rarity: "legendary"
    },
    {
      id: "totem",
      name: "Totem of Undying",
      nameAr: "توتيم الخلود (توتيمات نجاة)",
      category: "consumable",
      enchantments: ["Life Saver"],
      count: 6,
      icon: "🗿",
      rarity: "mythic"
    },
    {
      id: "gapples",
      name: "Enchanted Golden Apples",
      nameAr: "جابل نوتش مطورة (Gapples)",
      category: "consumable",
      enchantments: ["Regeneration V", "Resistance II", "Fire Resistance I", "Absorption IV"],
      count: 32,
      icon: "🍏",
      rarity: "mythic"
    },
    {
      id: "pearls",
      name: "Ender Pearls",
      nameAr: "إندر بيرل للتنقل السريع",
      category: "consumable",
      enchantments: ["Instant Teleport"],
      count: 16,
      icon: "🔮",
      rarity: "epic"
    },
    {
      id: "arrows",
      name: "Tipped Arrows (Harming II)",
      nameAr: "أسهم ضرر فوري II",
      category: "weapon",
      enchantments: ["Instant Damage II"],
      count: 64,
      icon: "🎯",
      rarity: "epic"
    }
  ]
};
