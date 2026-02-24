export default function Topbar() {
    return (
        <div className="sticky top-0 z-20 flex items-center justify-between px-8 py-4 bg-[#020617]/90 backdrop-blur-xl border-b border-slate-800/50">
            <div>
                <h1 className="text-2xl font-bold text-slate-100 tracking-tight">
                    Dashboard
                </h1>
                <p className="text-slate-600 text-xs mt-0.5">
                    {new Date().toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                    })}
                </p>
            </div>

            <div className="flex items-center gap-2 bg-slate-900 border border-slate-700/50 rounded-full px-4 py-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-slate-400 font-medium">Live</span>
            </div>
        </div>
    );
}