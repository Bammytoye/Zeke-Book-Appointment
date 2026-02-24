export default function BookingRow({ booking, onUpdate }) {
    const statusStyles = {
        pending: "bg-amber-500/10 text-amber-400 border-amber-400/20",
        approved: "bg-emerald-500/10 text-emerald-400 border-emerald-400/20",
        cancelled: "bg-red-500/10 text-red-400 border-red-400/20",
    };

    return (
        <tr className="border-b border-slate-800/50 hover:bg-slate-800/30 transition">
            <td className="px-6 py-4 text-slate-200 font-medium">
                {booking.name}
            </td>

            <td className="px-6 py-4 text-slate-400">
                {booking.service}
            </td>

            <td className="px-6 py-4 text-slate-400">
                {booking.date}
            </td>

            <td className="px-6 py-4 text-slate-400">
                {booking.time}
            </td>

            <td className="px-6 py-4">
                <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusStyles[booking.status]}`}
                >
                    {booking.status}
                </span>
            </td>

            <td className="px-6 py-4 text-right space-x-2">
                {booking.status === "pending" && (
                    <>
                        <button
                            onClick={() => onUpdate(booking._id, "approved")}
                            className="text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                        >
                            Approve
                        </button>
                        <button
                            onClick={() => onUpdate(booking._id, "cancelled")}
                            className="text-xs font-semibold text-red-400 hover:text-red-300"
                        >
                            Cancel
                        </button>
                    </>
                )}
            </td>
        </tr>
    );
}