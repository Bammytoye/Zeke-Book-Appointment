import { svcLabel, svcIcon, fmtDate, fmtTime } from "../lib/utils.js";

export default function BookingSummaryCard({ service, date, time }) {
    const items = [
        { label: "Service", value: svcLabel(service), icon: svcIcon(service) },
        { label: "Date", value: fmtDate(date), icon: "📅" },
        { label: "Time", value: fmtTime(time), icon: "🕐" },
    ];

    return (
        <div className="bg-gradient-to-br from-violet-500/10 to-fuchsia-500/5 border border-violet-500/20 rounded-2xl p-5 mb-6">
            <p className="text-xs font-bold text-violet-400 uppercase tracking-widest mb-4">Your booking summary</p>
            <div className="space-y-3">
                {items.map(({ label, value, icon }) => (
                    <div key={label} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-base shrink-0">{icon}</div>
                        <div>
                            <p className="text-xs text-white/30 font-medium">{label}</p>
                            <p className="text-sm font-semibold text-white">{value}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}