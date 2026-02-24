import BookingSummaryCard from "./BookingSummaryCard";
import Field from "./Field";
import Input from "./Input";

export default function DetailsStep({
    name, setName, email, setEmail, phone, setPhone, notes, setNotes,
    service, date, time, submit, back, loading, error
}) {
    return (
        <div className="animate-[fadeUp_0.4s_ease_forwards]">
            <h2 className="text-2xl font-bold text-white mb-1">Your details</h2>
            <p className="text-white/40 text-sm mb-6">Almost done — just fill this in.</p>

            <BookingSummaryCard service={service} date={date} time={time} />

            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <Field label="Full Name" required>
                        <Input type="text" placeholder="Jane Doe" value={name} onChange={e => setName(e.target.value)} />
                    </Field>
                    <Field label="Phone">
                        <Input type="tel" placeholder="+1 555 000 0000" value={phone} onChange={e => setPhone(e.target.value)} />
                    </Field>
                </div>
                <Field label="Email" required>
                    <Input type="email" placeholder="jane@example.com" value={email} onChange={e => setEmail(e.target.value)} />
                </Field>
                <Field label="Notes">
                    <textarea
                        rows={3}
                        placeholder="Anything we should know beforehand…"
                        value={notes}
                        onChange={e => setNotes(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-violet-500/60 transition-all resize-none"
                    />
                </Field>
            </div>

            {error && <div className="flex items-center gap-2.5 mt-4 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-red-400 text-sm font-medium">⚠ {error}</div>}

            <div className="flex gap-3 mt-6">
                <button onClick={back} className="px-6 py-4 rounded-2xl border border-white/15 text-white/50 text-sm font-bold hover:border-white/30 hover:text-white transition-all">
                    ← Back
                </button>
                <button onClick={submit} disabled={loading} className="flex-1 py-4 rounded-2xl font-bold text-sm bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white hover:from-violet-500 hover:to-fuchsia-500 shadow-xl shadow-violet-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                    {loading ? "Booking…" : "Confirm Booking ✓"}
                </button>
            </div>
        </div>
    );
}