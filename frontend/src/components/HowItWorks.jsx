export default function HowItWorks() {
    const steps = [
        { step: "01", title: "Choose Service", desc: "Pick the session type that fits your needs from our curated list", icon: "🎯" },
        { step: "02", title: "Select Time", desc: "View real-time availability and choose your preferred date and time", icon: "📅" },
        { step: "03", title: "Confirm", desc: "Enter your details and you're all set. Confirmation sent instantly", icon: "✅" }
    ];

    return (
        <section id="how-it-works" className="relative z-10 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-2 sm:mb-3 md:mb-4 lg:mb-5 px-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4">
                        How It Works
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
                        Three simple steps to your booking
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-6 lg:gap-10">
                    {steps.map((item, idx) => (
                        <div key={idx} className="relative">
                            {/* Connecting Line - Desktop only */}
                            {idx < 2 && (
                                <div className="hidden md:block absolute top-16 lg:top-20 -right-3 lg:-right-5 w-6 lg:w-10 h-0.5 bg-gradient-to-r from-violet-500/50 to-transparent z-10" />
                            )}

                            {/* Mobile Step Connector */}
                            {idx < 2 && (
                                <div className="md:hidden absolute left-1/2 -bottom-3 w-0.5 h-6 bg-gradient-to-b from-violet-500/50 to-transparent transform -translate-x-1/2" />
                            )}

                            {/* Step Card */}
                            <div className="relative p-6 sm:p-8 md:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 hover:border-violet-500/30 hover:bg-white/10 transition-all duration-300 group">
                                {/* Step Number */}
                                <div className="text-center mb-4 sm:mb-5 md:mb-6">
                                    <div className="inline-block relative">
                                        <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-violet-400 to-fuchsia-400 transition-all group-hover:scale-110">
                                            {item.step}
                                        </span>
                                        {/* Icon Badge */}
                                        <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-base sm:text-xl shadow-lg shadow-violet-500/30 transition-all group-hover:scale-110 group-hover:rotate-12">
                                            {item.icon}
                                        </div>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl sm:text-2xl md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-center transition-colors group-hover:text-violet-300">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm sm:text-base md:text-sm lg:text-base text-white/60 leading-relaxed text-center">
                                    {item.desc}
                                </p>

                                {/* Step Progress Indicator */}
                                <div className="mt-4 sm:mt-5 md:mt-6 flex items-center justify-center gap-1.5">
                                    {steps.map((step, i) => (
                                        <div
                                            key={i}
                                            className={`h-1 rounded-full transition-all duration-300 ${i === idx
                                                    ? "w-8 bg-gradient-to-r from-violet-500 to-fuchsia-500"
                                                    : i < idx
                                                        ? "w-4 bg-violet-500/30"
                                                        : "w-4 bg-white/10"
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-4 sm:mt-4 md:mt-6 lg:mt-8 px-4">
                    <p className="text-white/40 text-sm sm:text-base mb-4">
                        Ready to experience the simplest booking process?
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs sm:text-sm font-semibold">
                        <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></div>
                        <span>Average booking time: 45 seconds</span>
                    </div>
                </div>
            </div>
        </section>
    );
}