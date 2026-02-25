import { useState, useEffect, useCallback } from "react";
import Topbar from "../components/Topbar";
import StatCards from "../components/StatCards";
import BookingTable from "../components/BookingTable";
import Toast from "../components/Toast";
import Loader from "../components/Loader";
import Footer from "../components/Footer";
import DetailModal from "../components/DetailModal";
import ConfirmModal from "../components/ConfirmModal";
import { apiFetch } from "../lib/utils";

export default function AdminDashboard({ onLogout }) {
    const [bookings, setBookings] = useState([]);
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState("all");
    const [toast, setToast] = useState(null);
    const [selectedBooking, setSelectedBooking] = useState(null);
    
    // Modal states
    const [confirmModal, setConfirmModal] = useState({
        isOpen: false,
        type: "danger",
        title: "",
        message: "",
        onConfirm: null,
        bookingId: null
    });
    const [actionLoading, setActionLoading] = useState(false);

    const showToast = (message, type = "success") => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 3500);
    };

    const loadStats = useCallback(async () => {
        try {
            const token = localStorage.getItem("adminToken");
            const data = await apiFetch("/bookings/stats", {
                headers: { Authorization: `Bearer ${token}` },
            });
            setStats(data);
        } catch (err) {
            console.error("Failed to load stats:", err);
        }
    }, []);

    const loadBookings = useCallback(async () => {
        setLoading(true);
        try {
            const token = localStorage.getItem("adminToken");
            const data = await apiFetch("/bookings", {
                headers: { Authorization: `Bearer ${token}` },
            });

            setBookings(Array.isArray(data) ? data : data.bookings || []);
            await loadStats();
        } catch (err) {
            console.error(err);
            setBookings([]);
            showToast("Failed to load bookings", "error");
        } finally {
            setLoading(false);
        }
    }, [loadStats]);

    useEffect(() => {
        loadBookings();
    }, [loadBookings]);

    // Open confirmation modals
    const openDeleteModal = (id, bookingName) => {
        setConfirmModal({
            isOpen: true,
            type: "danger",
            title: "Delete Booking",
            message: `Are you sure you want to permanently delete the booking for "${bookingName}"? This action cannot be undone.`,
            bookingId: id
        });
    };

    const openApproveModal = (id, bookingName) => {
        setConfirmModal({
            isOpen: true,
            type: "success",
            title: "Approve Booking",
            message: `Approve the booking for "${bookingName}"? The customer will be notified via email.`,
            bookingId: id
        });
    };

    const openCancelModal = (id, bookingName) => {
        setConfirmModal({
            isOpen: true,
            type: "warning",
            title: "Cancel Booking",
            message: `Cancel the booking for "${bookingName}"? The customer will be notified via email.`,
            bookingId: id
        });
    };

    // Handle confirmed actions
    const handleConfirmedAction = async () => {
        setActionLoading(true);
        try {
            const token = localStorage.getItem("adminToken");
            const { bookingId, type } = confirmModal;

            if (type === "danger") {
                // Delete
                await apiFetch(`/bookings/${bookingId}`, {
                    method: "DELETE",
                    headers: { Authorization: `Bearer ${token}` },
                });
                setBookings((prev) => prev.filter((b) => b._id !== bookingId));
                showToast("Booking deleted successfully");
            } else {
                // Approve or Cancel
                const status = type === "success" ? "approved" : "cancelled";
                await apiFetch(`/bookings/${bookingId}/status`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify({ status }),
                });
                setBookings((prev) =>
                    prev.map((b) => (b._id === bookingId ? { ...b, status } : b))
                );
                showToast(`Booking ${status} successfully`);
            }

            await loadStats();
            setConfirmModal({ ...confirmModal, isOpen: false });
        } catch (err) {
            console.error(err);
            showToast("Action failed", "error");
        } finally {
            setActionLoading(false);
        }
    };

    const handleViewDetails = async (id) => {
        try {
            const token = localStorage.getItem("adminToken");
            const booking = await apiFetch(`/bookings/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setSelectedBooking(booking);
        } catch (err) {
            console.error(err);
            showToast("Failed to load booking details", "error");
        }
    };

    const safeBookings = Array.isArray(bookings) ? bookings : [];

    const counts = {
        all: stats?.total || safeBookings.length,
        pending: stats?.pending || safeBookings.filter((b) => b.status === "pending").length,
        approved: stats?.approved || safeBookings.filter((b) => b.status === "approved").length,
        cancelled: stats?.cancelled || safeBookings.filter((b) => b.status === "cancelled").length,
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
                <StatCards bookings={safeBookings} stats={stats} />
                {loading ? (
                    <Loader />
                ) : (
                    <BookingTable
                        bookings={
                            filter === "all"
                                ? safeBookings
                                : safeBookings.filter((b) => b.status === filter)
                        }
                        filter={filter}
                        onApprove={openApproveModal}
                        onCancel={openCancelModal}
                        onDelete={openDeleteModal}
                        onViewDetails={handleViewDetails}
                    />
                )}
            </main>

            <Footer />
            <Toast toast={toast} />
            
            {/* Detail Modal */}
            {selectedBooking && (
                <DetailModal
                    booking={selectedBooking}
                    onClose={() => setSelectedBooking(null)}
                    onApprove={() => {
                        setSelectedBooking(null);
                        openApproveModal(selectedBooking._id, selectedBooking.name);
                    }}
                    onCancel={() => {
                        setSelectedBooking(null);
                        openCancelModal(selectedBooking._id, selectedBooking.name);
                    }}
                    filter={filter}
                />
            )}

            {/* Confirmation Modal */}
            <ConfirmModal
                isOpen={confirmModal.isOpen}
                type={confirmModal.type}
                title={confirmModal.title}
                message={confirmModal.message}
                loading={actionLoading}
                onClose={() => setConfirmModal({ ...confirmModal, isOpen: false })}
                onConfirm={handleConfirmedAction}
            />
        </div>
    );
}