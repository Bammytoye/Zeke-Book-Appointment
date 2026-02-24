import { useState, useEffect, useCallback } from "react";
import { apiFetch, DEMO_BOOKINGS } from "../lib/utils";

export default function useBookings() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState("all");

    const load = useCallback(async () => {
        setLoading(true);
        try {
            const data = await apiFetch("/bookings");
            setBookings(data);
        } catch {
            setBookings(DEMO_BOOKINGS);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        load();
    }, [load]);

    const handleUpdate = async (id, status) => {
        try {
            await apiFetch(`/bookings/${id}/status`, {
                method: "PATCH",
                body: JSON.stringify({ status }),
            });
        } catch { }

        setBookings((prev) =>
            prev.map((b) =>
                b._id === id ? { ...b, status } : b
            )
        );
    };

    const counts = {
        all: bookings.length,
        pending: bookings.filter((b) => b.status === "pending").length,
        approved: bookings.filter((b) => b.status === "approved").length,
        cancelled: bookings.filter((b) => b.status === "cancelled").length,
    };

    return {
        bookings,
        loading,
        filter,
        setFilter,
        counts,
        handleUpdate,
        load,
    };
}