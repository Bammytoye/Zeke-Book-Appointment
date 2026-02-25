import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
    const navigate = useNavigate();
    const [bookings, setBookings] = useState(0);
    const [avgTime, setAvgTime] = useState(0);
    const [satisfaction, setSatisfaction] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const statsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    animateNumbers();
                }
            },
            { threshold: 0.3 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated]);

    const animateNumbers = () => {
        // (10K+)
        let bookingCount = 0;
        const bookingInterval = setInterval(() => {
            bookingCount += 200;
            if (bookingCount >= 10000) {
                setBookings(10000);
                clearInterval(bookingInterval);
            } else {
                setBookings(bookingCount);
            }
        }, 20);

        // (45s)
        let timeCount = 0;
        const timeInterval = setInterval(() => {
            timeCount += 1;
            if (timeCount >= 45) {
                setAvgTime(45);
                clearInterval(timeInterval);
            } else {
                setAvgTime(timeCount);
            }
        }, 30);

        // (98%)
        let satisfactionCount = 0;
        const satisfactionInterval = setInterval(() => {
            satisfactionCount += 2;
            if (satisfactionCount >= 98) {
                setSatisfaction(98);
                clearInterval(satisfactionInterval);
            } else {
                setSatisfaction(satisfactionCount);
            }
        }, 25);
    };

    const formatNumber = (num) => {
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num;
    };

    const handleSmoothScroll = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="relative z-10 pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto text-center">
                <div className="inline-block animate-[fadeUp_0.6s_ease_forwards] opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
                    <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 sm:mb-6">
                        Smart Booking Platform
                    </span>
                </div>

                {/* Headline */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 leading-tight animate-[fadeUp_0.6s_ease_forwards] opacity-0 px-4" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
                    Schedule Smarter,
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400">
                        Not Harder
                    </span>
                </h1>

                {/* Sub-headline */}
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/60 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed animate-[fadeUp_0.6s_ease_forwards] opacity-0 px-4" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
                    The fastest way to book professional sessions. No back-and-forth emails, no calendar chaos. Just pick a time and you're done.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-[fadeUp_0.6s_ease_forwards] opacity-0 px-4" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
                    <button
                        onClick={() => navigate("/booking")}
                        className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 font-bold text-sm sm:text-base shadow-2xl shadow-violet-500/30 transition-all hover:scale-105 active:scale-95"
                    >
                        Get Started Free →
                    </button>
                    <a
                        href="#how-it-works"
                        onClick={(e) => handleSmoothScroll(e, '#how-it-works')}
                        className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl border border-white/20 hover:border-white/40 font-bold text-sm sm:text-base backdrop-blur-sm transition-all hover:bg-white/5 active:scale-95"
                    >
                        See How It Works
                    </a>
                </div>

                {/* Stats - Animated Numbers */}
                <div 
                    ref={statsRef}
                    className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto animate-[fadeUp_0.6s_ease_forwards] opacity-0 px-4" 
                    style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
                >
                    <div className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500/30 transition-all">
                        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                            {formatNumber(bookings)}+
                        </p>
                        <p className="text-xs sm:text-sm md:text-base text-white/40 font-medium mt-1 sm:mt-2">Bookings Made</p>
                    </div>
                    <div className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:border-fuchsia-500/30 transition-all">
                        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400">
                            {avgTime}s
                        </p>
                        <p className="text-xs sm:text-sm md:text-base text-white/40 font-medium mt-1 sm:mt-2">Avg. Booking Time</p>
                    </div>
                    <div className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:border-pink-500/30 transition-all">
                        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">
                            {satisfaction}%
                        </p>
                        <p className="text-xs sm:text-sm md:text-base text-white/40 font-medium mt-1 sm:mt-2">User Satisfaction</p>
                    </div>
                </div>
            </div>
        </section>
    );
}