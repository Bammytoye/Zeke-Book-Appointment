import express from "express";
import protectAdmin from "../middleware/protectAdmin.js";
import {
    createBooking,
    getBookings,
    getBookingById,
    updateBookingStatus,
    deleteBooking,
    getAvailability,
    getStats
} from "../controllers/bookingController.js";

const router = express.Router();

// Public
router.get("/availability", getAvailability);
router.post("/", createBooking);

// Admin
router.get("/", protectAdmin, getBookings);
router.get("/stats", protectAdmin, getStats);
router.get("/:id", protectAdmin, getBookingById);
router.patch("/:id/status", protectAdmin, updateBookingStatus);
router.delete("/:id", protectAdmin, deleteBooking);

export default router;