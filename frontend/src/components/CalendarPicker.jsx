import { useState } from "react";
import { todayStr } from "../lib/utils.js";

const MONTHS = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export default function CalendarPicker({ selectedDate, onSelect }) {
    const now = new Date();
    const [calYear, setCalYear] = useState(now.getFullYear());
    const [calMonth, setCalMonth] = useState(now.getMonth());

    const today = todayStr();
    const firstDay = new Date(calYear, calMonth, 1).getDay();
    const totalDays = new Date(calYear, calMonth + 1, 0).getDate();

    const prevMonth = () => {
        if (calMonth === 0) { setCalMonth(11); setCalYear(y => y - 1); }
        else setCalMonth(m => m - 1);
    };
    const nextMonth = () => {
        if (calMonth === 11) { setCalMonth(0); setCalYear(y => y + 1); }
        else setCalMonth(m => m + 1);
    };

    const cells = [];
    for (let i = 0; i < firstDay; i++) cells.push(null);
    for (let d = 1; d <= totalDays; d++) cells.push(d);

    return (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-5">
                <button onClick={prevMonth} className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/60 hover:text-white transition-all text-lg">
                    ‹
                </button>
                <p className="text-white font-bold text-sm tracking-wide">{MONTHS[calMonth]} {calYear}</p>
                <button onClick={nextMonth} className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/60 hover:text-white transition-all text-lg">
                    ›
                </button>
            </div>

            <div className="grid grid-cols-7 mb-2">
                {DAYS.map(day => <p key={day} className="text-center text-xs font-bold text-white/25 py-1">{day}</p>)}
            </div>

            <div className="grid grid-cols-7 gap-1">
                {cells.map((day, index) => {
                    if (!day) return <div key={`empty-${index}`} />;
                    const dateStr = `${calYear}-${String(calMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                    const isPast = dateStr < today;
                    const isWeekend = [0, 6].includes(new Date(dateStr).getDay());
                    const disabled = isPast || isWeekend;
                    const isToday = dateStr === today;
                    const isSel = dateStr === selectedDate;

                    return (
                        <button
                            key={day}
                            disabled={disabled}
                            onClick={() => onSelect(dateStr)}
                            className={`h-9 rounded-xl text-sm font-semibold transition-all duration-150
                ${isSel ? "bg-violet-500 text-white shadow-lg shadow-violet-500/40 scale-105"
                                    : disabled ? "text-white/15 cursor-not-allowed"
                                        : isToday ? "text-violet-300 font-bold ring-1 ring-violet-500/40 hover:bg-violet-500/20"
                                            : "text-white/70 hover:bg-white/10 hover:text-white"}`}
                        >
                            {day}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}