import { useNavigate } from "react-router-dom";

export default function Services() {
    const navigate = useNavigate();

    const services = [
        { id: "consultation", name: "Consultation", time: "30 min", desc: "Expert advice", icon: "💬" },
        { id: "strategy", name: "Strategy Session", time: "60 min", desc: "Deep planning", icon: "🎯" },
        { id: "review", name: "Project Review", time: "45 min", desc: "Feedback & Analysis", icon: "📋" },
        { id: "onboarding", name: "Onboarding", time: "90 min", desc: "Get started right", icon: "🚀" }
    ];

    const handleServiceClick = (serviceId) => {
        navigate(`/booking?service=${serviceId}`);
    };

    return (
        <section id="services" className="relative z-10 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-2 sm:mb-3 md:mb-4 lg:mb-5 px-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4">
                        Our Services
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
                        Choose what works best for you
                    </p>
                </div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-6">
                    {services.map((service, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleServiceClick(service.id)}
                            className="group p-5 sm:p-6 md:p-7 lg:p-6 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-300 hover:scale-105 active:scale-95 text-left cursor-pointer"
                        >
                            {/* Icon & Time Badge */}
                            <div className="flex items-center justify-between mb-3 sm:mb-4">
                                <span className="text-3xl sm:text-3xl md:text-4xl lg:text-3xl transition-transform group-hover:scale-110">
                                    {service.icon}
                                </span>
                                <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-violet-500/20 text-violet-300 text-xs sm:text-xs font-bold whitespace-nowrap">
                                    {service.time}
                                </span>
                            </div>

                            {/* Service Name */}
                            <h3 className="text-lg sm:text-xl md:text-xl lg:text-lg font-bold mb-1.5 sm:mb-2 text-white transition-colors group-hover:text-violet-300">
                                {service.name}
                            </h3>

                            {/* Description */}
                            <p className="text-white/50 text-sm sm:text-sm md:text-base lg:text-sm mb-3 sm:mb-4 leading-relaxed">
                                {service.desc}
                            </p>

                            {/* Book Now CTA - Appears on hover */}
                            <div className="flex items-center gap-2 text-violet-400 text-xs sm:text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <span>Book Now</span>
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </button>
                    ))}
                </div>

                {/* View All Services Button */}
                <div className="text-center mt-8 sm:mt-10 md:mt-12 lg:mt-14 px-4">
                    <button
                        onClick={() => navigate("/booking")}
                        className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 font-bold text-sm sm:text-base md:text-lg shadow-xl shadow-violet-500/25 transition-all hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-2"
                    >
                        <span>View All Services</span>
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}