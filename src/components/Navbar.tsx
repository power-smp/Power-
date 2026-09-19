import { Zap } from 'lucide-react';
import { SERVER_DATA } from '../data/mockData';
import { MainTabKey } from '../types';

interface NavbarProps {
  activeTab: MainTabKey;
  onSelectTab: (tab: MainTabKey) => void;
}

export default function Navbar({ onSelectTab, activeTab }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full px-4 py-3 backdrop-blur-md bg-[#0d0e17]/85 border-b border-purple-500/20 shadow-lg shadow-purple-950/20">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        {/* Logo & Brand */}
        <div 
          onClick={() => onSelectTab('discord')}
          className="flex items-center gap-3 cursor-pointer group"
          id="navbar-brand-logo"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-700 p-0.5 shadow-lg shadow-purple-600/30 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#10111e] rounded-[10px] flex items-center justify-center">
              <Zap className="w-5 h-5 text-purple-400 group-hover:text-cyan-300 transition-colors" />
            </div>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
            </span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-cyan-300 font-gaming">
                POWER SMP
              </h1>
              <span className="px-1.5 py-0.5 text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded">
                SOON 👋🏻
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-amber-400 inline-block animate-pulse"></span>
              <span>السيرفر يفتح قريباً 👋🏻</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
          <button
            id="nav-btn-discord"
            onClick={() => onSelectTab('discord')}
            className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'discord'
                ? 'bg-[#5865F2] text-white shadow-md shadow-[#5865F2]/40'
                : 'text-zinc-300 hover:text-white hover:bg-zinc-800/60'
            }`}
          >
            <span>💬 ديسكورد</span>
          </button>

          <button
            id="nav-btn-kit"
            onClick={() => onSelectTab('kit')}
            className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'kit'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/40'
                : 'text-zinc-300 hover:text-white hover:bg-zinc-800/60'
            }`}
          >
            <span>⚔️ الكيت</span>
            <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1 py-0.2 rounded font-bold border border-amber-500/30">1M</span>
          </button>

          <button
            id="nav-btn-rank"
            onClick={() => onSelectTab('rank')}
            className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'rank'
                ? 'bg-amber-500 text-black shadow-md shadow-amber-500/40'
                : 'text-zinc-300 hover:text-white hover:bg-zinc-800/60'
            }`}
          >
            <span>👑 الرتب</span>
            <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1 py-0.2 rounded font-bold">SOON</span>
          </button>

          <button
            id="nav-btn-server-info"
            onClick={() => onSelectTab('serverInfo')}
            className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'serverInfo'
                ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/40'
                : 'text-zinc-300 hover:text-white hover:bg-zinc-800/60'
            }`}
          >
            <span>🚀 الآيبي</span>
            <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-1 py-0.2 rounded font-bold">SOON</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
