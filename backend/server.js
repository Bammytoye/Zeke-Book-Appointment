import dotenv from "dotenv";
dotenv.config();

import { setServers } from "node:dns/promises";
setServers(["1.1.1.1", "8.8.8.8"]);

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";


const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

// Middlewares
app.use(cors({
    origin: process.env.NODE_ENV === 'production'
        ? [
            process.env.ADMIN_URL,
            process.env.FRONTEND_URL
        ]
        : ["http://localhost:5175", "http://localhost:5176"],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
    res.send("Booking Appointment Backend Running");
});

app.use("/api/bookings", bookingRoutes);
app.use("/api/auth", authRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () =>
    console.log(`🚀 Server running on port ${PORT}`)
);