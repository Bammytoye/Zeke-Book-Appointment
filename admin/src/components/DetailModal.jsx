import { useState } from "react";
import { fmtDate, fmtTime, svcLabel } from "../lib/utils";
import Avatar from "./Avatar";
import StatusBadge from "./StatusBadge";

export default function DetailModal({ booking, onClose, onUpdate, filter }) {
    const [busy, setBusy] = useState(null);

    const act = async (status) => {
        setBusy(status);
        await onUpdate(booking._id, status);
        setBusy(null);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 lg:p-6"
            style={{ background: "rgba(2,6,23,0.85)", backdropFilter: "blur(8px)" }}
            onClick={(e) => e.target === e.currentTarget && onClose()}>
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg bg-[#0f172a] border border-slate-700/60 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden animate-[scaleIn_0.2s_ease]">

                <div className={`h-1 sm:h-1.5 w-full ${booking.status === "approved" ? "bg-gradient-to-r from-emerald-500 to-teal-500"
                    : booking.status === "cancelled" ? "bg-gradient-to-r from-red-500 to-rose-500"
                        : "bg-gradient-to-r from-amber-500 to-orange-500"
                    }`} />

                <div className="flex items-center justify-between px-4 sm:px-6 lg:px-7 pt-4 sm:pt-5 lg:pt-6 pb-3 sm:pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                        <Avatar name={booking.name} />
                        <div className="min-w-0 flex-1">
                            <p className="font-bold text-slate-100 text-sm sm:text-base truncate">{booking.name}</p>
                            <p className="text-xs sm:text-xs text-slate-500 truncate">{booking.email}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-2">
                        <StatusBadge status={booking.status} />
                        <button onClick={onClose}
                            className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-500 hover:text-slate-200 transition-all text-lg sm:text-xl leading-none">
                            ×
                        </button>
                    </div>
                </div>

                <div className="px-4 sm:px-6 lg:px-7 py-4 sm:py-5 space-y-2 sm:space-y-3 max-h-[50vh] sm:max-h-none overflow-y-auto">
                    {[
                        ["Service", svcLabel(booking.service)],
                        ["Date", fmtDate(booking.date)],
                        ["Time", fmtTime(booking.time)],
                        ["Phone", booking.phone || "—"],
                        ["Notes", booking.notes || "—"],
                        ["Booked on", fmtDate(booking.createdAt)],
                    ].map(([k, v]) => (
                        <div key={k} className="flex flex-col sm:flex-row sm:justify-between sm:items-start py-2 sm:py-2.5 border-b border-slate-800/60 last:border-0 gap-1 sm:gap-4">
                            <span className="text-xs font-bold text-slate-600 uppercase tracking-widest shrink-0">{k}</span>
                            <span className="text-xs sm:text-sm text-slate-200 sm:text-right leading-relaxed break-words">{v}</span>
                        </div>
                    ))}
                </div>

                {filter === "all" && (
                    <div className="px-4 sm:px-6 lg:px-7 pb-4 sm:pb-6 lg:pb-7 flex flex-col sm:flex-row gap-2 sm:gap-3">
                        {booking.status !== "approved" && (
                            <button onClick={() => act("approved")} disabled={!!busy}
                                className="flex-1 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs sm:text-sm font-bold
                    hover:bg-emerald-500/20 transition-all disabled:opacity-40 flex items-center justify-center gap-2">
                                {busy === "approved" ? <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 border-2 border-emerald-400/30 border-t-emerald-400 rounded-full animate-spin" /> : "✓"}
                                Approve
                            </button>
                        )}
                        {booking.status !== "cancelled" && (
                            <button onClick={() => act("cancelled")} disabled={!!busy}
                                className="flex-1 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-red-500/10 text-red-400 border border-red-500/20 text-xs sm:text-sm font-bold
                    hover:bg-red-500/20 transition-all disabled:opacity-40 flex items-center justify-center gap-2">
                                {busy === "cancelled" ? <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 border-2 border-red-400/30 border-t-red-400 rounded-full animate-spin" /> : "✕"}
                                Cancel
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}