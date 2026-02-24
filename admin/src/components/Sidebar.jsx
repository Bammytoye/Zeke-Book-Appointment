export default function Sidebar({ filter, onFilter, counts, onLogout }) {
    const nav = [
        { key: "all", label: "All", count: counts.all },
        { key: "pending", label: "Pending", count: counts.pending },
        { key: "approved", label: "Approved", count: counts.approved },
        { key: "cancelled", label: "Cancelled", count: counts.cancelled },
    ];

    return (
        <aside className="fixed left-0 top-0 bottom-0 w-60 bg-[#0a0f1e] p-5 flex flex-col">
            <h2 className="text-slate-100 font-bold mb-6">Admin Portal</h2>
            <nav className="flex-1 flex flex-col gap-2">
                {nav.map((n) => (
                    <button
                        key={n.key}
                        onClick={() => onFilter(n.key)}
                        className={`w-full text-left px-3 py-2 rounded ${filter === n.key ? "bg-indigo-600/20 text-indigo-300" : "text-slate-500 hover:bg-slate-800/40 hover:text-slate-100"
                            }`}
                    >
                        {n.label} ({n.count})
                    </button>
                ))}
            </nav>
            <button
                onClick={onLogout}
                className="mt-4 w-full px-3 py-2 text-red-400 hover:text-red-600 border border-red-400/20 rounded"
            >
                Sign Out
            </button>
        </aside>
    );
}