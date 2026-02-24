import { useState, useEffect, useCallback } from "react";
import Topbar from "../components/Topbar";
import StatCards from "../components/StatCards";
import BookingTable from "../components/BookingTable";
import Toast from "../components/Toast";
import Loader from "../components/Loader";
import Footer from "../components/Footer";
import { apiFetch } from "../lib/utils";

export default function AdminDashboard({ onLogout }) {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState("all");
    const [toast, setToast] = useState(null);

    const showToast = (message, type = "success") => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 3500);
    };

    const loadBookings = useCallback(async () => {
        setLoading(true);
        try {
            const token = localStorage.getItem("adminToken");
            const data = await apiFetch("/bookings", {
                headers: { Authorization: `Bearer ${token}` },
            });

            setBookings(Array.isArray(data) ? data : data.bookings || []);
        } catch (err) {
            console.error(err);
            setBookings([]);
            showToast("Failed to load bookings", "error");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        loadBookings();
    }, [loadBookings]);

    const handleUpdate = async (id, status) => {
        try {
            const token = localStorage.getItem("adminToken");

            const response = await apiFetch(`/bookings/${id}/status`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ status }),
            });

            setBookings((prev) =>
                prev.map((b) => (b._id === id ? { ...b, status } : b))
            );
            showToast(`Booking ${status}`);
        } catch (err) {
            console.error(err);
            showToast("Failed to update booking", "error");
        }
    };

    const safeBookings = Array.isArray(bookings) ? bookings : [];

    const counts = {
        all: safeBookings.length,
        pending: safeBookings.filter((b) => b.status === "pending").length,
        approved: safeBookings.filter((b) => b.status === "approved").length,
        cancelled: safeBookings.filter((b) => b.status === "cancelled").length,
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#020617] via-slate-900 to-[#020617] flex flex-col">
            <Topbar
                filter={filter}
                onFilter={setFilter}
                counts={counts}
                onLogout={onLogout}
            />

            <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 max-w-[1920px] mx-auto w-full">
                <StatCards bookings={safeBookings} />
                {loading ? (
                    <Loader />
                ) : (
                    <BookingTable
                        bookings={
                            filter === "all"
                                ? safeBookings
                                : safeBookings.filter((b) => b.status === filter)
                        }
                        onUpdate={handleUpdate}
                        onRefresh={loadBookings}
                    />
                )}
            </main>

            <Footer />
            <Toast toast={toast} />
        </div>
    );
}