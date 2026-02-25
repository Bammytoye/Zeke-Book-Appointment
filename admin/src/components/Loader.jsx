export default function Loader() {
    return (
        <div className="text-slate-400 text-center py-8 sm:py-10 lg:py-12 px-4">
            <div className="inline-flex items-center gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                <span className="text-xs sm:text-sm lg:text-base font-medium ml-1 sm:ml-2">
                    Loading bookings...
                </span>
            </div>
        </div>
    );
}