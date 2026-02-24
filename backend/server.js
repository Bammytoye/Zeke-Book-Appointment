import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/bookings", bookingRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Booking Appointment Backend Running");
});

// Error middlewares
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () =>
    console.log(`🚀 Server running on port ${PORT}`)
);