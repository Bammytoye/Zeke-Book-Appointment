export default function EmptyState({ filter }) {
    return (
        <tr>
            <td colSpan={5}>
                <div className="py-12 sm:py-16 lg:py-20 px-4 text-center">
                    <p className="text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-3">📭</p>
                    <p className="text-slate-400 font-semibold text-xs sm:text-sm lg:text-base">
                        No {filter === "all" ? "" : filter} bookings found
                    </p>
                    <p className="text-slate-600 text-xs sm:text-xs lg:text-sm mt-1 sm:mt-1.5">
                        They'll show up here when they arrive.
                    </p>
                </div>
            </td>
        </tr>
    );
}