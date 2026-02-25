import { useState, useEffect } from "react";

export default function Features() {
    const [activeFeature, setActiveFeature] = useState(0);

    const features = [
        { icon: "⚡", title: "Lightning Fast", desc: "Book in under 60 seconds with our streamlined 3-step process", color: "from-amber-500 to-orange-500" },
        { icon: "🎯", title: "Smart Scheduling", desc: "Real-time availability ensures you never miss a slot", color: "from-violet-500 to-purple-500" },
        { icon: "🔒", title: "Secure & Private", desc: "Your data is encrypted and never shared with third parties", color: "from-cyan-500 to-blue-500" }
    ];

    useEffect(() => {
        const interval = setInterval(() => setActiveFeature(prev => (prev + 1) % 3), 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="features" className="relative z-10 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-2 sm:mb-3 md:mb-4 lg:mb-5 px-4">
                    <h2 className="text-3xl sm:text-xl md:text-4xl lg:text-4xl font-black mb-3 sm:mb-4">
                        Why Choose Smart Booking?
                    </h2>
                    <p className="text-base sm:text-lg md:text-lg text-white/60 max-w-2xl mx-auto">
                        Built for speed, designed for simplicity
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-0">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveFeature(index)}
                            className={`group cursor-pointer p-6 sm:p-7 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border-2 transition-all duration-500 ${
                                activeFeature === index
                                    ? "border-violet-500/50 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/5 scale-100 sm:scale-105 shadow-2xl shadow-violet-500/20"
                                    : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10 hover:scale-102"
                            }`}
                        >
                            {/* Icon */}
                            <div className={`w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-5 md:mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                                {feature.icon}
                            </div>
                            
                            {/* Title */}
                            <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 transition-colors">
                                {feature.title}
                            </h3>
                            
                            {/* Description */}
                            <p className="text-sm sm:text-base md:text-base lg:text-lg text-white/60 leading-relaxed">
                                {feature.desc}
                            </p>

                            {/* Active Indicator */}
                            {activeFeature === index && (
                                <div className="mt-4 sm:mt-5 md:mt-6 flex items-center gap-2 text-violet-400 text-xs sm:text-sm font-semibold">
                                    <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></div>
                                    <span>Active</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Feature Navigation Dots - Mobile friendly */}
                <div className="flex items-center justify-center gap-2 sm:gap-3 mt-8 sm:mt-10 md:mt-12">
                    {features.map((feat, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveFeature(index)}
                            className={`transition-all duration-300 rounded-full ${
                                activeFeature === index
                                    ? "w-8 sm:w-10 h-2 sm:h-2.5 bg-gradient-to-r from-violet-500 to-fuchsia-500"
                                    : "w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/20 hover:bg-white/40"
                            }`}
                            aria-label={`View ${features[index].title}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}