import { useState } from 'react';
import { 
  ExternalLink, 
  Copy, 
  Check, 
  Ticket, 
  Sparkles, 
  Clock, 
  ShieldAlert,
  HelpCircle,
  Bell
} from 'lucide-react';
import { FULL_NETHERITE_KIT, SERVER_DATA } from '../data/mockData';
import { MainTabKey } from '../types';

interface BotHtmlConsoleProps {
  activeOption: MainTabKey;
  onOpenTicket: () => void;
}

export default function BotHtmlConsole({
  activeOption,
  onOpenTicket
}: BotHtmlConsoleProps) {
  const [copiedDiscord, setCopiedDiscord] = useState(false);
  const [copiedKitCode, setCopiedKitCode] = useState(false);
  const [selectedKitFilter, setSelectedKitFilter] = useState<'all' | 'armor' | 'weapon' | 'consumable'>('all');
  const [notified, setNotified] = useState(false);

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText(SERVER_DATA.discordUrl);
    setCopiedDiscord(true);
    setTimeout(() => setCopiedDiscord(false), 2500);
  };

  const handleCopyKitTicketCode = () => {
    const ticketMsg = `سلام عليكم، أريد شراء [كيت فول نذر رايت] بقيمة 1M كريدت في سيرفر Power SMP. كود الطلب: #POWER-KIT-NETHERITE-1M`;
    navigator.clipboard.writeText(ticketMsg);
    setCopiedKitCode(true);
    setTimeout(() => setCopiedKitCode(false), 3000);
  };

  const filteredItems = FULL_NETHERITE_KIT.items.filter(item => {
    if (selectedKitFilter === 'all') return true;
    if (selectedKitFilter === 'armor') return item.category === 'armor';
    if (selectedKitFilter === 'weapon') return item.category === 'weapon' || item.category === 'tool';
    if (selectedKitFilter === 'consumable') return item.category === 'consumable';
    return true;
  });

  return (
    <section id="bot-html-section" className="py-4 px-4 z-10 relative">
      <div className="max-w-4xl mx-auto">
        {/* Dynamic Display Panel depending on active button */}
        <div className="rounded-3xl p-6 sm:p-8 bg-[#111322]/85 border border-purple-500/30 backdrop-blur-xl shadow-2xl relative overflow-hidden text-right">

          {/* TAB 1: DISCORD */}
          {activeOption === 'discord' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-l from-[#5865F2]/20 to-[#181a33] border border-[#5865F2]/50">
                <div className="flex items-center gap-4 text-right">
                  <div className="w-14 h-14 rounded-2xl bg-[#5865F2] flex items-center justify-center text-3xl shadow-lg shadow-[#5865F2]/40 shrink-0">
                    💬
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">مجتمع وسيرفر الديسكورد الرسمي</h3>
                    <p className="text-xs sm:text-sm text-zinc-300 mt-0.5">
                      انضم إلينا الآن للفعاليات، الجيف أوايات، الدعم الفني، وفتح التذاكر!
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                  <a
                    href={SERVER_DATA.discordUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#5865F2] hover:bg-[#4752c4] text-white font-bold text-sm shadow-lg shadow-[#5865F2]/30 transition-all hover:scale-105 active:scale-95"
                  >
                    <span>دخول الديسكورد</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={handleCopyDiscord}
                    className="flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-sm font-semibold transition-all border border-zinc-700"
                  >
                    {copiedDiscord ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedDiscord ? 'تم النسخ!' : 'نسخ الرابط'}</span>
                  </button>
                </div>
              </div>

              {/* Discord Link Direct Box */}
              <div className="p-4 rounded-xl bg-black/40 border border-zinc-800 flex items-center justify-between font-mono text-sm">
                <span className="text-purple-300 select-all">{SERVER_DATA.discordUrl}</span>
                <span className="text-xs text-zinc-500 font-sans">رابط دائم</span>
              </div>
            </div>
          )}

          {/* TAB 2: FULL NETHERITE KIT */}
          {activeOption === 'kit' && (
            <div className="space-y-6">
              {/* Kit Banner Header */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-950/60 via-purple-900/40 to-pink-950/50 border border-purple-500/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-purple-600/30 border border-purple-400/50 flex items-center justify-center text-4xl shadow-inner shrink-0">
                    ⚔️
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                        {FULL_NETHERITE_KIT.badge}
                      </span>
                      <h3 className="text-2xl font-black text-white font-gaming">
                        {FULL_NETHERITE_KIT.nameAr}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-300 mt-1 max-w-xl">
                      {FULL_NETHERITE_KIT.descriptionAr}
                    </p>
                  </div>
                </div>

                {/* Pricing & Ticket Action */}
                <div className="flex flex-col items-center sm:items-end gap-2 shrink-0 w-full md:w-auto">
                  <div className="text-center sm:text-right">
                    <span className="text-xs text-zinc-400">السعر الرسمي:</span>
                    <div className="text-2xl sm:text-3xl font-black text-amber-400 font-gaming">
                      {FULL_NETHERITE_KIT.priceFormatted}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 w-full">
                    <button
                      onClick={onOpenTicket}
                      className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-sm shadow-lg shadow-purple-600/30 transition-all active:scale-95"
                    >
                      <Ticket className="w-4 h-4" />
                      <span>فتح تكت شراء الكيت</span>
                    </button>
                    <button
                      onClick={handleCopyKitTicketCode}
                      title="نسخ رسالة التكت"
                      className="p-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-zinc-700"
                    >
                      {copiedKitCode ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Kit Filters */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800/80 pb-3">
                <div className="text-xs text-zinc-400 font-bold">محتويات البكج الكاملة ({FULL_NETHERITE_KIT.items.length} عنصر أسطوري):</div>
                <div className="flex items-center gap-1.5 text-xs">
                  <button
                    onClick={() => setSelectedKitFilter('all')}
                    className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                      selectedKitFilter === 'all' ? 'bg-purple-600 text-white' : 'bg-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    الكل
                  </button>
                  <button
                    onClick={() => setSelectedKitFilter('armor')}
                    className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                      selectedKitFilter === 'armor' ? 'bg-purple-600 text-white' : 'bg-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    الدروع
                  </button>
                  <button
                    onClick={() => setSelectedKitFilter('weapon')}
                    className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                      selectedKitFilter === 'weapon' ? 'bg-purple-600 text-white' : 'bg-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    الأسلحة
                  </button>
                  <button
                    onClick={() => setSelectedKitFilter('consumable')}
                    className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                      selectedKitFilter === 'consumable' ? 'bg-purple-600 text-white' : 'bg-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    العناصر
                  </button>
                </div>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {filteredItems.map(item => (
                  <div 
                    key={item.id}
                    className="p-3.5 rounded-xl bg-black/30 border border-purple-500/20 hover:border-purple-500/50 transition-all"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800">
                        x{item.count}
                      </span>
                    </div>
                    <div className="font-bold text-white text-sm">{item.nameAr}</div>
                    <div className="text-[11px] text-zinc-400 font-mono">{item.name}</div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {item.enchantments.map((ench, idx) => (
                        <span key={idx} className="text-[10px] bg-purple-900/40 text-purple-300 px-1.5 py-0.5 rounded">
                          {ench}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: RANK SOON */}
          {activeOption === 'rank' && (
            <div className="text-center py-12 px-4 space-y-5">
              <div className="relative inline-block">
                <div className="w-24 h-24 rounded-3xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-5xl mx-auto shadow-2xl shadow-amber-500/20 animate-bounce">
                  👑
                </div>
                <span className="absolute -top-1 -right-1 text-2xl">✨</span>
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="text-3xl font-black text-amber-300 font-gaming">
                  نظام الرتب (Rank System)
                </h3>
                <div className="inline-block px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/50 text-amber-300 text-lg font-bold">
                  SOON 👋🏻
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed pt-2">
                  جاري تجهيز وتطوير متجر الرتب الحصرية والمميزات الخارقة لسيرفر Power SMP. سيتم الإعلان عنها في الديسكورد فور إطلاقها!
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setNotified(!notified)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm shadow-lg shadow-amber-500/30 transition-all"
                >
                  <Bell className="w-4 h-4" />
                  <span>{notified ? 'تم تفعيل التنبيه بنجاح! 🔔' : 'أعلمني فور إطلاق الرتب 🔔'}</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 4: SERVER INFO (IP & PORT SOON) */}
          {activeOption === 'serverInfo' && (
            <div className="space-y-6 text-center py-8">
              <div className="w-20 h-20 rounded-3xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-4xl mx-auto shadow-xl shadow-cyan-500/20">
                🚀
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="text-2xl sm:text-3xl font-black text-cyan-300 font-gaming">
                  معلومات الاتصال بالسيرفر (IP & Port)
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400">
                  السيرفر قيد التحضير والتجهيز النهائي للافتتاح الأقوى!
                </p>
              </div>

              {/* Display Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto text-right">
                <div className="p-4 rounded-2xl bg-black/40 border border-purple-500/30">
                  <div className="text-xs text-purple-300 font-bold mb-1">💻 Java Edition (PC IP)</div>
                  <div className="text-xl font-bold font-mono text-amber-300 flex items-center justify-between">
                    <span>SOON 👋🏻</span>
                    <span className="text-xs font-sans text-zinc-500">قريباً</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-black/40 border border-cyan-500/30">
                  <div className="text-xs text-cyan-300 font-bold mb-1">📱 Bedrock (Port & IP)</div>
                  <div className="text-xl font-bold font-mono text-amber-300 flex items-center justify-between">
                    <span>SOON 👋🏻</span>
                    <span className="text-xs font-sans text-zinc-500">قريباً</span>
                  </div>
                </div>
              </div>

              {/* Call to action */}
              <div className="pt-2">
                <a
                  href={SERVER_DATA.discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#5865F2] hover:bg-[#4752c4] text-white font-bold text-sm shadow-lg shadow-[#5865F2]/40 transition-all"
                >
                  <span>ترقب موعد فتح السيرفر في الديسكورد</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
