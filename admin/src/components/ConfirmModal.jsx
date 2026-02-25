export default function ConfirmModal({ isOpen, onClose, onConfirm, title, message, type = "danger", loading }) {
    if (!isOpen) return null;

    const configs = {
        danger: {
            icon: "⚠️",
            iconBg: "bg-red-500/20",
            iconColor: "text-red-400",
            buttonBg: "bg-red-600 hover:bg-red-500",
            buttonText: "Delete",
            gradient: "from-red-500/10 to-rose-500/5",
            border: "border-red-500/30"
        },
        warning: {
            icon: "❌",
            iconBg: "bg-yellow-500/20",
            iconColor: "text-yellow-400",
            buttonBg: "bg-yellow-600 hover:bg-yellow-500",
            buttonText: "Cancel",
            gradient: "from-yellow-500/10 to-orange-500/5",
            border: "border-yellow-500/30"
        },
        success: {
            icon: "✓",
            iconBg: "bg-green-500/20",
            iconColor: "text-green-400",
            buttonBg: "bg-green-600 hover:bg-green-500",
            buttonText: "Approve",
            gradient: "from-green-500/10 to-emerald-500/5",
            border: "border-green-500/30"
        }
    };

    const config = configs[type];

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-[fadeIn_0.2s_ease]"
            onClick={onClose}
        >
            <div
                className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl animate-[scaleIn_0.2s_ease]"
                onClick={(e) => e.stopPropagation()}
            >
                <div className={`bg-gradient-to-r ${config.gradient} border-b ${config.border} p-6`}>
                    <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-full ${config.iconBg} flex items-center justify-center ${config.iconColor} text-2xl shrink-0`}>
                            {config.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">{message}</p>
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="p-6 flex gap-3">
                    <button
                        onClick={onClose}
                        disabled={loading}
                        className="flex-1 px-4 py-3 rounded-xl border border-slate-600 text-slate-300 font-semibold text-sm hover:bg-slate-800 hover:border-slate-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        disabled={loading}
                        className={`flex-1 px-4 py-3 rounded-xl ${config.buttonBg} text-white font-semibold text-sm shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
                    >
                        {loading ? (
                            <>
                                <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing...
                            </>
                        ) : (
                            config.buttonText
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}