export default function BookingTable({ bookings, onApprove, onCancel, onDelete, onViewDetails, filter }) {
    if (!bookings.length) {
        return (
            <p className="text-slate-400 text-center py-8 sm:py-10 md:py-12 text-sm sm:text-base">
                No bookings found
            </p>
        );
    }

    return (
        <div className="overflow-x-auto -mx-4 sm:mx-0">
            <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden border border-slate-700 sm:rounded-lg md:rounded-xl">
                    <table className="min-w-full bg-slate-900/50 text-slate-100">
                        {/* Table Head */}
                        <thead className="bg-slate-800">
                            <tr>
                                <th className="px-3 sm:px-4 md:px-5 lg:px-6 py-2.5 sm:py-3 md:py-3.5 lg:py-4 text-left text-xs sm:text-sm md:text-sm lg:text-base font-semibold text-slate-300">
                                    Name
                                </th>
                                
                                <th className="px-3 sm:px-4 md:px-5 lg:px-6 py-2.5 sm:py-3 md:py-3.5 lg:py-4 text-left text-xs sm:text-sm md:text-sm lg:text-base font-semibold text-slate-300 hidden md:table-cell">
                                    Email
                                </th>
                                
                                <th className="px-3 sm:px-4 md:px-5 lg:px-6 py-2.5 sm:py-3 md:py-3.5 lg:py-4 text-left text-xs sm:text-sm md:text-sm lg:text-base font-semibold text-slate-300">
                                    Date
                                </th>
                                
                                <th className="px-3 sm:px-4 md:px-5 lg:px-6 py-2.5 sm:py-3 md:py-3.5 lg:py-4 text-left text-xs sm:text-sm md:text-sm lg:text-base font-semibold text-slate-300 hidden sm:table-cell">
                                    Time
                                </th>
                                
                                <th className="px-3 sm:px-4 md:px-5 lg:px-6 py-2.5 sm:py-3 md:py-3.5 lg:py-4 text-left text-xs sm:text-sm md:text-sm lg:text-base font-semibold text-slate-300">
                                    Status
                                </th>
                                
                                <th className="px-3 sm:px-4 md:px-5 lg:px-6 py-2.5 sm:py-3 md:py-3.5 lg:py-4 text-left text-xs sm:text-sm md:text-sm lg:text-base font-semibold text-slate-300">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody className="divide-y divide-slate-700">
                            {bookings.map((book) => (
                                <tr key={book._id} className="hover:bg-slate-800/40 transition-colors duration-150">
                                    {/* Name Column */}
                                    <td className="px-3 sm:px-4 md:px-5 lg:px-6 py-3 sm:py-3.5 md:py-4 lg:py-5">
                                        <div className="text-xs sm:text-sm md:text-base lg:text-base font-medium text-slate-100 line-clamp-1">
                                            {book.name}
                                        </div>
                                        {/* Mobile: Show email below name */}
                                        <div className="text-[10px] sm:text-xs text-slate-500 md:hidden mt-0.5 truncate">
                                            {book.email}
                                        </div>
                                    </td>

                                    {/* Email Column - Desktop only */}
                                    <td className="px-3 sm:px-4 md:px-5 lg:px-6 py-3 sm:py-3.5 md:py-4 lg:py-5 text-xs sm:text-sm md:text-sm lg:text-base text-slate-300 hidden md:table-cell">
                                        <div className="truncate max-w-[200px] lg:max-w-[300px]">
                                            {book.email}
                                        </div>
                                    </td>

                                    {/* Date Column */}
                                    <td className="px-3 sm:px-4 md:px-5 lg:px-6 py-3 sm:py-3.5 md:py-4 lg:py-5">
                                        <div className="text-xs sm:text-sm md:text-sm lg:text-base text-slate-300">
                                            {new Date(book.date).toLocaleDateString('en-US', {
                                                month: 'short',
                                                day: 'numeric',
                                                year: window.innerWidth >= 768 ? 'numeric' : '2-digit'
                                            })}
                                        </div>
                                        {/* Mobile: Show time below date */}
                                        <div className="text-[10px] sm:text-xs text-slate-500 sm:hidden mt-0.5">
                                            {book.time}
                                        </div>
                                    </td>

                                    {/* Time Column - Tablet+ */}
                                    <td className="px-3 sm:px-4 md:px-5 lg:px-6 py-3 sm:py-3.5 md:py-4 lg:py-5 text-xs sm:text-sm md:text-sm lg:text-base text-slate-300 hidden sm:table-cell">
                                        {book.time}
                                    </td>

                                    {/* Status Column */}
                                    <td className="px-3 sm:px-4 md:px-5 lg:px-6 py-3 sm:py-3.5 md:py-4 lg:py-5">
                                        <span
                                            className={`inline-flex items-center px-2 sm:px-2.5 md:px-3 lg:px-3.5 py-0.5 sm:py-1 md:py-1 lg:py-1.5 rounded-full text-[10px] sm:text-xs md:text-xs lg:text-sm font-medium ${
                                                book.status === "approved"
                                                    ? "bg-green-700/20 text-green-400 border border-green-500/30"
                                                    : book.status === "cancelled"
                                                    ? "bg-red-700/20 text-red-400 border border-red-500/30"
                                                    : "bg-yellow-700/20 text-yellow-400 border border-yellow-500/30"
                                            }`}
                                        >
                                            {/* Show full text on tablet+, abbreviated on mobile */}
                                            <span className="hidden sm:inline">{book.status}</span>
                                            <span className="sm:hidden">
                                                {book.status === "approved" ? "✓" : book.status === "cancelled" ? "✕" : "⏳"}
                                            </span>
                                        </span>
                                    </td>

                                    {/* Actions Column */}
                                    <td className="px-3 sm:px-4 md:px-5 lg:px-6 py-3 sm:py-3.5 md:py-4 lg:py-5">
                                        <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row gap-1 sm:gap-1.5 md:gap-2 lg:gap-2">
                                            {/* View Button */}
                                            <button
                                                className="bg-indigo-500/20 text-indigo-400 px-2 sm:px-2.5 md:px-3 lg:px-4 py-1 sm:py-1.5 md:py-1.5 lg:py-2 rounded text-[10px] sm:text-xs md:text-xs lg:text-sm font-medium hover:bg-indigo-500/30 active:scale-95 transition-all whitespace-nowrap border border-indigo-500/30"
                                                onClick={() => onViewDetails(book._id)}
                                            >
                                                <span className="hidden sm:inline">View</span>
                                                <span className="sm:hidden">👁</span>
                                            </button>

                                            {/* Approve/Cancel - Only for pending in "all" filter */}
                                            {filter === "all" && book.status === "pending" && (
                                                <>
                                                    <button
                                                        className="bg-green-500/90 text-white px-2 sm:px-2.5 md:px-3 lg:px-4 py-1 sm:py-1.5 md:py-1.5 lg:py-2 rounded text-[10px] sm:text-xs md:text-xs lg:text-sm font-medium hover:bg-green-600 active:scale-95 transition-all whitespace-nowrap shadow-sm"
                                                        onClick={() => onApprove(book._id, book.name)}
                                                    >
                                                        <span className="hidden md:inline">Approve</span>
                                                        <span className="md:hidden">✓</span>
                                                    </button>
                                                    <button
                                                        className="bg-yellow-500/90 text-white px-2 sm:px-2.5 md:px-3 lg:px-4 py-1 sm:py-1.5 md:py-1.5 lg:py-2 rounded text-[10px] sm:text-xs md:text-xs lg:text-sm font-medium hover:bg-yellow-600 active:scale-95 transition-all whitespace-nowrap shadow-sm"
                                                        onClick={() => onCancel(book._id, book.name)}
                                                    >
                                                        <span className="hidden md:inline">Cancel</span>
                                                        <span className="md:hidden">✕</span>
                                                    </button>
                                                </>
                                            )}

                                            {/* Delete Button */}
                                            <button
                                                className="bg-red-500/20 text-red-400 px-2 sm:px-2.5 md:px-3 lg:px-4 py-1 sm:py-1.5 md:py-1.5 lg:py-2 rounded text-[10px] sm:text-xs md:text-xs lg:text-sm font-medium hover:bg-red-500/30 active:scale-95 transition-all whitespace-nowrap border border-red-500/30"
                                                onClick={() => onDelete(book._id, book.name)}
                                            >
                                                <span className="hidden sm:inline">Delete</span>
                                                <span className="sm:hidden">🗑</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}