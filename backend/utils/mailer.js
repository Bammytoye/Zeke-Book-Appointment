import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
    },
});

export const sendUserConfirmation = booking =>
    transporter.sendMail({
        from: process.env.EMAIL,
        to: booking.email,
        subject: "Appointment Confirmation",
        text: `Hello ${booking.name}, your booking is pending approval.`,
    });

export const sendAdminNotification = booking =>
    transporter.sendMail({
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: "New Booking Received",
        text: `New booking from ${booking.name} on ${booking.date} at ${booking.time}`,
    });

export const sendStatusUpdate = booking =>
    transporter.sendMail({
        from: process.env.EMAIL,
        to: booking.email,
        subject: "Booking Status Updated",
        text: `Your booking has been ${booking.status}.`,
    });