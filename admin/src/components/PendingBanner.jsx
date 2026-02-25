export default function PendingBanner({ count, onReview }) {
    if (!count) return null;
    return (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 bg-amber-500/8 border border-amber-500/20 rounded-2xl px-4 sm:px-5 lg:px-6 py-3 sm:py-3.5 lg:py-4 mb-6">
            <div className="flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
                <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-400 shrink-0 text-sm sm:text-base lg:text-lg font-bold">
                    !
                </div>
                <p className="text-xs sm:text-sm lg:text-base font-semibold text-slate-200 leading-snug">
                    <span className="text-amber-400 font-bold">{count}</span> pending booking{count !== 1 ? "s" : ""} awaiting your review.
                </p>
            </div>
            <button
                onClick={onReview}
                className="w-full sm:w-auto text-xs sm:text-xs lg:text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors px-4 sm:px-4 lg:px-5 py-2 sm:py-2 lg:py-2.5 rounded-xl border border-amber-400/20 hover:border-amber-400/40 hover:bg-amber-500/5 whitespace-nowrap"
            >
                Review →
            </button>
        </div>
    );
}