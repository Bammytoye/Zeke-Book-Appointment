export default function PendingBanner({ count, onReview }) {
    if (!count) return null;
    return (
        <div className="flex items-center justify-between bg-amber-500/8 border border-amber-500/20 rounded-2xl px-5 py-3.5 mb-6">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-400 shrink-0">!</div>
                <p className="text-sm font-semibold text-slate-200">
                    <span className="text-amber-400 font-bold">{count}</span> pending booking{count !== 1 ? "s" : ""} awaiting your review.
                </p>
            </div>
            <button onClick={onReview}
                className="text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors px-4 py-2 rounded-xl border border-amber-400/20 hover:border-amber-400/40">
                Review →
            </button>
        </div>
    );
}