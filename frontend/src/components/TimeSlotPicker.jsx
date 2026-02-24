import { TIME_SLOTS, fmtTime } from "../lib/utils.js";

export default function TimeSlotPicker({ selectedTime, takenSlots = [], onSelect }) {
    return (
        <div>
            <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-3">
                Available Times
            </p>
            <div className="grid grid-cols-4 gap-2">
                {TIME_SLOTS.map(t => {
                    const taken = takenSlots.includes(t);
                    const isSel = t === selectedTime;

                    return (
                        <button
                            key={t}
                            disabled={taken}
                            onClick={() => onSelect(t)}
                            className={`py-2.5 rounded-xl text-xs font-bold border transition-all duration-150
                ${isSel ? "bg-violet-500 border-violet-500 text-white shadow-lg shadow-violet-500/30 scale-105"
                                    : taken ? "border-white/5 text-white/15 line-through cursor-not-allowed bg-white/3"
                                        : "border-white/10 text-white/60 hover:border-violet-400/50 hover:text-white hover:bg-violet-500/10"}`}
                        >
                            {fmtTime(t)}
                        </button>
                    );
                })}
            </div>
            {takenSlots.length > 0 && (
                <p className="text-xs text-white/20 mt-3">Strikethrough slots are already booked.</p>
            )}
        </div>
    );
}