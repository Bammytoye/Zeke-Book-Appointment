export default function Toast({ toast }) {
    if (!toast) return null;
    const cfgs = {
        success: "bg-slate-900 border-emerald-500/30 text-emerald-300",
        error: "bg-slate-900 border-red-500/30 text-red-300",
        info: "bg-slate-900 border-indigo-500/30 text-indigo-300",
    };
    const icons = { success: "✓", error: "⚠", info: "ℹ" };
    return (
        <div className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl border shadow-2xl shadow-black/50
      animate-[fadeUp_0.3s_ease] ${cfgs[toast.type] || cfgs.info}`}>
            <span className="text-base font-bold">{icons[toast.type]}</span>
            <span className="text-sm font-medium text-slate-200">{toast.message}</span>
        </div>
    );
}