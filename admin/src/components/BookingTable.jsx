export default function BookingTable({ bookings, onUpdate }) {
    if (!bookings.length) return <p className="text-slate-400 text-center py-10">No bookings found</p>;

    return (
        <table className="w-full bg-slate-900/50 border border-slate-700 rounded-lg text-slate-100">
            <thead className="bg-slate-800">
                <tr>
                    <th className="p-3">Name</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">Date</th>
                    <th className="p-3">Time</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Actions</th>
                </tr>
            </thead>
            <tbody>
                {bookings.map((b) => (
                    <tr key={b._id} className="border-b border-slate-700 hover:bg-slate-800/40 transition">
                        <td className="p-3">{b.name}</td>
                        <td className="p-3">{b.email}</td>
                        <td className="p-3">{new Date(b.date).toLocaleDateString()}</td>
                        <td className="p-3">{b.time}</td>
                        <td className="p-3">
                            <span className={`px-2 py-1 rounded-full text-xs ${b.status === "approved" ? "bg-green-700/20 text-green-400" :
                                b.status === "cancelled" ? "bg-red-700/20 text-red-400" :
                                    "bg-yellow-700/20 text-yellow-400"
                                }`}>
                                {b.status}
                            </span>
                        </td>
                        <td className="p-3 space-x-2">
                            {b.status === "pending" && (
                                <>
                                    <button
                                        className="bg-green-500 px-2 py-1 rounded hover:bg-green-600"
                                        onClick={() => onUpdate(b._id, "approved")}
                                    >
                                        Approve
                                    </button>
                                    <button
                                        className="bg-yellow-500 px-2 py-1 rounded hover:bg-yellow-600"
                                        onClick={() => onUpdate(b._id, "cancelled")}
                                    >
                                        Cancel
                                    </button>
                                </>
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}