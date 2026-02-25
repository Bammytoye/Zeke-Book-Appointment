export default function Toast({ toast }) {
    if (!toast) return null;
    
    const cfgs = {
        success: "bg-gradient-to-br from-slate-900/95 to-slate-800/95 border-emerald-500/40 shadow-emerald-500/20",
        error: "bg-gradient-to-br from-slate-900/95 to-slate-800/95 border-red-500/40 shadow-red-500/20",
        info: "bg-gradient-to-br from-slate-900/95 to-slate-800/95 border-indigo-500/40 shadow-indigo-500/20",
    };
    
    const textColors = {
        success: "text-emerald-300",
        error: "text-red-300",
        info: "text-indigo-300",
    };
    
    const icons = { 
        success: "✓", 
        error: "⚠", 
        info: "ℹ" 
    };
    
    const iconBgs = {
        success: "bg-emerald-500/20 text-emerald-400",
        error: "bg-red-500/20 text-red-400",
        info: "bg-indigo-500/20 text-indigo-400",
    };

    return (
        <div 
            className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-50 
            flex items-center gap-2 sm:gap-3 lg:gap-4 
            px-3 sm:px-4 lg:px-5 py-2.5 sm:py-3 lg:py-3.5 
            rounded-xl sm:rounded-2xl 
            border backdrop-blur-xl
            shadow-2xl 
            animate-[fadeUp_0.3s_ease]
            max-w-[calc(100vw-2rem)] sm:max-w-md lg:max-w-lg
            ${cfgs[toast.type] || cfgs.info}`}
        >
            <div className={`flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full ${iconBgs[toast.type] || iconBgs.info}`}>
                <span className="text-sm sm:text-base lg:text-lg font-bold">
                    {icons[toast.type]}
                </span>
            </div>
            
            <span className={`text-xs sm:text-sm lg:text-base font-medium text-slate-200 flex-1 ${textColors[toast.type] || textColors.info}`}>
                {toast.message}
            </span>
            
            <div className={`w-1 h-8 sm:h-10 lg:h-12 rounded-full ${toast.type === 'success' ? 'bg-emerald-500/50' : toast.type === 'error' ? 'bg-red-500/50' : 'bg-indigo-500/50'}`} />
        </div>
    );
}