const STEPS = ["Service", "Schedule", "Details"];

export default function StepIndicator({ current }) {
    return (
        <div className="flex items-center justify-center gap-0 mb-10">
            {STEPS.map((label, i) => {
                const idx = i + 1;
                const done = idx < current;
                const active = idx === current;

                return (
                    <div key={label} className="flex items-center">
                        <div className="flex flex-col items-center gap-2">
                            <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300
                ${done ? "bg-violet-500 border-violet-500 text-white shadow-lg shadow-violet-500/40"
                                    : active ? "bg-transparent border-violet-400 text-violet-300 shadow-lg shadow-violet-400/20"
                                        : "bg-transparent border-white/15 text-white/20"}`}>
                                {done ? "✓" : idx}
                            </div>
                            <span className={`text-xs font-semibold tracking-wide transition-colors
                ${active ? "text-white" : done ? "text-violet-400" : "text-white/20"}`}>
                                {label}
                            </span>
                        </div>
                        {i < STEPS.length - 1 && (
                            <div className={`w-20 h-0.5 mx-2 mb-5 rounded-full transition-all duration-500
                ${done ? "bg-violet-500" : "bg-white/10"}`} />
                        )}
                    </div>
                );
            })}
        </div>
    );
}