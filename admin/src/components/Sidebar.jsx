// Sidebar.jsx
export default function Sidebar({ filter, onFilter, counts, onLogout }) {
    const nav = [
        { key: "all", label: "All Bookings", count: counts.all, icon: "📊" },
        { key: "pending", label: "Pending", count: counts.pending, icon: "⏳" },
        { key: "approved", label: "Approved", count: counts.approved, icon: "✅" },
        { key: "cancelled", label: "Cancelled", count: counts.cancelled, icon: "❌" },
    ];

    return (
        <aside className="fixed left-0 top-0 bottom-0 w-64 sm:w-64 lg:w-72 bg-gradient-to-b from-[#0a0f1e] via-slate-950 to-[#0a0f1e] border-r border-slate-800/50 p-4 sm:p-5 lg:p-6 flex flex-col shadow-2xl z-30">
            {/* Logo Section */}
            <div className="mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-slate-800/50">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                        <span className="text-xl sm:text-2xl">🎫</span>
                    </div>
                    <div>
                        <h2 className="text-slate-100 text-lg sm:text-xl font-bold tracking-tight">Admin Portal</h2>
                        <p className="text-slate-500 text-[10px] sm:text-xs">Management System</p>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 flex flex-col gap-2">
                <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2 px-3">
                    Filters
                </p>
                {nav.map((n) => (
                    <button
                        key={n.key}
                        onClick={() => onFilter(n.key)}
                        className={`group w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl transition-all flex items-center justify-between ${
                            filter === n.key
                                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30"
                                : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-100"
                        }`}
                    >
                        <div className="flex items-center gap-2.5 sm:gap-3">
                            <span className="text-lg sm:text-xl">{n.icon}</span>
                            <span className="font-medium text-sm sm:text-base">{n.label}</span>
                        </div>
                        <span
                            className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-xs font-bold transition-all ${
                                filter === n.key
                                    ? "bg-white/20 text-white"
                                    : "bg-slate-800/60 text-slate-400 group-hover:bg-slate-700/60"
                            }`}
                        >
                            {n.count}
                        </span>
                    </button>
                ))}
            </nav>

            {/* User Section */}
            <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-slate-800/50">
                <div className="flex items-center gap-3 mb-3 sm:mb-4 px-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-lg">
                        A
                    </div>
                    <div className="flex-1">
                        <p className="text-slate-200 text-sm sm:text-base font-semibold">Admin User</p>
                        <p className="text-slate-500 text-[10px] sm:text-xs">admin@portal.com</p>
                    </div>
                </div>
                
                <button
                    onClick={onLogout}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-red-400 hover:text-red-300 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 hover:border-red-500/40 rounded-xl transition-all font-medium flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Sign Out
                </button>
            </div>
        </aside>
    );
}