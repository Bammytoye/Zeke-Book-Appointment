import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import StepIndicator from "../components/StepIndicator";
import ServiceStep from "../components/ServiceStep";
import DateTimeStep from "../components/DateTimeStep";
import DetailsStep from "../components/DetailsStep";
import SuccessScreen from "../components/SuccessScreen";
import { apiFetch } from "../lib/utils";

export default function BookingPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const preSelectedService = searchParams.get("service");
    
    const [step, setStep] = useState(1);
    const [service, setService] = useState(preSelectedService || null);
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [taken, setTaken] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [notes, setNotes] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [lastBooking, setLastBooking] = useState(null);

    // Auto-advance to step 2 if service is pre-selected
    useEffect(() => {
        if (preSelectedService && step === 1) {
            setStep(2);
        }
    }, [preSelectedService]);

    useEffect(() => {
        if (!date) return;
        apiFetch(`/bookings/availability?date=${date}`).then(d => setTaken(d.taken || []));
    }, [date]);

    const next = () => setStep(s => s + 1);
    const back = () => setStep(s => s - 1);

    const submit = async () => {
        if (!name.trim() || name.length < 2) { setError("Enter your full name."); return; }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError("Enter a valid email."); return; }
        setError(""); setLoading(true);
        try {
            await apiFetch("/bookings", { method: "POST", body: JSON.stringify({ name, email, phone, notes, service, date, time }) });
            setLastBooking({ name, email, service, date, time });
            setSuccess(true);
        } catch (e) { setError(e.message); }
        finally { setLoading(false); }
    };

    const reset = () => {
        setStep(1); setService(null); setDate(null); setTime(null); setTaken([]);
        setName(""); setEmail(""); setPhone(""); setNotes("");
        setError(""); setSuccess(false); setLastBooking(null);
    };

    if (success && lastBooking) return <SuccessScreen booking={lastBooking} onReset={reset} />;

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] relative overflow-hidden flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
            {/* Animated */}
            <div className="fixed inset-0 z-0 opacity-30">
                <div className="absolute top-20 left-20 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-violet-500 rounded-full blur-[100px] sm:blur-[120px] animate-pulse" style={{ animationDuration: "8s" }} />
                <div className="absolute bottom-20 right-20 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-fuchsia-500 rounded-full blur-[100px] sm:blur-[120px] animate-pulse" style={{ animationDuration: "10s", animationDelay: "2s" }} />
            </div>

            {/* Back to Home Button */}
            <button
                onClick={() => navigate("/")}
                className="fixed top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6 z-50 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white text-xs sm:text-sm font-semibold backdrop-blur-sm transition-all group"
            >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="hidden sm:inline">Back to Home</span>
                <span className="sm:hidden">Back</span>
            </button>

            {/* Main Booking Container */}
            <div className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl relative z-10">
                {/* Step Indicator */}
                <StepIndicator current={step} />
                
                {/* Booking Card */}
                <div className="p-4 sm:p-6 md:p-8 lg:p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl">
                    {step === 1 && <ServiceStep service={service} setService={setService} next={next} />}
                    {step === 2 && <DateTimeStep date={date} setDate={setDate} time={time} setTime={setTime} taken={taken} next={next} back={back} />}
                    {step === 3 && <DetailsStep {...{ name, setName, email, setEmail, phone, setPhone, notes, setNotes, service, date, time, submit, back, loading, error }} />}
                </div>

                {/* Progress Info - Desktop only */}
                <div className="hidden md:flex items-center justify-center gap-2 mt-6 lg:mt-8 text-white/40 text-xs lg:text-sm">
                    <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>Your information is secure and encrypted</span>
                </div>
            </div>
        </div>
    );
}