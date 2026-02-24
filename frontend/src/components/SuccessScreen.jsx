export default function SuccessScreen({ booking, onReset }) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center text-white space-y-4 p-4">
            <h2 className="text-3xl font-bold text-green-400">Booking Confirmed! 🎉</h2>
            <p className="text-white/70">
                Thanks {booking.name}! Your {booking.service} is scheduled on {booking.date} at {booking.time}.
            </p>
            <button onClick={onReset} className="mt-6 py-3 px-6 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-bold">
                Book Another
            </button>
        </div>
    );
}