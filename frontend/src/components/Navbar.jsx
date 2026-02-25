import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when clicking outside
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setMobileMenuOpen(false);
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
        <>
            <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                scrolled 
                    ? "backdrop-blur-2xl border-b border-white/50 shadow-2xl shadow-black/20" 
                    : "bg-transparent"
            }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
                        {/* Logo - Optimized for all screens */}
                        <button 
                            onClick={() => navigate("/")}
                            className="flex items-center gap-2 sm:gap-3 group cursor-pointer"
                        >
                            <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center font-black text-base sm:text-lg lg:text-xl shadow-lg shadow-violet-500/25 transition-all group-hover:scale-105 group-hover:shadow-violet-500/40">
                                S
                            </div>
                            <span className="font-black text-base sm:text-lg lg:text-xl xl:text-2xl tracking-tight whitespace-nowrap">
                                Smart Booking
                            </span>
                        </button>

                        <div className="hidden md:flex items-center gap-4 lg:gap-8">
                            <a 
                                href="#features" 
                                onClick={(e) => handleNavClick(e, '#features')}
                                className="text-sm lg:text-base font-semibold text-white/60 hover:text-white transition-all duration-200 relative group px-2 py-1"
                            >
                                Features
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 group-hover:w-full transition-all duration-300"></span>
                            </a>
                            <a 
                                href="#services" 
                                onClick={(e) => handleNavClick(e, '#services')}
                                className="text-sm lg:text-base font-semibold text-white/60 hover:text-white transition-all duration-200 relative group px-2 py-1"
                            >
                                Services
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 group-hover:w-full transition-all duration-300"></span>
                            </a>
                            <a 
                                href="#how-it-works" 
                                onClick={(e) => handleNavClick(e, '#how-it-works')}
                                className="text-sm lg:text-base font-semibold text-white/60 hover:text-white transition-all duration-200 relative group px-2 py-1"
                            >
                                How it Works
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 group-hover:w-full transition-all duration-300"></span>
                            </a>
                        </div>

                        {/* Right Side Actions */}
                        <div className="flex items-center gap-3 sm:gap-4">
                            <button
                                onClick={() => navigate("/booking")}
                                className="hidden md:flex items-center gap-2 px-4 lg:px-6 py-2 lg:py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 font-bold text-sm lg:text-base shadow-lg shadow-violet-500/25 transition-all duration-300 hover:scale-105 hover:shadow-violet-500/40"
                            >
                                <span>Book Now</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>

                            {/* Mobile Menu Button - Only visible on mobile */}
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center text-white hover:bg-white/10 active:bg-white/20 transition-all duration-200 relative"
                                aria-label="Toggle menu"
                            >
                                <div className="w-6 h-5 relative flex flex-col justify-between">
                                    <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                                    <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                                    <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay*/}
            <div 
                className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
                    mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onClick={() => setMobileMenuOpen(false)}
            >
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
            </div>

            {/* Mobile Menu Panel */}
            <div className={`fixed top-16 left-0 right-0 z-40 md:hidden transition-all duration-500 ease-out ${
                mobileMenuOpen 
                    ? 'translate-y-0 opacity-100' 
                    : '-translate-y-4 opacity-0 pointer-events-none'
            }`}>
                <div className="mx-4 mt-2 rounded-2xl bg-gradient-to-br from-[#1a1625] to-[#2d2640] border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl">
                    <div className="p-6 space-y-1">
                        <a 
                            href="#features" 
                            onClick={(e) => {
                                handleNavClick(e, '#features');
                                setMobileMenuOpen(false);
                            }}
                            className="flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-semibold text-white/70 hover:text-white hover:bg-white/10 active:bg-white/15 transition-all duration-200 group"
                        >
                            <span>Features</span>
                            <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                        <a 
                            href="#services" 
                            onClick={(e) => {
                                handleNavClick(e, '#services');
                                setMobileMenuOpen(false);
                            }}
                            className="flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-semibold text-white/70 hover:text-white hover:bg-white/10 active:bg-white/15 transition-all duration-200 group"
                        >
                            <span>Services</span>
                            <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                        <a 
                            href="#how-it-works" 
                            onClick={(e) => {
                                handleNavClick(e, '#how-it-works');
                                setMobileMenuOpen(false);
                            }}
                            className="flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-semibold text-white/70 hover:text-white hover:bg-white/10 active:bg-white/15 transition-all duration-200 group"
                        >
                            <span>How it Works</span>
                            <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                    
                    <div className="px-6 pb-6">
                        <button
                            onClick={() => {
                                setMobileMenuOpen(false);
                                navigate("/booking");
                            }}
                            className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 active:scale-95 font-bold text-base shadow-lg shadow-violet-500/30 transition-all duration-200"
                        >
                            <span>Book Now</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}