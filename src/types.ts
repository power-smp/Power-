export interface ServerInfo {
  name: string;
  javaIp: string;
  bedrockIp: string;
  bedrockPort: string;
  onlinePlayers: string;
  statusText: string;
  version: string;
  discordUrl: string;
}

export interface KitItemDetail {
  id: string;
  name: string;
  nameAr: string;
  category: 'armor' | 'weapon' | 'tool' | 'consumable';
  enchantments: string[];
  count: number;
  icon: string;
  rarity: 'legendary' | 'mythic' | 'epic';
}

export interface Kit {
  id: string;
  name: string;
  nameAr: string;
  priceCredits: number;
  priceFormatted: string;
  descriptionAr: string;
  badge: string;
  items: KitItemDetail[];
}

export type MainTabKey = 'discord' | 'kit' | 'rank' | 'serverInfo';

export interface BotTicketRequest {
  id: string;
  playerName: string;
  discordTag: string;
  kitName: string;
  priceCredits: number;
  notes?: string;
  timestamp: string;
  status: 'open' | 'pending' | 'completed';
}
