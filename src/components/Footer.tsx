import { Zap, ExternalLink } from 'lucide-react';
import { SERVER_DATA } from '../data/mockData';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-purple-500/20 bg-[#0a0b12]/90 backdrop-blur-md py-8 px-4 z-10 relative">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-right">
        {/* Brand */}
        <div>
          <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
            <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-white">
              <Zap className="w-4 h-4" />
            </div>
            <span className="text-xl font-black font-gaming text-white tracking-wider">
              POWER SMP
            </span>
          </div>
          <p className="text-xs text-zinc-400">
            سيرفر السرفايفل التنافسي الأقوى — الافتتاح قريباً 👋🏻
          </p>
        </div>

        {/* Links & Status */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-zinc-300">
          <a
            href={SERVER_DATA.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-purple-400 transition-colors"
          >
            <span>💬 سيرفر الديسكورد الرسمي</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <span className="text-zinc-600">•</span>
          <span className="text-amber-300 font-mono">IP: SOON 👋🏻</span>
          <span className="text-zinc-600">•</span>
          <span className="text-amber-300 font-mono">Port: SOON 👋🏻</span>
        </div>

        {/* Copyright */}
        <div className="text-[11px] text-zinc-500">
          Power SMP © {new Date().getFullYear()} — All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
