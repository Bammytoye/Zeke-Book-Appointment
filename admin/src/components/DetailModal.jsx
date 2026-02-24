import { useState } from "react";
import { fmtDate, fmtTime, svcLabel } from "../lib/utils";
import Avatar from "./Avatar";
import StatusBadge from "./StatusBadge";

export default function DetailModal({ booking, onClose, onUpdate }) {
    const [busy, setBusy] = useState(null);

    const act = async (status) => {
        setBusy(status);
        await onUpdate(booking._id, status);
        setBusy(null);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(2,6,23,0.85)", backdropFilter: "blur(8px)" }}
            onClick={(e) => e.target === e.currentTarget && onClose()}>
            <div className="w-full max-w-md bg-[#0f172a] border border-slate-700/60 rounded-3xl shadow-2xl overflow-hidden animate-[scaleIn_0.2s_ease]">

                <div className={`h-1.5 w-full ${booking.status === "approved" ? "bg-gradient-to-r from-emerald-500 to-teal-500"
                        : booking.status === "cancelled" ? "bg-gradient-to-r from-red-500 to-rose-500"
                            : "bg-gradient-to-r from-amber-500 to-orange-500"
                    }`} />

                <div className="flex items-center justify-between px-7 pt-6 pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-3">
                        <Avatar name={booking.name} />
                        <div>
                            <p className="font-bold text-slate-100">{booking.name}</p>
                            <p className="text-xs text-slate-500">{booking.email}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <StatusBadge status={booking.status} />
                        <button onClick={onClose}
                            className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-500 hover:text-slate-200 transition-all text-lg leading-none">
                            ×
                        </button>
                    </div>
                </div>

                <div className="px-7 py-5 space-y-3">
                    {[
                        ["Service", svcLabel(booking.service)],
                        ["Date", fmtDate(booking.date)],
                        ["Time", fmtTime(booking.time)],
                        ["Phone", booking.phone || "—"],
                        ["Notes", booking.notes || "—"],
                        ["Booked on", fmtDate(booking.createdAt)],
                    ].map(([k, v]) => (
                        <div key={k} className="flex justify-between items-start py-2.5 border-b border-slate-800/60 last:border-0 gap-4">
                            <span className="text-xs font-bold text-slate-600 uppercase tracking-widest pt-0.5 shrink-0">{k}</span>
                            <span className="text-sm text-slate-200 text-right leading-relaxed">{v}</span>
                        </div>
                    ))}
                </div>

                <div className="px-7 pb-7 flex gap-3">
                    {booking.status !== "approved" && (
                        <button onClick={() => act("approved")} disabled={!!busy}
                            className="flex-1 py-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-sm font-bold
                hover:bg-emerald-500/20 transition-all disabled:opacity-40 flex items-center justify-center gap-2">
                            {busy === "approved" ? <span className="w-4 h-4 border-2 border-emerald-400/30 border-t-emerald-400 rounded-full animate-spin" /> : "✓"}
                            Approve
                        </button>
                    )}
                    {booking.status !== "cancelled" && (
                        <button onClick={() => act("cancelled")} disabled={!!busy}
                            className="flex-1 py-3 rounded-2xl bg-red-500/10 text-red-400 border border-red-500/20 text-sm font-bold
                hover:bg-red-500/20 transition-all disabled:opacity-40 flex items-center justify-center gap-2">
                            {busy === "cancelled" ? <span className="w-4 h-4 border-2 border-red-400/30 border-t-red-400 rounded-full animate-spin" /> : "✕"}
                            Cancel
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}