export const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const SERVICES = [
    { id: "consultation", label: "Consultation", duration: "30 min", icon: "💬", desc: "Quick Q&A and expert advice" },
    { id: "strategy", label: "Strategy Session", duration: "60 min", icon: "🎯", desc: "Deep-dive planning session" },
    { id: "review", label: "Project Review", duration: "45 min", icon: "📋", desc: "Audit, feedback & direction" },
    { id: "onboarding", label: "Onboarding Call", duration: "90 min", icon: "🚀", desc: "Get started the right way" },
];

export const TIME_SLOTS = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30", "16:00", "16:30", "17:00",
];

export const fmtDate = (d) =>
    new Date(d + "T00:00:00").toLocaleDateString("en-US", {
        weekday: "long", month: "long", day: "numeric", year: "numeric",
    });

export const fmtDateShort = (d) =>
    new Date(d + "T00:00:00").toLocaleDateString("en-US", {
        weekday: "short", month: "short", day: "numeric",
    });

export const fmtTime = (t) => {
    const [h, m] = t.split(":");
    const hr = parseInt(h);
    return `${hr > 12 ? hr - 12 : hr === 0 ? 12 : hr}:${m} ${hr >= 12 ? "PM" : "AM"}`;
};

export const svcLabel = (id) => SERVICES.find(s => s.id === id)?.label || id;
export const svcIcon = (id) => SERVICES.find(s => s.id === id)?.icon || "📅";
export const svcDur = (id) => SERVICES.find(s => s.id === id)?.duration || "";
export const todayStr = () => new Date().toISOString().split("T")[0];

export async function apiFetch(path, opts = {}) {
    const headers = { "Content-Type": "application/json", ...opts.headers };
    const res = await fetch(`${API_BASE}${path}`, { ...opts, headers });
    const json = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(json.message || "Request failed");
    return json;
}