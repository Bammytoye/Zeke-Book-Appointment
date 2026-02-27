const API_URL = import.meta.env.VITE_API_URL || "https://zeke-book-appointment-backend.onrender.com/api";

export async function apiFetch(url, options = {}) {
    const res = await fetch(`${API_URL}${url}`, {
        headers: {
            "Content-Type": "application/json",
            ...(options.headers || {}),
        },
        ...options,
    });

    if (!res.ok) {
        const error = await res.json().catch(() => ({}));
        throw new Error(error.message || `API error: ${res.status}`);
    }
    return res.json();
}
export const STATUS_CFG = {
    pending: {
        label: "Pending",
        cls: "bg-yellow-700/20 text-yellow-400 border border-yellow-500/30",
        dot: "bg-yellow-400"
    },
    approved: {
        label: "Approved",
        cls: "bg-green-700/20 text-green-400 border border-green-500/30",
        dot: "bg-green-400"
    },
    cancelled: {
        label: "Cancelled",
        cls: "bg-red-700/20 text-red-400 border border-red-500/30",
        dot: "bg-red-400"
    }
};

// Responsive date formatting
export const fmtDate = (d, format = "full") => {
    const date = new Date(d);

    if (format === "short") {
        // Mobile-friendly"
        return date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric"
        });
    }

    if (format === "medium") {
        // Tablet-friendly"
        return date.toLocaleDateString("en-US", {
            weekday: "long",
            month: "short",
            day: "numeric",
            year: "numeric"
        });
    }

    // Desktop"
    return date.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
    });
};

// Time formatting with 12-hour format
export const fmtTime = (t) => {
    const [h, m] = t.split(":");
    const hr = parseInt(h);
    return `${hr > 12 ? hr - 12 : hr === 0 ? 12 : hr}:${m} ${hr >= 12 ? "PM" : "AM"}`;
};

export const svcLabel = (id) => {
    const services = {
        consultation: "Consultation",
        strategy: "Strategy Session",
        review: "Project Review",
        onboarding: "Onboarding"
    };
    return services[id] || id;
};

export const truncate = (text, length = 30) => {
    if (!text) return "";
    return text.length > length ? text.substring(0, length) + "..." : text;
};

// Check if mobile viewport
export const isMobile = () => window.innerWidth < 640; // sm breakpoint
export const isTablet = () => window.innerWidth >= 640 && window.innerWidth < 1024; // md breakpoint
export const isDesktop = () => window.innerWidth >= 1024; // lg breakpoint