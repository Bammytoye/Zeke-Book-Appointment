export default function BookingRow({ booking, onUpdate }) {
    const statusStyles = {
        pending: "bg-amber-500/10 text-amber-400 border-amber-400/20",
        approved: "bg-emerald-500/10 text-emerald-400 border-emerald-400/20",
        cancelled: "bg-red-500/10 text-red-400 border-red-400/20",
    };

    return (
        <tr className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors">
            <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-3.5 lg:py-4">
                <div className="text-xs sm:text-sm lg:text-base text-slate-200 font-medium">
                    {booking.name}
                </div>
                <div className="text-xs text-slate-500 sm:hidden mt-0.5">
                    {booking.service}
                </div>
            </td>

            <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-3.5 lg:py-4 text-xs sm:text-sm lg:text-base text-slate-400 hidden sm:table-cell">
                {booking.service}
            </td>

            <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-3.5 lg:py-4">
                <div className="text-xs sm:text-sm lg:text-base text-slate-400">
                    {booking.date}
                </div>
                <div className="text-xs text-slate-500 md:hidden mt-0.5">
                    {booking.time}
                </div>
            </td>

            <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-3.5 lg:py-4 text-xs sm:text-sm lg:text-base text-slate-400 hidden md:table-cell">
                {booking.time}
            </td>

            <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-3.5 lg:py-4">
                <span
                    className={`inline-flex items-center px-2 sm:px-2.5 lg:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-xs lg:text-sm font-semibold border ${statusStyles[booking.status]}`}
                >
                    {booking.status}
                </span>
            </td>

            <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-3.5 lg:py-4 text-right">
                {booking.status === "pending" && (
                    <div className="flex flex-col sm:flex-row justify-end gap-1.5 sm:gap-2 lg:gap-3">
                        <button
                            onClick={() => onUpdate(booking._id, "approved")}
                            className="text-xs sm:text-xs lg:text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors py-1 sm:py-0 px-2 sm:px-0 rounded sm:rounded-none hover:bg-emerald-500/10 sm:hover:bg-transparent"
                        >
                            Approve
                        </button>
                        <button
                            onClick={() => onUpdate(booking._id, "cancelled")}
                            className="text-xs sm:text-xs lg:text-sm font-semibold text-red-400 hover:text-red-300 transition-colors py-1 sm:py-0 px-2 sm:px-0 rounded sm:rounded-none hover:bg-red-500/10 sm:hover:bg-transparent"
                        >
                            Cancel
                        </button>
                    </div>
                )}
            </td>
        </tr>
    );
}