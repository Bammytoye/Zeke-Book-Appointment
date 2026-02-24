const errorHandler = (err, req, res, next) => {
    console.error(`❌  ${req.method} ${req.originalUrl} —`, err.message);

    if (err.code === 11000) {
        return res.status(409).json({ message: "This time slot is already booked." });
    }

    if (err.name === "ValidationError") {
        const messages = Object.values(err.errors).map(e => e.message);
        return res.status(400).json({ message: messages.join(". ") });
    }

    if (err.name === "CastError") {
        return res.status(400).json({ message: "Invalid ID format." });
    }

    res.status(err.statusCode || 500).json({
        message: err.message || "Internal server error",
        ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
    });
};

const notFound = (req, res) => {
    res.status(404).json({ message: `Route not found: ${req.method} ${req.originalUrl}` });
};

export { errorHandler, notFound };