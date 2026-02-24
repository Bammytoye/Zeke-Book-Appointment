import Booking from "../models/Booking.js";
import { validateBooking } from "../utils/validate.js";
import { sendUserConfirmation, sendAdminNotification, sendStatusUpdate } from "../utils/mailer.js";

// PUBLIC
export const createBooking = async (req, res, next) => {
    try {
        const { name, email, phone, notes, service, date, time } = req.body;

        const error = validateBooking({ name, email, service, date, time });
        if (error) return res.status(400).json({ message: error });

        const existing = await Booking.findOne({ date, time, status: { $ne: "cancelled" } });
        if (existing) return res.status(409).json({ message: "Time slot already booked" });

        const booking = await Booking.create({ name, email, phone, notes, service, date, time });

        // Fire-and-forget emails
        sendUserConfirmation(booking).catch(console.error);
        sendAdminNotification(booking).catch(console.error);

        res.status(201).json(booking);
    } catch (err) {
        next(err);
    }
};

export const getAvailability = async (req, res, next) => {
    try {
        const { date } = req.query;
        if (!date) return res.status(400).json({ message: "Date query required" });

        const bookings = await Booking.find({ date, status: { $ne: "cancelled" } }, "time");
        const taken = bookings.map(b => b.time);
        res.json({ date, taken });
    } catch (err) {
        next(err);
    }
};

// ADMIN
export const getBookings = async (req, res, next) => {
    try {
        const { status, search, date, limit = 200, skip = 0 } = req.query;
        const query = {};

        if (status && status !== "all") query.status = status;
        if (date) query.date = date;
        if (search) query.$or = [
            { name: { $regex: search, $options: "i" } },
            { email: { $regex: search, $options: "i" } }
        ];

        const [bookings, total] = await Promise.all([
            Booking.find(query).sort({ createdAt: -1 }).limit(parseInt(limit)).skip(parseInt(skip)),
            Booking.countDocuments(query)
        ]);

        res.json({ bookings, total });
    } catch (err) {
        next(err);
    }
};

export const getBookingById = async (req, res, next) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) return res.status(404).json({ message: "Booking not found" });
        res.json(booking);
    } catch (err) {
        next(err);
    }
};

export const updateBookingStatus = async (req, res, next) => {
    try {
        const { status } = req.body;
        if (!["approved", "cancelled"].includes(status)) return res.status(400).json({ message: "Invalid status" });

        const booking = await Booking.findByIdAndUpdate(req.params.id, { status }, { new: true });
        if (!booking) return res.status(404).json({ message: "Booking not found" });

        sendStatusUpdate(booking).catch(console.error);
        res.json(booking);
    } catch (err) {
        next(err);
    }
};

export const deleteBooking = async (req, res, next) => {
    try {
        const booking = await Booking.findByIdAndDelete(req.params.id);
        if (!booking) return res.status(404).json({ message: "Booking not found" });
        res.json({ message: "Booking deleted", id: req.params.id });
    } catch (err) {
        next(err);
    }
};

export const getStats = async (req, res, next) => {
    try {
        const today = new Date().toISOString().split("T")[0];
        const [counts, todayCount] = await Promise.all([
            Booking.aggregate([{ $group: { _id: "$status", count: { $sum: 1 } } }]),
            Booking.countDocuments({ date: today })
        ]);

        const stats = { total: 0, pending: 0, approved: 0, cancelled: 0, today: todayCount };
        counts.forEach(c => { stats[c._id] = c.count; stats.total += c.count; });

        res.json(stats);
    } catch (err) {
        next(err);
    }
};