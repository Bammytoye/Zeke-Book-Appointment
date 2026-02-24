import { useState, useEffect, useCallback } from "react";
import Sidebar from "../components/Sidebar";
import StatCards from "../components/StatCards";
import BookingTable from "../components/BookingTable";
import Toast from "../components/Toast";
import Loader from "../components/Loader";
import { apiFetch } from "../lib/utils";

export default function AdminDashboard({ onLogout }) {
    const [bookings, setBookings] = useState([]); // always array
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

            // Ensure data is an array
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
            await apiFetch(`/bookings/${id}/status`, {
                method: "PATCH",
                body: JSON.stringify({ status }),
                headers: { Authorization: `Bearer ${token}` },
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

    // Always safe: bookings is array
    const safeBookings = Array.isArray(bookings) ? bookings : [];

    const counts = {
        all: safeBookings.length,
        pending: safeBookings.filter((b) => b.status === "pending").length,
        approved: safeBookings.filter((b) => b.status === "approved").length,
        cancelled: safeBookings.filter((b) => b.status === "cancelled").length,
    };

    return (
        <div className="min-h-screen bg-[#020617] flex">
            <Sidebar
                filter={filter}
                onFilter={setFilter}
                counts={counts}
                onLogout={onLogout}
            />
            <main className="flex-1 p-8 ml-60">
                <h1 className="text-2xl text-slate-100 font-bold mb-4">Dashboard</h1>
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
            <Toast toast={toast} />
        </div>
    );
}