export default function StatCards({ bookings }) {
    const total = bookings.length;
    const pending = bookings.filter(b => b.status === "pending").length;
    const approved = bookings.filter(b => b.status === "approved").length;
    const cancelled = bookings.filter(b => b.status === "cancelled").length;

    const cards = [
        {
            label: "Total Bookings",
            value: total,
            icon: "📊",
            gradient: "from-slate-800/80 to-slate-700/80",
            border: "border-slate-600/50",
            iconBg: "bg-slate-600/30",
            textColor: "text-slate-300"
        },
        {
            label: "Pending",
            value: pending,
            icon: "⏳",
            gradient: "from-yellow-900/40 to-yellow-800/40",
            border: "border-yellow-600/50",
            iconBg: "bg-yellow-600/30",
            textColor: "text-yellow-300"
        },
        {
            label: "Approved",
            value: approved,
            icon: "✅",
            gradient: "from-green-900/40 to-green-800/40",
            border: "border-green-600/50",
            iconBg: "bg-green-600/30",
            textColor: "text-green-300"
        },
        {
            label: "Cancelled",
            value: cancelled,
            icon: "❌",
            gradient: "from-red-900/40 to-red-800/40",
            border: "border-red-600/50",
            iconBg: "bg-red-600/30",
            textColor: "text-red-300"
        },
    ];

    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 lg:mb-10">
            {cards.map(c => (
                <div
                    key={c.label}
                    className={`relative overflow-hidden p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br ${c.gradient} border ${c.border} backdrop-blur-sm hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group`}
                >
                    {/* Icon Badge */}
                    <div className={`absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full ${c.iconBg} flex items-center justify-center backdrop-blur-sm`}>
                        <span className="text-base sm:text-lg lg:text-xl">{c.icon}</span>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                        <p className="text-[10px] sm:text-xs lg:text-sm text-slate-400 font-medium mb-1 sm:mb-2 uppercase tracking-wide">
                            {c.label}
                        </p>
                        <p className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${c.textColor} group-hover:scale-110 transition-transform duration-300`}>
                            {c.value}
                        </p>

                        {/* Progress Indicator */}
                        <div className="mt-2 sm:mt-3 lg:mt-4 h-1 sm:h-1.5 bg-slate-800/50 rounded-full overflow-hidden">
                            <div
                                className={`h-full bg-gradient-to-r ${c.gradient} opacity-60 transition-all duration-500`}
                                style={{ width: total > 0 ? `${(c.value / total) * 100}%` : '0%' }}
                            />
                        </div>
                    </div>

                    {/* Decorative Glow */}
                    <div className={`absolute -bottom-10 -right-10 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-br ${c.gradient} opacity-20 blur-2xl rounded-full group-hover:opacity-30 transition-opacity duration-300`} />
                </div>
            ))}
        </div>
    );
}