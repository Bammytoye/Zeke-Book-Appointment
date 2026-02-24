import { useState, useEffect } from "react";
import StepIndicator from "../components/StepIndicator";
import ServiceStep from "../components/ServiceStep";
import DateTimeStep from "../components/DateTimeStep";
import DetailsStep from "../components/DetailsStep";
import SuccessScreen from "../components/SuccessScreen";
import { apiFetch } from "../lib/utils";

export default function BookingPage() {
    const [step, setStep] = useState(1);
    const [service, setService] = useState(null);
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
        <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] relative overflow-hidden">
            <StepIndicator current={step} />
            <div className="max-w-2xl mx-auto p-8 bg-white/5 border border-white/10 rounded-3xl shadow-2xl">
                {step === 1 && <ServiceStep service={service} setService={setService} next={next} />}
                {step === 2 && <DateTimeStep date={date} setDate={setDate} time={time} setTime={setTime} taken={taken} next={next} back={back} />}
                {step === 3 && <DetailsStep {...{ name, setName, email, setEmail, phone, setPhone, notes, setNotes, service, date, time, submit, back, loading, error }} />}
            </div>
        </div>
    );
}