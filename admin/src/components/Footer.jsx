// Footer.jsx
export default function Footer() {
    return (
        <footer className="border-t border-slate-800/50 bg-gradient-to-r from-[#020617]/95 via-slate-900/95 to-[#020617]/95 backdrop-blur-xl">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
                    {/* Left Section */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                            <span className="text-base sm:text-lg">🎫</span>
                        </div>
                        <div className="text-center sm:text-left">
                            <p className="text-slate-300 text-xs sm:text-sm font-semibold">
                                Admin Portal
                            </p>
                            <p className="text-slate-500 text-[10px] sm:text-xs">
                                Booking Management System
                            </p>
                        </div>
                    </div>

                    {/* Center Section - Stats */}
                    <div className="flex items-center gap-4 sm:gap-6">
                        <div className="text-center">
                            <p className="text-slate-400 text-[10px] sm:text-xs">Status</p>
                            <div className="flex items-center gap-1 mt-1">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                <span className="text-emerald-400 text-xs sm:text-sm font-semibold">Online</span>
                            </div>
                        </div>
                        <div className="w-px h-8 bg-slate-700/50" />
                        <div className="text-center">
                            <p className="text-slate-400 text-[10px] sm:text-xs">Version</p>
                            <p className="text-slate-300 text-xs sm:text-sm font-semibold mt-1">v2.0.1</p>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="text-center sm:text-right">
                        <p className="text-slate-400 text-[10px] sm:text-xs">
                            © {new Date().getFullYear()} All rights reserved
                        </p>
                        <p className="text-slate-500 text-[10px] sm:text-xs mt-1">
                            Made with 💜 by Admin Team
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}