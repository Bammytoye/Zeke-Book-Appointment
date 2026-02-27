import CalendarPicker from "./CalendarPicker";
import TimeSlotPicker from "./TimeSlotPicker";

export default function DateTimeStep({ date, setDate, time, setTime, taken, next, back }) {
    const handleDateSelect = d => { setDate(d); setTime(null); };

    return (
        <div className="animate-[fadeUp_0.4s_ease_forwards]">
            <h2 className="text-2xl font-bold text-white mb-1">Choose a date & time</h2>
            <p className="text-white/40 text-sm mb-3">Weekends disabled. Strikethrough = taken.</p>
            <div className="space-y-2">
                <CalendarPicker selectedDate={date} onSelect={handleDateSelect} />
                {date && <TimeSlotPicker selectedTime={time} takenSlots={taken} onSelect={setTime} />}
            </div>

            <div className="flex gap-3 mt-3">
                <button onClick={back} className="px-6 py-4 rounded-2xl border border-white/15 text-white/50 text-sm font-bold hover:border-white/30 hover:text-white transition-all">
                    ← Back
                </button>
                <button onClick={next} disabled={!date || !time} className="flex-1 py-4 rounded-2xl font-bold text-sm bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white hover:from-violet-500 hover:to-fuchsia-500 shadow-xl shadow-violet-500/25 disabled:bg-white/5 disabled:text-white/20">
                    Continue →
                </button>
            </div>
        </div>
    );
}