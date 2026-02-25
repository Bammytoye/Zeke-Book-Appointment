import AnimatedBackground from "../components/AnimatedBackground";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Services from "../components/Services";
import HowItWorks from "../components/HowItWorks";
import CTA from "../components/CTA";
import Footer from "../components/Footer";



export default function HomePage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">
            <AnimatedBackground />
            <Navbar />
            <Hero />
            <Features />
            <Services />
            <HowItWorks />
            <CTA />
            <Footer />
        </div>
    );
}