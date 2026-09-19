import { useState } from 'react';
import { 
  X, 
  Ticket, 
  Coins, 
  ShieldCheck, 
  ExternalLink, 
  Copy, 
  Check, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { SERVER_DATA, FULL_NETHERITE_KIT } from '../data/mockData';

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TicketModal({ isOpen, onClose }: TicketModalProps) {
  const [ign, setIgn] = useState('');
  const [discordTag, setDiscordTag] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [copiedMessage, setCopiedMessage] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ign.trim()) return;

    const generatedId = `PWR-${Math.floor(1000 + Math.random() * 9000)}`;
    setTicketId(generatedId);
    setSubmitted(true);
  };

  const ticketContent = `🎫 [طلب تذكرة شراء كيت فول نذر رايت]
------------------------------------
• رقم التذكرة: #${ticketId}
• اسم اللاعب (IGN): ${ign}
• يوزر الديسكورد: ${discordTag || 'غير محدد'}
• الكيت المطلوب: فول نذر رايت (Full Netherite Kit)
• السعر: 1,000,000 كريدت (1M)
• ملاحظات: ${notes || 'جاهز للاستلام والتسليم فوري'}
------------------------------------
سيرفر Power SMP - رابط الديسكورد: ${SERVER_DATA.discordUrl}`;

  const copyTicketMessage = () => {
    navigator.clipboard.writeText(ticketContent);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2500);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setIgn('');
    setDiscordTag('');
    setNotes('');
    onClose();
  };

  return (
    <div 
      id="ticket-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
    >
      <div 
        id="ticket-modal-card"
        className="relative w-full max-w-lg rounded-3xl bg-[#121324] border border-purple-500/40 p-6 sm:p-8 shadow-2xl shadow-purple-900/40 text-right overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute left-4 top-4 p-2 rounded-xl bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-2xl">
                🎫
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  فتح تذكرة شراء كيت فول نذر رايت
                </h3>
                <span className="text-xs text-amber-400 font-medium">
                  السعر: 1,000,000 كريدت (1M)
                </span>
              </div>
            </div>

            <p className="text-xs text-zinc-300 mb-5 leading-relaxed">
              قم بتعبئة بيانات حسابك لإنشاء التيكت، وسيتم فتح تذكرتك والتواصل معك في ديسكورد Power SMP لتسليم الكيت داخل الخادم.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                  اسمك في لعبة ماينكرافت (Minecraft Username / IGN) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="مثال: Power_Master"
                  value={ign}
                  onChange={e => setIgn(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/90 border border-zinc-700 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                  حساب الديسكورد (Discord Tag / Username)
                </label>
                <input
                  type="text"
                  placeholder="مثال: user#0000 أو @username"
                  value={discordTag}
                  onChange={e => setDiscordTag(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/90 border border-zinc-700 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                  ملاحظات إضافية أو وقت التواجد (اختياري)
                </label>
                <textarea
                  rows={2}
                  placeholder="متواجد يومياً من الساعة 6 مساءً..."
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl bg-zinc-900/90 border border-zinc-700 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-purple-500 resize-none"
                />
              </div>

              {/* Price summary notice */}
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Coins className="w-4 h-4 text-amber-400" />
                  <span className="text-xs text-amber-200">الرصيد المطلوب:</span>
                </div>
                <span className="text-sm font-bold font-gaming text-amber-400">
                  1,000,000 كريدت (1M)
                </span>
              </div>

              <div className="pt-2 flex items-center gap-2">
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-sm font-bold shadow-lg shadow-purple-600/30 transition-all active:scale-95"
                >
                  <Ticket className="w-4 h-4" />
                  <span>تأكيد وإنشاء التيكت الآن</span>
                </button>

                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-4 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-sm font-semibold transition-colors"
                >
                  إلغاء
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-2 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500/50 flex items-center justify-center text-3xl mx-auto shadow-lg shadow-emerald-500/20">
              ✅
            </div>

            <div>
              <h3 className="text-2xl font-black text-white">
                تم إنشاء تذكرتك بنجاح!
              </h3>
              <div className="inline-block mt-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 font-mono text-sm font-bold">
                تذكرة رقم: #{ticketId}
              </div>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed max-w-sm mx-auto">
              تم تجهيز تفاصيل طلبك لشراء كيت فول نذر رايت بقيمة 1M كريدت. انسخ رسالة التيكت وانضم لسيرفر الديسكورد لتسليم الكيت فوراً.
            </p>

            {/* Ready-to-copy Ticket text */}
            <div className="p-3.5 rounded-xl bg-black/60 border border-zinc-800 text-right text-xs font-mono text-zinc-300 max-h-32 overflow-y-auto whitespace-pre-wrap">
              {ticketContent}
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
              <button
                onClick={copyTicketMessage}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold transition-all border border-zinc-700"
              >
                {copiedMessage ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300 font-bold">تم نسخ رسالة التيكت!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-purple-400" />
                    <span>نسخ تفاصيل التيكت</span>
                  </>
                )}
              </button>

              <a
                href={SERVER_DATA.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#5865F2] hover:bg-[#4752C4] text-white text-xs font-bold shadow-lg shadow-[#5865F2]/30 transition-all hover:scale-105 active:scale-95"
              >
                <span>الانتقال لروم التذاكر بالديسكورد</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={handleResetAndClose}
              className="text-xs text-zinc-400 hover:text-white pt-2 block mx-auto underline"
            >
              إغلاق النافذة
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
