import { useNavigate } from "react-router-dom";

export default function SuccessScreen({ booking, onReset }) {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] relative overflow-hidden flex items-center justify-center px-4 py-12">
            {/* Success Card */}
            <div className="relative z-10 w-full max-w-2xl">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 md:p-12 shadow-2xl text-center animate-[scaleIn_0.4s_ease]">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-2xl shadow-green-500/40 animate-[bounce_1s_ease_3]">
                        <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400">
                        Booking Confirmed!
                    </h2>

                    <p className="text-lg sm:text-xl text-white/70 mb-8 leading-relaxed">
                        Thanks <span className="font-bold text-white">{booking.name}</span>!
                        <br />
                        Your <span className="font-semibold text-violet-300">{booking.service}</span> session is scheduled.
                    </p>

                    {/* Booking Details Card */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 text-left">
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-lg">
                                    📅
                                </div>
                                <div>
                                    <p className="text-xs text-white/40 font-medium uppercase tracking-wider">Date</p>
                                    <p className="text-sm font-semibold text-white">{booking.date}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-fuchsia-500/20 flex items-center justify-center text-lg">
                                    🕐
                                </div>
                                <div>
                                    <p className="text-xs text-white/40 font-medium uppercase tracking-wider">Time</p>
                                    <p className="text-sm font-semibold text-white">{booking.time}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-lg">
                                    ✉️
                                </div>
                                <div>
                                    <p className="text-xs text-white/40 font-medium uppercase tracking-wider">Confirmation sent to</p>
                                    <p className="text-sm font-semibold text-white truncate">{booking.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Info Banner */}
                    <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-4 mb-8 flex items-start gap-3">
                        <svg className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        <p className="text-xs sm:text-sm text-indigo-300 leading-relaxed text-left">
                            Your booking is pending approval. You'll receive an email confirmation once it's approved by our team.
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <button
                            onClick={() => navigate("/")}
                            className="flex-1 px-6 py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-bold text-sm sm:text-base shadow-2xl shadow-violet-500/30 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            Go to Home
                        </button>

                        <button
                            onClick={onReset}
                            className="flex-1 px-6 py-4 rounded-xl sm:rounded-2xl border border-white/20 hover:border-white/40 text-white font-bold text-sm sm:text-base backdrop-blur-sm transition-all hover:bg-white/5 active:scale-95 flex items-center justify-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            Book Another
                        </button>
                    </div>
                </div>

                {/* Footer Note */}
                <p className="text-center text-white/40 text-xs sm:text-sm mt-3">
                    Need to make changes? Contact us at support@smartbooking.com
                </p>
            </div>
        </div>
    );
}