import nodemailer from "nodemailer";

const getTransporter = () => {
    if (!process.env.EMAIL || !process.env.EMAIL_PASS) {
        throw new Error("EMAIL or EMAIL_PASS is missing in .env");
    }

    return nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASS,
        },
    });
};

export const sendUserConfirmation = async (booking) => {
    try {
        const transporter = getTransporter();
        await transporter.sendMail({
            from: `"Smart Booking" <${process.env.EMAIL}>`,
            to: booking.email,
            subject: "Appointment Confirmation",
            text: `Hello ${booking.name}, your booking is pending approval.`,
        });
        console.log(`✅ Confirmation email sent to ${booking.email}`);
    } catch (err) {
        console.error("❌ Error sending user confirmation email:", err.message);
    }
};

export const sendAdminNotification = async (booking) => {
    try {
        const transporter = getTransporter();
        await transporter.sendMail({
            from: `"Smart Booking" <${process.env.EMAIL}>`,
            to: process.env.EMAIL,
            subject: "New Booking Received",
            text: `New booking from ${booking.name} on ${booking.date} at ${booking.time}.`,
        });
        console.log(`✅ Admin notified of booking from ${booking.name}`);
    } catch (err) {
        console.error("❌ Error sending admin notification:", err.message);
    }
};

export const sendStatusUpdate = async (booking) => {
    try {
        const transporter = getTransporter();
        await transporter.sendMail({
            from: `"Smart Booking" <${process.env.EMAIL}>`,
            to: booking.email,
            subject: "Booking Status Updated",
            text: `Hello ${booking.name}, your booking has been ${booking.status}.`,
        });
        console.log(`✅ Status update email sent to ${booking.email}`);
    } catch (err) {
        console.error("❌ Error sending status update email:", err.message);
    }
};