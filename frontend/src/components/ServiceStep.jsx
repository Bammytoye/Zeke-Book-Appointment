import ServiceSelector from "./ServiceSelector";

export default function ServiceStep({ service, setService, next }) {
    return (
        <div className="animate-[fadeUp_0.4s_ease_forwards]">
            <h2 className="text-2xl font-bold text-white mb-1">What do you need?</h2>
            <p className="text-white/40 text-sm mb-6">Pick the session type that fits your goals.</p>
            <ServiceSelector selected={service} onSelect={setService} />
            <button
                onClick={next}
                disabled={!service}
                className="mt-6 w-full py-4 rounded-2xl font-bold text-sm bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white hover:from-violet-500 hover:to-fuchsia-500 shadow-xl shadow-violet-500/25 disabled:bg-white/5 disabled:text-white/20"
            >
                Continue →
            </button>
        </div>
    );
}