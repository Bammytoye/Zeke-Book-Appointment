export default function Topbar({ filter, onFilter, counts, onLogout }) {
    const nav = [
        { key: "all", label: "All", count: counts.all, icon: "📊" },
        { key: "pending", label: "Pending", count: counts.pending, icon: "⏳" },
        { key: "approved", label: "Approved", count: counts.approved, icon: "✅" },
        { key: "cancelled", label: "Cancelled", count: counts.cancelled, icon: "❌" },
    ];

    return (
        <div className="sticky top-0 z-50 bg-gradient-to-r from-[#020617]/95 via-slate-900/95 to-[#020617]/95 backdrop-blur-xl border-b border-slate-800/50 shadow-lg shadow-black/20">
            {/* Top Section - Logo & Live Status */}
            <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4 border-b border-slate-800/30">
                <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                        <span className="text-lg sm:text-xl lg:text-2xl">🎫</span>
                    </div>
                    <div>
                        <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-100 tracking-tight bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
                            Admin Dashboard
                        </h1>
                        <p className="text-slate-400 text-[10px] sm:text-xs lg:text-sm mt-0.5 font-medium">
                            {new Date().toLocaleDateString("en-US", {
                                weekday: "long",
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                            })}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                    <div className="flex items-center gap-1.5 sm:gap-2 bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-slate-700/50 rounded-full px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 shadow-lg shadow-emerald-500/5">
                        <div className="relative">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <div className="absolute inset-0 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-ping opacity-75" />
                        </div>
                        <span className="text-[10px] sm:text-xs lg:text-sm text-slate-300 font-semibold tracking-wide hidden sm:inline">Live</span>
                    </div>

                    <button
                        onClick={onLogout}
                        className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-red-400 hover:text-red-300 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 hover:border-red-500/40 rounded-full transition-all font-medium"
                    >
                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <span className="hidden sm:inline">Sign Out</span>
                    </button>
                </div>
            </div>

            {/* Bottom Section - Navigation Tabs */}
            <div className="px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
                <nav className="flex items-center justify-center gap-1 sm:gap-2 overflow-x-auto scrollbar-hide">
                    {nav.map((n) => (
                        <button
                            key={n.key}
                            onClick={() => onFilter(n.key)}
                            className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 rounded-xl transition-all whitespace-nowrap text-xs sm:text-sm lg:text-base font-medium ${
                                filter === n.key
                                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30"
                                    : "bg-slate-800/40 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-slate-700/30"
                            }`}
                        >
                            <span className="text-base sm:text-lg">{n.icon}</span>
                            <span className="font-semibold">{n.label}</span>
                            <span className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold ${
                                filter === n.key
                                    ? "bg-white/20"
                                    : "bg-slate-700/50"
                            }`}>
                                {n.count}
                            </span>
                        </button>
                    ))}
                </nav>
            </div>
        </div>
    );
}