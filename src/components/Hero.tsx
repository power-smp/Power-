import { MessageSquare, Shield, Sparkles, ExternalLink } from 'lucide-react';
import { SERVER_DATA } from '../data/mockData';
import { MainTabKey } from '../types';

interface HeroProps {
  activeTab: MainTabKey;
  onSelectTab: (tab: MainTabKey) => void;
}

export default function Hero({ activeTab, onSelectTab }: HeroProps) {
  return (
    <section className="relative pt-6 pb-6 px-4 z-10">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/70 border border-purple-500/40 text-purple-200 text-xs font-semibold mb-4 shadow-lg">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping inline-block" />
          <span className="text-amber-300 font-bold font-mono">COMING SOON</span>
          <span className="text-zinc-500">|</span>
          <span>الافتتاح الرسمي قريباً 👋🏻</span>
        </div>

        {/* Server Grand Title */}
        <h1 
          id="hero-server-name"
          className="text-5xl sm:text-7xl font-black tracking-tight font-gaming uppercase drop-shadow-[0_0_35px_rgba(168,85,247,0.4)]"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-purple-100 to-purple-400">
            POWER
          </span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300">
            SMP
          </span>
        </h1>

        <p className="mt-3 text-sm sm:text-base text-zinc-300 max-w-xl mx-auto font-medium leading-relaxed">
          عالم السرفايفل الأقوى! اختر أحد الأزرار التفاعلية أدناه للوصول المباشر إلى الديسكورد، متجر الكيت، الرتب، ومعلومات السيرفر.
        </p>

        {/* Interactive Main Buttons (Tabs) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mt-6">
          {/* Button 1: Discord */}
          <button
            id="tab-btn-discord"
            onClick={() => onSelectTab('discord')}
            className={`p-3.5 rounded-2xl font-bold text-sm sm:text-base transition-all flex flex-col items-center justify-center gap-1.5 border ${
              activeTab === 'discord'
                ? 'bg-[#5865F2] text-white border-[#5865F2] shadow-xl shadow-[#5865F2]/40 scale-105'
                : 'bg-[#141525]/80 hover:bg-[#1f223f] border-purple-500/20 text-zinc-300'
            }`}
          >
            <span className="text-2xl">💬</span>
            <span>ديسكورد (Discord)</span>
          </button>

          {/* Button 2: Kit */}
          <button
            id="tab-btn-kit"
            onClick={() => onSelectTab('kit')}
            className={`p-3.5 rounded-2xl font-bold text-sm sm:text-base transition-all flex flex-col items-center justify-center gap-1.5 border ${
              activeTab === 'kit'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white border-purple-400 shadow-xl shadow-purple-600/40 scale-105'
                : 'bg-[#141525]/80 hover:bg-[#1f223f] border-purple-500/20 text-zinc-300'
            }`}
          >
            <span className="text-2xl">⚔️</span>
            <span>الكيت (Kit)</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-400 text-black font-extrabold">1M كريدت</span>
          </button>

          {/* Button 3: Rank */}
          <button
            id="tab-btn-rank"
            onClick={() => onSelectTab('rank')}
            className={`p-3.5 rounded-2xl font-bold text-sm sm:text-base transition-all flex flex-col items-center justify-center gap-1.5 border ${
              activeTab === 'rank'
                ? 'bg-amber-500 text-black border-amber-400 shadow-xl shadow-amber-500/40 scale-105'
                : 'bg-[#141525]/80 hover:bg-[#1f223f] border-purple-500/20 text-zinc-300'
            }`}
          >
            <span className="text-2xl">👑</span>
            <span>الرتب (Rank)</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-black/40 text-amber-300 font-extrabold">SOON 👋🏻</span>
          </button>

          {/* Button 4: Server IP & Port */}
          <button
            id="tab-btn-server-info"
            onClick={() => onSelectTab('serverInfo')}
            className={`p-3.5 rounded-2xl font-bold text-sm sm:text-base transition-all flex flex-col items-center justify-center gap-1.5 border ${
              activeTab === 'serverInfo'
                ? 'bg-cyan-600 text-white border-cyan-400 shadow-xl shadow-cyan-600/40 scale-105'
                : 'bg-[#141525]/80 hover:bg-[#1f223f] border-purple-500/20 text-zinc-300'
            }`}
          >
            <span className="text-2xl">🚀</span>
            <span>الآيبي والبورت</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 font-extrabold">SOON 👋🏻</span>
          </button>
        </div>
      </div>
    </section>
  );
}
