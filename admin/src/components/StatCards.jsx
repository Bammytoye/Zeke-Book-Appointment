export default function StatCards({ bookings }) {
    const total = bookings.length;
    const pending = bookings.filter(b => b.status === "pending").length;
    const approved = bookings.filter(b => b.status === "approved").length;
    const cancelled = bookings.filter(b => b.status === "cancelled").length;

    const cards = [
        { label: "Total", value: total, color: "bg-slate-700/50" },
        { label: "Pending", value: pending, color: "bg-yellow-700/20" },
        { label: "Approved", value: approved, color: "bg-green-700/20" },
        { label: "Cancelled", value: cancelled, color: "bg-red-700/20" },
    ];

    return (
        <div className="grid grid-cols-4 gap-4 mb-6">
            {cards.map(c => (
                <div key={c.label} className={`p-4 rounded-xl ${c.color} text-slate-100`}>
                    <p className="text-xs">{c.label}</p>
                    <p className="text-2xl font-bold">{c.value}</p>
                </div>
            ))}
        </div>
    );
}