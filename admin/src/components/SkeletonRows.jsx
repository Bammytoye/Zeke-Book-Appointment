export default function SkeletonRows() {
    return Array.from({ length: 5 }).map((_, i) => (
        <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
            {[
                { width: 140, hasSubtext: true },
                { width: 100, hasSubtext: false },
                { width: 120, hasSubtext: false },
                { width: 80, hasSubtext: false },
                { width: 120, hasSubtext: false }
            ].map((cell, j) => (
                <td key={j} className="px-3 sm:px-4 lg:px-6 py-3 sm:py-3.5 lg:py-4">
                    <div
                        className="h-3 sm:h-3.5 lg:h-4 rounded-lg bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-[length:200%_100%] animate-[shimmer_1.5s_infinite]"
                        style={{ width: `${cell.width * 0.7}px` }}
                    />
                    {cell.hasSubtext && (
                        <div
                            className="h-2 sm:h-2.5 lg:h-3 rounded-lg bg-gradient-to-r from-slate-800/60 via-slate-700/60 to-slate-800/60 mt-1.5 sm:mt-2 bg-[length:200%_100%] animate-[shimmer_1.5s_infinite_0.2s]"
                            style={{ width: `${cell.width * 0.5}px` }}
                        />
                    )}
                </td>
            ))}
        </tr>
    ));
}