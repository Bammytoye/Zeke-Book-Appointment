export default function BookingTable({ bookings, onUpdate, filter }) {
    if (!bookings.length) return (
        <p className="text-slate-400 text-center py-8 sm:py-10 text-sm sm:text-base">
            No bookings found
        </p>
    );

    return (
        <div className="overflow-x-auto -mx-4 sm:mx-0">
            <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden border border-slate-700 sm:rounded-lg">
                    <table className="min-w-full bg-slate-900/50 text-slate-100">
                        <thead className="bg-slate-800">
                            <tr>
                                <th className="px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3 lg:py-3.5 text-left text-xs sm:text-sm font-semibold text-slate-300">
                                    Name
                                </th>
                                <th className="px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3 lg:py-3.5 text-left text-xs sm:text-sm font-semibold text-slate-300 hidden md:table-cell">
                                    Email
                                </th>
                                <th className="px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3 lg:py-3.5 text-left text-xs sm:text-sm font-semibold text-slate-300">
                                    Date
                                </th>
                                <th className="px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3 lg:py-3.5 text-left text-xs sm:text-sm font-semibold text-slate-300 hidden sm:table-cell">
                                    Time
                                </th>
                                <th className="px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3 lg:py-3.5 text-left text-xs sm:text-sm font-semibold text-slate-300">
                                    Status
                                </th>
                                {filter === "all" && (
                                    <th className="px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3 lg:py-3.5 text-left text-xs sm:text-sm font-semibold text-slate-300">
                                        Actions
                                    </th>
                                )}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-700">
                            {bookings.map((b) => (
                                <tr key={b._id} className="hover:bg-slate-800/40 transition-colors">
                                    <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-3.5 lg:py-4">
                                        <div className="text-xs sm:text-sm lg:text-base font-medium text-slate-100">
                                            {b.name}
                                        </div>
                                        <div className="text-xs text-slate-500 md:hidden mt-0.5">
                                            {b.email}
                                        </div>
                                    </td>
                                    <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-3.5 lg:py-4 text-xs sm:text-sm text-slate-300 hidden md:table-cell">
                                        {b.email}
                                    </td>
                                    <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-3.5 lg:py-4">
                                        <div className="text-xs sm:text-sm text-slate-300">
                                            {new Date(b.date).toLocaleDateString()}
                                        </div>
                                        <div className="text-xs text-slate-500 sm:hidden mt-0.5">
                                            {b.time}
                                        </div>
                                    </td>
                                    <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-3.5 lg:py-4 text-xs sm:text-sm text-slate-300 hidden sm:table-cell">
                                        {b.time}
                                    </td>
                                    <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-3.5 lg:py-4">
                                        <span className={`inline-flex items-center px-2 sm:px-2.5 lg:px-3 py-1 sm:py-1 lg:py-1.5 rounded-full text-xs sm:text-xs lg:text-sm font-medium ${
                                            b.status === "approved" ? "bg-green-700/20 text-green-400" :
                                            b.status === "cancelled" ? "bg-red-700/20 text-red-400" :
                                            "bg-yellow-700/20 text-yellow-400"
                                        }`}>
                                            {b.status}
                                        </span>
                                    </td>
                                    {filter === "all" && (
                                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-3.5 lg:py-4">
                                            {b.status === "pending" && (
                                                <div className="flex flex-col sm:flex-row gap-1.5 sm:gap-2">
                                                    <button
                                                        className="bg-green-500 px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 rounded text-xs sm:text-xs lg:text-sm font-medium hover:bg-green-600 transition-colors whitespace-nowrap"
                                                        onClick={() => onUpdate(b._id, "approved")}
                                                    >
                                                        Approve
                                                    </button>
                                                    <button
                                                        className="bg-yellow-500 px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 rounded text-xs sm:text-xs lg:text-sm font-medium hover:bg-yellow-600 transition-colors whitespace-nowrap"
                                                        onClick={() => onUpdate(b._id, "cancelled")}
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            )}
                                        </td>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}