import { SERVICES } from "../lib/utils.js";

export default function ServiceSelector({ selected, onSelect }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SERVICES.map(s => {
                const isSelected = selected === s.id;
                return (
                    <button
                        key={s.id}
                        onClick={() => onSelect(s.id)}
                        className={`group relative text-left p-6 rounded-2xl border-2 transition-all duration-200 overflow-hidden
              ${isSelected ? "border-violet-500 bg-violet-500/10 shadow-xl shadow-violet-500/20" : "border-white/10 bg-white/5 hover:border-white/25 hover:bg-white/10"}`}>

                        {isSelected && (
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/5 pointer-events-none" />
                        )}

                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 transition-colors
              ${isSelected ? "bg-violet-500/20" : "bg-white/10 group-hover:bg-white/15"}`}>
                            {s.icon}
                        </div>

                        <p className={`font-bold text-base mb-1 transition-colors ${isSelected ? "text-violet-300" : "text-white"}`}>
                            {s.label}
                        </p>
                        <p className="text-sm text-white/40 mb-3 leading-relaxed">{s.desc}</p>

                        <div className="flex items-center justify-between">
                            <span className={`text-xs font-bold px-3 py-1 rounded-full transition-colors
                ${isSelected ? "bg-violet-500/25 text-violet-300" : "bg-white/10 text-white/40"}`}>
                                ⏱ {s.duration}
                            </span>
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all
                ${isSelected ? "border-violet-400 bg-violet-500" : "border-white/20"}`}>
                                {isSelected && <span className="text-white text-xs">✓</span>}
                            </div>
                        </div>
                    </button>
                );
            })}
        </div>
    );
}