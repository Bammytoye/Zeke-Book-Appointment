export default function EmptyState({ filter }) {
    return (
        <tr>
            <td colSpan={5}>
                <div className="py-20 text-center">
                    <p className="text-4xl mb-3">📭</p>
                    <p className="text-slate-400 font-semibold text-sm">
                        No {filter === "all" ? "" : filter} bookings found
                    </p>
                    <p className="text-slate-600 text-xs mt-1">
                        They'll show up here when they arrive.
                    </p>
                </div>
            </td>
        </tr>
    );
}