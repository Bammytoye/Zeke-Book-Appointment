export default function Footer() {
    const handleSmoothScroll = (e, href) => {
        if (href.startsWith('#')) {
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
        }
    };

    return (
        <footer className="relative z-10 border-t border-white/10 py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-10 md:mb-12">
                    {/* Brand Section */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                            <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center font-black text-base sm:text-lg lg:text-xl shadow-lg shadow-violet-500/25">
                                S
                            </div>
                            <span className="font-black text-lg sm:text-xl lg:text-2xl">Smart Booking</span>
                        </div>
                        <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-xs">
                            The smartest way to schedule your professional sessions.
                        </p>

                        {/* Social Media - Mobile positioned here */}
                        <div className="flex items-center gap-4 mt-5 sm:mt-6 lg:hidden">
                            <a href="#" className="text-white/40 hover:text-white transition-all hover:scale-110" aria-label="Twitter">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </a>
                            <a href="#" className="text-white/40 hover:text-white transition-all hover:scale-110" aria-label="GitHub">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a href="#" className="text-white/40 hover:text-white transition-all hover:scale-110" aria-label="LinkedIn">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="font-bold mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">Product</h4>
                        <ul className="space-y-2 sm:space-y-2.5">
                            <li>
                                <a
                                    onClick={(e) => handleSmoothScroll(e, '#features')}
                                    className="text-white/50 hover:text-white text-sm sm:text-base transition-colors inline-block hover:translate-x-1"
                                >
                                    Features
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    onClick={(e) => handleSmoothScroll(e, '#services')}
                                    className="text-white/50 hover:text-white text-sm sm:text-base transition-colors inline-block hover:translate-x-1"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white/50 hover:text-white transition-colors inline-block hover:translate-x-1">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white/50 hover:text-white text-sm sm:text-base transition-colors inline-block hover:translate-x-1 ">
                                    Testimonials
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-bold mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">Company</h4>
                        <ul className="space-y-2 sm:space-y-2.5">
                            <li>
                                <a href="#" className="text-white/50 hover:text-white text-sm sm:text-base transition-colors inline-block hover:translate-x-1 ">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white/50 hover:text-white text-sm sm:text-base transition-colors inline-block hover:translate-x-1">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white/50 hover:text-white text-sm sm:text-base transition-colors inline-block hover:translate-x-1">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white/50 hover:text-white text-sm sm:text-base transition-colors inline-block hover:translate-x-1">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="font-bold mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">Legal</h4>
                        <ul className="space-y-2 sm:space-y-2.5">
                            <li>
                                <a href="#" className="text-white/50 hover:text-white text-sm sm:text-base transition-colors inline-block hover:translate-x-1">
                                    Privacy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white/50 hover:text-white text-sm sm:text-base transition-colors inline-block hover:translate-x-1">
                                    Terms
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white/50 hover:text-white text-sm sm:text-base transition-colors inline-block hover:translate-x-1">
                                    Security
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white/50 hover:text-white text-sm sm:text-base transition-colors inline-block hover:translate-x-1">
                                    Cookies
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 sm:gap-6">
                    <p className="text-white/40 text-xs sm:text-sm text-center sm:text-left">
                        © 2026 Smart Booking. All rights reserved.
                    </p>

                    {/* Social Media - Desktop only */}
                    <div className="hidden lg:flex items-center gap-5">
                        <a href="#" className="text-white/40 hover:text-white transition-all hover:scale-110" aria-label="Twitter">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                            </svg>
                        </a>
                        <a href="#" className="text-white/40 hover:text-white transition-all hover:scale-110" aria-label="GitHub">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                        <a href="#" className="text-white/40 hover:text-white transition-all hover:scale-110" aria-label="LinkedIn">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}