export default function Topbar({ filter, onFilter, counts, onLogout }) {
    const nav = [
        { key: "all", label: "All", count: counts.all, icon: "📊" },
        { key: "pending", label: "Pending", count: counts.pending, icon: "⏳" },
        { key: "approved", label: "Approved", count: counts.approved, icon: "✅" },
        { key: "cancelled", label: "Cancelled", count: counts.cancelled, icon: "❌" },
    ];

    return (
        <div className="sticky top-0 z-50 bg-gradient-to-r from-[#020617]/95 via-slate-900/95 to-[#020617]/95 backdrop-blur-xl border-b border-slate-800/50 shadow-lg shadow-black/20">
            <div className="flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-3.5 lg:py-4 border-b border-slate-800/30">
                {/* Left: Logo & Title */}
                <div className="flex items-center gap-2 sm:gap-3 md:gap-3.5 lg:gap-4 min-w-0 flex-1">
                    <button className="flex items-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-3.5 group cursor-pointer">
                        {/* Logo */}
                        <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl md:rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center font-black text-sm sm:text-base md:text-lg lg:text-xl shadow-lg shadow-violet-500/25 transition-all group-hover:scale-105 group-hover:shadow-violet-500/40 shrink-0">
                            S
                        </div>
                        
                        {/* Title & Date */}
                        <div className="min-w-0">
                            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-slate-100 tracking-tight bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent truncate">
                                Admin Dashboard
                            </h1>
                            <p className="text-slate-400 text-[10px] sm:text-xs md:text-xs lg:text-sm mt-0.5 font-medium hidden sm:block truncate">
                                {new Date().toLocaleDateString("en-US", {
                                    weekday: "long",
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric",
                                })}
                            </p>
                            {/* Mobile Date - Short format */}
                            <p className="text-slate-400 text-[9px] mt-0.5 font-medium sm:hidden">
                                {new Date().toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                    year: "2-digit"
                                })}
                            </p>
                        </div>
                    </button>
                </div>

                {/* Right: Status & Logout */}
                <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 shrink-0">
                    {/* Live Status Badge */}
                    <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-slate-700/50 rounded-full px-1.5 sm:px-2 md:px-3 lg:px-4 py-1 sm:py-1.5 md:py-1.5 lg:py-2 shadow-lg shadow-emerald-500/5">
                        <div className="relative">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <div className="absolute inset-0 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-ping opacity-75" />
                        </div>
                        <span className="text-[10px] sm:text-xs md:text-xs lg:text-sm text-slate-300 font-semibold tracking-wide hidden sm:inline">
                            Live
                        </span>
                    </div>

                    {/* Logout Button */}
                    <button
                        onClick={onLogout}
                        className="flex items-center gap-1 sm:gap-1.5 md:gap-2 px-2 sm:px-2.5 md:px-3 lg:px-4 py-1 sm:py-1.5 md:py-1.5 lg:py-2 text-[10px] sm:text-xs md:text-sm lg:text-sm text-red-400 hover:text-red-300 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 hover:border-red-500/40 rounded-full transition-all font-medium active:scale-95"
                    >
                        <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <span className="hidden sm:inline">Sign Out</span>
                        {/* Mobile icon only */}
                        <span className="sm:hidden">Exit</span>
                    </button>
                </div>
            </div>

            {/* Bottom Section - Filter Navigation Tabs */}
            <div className="px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-3">
                <nav className="flex items-center justify-start sm:justify-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-2 overflow-x-auto scrollbar-hide pb-1 sm:pb-0">
                    {nav.map((n) => (
                        <button
                            key={n.key}
                            onClick={() => onFilter(n.key)}
                            className={`flex items-center gap-1 sm:gap-1.5 md:gap-2 px-2.5 sm:px-3 md:px-4 lg:px-5 py-1.5 sm:py-2 md:py-2.5 lg:py-2.5 rounded-lg sm:rounded-xl md:rounded-xl transition-all whitespace-nowrap text-[10px] sm:text-xs md:text-sm lg:text-base font-medium shrink-0 ${
                                filter === n.key
                                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30 scale-105"
                                    : "bg-slate-800/40 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-slate-700/30 hover:scale-102"
                            }`}
                        >
                            {/* Icon */}
                            <span className="text-sm sm:text-base md:text-lg lg:text-lg">
                                {n.icon}
                            </span>
                            
                            {/* Label - Hidden on mobile for space */}
                            <span className="font-semibold hidden xs:inline sm:inline">
                                {n.label}
                            </span>
                            
                            {/* Mobile: Show only first letter */}
                            <span className="font-semibold xs:hidden">
                                {n.label.charAt(0)}
                            </span>
                            
                            {/* Count Badge */}
                            <span className={`px-1 sm:px-1.5 md:px-2 py-0.5 sm:py-0.5 md:py-1 rounded-full text-[9px] sm:text-[10px] md:text-xs lg:text-xs font-bold ${
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
