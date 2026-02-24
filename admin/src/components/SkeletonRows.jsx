export default function SkeletonRows() {
    return Array.from({ length: 5 }).map((_, i) => (
        <tr key={i} className="border-b border-slate-800/50">
            {[140, 100, 120, 80, 120].map((w, j) => (
                <td key={j} className="px-6 py-4">
                    <div className="h-4 rounded-lg bg-slate-800 animate-pulse" style={{ width: w }} />
                    {j === 0 && <div className="h-3 rounded-lg bg-slate-800/60 animate-pulse mt-2 w-32" />}
                </td>
            ))}
        </tr>
    ));
}